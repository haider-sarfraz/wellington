import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Suspense, lazy } from 'react';
import Header from './components/Header';
import Home from './pages/home/home';
import { AppLayout } from './app-layout';
import { Footer } from './components/Footer';
import { ScrollToTop } from './components/ScrollToTop';
import { useLenis } from './hooks/useLenis';

const Gallery = lazy(() => import('./pages/Gallery'));
const Experience = lazy(() => import('./pages/Experience'));
const Plans = lazy(() => import('./pages/Plans'));
const ContactUs = lazy(() => import('./pages/contact-us').then(m => ({ default: m.ContactUs })));

function AppInner() {
  useLenis();
  return (
    <div className="min-h-screen">
      <ScrollToTop />
      <Header />
      <Suspense fallback={<div className="min-h-screen" />}>
        <Routes>
          <Route path="/" element={<AppLayout />}>
            <Route path="/" element={<Home />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/experience" element={<Experience />} />
            <Route path="/plans" element={<Plans />} />
          </Route>
          <Route path="/contact-us" element={<ContactUs />} />
        </Routes>
      </Suspense>
      <Footer />
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <AppInner />
    </BrowserRouter>
  );
}

export default App;
