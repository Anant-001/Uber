// RideOption.jsx
export default function RideOption({ image, name, time, eta, price, oldPrice, tag }) {
    return (
        <div className="flex items-center justify-between p-4 border rounded-xl hover:border-black cursor-pointer transition">
            <div className="flex items-center space-x-4">
                <img src={image} alt={name} className="w-14 h-14 object-contain" />
                <div>
                    <h2 className="font-semibold">{name}</h2>
                    <p className="text-gray-500 text-sm">{time} • {eta} away</p>
                    {tag && <span className="bg-blue-500 text-white text-xs px-2 py-0.5 rounded mt-1 inline-block">{tag}</span>}
                </div>
            </div>
            <div className="text-right">
                <p className="font-semibold">₹{price}</p>
                {oldPrice && <p className="text-xs text-gray-400 line-through">₹{oldPrice}</p>}
            </div>
        </div>
    );
}
