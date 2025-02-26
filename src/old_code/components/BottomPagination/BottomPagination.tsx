

import React from "react";
import "./BottomPagination.scss";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

type BottomPaginationType = {
    items: any;
    itemsPerPage: number;
    startIndex: number;
    setStartIndex: any;
    stopIndex: number;
    setStopIndex: any;
    goToPage: any;
}

const BottomPagination: React.FC<BottomPaginationType> = (props) => {

    // @ts-ignore
    const [maxPageButtons, setMaxPageButtons] = React.useState(5);

    return (
        <div className="bottomPagination">
                <div className="pagination">
                    {
                        // length is less than maxPageButtons pages. only show maxPageButtons buttons (or less)
                        (Math.ceil(props.items.length / props.itemsPerPage) < maxPageButtons) ? (
                            new Array(Math.ceil(props.items.length / props.itemsPerPage)).fill(0).map((_, index) => <button key={index} className={(((props.startIndex / props.itemsPerPage)) == index) ? "number active" : "number"} onClick={() => props.goToPage(index)}>{index + 1}</button>)
                        ) : (
                            // length is more than maxPageButtons. show maxPageButtons buttons and add ... in the middle and < > buttons
                            <>
                                <button className='leftArrow' disabled={(props.startIndex === 0)} onClick={() => {
                                    if (props.startIndex !== 0) {
                                        props.setStopIndex((stopIndex: number) => stopIndex - props.itemsPerPage);
                                        props.setStartIndex((startIndex: number) => startIndex - props.itemsPerPage);
                                    }

                                }} ><FaChevronLeft size={"10px"}  /> Previous</button>

                                <span className="numbers">
                                    {
                                        new Array(maxPageButtons).fill(0).map((_ , index) => <button key={index} className={(((props.startIndex / props.itemsPerPage)) == index) ? "number active" : "number "} onClick={() => props.goToPage(index)}>{index + 1}</button>)
                                    }
                                </span>
                                
                                
                                <button className='rightArrow' disabled={(props.stopIndex === (Math.ceil(props.items.length / props.itemsPerPage) * props.itemsPerPage))} onClick={() => {
                                    if (props.stopIndex !== (Math.ceil(props.items.length / props.itemsPerPage) * props.itemsPerPage)) {
                                        props.setStopIndex((stopIndex: number) => stopIndex + props.itemsPerPage);
                                        props.setStartIndex((startIndex: number) => startIndex + props.itemsPerPage);
                                    }

                                }}  > Next <FaChevronRight  size={"10px"} /></button>
                            </>
                        )
                    }
                </div>
            </div>
    );
};

export default BottomPagination;