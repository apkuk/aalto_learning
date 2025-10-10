import { useState } from 'react'
import Modal from '../../components/Modal'
import CollapsibleSection from '../../components/CollapsibleSection'

export default function AaltoStrategyTab() {
  const [selectedModal, setSelectedModal] = useState<string | null>(null)

  const closeModal = () => setSelectedModal(null)

  return (
    <div className="space-y-8">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 text-white rounded-xl p-8 text-center shadow-xl">
        <div className="text-5xl mb-4">⚡</div>
        <h1 className="text-4xl font-bold mb-4">Strategic AI Opportunities for Aalto Energia</h1>
        <p className="text-xl opacity-90">Transforming Electricity Retail in Finland with AI-Powered Intelligence</p>
      </div>

      {/* Company & Market Overview Cards */}
      <div className="grid md:grid-cols-2 gap-6">
        {/* Company Overview Card */}
        <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow">
          <div className="flex items-center mb-4">
            <span className="text-4xl mr-3">🏢</span>
            <h2 className="text-2xl font-bold text-gray-900">Aalto Energia Overview</h2>
          </div>
          <p className="text-gray-700 mb-4">
            Nordic electricity retailer serving residential and SME customers with innovative, data-driven products and customer-centric service.
          </p>
          <button
            onClick={() => setSelectedModal('company')}
            className="bg-gradient-to-r from-primary to-secondary text-white px-6 py-2 rounded-lg hover:scale-105 transition-transform font-semibold"
          >
            Learn More
          </button>
        </div>

        {/* Market Context Card */}
        <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow">
          <div className="flex items-center mb-4">
            <span className="text-4xl mr-3">📊</span>
            <h2 className="text-2xl font-bold text-gray-900">Market Context</h2>
          </div>
          <p className="text-gray-700 mb-4">
            Understanding the Finnish/Nordic electricity retail landscape, market design, and the unique opportunities for AI innovation.
          </p>
          <button
            onClick={() => setSelectedModal('market')}
            className="bg-gradient-to-r from-primary to-secondary text-white px-6 py-2 rounded-lg hover:scale-105 transition-transform font-semibold"
          >
            View Market Insights
          </button>
        </div>
      </div>

      {/* Value Chain Map */}
      <div className="bg-white rounded-xl shadow-lg p-8">
        <div className="flex items-center mb-6">
          <span className="text-4xl mr-3">🔮</span>
          <h2 className="text-3xl font-bold text-gray-900">Electricity Retail Value Chain</h2>
        </div>
        <p className="text-gray-700 mb-6">
          The end-to-end value chain shows where AI can create the most impact across customer acquisition, service delivery, and retention.
        </p>

        <div className="space-y-4">
          <CollapsibleSection title="1. Product Design & Pricing" icon="💡">
            <div className="space-y-2 text-gray-700">
              <p className="font-semibold">Key Capabilities:</p>
              <ul className="list-disc list-inside space-y-1 ml-4">
                <li>Market analysis and competitive intelligence</li>
                <li>Risk modeling and hedging strategy</li>
                <li>Dynamic pricing algorithms</li>
                <li>Customer segmentation and targeting</li>
              </ul>
            </div>
          </CollapsibleSection>

          <CollapsibleSection title="2. Customer Acquisition" icon="🎯">
            <div className="space-y-2 text-gray-700">
              <p className="font-semibold">Key Capabilities:</p>
              <ul className="list-disc list-inside space-y-1 ml-4">
                <li>Targeted marketing and lead generation</li>
                <li>Automated onboarding and KYC</li>
                <li>Contract management and digital signatures</li>
                <li>Personalized customer communications</li>
              </ul>
            </div>
          </CollapsibleSection>

          <CollapsibleSection title="3. Consumption Management" icon="⚡">
            <div className="space-y-2 text-gray-700">
              <p className="font-semibold">Key Capabilities:</p>
              <ul className="list-disc list-inside space-y-1 ml-4">
                <li>Real-time data collection and processing</li>
                <li>Consumption forecasting and anomaly detection</li>
                <li>Demand response and flexibility optimization</li>
                <li>Grid services and ancillary market participation</li>
              </ul>
            </div>
          </CollapsibleSection>

          <CollapsibleSection title="4. Billing & Collections" icon="💳">
            <div className="space-y-2 text-gray-700">
              <p className="font-semibold">Key Capabilities:</p>
              <ul className="list-disc list-inside space-y-1 ml-4">
                <li>Automated billing and invoicing</li>
                <li>Payment processing and reconciliation</li>
                <li>Credit risk assessment and collections</li>
                <li>Dispute resolution and customer support</li>
              </ul>
            </div>
          </CollapsibleSection>

          <CollapsibleSection title="5. Customer Service & Retention" icon="🤝">
            <div className="space-y-2 text-gray-700">
              <p className="font-semibold">Key Capabilities:</p>
              <ul className="list-disc list-inside space-y-1 ml-4">
                <li>AI-powered chatbots and virtual assistants</li>
                <li>Proactive customer engagement</li>
                <li>Churn prediction and retention campaigns</li>
                <li>Personalized energy insights and recommendations</li>
              </ul>
            </div>
          </CollapsibleSection>

          <CollapsibleSection title="6. Compliance & Reporting" icon="📋">
            <div className="space-y-2 text-gray-700">
              <p className="font-semibold">Key Capabilities:</p>
              <ul className="list-disc list-inside space-y-1 ml-4">
                <li>Regulatory compliance automation</li>
                <li>Sustainability reporting and carbon tracking</li>
                <li>Data governance and privacy management</li>
                <li>Audit trails and financial reporting</li>
              </ul>
            </div>
          </CollapsibleSection>
        </div>
      </div>

      {/* AI Opportunities - Main Section */}
      <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-8">
        <div className="text-center mb-8">
          <div className="text-5xl mb-4">🎯</div>
          <h2 className="text-3xl font-bold text-gray-900 mb-2">AI Use Case Opportunities</h2>
          <p className="text-gray-700">12 strategic use cases across the value chain, organized by business function</p>
        </div>

        {/* Section A: Product, Pricing & Risk */}
        <div className="mb-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
            <span className="text-3xl mr-3">💡</span>
            Section A: Product, Pricing & Risk Management
          </h3>
          <div className="grid md:grid-cols-3 gap-4">
            <UseCaseCard
              title="Dynamic Pricing Engine"
              icon="💰"
              description="AI-driven spot price forecasting and risk-adjusted pricing for retail contracts"
              onClick={() => setSelectedModal('uc-pricing')}
            />
            <UseCaseCard
              title="Product Innovation Lab"
              icon="🔬"
              description="AI-assisted design of new tariff structures based on customer behavior and market trends"
              onClick={() => setSelectedModal('uc-product')}
            />
            <UseCaseCard
              title="Portfolio Risk Optimizer"
              icon="⚖️"
              description="Real-time portfolio risk assessment and automated hedging recommendations"
              onClick={() => setSelectedModal('uc-risk')}
            />
          </div>
        </div>

        {/* Section B: Customer Flexibility & Grid Services */}
        <div className="mb-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
            <span className="text-3xl mr-3">⚡</span>
            Section B: Customer Flexibility & Grid Services
          </h3>
          <div className="grid md:grid-cols-2 gap-4">
            <UseCaseCard
              title="Flexibility Aggregation Platform"
              icon="🔌"
              description="AI-orchestrated demand response across customer portfolios for grid balancing"
              onClick={() => setSelectedModal('uc-flex')}
            />
            <UseCaseCard
              title="Grid Services Marketplace"
              icon="🌐"
              description="Automated participation in FCR, FFR, and balancing markets using customer flexibility"
              onClick={() => setSelectedModal('uc-grid')}
            />
          </div>
        </div>

        {/* Section C: Acquisition, Onboarding & Service */}
        <div className="mb-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
            <span className="text-3xl mr-3">🎯</span>
            Section C: Acquisition, Onboarding & Customer Service
          </h3>
          <div className="grid md:grid-cols-3 gap-4">
            <UseCaseCard
              title="Smart Lead Scoring"
              icon="🎲"
              description="AI-powered lead qualification and conversion prediction for targeted marketing"
              onClick={() => setSelectedModal('uc-leads')}
            />
            <UseCaseCard
              title="Instant Onboarding Assistant"
              icon="🚀"
              description="Conversational AI for frictionless customer onboarding and contract setup"
              onClick={() => setSelectedModal('uc-onboard')}
            />
            <UseCaseCard
              title="24/7 AI Customer Support"
              icon="🤖"
              description="Intelligent chatbot handling 80% of customer inquiries autonomously"
              onClick={() => setSelectedModal('uc-support')}
            />
          </div>
        </div>

        {/* Section D: Billing, Collections & Retention */}
        <div className="mb-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
            <span className="text-3xl mr-3">💳</span>
            Section D: Billing, Collections & Retention
          </h3>
          <div className="grid md:grid-cols-3 gap-4">
            <UseCaseCard
              title="Predictive Billing Anomaly Detection"
              icon="🔍"
              description="AI identification of billing errors and consumption anomalies before customer complaints"
              onClick={() => setSelectedModal('uc-billing')}
            />
            <UseCaseCard
              title="Intelligent Collections Agent"
              icon="💸"
              description="AI-optimized payment reminders and personalized collections strategies"
              onClick={() => setSelectedModal('uc-collections')}
            />
            <UseCaseCard
              title="Churn Prevention System"
              icon="🛡️"
              description="Predictive churn modeling with AI-recommended retention interventions"
              onClick={() => setSelectedModal('uc-churn')}
            />
          </div>
        </div>

        {/* Section E: Compliance & Sustainability */}
        <div className="mb-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
            <span className="text-3xl mr-3">📋</span>
            Section E: Compliance, Sustainability & Reporting
          </h3>
          <div className="grid md:grid-cols-1 gap-4">
            <UseCaseCard
              title="Automated Sustainability Reporting"
              icon="🌱"
              description="AI-powered carbon tracking, renewable energy certificates, and ESG reporting"
              onClick={() => setSelectedModal('uc-sustainability')}
            />
          </div>
        </div>
      </div>

      {/* Implementation Phases */}
      <div className="bg-white rounded-xl shadow-lg p-8">
        <div className="flex items-center mb-6">
          <span className="text-4xl mr-3">🗺️</span>
          <h2 className="text-3xl font-bold text-gray-900">Implementation Roadmap</h2>
        </div>

        <div className="space-y-6">
          <TimelinePhase
            phase="Phase 0: Foundation"
            duration="2-3 months"
            color="bg-blue-500"
            items={[
              "Data infrastructure audit and cleanup",
              "API integrations with Datahub and internal systems",
              "Team training and AI readiness assessment",
              "Quick wins: Chatbot POC, basic price forecasting"
            ]}
          />
          <TimelinePhase
            phase="Phase 1: Customer-Facing AI"
            duration="4-6 months"
            color="bg-purple-500"
            items={[
              "Deploy AI customer support chatbot",
              "Launch dynamic pricing engine (pilot)",
              "Implement churn prediction and retention campaigns",
              "Build instant onboarding assistant"
            ]}
          />
          <TimelinePhase
            phase="Phase 2: Operations & Risk"
            duration="6-9 months"
            color="bg-pink-500"
            items={[
              "Portfolio risk optimizer and hedging automation",
              "Billing anomaly detection system",
              "Smart lead scoring and marketing optimization",
              "Intelligent collections workflows"
            ]}
          />
          <TimelinePhase
            phase="Phase 3: Advanced Services"
            duration="9-12 months"
            color="bg-indigo-500"
            items={[
              "Flexibility aggregation platform (MVP)",
              "Grid services marketplace participation",
              "Product innovation lab and new tariff testing",
              "Automated sustainability reporting"
            ]}
          />
        </div>
      </div>

      {/* Risks & Constraints */}
      <div className="bg-gradient-to-r from-orange-50 to-red-50 rounded-xl p-8 border-l-4 border-orange-500">
        <div className="flex items-center mb-4">
          <span className="text-4xl mr-3">⚠️</span>
          <h2 className="text-2xl font-bold text-gray-900">Key Risks & Constraints</h2>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          <div>
            <h3 className="font-bold text-gray-900 mb-2">Regulatory Risk</h3>
            <p className="text-gray-700 text-sm">Finnish energy regulations, GDPR compliance, and potential AI-specific regulation may limit certain use cases.</p>
          </div>
          <div>
            <h3 className="font-bold text-gray-900 mb-2">Model Risk</h3>
            <p className="text-gray-700 text-sm">AI models may underperform in extreme market conditions or with insufficient training data, requiring human oversight.</p>
          </div>
          <div>
            <h3 className="font-bold text-gray-900 mb-2">Operational Complexity</h3>
            <p className="text-gray-700 text-sm">Integration with legacy systems, data quality issues, and change management may slow deployment.</p>
          </div>
        </div>
      </div>

      {/* Modals for detailed content */}
      <CompanyModal isOpen={selectedModal === 'company'} onClose={closeModal} />
      <MarketModal isOpen={selectedModal === 'market'} onClose={closeModal} />

      {/* Use Case Modals */}
      <UseCaseModal
        isOpen={selectedModal === 'uc-pricing'}
        onClose={closeModal}
        title="Dynamic Pricing Engine"
        icon="💰"
        jtbd="As a pricing manager, I need real-time price recommendations that balance competitiveness with profitability and risk."
        value="Reduces pricing errors, improves margins by 2-5%, and enables faster response to market volatility."
        edge="Aalto's access to real-time Datahub data and customer behavior insights gives superior forecasting accuracy."
        whatItLooks="Dashboard showing hourly spot forecasts, competitor price tracking, automated pricing rules, and margin alerts."
      />
      <UseCaseModal
        isOpen={selectedModal === 'uc-product'}
        onClose={closeModal}
        title="Product Innovation Lab"
        icon="🔬"
        jtbd="As a product manager, I want to test new tariff structures based on customer preferences and simulated market conditions."
        value="Accelerates product development cycles, enables A/B testing at scale, and identifies winning products faster."
        edge="Aalto's customer segmentation data and behavioral analytics enable hyper-personalized tariff design."
        whatItLooks="Simulation environment for tariff design, customer preference modeling, revenue/margin projections, and pilot testing tools."
      />
      <UseCaseModal
        isOpen={selectedModal === 'uc-risk'}
        onClose={closeModal}
        title="Portfolio Risk Optimizer"
        icon="⚖️"
        jtbd="As a risk manager, I need continuous monitoring of portfolio exposure and automated hedging recommendations."
        value="Reduces risk exposure, prevents costly margin calls, and optimizes hedging costs by 10-15%."
        edge="Real-time consumption data allows more accurate risk calculations than competitors relying on monthly estimates."
        whatItLooks="Real-time portfolio dashboard, VaR calculations, automated hedging alerts, and integration with wholesale trading platforms."
      />
      <UseCaseModal
        isOpen={selectedModal === 'uc-flex'}
        onClose={closeModal}
        title="Flexibility Aggregation Platform"
        icon="🔌"
        jtbd="As an energy services manager, I want to orchestrate customer flexibility (heating, EVs, batteries) for grid balancing revenue."
        value="Creates new revenue streams from grid services (€50-200/customer/year), improves grid stability, and enhances customer value."
        edge="Aalto's smart meter data access and customer trust enable more reliable and predictable flexibility than aggregators."
        whatItLooks="Customer flexibility dashboard, opt-in management, automated dispatch algorithms, revenue sharing calculations, and performance analytics."
      />
      <UseCaseModal
        isOpen={selectedModal === 'uc-grid'}
        onClose={closeModal}
        title="Grid Services Marketplace"
        icon="🌐"
        jtbd="As a grid services trader, I need to automatically bid customer flexibility into FCR/FFR/balancing markets."
        value="Generates €500K-2M/year in ancillary services revenue, stabilizes the grid, and reduces customer bills."
        edge="Direct retail relationship with customers and real-time control capabilities beat pure aggregators."
        whatItLooks="Market bidding interface, automated dispatch system, settlement reconciliation, and customer payout dashboards."
      />
      <UseCaseModal
        isOpen={selectedModal === 'uc-leads'}
        onClose={closeModal}
        title="Smart Lead Scoring"
        icon="🎲"
        jtbd="As a marketing manager, I want to prioritize leads most likely to convert and identify their optimal contract type."
        value="Increases conversion rates by 20-30%, reduces CAC by 15-25%, and improves marketing ROI."
        edge="Aalto's first-party data on customer behavior and churn patterns enables better predictions than generic tools."
        whatItLooks="CRM integration showing lead scores, conversion probability, recommended products, and optimal contact timing."
      />
      <UseCaseModal
        isOpen={selectedModal === 'uc-onboard'}
        onClose={closeModal}
        title="Instant Onboarding Assistant"
        icon="🚀"
        jtbd="As a new customer, I want to switch to Aalto in minutes without paperwork or phone calls."
        value="Reduces onboarding time from days to minutes, lowers operational costs by 40%, and improves customer satisfaction."
        edge="AI understands Finnish/Swedish, integrates with Datahub for instant meter data access, and automates KYC."
        whatItLooks="Conversational interface guiding customers through address verification, contract selection, Datahub integration, and payment setup."
      />
      <UseCaseModal
        isOpen={selectedModal === 'uc-support'}
        onClose={closeModal}
        title="24/7 AI Customer Support"
        icon="🤖"
        jtbd="As a customer, I need instant answers to billing questions, consumption insights, and contract changes any time of day."
        value="Handles 80% of inquiries autonomously, reduces support costs by 50%, and improves customer satisfaction scores."
        edge="Trained on Aalto's specific products, Finnish regulations, and integrated with customer data for personalized responses."
        whatItLooks="Chat widget on website/app, voice assistant integration, seamless handoff to human agents, and knowledge base management."
      />
      <UseCaseModal
        isOpen={selectedModal === 'uc-billing'}
        onClose={closeModal}
        title="Predictive Billing Anomaly Detection"
        icon="🔍"
        jtbd="As a billing manager, I need to catch billing errors and consumption anomalies before customers complain."
        value="Reduces billing disputes by 60%, improves customer trust, and catches revenue leakage from metering errors."
        edge="Aalto's historical consumption patterns and real-time meter data enable early anomaly detection."
        whatItLooks="Automated alerts for unusual consumption, billing discrepancy dashboards, proactive customer notifications, and automated corrections."
      />
      <UseCaseModal
        isOpen={selectedModal === 'uc-collections'}
        onClose={closeModal}
        title="Intelligent Collections Agent"
        icon="💸"
        jtbd="As a collections manager, I want personalized payment reminders and optimized collections strategies for each customer segment."
        value="Improves collection rates by 15-20%, reduces bad debt, and maintains better customer relationships."
        edge="AI learns which communication channels and timing work best for different customer profiles."
        whatItLooks="Automated payment reminder sequences, personalized messaging, payment plan recommendations, and collections performance dashboards."
      />
      <UseCaseModal
        isOpen={selectedModal === 'uc-churn'}
        onClose={closeModal}
        title="Churn Prevention System"
        icon="🛡️"
        jtbd="As a retention manager, I need to identify customers likely to churn and intervene with targeted retention offers."
        value="Reduces churn by 20-30%, improves customer lifetime value, and optimizes retention spend."
        edge="Aalto's consumption data, support interactions, and payment history create superior churn prediction models."
        whatItLooks="Churn risk dashboards, automated intervention triggers, personalized retention offers, and campaign performance tracking."
      />
      <UseCaseModal
        isOpen={selectedModal === 'uc-sustainability'}
        onClose={closeModal}
        title="Automated Sustainability Reporting"
        icon="🌱"
        jtbd="As a sustainability manager, I need automated tracking of carbon emissions, renewable energy %, and ESG metrics."
        value="Meets regulatory requirements, supports marketing claims, and enables carbon-neutral product offerings."
        edge="Real-time consumption data + grid carbon intensity tracking provides customer-level carbon footprints."
        whatItLooks="Automated ESG reports, customer carbon dashboards, renewable energy certificate tracking, and regulatory compliance filings."
      />
    </div>
  )
}

// Helper Components
function UseCaseCard({ title, icon, description, onClick }: {
  title: string
  icon: string
  description: string
  onClick: () => void
}) {
  return (
    <div
      onClick={onClick}
      className="bg-white rounded-lg p-6 shadow-md hover:shadow-xl transition-all cursor-pointer transform hover:-translate-y-1"
    >
      <div className="text-4xl mb-3">{icon}</div>
      <h4 className="text-lg font-bold text-gray-900 mb-2">{title}</h4>
      <p className="text-gray-600 text-sm mb-3">{description}</p>
      <span className="text-primary text-sm font-semibold">Learn more →</span>
    </div>
  )
}

function TimelinePhase({ phase, duration, color, items }: {
  phase: string
  duration: string
  color: string
  items: string[]
}) {
  return (
    <div className="flex items-start">
      <div className={`${color} text-white rounded-full w-12 h-12 flex items-center justify-center font-bold flex-shrink-0 mr-4`}>
        {phase.charAt(6)}
      </div>
      <div className="flex-1">
        <div className="flex items-center justify-between mb-2">
          <h3 className="text-xl font-bold text-gray-900">{phase}</h3>
          <span className="bg-gray-100 px-3 py-1 rounded-full text-sm font-semibold text-gray-700">{duration}</span>
        </div>
        <ul className="space-y-2">
          {items.map((item, idx) => (
            <li key={idx} className="flex items-start text-gray-700">
              <span className="text-primary mr-2">•</span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

function CompanyModal({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
  return (
    <Modal isOpen={isOpen} onClose={onClose} title="Aalto Energia - Company Overview" size="xlarge">
      <div className="space-y-6">
        <section>
          <h3 className="text-xl font-bold text-gray-900 mb-3">What Aalto Energia Does</h3>
          <p className="text-gray-700 mb-3">
            Aalto Energia is a forward-thinking electricity retailer operating in the Finnish and Nordic markets.
            They serve residential and SME customers with a focus on innovative pricing models, exceptional customer
            service, and digital-first experiences.
          </p>
          <p className="text-gray-700">
            Unlike traditional utilities, Aalto Energia embraces technology and data to create products that align
            with customer needs and market dynamics.
          </p>
        </section>

        <section>
          <h3 className="text-xl font-bold text-gray-900 mb-3">Market Position</h3>
          <div className="bg-blue-50 rounded-lg p-4">
            <ul className="space-y-2 text-gray-700">
              <li className="flex items-start">
                <span className="text-primary mr-2 font-bold">•</span>
                <span><strong>Customer Base:</strong> 50,000+ residential and SME customers across Finland</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-2 font-bold">•</span>
                <span><strong>Revenue:</strong> €50-100M annual revenue (estimated)</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-2 font-bold">•</span>
                <span><strong>Differentiation:</strong> Digital-first, customer-centric, innovative pricing</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-2 font-bold">•</span>
                <span><strong>Competition:</strong> Competing against incumbents (Helen, Fortum) and new entrants</span>
              </li>
            </ul>
          </div>
        </section>

        <section>
          <h3 className="text-xl font-bold text-gray-900 mb-3">Product Portfolio</h3>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-green-50 rounded-lg p-4">
              <h4 className="font-bold text-gray-900 mb-2">Spot-Based Contracts</h4>
              <p className="text-gray-700 text-sm">
                Customers pay hourly spot price + margin. Popular with price-conscious customers who can shift consumption.
              </p>
            </div>
            <div className="bg-purple-50 rounded-lg p-4">
              <h4 className="font-bold text-gray-900 mb-2">Fixed-Price Contracts</h4>
              <p className="text-gray-700 text-sm">
                Price certainty for 6-24 months. Appeals to risk-averse customers seeking budget stability.
              </p>
            </div>
            <div className="bg-orange-50 rounded-lg p-4">
              <h4 className="font-bold text-gray-900 mb-2">Hybrid Products</h4>
              <p className="text-gray-700 text-sm">
                Partially fixed, partially spot-based. Balances risk and opportunity for sophisticated customers.
              </p>
            </div>
            <div className="bg-pink-50 rounded-lg p-4">
              <h4 className="font-bold text-gray-900 mb-2">Green Energy Options</h4>
              <p className="text-gray-700 text-sm">
                100% renewable energy certificates. Growing segment driven by sustainability concerns.
              </p>
            </div>
          </div>
        </section>

        <section>
          <h3 className="text-xl font-bold text-gray-900 mb-3">Go-to-Market Strategy</h3>
          <div className="space-y-3">
            <div className="bg-gray-50 rounded-lg p-4">
              <h4 className="font-semibold text-gray-900">Digital Marketing</h4>
              <p className="text-gray-700 text-sm">SEO, SEM, social media, comparison sites, and affiliate partnerships</p>
            </div>
            <div className="bg-gray-50 rounded-lg p-4">
              <h4 className="font-semibold text-gray-900">Self-Service Onboarding</h4>
              <p className="text-gray-700 text-sm">Fully digital signup process with Datahub integration for instant activation</p>
            </div>
            <div className="bg-gray-50 rounded-lg p-4">
              <h4 className="font-semibold text-gray-900">Customer App & Portal</h4>
              <p className="text-gray-700 text-sm">Mobile-first experience for consumption tracking, billing, and support</p>
            </div>
          </div>
        </section>

        <section>
          <h3 className="text-xl font-bold text-gray-900 mb-3">Digital Ecosystem</h3>
          <p className="text-gray-700 mb-3">Aalto Energia operates a modern tech stack including:</p>
          <ul className="grid md:grid-cols-2 gap-2 text-gray-700">
            <li className="flex items-start">
              <span className="text-primary mr-2">→</span>
              <span>Datahub API integration (meter data)</span>
            </li>
            <li className="flex items-start">
              <span className="text-primary mr-2">→</span>
              <span>CRM system (customer management)</span>
            </li>
            <li className="flex items-start">
              <span className="text-primary mr-2">→</span>
              <span>Billing engine (consumption → invoices)</span>
            </li>
            <li className="flex items-start">
              <span className="text-primary mr-2">→</span>
              <span>Customer portal & mobile app</span>
            </li>
            <li className="flex items-start">
              <span className="text-primary mr-2">→</span>
              <span>Risk management tools</span>
            </li>
            <li className="flex items-start">
              <span className="text-primary mr-2">→</span>
              <span>Marketing automation platforms</span>
            </li>
          </ul>
        </section>
      </div>
    </Modal>
  )
}

function MarketModal({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
  return (
    <Modal isOpen={isOpen} onClose={onClose} title="Finnish Electricity Retail Market" size="xlarge">
      <div className="space-y-6">
        <section>
          <h3 className="text-xl font-bold text-gray-900 mb-3">Market Design</h3>
          <p className="text-gray-700 mb-3">
            Finland operates a deregulated electricity market where retail and distribution are separated.
            Customers can choose their electricity retailer while the local DSO (distribution system operator)
            handles grid operations.
          </p>
          <div className="bg-blue-50 rounded-lg p-4">
            <ul className="space-y-2 text-gray-700">
              <li className="flex items-start">
                <span className="text-primary mr-2 font-bold">•</span>
                <span><strong>Nord Pool:</strong> Nordic wholesale electricity exchange with hourly spot prices</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-2 font-bold">•</span>
                <span><strong>Datahub:</strong> Centralized platform for meter data exchange and switching</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-2 font-bold">•</span>
                <span><strong>Switching:</strong> Customers can switch retailers easily, often within 2 weeks</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-2 font-bold">•</span>
                <span><strong>Smart Meters:</strong> Nearly universal deployment enables hourly consumption tracking</span>
              </li>
            </ul>
          </div>
        </section>

        <section>
          <h3 className="text-xl font-bold text-gray-900 mb-3">Contract Mix</h3>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-green-50 rounded-lg p-4">
              <h4 className="font-bold text-gray-900 mb-2">Spot Contracts (40-50%)</h4>
              <p className="text-gray-700 text-sm">
                Customers pay hourly market price + retailer margin. High volatility but often cheaper long-term.
              </p>
            </div>
            <div className="bg-purple-50 rounded-lg p-4">
              <h4 className="font-bold text-gray-900 mb-2">Fixed Contracts (40-50%)</h4>
              <p className="text-gray-700 text-sm">
                Fixed price per kWh for 6-24 months. Predictable bills but may be more expensive in low-price periods.
              </p>
            </div>
            <div className="bg-orange-50 rounded-lg p-4">
              <h4 className="font-bold text-gray-900 mb-2">Hybrid (5-10%)</h4>
              <p className="text-gray-700 text-sm">
                Mix of spot and fixed pricing. Growing segment for customers who want partial hedging.
              </p>
            </div>
            <div className="bg-pink-50 rounded-lg p-4">
              <h4 className="font-bold text-gray-900 mb-2">Other (5%)</h4>
              <p className="text-gray-700 text-sm">
                Seasonal contracts, capped spot, and other innovative structures.
              </p>
            </div>
          </div>
        </section>

        <section>
          <h3 className="text-xl font-bold text-gray-900 mb-3">Market Volatility & Pricing Dynamics</h3>
          <p className="text-gray-700 mb-3">
            Nordic electricity markets are highly volatile due to weather dependence (hydro, wind) and interconnections
            with continental Europe. Recent years have seen:
          </p>
          <ul className="space-y-2 text-gray-700">
            <li className="flex items-start">
              <span className="text-primary mr-2">→</span>
              <span>Extreme price spikes during winter 2022-2023 (energy crisis)</span>
            </li>
            <li className="flex items-start">
              <span className="text-primary mr-2">→</span>
              <span>Growing renewable penetration (wind/solar) increasing intraday volatility</span>
            </li>
            <li className="flex items-start">
              <span className="text-primary mr-2">→</span>
              <span>Emergence of negative prices during high wind/low demand periods</span>
            </li>
            <li className="flex items-start">
              <span className="text-primary mr-2">→</span>
              <span>Increased customer awareness and price sensitivity</span>
            </li>
          </ul>
        </section>

        <section>
          <h3 className="text-xl font-bold text-gray-900 mb-3">Datahub Integration</h3>
          <p className="text-gray-700 mb-3">
            The Finnish Datahub (operated by Fingrid) is a game-changer for retailers:
          </p>
          <div className="bg-indigo-50 rounded-lg p-4">
            <ul className="space-y-2 text-gray-700 text-sm">
              <li className="flex items-start">
                <span className="text-primary mr-2 font-bold">•</span>
                <span>Centralized access to hourly smart meter data for all customers</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-2 font-bold">•</span>
                <span>Automated customer switching and meter point registration</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-2 font-bold">•</span>
                <span>Real-time consumption data enabling innovative products</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-2 font-bold">•</span>
                <span>Standardized APIs reducing integration complexity</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-2 font-bold">•</span>
                <span>Foundation for demand response and flexibility services</span>
              </li>
            </ul>
          </div>
        </section>

        <section>
          <h3 className="text-xl font-bold text-gray-900 mb-3">Competitive Landscape</h3>
          <div className="space-y-3">
            <div className="bg-gray-50 rounded-lg p-4">
              <h4 className="font-semibold text-gray-900">Incumbent Utilities (Fortum, Helen, Vattenfall)</h4>
              <p className="text-gray-700 text-sm">Large customer bases, brand trust, but slow to innovate</p>
            </div>
            <div className="bg-gray-50 rounded-lg p-4">
              <h4 className="font-semibold text-gray-900">Digital Challengers (Aalto Energia, Oomi, etc.)</h4>
              <p className="text-gray-700 text-sm">Nimble, tech-savvy, customer-centric, but smaller scale</p>
            </div>
            <div className="bg-gray-50 rounded-lg p-4">
              <h4 className="font-semibold text-gray-900">Price Comparison Sites</h4>
              <p className="text-gray-700 text-sm">Sahko.tk, Sähkön kilpailutus - drive switching behavior</p>
            </div>
          </div>
        </section>

        <section>
          <h3 className="text-xl font-bold text-gray-900 mb-3">Regulatory Environment</h3>
          <p className="text-gray-700 mb-3">Key regulations affecting AI opportunities:</p>
          <ul className="space-y-2 text-gray-700 text-sm">
            <li className="flex items-start">
              <span className="text-primary mr-2">→</span>
              <span><strong>GDPR:</strong> Strict data privacy rules for customer data usage</span>
            </li>
            <li className="flex items-start">
              <span className="text-primary mr-2">→</span>
              <span><strong>Energy Market Act:</strong> Consumer protection, billing accuracy, transparency</span>
            </li>
            <li className="flex items-start">
              <span className="text-primary mr-2">→</span>
              <span><strong>Grid Codes:</strong> Technical requirements for flexibility and demand response</span>
            </li>
            <li className="flex items-start">
              <span className="text-primary mr-2">→</span>
              <span><strong>Sustainability Reporting:</strong> Upcoming EU requirements for carbon tracking</span>
            </li>
          </ul>
        </section>
      </div>
    </Modal>
  )
}

function UseCaseModal({ isOpen, onClose, title, icon, jtbd, value, edge, whatItLooks }: {
  isOpen: boolean
  onClose: () => void
  title: string
  icon: string
  jtbd: string
  value: string
  edge: string
  whatItLooks: string
}) {
  return (
    <Modal isOpen={isOpen} onClose={onClose} title={`${icon} ${title}`} size="large">
      <div className="space-y-6">
        <section className="bg-blue-50 rounded-lg p-6">
          <h3 className="text-lg font-bold text-gray-900 mb-2">Job to Be Done</h3>
          <p className="text-gray-700">{jtbd}</p>
        </section>

        <section className="bg-green-50 rounded-lg p-6">
          <h3 className="text-lg font-bold text-gray-900 mb-2">Why It's Valuable</h3>
          <p className="text-gray-700">{value}</p>
        </section>

        <section className="bg-purple-50 rounded-lg p-6">
          <h3 className="text-lg font-bold text-gray-900 mb-2">Aalto's Competitive Edge</h3>
          <p className="text-gray-700">{edge}</p>
        </section>

        <section className="bg-orange-50 rounded-lg p-6">
          <h3 className="text-lg font-bold text-gray-900 mb-2">What It Looks Like</h3>
          <p className="text-gray-700">{whatItLooks}</p>
        </section>
      </div>
    </Modal>
  )
}
