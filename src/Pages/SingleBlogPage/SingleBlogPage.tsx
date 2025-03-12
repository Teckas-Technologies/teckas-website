import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from "react-router-dom";
import "./SingleBlogPage.css";


import NavBar from "../../components/NavBar/NavBar"
import CtaSection from '../CtaSection/CtaSection';
import TeckasLogo from '../../components/TeckasLogo/TeckasLogo';
import Footer from '../Footer/Footer';
import { useBlogs } from '../../Hooks/blogsHook.ts';

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

const SingleBlogPage: React.FC = () => {

    const { blogid } = useParams();
    const navigate = useNavigate();
    const { fetchBlogById } = useBlogs();
    const [blog, setBlog] = useState<BlogCardType | null>(null);

    console.log("BLOG ID: ", blogid)

    const fetchBlog = async (id: string) => {
        const response = await fetchBlogById(id);
        console.log("RES: ", response)
        setBlog(response);
    }

    useEffect(() => {
        if (blogid) {
            fetchBlog(blogid);
        }
    }, [blogid])

    return (
        <div className='BlogPage'>
            <NavBar />

            <div className='blog-section'>
                <div className="headerSection">

                    <div className="left">
                        <div className="title-box">
                            <h3><strong>Title: </strong>{blog?.title} </h3>
                        </div>
                        <div className="subtitle">
                            <h3>{blog?.subTitle} </h3>
                        </div>
                    </div>
                    <div className="right">
                        <TeckasLogo />
                    </div>

                </div>
                <div className="blog-content-holder">
                    <div className="blog-image">
                        <img src={blog?.imageUrl} alt="teckas" />
                    </div>
                    <div className="content-text">
                        <p dangerouslySetInnerHTML={{ __html: blog?.content || "" }}></p>
                    </div>
                    <div className="type-holder">
                        <div className="type">
                            <p>{blog?.blogType}</p>
                        </div>

                        <div className="back" onClick={() => {navigate(`/blogs`)}}>
                            <p>See More</p>
                        </div>
                    </div>
                </div>
            </div>


            <CtaSection />
            <Footer />
        </div>
    );
};

export default SingleBlogPage;