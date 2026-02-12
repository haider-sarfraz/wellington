import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/home/home';
import Gallery from './pages/Gallery';
import Experience from './pages/Experience';
import Plans from './pages/Plans';
import { Footer } from './components/Footer';
import { ContactForm } from './containers/contact-form/root';

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/plans" element={<Plans />} />
        </Routes>
        <ContactForm />
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
