import React from "react";
import { Link } from "react-router-dom";

const BlogSection = () => {
  const blogPosts = [
    {
      id: 1,
      title: "10 Best Ways to Save Money While Shopping Online",
      image:
        "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=300&h=200&fit=crop",
      date: "Dec 15, 2024",
    },
    {
      id: 2,
      title: "Black Friday 2024: Ultimate Guide",
      image:
        "https://images.unsplash.com/photo-1607083206869-4c7672e72a8a?w=300&h=200&fit=crop",
      date: "Dec 10, 2024",
    },
    {
      id: 3,
      title: "How to Stack Coupons Like a Pro",
      image:
        "https://images.unsplash.com/photo-1556742502-ec7c0e9f34b1?w=300&h=200&fit=crop",
      date: "Dec 5, 2024",
    },
  ];

  return (
    <section className="bg-white py-20 border-t border-gray-100">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-end mb-10">
          <div>
            <div className="section-tag">📝 Savings Tips</div>
            <h2 className="text-3xl md:text-4xl font-bold text-textMain">
              Shop Smarter With Us
            </h2>
            <p className="text-gray-500 mt-1">
              Expert tips to maximize your savings every day
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <Link
              key={post.id}
              to={`/blog/${post.id}`}
              className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl border border-gray-100 card-hover group"
            >
              <div className="aspect-video overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-5">
                <span className="text-xs text-gray-400 mb-2 block">
                  {post.date}
                </span>
                <h3 className="font-bold text-lg text-textMain group-hover:text-primary transition-colors line-clamp-2">
                  {post.title}
                </h3>
              </div>
            </Link>
          ))}
        </div>

        <div className="text-center mt-10">
          <Link
            to="/blog"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-primary to-primary-dark text-white px-10 py-4 rounded-full font-bold hover:shadow-lg hover:shadow-primary/30 transition-all hover:-translate-y-0.5 active:scale-95"
          >
            📚 Read More Articles
          </Link>
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
