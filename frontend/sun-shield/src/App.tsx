import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import InfoTab from './pages/InfoTab';
import Protection from './pages/Protection';
import Contact from './pages/Contact';
import TermsAndCondition from './pages/TermsAndCondition';
import Privacy from './pages/Privacy';
import { FluentProvider, webLightTheme } from "@fluentui/react-components";
import TrendsPage from "./pages/TrendsPage";

function App() {
  return (
    <FluentProvider theme={webLightTheme}>
      <Header />
      <div style={{ padding: '1rem', paddingBottom: "80px" }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="trends" element={<TrendsPage />} />
          <Route path="infotab" element={<InfoTab />} />
          <Route path="protection" element={<Protection />} />
          <Route path="contact" element={<Contact />} />
          <Route path="terms-and-condition" element={<TermsAndCondition />} />
          <Route path="privacy" element={<Privacy />} />
        </Routes>
      </div>
      <Footer />
    </FluentProvider>
  );
}

export default App;
