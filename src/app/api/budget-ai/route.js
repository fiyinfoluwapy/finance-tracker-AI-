// src/app/api/budget-ai/route.js
import { NextResponse } from 'next/server'

export async function POST(req) {
  try {
    const { messages } = await req.json()

    console.log('📥 Received messages from client:', JSON.stringify(messages, null, 2))

    // Validate the message format
    if (
      !Array.isArray(messages) ||
      messages.length === 0 ||
      messages.some(
        (m) =>
          typeof m !== 'object' ||
          !m.role ||
          !['user', 'assistant', 'system'].includes(m.role) ||
          typeof m.content !== 'string'
      )
    ) {
      console.error('❌ Invalid message format:', messages)
      return NextResponse.json({ error: 'Invalid messages format' }, { status: 400 })
    }

    const apiKey = process.env.HUGGINGFACE_API_KEY
    if (!apiKey) {
      console.error('❌ Missing Hugging Face API key in environment variables')
      return NextResponse.json({ error: 'Missing API Key' }, { status: 500 })
    }

    // Get the most recent user message
    const latestUserMessage = messages
      .filter((m) => m.role === 'user')
      .pop()?.content || 'Hello!'

    const payload = {
      inputs: latestUserMessage,
      parameters: {
        temperature: 0.7,
        max_new_tokens: 250,
      },
    }

    console.log('📤 Sending payload to Hugging Face:', JSON.stringify(payload, null, 2))

    // Use a valid Hugging Face model
    const hfRes = await fetch(
      'https://api-inference.huggingface.co/models/HuggingFaceH4/zephyr-7b-beta', // ✅ updated from alpha
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${apiKey}`,
        },
        body: JSON.stringify(payload),
      }
    )

    const contentType = hfRes.headers.get('content-type') || ''
    const rawText = await hfRes.text()

    if (!hfRes.ok) {
      console.error('❌ Hugging Face API Error:', rawText)
      return NextResponse.json({ error: rawText }, { status: hfRes.status })
    }

    let data
    try {
      data = contentType.includes('application/json')
        ? JSON.parse(rawText)
        : { generated_text: rawText }
    } catch (err) {
      console.error('❌ JSON parse error:', err)
      return NextResponse.json({ error: 'Invalid JSON response from Hugging Face' }, { status: 500 })
    }

    console.log('📨 Received response from Hugging Face:', JSON.stringify(data, null, 2))

    const reply =
      data.generated_text ||
      data[0]?.generated_text ||
      data[0]?.output ||
      'No response received.'

    return NextResponse.json({ reply: reply.trim() })
  } catch (error) {
    console.error('🔥 Server Error:', error)
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 })
  }
}
