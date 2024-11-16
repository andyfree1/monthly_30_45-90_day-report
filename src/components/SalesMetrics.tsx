import React from 'react';
import { DollarSign, Users, Percent, Target } from 'lucide-react';
import type { SalesTotals } from '../types/sales';

const formatCurrency = (amount: number) => {
  const roundedAmount = Math.round(amount * 100) / 100;
  return roundedAmount.toLocaleString('en-US', {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2
  });
};

export default function SalesMetrics({
  totalTours,
  totalVolume,
  totalCommission,
  activeSales,
  cancelledSales,
  deedSales,
  trustSales,
  monthlyVPG,
  totalFDIPoints,
  totalFDIGivenPoints,
  totalFDICost
}: SalesTotals) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
      <div className="bg-white rounded-lg shadow p-4">
        <div className="flex items-center">
          <div className="flex-shrink-0">
            <Users className="h-8 w-8 text-indigo-600" />
          </div>
          <div className="ml-4">
            <h3 className="text-lg font-medium text-gray-900">Tours</h3>
            <p className="text-2xl font-semibold text-indigo-600">{totalTours}</p>
          </div>
        </div>
      </div>
      
      <div className="bg-white rounded-lg shadow p-4">
        <div className="flex items-center">
          <div className="flex-shrink-0">
            <DollarSign className="h-8 w-8 text-emerald-600" />
          </div>
          <div className="ml-4">
            <h3 className="text-lg font-medium text-gray-900">Volume</h3>
            <p className="text-2xl font-semibold text-emerald-600">
              ${formatCurrency(totalVolume)}
            </p>
          </div>
        </div>
      </div>
      
      <div className="bg-white rounded-lg shadow p-4">
        <div className="flex items-center">
          <div className="flex-shrink-0">
            <Target className="h-8 w-8 text-amber-600" />
          </div>
          <div className="ml-4">
            <h3 className="text-lg font-medium text-gray-900">Daily VPG</h3>
            <p className="text-2xl font-semibold text-amber-600">
              ${formatCurrency(monthlyVPG)}
            </p>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow p-4">
        <div className="flex items-center">
          <div className="flex-shrink-0">
            <Percent className="h-8 w-8 text-purple-600" />
          </div>
          <div className="ml-4">
            <h3 className="text-lg font-medium text-gray-900">Commission</h3>
            <p className="text-2xl font-semibold text-purple-600">
              ${formatCurrency(totalCommission)}
            </p>
          </div>
        </div>
      </div>

      <div className="col-span-4 bg-white rounded-lg shadow p-4">
        <div className="grid grid-cols-5 gap-4">
          <div className="text-center">
            <span className="text-sm text-gray-500">Active Sales</span>
            <p className="text-lg font-semibold text-green-600">{activeSales}</p>
          </div>
          <div className="text-center">
            <span className="text-sm text-gray-500">Cancelled</span>
            <p className="text-lg font-semibold text-red-600">{cancelledSales}</p>
          </div>
          <div className="text-center">
            <span className="text-sm text-gray-500">DEED Sales</span>
            <p className="text-lg font-semibold text-blue-600">{deedSales}</p>
          </div>
          <div className="text-center">
            <span className="text-sm text-gray-500">TRUST Sales</span>
            <p className="text-lg font-semibold text-purple-600">{trustSales}</p>
          </div>
          <div className="text-center">
            <span className="text-sm text-gray-500">Monthly VPG</span>
            <p className="text-lg font-semibold text-amber-600">${formatCurrency(monthlyVPG)}</p>
          </div>
        </div>
      </div>
    </div>
  );
}