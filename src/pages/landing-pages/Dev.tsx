import { useEffect } from "react"
import { useLocation } from "react-router-dom"
import AOS from 'aos';
import 'aos/dist/aos.css';
import './styles/Pricing.css'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import Navbar from "../../components/Navbar"
import Footer from "../../components/Footer"
import E404 from "../../components/E404"


const JasaWebsite = () => {
  useEffect(() => {
     AOS.init({
          duration: 1500,
          once: false,
        })
  }, [])
  return (
    <>
    <Navbar/>
    <main className="w-100 m-0 my-3">
     <section className="text-primary w-100 mt-5 pt-5">
       <h4 className="container m-0" data-aos="fadeIn"><span className="text-warning">-</span> Jasa pembuatan website <span className="text-warning">-</span></h4>
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
           <h4 className="m-0 text-center">Best product!</h4>
         </div>
         <img src="/images/web.svg" style={{width:"80px",height:"80px"}} className="w-100 d-flex justify-content-center mt-5" alt="" />
         <h4 className="m-0 fw-bold">starter package</h4>
         <p className="m-0">Suitable for simple websites personal or custom website with html,css,js or php</p>
         <s className="m-0 mt-5" style={{color:"gray"}}>Rp75.000</s>
         <h1 className="fw-bold m-0 text-warning">Rp40.400</h1>
         <button className="mx-2 shadow-sm btn btn-warning mt-2">Buy</button>
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
           <p className="m-0">free hosting.</p>
         </div>
         <div className="d-flex gap-2 mb-2 align-items-center">
           <i className="bi bi-check2-circle text-warning"></i>
           <p className="m-0">free domain (.web.app).</p>
         </div>
         <div className="d-flex gap-2 mb-2 align-items-center">
           <i className="bi bi-check2-circle text-warning"></i>
           <p className="m-0">free SSL.</p>
         </div>
         <div className="d-flex gap-2 mb-2 align-items-center">
           <i className="bi bi-check2-circle text-warning"></i>
           <p className="m-0">static pages.</p>
         </div>
         <div className="d-flex gap-2 mb-2 align-items-center">
           <i className="bi bi-check2-circle text-warning"></i>
           <p className="m-0">free 1 week maintence.</p>
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
         <p className="m-0" style={{color:"gray"}}>1 week processing time</p>
         </div>
       </SwiperSlide>
       <SwiperSlide className="d-flex w-100 justify-content-center">
         <div className="d-flex position-relative flex-column border-2 border-warning box-pricing btn btn-info">
         <img src="/images/web.svg" style={{width:"80px",height:"80px"}} className="w-100 d-flex justify-content-center mt-5" alt="" />
         <h4 className="m-0 fw-bold">Cloud startup package</h4>
         <p className="m-0">Suitable for UMKM websites or start-up businesses in Indonesia</p>
         <s className="m-0 mt-5" style={{color:"gray"}}>Rp256.000</s>
         <h1 className="fw-bold m-0 text-warning">Rp226.400</h1>
         <button className="mx-2 shadow-sm btn btn-warning mt-2">Buy</button>
         <p className="m-0 mt-1" style={{color:"gray"}}>Rp30.400/next years</p>
         <hr className="my-4" />
         <div className="d-flex gap-2 mb-2 align-items-center">
           <i className="bi bi-check2-circle text-warning"></i>
           <p className="m-0">1 website.</p>
         </div>
         <div className="d-flex gap-2 mb-2 align-items-center">
           <i className="bi bi-check2-circle text-warning"></i>
           <p className="m-0">maximal 8 pages.</p>
         </div>
         <div className="d-flex gap-2 mb-2 align-items-center">
           <i className="bi bi-check2-circle text-warning"></i>
           <p className="m-0">free hosting.</p>
         </div>
         <div className="d-flex gap-2 mb-2 align-items-center">
           <i className="bi bi-check2-circle text-warning"></i>
           <p className="m-0">free domain (.my.id/.web.app/..).</p>
         </div>
         <div className="d-flex gap-2 mb-2 align-items-center">
           <i className="bi bi-check2-circle text-warning"></i>
           <p className="m-0">free SSL.</p>
         </div>
         <div className="d-flex gap-2 mb-2 align-items-center">
           <i className="bi bi-check2-circle text-warning"></i>
           <p className="m-0">static/interactive pages.</p>
         </div>
         <div className="d-flex gap-2 mb-2 align-items-center">
           <i className="bi bi-check2-circle text-warning"></i>
           <p className="m-0">database.</p>
         </div>
         <div className="d-flex gap-2 mb-2 align-items-center">
           <i className="bi bi-check2-circle text-warning"></i>
           <p className="m-0">framework (react js/..).</p>
         </div>
         <div className="d-flex gap-2 mb-2 align-items-center">
           <i className="bi bi-check2-circle text-warning"></i>
           <p className="m-0">indexing google.</p>
         </div>
         <div className="d-flex gap-2 mb-2 align-items-center">
           <i className="bi bi-x-circle text-danger"></i>
           <p className="m-0">no maintence.</p>
         </div>
         <p className="m-0" style={{color:"gray"}}>2-3 week processing time</p>
         </div>
       </SwiperSlide>
       <SwiperSlide className="d-flex w-100 justify-content-center">
         <div className="d-flex position-relative flex-column border-2 border-warning box-pricing btn btn-info">
         <img src="/images/web.svg" style={{width:"80px",height:"80px"}} className="w-100 d-flex justify-content-center mt-5" alt="" />
         <h4 className="m-0 fw-bold">Business package</h4>
         <p className="m-0">Suitable for company websites or for managing business work environments </p>
         <s className="m-0 mt-5" style={{color:"gray"}}>Rp650.000</s>
         <h1 className="fw-bold m-0 text-warning">Rp452.400</h1>
         <button className="mx-2 shadow-sm btn btn-warning mt-2">Buy</button>
         <p className="m-0 mt-1" style={{color:"gray"}}>Rp201.000/next years</p>
         <hr className="my-4" />
         <div className="d-flex gap-2 mb-2 align-items-center">
           <i className="bi bi-check2-circle text-warning"></i>
           <p className="m-0">1-3 website.</p>
         </div>
         <div className="d-flex gap-2 mb-2 align-items-center">
           <i className="bi bi-check2-circle text-warning"></i>
           <p className="m-0">unlimited pages.</p>
         </div>
         <div className="d-flex gap-2 mb-2 align-items-center">
           <i className="bi bi-check2-circle text-warning"></i>
           <p className="m-0">free hosting.</p>
         </div>
         <div className="d-flex gap-2 mb-2 align-items-center">
           <i className="bi bi-check2-circle text-warning"></i>
           <p className="m-0">free domain (.com/.org/..).</p>
         </div>
         <div className="d-flex gap-2 mb-2 align-items-center">
           <i className="bi bi-check2-circle text-warning"></i>
           <p className="m-0">free SSL.</p>
         </div>
         <div className="d-flex gap-2 mb-2 align-items-center">
           <i className="bi bi-check2-circle text-warning"></i>
           <p className="m-0">static/interactive pages.</p>
         </div>
         <div className="d-flex gap-2 mb-2 align-items-center">
           <i className="bi bi-check2-circle text-warning"></i>
           <p className="m-0">free 1 month / years maintence.</p>
         </div>
         <div className="d-flex gap-2 mb-2 align-items-center">
           <i className="bi bi-check2-circle text-warning"></i>
           <p className="m-0">database.</p>
         </div>
         <div className="d-flex gap-2 mb-2 align-items-center">
           <i className="bi bi-check2-circle text-warning"></i>
           <p className="m-0">framework (mern/laravel/..).</p>
         </div>
         <div className="d-flex gap-2 mb-2 align-items-center">
           <i className="bi bi-check2-circle text-warning"></i>
           <p className="m-0">indexing google + SEO op.</p>
         </div>
         <p className="m-0" style={{color:"gray"}}>1 month processing time</p>
         </div>
       </SwiperSlide>
      </Swiper>
     </section>
    </main>
    <Footer/>
    </>
    )
}
const JasaApps = () => {
  useEffect(() => {
     AOS.init({
          duration: 1500,
          once: false,
        })
  }, [])
  return (
    <>
    <Navbar/>
    <main className="w-100 m-0 my-3">
     <section className="text-primary w-100 mt-5 pt-5">
       <h4 className="container m-0" data-aos="fadeIn"><span className="text-warning">-</span> Jasa pembuatan aplikasi <span className="text-warning">-</span></h4>
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        loop={true}
        navigation={true}
        modules={[Pagination, Navigation]}
        pagination={{ clickable: true }}
        className="mySwiper mt-2"
         data-aos="zoom-in"
      >
       <SwiperSlide className="d-flex w-100 justify-content-center">
         <div className="d-flex position-relative flex-column border-2 border-warning box-pricing btn btn-info">
         <div className="d-flex py-2 text-center justify-content-center text-info w-100 bg-warning position-absolute top-0" style={{left:"0"}}>
           <h4 className="m-0 text-center">Best product!</h4>
         </div>
         <img src="/images/app.svg" style={{width:"80px",height:"80px"}} className="w-100 d-flex justify-content-center mt-5" alt="" />
         <h4 className="m-0 fw-bold">E-commerce package</h4>
         <p className="m-0">Package applications or CLI software for your business</p>
         <h1 className="fw-bold m-0 mt-5 text-warning">Rp150.900</h1>
         <button className="mx-2 shadow-sm btn btn-warning mt-2">Buy</button>
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
           <p className="m-0">free 1 week maintenance.</p>
         </div>
         <div className="d-flex gap-2 mb-2 align-items-center">
           <i className="bi bi-check2-circle text-warning"></i>
           <p className="m-0">free tutorial how to use the app.</p>
         </div>
         <div className="d-flex gap-2 mb-2 align-items-center">
           <i className="bi bi-x-circle text-danger"></i>
           <p className="m-0">no database.</p>
         </div>
         <div className="d-flex gap-2 mb-2 align-items-center">
           <i className="bi bi-x-circle text-danger"></i>
           <p className="m-0">no publish app.</p>
         </div>
         </div>
       </SwiperSlide>
       <SwiperSlide className="d-flex w-100 justify-content-center">
         <div className="d-flex position-relative flex-column border-2 border-warning box-pricing btn btn-info">
         <img src="/images/app.svg" style={{width:"80px",height:"80px"}} className="w-100 d-flex justify-content-center mt-5" alt="" />
         <h4 className="m-0 fw-bold">Starter package</h4>
         <p className="m-0">Suitable for custom applications or school assignments</p>
         <h1 className="fw-bold m-0 mt-5 text-warning">Rp80.800</h1>
         <button className="mx-2 shadow-sm btn btn-warning mt-2">Buy</button>
         <hr className="my-4" />
         <div className="d-flex gap-2 mb-2 align-items-center">
           <i className="bi bi-check2-circle text-warning"></i>
           <p className="m-0">1 application.</p>
         </div>
         <div className="d-flex gap-2 mb-2 align-items-center">
           <i className="bi bi-check2-circle text-warning"></i>
           <p className="m-0">maximal 4 pages.</p>
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
           <p className="m-0">free tutorial how to use the app.</p>
         </div>
         <div className="d-flex gap-2 mb-2 align-items-center">
           <i className="bi bi-x-circle text-danger"></i>
           <p className="m-0">no database.</p>
         </div>
         <div className="d-flex gap-2 mb-2 align-items-center">
           <i className="bi bi-x-circle text-danger"></i>
           <p className="m-0">no publish app.</p>
         </div>
         <div className="d-flex gap-2 mb-2 align-items-center">
           <i className="bi bi-x-circle text-danger"></i>
           <p className="m-0">no maintenance.</p>
         </div>
         </div>
       </SwiperSlide>
      </Swiper>
     </section>
    </main>
    <Footer/>
    </>
    )
}

const Dev = () => {
  const loc = useLocation();
  if (loc.pathname === "/dev/jasa-pembuatan-website") {
    return (
      <JasaWebsite/>
      )
  } else if (loc.pathname === "/dev/jasa-pembuatan-aplikasi") {
    return (
      <JasaApps/>
      )
  } else {
    return (
      <E404/>
      )
  }
}

export default Dev