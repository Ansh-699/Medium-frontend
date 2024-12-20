
import { Link } from 'react-router-dom'

const appbar = () => {
  const author = 'John Doe'; // Define the author variable

  return (
    <div className='border-b border-slate-200 bg-slate-100 flex justify-between px-10 py-4'>
      <Link to={'/blogs'}>
      <div className='text-2xl font-bold flex-col justify-center cursor-pointer'>
        Medium
      </div>
      </Link>
      
      <div className='px-5 flex'>
        <div className='px-5'>
          <Link to={'/publish'}>
      <button type="button" className="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-full text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700">Upload</button>
      </Link>
      </div>
        <BigAvataar author={author}/>
        
      </div> 
    </div>
  )
}

 function BigAvataar({ author }: { author: string }) {
    return (
        <div className='relative inline-flex items-center justify-center h-10 w-10 overflow-hidden bg-gray-500 rounded-full'>
            <span className='text-xl text-white'>
                {author[0].toUpperCase()}
            </span>
        </div>
    );
}

export default appbar
