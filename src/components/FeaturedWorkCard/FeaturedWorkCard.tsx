

import { FC } from "react";
import Button from "../Button";

import "./FeaturedWorkCard.scss";

type FeaturedWorkCardType = {
    name: string,
    image: string,
    logo: string,
    text: string,
    icon: string
}

const FeaturedWorkCard: FC<FeaturedWorkCardType> = (props) => {

    return (
        <div className="featuredWorkCard">
            <div className="box">
                <div className="logoContainer">
                    <img src={props.logo} alt={props.name} />
                    <span className="name">
                        {props.name}
                    </span>
                </div>
                <div className="imageContainer">
                    <img src={props.image} alt={props.name} />
                    <div className="text">
                           <div className="texty">
                           {props.text}
                           </div>
                    <img src={props.icon} alt={props.icon} className="icony"/>
                    </div>
                   
                </div>
            </div>

            <Button text={`Visit ${props.name}`} />
        </div>
    )
};


export default FeaturedWorkCard;