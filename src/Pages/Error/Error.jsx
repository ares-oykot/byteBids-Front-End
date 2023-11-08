import { Link } from 'react-router-dom';
import error from '../../assets/2RNE.gif'
const Error = () => {
    return (
        <div className='bg-black h-[100vh]'>
            <div className='flex justify-center items-center'>
                <img className='' src={error} alt="" />
            </div>
            <div className="flex justify-center items-center">
                <Link to="/" className='text-white border border-red-500 p-3 rounded'>Back to Home</Link>
            </div>
        </div>
    );
};

export default Error;