import React from 'react';
import { motion } from 'framer-motion';
import {
  ShoppingCartIcon,
  HomeIcon,
  UtilityPoleIcon,
  SmileIcon,
  CarIcon,
  ShoppingBagIcon,
  HeartPulseIcon,
  GraduationCapIcon,
  BriefcaseIcon,
  TrendingUpIcon,
  GiftIcon,
  MoreHorizontalIcon,
} from 'lucide-react';

const getCategoryIcon = (category) => {
  const iconProps = { size: 20, className: "text-blue-600" }; // set color and size
  switch (category) {
    case 'Food':
      return <ShoppingCartIcon {...iconProps} />;
    case 'Rent':
      return <HomeIcon {...iconProps} />;
    case 'Utilities':
      return <UtilityPoleIcon {...iconProps} />;
    case 'Entertainment':
      return <SmileIcon {...iconProps} />;
    case 'Transportation':
      return <CarIcon {...iconProps} />;
    case 'Shopping':
      return <ShoppingBagIcon {...iconProps} />;
    case 'Healthcare':
      return <HeartPulseIcon {...iconProps} />;
    case 'Education':
      return <GraduationCapIcon {...iconProps} />;
    case 'Salary':
      return <BriefcaseIcon {...iconProps} />;
    case 'Investment':
      return <TrendingUpIcon {...iconProps} />;
    case 'Gift':
      return <GiftIcon {...iconProps} />;
    default:
      return <MoreHorizontalIcon {...iconProps} />;
  }
};


const formatDate = (date) => {
  return new Date(date).toLocaleDateString('en-US', {
    month: 'short',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
  });
};

const TransactionList = ({ transactions }) => {
  return (
    <motion.div
      className="bg-white rounded-2xl p-6"
      style={{
        boxShadow:
          '9px 9px 16px rgb(163,177,198,0.6), -9px -9px 16px rgba(255,255,255, 0.5)',
      }}
      whileHover={{
        boxShadow:
          '12px 12px 20px rgb(163,177,198,0.7), -12px -12px 20px rgba(255,255,255, 0.8)',
      }}
      transition={{ duration: 0.3 }}
    >
      <h2 className="text-xl font-semibold mb-4 text-gray-800">
        Transaction History
      </h2>

      {transactions.length === 0 ? (
        <div className="text-center py-8 text-gray-500">
          No transactions yet. Add your first one!
        </div>
      ) : (
        <div className="space-y-3">
          {transactions.map((transaction, index) => (
            <motion.div
              key={transaction.id}
              className="flex items-center p-3 rounded-lg bg-gray-50"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
            >
              <div className="p-2 rounded-full bg-gray-200 mr-3">
                {getCategoryIcon(transaction.category)}
              </div>
              <div className="flex-grow">
                <div className="font-medium text-gray-800">
                  {transaction.description}
                </div>
                <div className="text-sm text-gray-500">
                  {transaction.category} • {formatDate(transaction.date)}
                </div>
              </div>
              <div
                className={`font-semibold ${
                  transaction.amount >= 0
                    ? 'text-green-600'
                    : 'text-red-600'
                }`}
              >
                {transaction.amount >= 0 ? '+' : ''}
                {transaction.amount.toFixed(2)}
              </div>
            </motion.div>
          ))}
        </div>
      )}
    </motion.div>
  );
};

export default TransactionList;
