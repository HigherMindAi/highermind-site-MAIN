import { Routes, Route, Navigate } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import AiSearch from './pages/AiSearch';
import WhoIHelp from './pages/WhoIHelp';
import About from './pages/About';
import Contact from './pages/Contact';
import HowItWorks from './pages/HowItWorks';
import TheRead from './pages/TheRead';
import { LocalSeoHub, LocalSeoTown } from './pages/LocalSeo';
import ServicePage from './pages/ServicePage';
import LocationsHub from './pages/LocationsHub';
import LocationPage from './pages/LocationPage';
import Proof from './pages/Proof';
import Coverage from './pages/Coverage';
import ScopeLimits from './pages/ScopeLimits';
import Book from './pages/Book';
import PropertyManagement from './pages/PropertyManagement';
import Trades from './pages/Trades';
import AnswersHub from './pages/AnswersHub';
import AnswerPage from './pages/AnswerPage';
import AutoService from './pages/AutoService';
import AutoParts from './pages/AutoParts';
import PropertySeo from './pages/PropertySeo';
import PropertyIntake from './pages/PropertyIntake';
import CondoMarketing from './pages/CondoMarketing';
import TheRecord from './pages/TheRecord';
import Work from './pages/Work';
import Privacy from './pages/Privacy';
import NotFound from './pages/NotFound';

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="ai-search-optimization" element={<AiSearch />} />
        <Route path="property-management" element={<PropertyManagement />} />
        <Route path="trades" element={<Trades />} />
        <Route path="answers" element={<AnswersHub />} />
        <Route path="answers/:slug" element={<AnswerPage />} />
        <Route path="auto-service-collision" element={<AutoService />} />
        <Route path="auto-parts-recyclers" element={<AutoParts />} />
        <Route path="the-record" element={<TheRecord />} />
        <Route path="property-management-seo" element={<PropertySeo />} />
        <Route path="property-management-intake" element={<PropertyIntake />} />
        <Route path="condominium-management-marketing" element={<CondoMarketing />} />
        <Route path="who-i-help" element={<WhoIHelp />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
        <Route path="how-it-works" element={<HowItWorks />} />
        <Route path="the-read" element={<TheRead />} />
        <Route path="local-seo" element={<LocalSeoHub />} />
        <Route path="local-seo/:slug" element={<LocalSeoTown />} />
        <Route path="services" element={<Navigate to="/how-it-works/" replace />} />
        <Route path="services/:slug" element={<ServicePage />} />
        <Route path="property-management-seo/locations" element={<LocationsHub />} />
        <Route path="property-management-seo/:slug" element={<LocationPage />} />
        <Route path="coverage" element={<Coverage />} />
        <Route path="scope-limits" element={<ScopeLimits />} />
        <Route path="proof" element={<Proof />} />
        <Route path="work" element={<Work />} />
        <Route path="book" element={<Book />} />
        <Route path="privacy" element={<Privacy />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}
