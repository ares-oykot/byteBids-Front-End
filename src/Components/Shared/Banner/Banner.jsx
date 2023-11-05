import { BiSelectMultiple } from 'react-icons/bi';
import { TbPlayerTrackNextFilled } from 'react-icons/tb';
const Banner = () => {
    return (
        <div>
            <div className="hero h-[30rem]" style={{ backgroundImage: 'url(https://i.ibb.co/9T7GknQ/Screenshot-228.png)' }}>
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content  text-neutral-content">
                    <div className="max-w-md">
                        <h2 className="mb-3 text-6xl md:text-7xl font-black">WE ARE</h2>
                        <h1 className="text-sky-400 text-4xl md:text-5xl font-bold">HIRING!</h1>
                        <p className="mb-3 text-sm md:text-base">We are looking for a professional and skilled person to help us grow our business. Who will use his skills and experience to handle all situations and improve our company.</p>
                        <div className="text-left">
                            <span className="flex gap-2 items-center md:text-xl">
                                <BiSelectMultiple /> Web Developer
                            </span>
                            <span className="flex gap-2 items-center md:text-xl">
                                <BiSelectMultiple /> Digital Marketer
                            </span>
                            <span className="flex gap-2 items-center md:text-xl">
                                <BiSelectMultiple /> Graphics Designer
                            </span>
                        </div>
                        <button className='flex gap-1 items-center mt-2 md:text-lg bg-sky-500 hover:bg-sky-600 duration-200 rounded-3xl pl-1 pr-2'><span className='rounded-full border '><TbPlayerTrackNextFilled /></span> GET STARTED</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;