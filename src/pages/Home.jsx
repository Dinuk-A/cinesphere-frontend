import TopRatedMovies from "../components/TopRatedMovies";
import ComingSoonMovies from "../components/ComingSoonMovies";
import Header from "../components/Header";
import HeroSection from "../components/Hero";
import Footer from "../components/Footer";

const Dashboard = () => {
    return (

        <>
            <Header />
            <HeroSection />
            {/* <TopRatedMovies allView={false} limit={4} /> */}
            <ComingSoonMovies allView={false} limit={4} />
            {/* <Footer /> */}
        </>

    )
}

export default Dashboard;