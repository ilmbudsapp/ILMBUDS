import React from 'react';
import { useTheme } from '@/hooks/useTheme';
import { Icon } from '@/components/ui/icons';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

export function ThemeToggle() {
  const { theme, setTheme, isDarkMode } = useTheme();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button 
          variant="ghost" 
          size="sm" 
          className="h-9 w-9 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20 transition-all duration-300"
          aria-label="Toggle theme"
        >
          {isDarkMode ? (
            <Icon name="dark_mode" className="text-white text-lg" />
          ) : (
            <Icon name="light_mode" className="text-white text-lg" />
          )}
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent 
        align="end" 
        className="glass-container min-w-[160px]"
      >
        <DropdownMenuItem 
          onClick={() => setTheme('light')}
          className={`flex items-center gap-2 ${theme === 'light' ? 'bg-primary/10' : ''}`}
        >
          <Icon name="light_mode" className="text-sm" />
          <span className="text-responsive-sm">Light</span>
          {theme === 'light' && <Icon name="check" className="text-xs ml-auto text-primary" />}
        </DropdownMenuItem>
        <DropdownMenuItem 
          onClick={() => setTheme('dark')}
          className={`flex items-center gap-2 ${theme === 'dark' ? 'bg-primary/10' : ''}`}
        >
          <Icon name="dark_mode" className="text-sm" />
          <span className="text-responsive-sm">Dark</span>
          {theme === 'dark' && <Icon name="check" className="text-xs ml-auto text-primary" />}
        </DropdownMenuItem>
        <DropdownMenuItem 
          onClick={() => setTheme('system')}
          className={`flex items-center gap-2 ${theme === 'system' ? 'bg-primary/10' : ''}`}
        >
          <Icon name="computer" className="text-sm" />
          <span className="text-responsive-sm">System</span>
          {theme === 'system' && <Icon name="check" className="text-xs ml-auto text-primary" />}
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

// Simple toggle version for mobile
export function ThemeToggleSimple() {
  const { toggleDarkMode, isDarkMode } = useTheme();

  return (
    <Button 
      variant="ghost" 
      size="sm" 
      onClick={toggleDarkMode}
      className="h-9 w-9 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20 transition-all duration-300 hover-lift"
      aria-label="Toggle theme"
    >
      {isDarkMode ? (
        <Icon name="light_mode" className="text-white text-lg animate-scale-in" />
      ) : (
        <Icon name="dark_mode" className="text-white text-lg animate-scale-in" />
      )}
    </Button>
  );
}
