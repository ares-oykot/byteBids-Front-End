import { AiFillEye, AiOutlineEyeInvisible } from 'react-icons/ai';
import banner from "../../assets/peakpx.jpg"
import google from "../../assets/google.png"
import git from "../../assets/github.png"
import twitter from "../../assets/twitter.png"
import fb from "../../assets/facebook.png"
import { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import swal from 'sweetalert';
import { AuthContext } from '../../Providers/AuthProvider';
import { updateProfile } from 'firebase/auth';
const Registration = () => {
    const [showPassword, setShowPassword] = useState(false);
    const { createUser } = useContext(AuthContext);
    const navigate = useNavigate();
    const handleRegistration = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const photo = form.photo.value;
        const password = form.password.value;
        const accepted = form.terms.checked;

        if (password.length < 6) {
            swal("Oops!!", "Password should be at last 6 characters", "error");
            return;
        }
        else if (!/[A-Z]/.test(password)) {
            swal("Oops!!", "Your password should have at last one upper case characters", "error");
            return;
        }
        else if (!/^(?=.*[~`!@#$%^&*()--+={}\[\]|\\:;"'<>,.?/_₹]).*$/.test(password)) {
            swal("Oops!!", "Password must contain at least one Special Symbol.", "error");
            return;
        }
        else if (!accepted) {
            swal("Oops!!", "Please accepted our terms and conditions", "error");
            return;
        }
        createUser(email, password)
            .then((result) => {
                updateProfile(result.user, {
                    displayName: name,
                    photoURL: photo,
                })
                    .then(() => {

                    })
                    .catch(() => {

                    });
                swal("Nice!!", "User Sign Up successful", "success");
                navigate("/");
            })
            .catch(error => {
                swal("Oops!!", `${error.message}`, "error");
            });
    };
    return (
        <div className=" h-[100vh]">
            <div className="shadow-xl md:w-3/4 lg:w-2/4 mx-auto">
                <form onSubmit={handleRegistration}>
                    <div className="relative">
                        <img className="w-full md:h-72" src={banner} alt="" />
                        <h2 className="text-4xl md:text-5xl font-black text-white absolute top-6 md:top-10 left-5 md:left-10">Welcome to the <br /> ByteBids</h2>
                    </div>
                    <h3 className="text-3xl font-semibold text-center my-6 text-indigo-400">User Sign Up</h3>
                    <div className="mx-5 md:mx-10 pb-10">
                        <div className="flex gap-9 justify-center mt-5">
                            <img className="w-10 h-10 rounded-full hover:border-2 hover:shadow-xl duration-100" src={google} alt="google" />
                            <img className="w-10 h-10 rounded-full hover:border-2 hover:shadow-xl duration-100" src={git} alt="git" />
                            <img className="w-10 h-10 rounded-full hover:border-2 hover:shadow-xl duration-100" src={twitter} alt="twitter" />
                            <img className="w-10 h-10 rounded-full hover:border-2 hover:shadow-xl duration-100" src={fb} alt="fb" />
                        </div>
                        <input type="text" name="name" className="block text-white outline-none rounded-md mt-5 pl-5 placeholder-white w-full py-2 bg-gradient-to-r from-[#0766AA] to-[#26A6DE]" placeholder="Your Name" required />
                        <input type="email" name="email" className="block text-white outline-none rounded-md mt-5 pl-5 placeholder-white w-full py-2 bg-gradient-to-r from-[#0766AA] to-[#26A6DE]" placeholder="Your Email" required />
                        <input type="text" name="photo" className="block text-white outline-none rounded-md mt-5 pl-5 placeholder-white w-full py-2 bg-gradient-to-r from-[#0766AA] to-[#26A6DE]" placeholder="Your Photo URL" required />
                        <div className="relative">
                            <input type={showPassword ? 'text' : 'password'} name="password" className="block text-white outline-none rounded-md mt-5 pl-5 placeholder-white w-full py-2 bg-gradient-to-r from-[#0766AA] to-[#26A6DE]" placeholder="Your Password" required />
                            <span className="text-white absolute right-3 bottom-[0.6rem] cursor-pointer text-lg" onClick={() => setShowPassword(!showPassword)}>{showPassword ? <AiFillEye></AiFillEye> : <AiOutlineEyeInvisible></AiOutlineEyeInvisible>}</span>
                        </div>
                        <div className="ml-1 my-1">
                            <input type="checkbox" name="terms" id="terms" required />
                            <label className="ml-3" htmlFor="terms">Accept our <a className="text-blue-400 cursor-pointer hover:underline">Terms and Conditions</a></label>
                        </div>
                        <input type="submit" className="block text-white rounded-md my-5 w-full py-2 bg-gradient-to-r from-[#0766AA] to-[#26A6DE] hover:from-[#084672] hover:to-[#1b6fde] duration-300" value="Sign Up" />
                        <p className='text-center md:text-left'>Already have an account? Please <Link to="/signIn" className="text-blue-400">Sign In Here</Link></p>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Registration;