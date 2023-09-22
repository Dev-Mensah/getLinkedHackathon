import './App.css';
import About from './pages/About';
import Criteria from './pages/Criteria';
import FAQs from './pages/FAQs';
import Footer from './pages/Footer';
import Home from './pages/Home';
import Partners from './pages/Partners';
import PrivacyAndTerms from './pages/PrivacyAndTerms';
import Rewards from './pages/Rewards';
import RulesAndGuidelines from './pages/RulesAndGuidelines';
import TimeLineLg from './pages/TimeLineLg';
import TimeLineSm from './pages/TimeLineSm';

function App() {
  return (
    
    <main className='bg-[#150E28] '>
    {/* <main className='bg-[#150E28] overflow-x-hidden'> */}
      <Home />
      <About />
      <RulesAndGuidelines />
      <Criteria />
      <FAQs />
      <div className='hidden lg:block'>
        <TimeLineLg />
      </div>
      <div className='lg:hidden'>
        <TimeLineSm />
      </div>
      <div className='bkgImage'>
        <Rewards />
      </div>
      <Partners />
      <PrivacyAndTerms />
      <Footer />
    </main>
  );
  
}

export default App;
// 903AFF
// D434FE