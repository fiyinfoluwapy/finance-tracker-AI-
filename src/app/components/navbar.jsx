'use client';

import { useState, useRef, useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

export default function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);
    const menuRef = useRef(null);
    const buttonRef = useRef(null);

    // Close menu when clicking outside
    useEffect(() => {
        const handleClickOutside = (e) => {
            if (
                menuRef.current &&
                !menuRef.current.contains(e.target) &&
                buttonRef.current &&
                !buttonRef.current.contains(e.target)
            ) {
                setMenuOpen(false);
            }
        };

        if (menuOpen) {
            document.addEventListener('mousedown', handleClickOutside);
        }

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [menuOpen]);

    // Lock scroll when menu is open
    useEffect(() => {
        if (menuOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }

        return () => {
            document.body.style.overflow = '';
        };
    }, [menuOpen]);

    return (
        <nav className="bg-[#0E4574] text-white shadow-md fixed top-0 left-0 right-0 z-50">
            <div className="flex justify-between items-center px-4 py-3 md:py-4">
                <a href="/" className="flex items-center space-x-2 text-xl font-bold">
                    <img
                        src="/icons/purse.png" 
                        alt="MoneyMind Logo"
                        className="w-6 h-6 md:w-8 md:h-8 object-contain"
                    />
                    <span>MoneyMind</span>
                </a>


                {/* Desktop Menu */}
                <div className="hidden md:flex space-x-6">
                    <a href="#dashboard" className="hover:text-[#AF7812]">Dashboard</a>
                    <a href="#expenses" className="hover:text-[#AF7812]">Expenses</a>
                    <a href="#income" className="hover:text-[#AF7812]">Income</a>
                    <a href="#reports" className="hover:text-[#AF7812]">Reports</a>
                    <a href="#settings" className="hover:text-[#AF7812]">Settings</a>
                </div>

                {/* Mobile Hamburger Button */}
                <div className="md:hidden" ref={buttonRef}>
                    <button
                        onClick={() => setMenuOpen(!menuOpen)}
                        className="focus:outline-none"
                        aria-label="Toggle menu"
                    >
                        <img
                            src={menuOpen ? '/icons/close.png' : '/icons/menu.png'}
                            alt={menuOpen ? 'Close menu' : 'Open menu'}
                            className="w-10 h-10 object-contain drop-shadow"
                            onError={(e) => {
                                e.target.onerror = null;
                                // e.target.src = '/fallback-icon.png'; // Optional fallback
                            }}
                        />

                    </button>
                </div>
            </div>

            {/* Mobile Menu with animation */}
            <AnimatePresence>
                {menuOpen && (
                    <>


                        {/* Dropdown Menu */}
                        <motion.div
                            ref={menuRef}
                            initial={{ opacity: 0, y: -15 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -10 }}
                            transition={{ duration: 0.2 }}
                            className="absolute top-16 left-0 right-0 bg-[#0E4574] z-20 px-4 py-4 space-y-4 text-sm md:hidden"
                        >
                            <a href="#dashboard" className="block hover:text-[#AF7812]">Dashboard</a>
                            <a href="#expenses" className="block hover:text-[#AF7812]">Expenses</a>
                            <a href="#income" className="block hover:text-[#AF7812]">Income</a>
                            <a href="#reports" className="block hover:text-[#AF7812]">Reports</a>
                            <a href="#settings" className="block hover:text-[#AF7812]">Settings</a>
                        </motion.div>
                    </>
                )}
            </AnimatePresence>
        </nav>
    );
}
