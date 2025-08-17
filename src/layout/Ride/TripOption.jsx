import React from "react";

export default function TripOption({ image, name, time, distance, price, oldPrice, tag }) {
    return (
        <div className="flex items-center justify-between p-4 border rounded-xl hover:shadow-lg transition">
            {/* Left */}
            <div className="flex items-center gap-4">
                <img src={image} alt={name} className="w-14 h-14 object-contain" />
                <div>
                    <h2 className="font-semibold">{name}</h2>
                    <p className="text-gray-500 text-sm">
                        {time} • {distance}
                    </p>
                    {tag && (
                        <span className="inline-block mt-1 text-xs bg-blue-500 text-white px-2 py-0.5 rounded">
                            {tag}
                        </span>
                    )}
                </div>
            </div>

            {/* Right */}
            <div className="text-right">
                <p className="text-lg font-semibold">₹{price}</p>
                {oldPrice && <p className="text-sm text-gray-400 line-through">₹{oldPrice}</p>}
            </div>
        </div>
    );
}
