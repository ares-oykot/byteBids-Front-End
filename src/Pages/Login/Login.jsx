import { AiFillEye, AiOutlineEyeInvisible } from 'react-icons/ai';
import banner from "../../assets/peakpx.jpg"
import google from "../../assets/google.png"
import git from "../../assets/github.png"
import twitter from "../../assets/twitter.png"
import fb from "../../assets/facebook.png"
import { useContext, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Providers/AuthProvider';
import swal from 'sweetalert';
const Login = () => {
    const [showPassword, setShowPassword] = useState(false);
    const { signIn, googleSignIn } = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();
    const handleLogin = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        signIn(email, password)
            .then(() => {
                swal("Nice!!", "User sign in successful", "success");
                navigate(location?.state ? location.state : '/');
            })
            .catch(error => {
                swal("Oops!!", `${error.message}`, "error");
            });
    };
    const handleGoogleSignIn = () => {
        googleSignIn()
            .then(() => {
                swal("Nice!!", "User login successful", "success");
                navigate(location?.state ? location.state : '/');
            })
            .catch(error => {
                swal("Oops!!", `${error.message}`, "error");
            });
    };
    return (
        <div className=" h-[100vh] max-w-screen-xl mx-auto">
            <div className="shadow-xl md:w-3/4 lg:w-2/4 mx-auto">
                <form onSubmit={handleLogin}>
                    <div className="relative">
                        <img className="w-full md:h-72" src={banner} alt="" />
                        <h2 className="text-4xl md:text-5xl font-black text-white absolute top-6 md:top-10 left-5 md:left-10">Welcome to the <br /> ByteBids</h2>
                    </div>
                    <h3 className="text-3xl font-semibold text-center my-6 text-indigo-400">User Sign In</h3>
                    <div className="mx-5 md:mx-10 pb-10">
                        <div className="flex gap-9 justify-center mt-5">
                            <img onClick={handleGoogleSignIn} className="w-10 h-10 rounded-full hover:border-2 hover:shadow-xl duration-100" src={google} alt="google" />
                            <img className="w-10 h-10 rounded-full hover:border-2 hover:shadow-xl duration-100" src={git} alt="git" />
                            <img className="w-10 h-10 rounded-full hover:border-2 hover:shadow-xl duration-100" src={twitter} alt="twitter" />
                            <img className="w-10 h-10 rounded-full hover:border-2 hover:shadow-xl duration-100" src={fb} alt="fb" />
                        </div>
                        <input type="email" name="email" className="block text-white outline-none rounded-md mt-5 pl-5 placeholder-white w-full py-2 bg-gradient-to-r from-[#0766AA] to-[#26A6DE]" placeholder="Your Email" />
                        <div className="relative">
                            <input type={showPassword ? 'text' : 'password'} name="password" className="block text-white outline-none rounded-md mt-5 pl-5 placeholder-white w-full py-2 bg-gradient-to-r from-[#0766AA] to-[#26A6DE]" placeholder="Your Password" />
                            <span className="text-white absolute right-3 bottom-[0.6rem] cursor-pointer text-lg" onClick={() => setShowPassword(!showPassword)}>{showPassword ? <AiFillEye></AiFillEye> : <AiOutlineEyeInvisible></AiOutlineEyeInvisible>}</span>
                        </div>
                        <label className="label">
                            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                        </label>
                        <input type="submit" className="block text-white rounded-md my-5 w-full py-2 bg-gradient-to-r from-[#0766AA] to-[#26A6DE] hover:from-[#084672] hover:to-[#1b6fde] duration-300" value="Sign In" />
                        <p>New to this website? Please <Link to="/signUp" className="text-blue-400">Sign Up</Link></p>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Login;