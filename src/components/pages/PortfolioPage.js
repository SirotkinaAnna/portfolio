import CarouselInner from "../CarouselInner";
import easyBankingImage from '../../imgs/1683041130811.png'
import secImage from '../../imgs/168304113080111.png'
import bankThirdImage from '../../imgs/16830411308111.png'
import firstMapImage from '../../imgs/1683052988019.png'
import secondMapImage from '../../imgs/1683040941937.png'
import thirdMapImage from '../../imgs/1683053120410.png'
import shopCartImage from '../../imgs/1683141534644.png'
import formFirstImg from '../../imgs/1683142469661.png';
import secondFormIng from '../../imgs/1683142506047.png';
import thirdFormImg from '../../imgs/1683142537469.png';
import forthFromIng from '../../imgs/1683142565503.png'
import { BsChevronRight, BsChevronLeft } from 'react-icons/bs'
import { useState } from "react";

function PortfolioPage() {

    const [currentIndex, setCurrentIndex] = useState(0)
    const easyBank = [easyBankingImage, secImage, bankThirdImage];
    const counrtiesArr = [firstMapImage, thirdMapImage, secondMapImage];
    const shopcart = [shopCartImage];
    const multiStepForm = [formFirstImg, secondFormIng, thirdFormImg, forthFromIng]
    const data = [
        {
            title: "Easybank landing page",
            link: "https://easybanklanding-lemon.vercel.app/",
            images: easyBank,
            aboutText: "This project required me to build a fully responsive landing page to design provided. It was a challenge from Frontend Mentor. I used HTML5, CSS with Bootstrap and React frameworks. React was used to create reusable components in Latest Articles section or dropdown menu in mobile version.",
            tags: "HTML/CSS/JS Bootstrap/React",


        },
        {
            title: "REST countries API with color themes switcher",
            link: "https://easybanklanding-lemon.vercel.app/",
            images: counrtiesArr,
            aboutText: "This project required me to build responsive REST countries Api to pull country data and display it like in design provided. It was a challenge from Frontend Mentor. I used Tailwind CSS to style elements and React Framework for the areas that required interactivity. Users are able to watch all countries from the API on the homepage, search for a country, click on a country to see detailed information, etc.",
            tags: "HTML/CSS/JS Tailwind/React",


        },
        {
            title: 'E-commerce product page',
            link: "https://shopcart-eight.vercel.app/",
            images: shopcart,
            aboutText: "This project required me to build a fully responsive e-commerce product page to design provided. It was a challenge from Frontend Mentor. I used HTML5,CSS with Bootsrap and React frameworks. Users are able to add items to the cart, view and remove items from the cart, open lightbox gallery by clicking on the large product image.",
            tags: "HTML/CSS/JS Bootstrap/React"
        },
        {
            title: "Multi-step form",
            link: "https://multistepform-nine.vercel.app/",
            images: multiStepForm,
            aboutText: "This project required me to build fully responsive multi-step form to design prodided from Frontend Mentor challenge. I used Bootsrap and React frameworks with HTML5/CSS to create website where users are able to complete each steps of sequence, see summary of each step, confirm their choice, etc.",
            tags: "HTML/CSS/JS Bootstrap/React"
        }
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