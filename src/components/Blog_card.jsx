import blogs from '../Json/Blogsjson';
import { commernt_blog } from '../assets/images';

export default function Blog_card() {
  return (
    <>
    <div className='bg-[#EAEBEA] py-20'>
      <div className="text-center max-w-2xl mx-auto mb-10 bg-[#EAEBEA] ">
        <img src={commernt_blog} alt="Blog section icon" className="mx-auto mb-4 w-16 h-16" />
        <h2 className="text-2xl font-bold">From the Blog</h2>
        <p className="text-gray-600 mt-2">
          Stay informed and inspired with our latest blog posts. Explore insightful content that keeps you ahead of trends.
        </p>
      </div>

      {/* Blog Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 bg-[#EAEBEA] px-30 py-2">
        {blogs.slice(0, 3).map((blog) => (
          <div
            key={blog.id}
            className="p-4"
          >
            <img
              src={blog.image}
              alt={blog.title}
              className="w-full h-62 object-cover rounded-md"
            />
            <h3 className="text-lg font-semibold mt-3">{blog.title}</h3>
            <p className="text-sm text-gray-600 mt-2">
              {blog.blog_details.slice(0, 100)}...
            </p>
          </div>
        ))}
      </div>
      </div>
    </>
  );
}
