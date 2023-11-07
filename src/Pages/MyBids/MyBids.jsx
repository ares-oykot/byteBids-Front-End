import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import BidsRow from "./BidsRow";

const MyBids = () => {
    const { user } = useContext(AuthContext);
    const [bids, setBids] = useState([]);
    const url = `http://localhost:5000/bids?email=${user?.email}`;
    useEffect(() => {
        fetch(url, { credentials: "include" })
            .then(res => res.json())
            .then(data => setBids(data));
    }, [url]);
    const handleUpdateStatus = () => {

    }
    return (
        <div>
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