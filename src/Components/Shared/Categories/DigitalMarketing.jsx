import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const DigitalMarketing = () => {
    const [jobs, setJobs] = useState([]);
    useEffect(() => {
        fetch('https://byte-bids-back-end.vercel.app/jobs/digitalMarketing')
            .then(res => res.json())
            .then(data => setJobs(data));
    }, []);
    return (
        <div className="grid md:grid-cols-2 gap-5 mt-[6px]">
            {
                jobs.map(job => <div key={job._id}>
                    <div className="bg-gradient-to-r from-[#b7abff] to-[#94c6ff] flex flex-col justify-between hover:shadow-xl rounded-md h-full duration-200">
                        <div className="">
                            <img className="w-full rounded-t-md h-40 md:h-52 lg:h-80" src={job.img} alt="" />
                            <div className="mx-2 md:mx-5 lg:mx-10 mt-3">
                                <h4 className="text-xl md:text-xl lg:text-2xl font-semibold">{job.title}</h4>
                                <div className="text-slate-700 text-xs md:text-sm lg:text-base mt-2">
                                    <h6><span className="text-black font-semibold">Deadline:</span> {job.deadline}</h6>
                                    <h6><span className="text-black font-semibold">Price Range:</span> {job.price_range}</h6>
                                    <p><span className="text-black font-semibold">Description:</span> {job.short_description}</p>
                                </div>
                            </div>
                        </div>
                        <Link to={`/details/${job?._id}`} className="mx-3 md:mx-5 lg:mx-10 mt-2 md:text-sm lg:text-base rounded bg-gradient-to-t from-[#73a8e4] to-[#897ade] mb-3 md:mb-5 lg:mb-10 btn">Bid Now</Link>
                    </div>
                </div>)
            }
        </div>
    );
};

export default DigitalMarketing;