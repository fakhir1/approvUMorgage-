'use client'

import { useEffect, useState } from 'react'

interface TestResult {
  success: boolean
  message?: string
  error?: string
  details?: string
  hint?: string
  project?: string
  project_url?: string
  data?: any
  timestamp?: string
}

export default function SupabaseTestPage() {
  const [result, setResult] = useState<TestResult | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function testConnection() {
      try {
        const response = await fetch('/api/test-connection')
        const data = await response.json()
        setResult(data)
      } catch (error: any) {
        setResult({
          success: false,
          error: 'Failed to fetch',
          details: error.message,
        })
      } finally {
        setLoading(false)
      }
    }

    testConnection()
  }, [])

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 p-8">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white rounded-lg shadow-xl p-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            🔌 Supabase Connection Test
          </h1>
          <p className="text-gray-600 mb-8">
            Testing connection to project: <code className="bg-gray-100 px-2 py-1 rounded">xxcznmlupkezjmdnpnrs</code>
          </p>

          {loading && (
            <div className="flex items-center justify-center py-12">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
              <span className="ml-4 text-gray-600">Testing connection...</span>
            </div>
          )}

          {!loading && result && (
            <div className="space-y-6">
              {/* Status Banner */}
              <div
                className={`p-6 rounded-lg ${
                  result.success
                    ? 'bg-green-50 border-2 border-green-500'
                    : 'bg-red-50 border-2 border-red-500'
                }`}
              >
                <div className="flex items-center">
                  <div className="text-4xl mr-4">
                    {result.success ? '✅' : '❌'}
                  </div>
                  <div>
                    <h2
                      className={`text-2xl font-bold ${
                        result.success ? 'text-green-900' : 'text-red-900'
                      }`}
                    >
                      {result.success ? 'Connection Successful!' : 'Connection Failed'}
                    </h2>
                    <p className={result.success ? 'text-green-700' : 'text-red-700'}>
                      {result.message || result.error}
                    </p>
                  </div>
                </div>
              </div>

              {/* Error Details */}
              {!result.success && (result.details || result.hint) && (
                <div className="bg-yellow-50 border-l-4 border-yellow-500 p-4">
                  <h3 className="font-bold text-yellow-900 mb-2">💡 Troubleshooting:</h3>
                  {result.details && (
                    <p className="text-yellow-800 mb-2">
                      <strong>Details:</strong> {result.details}
                    </p>
                  )}
                  {result.hint && (
                    <p className="text-yellow-800">
                      <strong>Hint:</strong> {result.hint}
                    </p>
                  )}
                </div>
              )}

              {/* Success Data */}
              {result.success && result.data && (
                <div className="space-y-4">
                  <h3 className="text-xl font-bold text-gray-900">📊 Database Info:</h3>

                  {/* Project Info */}
                  <div className="bg-blue-50 p-4 rounded-lg">
                    <p className="text-sm text-gray-600">Project ID</p>
                    <p className="font-mono text-lg text-blue-900">{result.project}</p>
                    <p className="text-sm text-gray-600 mt-2">Project URL</p>
                    <p className="font-mono text-sm text-blue-900">{result.project_url}</p>
                  </div>

                  {/* Tables Data */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {/* Agents */}
                    {result.data.agents && (
                      <div className="bg-gray-50 p-4 rounded-lg">
                        <h4 className="font-bold text-gray-900 mb-2">👥 Agents</h4>
                        <p className="text-3xl font-bold text-blue-600 mb-2">
                          {result.data.agents.count}
                        </p>
                        {result.data.agents.sample && result.data.agents.sample.length > 0 && (
                          <div className="text-sm text-gray-600 space-y-1">
                            {result.data.agents.sample.map((agent: any, i: number) => (
                              <div key={i} className="bg-white p-2 rounded">
                                <div className="font-semibold">{agent.name}</div>
                                <div className="text-xs text-gray-500">{agent.email}</div>
                              </div>
                            ))}
                          </div>
                        )}
                      </div>
                    )}

                    {/* Lenders */}
                    {result.data.lenders && (
                      <div className="bg-gray-50 p-4 rounded-lg">
                        <h4 className="font-bold text-gray-900 mb-2">🏦 Lenders</h4>
                        <p className="text-3xl font-bold text-green-600 mb-2">
                          {result.data.lenders.count}
                        </p>
                        {result.data.lenders.sample && result.data.lenders.sample.length > 0 && (
                          <div className="text-sm text-gray-600 space-y-1">
                            {result.data.lenders.sample.map((lender: any, i: number) => (
                              <div key={i} className="bg-white p-2 rounded">
                                {lender.name}
                              </div>
                            ))}
                          </div>
                        )}
                      </div>
                    )}

                    {/* Mortgage Rates */}
                    {result.data.mortgage_rates && (
                      <div className="bg-gray-50 p-4 rounded-lg">
                        <h4 className="font-bold text-gray-900 mb-2">💰 Mortgage Rates</h4>
                        <p className="text-3xl font-bold text-purple-600 mb-2">
                          {result.data.mortgage_rates.count}
                        </p>
                        {result.data.mortgage_rates.sample && result.data.mortgage_rates.sample.length > 0 && (
                          <div className="text-sm text-gray-600 space-y-1">
                            {result.data.mortgage_rates.sample.map((rate: any, i: number) => (
                              <div key={i} className="bg-white p-2 rounded flex justify-between">
                                <span className="font-semibold">{rate.rate_type}</span>
                                <span className="text-purple-600">{rate.rate}%</span>
                              </div>
                            ))}
                          </div>
                        )}
                      </div>
                    )}

                    {/* Pages */}
                    {result.data.pages && (
                      <div className="bg-gray-50 p-4 rounded-lg">
                        <h4 className="font-bold text-gray-900 mb-2">📄 Pages</h4>
                        <p className="text-3xl font-bold text-orange-600">
                          {result.data.pages.total}
                        </p>
                        <p className="text-sm text-gray-600 mt-1">Total pages in CMS</p>
                      </div>
                    )}

                    {/* Content Blocks */}
                    {result.data.content_blocks && (
                      <div className="bg-gray-50 p-4 rounded-lg">
                        <h4 className="font-bold text-gray-900 mb-2">📝 Content Blocks</h4>
                        <p className="text-3xl font-bold text-pink-600">
                          {result.data.content_blocks.total}
                        </p>
                        <p className="text-sm text-gray-600 mt-1">Reusable content</p>
                      </div>
                    )}
                  </div>
                </div>
              )}

              {/* Raw JSON */}
              <details className="mt-6">
                <summary className="cursor-pointer font-semibold text-gray-700 hover:text-gray-900">
                  🔍 View Raw JSON Response
                </summary>
                <pre className="mt-2 p-4 bg-gray-900 text-green-400 rounded-lg overflow-auto text-xs">
                  {JSON.stringify(result, null, 2)}
                </pre>
              </details>

              {/* Timestamp */}
              {result.timestamp && (
                <p className="text-sm text-gray-500 text-center">
                  Tested at: {new Date(result.timestamp).toLocaleString()}
                </p>
              )}
            </div>
          )}

          {/* Refresh Button */}
          <div className="mt-8 text-center">
            <button
              onClick={() => window.location.reload()}
              className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-semibold"
            >
              🔄 Test Again
            </button>
          </div>
        </div>

        {/* Instructions */}
        <div className="mt-8 bg-white rounded-lg shadow-lg p-6">
          <h2 className="text-xl font-bold text-gray-900 mb-4">📚 What This Tests:</h2>
          <ul className="space-y-2 text-gray-700">
            <li className="flex items-start">
              <span className="mr-2">✓</span>
              <span><strong>Environment Variables:</strong> Checks if Supabase URL and keys are loaded</span>
            </li>
            <li className="flex items-start">
              <span className="mr-2">✓</span>
              <span><strong>Database Connection:</strong> Verifies connection to your Supabase project</span>
            </li>
            <li className="flex items-start">
              <span className="mr-2">✓</span>
              <span><strong>Service Role Key:</strong> Tests admin access to database tables</span>
            </li>
            <li className="flex items-start">
              <span className="mr-2">✓</span>
              <span><strong>Table Queries:</strong> Fetches sample data from agents, lenders, and rates</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}
