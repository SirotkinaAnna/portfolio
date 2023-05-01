import CarouselInner from "../CarouselInner";

function PortfolioPage() {
    return <>
        <div id="carousel" class="carousel slide" data-bs-ride="carousel">
            <div class="carousel-inner">
                <div class="carousel-item active">
                    <CarouselInner title="first" />
                </div>
                <div class="carousel-item">
                    <CarouselInner title="2" />
                </div>
                <div class="carousel-item">
                    <CarouselInner title="3" />
                </div>
            </div>
            <button class="text-primary" type="button" data-bs-target="#carousel" data-bs-slide="prev">
                Previous
            </button>
            <button class=" text-primary" type="button" data-bs-target="#carousel" data-bs-slide="next">
                Next
            </button>
        </div>
    </>
}
export default PortfolioPage;