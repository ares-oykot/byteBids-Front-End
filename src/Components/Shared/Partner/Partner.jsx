import p1 from "../../../assets/partner/amd.png"
import p3 from "../../../assets/partner/epson.png"
import p4 from "../../../assets/partner/gigabyte.png"
import p5 from "../../../assets/partner/ibm.png"
import p6 from "../../../assets/partner/intel.png"
import p7 from "../../../assets/partner/jvc.png"
import p8 from "../../../assets/partner/nvidia.png"
import p9 from "../../../assets/partner/tencent.png"
import p10 from "../../../assets/partner/uber.png"
import p2 from "../../../assets/partner/vaio.png"
const Partner = () => {
    return (
        <div className="max-w-screen-xl mx-auto bg-slate-100 md:my-10 rounded-md py-5">
            <h1 className="text-3xl md:text-4xl font-semibold text-center my-5">Proud Partnership With</h1>
            <div className="">
                <div className="flex justify-around md:justify-center md:gap-10 lg:gap-20">
                    <img className="w-10  md:w-20 lg:w-32" src={p1} alt="" />
                    <img className="w-10  md:w-20 lg:w-32" src={p2} alt="" />
                    <img className="w-10  md:w-20 lg:w-32" src={p3} alt="" />
                    <img className="w-10  md:w-20 lg:w-32" src={p4} alt="" />
                    <img className="w-10  md:w-20 lg:w-32" src={p5} alt="" />
                </div>
                <div className="flex justify-around md:justify-center md:gap-10 lg:gap-20 mt-5 md:mt-20">
                    <img className="w-10  md:w-20 lg:w-32" src={p6} alt="" />
                    <img className="w-10  md:w-20 lg:w-32" src={p7} alt="" />
                    <img className="w-10  md:w-20 lg:w-32" src={p8} alt="" />
                    <img className="w-10  md:w-20 lg:w-32" src={p9} alt="" />
                    <img className="w-10  md:w-20 lg:w-32" src={p10} alt="" />
                </div>
            </div>
        </div>
    );
};

export default Partner;