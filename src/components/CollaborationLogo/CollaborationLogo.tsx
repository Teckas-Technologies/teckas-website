

import "./CollaborationLogo.scss";


type CollaborationLogoProps = {
    className?: string;
    logo: string;
    name: string;
}


const CollaborationLogo: React.FC<CollaborationLogoProps> = (props) => {
    
    return (
        <div className={"collaborationLogo " + (props.className ? ` ${props.className}` : "")}>
            <img src={props.logo} alt={`${props.name}'s Logo`} />
            <div className="name">
                {props.name}
            </div>
        </div>
    )

}


export default CollaborationLogo;