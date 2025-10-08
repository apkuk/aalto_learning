export default function About() {
  return (
    <div className="bg-gray-50 py-12">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section with Photo */}
        <div className="bg-white rounded-xl shadow-lg overflow-hidden mb-8">
          <div className="md:flex">
            <div className="md:w-1/3 bg-gradient-to-br from-primary to-secondary flex items-center justify-center p-8">
              <img
                src="/assets/APK.jpeg"
                alt="Andrew Kilshaw"
                className="rounded-lg shadow-xl w-full max-w-xs object-cover"
              />
            </div>
            <div className="md:w-2/3 p-8">
              <h1 className="text-4xl font-bold text-gray-900 mb-2">
                Andrew Kilshaw
              </h1>
              <p className="text-xl text-gray-600 mb-4">
                AI & Digital Transformation | Organizational Capability Expert
              </p>
              <div className="flex flex-wrap gap-2 mb-6">
                <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
                  🇬🇧 UK
                </span>
                <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
                  🇺🇸 US Citizenship
                </span>
                <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">
                  Global Citizen
                </span>
              </div>
              <p className="text-gray-700 leading-relaxed">
                Deep practitioner experience in transforming and empowering industry-leading global
                Fortune 500 organizations to realize their full potential. Currently focused on
                leveraging AI to create innovative digital solutions that empower human and
                organizational development.
              </p>
            </div>
          </div>
        </div>

        {/* Current Focus */}
        <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl p-8 mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Current Focus</h2>
          <p className="text-lg text-gray-700 leading-relaxed mb-4">
            For the past year, I've stepped out of the corporate world to dive deep into AI and
            explore how to leverage it for both personal use and professional impact. My journey
            has focused on understanding the transformative potential of artificial intelligence
            and developing practical, agentic AI solutions.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed">
            I'm now creating digital solutions in the space I know well — <strong>helping companies
            and individuals realize their full potential</strong> — but with AI as a powerful enabler
            of human capability and organizational transformation.
          </p>
        </div>

        {/* Professional Experience */}
        <div className="bg-white rounded-xl shadow-md p-8 mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Professional Experience</h2>

          <div className="space-y-8">
            {/* TalentOptima */}
            <div className="border-l-4 border-primary pl-6">
              <div className="flex justify-between items-start mb-2">
                <div>
                  <h3 className="text-2xl font-bold text-gray-900">TalentOptima Ltd</h3>
                  <p className="text-lg text-primary font-semibold">CEO & Founding Partner</p>
                </div>
                <span className="text-gray-600 font-medium">2024 – Present</span>
              </div>
              <p className="text-gray-700 mb-3">
                Portfolio career combining three inter-related passions:
              </p>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start">
                  <span className="text-primary mr-2">1.</span>
                  <span>Leveraging practitioner experience to help complex global organizations supercharge
                  their enterprise approach to Organizational Capability & Transformation</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">2.</span>
                  <span>Engineering best-in-class digital solutions through advanced understanding of
                  AI, Machine Learning and Analytics that empower human and organizational potential</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">3.</span>
                  <span>Partnering with faculty at global Business Schools (e.g. IMD) to bring real-world
                  examples into the classroom, collaborating on the intersection of research and practice</span>
                </li>
              </ul>
              <a
                href="https://talentoptima.co"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-primary hover:text-primary/80 font-medium mt-3"
              >
                Visit TalentOptima
                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
            </div>

            {/* Sanofi */}
            <div className="border-l-4 border-blue-500 pl-6">
              <div className="flex justify-between items-start mb-2">
                <div>
                  <h3 className="text-2xl font-bold text-gray-900">Sanofi</h3>
                  <p className="text-lg text-blue-600 font-semibold">Group Head (SVP) of Organizational Capability & Transformation</p>
                </div>
                <span className="text-gray-600 font-medium">2021 – 2024</span>
              </div>
              <p className="text-gray-700 mb-3">
                Global biopharma company (90k+ employees, €42B revenue). Reported to CPO and built
                a new function of 300+ people delivering impact across:
              </p>
              <ul className="grid md:grid-cols-2 gap-2 text-gray-700 text-sm">
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  <span>People Analytics & AI-enabled insights</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  <span>Enterprise Transformation programs</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  <span>Organizational Capability & Consulting</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  <span>Enterprise Learning & Development</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  <span>Skills-based organization design</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  <span>Total workforce management</span>
                </li>
              </ul>
            </div>

            {/* Shell */}
            <div className="border-l-4 border-yellow-500 pl-6">
              <div className="flex justify-between items-start mb-2">
                <div>
                  <h3 className="text-2xl font-bold text-gray-900">Shell</h3>
                  <p className="text-lg text-yellow-600 font-semibold">VP OD & Learning – Downstream, Integrated Gas & New Energies</p>
                </div>
                <span className="text-gray-600 font-medium">2019 – 2021</span>
              </div>
              <p className="text-gray-700 mb-2">
                Led 200+ global OD & Learning professionals for Shell's $300B+ revenue Downstream business (34k employees).
              </p>
              <p className="text-gray-700 font-semibold">
                Key Achievement: Delivered complete global business transformation (300+ project team)
                resulting in $1B+ additional EBIT while accelerating the Energy Transition.
              </p>
            </div>

            {/* Nike */}
            <div className="border-l-4 border-orange-500 pl-6">
              <div className="flex justify-between items-start mb-2">
                <div>
                  <h3 className="text-2xl font-bold text-gray-900">Nike Inc</h3>
                  <p className="text-lg text-orange-600 font-semibold">Multiple VP & Head Roles</p>
                </div>
                <span className="text-gray-600 font-medium">2010 – 2019</span>
              </div>
              <div className="space-y-3 text-gray-700">
                <div>
                  <p className="font-semibold">VP HR – Asia Pacific & Latin America (2017–2019)</p>
                  <p className="text-sm">Led 70+ HR professionals across 9k employees in Nike's most complex $6B+ geography.
                  Executive Leadership Team member for APLA business.</p>
                </div>
                <div>
                  <p className="font-semibold">Head of HR, NIKE Digital (2016–2017)</p>
                  <p className="text-sm">Transformed Nike's digital capabilities, enabling 35% CAGR eCommerce growth.</p>
                </div>
                <div>
                  <p className="font-semibold">Head of Strategy & HR, Jordan Brand (2014–2016)</p>
                  <p className="text-sm">Defined five-year strategy to double $2.5B business revenues. Pitched strategy to Michael Jordan.</p>
                </div>
                <div>
                  <p className="font-semibold">Chief Learning Officer (2010–2013)</p>
                  <p className="text-sm">Created Nike's first Corporate University (NikeU), leading 75+ globally. Featured in IMD case study.</p>
                </div>
              </div>
            </div>

            {/* BlackRock/BGI */}
            <div className="border-l-4 border-purple-500 pl-6">
              <div className="flex justify-between items-start mb-2">
                <div>
                  <h3 className="text-2xl font-bold text-gray-900">BlackRock (formerly BGI)</h3>
                  <p className="text-lg text-purple-600 font-semibold">Global Leadership Roles</p>
                </div>
                <span className="text-gray-600 font-medium">2006 – 2010</span>
              </div>
              <p className="text-gray-700 text-sm">
                Led talent management, innovation, and BlackRock-BGI merger integration. Managed board
                succession and created iShares Innovation Office.
              </p>
            </div>
          </div>
        </div>

        {/* Skills & Expertise */}
        <div className="bg-white rounded-xl shadow-md p-8 mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Core Expertise</h2>
          <div className="grid md:grid-cols-3 gap-4">
            <div className="bg-blue-50 rounded-lg p-4">
              <h3 className="font-bold text-gray-900 mb-2">AI & Digital</h3>
              <ul className="text-sm text-gray-700 space-y-1">
                <li>• AI & Machine Learning</li>
                <li>• Digital Transformation</li>
                <li>• Agentic AI Solutions</li>
                <li>• People Analytics</li>
              </ul>
            </div>
            <div className="bg-purple-50 rounded-lg p-4">
              <h3 className="font-bold text-gray-900 mb-2">Organization</h3>
              <ul className="text-sm text-gray-700 space-y-1">
                <li>• Organizational Transformation</li>
                <li>• Operating Model Design</li>
                <li>• Change Management</li>
                <li>• Organization Development</li>
              </ul>
            </div>
            <div className="bg-green-50 rounded-lg p-4">
              <h3 className="font-bold text-gray-900 mb-2">Talent & Strategy</h3>
              <ul className="text-sm text-gray-700 space-y-1">
                <li>• Business Strategy</li>
                <li>• C-Suite Partnering</li>
                <li>• Talent Development</li>
                <li>• Enterprise Learning</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Education & Background */}
        <div className="grid md:grid-cols-2 gap-6 mb-8">
          <div className="bg-white rounded-xl shadow-md p-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Education</h2>
            <div className="space-y-3 text-gray-700">
              <div>
                <p className="font-semibold">MBA with Distinction in Leadership</p>
                <p className="text-sm text-gray-600">IMD, Lausanne, Switzerland</p>
              </div>
              <div>
                <p className="font-semibold">Masters (Honors) in Physics with French</p>
                <p className="text-sm text-gray-600">University of Manchester, UK & Université Sabatier, France</p>
              </div>
              <div>
                <p className="font-semibold">Executive Education: Digital & AI</p>
                <p className="text-sm text-gray-600">HEC, France</p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-md p-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Global Experience</h2>
            <div className="space-y-2 text-gray-700">
              <p className="flex items-center">
                <span className="text-2xl mr-2">🇬🇧</span>
                <span>United Kingdom (Current)</span>
              </p>
              <p className="flex items-center">
                <span className="text-2xl mr-2">🇺🇸</span>
                <span>United States (15 years, West Coast)</span>
              </p>
              <p className="flex items-center">
                <span className="text-2xl mr-2">🇫🇷</span>
                <span>France (Paris)</span>
              </p>
              <p className="flex items-center">
                <span className="text-2xl mr-2">🇨🇭</span>
                <span>Switzerland (Lausanne)</span>
              </p>
              <p className="text-sm text-gray-600 mt-4">
                Executive LT member of Nike's $5B APLA business, with extensive experience across Asia-Pacific, Latin America, and EMEA.
              </p>
            </div>
          </div>
        </div>

        {/* Contact/Networks */}
        <div className="bg-gradient-to-r from-primary to-secondary text-white rounded-xl p-8">
          <h2 className="text-2xl font-bold mb-4">Connect</h2>
          <div className="grid md:grid-cols-3 gap-6 mb-6">
            <div>
              <p className="font-semibold mb-1">Email</p>
              <a href="mailto:andrew@talentoptima.co" className="hover:underline">
                andrew@talentoptima.co
              </a>
            </div>
            <div>
              <p className="font-semibold mb-1">Phone</p>
              <a href="tel:+447307332331" className="hover:underline">
                +44 7307 332 331
              </a>
            </div>
            <div>
              <p className="font-semibold mb-1">Location</p>
              <p>Leamington Spa, United Kingdom</p>
            </div>
          </div>

          <div className="mb-6 pt-6 border-t border-white/20">
            <p className="font-semibold mb-3">Professional Networks</p>
            <a
              href="https://www.linkedin.com/in/apkilshaw/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center bg-white/20 hover:bg-white/30 px-4 py-2 rounded-lg transition-colors mb-3"
            >
              <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
              </svg>
              Connect on LinkedIn
            </a>
          </div>

          <div className="pt-6 border-t border-white/20">
            <p className="text-sm">
              <strong>Networks & Boards:</strong> Member of Global50, Executive Networks, i4cp board
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
