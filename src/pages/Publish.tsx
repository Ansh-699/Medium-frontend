import React, { useState } from 'react';
import axios from 'axios';
import Appbar from '../components/appbar';
import { toast, Toaster } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

const Publish = () => {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const [loading, setLoading] = useState(false);
    const Navigate = useNavigate();

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);

        try {
            const response = await axios.post(
                `https://medium.ansht.workers.dev/api/v1/blog`,
                { title, content },
                {
                    headers: {
                        Authorization: localStorage.getItem('jwt') || '',
                    },
                }
            );
            console.log('Blog created successfully:', response.data);
            toast.success('Blog published successfully!');
            setTitle('');
            setContent('');
            Navigate(`/blog/${response.data.id}`);
        } catch (error) {
            console.error('Error publishing blog:', error);
            toast.error('Failed to publish the blog. Please try again.');
        } finally {
            setLoading(false);
        }
    };

    return (
        <>
            
            <Toaster />

            <div>
                <Appbar />
            </div>
            <div className="flex justify-center items-center min-h-screen bg-gray-100">
                <div className="w-full max-w-lg bg-white p-5 rounded-lg shadow-md">
                    {/* Title */}
                    <h1 className="text-2xl font-bold text-gray-800 mb-6 text-center">Create a Blog</h1>

                    <form onSubmit={handleSubmit}>
                        {/* Title Input */}
                        <div className="mb-4">
                            <label htmlFor="title" className="block text-gray-700 text-sm font-bold mb-2">
                                Title
                            </label>
                            <input
                                type="text"
                                id="title"
                                value={title}
                                onChange={(e) => setTitle(e.target.value)}
                                placeholder="Enter the title"
                                className="w-full px-3 py-2 text-gray-700 bg-gray-100 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-blue-300"
                                required
                            />
                        </div>

                        {/* Content Input */}
                        <div className="mb-6">
                            <label htmlFor="content" className="block text-gray-700 text-sm font-bold mb-2">
                                Content
                            </label>
                            <textarea
                                id="content"
                                value={content}
                                onChange={(e) => setContent(e.target.value)}
                                rows={6}
                                placeholder="Write your content here..."
                                className="w-full px-3 py-2 text-gray-700 bg-gray-100 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-blue-300"
                                required
                            ></textarea>
                        </div>

                        {/* Submit Button */}
                        <div className="flex justify-end">
                            <button
                                type="submit"
                                disabled={loading}
                                className={`px-6 py-2 text-white rounded focus:outline-none focus:ring ${
                                    loading
                                        ? 'bg-gray-400 cursor-not-allowed'
                                        : 'bg-blue-600 hover:bg-blue-700 focus:ring-blue-300'
                                }`}
                            >
                                {loading ? 'Publishing...' : 'Publish'}
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
};

export default Publish;
