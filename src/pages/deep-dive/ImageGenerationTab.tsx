export default function ImageGenerationTab() {
  return (
    <div className="space-y-6">
      {/* Introduction */}
      <div className="bg-gradient-to-r from-pink-50 to-purple-50 rounded-xl p-6 border-2 border-pink-200">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Image Generation with AI</h2>
        <p className="text-gray-700 leading-relaxed">
          Explore the world of AI-powered image generation, from creating stunning visuals with DALL-E
          to mastering advanced techniques with Stable Diffusion and Midjourney.
        </p>
      </div>

      {/* Key Topics */}
      <div className="bg-white rounded-xl shadow-md p-6 border border-gray-200">
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
      <div className="bg-yellow-50 border-l-4 border-yellow-500 p-6 rounded">
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

      {/* Coming Soon Notice */}
      <div className="bg-gradient-to-r from-primary/10 to-secondary/10 rounded-xl p-6">
        <p className="text-gray-700 text-center">
          <strong>Full content coming soon!</strong> This tab will be populated with detailed tutorials,
          tool comparisons, and best practices for AI image generation.
        </p>
      </div>
    </div>
  )
}
