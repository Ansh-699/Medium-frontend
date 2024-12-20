import { useEffect,useState } from "react";
import axios from "axios";


export interface Blog {
    id: string;
    title: string;
    content: string;
    authorId: string;
    createdAt: string;
    updatedAt: string;
    author: {
        name: string;
    };
}






export const useBlog = (id: string) => {
    const [blog, setBlog] = useState<Blog | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        console.log('Fetching blog with id:', id);
        axios
            .get(`https://medium.ansht.workers.dev/api/v1/blog/${id}`, {
                headers: {
                    Authorization: localStorage.getItem('jwt') || '',
                },
            })
            .then((res) => {
                console.log('API Response:', res.data);
                setBlog(res.data); // Directly set the response as the blog
                setLoading(false);
            })
            .catch((err) => {
                console.error('Error fetching blog:', err);
                setLoading(false);
            });
    }, [id]);

    return { blog, loading };
};

















export const useBlogs = () => {
    const [blogs,setBlogs] = useState([]);
    const [loading,setLoading] = useState(true);
    useEffect(() => {
        axios.get('https://medium.ansht.workers.dev/api/v1/blog/bulk', {
            headers: {
                Authorization: localStorage.getItem('jwt') || ''
            }
        })
        .then(res => {
            if (res.data && Array.isArray(res.data.blogs)) {
                setBlogs(res.data.blogs);
            } else {
                console.error('Unexpected response format:', res.data);
            }
            setLoading(false);
        })
        .catch(err => {
            console.log(err);
        })
    }, [])
    return {blogs,loading}
}