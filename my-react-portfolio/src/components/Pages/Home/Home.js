import FirstSection from './01-section/FirstSection';
import SecondSection from './02-section/SecondSection';
import ThirdSection from './03-section/ThirdSection';
import FourthSection from './04-section/FourthSection';
import FifthSection from './05-section/FifthSection';
import Footer from '../../PageFooter/Footer';
import './HomeStyle.css';

function Home() {
    return (
        <>
            <div id='top'></div>
            <FirstSection />
            <SecondSection />
            <ThirdSection />
            <FourthSection />
            <FifthSection />
            <Footer />
        </>
    );
}

export default Home;