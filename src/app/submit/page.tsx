'use client';

import { useState } from 'react';

export default function SubmitWorkflow() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    workflowName: '',
    description: '',
    useCase: '',
    targetAudience: '',
    estimatedCredits: '',
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    // Handle file upload logic here
    console.log('File selected:', e.target.files?.[0]);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // TODO: Submit form data and file to API
    console.log('Submitting workflow:', formData);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    alert('Workflow submitted successfully! We\'ll review it and get back to you within 48 hours.');
    setIsSubmitting(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-6">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-indigo-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">N</span>
              </div>
              <h1 className="text-2xl font-bold text-gray-900">N8N-to-SaaS</h1>
            </div>
            <a href="/" className="text-gray-600 hover:text-gray-900">← Back to Home</a>
          </div>
        </div>
      </header>

      {/* Main Form */}
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-white rounded-xl shadow-md p-8">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-4">Submit Your N8N Workflow</h1>
            <p className="text-gray-600 text-lg">
              Tell us about your workflow and upload the file. We'll review it and turn it into a SaaS product.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Personal Information */}
            <div className="border-b border-gray-200 pb-6">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">Personal Information</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                    placeholder="Enter your full name"
                  />
                </div>
                
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                    placeholder="+1 (555) 123-4567"
                  />
                </div>
                
                <div className="md:col-span-2">
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                    placeholder="your@email.com"
                  />
                </div>
              </div>
            </div>

            {/* Workflow Information */}
            <div className="border-b border-gray-200 pb-6">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">Workflow Details</h2>
              
              <div className="space-y-6">
                <div>
                  <label htmlFor="workflowName" className="block text-sm font-medium text-gray-700 mb-2">
                    Workflow Name *
                  </label>
                  <input
                    type="text"
                    id="workflowName"
                    name="workflowName"
                    required
                    value={formData.workflowName}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                    placeholder="e.g., Social Media Content Generator"
                  />
                </div>

                <div>
                  <label htmlFor="description" className="block text-sm font-medium text-gray-700 mb-2">
                    Workflow Description *
                  </label>
                  <textarea
                    id="description"
                    name="description"
                    required
                    value={formData.description}
                    onChange={handleInputChange}
                    rows={4}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                    placeholder="Describe what your workflow does, how it works, and what problems it solves..."
                  />
                </div>

                <div>
                  <label htmlFor="useCase" className="block text-sm font-medium text-gray-700 mb-2">
                    Primary Use Cases *
                  </label>
                  <textarea
                    id="useCase"
                    name="useCase"
                    required
                    value={formData.useCase}
                    onChange={handleInputChange}
                    rows={3}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                    placeholder="What are the main use cases? Who would benefit from this workflow?"
                  />
                </div>

                <div>
                  <label htmlFor="targetAudience" className="block text-sm font-medium text-gray-700 mb-2">
                    Target Audience *
                  </label>
                  <input
                    type="text"
                    id="targetAudience"
                    name="targetAudience"
                    required
                    value={formData.targetAudience}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                    placeholder="e.g., Small business owners, Content creators, Marketing agencies"
                  />
                </div>

                <div>
                  <label htmlFor="estimatedCredits" className="block text-sm font-medium text-gray-700 mb-2">
                    Estimated Credit Cost Per Execution
                  </label>
                  <select
                    id="estimatedCredits"
                    name="estimatedCredits"
                    value={formData.estimatedCredits}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                  >
                    <option value="">Select estimated cost...</option>
                    <option value="1">1 credit (Simple data processing)</option>
                    <option value="2">2 credits (Image generation, basic AI)</option>
                    <option value="5">5 credits (Complex AI processing)</option>
                    <option value="10">10 credits (Video/Audio generation)</option>
                    <option value="custom">Custom (we'll evaluate)</option>
                  </select>
                </div>
              </div>
            </div>

            {/* File Upload */}
            <div className="pb-6">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">Upload Workflow File</h2>
              
              <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center">
                <div className="mb-4">
                  <span className="text-4xl">📁</span>
                </div>
                <div className="mb-4">
                  <label htmlFor="workflowFile" className="cursor-pointer">
                    <span className="text-indigo-600 hover:text-indigo-700 font-medium">
                      Choose your N8N workflow file
                    </span>
                    <input
                      type="file"
                      id="workflowFile"
                      name="workflowFile"
                      accept=".json"
                      onChange={handleFileUpload}
                      className="hidden"
                      required
                    />
                  </label>
                  <p className="text-gray-500 text-sm mt-2">
                    Upload your .json workflow file (max 10MB)
                  </p>
                </div>
              </div>
              
              <div className="mt-4 text-sm text-gray-600">
                <p className="font-medium mb-2">📝 How to export your N8N workflow:</p>
                <ol className="list-decimal list-inside space-y-1 pl-4">
                  <li>Open your workflow in N8N</li>
                  <li>Click the menu (three dots) in the top right</li>
                  <li>Select "Download" → "Workflow"</li>
                  <li>Save the .json file and upload it here</li>
                </ol>
              </div>
            </div>

            {/* Submit Button */}
            <div className="pt-6">
              <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full py-4 px-6 rounded-lg font-semibold text-lg ${
                  isSubmitting
                    ? 'bg-gray-400 cursor-not-allowed'
                    : 'bg-indigo-600 hover:bg-indigo-700 text-white'
                } transition-colors`}
              >
                {isSubmitting ? 'Submitting Workflow...' : 'Submit Workflow for Review'}
              </button>
              
              <p className="text-center text-sm text-gray-500 mt-4">
                We'll review your submission within 48 hours and contact you with next steps.
              </p>
            </div>
          </form>
        </div>
      </main>
    </div>
  );
}