function CarouselInner({ src, title, children, link }) {
    return <>
        <img src={src} alt="" />
        <h3>{title}</h3>
        {children}
        <a className="btn btn-outline-dark" href={link}>Visit Website</a>
    </>
}
export default CarouselInner;