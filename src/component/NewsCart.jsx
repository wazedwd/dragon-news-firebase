import { Link } from "react-router-dom";

/* eslint-disable react/prop-types */
const NewsCart = ({ aNews }) => {
    const {title, image_url, _id,  details} = aNews;
    return (
        <div className="card card-compact w-full bg-base-100 shadow-xl mb-4">
            <figure><img className="w-full" src={image_url} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">{title}</h2>
                {
                    details.length > 200 ? <h3>{details.slice(0, 200)} <Link to={`/news/${_id}`} style={{textDecoration: 'none'}}>Read More....</Link></h3> : <h3>{details}</h3>
                }
                <div className="card-actions justify-end">
                    <button className="btn btn-primary">Buy Now</button>
                </div>
            </div>
        </div>
    );
};

export default NewsCart;