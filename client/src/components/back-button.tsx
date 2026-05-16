import React from 'react';
import { Button } from '@/components/ui/button';
import { Icon } from '@/components/ui/icons';
import { motion } from 'framer-motion';
import { isWebStaticMode } from '@/lib/webApi/install';

interface BackButtonProps {
  onClick: () => void;
  text?: string;
}

export function BackButton({ onClick, text = 'Back' }: BackButtonProps) {
  const webMode = isWebStaticMode();
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.3 }}
    >
      <Button
        variant="ghost"
        className={
          webMode
            ? 'web-back-btn mb-4 flex items-center rounded-full border border-slate-200 bg-white text-black shadow-sm hover:bg-slate-100'
            : 'flex items-center text-white hover:bg-white/20'
        }
        onClick={onClick}
      >
        <Icon name="arrow_back" className="mr-1" />
        {text}
      </Button>
    </motion.div>
  );
}