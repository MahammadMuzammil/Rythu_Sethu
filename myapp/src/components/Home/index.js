import AboutUsSection from "../AboutUsSection/AboutUsSection";
import BlogSection from "../BlogSection/BlogSection";
import FeatureSection from "../FeatureSection/FeatureSection";
import InfoCards from "../InfoCards/InfoCards";
import Footer from "../Footer/Footer";
import Header from "../Header";
import SearchBar from "../SearchBar/SearchBar";
const Home = () => {
    return (
        <>
            <Header />
            <SearchBar />
            <AboutUsSection />
            <BlogSection />
            <FeatureSection />
            <InfoCards />
            <Footer />
        </>
    )
}
export default Home