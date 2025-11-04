'use client';

import { useState, useEffect } from 'react';
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { useRouter, useParams } from 'next/navigation';
import Link from 'next/link';
import { ArrowLeft, Save, Percent, Calendar, Building2, Hash, DollarSign } from 'lucide-react';
import { AdminLayout } from '@/components/layout/AdminLayout';

function EditRateFormContent() {
  const router = useRouter();
  const params = useParams();
  const rateId = params.id as string;
  const queryClient = useQueryClient();

  const [formData, setFormData] = useState({
    lender_id: '',
    rate_type: 'fixed',
    term_months: 60,
    rate: 0,
    apr: 0,
    effective_date: new Date().toISOString().split('T')[0],
    is_active: true,
  });

  // Fetch lenders
  const { data: lenders, isLoading: loadingLenders, error: lendersError } = useQuery({
    queryKey: ['lenders'],
    queryFn: async () => {
      const response = await fetch('/api/admin/lenders');
      if (!response.ok) throw new Error('Failed to fetch lenders');
      const result = await response.json();
      return result.data || [];
    },
  });

  // Fetch rate data
  const { data: rate, isLoading } = useQuery({
    queryKey: ['rate', rateId],
    queryFn: async () => {
      const response = await fetch('/api/admin/rates');
      if (!response.ok) throw new Error('Failed to fetch rates');
      const result = await response.json();
      const foundRate = result.data?.find((r: any) => r.id === rateId);
      if (!foundRate) throw new Error('Rate not found');
      return foundRate;
    },
  });

  // Populate form
  useEffect(() => {
    if (rate) {
      setFormData({
        lender_id: rate.lender_id || '',
        rate_type: rate.rate_type || 'fixed',
        term_months: rate.term_months || 60,
        rate: rate.rate || 0,
        apr: rate.apr || 0,
        effective_date: rate.effective_date?.split('T')[0] || new Date().toISOString().split('T')[0],
        is_active: rate.is_active ?? true,
      });
    }
  }, [rate]);

  const updateMutation = useMutation({
    mutationFn: async (data: typeof formData) => {
      const response = await fetch('/api/admin/rates', {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ id: rateId, ...data }),
      });
      if (!response.ok) {
        const error = await response.json();
        throw new Error(error.error || 'Failed to update rate');
      }
      return response.json();
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['rates'] });
      queryClient.invalidateQueries({ queryKey: ['rate', rateId] });
      router.push('/admin/rates');
    },
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.lender_id) {
      alert('Please select a lender');
      return;
    }

    if (formData.rate <= 0 || formData.apr <= 0) {
      alert('Rate and APR must be greater than 0');
      return;
    }

    try {
      await updateMutation.mutateAsync(formData);
    } catch (error: any) {
      alert(error.message || 'Failed to update rate');
    }
  };

  const handleChange = (field: string, value: string | boolean | number) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  if (isLoading) {
    return (
      <div className="p-8">
        <div className="text-center text-gray-500">Loading rate...</div>
      </div>
    );
  }

  return (
    <div className="p-8">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <Link
            href="/admin/rates"
            className="inline-flex items-center text-sm text-gray-600 hover:text-gray-900 mb-4"
          >
            <ArrowLeft className="w-4 h-4 mr-1" />
            Back to Rates
          </Link>
          <h1 className="text-3xl font-bold text-gray-900">Edit Rate</h1>
          <p className="text-gray-600 mt-1">Update mortgage rate information</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Lender & Type */}
          <div className="bg-white rounded-lg shadow p-6">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">Lender & Type</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="flex items-center text-sm font-medium text-gray-700 mb-2">
                  <Building2 className="w-4 h-4 mr-2" />
                  Lender <span className="text-red-500 ml-1">*</span>
                </label>
                <select
                  required
                  value={formData.lender_id}
                  onChange={(e) => handleChange('lender_id', e.target.value)}
                  disabled={loadingLenders}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent disabled:bg-gray-100 disabled:cursor-not-allowed"
                >
                  <option value="">
                    {loadingLenders ? 'Loading lenders...' : 'Select a lender...'}
                  </option>
                  {lenders?.map((lender: any) => (
                    <option key={lender.id} value={lender.id}>
                      {lender.name}
                    </option>
                  ))}
                </select>
                {lendersError && (
                  <p className="text-xs text-red-500 mt-1">
                    Failed to load lenders. Please refresh the page.
                  </p>
                )}
                {!loadingLenders && lenders?.length === 0 && (
                  <p className="text-xs text-yellow-600 mt-1">
                    No lenders available. Please create a lender first.
                  </p>
                )}
              </div>

              <div>
                <label className="flex items-center text-sm font-medium text-gray-700 mb-2">
                  <Hash className="w-4 h-4 mr-2" />
                  Rate Type <span className="text-red-500 ml-1">*</span>
                </label>
                <select
                  value={formData.rate_type}
                  onChange={(e) => handleChange('rate_type', e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  <option value="fixed">Fixed</option>
                  <option value="variable">Variable</option>
                </select>
              </div>
            </div>
          </div>

          {/* Rate Details */}
          <div className="bg-white rounded-lg shadow p-6">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">Rate Details</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div>
                <label className="flex items-center text-sm font-medium text-gray-700 mb-2">
                  <Percent className="w-4 h-4 mr-2" />
                  Interest Rate (%) <span className="text-red-500 ml-1">*</span>
                </label>
                <input
                  type="number"
                  step="0.01"
                  required
                  value={formData.rate}
                  onChange={(e) => handleChange('rate', parseFloat(e.target.value) || 0)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="5.25"
                />
              </div>

              <div>
                <label className="flex items-center text-sm font-medium text-gray-700 mb-2">
                  <DollarSign className="w-4 h-4 mr-2" />
                  APR (%) <span className="text-red-500 ml-1">*</span>
                </label>
                <input
                  type="number"
                  step="0.01"
                  required
                  value={formData.apr}
                  onChange={(e) => handleChange('apr', parseFloat(e.target.value) || 0)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="5.45"
                />
              </div>

              <div>
                <label className="flex items-center text-sm font-medium text-gray-700 mb-2">
                  <Hash className="w-4 h-4 mr-2" />
                  Term (Months) <span className="text-red-500 ml-1">*</span>
                </label>
                <select
                  value={formData.term_months}
                  onChange={(e) => handleChange('term_months', parseInt(e.target.value))}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  <option value={12}>12 months (1 year)</option>
                  <option value={24}>24 months (2 years)</option>
                  <option value={36}>36 months (3 years)</option>
                  <option value={48}>48 months (4 years)</option>
                  <option value={60}>60 months (5 years)</option>
                  <option value={84}>84 months (7 years)</option>
                  <option value={120}>120 months (10 years)</option>
                </select>
              </div>
            </div>
          </div>

          {/* Effective Date & Status */}
          <div className="bg-white rounded-lg shadow p-6">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">Effective Date & Status</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="flex items-center text-sm font-medium text-gray-700 mb-2">
                  <Calendar className="w-4 h-4 mr-2" />
                  Effective Date <span className="text-red-500 ml-1">*</span>
                </label>
                <input
                  type="date"
                  required
                  value={formData.effective_date}
                  onChange={(e) => handleChange('effective_date', e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
                <p className="text-xs text-gray-500 mt-1">Date when this rate becomes active</p>
              </div>

              <div>
                <label className="flex items-center text-sm font-medium text-gray-700 mb-2">
                  Status
                </label>
                <label className="flex items-center space-x-3 mt-2">
                  <input
                    type="checkbox"
                    checked={formData.is_active}
                    onChange={(e) => handleChange('is_active', e.target.checked)}
                    className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                  />
                  <span className="text-sm text-gray-700">Active (visible to users)</span>
                </label>
              </div>
            </div>
          </div>

          {/* Actions */}
          <div className="flex justify-end gap-4">
            <Link
              href="/admin/rates"
              className="px-6 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors"
            >
              Cancel
            </Link>
            <button
              type="submit"
              disabled={updateMutation.isPending}
              className="flex items-center gap-2 px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <Save className="w-5 h-5" />
              {updateMutation.isPending ? 'Saving...' : 'Save Changes'}
            </button>
          </div>

          {updateMutation.isError && (
            <div className="bg-red-50 border border-red-200 rounded-lg p-4">
              <p className="text-red-800 text-sm">
                {(updateMutation.error as Error)?.message || 'Failed to update rate'}
              </p>
            </div>
          )}
        </form>
      </div>
    </div>
  );
}

export default function EditRatePage() {
  return (
    <AdminLayout>
      <EditRateFormContent />
    </AdminLayout>
  );
}
