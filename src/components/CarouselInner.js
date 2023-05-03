import { nanoid } from "nanoid"

function CarouselInner({ item }) {

    const { title, images, aboutText, tags, link } = item[0];
    console.log('test ', item)


    const renderedImages = images.map((item, index) => {
        const myClass = () => {
            if (index === 0) {
                const myClass = "carousel-item active mb-5"
                return myClass
            }
            else {
                const myClass = "carousel-item mb-5";
                return myClass
            }
        }
        return <div className={myClass()} key={nanoid()}>

            <img className="w-100" src={item} alt="" />
        </div>
    })
    console.log(renderedImages)



    return <div className="row my-row py-5">
        <div className="col-md-6 border-end my-5">
            <h3 className="py-3 text-center w-75 m-auto">{title}</h3>
            <div className="w-75 mx-auto">
                <p>{aboutText}</p>
                <p className="tags">{tags}</p>
                <a className="btn btn-outline-dark my-5" href={link} target="_blank" rel="noreferrer" >Visit Website</a></div></div>
        <div className="col-md-6 text-center"><h4 className="pb-3">Project Preview</h4>
            <div id="carouselInner" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-inner">
                    {renderedImages}
                </div>
            </div>
        </div>
    </div>
}
export default CarouselInner;