import React, { useState } from 'react';
import "./AddBlog.css";


import NavBar from "../../components/NavBar/NavBar"
import CtaSection from '../CtaSection/CtaSection';
import TeckasLogo from '../../components/TeckasLogo/TeckasLogo';
import Footer from '../Footer/Footer';
import { useBlogs } from '../../Hooks/blogsHook.ts';
import Button from '../../components/Button.tsx';
import Toast from '../../components/Toast/Toast.tsx';

const AddBlog: React.FC = () => {

    const { createBlog } = useBlogs();

    const [blogData, setBlogData] = useState({
        title: '',
        subTitle: '',
        content: '',
        imageUrl: '',
        blogType: 'Educational',
    });
    const [loading, setLoading] = useState(false);
    const [toast, setToast] = useState<{ message: string, type: "success" | "danger" } | null>(null);
    const [error, setError] = useState<string | null>(null);
    const [success, setSuccess] = useState<string | null>(null);

    const isDisabled = !blogData.blogType || !blogData.content || !blogData.imageUrl || !blogData.subTitle || !blogData.title;

    // Handle input changes
    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        console.log()
        setBlogData({
            ...blogData,
            [e.target.name]: e.target.value,
        });
    };

    // Handle radio button changes
    const handleRadioChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setBlogData({
            ...blogData,
            blogType: e.target.value,
        });
    };

    // Handle form submission
    const handleSubmit = async () => {
        setLoading(true);
        setError(null);
        setSuccess(null);

        try {
            const response = await createBlog(blogData);
            if (response.success) {
                setSuccess("Blog created successfully!");
                setToast({ message: "Blog created successfully!", type: "success" });
                setBlogData({ title: '', subTitle: '', content: '', imageUrl: '', blogType: 'Educational' });
            } else {
                setError(response.message);
                setToast({ message: response.message, type: "danger" });
            }
        } catch (err) {
            setError("An unexpected error occurred.");
            setToast({ message: "An unexpected error occurred.", type: "danger" });
        } finally {
            setLoading(false);
            console.log("LOGS: ", success, error)
        }
    };

    return (
        <div className='BlogPage'>
            <NavBar />

            <div className='blog-section'>
                <div className="headerSection">


                    <div className="left">
                        <h1>
                            Upload a Blog
                        </h1>
                        <div className="subtitle">
                            Add teckas technologies blogs here...
                        </div>
                    </div>
                    <div className="right">
                        <TeckasLogo />
                    </div>

                </div>
                <div className="blog-form-holder">
                    <div className="row">
                        <div className="form-input">
                            <h4>Title:</h4>
                            <input type="text" name="title" value={blogData.title} onChange={handleChange} placeholder="Enter title for the Blog..." className='search' />
                        </div>
                        <div className="form-input">
                            <h4>Sub-Title:</h4>
                            <input type="text" name="subTitle" value={blogData.subTitle} onChange={handleChange} placeholder="Enter sub title for the Blog..." className='search' />
                        </div>
                    </div>
                    <div className="row">
                        <div className="form-input">
                            <h4>Image URL:</h4>
                            <input type="text" name="imageUrl" value={blogData.imageUrl} onChange={handleChange} placeholder="Enter sub title for the Blog..." className='search' />
                        </div>
                        <div className="form-input">
                            <h4>Blog Type:</h4>
                            <div className="radio-group">
                                {["Educational", "Business", "Innovative", "New Idea", "Others"].map((type) => (
                                    <div className='radio'>
                                        <input type="radio" id={type} name="blogType" value={type} checked={blogData.blogType === type} onChange={handleRadioChange} />
                                        <label key={type} htmlFor={type} className="radio-label">
                                            {type}
                                        </label>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                    <div className="form-input">
                        <h4>Content:</h4>
                        <textarea name="content" value={blogData.content} onChange={handleChange} placeholder="Enter sub title for the Blog..." style={{ minHeight: 150, background: "transparent", padding: 8, borderRadius: 10, outline: "none" }} className='search' />
                    </div>

                    <div className="btn-holder">
                        <Button text={loading ? 'Submitting...' : 'Submit Blog'} isSubmit={true} submitFunction={handleSubmit} disable={isDisabled} />
                    </div>

                    {/* {error && <p className="error-message">{error}</p>}
                    {success && <p className="success-message">{success}</p>} */}
                </div>
            </div>

            {toast && <Toast message={toast.message} type={toast.type} onClose={() => setToast(null)} />}
            {/* <Toast message={toast?.message || "Blog Added Successfully"} type={toast?.type || "danger"} onClose={() => setToast(null)} /> */}

            <CtaSection />
            <Footer />
        </div>
    );
};

export default AddBlog;