import aboutImage from '../christopher-gower-m_HRfLhgABo-unsplash.jpg'
function AboutPage() {
    return <section className='position-relative'>
        <div><img src={aboutImage} alt="laptop on the desk" className='w-100' /></div>
        <div className='position-absolute top-0 start-0 w-25 bg-light p-5'>
            <h1>Hi, I'm Anna Sirotkina and I love building beautiful websites</h1>
        </div>
    </section>
}
export default AboutPage;