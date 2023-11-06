import { useLoaderData } from "react-router-dom";
import moment from 'moment';
const Details = () => {
    const job = useLoaderData();
    const { title, img, deadline, price_range, description, buyer_Email } = job || {};
    return (
        <div className="">
            <p className="text-center mt-5">{moment().format("dddd, MMMM D, YYYY, h:mm:ss a")}</p>
            <div className="mt-5 rounded-md flex flex-col md:flex-row border max-w-screen-xl mx-auto p-3 md:p-7 bg-gradient-to-r from-[#b7abff] to-[#94c6ff]">
                <div className="md:w-1/2">
                    <img className="w-full rounded-t-md md:rounded-r-none md:rounded-y-none md:rounded-l-md h-full lg:h-80" src={img} alt="" />
                </div>
                <div className="md:w-1/2 p-3 md:p-5 bg-sky-200 rounded-b-md md:rounded-l-none md:rounded-r-md">
                    <h4 className="text-lg md:text-xl lg:text-2xl font-semibold">{title}</h4>
                    <h6><span className="text-black font-semibold">Deadline:</span> {deadline}</h6>
                    <h6><span className="text-black font-semibold">Price Range:</span> {price_range}</h6>
                    <p className="text-xs md:text-sm lg:text-base"><span className="text-black text-base text-justify font-semibold">Description:</span> {description}</p>
                </div>
            </div>
            <div className="lg:mx-32">
                <div className="bg-[#F4F3F0] mt-10 pt-10 py-16 rounded">
                    <h1 className="text-center text-3xl font-semibold">Place Your Bid Here</h1>
                    <p className="text-center mt-4">You can apply for the mentioned job by submitting this form below. But you must submit within the specified time. Once the deadline has passed you can no longer bet. And of course know everything well from the job description.</p>
                    <form className="px-20 mt-4">

                        <div className="flex gap-5">
                            <div className="w-full">
                                <p className="font-semibold mb-2">Job Name</p>
                                <input className="bg-white w-full rounded-sm pl-3 py-1" disabled defaultValue={title} type="text" name="title" />
                            </div>
                            <div className="w-full">
                                <p className="font-semibold mb-2">Deadline</p>
                                <input className="bg-white w-full rounded-sm pl-3 py-1" disabled defaultValue={deadline} type="text" name="deadline" />
                            </div>
                        </div>

                        <div className="flex gap-5 mt-2">
                            <div className="w-full">
                                <p className="font-semibold mb-2">Your Bidding Amount</p>
                                <input className="bg-white w-full rounded-sm pl-3 py-1" placeholder="Enter Your Bidding Amount" type="text" name="amount" />
                            </div>
                            <div className="w-full">
                                <p className="font-semibold mb-2">Price Range</p>
                                <input className="bg-white w-full rounded-sm pl-3 py-1" disabled defaultValue={price_range} type="text" name="price_range" />
                            </div>
                        </div>

                        <div className="flex gap-5 mt-2">
                            <div className="w-full">
                                <p className="font-semibold mb-2">Your Email</p>
                                <input className="bg-white w-full rounded-sm pl-3 py-1" placeholder="Enter Your Email" type="text" name="email" />
                            </div>
                            <div className="w-full">
                                <p className="font-semibold mb-2">Buyer Email</p>
                                <input className="bg-white w-full rounded-sm pl-3 py-1" disabled defaultValue={buyer_Email} type="text" name="buyer_Email" />
                            </div>
                        </div>

                        <div className="mt-2">
                            <p className="font-semibold mb-2">Your Message (Optional)</p>
                            <textarea name="" className="bg-white h-20 pt-3 w-full rounded-sm pl-3" placeholder="Write Your Message Here"></textarea>
                        </div>
                        <input className="w-full mt-5 bg-slate-300 cursor-pointer btn text-xl font-semibold py-1 rounded" type="submit" value="Submit" />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Details;