

import "./CollaborationLogo.scss";


type CollaborationLogoProps = {
    logo: string;
    name: string;
}


const CollaborationLogo: React.FC<CollaborationLogoProps> = (props) => {
    
    return (
        <div className="collaborationLogo">
            <img src={props.logo} alt={`${props.name}'s Logo`} />
            <div className="name">
                {props.name}
            </div>
        </div>
    )

}


export default CollaborationLogo;