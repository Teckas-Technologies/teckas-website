import React, { useEffect, useState } from 'react';
import "./BlogPage.scss";


import NavBar from "../../components/NavBar/NavBar"
import CtaSection from '../CtaSection/CtaSection';
import TeckasLogo from '../../components/TeckasLogo/TeckasLogo';
import BottomPagination from '../../components/BottomPagination/BottomPagination';
import Footer from '../Footer/Footer';
import BlogCard from '../../components/BlogCard/BlogCard';

type BlogCardType = {
    title: string;
    date: string;
    duration: string;
    image: string;
    category: string;
}

const items: BlogCardType[] = [
    {
        title: "This article discusses a Smart Insurance Management System developed by Teckas Technologies",
        date: "20 March 2024",
        duration: "5 min read",
        image: "https://placehold.co/600x400/grey/white",
        category: "Educational"
    },
    {
        title: "This article discusses a Smart Insurance Management System developed by Teckas Technologies",
        date: "20 March 2024",
        duration: "5 min read",
        image: "https://placehold.co/600x400/grey/white",
        category: "Educational"
    },
    {
        title: "This article discusses a Smart Insurance Management System developed by Teckas Technologies",
        date: "20 March 2024",
        duration: "5 min read",
        image: "https://placehold.co/600x400/grey/white",
        category: "Educational"
    },
    {
        title: "This article discusses a Smart Insurance Management System developed by Teckas Technologies",
        date: "20 March 2024",
        duration: "5 min read",
        image: "https://placehold.co/600x400/grey/white",
        category: "Educational"
    },
    {
        title: "This article discusses a Smart Insurance Management System developed by Teckas Technologies",
        date: "20 March 2024",
        duration: "5 min read",
        image: "https://placehold.co/600x400/grey/white",
        category: "Educational"
    },
    {
        title: "This article discusses a Smart Insurance Management System developed by Teckas Technologies",
        date: "20 March 2024",
        duration: "5 min read",
        image: "https://placehold.co/600x400/grey/white",
        category: "Educational"
    },
    {
        title: "This article discusses a Smart Insurance Management System developed by Teckas Technologies",
        date: "20 March 2024",
        duration: "5 min read",
        image: "https://placehold.co/600x400/grey/white",
        category: "Educational"
    },
    {
        title: "This article discusses a Smart Insurance Management System developed by Teckas Technologies",
        date: "20 March 2024",
        duration: "5 min read",
        image: "https://placehold.co/600x400/grey/white",
        category: "Educational"
    },
    {
        title: "This article discusses a Smart Insurance Management System developed by Teckas Technologies",
        date: "20 March 2024",
        duration: "5 min read",
        image: "https://placehold.co/600x400/grey/white",
        category: "Educational"
    },
    {
        title: "This article discusses a Smart Insurance Management System developed by Teckas Technologies",
        date: "20 March 2024",
        duration: "5 min read",
        image: "https://placehold.co/600x400/grey/white",
        category: "Educational"
    },
    {
        title: "This article discusses a Smart Insurance Management System developed by Teckas Technologies",
        date: "20 March 2024",
        duration: "5 min read",
        image: "https://placehold.co/600x400/grey/white",
        category: "Educational"
    },
    {
        title: "This article discusses a Smart Insurance Management System developed by Teckas Technologies",
        date: "20 March 2024",
        duration: "5 min read",
        image: "https://placehold.co/600x400/grey/white",
        category: "Educational"
    },
    {
        title: "This article discusses a Smart Insurance Management System developed by Teckas Technologies",
        date: "20 March 2024",
        duration: "5 min read",
        image: "https://placehold.co/600x400/grey/white",
        category: "Educational"
    },
    {
        title: "This article discusses a Smart Insurance Management System developed by Teckas Technologies",
        date: "20 March 2024",
        duration: "5 min read",
        image: "https://placehold.co/600x400/grey/white",
        category: "Educational"
    },
    {
        title: "This article discusses a Smart Insurance Management System developed by Teckas Technologies",
        date: "20 March 2024",
        duration: "5 min read",
        image: "https://placehold.co/600x400/grey/white",
        category: "Educational"
    },
    // 15 ^^
    {
        title: "This article discusses a Smart Insurance Management System developed by Teckas Technologies",
        date: "20 March 2024",
        duration: "5 min read",
        image: "https://placehold.co/600x400/grey/white",
        category: "Educational"
    },
    {
        title: "This article discusses a Smart Insurance Management System developed by Teckas Technologies",
        date: "20 March 2024",
        duration: "5 min read",
        image: "https://placehold.co/600x400/grey/white",
        category: "Educational"
    },
    {
        title: "This article discusses a Smart Insurance Management System developed by Teckas Technologies",
        date: "20 March 2024",
        duration: "5 min read",
        image: "https://placehold.co/600x400/grey/white",
        category: "Educational"
    },
    {
        title: "This article discusses a Smart Insurance Management System developed by Teckas Technologies",
        date: "20 March 2024",
        duration: "5 min read",
        image: "https://placehold.co/600x400/grey/white",
        category: "Educational"
    },
    {
        title: "This article discusses a Smart Insurance Management System developed by Teckas Technologies",
        date: "20 March 2024",
        duration: "5 min read",
        image: "https://placehold.co/600x400/grey/white",
        category: "Educational"
    },
    {
        title: "This article discusses a Smart Insurance Management System developed by Teckas Technologies",
        date: "20 March 2024",
        duration: "5 min read",
        image: "https://placehold.co/600x400/grey/white",
        category: "Educational"
    },
    {
        title: "This article discusses a Smart Insurance Management System developed by Teckas Technologies",
        date: "20 March 2024",
        duration: "5 min read",
        image: "https://placehold.co/600x400/grey/white",
        category: "Educational"
    },
    {
        title: "This article discusses a Smart Insurance Management System developed by Teckas Technologies",
        date: "20 March 2024",
        duration: "5 min read",
        image: "https://placehold.co/600x400/grey/white",
        category: "Educational"
    },
    {
        title: "This article discusses a Smart Insurance Management System developed by Teckas Technologies",
        date: "20 March 2024",
        duration: "5 min read",
        image: "https://placehold.co/600x400/grey/white",
        category: "Educational"
    },
    {
        title: "This article discusses a Smart Insurance Management System developed by Teckas Technologies",
        date: "20 March 2024",
        duration: "5 min read",
        image: "https://placehold.co/600x400/grey/white",
        category: "Educational"
    },
    {
        title: "This article discusses a Smart Insurance Management System developed by Teckas Technologies",
        date: "20 March 2024",
        duration: "5 min read",
        image: "https://placehold.co/600x400/grey/white",
        category: "Educational"
    },
    {
        title: "This article discusses a Smart Insurance Management System developed by Teckas Technologies",
        date: "20 March 2024",
        duration: "5 min read",
        image: "https://placehold.co/600x400/grey/white",
        category: "Educational"
    },
    {
        title: "This article discusses a Smart Insurance Management System developed by Teckas Technologies",
        date: "20 March 2024",
        duration: "5 min read",
        image: "https://placehold.co/600x400/grey/white",
        category: "Educational"
    },
    {
        title: "This article discusses a Smart Insurance Management System developed by Teckas Technologies",
        date: "20 March 2024",
        duration: "5 min read",
        image: "https://placehold.co/600x400/grey/white",
        category: "Educational"
    },
    {
        title: "This article discusses a Smart Insurance Management System developed by Teckas Technologies",
        date: "20 March 2024",
        duration: "5 min read",
        image: "https://placehold.co/600x400/grey/white",
        category: "Educational"
    },
    {
        title: "This article discusses a Smart Insurance Management System developed by Teckas Technologies",
        date: "20 March 2024",
        duration: "5 min read",
        image: "https://placehold.co/600x400/grey/white",
        category: "Educational"
    },
    {
        title: "This article discusses a Smart Insurance Management System developed by Teckas Technologies",
        date: "20 March 2024",
        duration: "5 min read",
        image: "https://placehold.co/600x400/grey/white",
        category: "Educational"
    },
    {
        title: "This article discusses a Smart Insurance Management System developed by Teckas Technologies",
        date: "20 March 2024",
        duration: "5 min read",
        image: "https://placehold.co/600x400/grey/white",
        category: "Educational"
    },
    {
        title: "This article discusses a Smart Insurance Management System developed by Teckas Technologies",
        date: "20 March 2024",
        duration: "5 min read",
        image: "https://placehold.co/600x400/grey/white",
        category: "Educational"
    },
    {
        title: "This article discusses a Smart Insurance Management System developed by Teckas Technologies",
        date: "20 March 2024",
        duration: "5 min read",
        image: "https://placehold.co/600x400/grey/white",
        category: "Educational"
    },
    {
        title: "This article discusses a Smart Insurance Management System developed by Teckas Technologies",
        date: "20 March 2024",
        duration: "5 min read",
        image: "https://placehold.co/600x400/grey/white",
        category: "Educational"
    },
    {
        title: "This article discusses a Smart Insurance Management System developed by Teckas Technologies",
        date: "20 March 2024",
        duration: "5 min read",
        image: "https://placehold.co/600x400/grey/white",
        category: "Educational"
    },
    {
        title: "This article discusses a Smart Insurance Management System developed by Teckas Technologies",
        date: "20 March 2024",
        duration: "5 min read",
        image: "https://placehold.co/600x400/grey/white",
        category: "Educational"
    },
    {
        title: "This article discusses a Smart Insurance Management System developed by Teckas Technologies",
        date: "20 March 2024",
        duration: "5 min read",
        image: "https://placehold.co/600x400/grey/white",
        category: "Educational"
    },
    {
        title: "This article discusses a Smart Insurance Management System developed by Teckas Technologies",
        date: "20 March 2024",
        duration: "5 min read",
        image: "https://placehold.co/600x400/grey/white",
        category: "Educational"
    },
    {
        title: "This article discusses a Smart Insurance Management System developed by Teckas Technologies",
        date: "20 March 2024",
        duration: "5 min read",
        image: "https://placehold.co/600x400/grey/white",
        category: "Educational"
    },
]

const BlogPage: React.FC = () => {

    // @ts-ignore
    const [itemsPerPage, setItemsPerPage] = useState(9);
    const [startIndex, setStartIndex] = useState(0);
    const [stopIndex, setStopIndex] = useState(itemsPerPage);

    // @ts-ignore
    const [cards, setCards] = useState(items);
    const [filteredCards, setFilteredCards] = useState([] as BlogCardType[]);

    useEffect(() => {
        setFilteredCards(cards);
    }, []);

    const goToPage = (index: number) => {
        index++

        if (index == 1) {
            setStartIndex(0)
            setStopIndex(itemsPerPage)
        }
        else {
            console.log("start index", (index - 1) * itemsPerPage)
            console.log("stop index", index * itemsPerPage)

            setStartIndex( (index - 1) * itemsPerPage )  
            setStopIndex(index * itemsPerPage);
        }
    };

    return (
        <div className='BlogPage'>
            <NavBar />

            <div className='blogSection'>
                <div className="headerSection">

                    <div className="left">
                        <h1>
                            Teckas Blogs
                        </h1>
                        <div className="searchbarContainer">

                            <input type="text" placeholder="Search for any Blog..." />

                        </div>
                        <div className="subtitle">
                            Innovating the Future: Insights & Solutions from Teckas Technologies
                        </div>
                    </div>
                    <div className="right">
                        <TeckasLogo />
                    </div>

                </div>
                <div className="content">

                    
                    <div className="blogGridContainer">

                        <div className="blogGrid">
                            {
                                filteredCards.slice(startIndex, stopIndex).map((card, index) => {
                                    return (
                                        <BlogCard
                                            key={index}
                                            {...card}
                                        />
                                    )
                                })
                            }
                        </div>


                        <BottomPagination 
                            items={items}
                            startIndex={startIndex} 
                            setStartIndex={setStartIndex}
                            stopIndex={stopIndex}
                            setStopIndex={setStopIndex}
                            goToPage={goToPage}
                            itemsPerPage={itemsPerPage}
                            key={items.length}
                        />
                    </div>

                </div>
            </div>


            <CtaSection />
            <Footer />
        </div>
    );
};

export default BlogPage;