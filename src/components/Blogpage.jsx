import React from 'react'
import blogs from '../Json/Blogsjson';
import { Link } from 'react-router-dom';

export default function Blogpage() {
    return (
        <>
            {/* Blog Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 bg-[#EAEBEA] px-30 py-10">
                {blogs.slice(0, 40).map((blog) => (
                    <div
                        key={blog.id}
                        className="p-4 leading-2"
                    >
                        <Link to={`/blog/${blog.id}`}>
                        <img
                            src={blog.image}
                            alt={blog.title}
                            className="w-full h-62 object-cover rounded-md"
                        />
                        <h3 className="text-lg font-semibold mt-3">{blog.title}</h3>
                        <p className="text-sm text-gray-600 mt-2">
                            {blog.blog_details.slice(0, 100)}...
                        </p>
                        <p className='text-sm text-gray-600'>Author: {blog.author}</p>
                    </Link>
                    </div>
                ))}
        </div >
        </>
    )
}
