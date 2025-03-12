
import React from "react";
import { useNavigate } from 'react-router-dom';
import "./BlogCard.scss";

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


const BlogCard: React.FC<BlogCardType> = (props) => {
    const navigate = useNavigate();

    const convertDateFormat = (dateStr: any) => {
        const formattedDate = new Date(dateStr).toLocaleDateString("en-US", {
            year: "numeric",
            month: "long",
            day: "numeric",
        });
        return formattedDate;
    }

    return (
        <div className="BlogCard" onClick={() => {navigate(`/blogs/${props._id}`)}}>
            <div className="image">
                <img src={props.imageUrl} alt="" />
            </div>
            <div className="content">
                <h4>{props.title}</h4>

                <div className="details">
                    <div className="left">
                        <p>{props.blogType}</p>
                    </div>
                    <div className="right">
                        <p>{convertDateFormat(props.uploadedAt)}</p>
                        <span className="circle"></span>
                        <p>{props.readTime} min</p>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default BlogCard;