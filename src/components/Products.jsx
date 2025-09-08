import React from "react";
import { FaRegEye, FaRegHeart } from "react-icons/fa";
import { IoBagAddOutline } from "react-icons/io5";
import Latest_product_Json from "../Json/Latest_Product_Json";
import { Link } from "react-router-dom";


export default function Products() {
    return (
        <>
            <div className="grid grid-cols-4  px-20  bg-[#EBEAEA]">
                {Latest_product_Json.map((product) => (
                    <div key={product.id} className="relative group p-4">
                        <img
                            src={product.image}
                            alt={product.name}
                            className="w-100"
                        />

                        <h3 className="py-3 text-xl font-semibold text-gray-800">
                            {product.sale_price}
                        </h3>
                        <h3 className="text-2xl font-medium text-gray-700">
                            <Link to={`/product/${product.id}`}>{product.name}</Link>
                        </h3>


                        <div className="absolute top-9 right-8 flex flex-col gap-3 opacity-0 group-hover:opacity-100 transition">
                            <button className="p-3 bg-gray-100 rounded-full hover:bg-gray-200 shadow">
                                <FaRegHeart size={20} />
                            </button>
                            <button className="p-3 bg-gray-100 rounded-full hover:bg-gray-200 shadow">
                                <IoBagAddOutline size={20} />
                            </button>
                            <button className="p-3 bg-gray-100 rounded-full hover:bg-gray-200 shadow">
                                <FaRegEye size={20} />
                            </button>
                        </div>
                    </div>
                ))}


            </div>
            <div className="flex items-center justify-center bg-[#EBEAEA] pt-8 pb-30">
                <button className="px-11 py-4 border  hover:bg-white/50 transition">
                    See all Products
                </button>
            </div>
        </>
    );
}
