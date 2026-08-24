import React from 'react';
import { useLocation } from 'wouter';
import { motion } from 'framer-motion';
import { Home, BookOpen, Brain, Gamepad2, Settings } from 'lucide-react';
import { useTranslation } from '@/hooks/use-translation';
import { playSound } from '@/lib/sounds';

interface NavItem {
  id: string;
  path: string;
  icon: React.ReactNode;
  label: string;
}

export const BottomNavBar: React.FC = () => {
  const [location, setLocation] = useLocation();
  const { t } = useTranslation();

  const navItems: NavItem[] = [
    {
      id: 'home',
      path: '/',
      icon: <Home className="w-5 h-5" />,
      label: t('home') || 'Home',
    },
    {
      id: 'stories',
      path: '/stories',
      icon: <BookOpen className="w-5 h-5" />,
      label: t('stories') || 'Stories',
    },
    {
      id: 'quiz',
      path: '/quiz-categories',
      icon: <Brain className="w-5 h-5" />,
      label: t('quiz') || 'Quiz',
    },
    {
      id: 'games',
      path: '/mini-games',
      icon: <Gamepad2 className="w-5 h-5" />,
      label: t('games') || 'Games',
    },
    {
      id: 'settings',
      path: '/settings',
      icon: <Settings className="w-5 h-5" />,
      label: t('settings') || 'Settings',
    },
  ];

  const handleNavClick = (path: string) => {
    playSound('click');
    setLocation(path);
  };

  const isActive = (path: string) => {
    if (path === '/') return location === '/';
    return location.startsWith(path);
  };

  return (
    <nav 
      className="fixed bottom-0 left-0 right-0 z-40 bg-white dark:bg-slate-900 border-t border-gray-200 dark:border-slate-700 shadow-lg md:hidden"
      role="navigation"
      aria-label="Bottom navigation"
    >
      <div className="flex items-center justify-around h-16 px-2">
        {navItems.map((item) => {
          const active = isActive(item.path);
          
          return (
            <button
              key={item.id}
              onClick={() => handleNavClick(item.path)}
              className={`
                relative flex flex-col items-center justify-center gap-1 
                px-3 py-2 rounded-lg transition-all duration-200
                ${active 
                  ? 'text-emerald-600 dark:text-emerald-400' 
                  : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-200'
                }
              `}
              aria-label={item.label}
              aria-current={active ? 'page' : undefined}
            >
              {/* Active indicator */}
              {active && (
                <motion.div
                  layoutId="activeTab"
                  className="absolute inset-0 bg-emerald-50 dark:bg-emerald-900/20 rounded-lg"
                  transition={{ type: 'spring', bounce: 0.2, duration: 0.6 }}
                />
              )}

              {/* Icon with scale animation */}
              <motion.div
                className="relative z-10"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                {item.icon}
              </motion.div>

              {/* Label */}
              <span className={`
                relative z-10 text-xs font-medium
                ${active ? 'font-bold' : ''}
              `}>
                {item.label}
              </span>

              {/* Active dot indicator */}
              {active && (
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  className="absolute -top-1 w-1 h-1 bg-emerald-500 rounded-full"
                />
              )}
            </button>
          );
        })}
      </div>

      {/* Safe area for iPhone notch */}
      <div className="h-safe-area-inset-bottom" />
    </nav>
  );
};
