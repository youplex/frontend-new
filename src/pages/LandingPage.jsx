import LandingHeader from '../components/LandingHeader';
import LandingNav from '../components/LandingNav';
import LandingFeatures from '../components/LandingFeatures';
import Faq from '../components/Faq';

function LandingPage() {
    return (
      <main>
        <LandingNav />
        <LandingHeader />
        <LandingFeatures />
        <Faq />
      </main>
    );
  }
  
  export default LandingPage ; 
  