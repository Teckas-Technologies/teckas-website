

import { FC } from "react";
import Button from "../Button";

import "./FeaturedWorkCard.scss";

type FeaturedWorkCardIconType = {
    name: string,
    icon: string,
}

type FeaturedWorkCardType = {
    name: string,
    image: string,
    logo: string,
    text: string,
    icon: FeaturedWorkCardIconType[]
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

                    <div className="icons">
                        {
                            props.icon.map((icon, index) => {
                                return (
                                    <span key={index} className="icon">
                                        <img src={icon.icon} alt={icon.name}/>
                                        <span>{icon.name}</span>
                                    </span>
                                )
                            })
                        }
                    </div>
                    {/* <img src={props.icon} alt={props.icon} className="icony"/> */}
                    </div>
                   
                </div>
            </div>

            <Button text={`Visit ${props.name}`} path={props.name} />
        </div>
    )
};


export default FeaturedWorkCard;