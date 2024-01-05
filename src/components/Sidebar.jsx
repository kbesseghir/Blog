import React, { useEffect, useState } from 'react';
import { FaArrowRightLong } from 'react-icons/fa6';
import { Link } from 'react-router-dom';

const Sidebar = () => {
    const url = 'http://localhost:5000/blogs';
    const [popularBlogs, setPopularBlogs] = useState([]);

    const fetchData = async () => {
        try {
            const response = await fetch(url);
            const data = await response.json();
            setPopularBlogs(data);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    useEffect(() => {
        fetchData();
    }, []);

    return (
        <div>
            <h3 className="text-xl font-bold mb-4">Latest blogs</h3>

            <div>
                {popularBlogs.length > 0 ? (
                    popularBlogs.slice(0, 12).map((blog) => (
                        <div key={blog.id} className="mb-4">
                            <h4 className=" font-semibold mb-2">{blog.title.slice(0,70)} ...</h4>
                            <Link
                                to="/"
                                className="text-gray-800  inline-flex  items-center hover:text-orange-500 py-1"
                            >
                                Read now
                                <FaArrowRightLong className="ml-2 mt-1" />
                            </Link>
                        </div>
                    ))
                ) : (
                    <p>Loading...</p>
                )}
            </div>
        </div>
    );
};

export default Sidebar;

