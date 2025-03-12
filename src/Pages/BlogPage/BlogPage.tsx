import React, { useEffect, useState } from 'react';
import "./BlogPage.scss";


import NavBar from "../../components/NavBar/NavBar"
import CtaSection from '../CtaSection/CtaSection';
import TeckasLogo from '../../components/TeckasLogo/TeckasLogo';
import BottomPagination from '../../components/BottomPagination/BottomPagination';
import Footer from '../Footer/Footer';
import BlogCard from '../../components/BlogCard/BlogCard';

import { useBlogs } from '../../Hooks/blogsHook';

type BlogCardType = {
    _id: string;
    title: string;
    subTitle: string;
    content: string;
    imageUrl: string;
    blogType: string;
    readTime: number;
    uploadedAt: string;
}

const BlogPage: React.FC = () => {
    const [page, setPage] = useState(1);
    const [searchText, setSearchText] = useState("");
    const [loading, setLoading] = useState(false);

    const { fetchBlogs, totalPages } = useBlogs();
    const [blogs, setBlogs] = useState<BlogCardType[]>([]);

    const fetchAllBlogs = async (pageNumber: number = 1) => {
        setLoading(true);
        try {
            const response = await fetchBlogs({ page: pageNumber, search: searchText });
            console.log("Blogs Fetched:", response.blogs);
            setBlogs(response.blogs);
        } catch (error) {
            console.error("Error fetching blogs:", error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchAllBlogs(page);
    }, [page, searchText]); // Fetch blogs whenever `page` changes

    const goToPage = (index: number) => {
        setPage(index); // Update the page state
    };

    const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSearchText(event.target.value); // Update search text state
        setPage(1);
    };

    return (
        <div className='BlogPage'>
            <NavBar />

            <div className='blogSection'>
                <div className="headerSection">

                    <div className="left">
                        <h1>
                            Teckas Blogs
                        </h1>
                        <div className="searchbarContainer">

                            <input type="text" placeholder="Search for any Blog..." className='search' value={searchText} onChange={handleSearch} />

                        </div>
                        <div className="subtitle">
                            Innovating the Future: Insights & Solutions from Teckas Technologies
                        </div>
                    </div>
                    <div className="right">
                        <TeckasLogo />
                    </div>

                </div>
                <div className="content">

                    
                    <div className="blogGridContainer">

                        <div className="blogGrid">
                            {
                                blogs.length > 0 && blogs.map((card, index) => {
                                    return (
                                        <BlogCard
                                            key={index}
                                            {...card}
                                        />
                                    )
                                })
                            }
                        </div>

                        <div className="">
                            {
                                blogs.length === 0 && !loading && <p className='no-text'>No blogs found!</p>
                            }
                        </div>

                        <div className="">
                            {
                                blogs.length === 0 && loading && <p className='no-text'>Fetching blogs!</p>
                            }
                        </div>


                        <BottomPagination 
                            goToPage={goToPage}
                            currentPage={page}
                            totalPages={totalPages}
                        />
                    </div>

                </div>
            </div>


            <CtaSection />
            <Footer />
        </div>
    );
};

export default BlogPage;