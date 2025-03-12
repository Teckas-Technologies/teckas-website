import React from "react";
import "./BottomPagination.scss";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

type BottomPaginationType = {
    totalPages: number;
    currentPage: number;
    goToPage: (page: number) => void;
};

const BottomPagination: React.FC<BottomPaginationType> = ({ totalPages, currentPage, goToPage }) => {
    const getPageNumbers = () => {
        let pages = [];
        if (totalPages <= 5) {
            // Show all pages if total pages are 5 or less
            for (let i = 1; i <= totalPages; i++) {
                pages.push(i);
            }
        } else {
            // Show dynamic range
            pages.push(1); // Always show first page

            let start = Math.max(2, currentPage - 2);
            let end = Math.min(totalPages - 1, currentPage + 2);

            if (start > 2) pages.push("..."); // Ellipsis before the dynamic range

            for (let i = start; i <= end; i++) {
                pages.push(i);
            }

            if (end < totalPages - 1) pages.push("..."); // Ellipsis after the dynamic range

            pages.push(totalPages); // Always show last page
        }

        return pages;
    };

    return (
        <div className="bottomPagination">
            <div className="pagination">
                <button
                    className={`leftArrow ${currentPage === 1 && "btn-disable"}`}
                    disabled={currentPage === 1}
                    onClick={() => goToPage(currentPage - 1)}
                >
                    <FaChevronLeft size={"10px"} /> Previous
                </button>

                <span className="numbers">
                    {getPageNumbers().map((page, index) =>
                        typeof page === "number" ? (
                            <button
                                key={index}
                                className={`number ${page === currentPage ? "active" : ""}`}
                                onClick={() => goToPage(page)}
                            >
                                {page}
                            </button>
                        ) : (
                            <span key={index} className="dots">
                                {page}
                            </span>
                        )
                    )}
                </span>

                <button
                    className={`rightArrow ${currentPage === totalPages && "btn-disable"}`}
                    disabled={currentPage === totalPages}
                    onClick={() => goToPage(currentPage + 1)}
                >
                    Next <FaChevronRight size={"10px"} />
                </button>
            </div>
        </div>
    );
};

export default BottomPagination;
