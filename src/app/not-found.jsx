import Link from 'next/link';

export default function NotFound() {
    return (
        <div className="flex flex-col items-center justify-center min-h-[70vh] text-center px-4">
            <h1 className="text-7xl font-bold text-[#244F41] mb-2">404</h1>
            <h2 className="text-2xl font-semibold text-gray-500 mb-4">Page Not Found</h2>
            <p className="text-gray-500 mb-6 max-w-md">
                The page you are looking for does not exist or has been moved.
            </p>
            <Link
                href="/"
                className="px-6 py-3 bg-[#244F41] text-white rounded-lg hover:bg-gray-800"
            >
                Go back home
            </Link>
        </div>
    );
}
