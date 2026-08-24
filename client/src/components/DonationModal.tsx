import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Heart, Coffee, Gift, Sparkles } from 'lucide-react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

interface DonationModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const donationTiers = [
  {
    id: 'coffee',
    icon: Coffee,
    amount: 3,
    currency: '€',
    label: 'Buy us a coffee',
    description: 'Support our daily work',
    color: 'from-amber-500 to-orange-500',
  },
  {
    id: 'supporter',
    icon: Heart,
    amount: 10,
    currency: '€',
    label: 'Become a Supporter',
    description: 'Help us grow',
    color: 'from-pink-500 to-rose-500',
  },
  {
    id: 'premium',
    icon: Sparkles,
    amount: 25,
    currency: '€',
    label: 'Premium Supporter',
    description: 'Unlock future features',
    color: 'from-purple-500 to-indigo-500',
  },
];

export const DonationModal: React.FC<DonationModalProps> = ({ isOpen, onClose }) => {
  const [selectedTier, setSelectedTier] = useState<string | null>(null);
  const [customAmount, setCustomAmount] = useState('');

  const handleDonate = (tierId: string) => {
    setSelectedTier(tierId);
    console.log('Donate:', tierId);
    alert('Thank you for your support! Payment integration coming soon.');
  };

  const handleCustomDonate = () => {
    if (customAmount && parseFloat(customAmount) > 0) {
      console.log('Custom donation:', customAmount);
      alert('Thank you for your support! Payment integration coming soon.');
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2 text-2xl">
            <motion.div
              animate={{ rotate: [0, -10, 10, -10, 0] }}
              transition={{ duration: 0.5, repeat: Infinity, repeatDelay: 3 }}
            >
              <Heart className="w-6 h-6 text-rose-500" fill="currentColor" />
            </motion.div>
            <span className="bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
              Support ILMBUDS
            </span>
          </DialogTitle>
        </DialogHeader>

        <div className="space-y-6 py-4">
          {/* Sadaqah Jariyah Message */}
          <Card className="bg-gradient-to-br from-emerald-50 to-teal-50 dark:from-emerald-900/20 dark:to-teal-900/20 border-emerald-200 dark:border-emerald-800">
            <CardContent className="p-6">
              <div className="flex items-start gap-4">
                <div className="bg-emerald-500 text-white rounded-full p-3 flex-shrink-0">
                  <Gift className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-bold text-lg text-emerald-900 dark:text-emerald-100 mb-2">
                    صَدَقَةٌ جَارِيَةٌ - Sadaqah Jariyah
                  </h3>
                  <p className="text-emerald-800 dark:text-emerald-200 text-sm leading-relaxed">
                    When a person dies, their deeds come to an end except for three: ongoing charity (Sadaqah Jariyah), beneficial knowledge, or a righteous child who prays for them. Your support helps thousands of children learn about Islam.
                  </p>
                  <p className="text-emerald-700 dark:text-emerald-300 text-xs mt-2 italic">
                    — Sahih Muslim 1631
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Donation Tiers */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {donationTiers.map((tier) => {
              const Icon = tier.icon;
              return (
                <motion.div
                  key={tier.id}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Card 
                    className={`
                      relative overflow-hidden cursor-pointer transition-all
                      ${selectedTier === tier.id ? 'ring-2 ring-emerald-500 shadow-lg' : 'hover:shadow-md'}
                    `}
                    onClick={() => handleDonate(tier.id)}
                  >
                    <div className={`absolute inset-0 bg-gradient-to-br ${tier.color} opacity-10`} />
                    <CardContent className="p-6 relative z-10">
                      <div className="flex flex-col items-center text-center space-y-3">
                        <div className={`bg-gradient-to-br ${tier.color} text-white rounded-full p-4`}>
                          <Icon className="w-6 h-6" />
                        </div>
                        <div>
                          <div className="text-2xl font-bold">
                            {tier.amount}{tier.currency}
                          </div>
                          <div className="font-semibold text-gray-900 dark:text-gray-100">
                            {tier.label}
                          </div>
                          <div className="text-sm text-gray-600 dark:text-gray-400">
                            {tier.description}
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </div>

          {/* Custom Amount */}
          <Card>
            <CardContent className="p-6">
              <h4 className="font-semibold mb-3">Custom Amount</h4>
              <div className="flex gap-2">
                <input
                  type="number"
                  min="1"
                  step="1"
                  value={customAmount}
                  onChange={(e) => setCustomAmount(e.target.value)}
                  placeholder="Enter amount in €"
                  className="flex-1 px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent bg-white dark:bg-slate-800"
                />
                <Button
                  onClick={handleCustomDonate}
                  className="bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-600 hover:to-teal-700"
                  disabled={!customAmount || parseFloat(customAmount) <= 0}
                >
                  Donate
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Why Support */}
          <div className="bg-gray-50 dark:bg-slate-800 rounded-lg p-4">
            <h4 className="font-semibold mb-2 text-sm">
              Why Support Us?
            </h4>
            <ul className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
              <li className="flex items-start gap-2">
                <span className="text-emerald-500">✓</span>
                <span>Keep ILMBUDS 100% free for all children</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-emerald-500">✓</span>
                <span>Add more languages and content</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-emerald-500">✓</span>
                <span>Improve app performance and features</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-emerald-500">✓</span>
                <span>Reach more Muslim families worldwide</span>
              </li>
            </ul>
          </div>

          {/* Payment Note */}
          <p className="text-xs text-center text-gray-500 dark:text-gray-400">
            Secure payment processing via Stripe/PayPal (coming soon)
          </p>
        </div>
      </DialogContent>
    </Dialog>
  );
};
