import React, { useState } from 'react';

import { Link } from 'react-router-dom';

interface blogCardProps {
    title: string,
    author: string,
    content: string,
    date: string
    id: number | string
}

const BlogCard: React.FC<blogCardProps> = ({
    id,
    author,
    title,
    content,
    date
}) => {
    const [isReadMore, setIsReadMore] = useState(false);

    const toggleReadMore = () => {
        setIsReadMore(!isReadMore);
    };

    return (
        <Link to={`/blog/${id}`}>
        <div> 
            <div className='border-b border-slate-200 pb-3 p-4 w-screen max-w-screen-lg cursor-pointer'>
                <div className='flex items-center'>
                    {/* Avatar and Author */}
                    <div className='mr-4'>
                        <Avatar author={author} />
                    </div>
                    <div className='font-extralight text-sm flex flex-col'>
                        {author}
                    </div>
                    <div className='flex justify-center flex-col mx-2'>
                        <Circle />
                    </div>
                    <div className='pl-2 font-thin text-sm text-slate-500'>
                        {date.slice(0, 10)}
                    </div>
                </div>
                <div className='text-xl font-semibold mt-2'>
                    {title}
                </div>
                <div className='text-md font-thin mt-2'>
                    {isReadMore ? content : content.length > 200 ? content.slice(0, 200) + "..." : content}
                    {content.length > 200 && (
                        <span onClick={toggleReadMore} className='text-blue-500 cursor-pointer'>
                            {isReadMore ? " Show less" : " Read more"}
                        </span>
                    )}
                </div>
                <div className='w-full text-slate-500 mt-2'>
                    {getTimeDifference(date)}
                </div>
            </div>
        </div>
        </Link>
    );
}

export function Avatar({ author }: { author: string }) {
    return (
        <div className='relative inline-flex items-center justify-center h-6 w-6 overflow-hidden bg-gray-500 rounded-full'>
            <span className='text-xl text-white'>
                {author[0].toUpperCase()}
            </span>
        </div>
    );
}

function Circle() {
    return (
        <div className='h-1 w-1 rounded-full bg-gray-500'></div>
    );
}

function getTimeDifference(date: string) {
    const postDate = new Date(date);
    const currentDate = new Date();
    const diffInMs = currentDate.getTime() - postDate.getTime();
    const diffInMinutes = Math.floor(diffInMs / 60000);
    const diffInHours = Math.floor(diffInMinutes / 60);
    const diffInDays = Math.floor(diffInHours / 24);

    if (diffInMinutes < 60) {
        return `${diffInMinutes} min ago`;
    } else if (diffInHours < 24) {
        return `${diffInHours} hours ago`;
    } else {
        return `${diffInDays} days ago`;
    }
}

export default BlogCard;
