import { useContext, useState } from "react";
import JobsThumb from "../../assets/JobsThumd.png"
import { AuthContext } from "../../Providers/AuthProvider";
import swal from 'sweetalert';
import { useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet";
const AddJobs = () => {
    const { user } = useContext(AuthContext);
    const [category, setCategory] = useState('webDevelopment');
    const navigate = useNavigate();
    const handleSelectCategory = (event) => {
        setCategory(event.target.value);
    };
    const handleAddJobs = (event) => {
        event.preventDefault();
        const form = event.target;
        const title = form.title.value;
        const img = form.img.value;
        const deadline = form.deadline.value;
        const minPrice = form.minPrice.value;
        const maxPrice = form.maxPrice.value;
        const price_range = `$${minPrice}-$${maxPrice}`;
        const short_description = form.short_description.value;
        const description = form.description.value;
        const buyer_Email = form.buyer_Email.value;
        const jobInfo = { title, img, deadline, price_range, short_description, description, buyer_Email, category };
        fetch('https://byte-bids-back-end.vercel.app/jobs', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(jobInfo)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    swal("Nice!!", "Job added successfully", "success");
                    navigate('/postedJobs');
                }
            })
    };
    return (
        <div className="max-w-screen-xl mx-auto">
            <Helmet>
                <title>ByteBids | Add Job</title>
            </Helmet>
            <h1 className="text-5xl font-bold text-center">Add Jobs</h1>
            <div className="">
                <div className="lg:w-1/2 mx-auto shadow-xl">
                    <img className='h-[170px] lg:h-[280px] w-full' src={JobsThumb} alt="" />
                    <form onSubmit={handleAddJobs} className="px-8 card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name="buyer_Email" disabled defaultValue={user?.email} className="input bg-white input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Job Title</span>
                            </label>
                            <input type="text" name="title" placeholder="Enter Job Title" className="input bg-white input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Deadline</span>
                            </label>
                            <input type="date" name="deadline" className="input bg-white input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Sort Description</span>
                            </label>
                            <input type="text" name="short_description" placeholder="Enter Sort Description" className="input bg-white input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Description</span>
                            </label>
                            <input type="text" name="description" placeholder="Enter Description" className="input bg-white input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Job Photo URL</span>
                            </label>
                            <input type="text" name="img" placeholder="Enter Job Photo URL" className="input bg-white input-bordered" />
                        </div>
                        <div className="flex flex-col md:flex-row gap-2">
                            <div className="form-control w-full">
                                <label className="label">
                                    <span className="label-text">Minimum Price</span>
                                </label>
                                <input type="text" name="minPrice" placeholder="Enter Minimum Price" className="input bg-white input-bordered" />
                            </div>
                            <div className="form-control w-full">
                                <label className="label">
                                    <span className="label-text">Maximum Price</span>
                                </label>
                                <input type="text" name="maxPrice" placeholder="Enter Maximum Price" className="input bg-white input-bordered" />
                            </div>
                        </div>
                        <label className="label">
                            <span className="label-text">Job Category</span>
                        </label>
                        <select onChange={handleSelectCategory} value={category} className="select select-bordered bg-white text-black w-full">
                            <option value="webDevelopment">webDevelopment</option>
                            <option value="graphicsDesign">graphicsDesign</option>
                            <option value="digitalMarketing">digitalMarketing</option>
                        </select>
                        <div className="form-control">
                            <button className="btn btn-primary">Add Job</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default AddJobs;