import React from "react";
import TripOption from "./TripOption.jsx";
import carImg from "/public/car.png";
import autoImg from "/public/auto.png";
import { getDistanceKm } from "../../utils/distance.js";

export default function TripList({ pickupCoords, destinationCoords }) {
    const baseTrips = [
        { image: carImg, name: "Uber Go", pricePerKm: 12, baseFare: 50, tag: "Faster" },
        { image: autoImg, name: "Uber Auto", pricePerKm: 8, baseFare: 30 },
        { image: carImg, name: "Uber Premier", pricePerKm: 18, baseFare: 80 }
    ];

    let distance = 0;
    if (pickupCoords && destinationCoords) {
        distance = getDistanceKm(pickupCoords, destinationCoords);
    }

    const trips = baseTrips.map((trip) => {
        const price = distance
            ? Math.round(trip.baseFare + trip.pricePerKm * distance)
            : trip.baseFare;

        const time = distance
            ? `${Math.ceil((distance / 25) * 60)} min` // assuming avg 25km/h
            : "—";

        return {
            ...trip,
            distance: distance ? `${distance.toFixed(1)} km` : "N/A",
            time,
            price
        };
    });

    return (
        <div className="space-y-3">
            {trips.map((trip, index) => (
                <TripOption key={index} {...trip} />
            ))}
        </div>
    );
}
