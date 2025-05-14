'use client';

import { motion, AnimatePresence } from 'framer-motion';

const menuVariants = {
  hidden: { opacity: 0, height: 0, transition: { duration: 0.3 } },
  visible: { opacity: 1, height: 'auto', transition: { duration: 0.3 } },
};

export default function DropdownMenu({ isOpen, onClose }) {
  const handleLinkClick = () => {
    if (onClose) onClose(); // Close menu when a link is clicked
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="md:hidden bg-[#0E4574] text-white px-4 py-4 space-y-4"
          initial="hidden"
          animate="visible"
          exit="hidden"
          variants={menuVariants}
        >
          <a href="#dashboard" onClick={handleLinkClick} className="block">Dashboard</a>
          <a href="#expenses" onClick={handleLinkClick} className="block">Expenses</a>
          <a href="#income" onClick={handleLinkClick} className="block">Income</a>
          <a href="#reports" onClick={handleLinkClick} className="block">Reports</a>
          <a href="#settings" onClick={handleLinkClick} className="block">Settings</a>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
