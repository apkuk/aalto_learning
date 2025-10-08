import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './pages/Home'
import About from './pages/About'
import Introduction from './pages/Introduction'
import MyAIStack from './pages/MyAIStack'
import WhatIUseAIFor from './pages/WhatIUseAIFor'
import FourPs from './pages/FourPs'
import NextSteps from './pages/NextSteps'
import Resources from './pages/Resources'
import TimerPage from './pages/TimerPage'

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/intro-session" element={<Introduction />} />
          <Route path="/my-ai-stack" element={<MyAIStack />} />
          <Route path="/what-i-use-ai-for" element={<WhatIUseAIFor />} />
          <Route path="/5ps" element={<FourPs />} />
          <Route path="/next-steps" element={<NextSteps />} />
          <Route path="/resources" element={<Resources />} />
          <Route path="/timer" element={<TimerPage />} />
        </Routes>
      </Layout>
    </Router>
  )
}

export default App
