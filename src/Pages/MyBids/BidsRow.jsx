const BidsRow = ({ bid }) => {
    const {title, deadline, biddingAmount, price_range, email, buyer_Email, message, img, status} = bid || {};
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
            <td className="text-purple-600">
                {status}
            </td>
            <td className="">
                <button className="btn btn-sm" disabled={status === "Pending" ? true : status === "Progress"} >Complete</button>
            </td>
            {/* <td>{date}</td>
            <td>{price}</td>
            <th>
                {
                    status === 'confirm' ? <span className="font-bold text-primary">Confirmed</span> :
                        <button onClick={() => handleBookingConfirm(_id)} className="btn btn-ghost btn-xs">Please Confirm</button>
                }
            </th> */}
        </tr>
    );
};

export default BidsRow;