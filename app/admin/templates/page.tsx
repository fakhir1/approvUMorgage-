'use client';

import { useState } from 'react';
import { Mail, FileText, Search, Plus, Eye } from 'lucide-react';
import Link from 'next/link';
import { AdminLayout } from '@/components/layout/AdminLayout';

// Mock email templates (in production, these would come from database)
const mockTemplates = [
  {
    id: '1',
    name: 'Application Confirmation',
    subject: 'Your Mortgage Application Has Been Received',
    category: 'applications',
    description: 'Sent when a user submits a mortgage application',
    variables: ['applicant_name', 'application_id', 'submission_date'],
    body: `Hi {{applicant_name}},

Thank you for submitting your mortgage application (ID: {{application_id}}) on {{submission_date}}.

We have received your application and our team is reviewing it. You will receive an update within 2-3 business days.

If you have any questions, please don't hesitate to contact us.

Best regards,
The Mortgage Team`,
    isActive: true,
  },
  {
    id: '2',
    name: 'Application Status Update',
    subject: 'Update on Your Mortgage Application',
    category: 'applications',
    description: 'Sent when application status changes',
    variables: ['applicant_name', 'application_id', 'status', 'next_steps'],
    body: `Hi {{applicant_name}},

Your mortgage application (ID: {{application_id}}) status has been updated to: {{status}}.

Next Steps:
{{next_steps}}

If you have any questions about your application, please contact us.

Best regards,
The Mortgage Team`,
    isActive: true,
  },
  {
    id: '3',
    name: 'Appointment Confirmation',
    subject: 'Your Mortgage Consultation Appointment',
    category: 'appointments',
    description: 'Sent when user books an appointment',
    variables: ['client_name', 'appointment_date', 'appointment_time', 'agent_name'],
    body: `Hi {{client_name}},

Your mortgage consultation appointment has been confirmed!

Date: {{appointment_date}}
Time: {{appointment_time}}
With: {{agent_name}}

We look forward to helping you with your mortgage needs.

Best regards,
The Mortgage Team`,
    isActive: true,
  },
  {
    id: '4',
    name: 'Password Reset',
    subject: 'Reset Your Password',
    category: 'authentication',
    description: 'Sent when user requests password reset',
    variables: ['user_name', 'reset_link', 'expiry_time'],
    body: `Hi {{user_name}},

We received a request to reset your password.

Click the link below to reset your password:
{{reset_link}}

This link will expire in {{expiry_time}}.

If you didn't request this, please ignore this email.

Best regards,
The Mortgage Team`,
    isActive: true,
  },
];

function TemplatesManagerContent() {
  const [searchTerm, setSearchTerm] = useState('');
  const [categoryFilter, setCategoryFilter] = useState<string>('all');
  const [selectedTemplate, setSelectedTemplate] = useState<any>(null);
  const [showPreview, setShowPreview] = useState(false);

  // Filter templates
  const filteredTemplates = mockTemplates.filter((template) => {
    const matchesSearch =
      template.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      template.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = categoryFilter === 'all' || template.category === categoryFilter;
    return matchesSearch && matchesCategory;
  });

  const categories = ['all', ...Array.from(new Set(mockTemplates.map((t) => t.category)))];

  return (
    <div className="p-8">
      {/* Header */}
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Email Templates</h1>
          <p className="text-gray-600 mt-1">Manage email templates and notifications</p>
        </div>
        <Link
          href="/admin/templates/new"
          className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
        >
          <Plus className="w-5 h-5" />
          Add Template
        </Link>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="bg-white rounded-lg shadow p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Total Templates</p>
              <p className="text-2xl font-bold text-gray-900 mt-1">{mockTemplates.length}</p>
            </div>
            <div className="h-12 w-12 bg-blue-100 rounded-lg flex items-center justify-center">
              <Mail className="h-6 w-6 text-blue-600" />
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Active Templates</p>
              <p className="text-2xl font-bold text-gray-900 mt-1">
                {mockTemplates.filter((t) => t.isActive).length}
              </p>
            </div>
            <div className="h-12 w-12 bg-green-100 rounded-lg flex items-center justify-center">
              <FileText className="h-6 w-6 text-green-600" />
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Categories</p>
              <p className="text-2xl font-bold text-gray-900 mt-1">{categories.length - 1}</p>
            </div>
            <div className="h-12 w-12 bg-purple-100 rounded-lg flex items-center justify-center">
              <FileText className="h-6 w-6 text-purple-600" />
            </div>
          </div>
        </div>
      </div>

      {/* Filters */}
      <div className="bg-white rounded-lg shadow mb-6">
        <div className="p-6">
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search templates..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>

            <div className="sm:w-48">
              <select
                value={categoryFilter}
                onChange={(e) => setCategoryFilter(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                {categories.map((cat) => (
                  <option key={cat} value={cat}>
                    {cat === 'all' ? 'All Categories' : cat.charAt(0).toUpperCase() + cat.slice(1)}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>
      </div>

      {/* Templates Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {filteredTemplates.map((template) => (
          <div key={template.id} className="bg-white rounded-lg shadow hover:shadow-lg transition-shadow">
            <div className="p-6">
              <div className="flex items-start justify-between mb-4">
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-gray-900 mb-1">{template.name}</h3>
                  <p className="text-sm text-gray-600 mb-2">{template.description}</p>
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                    {template.category}
                  </span>
                </div>
                <span
                  className={`px-2 py-1 text-xs font-semibold rounded-full ${
                    template.isActive ? 'bg-green-100 text-green-800' : 'bg-gray-100 text-gray-800'
                  }`}
                >
                  {template.isActive ? 'Active' : 'Inactive'}
                </span>
              </div>

              <div className="mb-4">
                <p className="text-sm font-medium text-gray-700 mb-2">Subject:</p>
                <p className="text-sm text-gray-600 bg-gray-50 p-2 rounded">{template.subject}</p>
              </div>

              <div className="mb-4">
                <p className="text-sm font-medium text-gray-700 mb-2">Variables:</p>
                <div className="flex flex-wrap gap-2">
                  {template.variables.map((variable) => (
                    <code
                      key={variable}
                      className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded font-mono"
                    >
                      {`{{${variable}}}`}
                    </code>
                  ))}
                </div>
              </div>

              <div className="flex gap-2">
                <button
                  onClick={() => {
                    setSelectedTemplate(template);
                    setShowPreview(true);
                  }}
                  className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors"
                >
                  <Eye className="w-4 h-4" />
                  Preview
                </button>
                <Link
                  href={`/admin/templates/${template.id}`}
                  className="flex-1 flex items-center justify-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                >
                  Edit
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>

      {filteredTemplates.length === 0 && (
        <div className="bg-white rounded-lg shadow p-12 text-center">
          <Mail className="w-16 h-16 text-gray-400 mx-auto mb-4" />
          <h3 className="text-lg font-medium text-gray-900 mb-2">No templates found</h3>
          <p className="text-gray-600">Try adjusting your search or filters</p>
        </div>
      )}

      {/* Preview Modal */}
      {showPreview && selectedTemplate && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-lg max-w-2xl w-full max-h-[90vh] overflow-hidden">
            <div className="p-6 border-b border-gray-200">
              <div className="flex items-center justify-between">
                <h3 className="text-xl font-semibold text-gray-900">Template Preview</h3>
                <button
                  onClick={() => setShowPreview(false)}
                  className="text-gray-400 hover:text-gray-600"
                >
                  ×
                </button>
              </div>
            </div>
            <div className="p-6 overflow-y-auto max-h-[calc(90vh-140px)]">
              <div className="mb-4">
                <p className="text-sm font-medium text-gray-700 mb-1">From:</p>
                <p className="text-sm text-gray-600">noreply@mortgagesite.com</p>
              </div>
              <div className="mb-4">
                <p className="text-sm font-medium text-gray-700 mb-1">Subject:</p>
                <p className="text-sm text-gray-900">{selectedTemplate.subject}</p>
              </div>
              <div className="mb-4">
                <p className="text-sm font-medium text-gray-700 mb-2">Body:</p>
                <div className="bg-gray-50 p-4 rounded border border-gray-200">
                  <pre className="text-sm text-gray-900 whitespace-pre-wrap font-sans">
                    {selectedTemplate.body}
                  </pre>
                </div>
              </div>
            </div>
            <div className="p-6 border-t border-gray-200">
              <button
                onClick={() => setShowPreview(false)}
                className="w-full px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default function TemplatesPage() {
  return (
    <AdminLayout>
      <TemplatesManagerContent />
    </AdminLayout>
  );
}
