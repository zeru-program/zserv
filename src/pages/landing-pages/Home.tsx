import { useEffect } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';
import './styles/home.css'
import Navbar from "../../components/Navbar"
import Footer from "../../components/Footer"

const WelcomingSection = () => { 
   useEffect(() => {
  const text = document.getElementById('span-cta-serv');
  let currentText = 0;

  const changeText = () => {
    text.classList.remove('fade-in');
    // Force reflow to restart the animation
    void text.offsetWidth;
    if (currentText === 0) {
      text.textContent = "website";
    } else if (currentText === 1) {
      text.textContent = "application";
    } else if (currentText === 2) {
      text.textContent = "design";
    }

    text.classList.add('fade-in');
    currentText = (currentText + 1) % 3; // Cycle back to 0 after 3
  };

  changeText(); // Initial text
  const interval = setInterval(changeText, 2000); // Change text every 1.5 seconds

  return () => clearInterval(interval); // Cleanup interval on component unmount
}, []);


    return (
       <section className="w-100 d-flex justify-content-center align-items-center mt-5 text-primary welcome-section container py-5">
       <div className="text-welcome">
        <h1 className="m-0 container-text" data-aos="fade-down">Jasa pembuatan <span style={{color:"#FFD369"}} id="span-cta-serv" className=""></span>
        </h1>
        <p data-aos="fade-down">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis esse quam, exercitationem ut assumenda, debitis velit accusamus eveniet sit tempora. Reiciendis esse quam, exercitationem ut assumenda, debitis velit accusamus eveniet sit tempora.</p>
        <button data-aos="fadeIn" className="btn btn-warning rounded-5 px-4 py-2">Mulai</button>
        </div>
         <img alt="img-welcome" data-aos="fadeIn" className="img-welcome" src="welcome-ilustator.png" />
       </section>
   )
}

const TechUsed = () => {
   return (
     <section className="container text-primary mt-3">
       <h4 data-aos="fade-in">Teknologi yang kami gunakan </h4>
       <div className="d-flex flex-wrap gap-3 mt-2" data-aos="zoom-in">
        <div className="box-tech p-2 text-warning px-4 btn btn-info"><ion-icon name="logo-javascript"></ion-icon> JavaScript</div>
        <div className="box-tech p-2 text-warning px-4 btn btn-info"><img alt="img-php" src="https://www.php.net/images/logos/new-php-logo.svg" style={{width:"30px"}} /> Php</div>
        <div className="box-tech p-2 text-warning px-4 btn btn-info"><img alt="img-java" src="https://www.svgrepo.com/show/303388/java-4-logo.svg" style={{width:"30px"}} /> Java</div>
        <div className="box-tech p-2 text-warning px-4 btn btn-info"><ion-icon name="logo-react"></ion-icon> Reactjs</div>
        <div className="box-tech p-2 text-warning px-4 btn btn-info"><img alt="img-svelte" src="https://icon.icepanel.io/Technology/svg/Svelte.svg" style={{width:"20px"}} /> Svelte</div>
        <div className="box-tech p-2 text-warning px-4 btn btn-info"><ion-icon name="logo-laravel"></ion-icon> Laravel</div>
        <div className="box-tech p-2 text-warning px-4 btn btn-info"><ion-icon name="logo-firebase"></ion-icon> Firebase</div>
        <div className="box-tech p-2 text-warning px-4 btn btn-info"><img alt="img-mysql" src="https://icon.icepanel.io/Technology/svg/MySQL.svg" style={{width:"20px"}} /> Mysql</div>
       </div>
     </section>
   )
}

const ServiceCta = () => {
    return (
      <section className="w-100 d-flex flex-column text-primary mt-3 py-5 d-flex container">
        <h4 data-aos="fade-in">Our service</h4>
        <div className="d-flex jutify-content-center gap-2 flex-wrap">
          <a className="btn text-primary btn-info p-3" href="/pricing" data-aos="zoom-in">
            <h5>Pembuatan website</h5>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Praesentium, quisquam.</p>
          </a>
          <a className="btn text-primary btn-info p-3" href="/pricing" data-aos="zoom-in">
            <h5>Pembuatan aplikasi</h5>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Praesentium, quisquam.</p>
          </a>
          <a className="btn text-primary btn-info p-3" href="/pricing" data-aos="zoom-in">
            <h5>Design grapichs</h5>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Praesentium, quisquam.</p>
          </a>
        </div>
        <a href="/pricing" data-aos="zoom-in" className="btn btn-warning mt-2 text-secondary" style={{width:"200px"}}>Take our service</a>
      </section>
    )
}

const AboutUs = () => {
    return (
        <section className="w-100 mt-2 container" data-aos="fade-in">
          <div className="btn d-flex flex-column text-left align-items-start btn-info py-3 w-100">
           <h4>Tentang kami</h4>
           <p className="text-left text-comment-review">I am Justine, who started a career in digital art creation services. I am the Justine behind the name Zeru. I currently provide three services, namely website builder, application builder and graphic design. I started this service in 2023 when I was in junior high school. Currently I have served several clients with satisfactory results.</p>
          </div>
        </section>
    )
}

const ReviewService = () => {
    return (
      <section className="w-100 text-primary container mt-3 py-5" data-aos="fade-in">
        <h4>What they said about our service</h4>
        <div className="d-flex gap-2">
          <select className="form-control" style={{width:"100px"}}>
          <option value="">Pilih</option>
          </select>
          <input type="text" className="form-control" />
          <select className="form-control" style={{width:"50px"}}>
          <option value="">⭐</option>
          </select>
          <button className="btn btn-warning">Review</button>
        </div>
        <div className="mt-3 d-flex flex-wrap gap-2">
         <div className="box-review btn btn-info p-2 d-flex flex-column align-items-start text-left">
         <h5 className="m-0">User</h5>
         <p className="m-0" style={{color:"#808080"}}>pelayanan - ⭐⭐⭐</p>
         <p className="text-left text-comment-review">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nemo quisquam nihil animi quibusdam, accusamus quae sed reiciendis! Nulla, ducimus, reiciendis.</p>
         </div>
         <div className="box-review btn btn-info p-2 d-flex flex-column align-items-start text-left">
         <h5 className="m-0">User</h5>
         <p className="m-0" style={{color:"#808080"}}>pelayanan - ⭐⭐⭐</p>
         <p className="text-left text-comment-review">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nemo quisquam nihil animi quibusdam, accusamus quae sed reiciendis! Nulla, ducimus, reiciendis.</p>
         </div>
         </div>
      </section>
    )
}


const Home = () => {
  useEffect(() => {
     AOS.init({
          duration: 1500,
          once: false,
        })
  }, [])
  return (
    <>
    <Navbar/>
    <main className="w-100 m-0 p-0">
     <WelcomingSection/>
     <TechUsed/>
     <ServiceCta/>
     <AboutUs/>
     <ReviewService/>
    </main>
    <Footer/>
    </>
  )
}

export default Home