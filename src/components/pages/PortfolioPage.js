import CarouselInner from "../CarouselInner";
import easyBankingImage from '../../imgs/1683041130811.png'
import secImage from '../../imgs/168304113080111.png'
import bankThirdImage from '../../imgs/16830411308111.png'
import firstMapImage from '../../imgs/1683052988019.png'
import secondMapImage from '../../imgs/1683040941937.png'
import thirdMapImage from '../../imgs/1683053120410.png'
import { BsChevronRight, BsChevronLeft } from 'react-icons/bs'
import { useState } from "react";

function PortfolioPage() {

    const [currentIndex, setCurrentIndex] = useState(0)
    const easyBank = [easyBankingImage, secImage, bankThirdImage];
    const counrtiesArr = [firstMapImage, thirdMapImage, secondMapImage]
    const data = [
        {
            title: "Easybank Landing Page",
            link: "https://easybanklanding-lemon.vercel.app/",
            images: easyBank,
            aboutText: "This project required me to build a fully responsive landing page to design provided. I used HTML5, CSS with Bootstrap and React frameworks. React was used to create reusable components in Latest Articles section or dropdown menu in mobile version.",
            tags: "HTML/CSS/JS Bootstrap/React",


        },
        {
            title: "REST countries API with color themes switcher",
            link: "https://easybanklanding-lemon.vercel.app/",
            images: counrtiesArr,
            aboutText: "This project required me to build responsive REST countries Api to pull country data and display it like in design provided. I used Tailwind CSS to style elements and React Framework for the areas that required interactivity. Users are able to watch all countries from the API on the homepage, search for a country, click on a country to see detailed information, etc.",
            tags: "HTML/CSS/JS Tailwind/React",


        },
    ];
    const handleNext = () => {
        if (currentIndex === data.length - 1) { setCurrentIndex(0) }
        else setCurrentIndex(currentIndex + 1)

    }
    const handlePrevious = () => {
        if (currentIndex === 0)
            setCurrentIndex(data.length - 1)
        else setCurrentIndex(currentIndex - 1)
    }
    const renderedData = data.filter((item, index) => {
        if (index !== currentIndex) {
            return null;
        } return item;

    })


    return <>
        <CarouselInner item={renderedData} />
        <div className="row py-4 border-top">
            <div className="col d-flex justify-content-start border-end">
                <button className="btn btn-my" type="button" onClick={handlePrevious}>
                    <BsChevronLeft />  Previous project
                </button></div>
            <div className="col d-flex justify-content-end">
                <button className="btn btn-my" type="button" onClick={handleNext} >
                    Next project  <BsChevronRight />
                </button></div></div>
    </>
}
export default PortfolioPage;