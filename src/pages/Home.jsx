import TopRatedMovies from "../components/TopRatedMovies";
import ComingSoonMovies from "../components/ComingSoonMovies";

const Dashboard = () => {
    return (

        <>
            <TopRatedMovies allView={false} limit={4}/>
            <ComingSoonMovies allView={false} limit={4}/>
        </>

    )
}

export default Dashboard;