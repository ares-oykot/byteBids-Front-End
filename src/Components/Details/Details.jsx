import { useLoaderData, useNavigate } from "react-router-dom";
import moment from 'moment';
import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import swal from 'sweetalert';
import { Helmet } from "react-helmet";
const Details = () => {
    const job = useLoaderData();
    const { title, img, deadline, price_range, description, buyer_Email } = job || {};
    const { user } = useContext(AuthContext);
    const navigate = useNavigate();



    const handleSubmit = event => {
        event.preventDefault();
        const form = event.target;
        const title = form.title.value;
        const deadline = form.deadline.value;
        const biddingAmount = form.biddingAmount.value;
        const price_range = form.price_range.value;
        const email = form.email.value;
        const buyer_Email = form.buyer_Email.value;
        const message = form.message.value;
        const status = "Pending"
        const bidInfo = { title, deadline, biddingAmount, price_range, email, buyer_Email, message, img, status }
        fetch('http://localhost:5000/bids', {
            method: "POST",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(bidInfo)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    swal("Nice!!", "This project has been successfully bid", "success");
                    navigate('/myBids');
                }
            })
    };
    return (
        <div className="">
            <Helmet>
                <title>ByteBids | Details</title>
            </Helmet>
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
                <div className="bg-[#F4F3F0] mt-10 pt-10 py-16 rounded px-5  md:px-0">
                    <h1 className="text-center text-3xl font-semibold">Place Your Bid Here</h1>
                    <p className="text-justify md:text-center  mt-4">You can apply for the mentioned job by submitting this form below. But you must submit within the specified time. Once the deadline has passed you can no longer bet. And of course know everything well from the job description.</p>
                    <form onSubmit={handleSubmit} className="md:px-20 mt-4">

                        <div className="flex flex-col lg:flex-row md:gap-5">
                            <div className="w-full">
                                <p className="font-semibold mb-2">Job Name</p>
                                <input className="bg-white w-full rounded-sm pl-3 py-1" disabled defaultValue={title} type="text" name="title" />
                            </div>
                            <div className="w-full">
                                <p className="font-semibold mb-2">Deadline</p>
                                <input className="bg-white w-full rounded-sm pl-3 py-1" disabled defaultValue={deadline} type="text" name="deadline" />
                            </div>
                        </div>

                        <div className="flex flex-col lg:flex-row md:gap-5">
                            <div className="w-full">
                                <p className="font-semibold mb-2">Your Bidding Amount</p>
                                <input className="bg-white w-full rounded-sm pl-3 py-1" placeholder="Enter Your Bidding Amount" type="text" name="biddingAmount" />
                            </div>
                            <div className="w-full">
                                <p className="font-semibold mb-2">Price Range</p>
                                <input className="bg-white w-full rounded-sm pl-3 py-1" disabled defaultValue={price_range} type="text" name="price_range" />
                            </div>
                        </div>

                        <div className="flex flex-col lg:flex-row md:gap-5">
                            <div className="w-full">
                                <p className="font-semibold mb-2">Your Email</p>
                                <input className="bg-white w-full rounded-sm pl-3 py-1" disabled defaultValue={user?.email} type="text" name="email" />
                            </div>
                            <div className="w-full">
                                <p className="font-semibold mb-2">Buyer Email</p>
                                <input className="bg-white w-full rounded-sm pl-3 py-1" disabled defaultValue={buyer_Email} type="text" name="buyer_Email" />
                            </div>
                        </div>

                        <div className="mt-2">
                            <p className="font-semibold mb-2">Your Message (Optional)</p>
                            <textarea name="message" className="bg-white h-20 pt-3 w-full rounded-sm pl-3" placeholder="Write Your Message Here"></textarea>
                        </div>
                        <input disabled={user?.email === buyer_Email ? true : false} className="w-full mt-5 bg-slate-300 cursor-pointer btn text-xl font-semibold py-1 rounded" type="submit" value="Bid On The Project" />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Details;