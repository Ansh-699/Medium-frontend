
import BlogCard from '../components/blogCard'

import Appbar from '../components/appbar'
import { useBlogs } from '../hooks';
import Skeleton from '../components/BlogSkeleton';


const Blogs = () => {

    const {loading,blogs} = useBlogs();
    if(loading){
        return <div>
          <Skeleton />
          <Skeleton />
          <Skeleton />
          <Skeleton />
        </div>
    }
  return (
    <div>
    <Appbar />
    <div className='flex justify-center'>
        
    <div className=''>
        {blogs.map((blog: any) => (
            <BlogCard 

                id={blog.id}
                title={blog.title}
                author={blog.author.name}
                content={blog.content}
                date={blog.createdAt}
            />
        ))}
    {/* <BlogCard 
      title="Getting Started with React"
      author="John Doe"
      content="React is a JavaScript library for building user interfaces.Recent reports indicate a significant increase in cybersecurity threats, urging companies to enhance their security measures.Recent reports indicate a significant increase in cybersecurity threats, urging companies to enhance their security measures.Recent reports indicate a significant increase in cybersecurity threats, urging companies to enhance their security measures."
      date="2023-10-15"
    />
    <BlogCard 
      title="Understanding React Hooks"
      author="Jane Doe"
      content="React Hooks are functions that let you use state and other React features without writing a class."
      date="2023-10-01"
    />
    <BlogCard 
      title="A Guide to TypeScript"
      author="Aohn Smith"
      content="TypeScript is a typed superset of JavaScript that compiles to plain JavaScript."
      date="2023-09-15"
    />
    <BlogCard 
  title="New JavaScript Framework Released"
  author="Alice Johnson"
  content="A new JavaScript framework has been released, promising faster performance and easier development."
  date="2023-10-20"
/>
<BlogCard 
  title="Tech Conference 2023 Highlights"
  author="Bob Brown"
  content="The Tech Conference 2023 showcased the latest advancements in technology, including AI, VR, and blockchain."
  date="2023-10-18"
/>
<BlogCard 
  title="Cybersecurity Threats on the Rise"
  author="Charlie Davis"
  content="Recent reports indicate a significant increase in cybersecurity threats, urging companies to enhance their security measures."
  date="2023-10-17"
/> */}

    </div>
    </div>
    </div>
  )
}

export default Blogs

