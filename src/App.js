import '@fontsource-variable/montserrat';
import './styles/_app.scss';

import Header from './components/header/Header';
import Intro from './components/intro/Intro';
import Information from './components/information/Information';
import Community from './components/community/Community';
import Footer from './components/footer/Footer';

const Home = () => {
    return (
        <>     
        <Header /> 
        <Intro />
        <Information />
        <Community />
        <Footer />
        </>
    );
}
 
export default Home;
