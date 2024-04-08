import Marquee from "react-fast-marquee";


const BreakingNews = () => {
    return (
        <section className="flex items-center bg-[#F3F3F3] py-4 px-4 rounded-md">
             <div>
            <button className=" px-5 py-3 rounded-md bg-rose-400 border-none shadow-xl text-white text-[18px] font-medium">Latest</button>
        </div>
        <div className="flex">
       <Marquee speed={100} pauseOnHover={true}>
        <div to='/' className="list-none mr-3">
        Match Highlights: Germany vs Spain — as it happened   !Match Highlights: Germany vs Spain as
        </div>
        <div to='/' className="list-none mr-3">
        Match Highlights: Germany vs Spain — as it happened   !Match Highlights: Germany vs Spain as
        </div>
        <div to='/' className="list-none mr-3">
        Match Highlights: Germany vs Spain — as it happened   !Match Highlights: Germany vs Spain as
        </div>
        </Marquee>
        </div>
        </section>
    );
};

export default BreakingNews;