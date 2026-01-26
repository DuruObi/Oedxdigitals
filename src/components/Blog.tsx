import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Calendar, User, ArrowRight } from 'lucide-react';

// Using a mix of images found
const images = [
  "https://images.unsplash.com/photo-1637937459053-c788742455be?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWIlMjBkZXZlbG9wbWVudCUyMGNvZGUlMjBzY3JlZW58ZW58MXx8fHwxNzY5MzQzMTI0fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
  "https://images.unsplash.com/photo-1633250391894-397930e3f5f2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2JpbGUlMjBhcHAlMjBkZXNpZ24lMjB1aXxlbnwxfHx8fDE3NjkzNjM1NjF8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
  "https://images.unsplash.com/photo-1758876021859-bd2371d8f0a2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBvZmZpY2UlMjB3b3Jrc3BhY2UlMjBjcmVhdGl2ZXxlbnwxfHx8fDE3Njk0MjA2Nzd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
  "https://images.unsplash.com/photo-1542744173-05336fcc7ad4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaWdpdGFsJTIwbWFya2V0aW5nJTIwc3RyYXRlZ3klMjBjaGFydHxlbnwxfHx8fDE3Njk0MjA2Nzd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
  "https://images.unsplash.com/photo-1767972464040-8bfee42d7bed?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjeWJlcnNlY3VyaXR5JTIwbG9jayUyMHRlY2hub2xvZ3l8ZW58MXx8fHwxNzY5NDIwNjc3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
  "https://images.unsplash.com/photo-1758599543122-36252c317fd9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMHRlYW0lMjBzdWNjZXNzJTIwbWVldGluZ3xlbnwxfHx8fDE3Njk0MjA2Nzd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
];

const blogPosts = [
  {
    id: 1,
    title: "Elevating Your Business with Cutting-Edge Web Development",
    excerpt: "Discover how modern web technologies can transform your business operations and customer experience.",
    date: "May 15, 2024",
    author: "John Doe",
    image: images[0]
  },
  {
    id: 2,
    title: "The Power of Innovative Design in Digital Strategy",
    excerpt: "Design is not just about looks; it's about solving problems and guiding users to success.",
    date: "May 12, 2024",
    author: "Jane Smith",
    image: images[1]
  },
  {
    id: 3,
    title: "Strategic Digital Solutions for Market Growth",
    excerpt: "Aligning your digital presence with business goals to drive measurable growth and ROI.",
    date: "May 10, 2024",
    author: "Mike Johnson",
    image: images[3]
  },
  {
    id: 4,
    title: "Why Custom Mobile Apps Are Essential for 2025",
    excerpt: "Mobile traffic dominates. Learn why a dedicated app might be the game-changer you need.",
    date: "May 08, 2024",
    author: "Sarah Connor",
    image: images[2]
  },
  {
    id: 5,
    title: "SEO Strategies to Dominate Local Search in Lagos",
    excerpt: "How to optimize your online presence to capture the bustling local market effectively.",
    date: "May 05, 2024",
    author: "Tunde Bakare",
    image: images[3]
  },
  {
    id: 6,
    title: "The Impact of UX/UI on Customer Retention",
    excerpt: "Good design keeps users coming back. Explore the psychology behind user interface design.",
    date: "May 03, 2024",
    author: "Emily White",
    image: images[1]
  },
  {
    id: 7,
    title: "Speed Matters: Optimizing Website Performance",
    excerpt: "Slow sites lose customers. Techniques to ensure your website loads in the blink of an eye.",
    date: "April 29, 2024",
    author: "David Brown",
    image: images[0]
  },
  {
    id: 8,
    title: "React vs. WordPress: Which is Right for You?",
    excerpt: "A comparative analysis to help you choose the best platform for your specific needs.",
    date: "April 25, 2024",
    author: "Chris Green",
    image: images[0]
  },
  {
    id: 9,
    title: "Leveraging E-commerce for Global Growth",
    excerpt: "Breaking geographical barriers by setting up a robust, secure international online store.",
    date: "April 22, 2024",
    author: "Anna Lee",
    image: images[3]
  },
  {
    id: 10,
    title: "The Role of AI in Modern Web Development",
    excerpt: "From chatbots to predictive analytics, how AI is reshaping the web development landscape.",
    date: "April 18, 2024",
    author: "James Wilson",
    image: images[4]
  },
  {
    id: 11,
    title: "Building Trust Through Professional Branding",
    excerpt: "Your brand is your promise. How consistent visual identity builds long-term customer trust.",
    date: "April 15, 2024",
    author: "Lisa Ray",
    image: images[5]
  },
  {
    id: 12,
    title: "Secure Payment Gateways for Nigerian Businesses",
    excerpt: "Navigating the fintech landscape to provide safe and easy payment options for your customers.",
    date: "April 12, 2024",
    author: "Oluwaseun Ade",
    image: images[4]
  },
  {
    id: 13,
    title: "How to Scale Your Startup with Cloud Solutions",
    excerpt: "Scalability is key. Learn how cloud infrastructure supports rapid business expansion.",
    date: "April 10, 2024",
    author: "Robert King",
    image: images[2]
  },
  {
    id: 14,
    title: "The Future of Digital Marketing: Trends to Watch",
    excerpt: "Stay ahead of the curve with these emerging trends in the digital marketing sphere.",
    date: "April 05, 2024",
    author: "Patricia Blue",
    image: images[3]
  },
  {
    id: 15,
    title: "Accessibility: Making the Web Open to Everyone",
    excerpt: "Why inclusive design is a moral imperative and a smart business move.",
    date: "April 02, 2024",
    author: "Tom Hall",
    image: images[1]
  },
  {
    id: 16,
    title: "From Prototype to Product: The MVP Journey",
    excerpt: "A step-by-step guide to launching your Minimum Viable Product successfully.",
    date: "March 30, 2024",
    author: "Nancy Gray",
    image: images[5]
  }
];

const Blog = () => {
  const [visiblePosts, setVisiblePosts] = useState(6);

  const loadMore = () => {
    setVisiblePosts((prev) => Math.min(prev + 6, blogPosts.length));
  };

  return (
    <section id="blog" className="py-24 bg-slate-900 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Latest Insights</h2>
          <div className="w-20 h-1 bg-blue-500 mx-auto rounded-full mb-6"></div>
          <p className="text-slate-400 max-w-2xl mx-auto text-lg">
            Expert articles on web development, design strategies, and digital trends to help your business grow.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.slice(0, visiblePosts).map((post, index) => (
            <motion.div
              key={post.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05, duration: 0.5 }}
              className="bg-slate-800 rounded-xl overflow-hidden border border-slate-700 hover:border-blue-500/50 transition-all group flex flex-col h-full shadow-lg"
            >
              <div className="h-48 overflow-hidden relative">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent opacity-60"></div>
              </div>
              <div className="p-6 flex flex-col flex-grow">
                <div className="flex items-center text-xs text-slate-400 mb-3 space-x-3">
                  <div className="flex items-center">
                    <Calendar size={14} className="mr-1 text-blue-500" />
                    {post.date}
                  </div>
                  <div className="flex items-center">
                    <User size={14} className="mr-1 text-blue-500" />
                    {post.author}
                  </div>
                </div>
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors line-clamp-2">
                  {post.title}
                </h3>
                <p className="text-slate-400 text-sm mb-4 line-clamp-3 flex-grow">
                  {post.excerpt}
                </p>
                <a href="#" className="inline-flex items-center text-blue-500 hover:text-blue-400 font-semibold text-sm mt-auto transition-colors">
                  Read More <ArrowRight size={16} className="ml-1" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>

        {visiblePosts < blogPosts.length && (
          <div className="text-center mt-12">
            <button
              onClick={loadMore}
              className="px-8 py-3 bg-slate-800 hover:bg-slate-700 text-white rounded-lg font-semibold border border-slate-700 hover:border-slate-600 transition-all shadow-lg"
            >
              Load More Articles
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default Blog;
