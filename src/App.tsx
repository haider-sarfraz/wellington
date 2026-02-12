import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/home/home';
import Gallery from './pages/Gallery';
import Experience from './pages/Experience';
import Plans from './pages/Plans';
import { ContactUs } from './pages/contact-us';
import { AppLayout } from './app-layout';
import { Footer } from './components/Footer';

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen">
        <Header />
        <Routes>
          <Route path="/" element={<AppLayout />}>
            <Route path="/" element={<Home />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/experience" element={<Experience />} />
            <Route path="/plans" element={<Plans />} />
          </Route>
          <Route path="/contact-us" element={<ContactUs />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
