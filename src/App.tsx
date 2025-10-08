import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './pages/Home'
import About from './pages/About'
import WorkshopAgenda from './pages/WorkshopAgenda'
import Definitions from './pages/Definitions'
import BuildCustomGPT from './pages/BuildCustomGPT'
import DeepResearch from './pages/DeepResearch'
import CodingTools from './pages/CodingTools'

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/workshop" element={<WorkshopAgenda />} />
          <Route path="/definitions" element={<Definitions />} />
          <Route path="/custom-gpt" element={<BuildCustomGPT />} />
          <Route path="/deep-research" element={<DeepResearch />} />
          <Route path="/coding-tools" element={<CodingTools />} />
        </Routes>
      </Layout>
    </Router>
  )
}

export default App
