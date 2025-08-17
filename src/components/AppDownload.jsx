export default function AppDownload() {
    return (
        <section className="mt-16">
            <h3 className="text-xl font-semibold mb-4">It’s easier in the apps</h3>
            <div className="grid gap-4 md:grid-cols-2">
                {[{t:"Download the Uber app"}, {t:"Download the Driver app"}].map((b, i) => (
                    <div key={i} className="card p-4 flex items-center justify-between">
                        <div>
                            <div className="font-medium">{b.t}</div>
                            <div className="text-xs text-gray-400">Scan to download</div>
                        </div>
                        {/* Simple QR placeholder */}
                        <div className="grid place-items-center h-24 w-24 bg-white rounded-lg">
                            <div className="h-20 w-20 bg-[repeating-linear-gradient(45deg,black_0px,black_2px,white_2px,white_4px)] rounded" />
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
