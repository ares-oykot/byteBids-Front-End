import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import { Link } from "react-router-dom";
import Swal from 'sweetalert2'
import { Helmet } from "react-helmet";

const MyPostedJobs = () => {
    const { user } = useContext(AuthContext);
    const url = `http://localhost:5000/jobs?email=${user?.email}`
    const [jobs, setJobs] = useState([]);
    useEffect(() => {
        fetch(url, { credentials: "include" })
            .then(res => res.json())
            .then(data => setJobs(data));
    }, [url]);
    const handleDelete = (id) => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`http://localhost:5000/jobs/${id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data?.deletedCount > 0) {
                            Swal.fire(
                                'Deleted!',
                                'Your Job has been deleted.',
                                'success'
                            );
                            const remaining = jobs?.filter(job => job._id !== id);
                            setJobs(remaining);
                        }
                    });
            }
        });
    };
    return (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 mt-[6px] max-w-screen-xl mx-auto">
            <Helmet>
                <title>ByteBids | My Posted Jobs</title>
            </Helmet>
            {
                jobs.map(job => <div key={job._id}>
                    <div className="bg-gradient-to-r from-[#b7abff] to-[#94c6ff] flex flex-col justify-between hover:shadow-xl rounded-md h-full duration-200">
                        <div className="">
                            <img className="w-full rounded-t-md h-40 md:h-52 lg:h-60" src={job.img} alt="" />
                            <div className="mx-2 md:mx-5 lg:mx-5 mt-3">
                                <h4 className="text-xl md:text-xl lg:text-2xl font-semibold">{job.title}</h4>
                                <div className="text-slate-700 text-xs md:text-sm lg:text-base mt-2">
                                    <h6><span className="text-black font-semibold">Deadline:</span> {job.deadline}</h6>
                                    <h6><span className="text-black font-semibold">Price Range:</span> {job.price_range}</h6>
                                    <p><span className="text-black font-semibold">Description:</span> {job.short_description}</p>
                                </div>
                            </div>
                        </div>
                        <div className="flex justify-between">
                            <Link to={`/update/${job?._id}`} className="w-2/5 mx-3 md:mx-5 lg:mx-5 mt-2 md:text-sm lg:text-base rounded bg-gradient-to-t from-[#73a8e4] to-[#897ade] mb-3 md:mb-5 lg:mb-5 btn">Update</Link>
                            <button onClick={() => handleDelete(job?._id)} className="w-2/5 mx-3 md:mx-5 lg:mx-5 mt-2 md:text-sm lg:text-base rounded bg-gradient-to-t from-[#73a8e4] to-[#897ade] mb-3 md:mb-5 lg:mb-5 btn">Delete</button>
                        </div>
                    </div>
                </div>)
            }
        </div>
    );
};

export default MyPostedJobs;