import img1 from "../assets/pdct-01-oTBP-W9z.jpg";
import img2 from "../assets/pdct-02-D4InWwuE.jpg";

export default function Offers() {
    return (
        <div className="grid grid-cols-2 gap-6 bg-[#EBEAEA]">
            <div
                className="bg-cover bg-center h-[600px] w-full"
                style={{ backgroundImage: `url(${img1})` }}
            >
                <div className=" justify-center p-15 bg-white m-45 gap-2">
                    <h2 className="font-bold text-md">Up to <span className="text-[#D6A86D]">20% off</span> all furniture on store</h2>
                    <h1 className="text-4xl font-bold">Home & Office</h1>
                    <button className="border px-10 py-3 my-2">Shop Now</button>
                </div>
            </div>
            <div className="bg-cover bg-center" style={{ backgroundImage: `url(${img2})` }}>
                <div className=" justify-center p-15 bg-white m-45 gap-2">
                    <h2 className="font-bold text-md">Up to <span className="text-[#D6A86D]">35% off</span> all Interior Items</h2>
                    <h1 className="text-4xl font-bold">Interior Setup</h1>
                    <button className="border px-10 py-3 my-2">Shop Now</button>
                </div>
            </div>
        </div>
    );
}
