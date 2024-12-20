import FullBlog from "../components/FullBlog";
import { useBlog } from "../hooks";
import { useParams } from "react-router-dom";
import Skeleton from '../components/BlogSkeleton';



const Blog = () => {
  const { id } = useParams<{ id: string }>();
 const { loading, blog } = useBlog(id || "");
 if (loading) {
  return <div>
    <Skeleton />
  </div>;
 }
  return (
    <div>
      {blog ? <FullBlog blog={blog} /> : <div>Blog not found</div>}
    </div>
  );
}

export default Blog
