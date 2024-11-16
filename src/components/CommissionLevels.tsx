import React from 'react';
import { Target } from 'lucide-react';
import { COMMISSION_LEVELS, getBaseCommission } from '../types/sales';

interface CommissionLevelsProps {
  currentVolume: number;
}

export default function CommissionLevels({ currentVolume }: CommissionLevelsProps) {
  const getCurrentLevel = () => {
    return COMMISSION_LEVELS.find(
      level => currentVolume >= level.minAmount && currentVolume <= level.maxAmount
    );
  };

  const currentLevel = getCurrentLevel();

  return (
    <div className="bg-white rounded-lg shadow p-6 mb-6">
      <div className="flex items-center mb-4">
        <Target className="h-6 w-6 text-indigo-600 mr-2" />
        <h2 className="text-xl font-semibold">Commission Structure</h2>
      </div>

      <div className="mb-6 p-4 bg-indigo-50 rounded-lg border border-indigo-100">
        <h3 className="text-lg font-medium text-indigo-900 mb-4">Base Commission Rates</h3>
        <div className="space-y-2 mb-4">
          <div className="flex justify-between text-sm">
            <span className="text-indigo-700">Under $20,000:</span>
            <span className="font-medium text-indigo-900">4%</span>
          </div>
          <div className="flex justify-between text-sm">
            <span className="text-indigo-700">$20,000 - $49,999:</span>
            <span className="font-medium text-indigo-900">5%</span>
          </div>
          <div className="flex justify-between text-sm">
            <span className="text-indigo-700">$50,000 and above:</span>
            <span className="font-medium text-indigo-900">6%</span>
          </div>
        </div>

        {currentLevel && (
          <>
            <h3 className="text-lg font-medium text-indigo-900 mb-2">Current Volume Level: {currentLevel.level}</h3>
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span className="text-indigo-700">Additional Commission:</span>
                <span className="font-medium text-indigo-900">+{currentLevel.additionalCommission}%</span>
              </div>
            </div>
            {currentLevel.level < 8 && (
              <div className="mt-4 text-sm text-indigo-600">
                Next level: ${(COMMISSION_LEVELS[currentLevel.level].minAmount - currentVolume).toLocaleString()} more in sales
              </div>
            )}
          </>
        )}
      </div>

      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200">
          <thead>
            <tr>
              <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase">Level</th>
              <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase">Volume Range</th>
              <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase">Additional Commission</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {COMMISSION_LEVELS.map((level) => (
              <tr 
                key={level.level}
                className={currentLevel?.level === level.level ? 'bg-indigo-50' : ''}
              >
                <td className="px-4 py-2 text-sm font-medium">
                  {level.level}
                </td>
                <td className="px-4 py-2 text-sm">
                  ${level.minAmount.toLocaleString()} - ${level.maxAmount.toLocaleString()}
                </td>
                <td className="px-4 py-2 text-sm">
                  +{level.additionalCommission}%
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}