import { useParams } from "react-router-dom";
import Header from "../SharedPage/Header";
import RightSideNav from "../SharedPage/RightSideNav";
import Navbar from "../SharedPage/Navbar";

const NewsDetails = () => {
    const {id} = useParams();
    console.log(id);
    return (
        <section>
            <Header></Header>
            <Navbar></Navbar>
            <div className="grid grid-cols-4 gap-4">
                <div className="col-span-3 border-2 border-solid border-red-400">
                    <h3>Dragon News</h3>
                </div>
                <div>
                    <RightSideNav></RightSideNav>
                </div>
            </div>
        </section>
    );
};

export default NewsDetails;