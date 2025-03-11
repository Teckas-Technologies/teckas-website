
import "./CtaSection.scss";

import Button from "../../components/Button";

export const CtaSection: React.FC = () => {

    return (
        <div className="CtaSection">

            <div className="subtitle">
                The best tech isn't built by chance. It's built by choice.
            </div>

            <div className="title">
                Choose Teckas Technologies.
            </div>

            <Button 
                text="Start your Journey Today" path="forum"
            />

        </div>
    )
}


export default CtaSection;