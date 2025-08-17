export default function Business() {
    return (
        <section className="space-y-20">
            {/* Hero Section */}
            <div className="grid md:grid-cols-2 gap-10 items-center">
                <div className="space-y-6">
                    <h1 className="text-4xl font-bold">The best of Uber for your business</h1>
                    <p className="text-gray-500">
                        Manage business travel, meals, and more for employees and customers with ease.
                    </p>
                    <button className="btn btn-primary">Time to get started</button>
                </div>
                <img
                    src="/public/business/Business.webp"
                    alt="Uber Business"
                    className="rounded-xl w-full object-cover"
                />
            </div>

            {/* Features Section */}
            <div className="grid md:grid-cols-2 gap-10">
                <div className="space-y-4">
                    <h2 className="text-2xl font-semibold">A global platform built on the world's largest mobility network</h2>
                    <p className="text-gray-500">
                        Achieve up to 32% cost savings through streamlined travel and meal programs.
                    </p>
                </div>
                <div className="space-y-4">
                    <p className="text-gray-500">Meet sustainability goals with actionable insights.</p>
                    <p className="text-gray-500">Flexible solutions for employees and customers.</p>
                </div>
            </div>

            {/* How Companies Leverage */}
            <div className="text-center space-y-6">
                <h2 className="text-2xl font-semibold">How companies leverage Uber for Business</h2>
                <div className="grid grid-cols-3 gap-8">
                    <div>
                        <img src="/public/business/ilo-content_connected-01-360x202_2x.webp" alt="Business travel" className="mx-auto" />
                        <p className="mt-2">Business travel</p>
                    </div>
                    <div>
                        <img src="/public/business/ilo-content_connected-02-360x202_2x.webp" alt="Courtesy rides" className="mx-auto" />
                        <p className="mt-2">Courtesy rides</p>
                    </div>
                    <div>
                        <img src="/public/business/ilo-content_connected-03-360x202_2x.webp" alt="Meal programs" className="mx-auto" />
                        <p className="mt-2">Meal programs</p>
                    </div>
                </div>
            </div>

            {/* Get Started Section */}
            <div className="space-y-6">
                <h2 className="text-2xl font-semibold">Get started with no upfront costs</h2>
                <div className="grid md:grid-cols-3 gap-8">
                    <div>
                        <img src="/public/business/img-resource-1-360x360_2x.webp" alt="Customize" className="rounded-lg" />
                        <p className="mt-2">Customize your travel and meal programs</p>
                    </div>
                    <div>
                        <img src="/public/business/img-resource-2-360x360_2x.webp" alt="Onboard" className="rounded-lg" />
                        <p className="mt-2">Onboard people at your own pace</p>
                    </div>
                    <div>
                        <img src="/public/business/img-resource-3-360x360_2x.jpg" alt="Setup" className="rounded-lg" />
                        <p className="mt-2">Set up amenities for customers</p>
                    </div>
                </div>
            </div>

            {/* Logos */}
            <div className="text-center space-y-6">
                <p className="text-gray-500">
                    Join over 200,000 companies working with us, including more than half of the Fortune 500
                </p>
                <div className="flex justify-center gap-10">
                    <img src="/public/business/logo1.png" alt="Zoom" className="h-8" />
                    <img src="/public/business/logo2.png" alt="Coca-Cola" className="h-8" />
                    <img src="/public/business/logo3.jpg" alt="Samsung" className="h-8" />
                </div>
            </div>

            {/* Testimonial Video */}
            <div className="flex justify-center">
                <iframe
                    className="rounded-xl"
                    width="560"
                    height="315"
                    src="https://www.youtube.com/embed/example"
                    title="Uber for Business Video"
                    allowFullScreen
                />
            </div>

            {/* CTA */}
            <div className="bg-blue-900 text-white text-center p-10 rounded-xl">
                <h2 className="text-2xl font-semibold">9 out of 10 customers recommend choosing Uber for Business</h2>
                <button className="btn btn-light mt-4">Time to get started</button>
            </div>

            {/* Interested in learning more */}
            <div className="grid md:grid-cols-3 gap-6">
                <div>
                    <img src="/public/business/ilo-business_travel-360x204-expandable.svg" alt="Carbon footprint" className="rounded-lg" />
                    <p className="mt-2">How to reduce the carbon footprint of business travel</p>
                </div>
                <div>
                    <img src="/public/business/ilo-courtesy_rides-360x204-expandable.svg" alt="Employee perks" className="rounded-lg" />
                    <p className="mt-2">The perks of benefits your employees will use</p>
                </div>
                <div>
                    <img src="/public/business/ilo-meal_programs-360x204-expandable.svg" alt="Sustainability" className="rounded-lg" />
                    <p className="mt-2">The road to sustainability: executive perspectives</p>
                </div>
            </div>
        </section>
    );
}
