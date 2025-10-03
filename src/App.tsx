import { BrowserRouter, Route } from 'react-router-dom'
import './App.css'
import Home from './pages/home'
import { Routes } from 'react-router-dom'
import PrivacyPolicyPage from './pages/liability-policy/page'
import LiabilityPolicyPage from './pages/liability-policy/page'

function App() {
  return (
    <BrowserRouter>
      <div className="dark:bg-black dark:text-white flex flex-col items-center w-full">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/edu/liability-policy" element={<PrivacyPolicyPage />} />
          <Route path="/edu/liability-policy.html" element={<PrivacyPolicyPage />} />
          <Route path="/edu/privacy-policy" element={<LiabilityPolicyPage />} />
          <Route path="/edu/privacy-policy.html" element={<LiabilityPolicyPage />} />
        </Routes>
      </div>

    </BrowserRouter>
  )
}

export default App
