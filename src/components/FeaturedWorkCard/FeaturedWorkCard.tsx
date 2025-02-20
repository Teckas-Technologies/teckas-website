

import { FC } from "react";
import Button from "../Button";

type FeaturedWorkCardType = {
    name: string,
    imageURL: string,
}

const FeaturedWorkCard: FC<FeaturedWorkCardType> = (props) => {

    return (
        <div className="featuredWorkCard">
            <div className="box">
                <div className="imageContainer">
                    <span className="name">
                        {props.name}
                    </span>
                    <img src={props.imageURL} alt={props.name} />
                </div>
            </div>

            <Button text={`Visit ${props.name}`} />
        </div>
    )
};


export default FeaturedWorkCard;