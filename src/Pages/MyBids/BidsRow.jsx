import PropTypes from 'prop-types';
const BidsRow = ({ bid, handleUpdateStatus }) => {
    const {_id, title, deadline, email, img, status} = bid || {};
    
    return (
        <tr>
            <td className="hidden md:inline">
                <div className="avatar">
                    <div className="rounded w-24 h-24">
                        {img && <img src={img} alt="Bids png" />}
                    </div>
                </div>
            </td>
            <td>
                {title}
            </td>
            <td>
                {email}
            </td>
            <td>
                {deadline}
            </td> 
            <td className={status === "canceled" ? "text-red-600" : status === "Pending" ? "text-purple-600" : "text-green-600"}>
                {status}
            </td>
            <td className="">
                <button onClick={() => handleUpdateStatus(_id, "complete")} className="btn btn-sm" disabled={status === "Pending" || status === "canceled" || status === "complete" ? true : false} >Complete</button>
            </td>
        </tr>
    );
};
BidsRow.propTypes = {
    bid: PropTypes.object.isRequired,
    handleUpdateStatus: PropTypes.func.isRequired
}
export default BidsRow;