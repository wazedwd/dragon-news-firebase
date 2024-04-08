import { Link, useLocation, useNavigate } from "react-router-dom";
import Navbar from "../../SharedPage/Navbar";
import { useContext } from "react";
import { AuthContext } from "../../AuthProvider";

const Login = () => {
    const {signInUser} = useContext(AuthContext);
    const location = useLocation();
    console.log(location);
    const navigate = useNavigate();
    const loginSubmit = e => {
        e.preventDefault();
        const form = new FormData(e.currentTarget);
        const email = form.get('email');
        const password = form.get('password');
        console.log(email, password);
        signInUser(email, password)
        .then(result=> {
            console.log(result.user);
            navigate(location?.state ? location.state : '/')
        })
        .catch(error=> {
            console.log(error.message);
        })
    }
    return (
    <section>
            <div>
                <Navbar></Navbar>
            </div>
            <div className="bg-gray-50 py-20 rounded-md">
                <h1 className="text-4xl font-semibold text-center">Login your account</h1>
            <form onSubmit={loginSubmit} className="card-body md:w-1/3 lg:w-1/2 mx-auto">
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Email</span>
                    </label>
                    <input name="email" type="email" placeholder="Email" className="input input-bordered" required />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Password</span>
                    </label>
                    <input name="password" type="password" placeholder="Password" className="input input-bordered" required />
                    <label className="label">
                        <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                    </label>
                </div>
                <div className="form-control mt-6">
                    <button className="btn bg-rose-400 border-none shadow-xl"><Link style={{textDecoration:'none'}} className="text-base text-white">Login</Link></button>
                </div>
            </form>
            <p className="text-center">Don’t Have An Account ? <Link className="text-red-400" to='/register'>Register</Link></p>
        </div>
    </section>
    );
};

export default Login;