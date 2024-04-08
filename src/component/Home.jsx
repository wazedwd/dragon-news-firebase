import { useLoaderData } from "react-router-dom";
import Header from "../SharedPage/Header";
import LeftSideNav from "../SharedPage/LeftSideNav";
import Navbar from "../SharedPage/Navbar";
import RightSideNav from "../SharedPage/RightSideNav";
import BreakingNews from "./BreakingNews";
import NewsCart from "./NewsCart";

const Home = () => {
    const news = useLoaderData();
    return (
        <div>
            <Header></Header>
            <BreakingNews></BreakingNews>
            <Navbar></Navbar>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-5">
                <div>
                <LeftSideNav></LeftSideNav>
                </div>
                <div className="col-span-1 md:col-span-2">
                    {
                        news.map((aNews, idx)=> <NewsCart key={idx} aNews={aNews}></NewsCart>)
                    }
                </div>
                <div>
                    <RightSideNav></RightSideNav>
                </div>
            </div>
        </div>
    );
};

export default Home;