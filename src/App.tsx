import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './pages/Home'
import About from './pages/About'
import WorkshopAgenda from './pages/WorkshopAgenda'
import IntroSession from './pages/IntroSession'
import MyAIStack from './pages/MyAIStack'
import WhatIUseAIFor from './pages/WhatIUseAIFor'
import FivePs from './pages/FivePs'
import Definitions from './pages/Definitions'
import BuildCustomGPT from './pages/BuildCustomGPT'
import DeepResearch from './pages/DeepResearch'
import CodingTools from './pages/CodingTools'
import NextSteps from './pages/NextSteps'
import Resources from './pages/Resources'
import TimerPage from './pages/TimerPage'

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/intro-session" element={<IntroSession />} />
          <Route path="/about" element={<About />} />
          <Route path="/my-ai-stack" element={<MyAIStack />} />
          <Route path="/what-i-use-ai-for" element={<WhatIUseAIFor />} />
          <Route path="/5ps" element={<FivePs />} />
          <Route path="/deep-dives" element={<WorkshopAgenda />} />
          <Route path="/next-steps" element={<NextSteps />} />
          <Route path="/resources" element={<Resources />} />
          <Route path="/workshop" element={<WorkshopAgenda />} />
          <Route path="/definitions" element={<Definitions />} />
          <Route path="/custom-gpt" element={<BuildCustomGPT />} />
          <Route path="/deep-research" element={<DeepResearch />} />
          <Route path="/coding-tools" element={<CodingTools />} />
          <Route path="/timer" element={<TimerPage />} />
        </Routes>
      </Layout>
    </Router>
  )
}

export default App
