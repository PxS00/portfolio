export default function Error() {
    return (
        <section className="flex flex-col items-center justify-center min-h-[75vh] text-center py-24">
            <h1 className="text-6xl md:text-7xl font-extrabold text-white mb-6">Oops! 404</h1>
            <p className="text-gray-400 text-xl mb-10">Something went wrong. The page you are looking for does not exist.</p>
        </section>
    );
}