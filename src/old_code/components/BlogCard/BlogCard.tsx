
import React from "react";
import "./BlogCard.scss";

type BlogCardType = {
    title: string;
    date: string;
    duration: string;
    image: string;
    category: string;
}


const BlogCard: React.FC<BlogCardType> = (props) => {


    return (
        <div className="BlogCard">
            <div className="image">
                <img src={props.image} alt="" />
            </div>
            <div className="content">
                <h4>{props.title}</h4>

                <div className="details">
                    <div className="left">
                        <p>{props.category}</p>
                    </div>
                    <div className="right">
                        <p>{props.date}</p>
                        <span className="circle"></span>
                        <p>{props.duration}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default BlogCard;