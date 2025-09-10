export default function Home() {
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
            <nav className="flex items-center gap-6">
              <a href="#how-it-works" className="text-gray-600 hover:text-gray-900">How it Works</a>
              <a href="#pricing" className="text-gray-600 hover:text-gray-900">Pricing</a>
              <a href="/submit" className="px-6 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 font-semibold">
                Submit Workflow
              </a>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            Turn Your N8N Workflows into 
            <span className="text-indigo-600"> Profitable SaaS</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Submit your N8N automation workflows and we'll convert them into professional SaaS products. 
            You keep 100% of revenue - we only charge a one-time conversion fee.
          </p>
          
          <div className="flex gap-4 justify-center">
            <a 
              href="/submit" 
              className="px-8 py-4 bg-indigo-600 text-white text-lg font-semibold rounded-lg hover:bg-indigo-700 shadow-lg"
            >
              Submit Your Workflow
            </a>
            <a 
              href="#how-it-works" 
              className="px-8 py-4 bg-white text-indigo-600 text-lg font-semibold rounded-lg border-2 border-indigo-600 hover:bg-indigo-50"
            >
              Learn More
            </a>
          </div>
        </div>

        {/* How It Works */}
        <section id="how-it-works" className="mb-20">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">How It Works</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl">📤</span>
              </div>
              <h3 className="text-xl font-semibold mb-4">1. Submit Your Workflow</h3>
              <p className="text-gray-600">
                Upload your N8N workflow file along with details about functionality, use cases, and target audience.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl">⚡</span>
              </div>
              <h3 className="text-xl font-semibold mb-4">2. We Build the SaaS</h3>
              <p className="text-gray-600">
                Our team converts your workflow into a user-friendly SaaS product with pricing, payments, and UI.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl">💰</span>
              </div>
              <h3 className="text-xl font-semibold mb-4">3. Keep 100% Revenue</h3>
              <p className="text-gray-600">
                Keep all profits from your SaaS! We only charge upfront conversion fees, not ongoing revenue share.
              </p>
            </div>
          </div>
        </section>

        {/* Pricing */}
        <section className="bg-white rounded-xl shadow-md p-8 mb-20">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-8">Simple, Transparent Pricing</h2>
            
            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <div className="text-center p-6 border border-gray-200 rounded-lg">
                <h3 className="text-xl font-bold mb-2">Basic Conversion</h3>
                <div className="text-3xl font-bold text-indigo-600 mb-4">$2,500</div>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-center"><span className="text-green-500 mr-2">✓</span>Simple workflows (1-5 nodes)</li>
                  <li className="flex items-center"><span className="text-green-500 mr-2">✓</span>Basic UI design</li>
                  <li className="flex items-center"><span className="text-green-500 mr-2">✓</span>Stripe payment integration</li>
                  <li className="flex items-center"><span className="text-green-500 mr-2">✓</span>Hosting setup</li>
                </ul>
              </div>

              <div className="text-center p-6 border-2 border-indigo-500 rounded-lg relative">
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                  <span className="bg-indigo-500 text-white px-4 py-1 rounded-full text-sm font-semibold">
                    Most Popular
                  </span>
                </div>
                <h3 className="text-xl font-bold mb-2">Standard Conversion</h3>
                <div className="text-3xl font-bold text-indigo-600 mb-4">$3,500</div>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-center"><span className="text-green-500 mr-2">✓</span>Medium complexity (5-15 nodes)</li>
                  <li className="flex items-center"><span className="text-green-500 mr-2">✓</span>Custom UI design</li>
                  <li className="flex items-center"><span className="text-green-500 mr-2">✓</span>Advanced features</li>
                  <li className="flex items-center"><span className="text-green-500 mr-2">✓</span>3 months support included</li>
                </ul>
              </div>

              <div className="text-center p-6 border border-gray-200 rounded-lg">
                <h3 className="text-xl font-bold mb-2">Premium Conversion</h3>
                <div className="text-3xl font-bold text-indigo-600 mb-4">$5,000</div>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-center"><span className="text-green-500 mr-2">✓</span>Complex workflows (15+ nodes)</li>
                  <li className="flex items-center"><span className="text-green-500 mr-2">✓</span>Full custom branding</li>
                  <li className="flex items-center"><span className="text-green-500 mr-2">✓</span>Advanced analytics</li>
                  <li className="flex items-center"><span className="text-green-500 mr-2">✓</span>6 months support included</li>
                </ul>
              </div>
            </div>

            <div className="bg-gradient-to-r from-green-50 to-blue-50 rounded-lg p-8">
              <h3 className="text-2xl font-bold text-center text-gray-900 mb-6">
                💰 You Keep 100% of Revenue Forever
              </h3>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h4 className="text-lg font-semibold mb-4">What's Included:</h4>
                  <ul className="space-y-2">
                    <li className="flex items-center"><span className="text-green-500 mr-2">✓</span>Complete SaaS conversion</li>
                    <li className="flex items-center"><span className="text-green-500 mr-2">✓</span>Professional UI/UX</li>
                    <li className="flex items-center"><span className="text-green-500 mr-2">✓</span>Payment processing setup</li>
                    <li className="flex items-center"><span className="text-green-500 mr-2">✓</span>Customer management system</li>
                    <li className="flex items-center"><span className="text-green-500 mr-2">✓</span>Hosting & deployment</li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-lg font-semibold mb-4">Optional Add-Ons:</h4>
                  <ul className="space-y-2 text-gray-600">
                    <li className="flex items-center justify-between">
                      <span>Customer Support</span>
                      <span className="font-semibold">$49/month</span>
                    </li>
                    <li className="flex items-center justify-between">
                      <span>Bug Fixes & Updates</span>
                      <span className="font-semibold">$99/month</span>
                    </li>
                    <li className="flex items-center justify-between">
                      <span>Marketing & SEO</span>
                      <span className="font-semibold">$199/month</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="text-center bg-gradient-to-r from-indigo-600 to-purple-600 rounded-xl p-12 text-white">
          <h2 className="text-3xl font-bold mb-4">Ready to Monetize Your N8N Skills?</h2>
          <p className="text-indigo-100 text-lg mb-8 max-w-2xl mx-auto">
            Join other creators who are already earning passive income from their automation workflows.
          </p>
          <a 
            href="/submit" 
            className="inline-block px-8 py-4 bg-white text-indigo-600 rounded-lg hover:bg-indigo-50 font-bold text-lg shadow-lg"
          >
            Submit Your First Workflow
          </a>
        </section>
      </main>
    </div>
  );
}
