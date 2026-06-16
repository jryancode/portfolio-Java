import Overlayer from './components/Overlayer';
import PortfolioModals from './components/PortfolioModals';
import Header from './components/Header';
import Home from './components/Home';
import About from './components/About';
import Resume from './components/Resume';
import Services from './components/Services';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import ThemeSwitcher from './components/ThemeSwitcher';

export default function App() {
  return (
    <>
      <Overlayer />
      <PortfolioModals />
      <div id="pagepiling" className="pagepiling">
        <Header />
        <Home />
        <About />
        <Resume />
        <Services />
        <Portfolio />
        <Contact />

        <ThemeSwitcher />
      </div>
    </>
  );
}
