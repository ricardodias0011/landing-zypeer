import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/home';
import LiabilityPolicyPage from './pages/liability-policy/page';
import { ZypeerLinks } from './pages/links';
import PrivacyPolicyPage from './pages/privacy-policy/page';
function App() {
  useEffect(() => {
    AOS.init({ duration: 500 });
  }, []);
  return (
    <BrowserRouter>
      <div className="dark:bg-black dark:text-white flex flex-col items-center w-full overflow-x-hidden">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/edu/liability-policy" element={<LiabilityPolicyPage />} />
          <Route path="/edu/liability-policy.html" element={<LiabilityPolicyPage />} />
          <Route path="/edu/privacy-policy" element={<PrivacyPolicyPage />} />
          <Route path="/edu/privacy-policy.html" element={<PrivacyPolicyPage />} />
          <Route path="/o/links" element={<ZypeerLinks />} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App
