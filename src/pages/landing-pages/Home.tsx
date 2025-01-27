import { useEffect, useState } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';
import './styles/home.css'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import Navbar from "../../components/Navbar"
import Footer from "../../components/Footer"
import {Helmet} from "react-helmet"
const db = "https://zservz-default-rtdb.firebaseio.com/"

const Helmets = () => {
  return (
    <Helmet>
    <title>Zserv | Home</title>
     <meta name="title" content="Zeru service | home" />
       <meta
         name="description"
         content="Menjual jasa pembuatan website, aplikasi, maupun desain. proses cepat dan efisien serta harga terjangkau."
        />
       <meta
          name="keywords"
          content="zserv, zservice, zservz, zserv home, jasa pembuatan website, jasa pembuatan aplikasi, jasa pembuatan design, jasa hosting, jasa register domain, joki tugas website, jasa murah, web development, Zserv, Zeru service"
       />
    </Helmet>
    )
}

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
      text.textContent = "aplikasi";
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
       <section className="w-100 d-flex justify-content-center align-items-center text-primary welcome-section container py-5">
       <div className="text-welcome mt-4">
        <h1 className="m-0 container-text" data-aos="fade-down">Jasa pembuatan <span style={{color:"#FFD369"}} id="span-cta-serv" className=""></span>
        </h1>
        <p data-aos="fade-down">Butuh website aplikasi atau design? Ayo coba layanan digital terbaik dari kami! Kami menjamin proses yang cepat dan efisien, dengan harga yang sangat terjangkau. Menggunakan teknologi terbaru, kami memastikan setiap proyek menghasilkan performa terbaik dan kepuasan maksimal. Percayakan kebutuhan digital Anda kepada kami dan nikmati hasil terbaik kami!</p>
        <a data-aos="fadeIn" className="btn btn-warning btn-start-wel rounded-5 py-2" href="#jasa">Mulai</a>
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
        <div className="box-tech m-0 p-2 text-warning px-4 align-items-center d-flex btn btn-info"><ion-icon name="logo-react"></ion-icon> Reactjs</div>
        <div className="box-tech m-0 p-2 text-warning px-4 align-items-center d-flex btn btn-info"><ion-icon name="logo-vue"></ion-icon> Vuejs</div>
        <div className="box-tech p-2 text-warning px-4 btn btn-info"><img alt="img-svelte" src="https://icon.icepanel.io/Technology/svg/Svelte.svg" style={{width:"20px"}} /> Svelte</div>
        <div className="box-tech p-2 text-warning px-4 btn btn-info"><ion-icon name="logo-laravel"></ion-icon> Laravel</div>
        <div className="box-tech p-2 text-warning px-4 btn btn-info"><ion-icon name="logo-firebase"></ion-icon> Firebase</div>
        <div className="box-tech p-2 text-warning px-4 btn btn-info"><img alt="img-mysql" src="https://icon.icepanel.io/Technology/svg/MySQL.svg" style={{width:"20px"}} /> Mysql</div>
       </div>
     </section>
   )
}

const ServiceCta = () => {
  useEffect(() => {
     AOS.init({
          duration: 1500,
          once: false,
        })
  }, [])
    return (
      <section id="jasa" className="w-100 d-flex flex-column text-primary mt-5 py-5 d-flex">
        <div className="container w-100">
       <h4 className="m-0 text-center" data-aos="fadeIn"><span className="text-warning">-</span> Rekomendasi jasa <span className="text-warning">-</span></h4>
        </div>
      <section className="text-primary w-100 mt-1 pt-1">
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        loop={true}
        navigation={true}
        modules={[Pagination, Navigation]}
        pagination={{ clickable: true }}
        className="mySwiper mt-3"
        data-aos="zoom-in"
      >
       <SwiperSlide className="d-flex w-100 justify-content-center">
         <div className="d-flex position-relative flex-column border-2 border-warning box-pricing btn btn-info">
         <div className="d-flex py-2 text-center justify-content-center text-info w-100 bg-warning position-absolute top-0" style={{left:"0"}}>
           <h4 className="m-0 text-center">Produk terlaris!</h4>
         </div>
         <img src="/images/web.svg" style={{width:"80px",height:"80px"}} className="w-100 d-flex justify-content-center mt-5" alt="" />
         <h4 className="m-0 fw-bold">Paket basic</h4>
         <p className="m-0" style={{color:"gray"}}>- Jasa pembuatan website -</p>
         <p className="m-0">Cocok untuk website personal sederhana atau custom website (bisa untuk joki tugas dsb)</p>
         <s className="m-0 mt-5" style={{color:"gray"}}>Rp75.000</s>
         <h1 className="fw-bold m-0 text-warning">Rp50.000</h1>
         <a className="mx-2 text-dark shadow-sm btn btn-warning mt-2" href="https://wa.me/6287774487198?text=Hai admin, saya ingin menggunakan jasa Pembuatan website dengan paket Basic seharga Rp.50.000 rupiah. apakah bisa diproses segera?">Gunakan jasa ini</a>
         <hr className="my-4" />
         <div className="d-flex gap-2 mb-2 align-items-center">
           <i className="bi bi-check2-circle text-warning"></i>
           <p className="m-0">1 website.</p>
         </div>
         <div className="d-flex gap-2 mb-2 align-items-center">
           <i className="bi bi-check2-circle text-warning"></i>
           <p className="m-0">maximal 4 pages.</p>
         </div>
         <div className="d-flex gap-2 mb-2 align-items-center">
           <i className="bi bi-check2-circle text-warning"></i>
           <p className="m-0">gratis hosting.</p>
         </div>
         <div className="d-flex gap-2 mb-2 align-items-center">
           <i className="bi bi-check2-circle text-warning"></i>
           <p className="m-0">gratis domain (.web.app).</p>
         </div>
         <div className="d-flex gap-2 mb-2 align-items-center">
           <i className="bi bi-check2-circle text-warning"></i>
           <p className="m-0">gratis SSL.</p>
         </div>
         <div className="d-flex gap-2 mb-2 align-items-center">
           <i className="bi bi-check2-circle text-warning"></i>
           <p className="m-0">responsif design.</p>
         </div>
         <div className="d-flex gap-2 mb-2 align-items-center">
           <i className="bi bi-check2-circle text-warning"></i>
           <p className="m-0">static pages.</p>
         </div>
         <div className="d-flex gap-2 mb-2 align-items-center">
           <i className="bi bi-x-circle text-danger"></i>
           <p className="m-0">maintence.</p>
         </div>
         <div className="d-flex gap-2 mb-2 align-items-center">
           <i className="bi bi-x-circle text-danger"></i>
           <p className="m-0">fitur e-commerce.</p>
         </div>
         <div className="d-flex gap-2 mb-2 align-items-center">
           <i className="bi bi-x-circle text-danger"></i>
           <p className="m-0">integrisasi social media.</p>
         </div>
         <div className="d-flex gap-2 mb-2 align-items-center">
           <i className="bi bi-x-circle text-danger"></i>
           <p className="m-0">database.</p>
         </div>
         <div className="d-flex gap-2 mb-2 align-items-center">
           <i className="bi bi-x-circle text-danger"></i>
           <p className="m-0">framework.</p>
         </div>
         <div className="d-flex gap-2 mb-2 align-items-center">
           <i className="bi bi-x-circle text-danger"></i>
           <p className="m-0">indexing google.</p>
         </div>
         <p className="m-0" style={{color:"gray"}}>proses 1-2 hari</p>
         </div>
       </SwiperSlide>
       <SwiperSlide className="d-flex w-100 justify-content-center">
         <div className="d-flex position-relative flex-column border-2 border-warning box-pricing btn btn-info">
         <div className="d-flex py-2 text-center justify-content-center text-info w-100 bg-warning position-absolute top-0" style={{left:"0"}}>
           <h4 className="m-0 text-center">Best product!</h4>
         </div>
         <img src="/images/app.svg" style={{width:"80px",height:"80px"}} className="w-100 d-flex justify-content-center mt-5" alt="" />
         <h4 className="m-0 fw-bold">Paket standard</h4>
         <p className="m-0">Cocok untuk website aplikasi e-commerce sederhana</p>
         <h1 className="fw-bold m-0 mt-5 text-warning">Rp150.900</h1>
         <a className="mx-2 text-dark shadow-sm btn btn-warning mt-2" href="https://wa.me/6287774487198?text=Hai admin, saya ingin menggunakan jasa Pembuatan aplikasi dengan paket standard seharga Rp.150.900 rupiah. apakah bisa diproses segera?">Gunakan paket ini</a>
         <hr className="my-4" />
         <div className="d-flex gap-2 mb-2 align-items-center">
           <i className="bi bi-check2-circle text-warning"></i>
           <p className="m-0">1 application.</p>
         </div>
         <div className="d-flex gap-2 mb-2 align-items-center">
           <i className="bi bi-check2-circle text-warning"></i>
           <p className="m-0">maximal 6 pages (include login/register).</p>
         </div>
         <div className="d-flex gap-2 mb-2 align-items-center">
           <i className="bi bi-check2-circle text-warning"></i>
           <p className="m-0">static pages.</p>
         </div>
         <div className="d-flex gap-2 mb-2 align-items-center">
           <i className="bi bi-check2-circle text-warning"></i>
           <p className="m-0">custom design.</p>
         </div>
         <div className="d-flex gap-2 mb-2 align-items-center">
           <i className="bi bi-check2-circle text-warning"></i>
           <p className="m-0">gratis 1 minggu maintenance.</p>
         </div>
         <div className="d-flex gap-2 mb-2 align-items-center">
           <i className="bi bi-check2-circle text-warning"></i>
           <p className="m-0">gratis tutorial how to use the app.</p>
         </div>
         <div className="d-flex gap-2 mb-2 align-items-center">
           <i className="bi bi-x-circle text-danger"></i>
           <p className="m-0">no database.</p>
         </div>
         <div className="d-flex gap-2 mb-2 align-items-center">
           <i className="bi bi-x-circle text-danger"></i>
           <p className="m-0">platform ios.</p>
         </div>
         <div className="d-flex gap-2 mb-2 align-items-center">
           <i className="bi bi-x-circle text-danger"></i>
           <p className="m-0">responsif design.</p>
         </div>
         <div className="d-flex gap-2 mb-2 align-items-center">
           <i className="bi bi-x-circle text-danger"></i>
           <p className="m-0">no publish app.</p>
         </div>
         <p className="m-0" style={{color:"gray"}}>proses 3 minggu</p>
         </div>
       </SwiperSlide>
       <SwiperSlide className="d-flex w-100 justify-content-center">
         <div className="d-flex position-relative flex-column border-2 border-warning box-pricing btn btn-info">
         <div className="d-flex py-2 text-center justify-content-center text-info w-100 bg-warning position-absolute top-0" style={{left:"0"}}>
           <h4 className="m-0 text-center">Best product!</h4>
         </div>
         <img src="/images/design.svg" style={{width:"80px",height:"80px"}} className="w-100 d-flex justify-content-center mt-5" alt="" />
         <h4 className="m-0 fw-bold">Product design</h4>
         <p className="m-0">Cocok untuk design produk bisnis mu, seperti barang, makanan, dll.</p>
         <s className="m-0 mt-5" style={{color:"gray"}}>Rp99.000</s>
         <h1 className="fw-bold m-0 text-warning">Rp70.400</h1>
         <a className="mx-2 text-dark shadow-sm btn btn-warning mt-2" href="https://wa.me/6287774487198?text=Hai admin, saya ingin menggunakan jasa Produk design di jasa pembuatan design zserv, seharga Rp.70.400 rupiah. apakah bisa diproses segera?">Gunakan jasa ini</a>
         <hr className="my-4" />
         <div className="d-flex gap-2 mb-2 align-items-center">
           <i className="bi bi-check2-circle text-warning"></i>
           <p className="m-0">2 design.</p>
         </div>
         <div className="d-flex gap-2 mb-2 align-items-center">
           <i className="bi bi-check2-circle text-warning"></i>
           <p className="m-0">custom design.</p>
         </div>
         <div className="d-flex gap-2 mb-2 align-items-center">
           <i className="bi bi-check2-circle text-warning"></i>
           <p className="m-0">gratis 10x revisi.</p>
         </div>
         <div className="d-flex gap-2 mb-2 align-items-center">
           <i className="bi bi-check2-circle text-warning"></i>
           <p className="m-0">file format png/jpg.</p>
         </div>
         <div className="d-flex gap-2 mb-2 align-items-center">
           <i className="bi bi-check2-circle text-warning"></i>
           <p className="m-0">hd quality.</p>
         </div>
         <div className="d-flex gap-2 mb-2 align-items-center">
           <i className="bi bi-check2-circle text-warning"></i>
           <p className="m-0">desain unik & profesional.</p>
         </div>
         <div className="d-flex gap-2 mb-2 align-items-center">
           <i className="bi bi-check2-circle text-warning"></i>
           <p className="m-0">proses 2 hari.</p>
         </div>
         <div className="d-flex gap-2 mb-2 align-items-center">
           <i className="bi bi-x-circle text-danger"></i>
           <p className="m-0">source file.</p>
         </div>
         </div>
       </SwiperSlide>
      </Swiper>
     </section>
      <div className="container mt-5">
      <h4 className="mt-4" href="/">Lihat jasa lainnya <i className="bi bi-arrow-down text-warning"></i></h4>
      </div>
        <div className="d-flex container mt-3 jutify-content-center jasa-lainnya gap-3 flex-wrap">
          <a className="btn text-warning border-2 border-warning btn-info p-3" href="/dev/jasa-pembuatan-website" data-aos="zoom-in">
            <h5 className="m-0">Pembuatan website</h5>
          </a>
          <a className="btn text-warning border-2 border-warning btn-info p-3" href="/dev/jasa-hosting" data-aos="zoom-in">
            <h5 className="m-0">Hosting website</h5>
          </a>
          <a className="btn text-warning border-2 border-warning btn-info p-3" href="/dev/jasa-domain" data-aos="zoom-in">
            <h5 className="m-0">Register domain</h5>
          </a>
          <a className="btn text-warning border-2 border-warning btn-info p-3" href="/dev/jasa-pembuatan-aplikasi" data-aos="zoom-in">
            <h5 className="m-0">Pembuatan aplikasi</h5>
          </a>
          <a className="btn text-warning border-2 border-warning btn-info p-3" href="/design/jasa-design" data-aos="zoom-in">
            <h5 className="m-0">Produk desainer</h5>
          </a>
          <a className="btn text-warning border-2 border-warning btn-info p-3" href="/design/jasa-design" data-aos="zoom-in">
            <h5 className="m-0">Web desainer</h5>
          </a>
          <a className="btn text-warning border-2 border-warning btn-info p-3" href="/design/jasa-design" data-aos="zoom-in">
            <h5 className="m-0">Logo desainer</h5>
          </a>
        </div>
      </section>
    )
}

const WhyChooseUs = () => {
  useEffect(() => {
     AOS.init({
          duration: 1500,
          once: false,
        })
  }, [])
  return (
    <section className="w-100 text-primary container mt-5 mb-5" data-aos="fadeIn">
     <h4 className="m-0">Kenapa memilih Zserv?</h4>
     <div className="d-flex mt-3 gap-4 w-100 flex-wrap justify-content-center">
       <div class="btn px-4 d-flex flex-column justify-content-center align-items-center btn-info box-why-choose-us">
         <img src="/images/time-fast.svg" alt="" />
         <h5>Proses cepat dan efisien</h5>
         <p>Kami memahami bahwa waktu adalah hal yang berharga bagi Anda. Dengan pendekatan kerja yang terstruktur dan tim yang berpengalaman, kami menjamin proses pengembangan yang cepat dan efisien tanpa mengorbankan kualitas.</p>
       </div>
       <div class="btn px-4 d-flex flex-column justify-content-center align-items-center btn-info box-why-choose-us">
         <img src="/images/harga.svg" alt="" />
         <h5>Harga terjangkau</h5>
         <p>Kami menawarkan layanan berkualitas tinggi dengan harga yang bersahabat. Dengan berbagai paket yang dapat disesuaikan dengan anggaran Anda, kami memastikan setiap investasi Anda memberikan nilai maksimal.</p>
       </div>
       <div class="btn px-4 d-flex flex-column justify-content-center align-items-center btn-info box-why-choose-us">
         <img src="/images/teknologi.svg" alt="" />
         <h5>Teknologi terkini dan terpercaya</h5>
         <p>Kami selalu mengikuti perkembangan teknologi terbaru untuk memberikan solusi yang modern dan relevan. Menggunakan alat dan platform terkini, kami memastikan setiap proyek berjalan dengan aman, stabil, dan optimal.</p>
       </div>
     </div>
    </section>
    )
}

const ReviewService = () => {
  const [data, setData] = useState([])
  useEffect(() => {
    fetch(db + "review.json")
    .then(res => res.json())
    .then(data => {
      const reviews = Object.values(data);
        setData(reviews);
    })
  }, [])
  
  const [dataForms, setDataForms] = useState({
    nama: "",
    jasa: "",
    message: "",
    rating: ""
  })
  function handleChange(evt) {
  const value = evt.target.value;
  setDataForms({
    ...dataForms,
    [evt.target.name]: value
  });
}
  const handleReview = () => {
    const sedata = {
      nama: dataForms.nama,
      jasa: dataForms.jasa,
      message: dataForms.message,
      rating: dataForms.rating,
      created_at: new Date()
    }
    fetch(db + "review.json", {
      method: "post",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(sedata)
    })
    .then(res => {
      if (res.ok) {
        alert('berhasil menambahkan review, terimakasih')
        location.reload()
      } else {
        alert('ups something error..')
      }
    })
  }
  const getStars = (rating) => {
    return '⭐'.repeat(rating);
  }

  
    return (
      <section className="w-100 text-primary container mt-3 py-5" data-aos="fade-in" id="review">
        <h4>Review service kami</h4>
        <div className="d-flex gap-2">
          <input type="text" placeholder="nama mu.." name="nama" onChange={handleChange} className="form-control text-light ipt-review" />
          <select className="form-control" style={{width:"200px"}} value={dataForms.jasa} name="jasa" onChange={handleChange}>
          <option value="" hidden>Pilih jasa..</option>
          <option value="Pembuatan website">Pembuatan website</option>
          <option value="Pembuatan aplikasi">Pembuatan aplikasi</option>
          <option value="Web hosting">Web hosting</option>
          <option value="Register domain">Register domain</option>
          <option value="Produk desain">Produk desain</option>
          <option value="Logo desain">Logo desain</option>
          <option value="Web desain">Web desain</option>
          </select>
          </div>
          <div className="d-flex gap-2 mt-2">
          <input type="text" placeholder="pesan review.." name="message" onChange={handleChange} className="form-control text-light ipt-review" />
          <select className="form-control" style={{width:"50px"}} name="rating" onChange={handleChange}>
          <option value="1">⭐</option>
          <option value="2">⭐⭐</option>
          <option value="3">⭐⭐⭐</option>
          <option value="4">⭐⭐⭐⭐</option>
          <option value="5">⭐⭐⭐⭐⭐</option>
          </select>
          <button className="btn btn-warning" onClick={handleReview}>Review</button>
        </div>
        <div className="mt-3 d-flex flex-wrap gap-2">
        {
          data.map((dat, index) => (
         <div className="box-review btn btn-info border-1 border-warning p-3 d-flex flex-column align-items-start text-left" key={index}>
         <h5 className="m-0">{dat.nama}</h5>
         <p className="m-0" style={{color:"#808080"}}>{dat.jasa} - {getStars(dat.rating)}</p>
         <p className="text-left m-0 text-comment-review">{dat.message}</p>
         </div>
          ))
        }
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
    <Helmets/>
    <Navbar/>
    <main className="w-100 m-0 p-0">
     <WelcomingSection/>
     <TechUsed/>
     <ServiceCta/>
     <WhyChooseUs/>
     <ReviewService/>
    </main>
    <Footer/>
    </>
  )
}

export default Home