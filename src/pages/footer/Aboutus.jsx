import React from 'react'

const Aboutus = () => {
        return (
            <section className="space-y-16">
                {/* Hero Section */}
                <div className="relative bg-black text-white py-20 px-6 lg:px-16">
                    <h1 className="text-4xl md:text-5xl font-bold">About us</h1>
                    <p className="mt-4 text-lg max-w-2xl text-gray-300">
                        We reimagine the way the world moves for the better.
                    </p>
                </div>

                {/* Vision */}
                <div className="px-6 lg:px-16 space-y-6">
                    <h2 className="text-3xl font-bold">We reimagine the way the world moves</h2>
                    <p className="text-gray-600 max-w-3xl">
                        Movement is what we power. It’s our lifeblood. It runs through our veins. It’s what gets us up in the morning.
                        It pushes us to constantly reimagine how we can move better. For you. For all the places you want to go.
                        For all the things you want to get. For all the ways you want to earn. Across the entire world.
                        In real time. At the incredible speed of now.
                    </p>
                </div>

                {/* CEO Letter */}
                <div className="grid md:grid-cols-2 gap-8 items-center px-6 lg:px-16">
                    <div>
                        <h2 className="text-3xl font-bold mb-4">A letter from our CEO</h2>
                        <p className="text-gray-600 mb-4">
                            Read about how we’re reimagining the way the world moves, how we’re helping our drivers and riders, and
                            how we’re creating a sustainable future.
                        </p>
                        <button className="btn btn-primary">Read the letter</button>
                    </div>
                    <img
                        src="https://images.unsplash.com/photo-1562788869-4ed32648eb72?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8Y2VvfGVufDB8fDB8fHww"
                        alt="CEO"
                        className="rounded-xl object-cover w-full h-80"
                    />
                </div>

                {/* Sustainability */}
                <div className="grid md:grid-cols-2 gap-8 items-center px-6 lg:px-16">
                    <img
                        src="/public/Sustainability.jpg"
                        alt="Sustainability"
                        className="rounded-xl object-cover w-full h-80"
                    />
                    <div>
                        <h2 className="text-3xl font-bold mb-4">Sustainability</h2>
                        <p className="text-gray-600 mb-4">
                            We’re committed to becoming a fully electric, zero-emission platform by 2040. That’s why we’re investing
                            in programs to help drivers go electric, improve air quality, and make cities healthier.
                        </p>
                        <a href="#" className="text-brand hover:underline">Learn more</a>
                    </div>
                </div>

                {/* Rides and Beyond */}
                <div className="grid md:grid-cols-2 gap-8 items-center px-6 lg:px-16">
                    <div>
                        <h2 className="text-3xl font-bold mb-4">Rides and beyond</h2>
                        <p className="text-gray-600 mb-4">
                            Our technology helps people connect and move in new ways. Whether it’s rides, deliveries, freight, or
                            public transit, we are reimagining movement to make it more accessible and sustainable.
                        </p>
                        <a href="#" className="text-brand hover:underline">See our services</a>
                    </div>
                    <img
                        src="https://images.unsplash.com/photo-1508780709619-79562169bc64"
                        alt="Rides"
                        className="rounded-xl object-cover w-full h-80"
                    />
                </div>
            </section>
        );
    }
    export default Aboutus
