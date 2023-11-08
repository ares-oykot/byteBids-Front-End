import { useState } from "react";
import { Helmet } from "react-helmet";
import { useLoaderData, useNavigate } from "react-router-dom";
import swal from "sweetalert";

const Update = () => {
    const job = useLoaderData();
    const { _id, title, img, deadline, price_range, short_description, description, buyer_Email, category } = job || {};
    const navigate = useNavigate();
    const priceRange = price_range;
    const hyphenIndex = priceRange.indexOf('-');
    const price1 = priceRange.slice(0, hyphenIndex);
    const price2 = priceRange.slice(hyphenIndex + 1);
    const [selectCategory, setSelectCategory] = useState(category);
    const handleSelectCategory = (event) => {
        setSelectCategory(event.target.value);
    };
    const handleUpdateJobs = (event) => {
        event.preventDefault();
        const form = event.target;
        const title = form.title.value;
        const img = form.img.value;
        const deadline = form.deadline.value;
        const minPrice = form.minPrice.value;
        const maxPrice = form.maxPrice.value;
        const price_range = `${minPrice}-${maxPrice}`;
        const short_description = form.short_description.value;
        const description = form.description.value;
        const buyer_Email = form.buyer_Email.value;
        const updateInfo = { title, img, deadline, price_range, short_description, description, buyer_Email, category };
        fetch(`https://byte-bids-back-end.vercel.app/jobs/${_id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updateInfo)
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount > 0) {
                    swal("Nice!!", "Job updated successfully", "success");
                    navigate("/postedJobs");
                }
            });
    };
    return (
        <div className="max-w-screen-xl mx-auto">
            <Helmet>
                <title>ByteBids | Update Jobs</title>
            </Helmet>
            <h1 className="text-5xl font-bold text-center">Update Jobs</h1>
            <div className="">
                <div className="lg:w-1/2 mx-auto shadow-xl">
                    <img className='h-[170px] lg:h-[280px] w-full' src={img} alt="" />
                    <form onSubmit={handleUpdateJobs} className="px-8 card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name="buyer_Email" disabled defaultValue={buyer_Email} className="input bg-white input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Job Title</span>
                            </label>
                            <input type="text" name="title" defaultValue={title} placeholder="Enter Job Title" className="input bg-white input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Deadline</span>
                            </label>
                            <input type="text" defaultValue={deadline} name="deadline" className="input bg-white input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Sort Description</span>
                            </label>
                            <input type="text" name="short_description" defaultValue={short_description} placeholder="Enter Sort Description" className="input bg-white input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Description</span>
                            </label>
                            <input type="text" name="description" defaultValue={description} placeholder="Enter Description" className="input bg-white input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Job Photo URL</span>
                            </label>
                            <input type="text" name="img" defaultValue={img} placeholder="Enter Job Photo URL" className="input bg-white input-bordered" />
                        </div>
                        <div className="flex flex-col md:flex-row gap-2">
                            <div className="form-control w-full">
                                <label className="label">
                                    <span className="label-text">Minimum Price</span>
                                </label>
                                <input type="text" defaultValue={price1} name="minPrice" placeholder="Enter Minimum Price" className="input bg-white input-bordered" />
                            </div>
                            <div className="form-control w-full">
                                <label className="label">
                                    <span className="label-text">Maximum Price</span>
                                </label>
                                <input type="text" defaultValue={price2} name="maxPrice" placeholder="Enter Maximum Price" className="input bg-white input-bordered" />
                            </div>
                        </div>
                        <label className="label">
                            <span className="label-text">Job Category</span>
                        </label>
                        <select onChange={handleSelectCategory} value={selectCategory} className="select select-bordered bg-white text-black w-full">
                            <option value="webDevelopment">webDevelopment</option>
                            <option value="graphicsDesign">graphicsDesign</option>
                            <option value="digitalMarketing">digitalMarketing</option>
                        </select>
                        <div className="form-control">
                            <input className="btn btn-primary" type="submit" value="Update Job" />
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Update;