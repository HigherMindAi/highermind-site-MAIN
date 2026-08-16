import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Watershed from './pages/Watershed';
import LawFirmIntake from './pages/LawFirmIntake';
import LawFirmSeo from './pages/LawFirmSeo';
import AiSearch from './pages/AiSearch';
import Solutions from './pages/Solutions';
import About from './pages/About';
import Contact from './pages/Contact';
import ServicesHub from './pages/ServicesHub';
import ServicePage from './pages/ServicePage';
import LocationsHub from './pages/LocationsHub';
import LocationPage from './pages/LocationPage';
import Proof from './pages/Proof';
import Coverage from './pages/Coverage';
import ScopeLimits from './pages/ScopeLimits';
import Book from './pages/Book';
import PropertyManagement from './pages/PropertyManagement';
import Keystone from './pages/Keystone';
import PropertySeo from './pages/PropertySeo';
import PropertyIntake from './pages/PropertyIntake';
import CondoMarketing from './pages/CondoMarketing';
import TheRecord from './pages/TheRecord';
import NotFound from './pages/NotFound';

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="the-watershed" element={<Watershed />} />
        <Route path="law-firm-intake" element={<LawFirmIntake />} />
        <Route path="law-firm-seo" element={<LawFirmSeo />} />
        <Route path="ai-search-optimization" element={<AiSearch />} />
        <Route path="property-management" element={<PropertyManagement />} />
        <Route path="property-management/the-record" element={<TheRecord />} />
        <Route path="the-keystone" element={<Keystone />} />
        <Route path="property-management-seo" element={<PropertySeo />} />
        <Route path="property-management-intake" element={<PropertyIntake />} />
        <Route path="condominium-management-marketing" element={<CondoMarketing />} />
        <Route path="solutions" element={<Solutions />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
        <Route path="services" element={<ServicesHub />} />
        <Route path="services/:slug" element={<ServicePage />} />
        <Route path="property-management-seo/locations" element={<LocationsHub />} />
        <Route path="property-management-seo/:slug" element={<LocationPage />} />
        <Route path="coverage" element={<Coverage />} />
        <Route path="scope-limits" element={<ScopeLimits />} />
        <Route path="proof" element={<Proof />} />
        <Route path="book" element={<Book />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}
