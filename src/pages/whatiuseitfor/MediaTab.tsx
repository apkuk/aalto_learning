import Card from '../../components/Card'
import CollapsibleSection from '../../components/CollapsibleSection'

export default function MediaTab() {
  return (
    <div className="space-y-6">
      {/* Section 1: What I Use It For */}
      <CollapsibleSection title="What I Use It For" icon="🎨" defaultOpen={true}>
        <Card className="overflow-hidden" color="border-pink-400">
          <div className="space-y-6">
            {/* Title and Description */}
            <div className="flex items-start">
              <span className="text-5xl mr-4">🎨</span>
              <div className="flex-1">
                <h2 className="text-3xl font-bold text-gray-900 mb-3">
                  Media Generation
                </h2>
                <p className="text-lg text-gray-700 leading-relaxed">
                  Creating professional visuals and videos for presentations, marketing materials, and branding without design skills
                </p>
              </div>
            </div>

            {/* Examples */}
            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="font-bold text-gray-900 mb-3">Practical Examples:</h3>
              <ul className="grid md:grid-cols-2 gap-3">
                <li className="flex items-start text-gray-700">
                  <span className="text-pink-600 mr-2 font-bold">→</span>
                  <span>Presentation graphics and diagrams</span>
                </li>
                <li className="flex items-start text-gray-700">
                  <span className="text-pink-600 mr-2 font-bold">→</span>
                  <span>Marketing materials and social media content</span>
                </li>
                <li className="flex items-start text-gray-700">
                  <span className="text-pink-600 mr-2 font-bold">→</span>
                  <span>Brand identity exploration and mood boards</span>
                </li>
                <li className="flex items-start text-gray-700">
                  <span className="text-pink-600 mr-2 font-bold">→</span>
                  <span>Product visualization and concept mockups</span>
                </li>
                <li className="flex items-start text-gray-700">
                  <span className="text-pink-600 mr-2 font-bold">→</span>
                  <span>Custom illustrations for documentation</span>
                </li>
              </ul>
            </div>

            {/* Before/After Comparison */}
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-red-50 rounded-lg p-6 border-l-4 border-red-400">
                <div className="flex items-center mb-3">
                  <span className="text-2xl mr-2">❌</span>
                  <h3 className="font-bold text-gray-900 text-lg">Before AI</h3>
                </div>
                <p className="text-gray-700 text-sm leading-relaxed">
                  Either spent hours in design tools or paid designers $500+ per project with multi-day turnaround
                </p>
              </div>

              <div className="bg-green-50 rounded-lg p-6 border-l-4 border-green-400">
                <div className="flex items-center mb-3">
                  <span className="text-2xl mr-2">✅</span>
                  <h3 className="font-bold text-gray-900 text-lg">With AI</h3>
                </div>
                <p className="text-gray-700 text-sm leading-relaxed">
                  Generate multiple design options in minutes, iterate rapidly until perfect
                </p>
              </div>
            </div>

            {/* Impact */}
            <div className="bg-pink-50 rounded-lg p-4 border-l-4 border-pink-500">
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <span className="text-2xl mr-3">📊</span>
                  <span className="font-bold text-gray-900">Impact:</span>
                </div>
                <span className="text-pink-700 font-bold text-lg">
                  95% cost reduction + instant iteration
                </span>
              </div>
            </div>
          </div>
        </Card>

        {/* Real Project Example */}
        <div className="bg-gradient-to-r from-pink-50 to-red-50 rounded-lg p-6 border-l-4 border-pink-500 mt-6">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">Real Project: Marketing Campaign Visuals</h3>

          <div className="grid md:grid-cols-3 gap-4">
            <div className="bg-white rounded-lg p-4">
              <h4 className="font-bold text-gray-900 mb-2">Traditional:</h4>
              <ul className="space-y-1 text-sm text-gray-700">
                <li>Designer fee: $500-$2,000</li>
                <li>Time: 3-5 days</li>
                <li>Revisions: Additional time/cost</li>
              </ul>
            </div>

            <div className="bg-green-50 rounded-lg p-4 border-2 border-green-400">
              <h4 className="font-bold text-gray-900 mb-2">With AI:</h4>
              <ul className="space-y-1 text-sm text-gray-700">
                <li>Cost: ~$20/month subscription</li>
                <li>Time: 30 minutes</li>
                <li>Unlimited iterations</li>
              </ul>
            </div>

            <div className="bg-blue-50 rounded-lg p-4">
              <h4 className="font-bold text-gray-900 mb-2">Result:</h4>
              <ul className="space-y-1 text-sm text-gray-700">
                <li>✅ 95% cost savings</li>
                <li>✅ 10x faster</li>
                <li>✅ Complete creative control</li>
              </ul>
            </div>
          </div>
        </div>
      </CollapsibleSection>

      {/* Section 2: How I Use It */}
      <CollapsibleSection title="How I Use It" icon="⚙️" defaultOpen={false}>
        {/* Introduction */}
        <div className="bg-gradient-to-r from-pink-50 to-purple-50 rounded-xl p-6 border-2 border-pink-200 mb-6">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Image Generation with AI</h2>
          <p className="text-gray-700 leading-relaxed">
            Explore the world of AI-powered image generation, from creating stunning visuals with DALL-E
            to mastering advanced techniques with Stable Diffusion and Midjourney.
          </p>
        </div>

        {/* Key Topics */}
        <div className="bg-white rounded-xl shadow-md p-6 border border-gray-200 mb-6">
          <h3 className="text-xl font-bold text-gray-900 mb-4">What We'll Cover</h3>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-blue-50 rounded-lg p-4">
              <h4 className="font-bold text-gray-900 mb-2">Core Tools</h4>
              <ul className="space-y-2 text-gray-700 text-sm">
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  <span>DALL-E 3 (OpenAI)</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  <span>Stable Diffusion</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  <span>Midjourney</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  <span>Adobe Firefly</span>
                </li>
              </ul>
            </div>

            <div className="bg-purple-50 rounded-lg p-4">
              <h4 className="font-bold text-gray-900 mb-2">Techniques</h4>
              <ul className="space-y-2 text-gray-700 text-sm">
                <li className="flex items-start">
                  <span className="text-purple-600 mr-2">•</span>
                  <span>Prompt engineering for images</span>
                </li>
                <li className="flex items-start">
                  <span className="text-purple-600 mr-2">•</span>
                  <span>Style transfer and consistency</span>
                </li>
                <li className="flex items-start">
                  <span className="text-purple-600 mr-2">•</span>
                  <span>Inpainting and outpainting</span>
                </li>
                <li className="flex items-start">
                  <span className="text-purple-600 mr-2">•</span>
                  <span>Image-to-image transformation</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Hands-On Practice */}
        <div className="bg-yellow-50 border-l-4 border-yellow-500 p-6 rounded mb-6">
          <h3 className="text-lg font-bold text-gray-900 mb-3">Hands-On Practice Session</h3>
          <p className="text-gray-700 mb-4">
            During this deep dive, you'll get hands-on experience creating images for various use cases:
          </p>
          <ul className="space-y-2">
            <li className="flex items-start">
              <span className="text-yellow-600 mr-2 font-bold">→</span>
              <span className="text-gray-700">Generate marketing visuals and brand assets</span>
            </li>
            <li className="flex items-start">
              <span className="text-yellow-600 mr-2 font-bold">→</span>
              <span className="text-gray-700">Create consistent character designs and illustrations</span>
            </li>
            <li className="flex items-start">
              <span className="text-yellow-600 mr-2 font-bold">→</span>
              <span className="text-gray-700">Edit and enhance existing images with AI</span>
            </li>
            <li className="flex items-start">
              <span className="text-yellow-600 mr-2 font-bold">→</span>
              <span className="text-gray-700">Master prompt crafting for better results</span>
            </li>
          </ul>
        </div>

        {/* Use Cases */}
        <div className="bg-white rounded-xl shadow-md p-6 border border-gray-200">
          <h3 className="text-xl font-bold text-gray-900 mb-4">Real-World Use Cases</h3>
          <div className="space-y-4">
            <div className="border-l-4 border-green-500 pl-4">
              <h4 className="font-bold text-gray-900 mb-1">Marketing & Content Creation</h4>
              <p className="text-gray-700 text-sm">
                Generate social media graphics, blog headers, and promotional materials in seconds
              </p>
            </div>
            <div className="border-l-4 border-blue-500 pl-4">
              <h4 className="font-bold text-gray-900 mb-1">Product Design & Prototyping</h4>
              <p className="text-gray-700 text-sm">
                Visualize product concepts and design variations before committing to development
              </p>
            </div>
            <div className="border-l-4 border-purple-500 pl-4">
              <h4 className="font-bold text-gray-900 mb-1">Brand Identity</h4>
              <p className="text-gray-700 text-sm">
                Create logos, icons, and consistent visual elements for your brand
              </p>
            </div>
            <div className="border-l-4 border-orange-500 pl-4">
              <h4 className="font-bold text-gray-900 mb-1">Presentations & Documentation</h4>
              <p className="text-gray-700 text-sm">
                Generate custom illustrations and diagrams to enhance your presentations
              </p>
            </div>
          </div>
        </div>
      </CollapsibleSection>

      {/* Section 3: Key Takeaways */}
      <CollapsibleSection title="Key Takeaways" icon="💡" defaultOpen={false}>
        <div className="space-y-6">
          {/* What AI Enables */}
          <div className="bg-gradient-to-r from-green-50 to-blue-50 rounded-lg p-6 border-l-4 border-green-500">
            <h3 className="text-xl font-bold text-gray-900 mb-4">What AI Enables:</h3>
            <div className="space-y-3">
              <div className="flex items-start">
                <span className="text-green-600 mr-3 text-xl">✓</span>
                <div>
                  <span className="font-bold text-gray-900">Speed:</span>
                  <span className="text-gray-700"> Complete projects in hours instead of weeks</span>
                </div>
              </div>
              <div className="flex items-start">
                <span className="text-green-600 mr-3 text-xl">✓</span>
                <div>
                  <span className="font-bold text-gray-900">Cost:</span>
                  <span className="text-gray-700"> Reduce expenses by 80-95% for many tasks</span>
                </div>
              </div>
              <div className="flex items-start">
                <span className="text-green-600 mr-3 text-xl">✓</span>
                <div>
                  <span className="font-bold text-gray-900">Capability:</span>
                  <span className="text-gray-700"> Do things you couldn't before</span>
                </div>
              </div>
              <div className="flex items-start">
                <span className="text-green-600 mr-3 text-xl">✓</span>
                <div>
                  <span className="font-bold text-gray-900">Iteration:</span>
                  <span className="text-gray-700"> Try multiple approaches effortlessly</span>
                </div>
              </div>
            </div>
          </div>

          {/* Important Principles */}
          <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg p-6 border-l-4 border-blue-500">
            <h3 className="text-xl font-bold text-gray-900 mb-4">Important Principles:</h3>
            <div className="space-y-3">
              <div className="flex items-start">
                <span className="text-blue-600 mr-3 text-xl">→</span>
                <div>
                  <span className="font-bold text-gray-900">Start small:</span>
                  <span className="text-gray-700"> Begin with simple tasks to build confidence</span>
                </div>
              </div>
              <div className="flex items-start">
                <span className="text-blue-600 mr-3 text-xl">→</span>
                <div>
                  <span className="font-bold text-gray-900">Iterate:</span>
                  <span className="text-gray-700"> AI gets better with feedback and refinement</span>
                </div>
              </div>
              <div className="flex items-start">
                <span className="text-blue-600 mr-3 text-xl">→</span>
                <div>
                  <span className="font-bold text-gray-900">Verify:</span>
                  <span className="text-gray-700"> Always review AI output for accuracy</span>
                </div>
              </div>
              <div className="flex items-start">
                <span className="text-blue-600 mr-3 text-xl">→</span>
                <div>
                  <span className="font-bold text-gray-900">Learn:</span>
                  <span className="text-gray-700"> Each use case teaches you more about AI's strengths</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </CollapsibleSection>
    </div>
  )
}
