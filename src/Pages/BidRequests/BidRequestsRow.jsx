import PropTypes from 'prop-types';
const BidRequestsRow = ({ bid, handleUpdateStatus }) => {
    const { _id, title, deadline, email, img, status } = bid || {};
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
            <td className={status === "inProgress" ? "inline" : status === "complete" ? "inline" : "hidden"}>
                <progress className="progress w-20"></progress>
            </td>
            <td className={status === "inProgress" ? "hidden" : status === "complete" ? "hidden" : "grid gap-1"}>
                <button disabled={status === "canceled" ? true : false} onClick={() => handleUpdateStatus(_id, 'inProgress')} className="btn text-green-600 btn-sm">Accept</button>
                <button disabled={status === "canceled" ? true : false} onClick={() => handleUpdateStatus(_id, 'canceled')} className="btn text-red-500 btn-sm">Reject</button>
            </td>
        </tr>
    );
};
BidRequestsRow.propTypes = {
    bid: PropTypes.object.isRequired,
    handleUpdateStatus: PropTypes.func.isRequired
}
export default BidRequestsRow;
