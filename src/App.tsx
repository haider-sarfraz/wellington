import Header from './components/Header';
import Hero from './components/Hero';
import OurStory from './components/OurStory';

function App() {
  return (
    <div className="min-h-screen">
      <div className="relative">
        <Header />
        <Hero />
      </div>
      <OurStory />
    </div>
  );
}

export default App;
