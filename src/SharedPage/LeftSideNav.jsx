import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import moment from 'moment';
import image1 from '../assets/images/1.png';
import image2 from '../assets/images/2.png';
import image3 from '../assets/images/3.png';
import { BiNews } from "react-icons/bi";

const LeftSideNav = () => {
    const [categories, setCategory] = useState([]);
    useEffect(() => {
        fetch('categories.json')
            .then(res => res.json())
            .then(data => setCategory(data))
    }, [])
    return (
       <section>
         <div>
            <h2 className="px-4">All Category</h2>
            {
                categories.map((category, idx)=><Link to={`/category/${category.id}`} style={{textDecoration: 'none'}} key={idx}><div className="text-xl font-medium text-[#9F9F9F] px-4 py-1">{category.name}</div></Link>)
            }
        </div>
       <div className="cart mt-4">
        <div>
            <img src={image1} alt="" />
            <p>Bayern Slams Authorities Over Flight Delay to Club World Cup</p>
            <div className="flex items-center justify-between">
            <h3 className="text-base font-medium text-[#403F3F]">Sports</h3>
            <div className="flex gap-1 items-center">
                <p><BiNews/></p>
                <h3 className="text-base font-medium text-[#403F3F]">{moment().format(' MMMM DD, YYYY')}</h3>
            </div>
            </div>
        </div>
        <div>
            <img src={image2} alt="" />
            <p>Bayern Slams Authorities Over Flight Delay to Club World Cup</p>
            <div className="flex items-center justify-between">
            <h3 className="text-base font-medium text-[#403F3F]">Sports</h3>
            <div className="flex gap-1 items-center">
                <p><BiNews/></p>
                <h3 className="text-base font-medium text-[#403F3F]">{moment().format(' MMMM DD, YYYY')}</h3>
            </div>
            </div>
        </div>
        <div>
            <img src={image3} alt="" />
            <p>Bayern Slams Authorities Over Flight Delay to Club World Cup</p>
            <div className="flex items-center justify-between">
            <h3 className="text-base font-medium text-[#403F3F]">Sports</h3>
            <div className="flex gap-1 items-center">
                <p><BiNews/></p>
                <h3 className="text-base font-medium text-[#403F3F]">{moment().format(' MMMM DD, YYYY')}</h3>
            </div>
            </div>
        </div>
       </div>
       </section>
    );
};

export default LeftSideNav;