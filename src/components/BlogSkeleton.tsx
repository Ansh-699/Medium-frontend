

const Skeleton = () => {
    return (
        <div className="bg-gray-100 min-h-screen">
            <div className="flex justify-center py-10">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 px-4 lg:px-10 w-full max-w-7xl">
                    {/* Main Content Skeleton */}
                    <div className="lg:col-span-8 p-6">
                        <div className="h-8 bg-gray-300 rounded w-3/4 mb-4 animate-pulse"></div>
                        <div className="h-4 bg-gray-300 rounded w-1/4 mb-6 animate-pulse"></div>
                        <div className="h-4 bg-gray-300 rounded w-full mb-4 animate-pulse"></div>
                        <div className="h-4 bg-gray-300 rounded w-full mb-4 animate-pulse"></div>
                        <div className="h-4 bg-gray-300 rounded w-full mb-4 animate-pulse"></div>
                    </div>

                    {/* Sidebar Skeleton */}
                    <div className="lg:col-span-4 p-6">
                        <div className="h-6 bg-gray-300 rounded w-1/3 mb-4 animate-pulse"></div>
                        <div className="flex items-center space-x-4">
                            <div className="w-10 h-10 bg-gray-300 rounded-full animate-pulse"></div>
                            <div className="h-4 bg-gray-300 rounded w-1/2 animate-pulse"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Skeleton;
