import { useEffect, useState } from "react";

const DigitalMarketing = () => {
    const [jobs, setJobs] = useState([]);
    console.log(jobs);
    useEffect(() => {
        fetch('http://localhost:5000/jobs/digitalMarketing')
            .then(res => res.json())
            .then(data => setJobs(data));
    }, []);
    return (
        <div className="grid grid-cols-2 gap-5 mt-2">
            {
                jobs.map(job => <div key={job._id}>
                    <div className="bg-gradient-to-r from-[#b7abff] to-[#94c6ff] flex flex-col justify-between hover:shadow-xl rounded-md h-full duration-200">
                        <div className="">
                            <img className="w-full rounded-t-md h-80" src={job.img} alt="" />
                            <div className="mx-10 mt-3">
                                <h4 className="text-2xl font-semibold">{job.title}</h4>
                                <div className="text-slate-700 mt-2">
                                    <h6>Deadline: {job.deadline}</h6>
                                    <h6>Price Range: {job.price_range}</h6>
                                    <p>Description: {job.short_description}</p>
                                </div>
                            </div>
                        </div>
                        <button className="mx-10 mt-2 rounded bg-gradient-to-t from-[#73a8e4] to-[#897ade] mb-10 btn">Bid Now</button>
                    </div>
                </div>)
            }
        </div>
    );
};

export default DigitalMarketing;