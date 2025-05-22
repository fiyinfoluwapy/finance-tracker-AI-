import { NextResponse } from 'next/server'

export async function POST(req) {
  try {
    const { messages } = await req.json()

    // ✅ Log the received messages
    console.log('📥 Received messages from client:', JSON.stringify(messages, null, 2))

    // ✅ Validate the messages array
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

    const apiKey = process.env.OPENAI_API_KEY
    if (!apiKey) {
      console.error('❌ Missing OpenAI API key in environment variables')
      return NextResponse.json({ error: 'Missing API Key' }, { status: 500 })
    }

    const payload = {
      model: 'gpt-3.5-turbo',
      messages,
      temperature: 0.7,
      max_tokens: 500,
    }

    // ✅ Log the payload to be sent to OpenAI
    console.log('📤 Sending payload to OpenAI:', JSON.stringify(payload, null, 2))

    const openaiRes = await fetch('https://api.openai.com/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${apiKey}`,
      },
      body: JSON.stringify(payload),
    })

    const data = await openaiRes.json()

    // ✅ Log OpenAI's raw response
    console.log('📨 Received response from OpenAI:', JSON.stringify(data, null, 2))

    if (!openaiRes.ok) {
      console.error('❌ OpenAI API Error:', data?.error)
      return NextResponse.json(
        { error: data?.error?.message || 'OpenAI request failed.' },
        { status: openaiRes.status }
      )
    }

    const reply = data.choices?.[0]?.message?.content?.trim() || 'No response received.'

    return NextResponse.json({ reply })
  } catch (error) {
    console.error('🔥 Server Error:', error)
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 })
  }
}
