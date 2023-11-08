import person1 from '../../../assets/p1.jpg'
import person2 from '../../../assets/p2.jpg'
import person3 from '../../../assets/p3.jpg'
import person4 from '../../../assets/p4.jpg'
import fb from '../../../assets/facebook.png'
import tw from '../../../assets/twitter.png'
import google from '../../../assets/google.png'
import git from '../../../assets/github.png'
import quote from '../../../assets/quote.png'
const Review = () => {
    return (
        <div className="max-w-screen-xl mx-auto">
            <h1 className="text-4xl text-center mt-6 font-black"><span>What Our </span><span className="text-blue-500">Customer Are Saying</span></h1>
            <p className="text-center mt-1">There are many company owners and customers using our services who have found skilled and experienced workers and improved their companies. Even many unemployed people have found jobs of their choice.</p>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5 mt-14">
                <div className="shadow-lg relative">
                    <img className='w-20 h-20 rounded-full absolute -top-10 left-5' src={person1} alt="" />
                    <div className="px-7">
                        <div className="flex justify-between mt-12">
                            <h5 className='text-xl font-semibold'>Olivia</h5>
                            <img className='w-7 h-7' src={fb} alt="" />
                        </div>
                        <div className="flex justify-between items-center mt-3">
                            <p className='text-green-500'>Designer</p>
                            <div className="rating rating-xs">
                                <input type="radio" name="rating-5" className="mask mask-star-2 bg-orange-400" />
                                <input type="radio" name="rating-5" className="mask mask-star-2 bg-orange-400" />
                                <input type="radio" name="rating-5" className="mask mask-star-2 bg-orange-400" />
                                <input type="radio" name="rating-5" className="mask mask-star-2 bg-orange-400" />
                                <input type="radio" name="rating-5" className="mask mask-star-2 bg-orange-400" />
                            </div>
                        </div>
                        <div className="flex items-center mt-5">
                            <img className='w-5' src={quote} alt="" />
                            <div className="w-full">
                                <hr className='border-t-1 border-dotted border-black ' />
                            </div>
                        </div>
                        <p className='mt-4 mb-5 text-justify text-xs'>I can't express how delighted I am with the web development services on this marketplace. The team's dedication to my project, their attention to detail, and their commitment to delivering a user-friendly website was truly impressive. I'm extremely satisfied with the end result.</p>
                    </div>
                </div>
                <div className="shadow-lg relative mt-8 md:mt-0">
                    <img className='w-20 h-20 rounded-full absolute -top-10 left-5' src={person2} alt="" />
                    <div className="px-7">
                        <div className="flex justify-between mt-12">
                            <h5 className='text-xl font-semibold'>Emma</h5>
                            <img className='w-7 h-7' src={google} alt="" />
                        </div>
                        <div className="flex justify-between items-center mt-3">
                            <p className='text-green-500'>Doctor</p>
                            <div className="rating rating-xs">
                                <input type="radio" name="rating-5" className="mask mask-star-2 bg-orange-400" />
                                <input type="radio" name="rating-5" className="mask mask-star-2 bg-orange-400" />
                                <input type="radio" name="rating-5" className="mask mask-star-2 bg-orange-400" />
                                <input type="radio" name="rating-5" className="mask mask-star-2 bg-orange-400" />
                                <input type="radio" name="rating-5" className="mask mask-star-2 bg-orange-400" />
                            </div>
                        </div>
                        <div className="flex items-center mt-5">
                            <img className='w-5' src={quote} alt="" />
                            <div className="w-full">
                                <hr className='border-t-1 border-dotted border-black ' />
                            </div>
                        </div>
                        <p className='mt-4 mb-5 text-justify text-xs'>My experience with the digital marketing services here was outstanding. The experts took the time to understand my business, created a tailored strategy, and executed it flawlessly. The results were beyond my expectations, and I can't thank them enough.</p>
                    </div>
                </div>
                <div className="shadow-lg relative mt-8 md:mt-8 lg:mt-0">
                    <img className='w-20 h-20 rounded-full absolute -top-10 left-5' src={person3} alt="" />
                    <div className="px-7">
                        <div className="flex justify-between mt-12">
                            <h5 className='text-xl font-semibold'>Frank Klin</h5>
                            <img className='w-7 h-7' src={tw} alt="" />
                        </div>
                        <div className="flex justify-between items-center mt-3">
                            <p className='text-green-500'>Developer</p>
                            <div className="rating rating-xs">
                                <input type="radio" name="rating-5" className="mask mask-star-2 bg-orange-400" />
                                <input type="radio" name="rating-5" className="mask mask-star-2 bg-orange-400" />
                                <input type="radio" name="rating-5" className="mask mask-star-2 bg-orange-400" />
                                <input type="radio" name="rating-5" className="mask mask-star-2 bg-orange-400" />
                                <input type="radio" name="rating-5" className="mask mask-star-2 bg-orange-400" />
                            </div>
                        </div>
                        <div className="flex items-center mt-5">
                            <img className='w-5' src={quote} alt="" />
                            <div className="w-full">
                                <hr className='border-t-1 border-dotted border-black ' />
                            </div>
                        </div>
                        <p className='mt-4 mb-5 text-justify text-xs'>I had the pleasure of working with talented graphic designers on this platform. They not only brought my ideas to life but also added their creative touch to make my project stand out. The final design was visually stunning, and I couldn't be happier.</p>
                    </div>
                </div>
                <div className="shadow-lg relative mt-8 md:mt-8 lg:mt-0">
                    <img className='w-20 h-20 rounded-full absolute -top-10 left-5' src={person4} alt="" />
                    <div className="px-7">
                        <div className="flex justify-between mt-12">
                            <h5 className='text-xl font-semibold'>Ava Khalifa</h5>
                            <img className='w-7 h-7' src={git} alt="" />
                        </div>
                        <div className="flex justify-between items-center mt-3">
                            <p className='text-green-500'>Artist</p>
                            <div className="rating rating-xs">
                                <input type="radio" name="rating-5" className="mask mask-star-2 bg-orange-400" />
                                <input type="radio" name="rating-5" className="mask mask-star-2 bg-orange-400" />
                                <input type="radio" name="rating-5" className="mask mask-star-2 bg-orange-400" />
                                <input type="radio" name="rating-5" className="mask mask-star-2 bg-orange-400" />
                                <input type="radio" name="rating-5" className="mask mask-star-2 bg-orange-400" />
                            </div>
                        </div>
                        <div className="flex items-center mt-5">
                            <img className='w-5' src={quote} alt="" />
                            <div className="w-full">
                                <hr className='border-t-1 border-dotted border-black ' />
                            </div>
                        </div>
                        <p className='mt-4 mb-5 text-justify text-xs'>I can confidently say that this marketplace offers top-tier services. The professionalism, and expertise of the service providers set a high standard. The graphic design work they delivered was not only visually appealing but also aligned perfectly with my brand's identity.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Review;