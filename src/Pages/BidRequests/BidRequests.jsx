import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import BidRequestsRow from "./BidRequestsRow";
import swal from "sweetalert";
const BidRequests = () => {
    const { user } = useContext(AuthContext);
    const [bids, setBids] = useState([]);
    const url = `http://localhost:5000/bidsRequests?email=${user?.email}`;
    useEffect(() => {
        fetch(url, { credentials: "include" })
            .then(res => res.json())
            .then(data => setBids(data));
    }, [url]);
    const handleUpdateStatus = (id, status) => {
        const updateStatus = { status: `${status}` };
        fetch(`http://localhost:5000/bids/${id}`, {
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
    };
    return (
        <div className="max-w-screen-xl mx-auto">
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
                                <BidRequestsRow
                                    key={bid._id}
                                    bid={bid}
                                    handleUpdateStatus={handleUpdateStatus}>
                                </BidRequestsRow>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default BidRequests;