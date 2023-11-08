import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import BidsRow from "./BidsRow";
import swal from "sweetalert";
import { Helmet } from "react-helmet";

const MyBids = () => {
    const { user } = useContext(AuthContext);
    const [bids, setBids] = useState([]);
    const url = `https://byte-bids-back-end.vercel.app/bids?email=${user?.email}`;
    useEffect(() => {
        fetch(url, { credentials: "include" })
            .then(res => res.json())
            .then(data => setBids(data));
    }, [url]);
    const handleUpdateStatus = (id, status) => {
        const updateStatus = { status: `${status}` };
        fetch(`https://byte-bids-back-end.vercel.app/bids/${id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updateStatus)
        })
            .then(res => res.json())
            .then(data => {
                if (data?.modifiedCount > 0) {
                    swal("Nice!!", "Status Updated Successfully", "success");
                    const remaining = bids.filter(bid => bid._id !== id);
                    const updated = bids.find(bid => bid._id === id);
                    updated.status = `${status}`
                    const newStatus = [updated, ...remaining]
                    setBids(newStatus)
                }
            });
    }
    return (
        <div className="max-w-screen-xl mx-auto">
            <Helmet>
                <title>ByteBids | My Bids</title>
            </Helmet>
            <h1 className="text-4xl font-bold text-center">Your Bids</h1>
            <div className="overflow-x-auto">
                <table className="table text-xs md:text-base">
                    {/* head */}
                    <thead>
                        <tr>
                            <th className="hidden md:inline">Job Thumbnail</th>
                            <th>Job Title</th>
                            <th>Email</th>
                            <th>Deadline</th>
                            <th>Status</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            bids?.map(bid =>
                                <BidsRow
                                    key={bid._id}
                                    bid={bid}
                                    handleUpdateStatus={handleUpdateStatus}>
                                </BidsRow>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyBids;