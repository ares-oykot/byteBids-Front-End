import banner from "../../assets/peakpx.jpg"
import google from "../../assets/google.png"
import git from "../../assets/github.png"
import twitter from "../../assets/twitter.png"
import fb from "../../assets/facebook.png"
const Login = () => {
    const handleLogin = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);
    };
    return (
        <div className=" h-[100vh]">
            <div className="shadow-xl md:w-2/4 mx-auto">
                <form onSubmit={handleLogin}>
                    <div className="relative">
                        <img className="w-full h-72" src={banner} alt="" />
                        <h2 className="text-5xl font-black text-white absolute top-10 left-10">Welcome to the <br /> ByteBids</h2>
                    </div>
                    <h3 className="text-3xl font-semibold text-center my-6 text-indigo-400">User Sign In</h3>
                    <div className="mx-10 pb-10">
                        <div className="flex gap-9 justify-center mt-5">
                            <img className="w-10 h-10 rounded-full hover:border-2 hover:shadow-xl duration-100" src={google} alt="google" />
                            <img className="w-10 h-10 rounded-full hover:border-2 hover:shadow-xl duration-100" src={git} alt="git" />
                            <img className="w-10 h-10 rounded-full hover:border-2 hover:shadow-xl duration-100" src={twitter} alt="twitter" />
                            <img className="w-10 h-10 rounded-full hover:border-2 hover:shadow-xl duration-100" src={fb} alt="fb" />
                        </div>
                        <input type="email" name="email" className="block text-white outline-none rounded-md mt-5 pl-5 placeholder-white w-full py-2 bg-gradient-to-r from-[#0766AA] to-[#26A6DE]" placeholder="Your Name" />
                        <input type="password" name="password" className="block text-white outline-none rounded-md mt-5 pl-5 placeholder-white w-full py-2 bg-gradient-to-r from-[#0766AA] to-[#26A6DE]" placeholder="Your Password" />
                        <input type="submit" className="block text-white rounded-md mt-5 w-full py-2 bg-gradient-to-r from-[#0766AA] to-[#26A6DE]" value="Sign In" />
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Login;