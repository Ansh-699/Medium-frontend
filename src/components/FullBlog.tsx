import Appbar from './appbar';
import { Blog } from '../hooks/index';
import { Avatar } from './blogCard';

const FullBlog = ({ blog }: { blog: Blog }) => {
    return (
        <div className="bg-gray-100 min-h-screen">
            <Appbar />
            <div className="flex justify-center py-10">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 px-4 lg:px-10 w-full max-w-7xl">
                    {/* Main Content */}
                    <div className="lg:col-span-8 p-6">
                        <div className="text-3xl font-bold text-gray-800 mb-4">{blog.title}</div>
                        <div className="text-sm text-gray-500 mb-6">
                            Posted on {blog.createdAt.slice(0, 10)}
                        </div>
                        <div className="text-gray-700 leading-relaxed">
                            {blog.content}
                        </div>
                    </div>

                    {/* Sidebar */}
                    <div className="lg:col-span-4 p-6">
                        <div className="text-xl font-semibold text-gray-800 mb-4">Author</div>
                        <div className="flex items-center space-x-4">
                            <Avatar author={blog.author.name} />
                            <div className="text-lg font-bold text-gray-700">{blog.author.name}</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FullBlog;
