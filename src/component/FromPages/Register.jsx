import { Link } from "react-router-dom";
import Navbar from "../../SharedPage/Navbar";
import { useContext } from "react";
import { AuthContext } from "../../AuthProvider";

const Register = () => {
    const {createUser} = useContext(AuthContext);
    const handleRegister = (e)=>{
        e.preventDefault();
       const form = new FormData(e.currentTarget);
        const name = form.get('name');
        const photo = form.get('photo');
        const email = form.get('email');
        const password = form.get('password');
        console.log(name, photo, email, password);
        createUser(email, password)
        .then(result=> {
            console.log(result.user)
        })
        .catch(error=> {
            console.log(error);
        })
    }
    return (
<section>
        <div>
            <Navbar></Navbar>
        </div>
        <div className="bg-gray-50 py-20 rounded-md">
            <h1 className="text-4xl font-semibold text-center">Register your account</h1>
        <form onSubmit={handleRegister} className="card-body md:w-1/3 lg:w-1/2 mx-auto">
            <div className="form-control">
                <label className="label">
                    <span className="label-text">Your Name</span>
                </label>
                <input name="name" type="text" placeholder="Name" className="input input-bordered" required />
            </div>
            <div className="form-control">
                <label className="label">
                    <span className="label-text">Photo URL</span>
                </label>
                <input name="photo" type="text" placeholder="Photo" className="input input-bordered" required />
            </div>
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
                <button className="btn bg-rose-400 border-none shadow-xl"><Link style={{textDecoration:'none'}} className="text-base text-white">Register</Link></button>
            </div>
        </form>
        <p className="text-center">Already Have An Account ? <Link className="text-blue-600 font-medium" to='/login'>Login</Link></p>
    </div>
</section>
    );
};

export default Register;