import aboutImage from '../christopher-gower-m_HRfLhgABo-unsplash.jpg'
import aboutSecondImage from '../andras-vas-Bd7gNnWJBkU-unsplash.jpg'
function AboutPage() {
    return <section className='position-relative'>
        <div><img src={aboutImage} alt="laptop on the desk" className='w-100' /></div>
        <div className='header-my bg-light p-5'>
            <h1>Hi, I'm Anna Sirotkina and I love building beautiful websites</h1>
            <a href="#about" className='btn btn-dark mt-4'>About me</a>
        </div>
        <div className='row py-md-5 px-0 m-0'>
            <div className='col-md-4 p-0 m-0'>
                <img src={aboutSecondImage} alt="laptop in the dark" className='w-100 p-0 m-0' />
            </div>
            <div className='col-md-8 about-me m-0 bg-light p-5' id="about">
                <article className=' m-auto'> <h2 className='py-0 py-md-4 '>About me</h2>
                    <p className=''>I am junior front-end developer looking for a new role in an exciting company. I focus on writing accessible HTML, using modern CSS practices and writing JavaScript. I mostly use React, Bootstrap or Tailwind CSS, but I can adapt to whatever tools are required. I'm based in Cambridge, CA but I'm happy working remotely. When I'm not coding, I like to spend time with my family outdoors. I'd love you to check out my work.</p>
                    <a href='/portfolio' className='mt-3 btn btn-outline-dark'>Go To Portfolio</a></article>
            </div>
        </div>
    </section>
}
export default AboutPage;