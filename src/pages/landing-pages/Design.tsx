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
import Faq from "../../components/Faq"
import {Helmet} from "react-helmet"

const Helmets = () => {
  return (
    <Helmet>
    <title>Zserv | Jasa desainer produk/logo/website cepat dan terjangkau</title>
     <meta name="title" content="Zeru service | jasa pembuatan website cepat dan murah" />
       <meta
         name="description"
         content="Menyediakan jasa pembuatan desain, bisa berupa produk, logo desain, web desain. proses cepat dan efisien. harga sangat bersahabat. gratis revisi."
        />
       <meta
          name="keywords"
          content="zserv, zservice, zservz, zserv home, jasa pembuatan website, jasa pembuatan aplikasi, jasa pembuatan design, jasa hosting, jasa register domain, joki tugas website, jasa murah, web development, Zserv, Zeru service, jasa pembuatan desain, jasa designer, jasa design produk, jasa design logo, jasa web design"
       />
    </Helmet>
    )
}
const JasaAll = () => {
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
    <main className="w-100 m-0 mt-3 pb-3">
     <section className="text-primary w-100 mt-5 pt-5">
       <h4 className="container m-0" data-aos="fadeIn"><span className="text-warning">-</span> Jasa design <span className="text-warning">-</span></h4>
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
       <SwiperSlide className="d-flex w-100 justify-content-center">
         <div className="d-flex position-relative flex-column border-2 border-warning box-pricing btn btn-info">
         <img src="/images/design.svg" style={{width:"80px",height:"80px"}} className="w-100 d-flex justify-content-center mt-5" alt="" />
         <h4 className="m-0 fw-bold">Logo design</h4>
         <p className="m-0">Cocok untuk design logo bisnis mu maupun logo custom</p>
         <h1 className="fw-bold m-0 mt-5 text-warning">Rp50.400</h1>
         <a className="mx-2 text-dari shadow-sm btn btn-warning mt-2" href="https://wa.me/6287774487198?text=Hai admin, saya ingin menggunakan jasa Logo design di jasa pembuatan design zserv, seharga Rp.50.400 rupiah. apakah bisa diproses segera?">Gunakan jasa ini</a>
         <hr className="my-4" />
         <div className="d-flex gap-2 mb-2 align-items-center">
           <i className="bi bi-check2-circle text-warning"></i>
           <p className="m-0">2 design.</p>
         </div>
         <div className="d-flex gap-2 mb-2 align-items-center">
           <i className="bi bi-check2-circle text-warning"></i>
           <p className="m-0">design unik dan profesional.</p>
         </div>
         <div className="d-flex gap-2 mb-2 align-items-center">
           <i className="bi bi-check2-circle text-warning"></i>
           <p className="m-0">gratis 5x revisi.</p>
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
           <p className="m-0">proses 5 hari.</p>
         </div>
         <div className="d-flex gap-2 mb-2 align-items-center">
           <i className="bi bi-x-circle text-danger"></i>
           <p className="m-0">source file.</p>
         </div>
         <div className="d-flex gap-2 mb-2 align-items-center">
           <i className="bi bi-x-circle text-danger"></i>
           <p className="m-0">custom design.</p>
         </div>
         </div>
       </SwiperSlide>
       <SwiperSlide className="d-flex w-100 justify-content-center">
         <div className="d-flex position-relative flex-column border-2 border-warning box-pricing btn btn-info">
         <img src="/images/design.svg" style={{width:"80px",height:"80px"}} className="w-100 d-flex justify-content-center mt-5" alt="" />
         <h4 className="m-0 fw-bold">Web design / UI UX</h4>
         <p className="m-0">Cocok untuk mendesain website dalam tahap designing & analisis</p>
         <h1 className="fw-bold m-0 mt-5 text-warning">Rp151.000</h1>
         <a className="mx-2 text-dark shadow-sm btn btn-warning mt-2" href="https://wa.me/6287774487198?text=Hai admin, saya ingin menggunakan jasa Website design di jasa pembuatan design zserv, seharga Rp.151.000 rupiah. apakah bisa diproses segera?">Gunakan jasa ini</a>
         <hr className="my-4" />
         <div className="d-flex gap-2 mb-2 align-items-center">
           <i className="bi bi-check2-circle text-warning"></i>
           <p className="m-0">1 design (termasuk full page).</p>
         </div>
         <div className="d-flex gap-2 mb-2 align-items-center">
           <i className="bi bi-check2-circle text-warning"></i>
           <p className="m-0">custom design.</p>
         </div>
         <div className="d-flex gap-2 mb-2 align-items-center">
           <i className="bi bi-check2-circle text-warning"></i>
           <p className="m-0">gratis 15x revisi.</p>
         </div>
         <div className="d-flex gap-2 mb-2 align-items-center">
           <i className="bi bi-check2-circle text-warning"></i>
           <p className="m-0">responsif design.</p>
         </div>
         <div className="d-flex gap-2 mb-2 align-items-center">
           <i className="bi bi-check2-circle text-warning"></i>
           <p className="m-0">design unik dan profesional.</p>
         </div>
         <div className="d-flex gap-2 mb-2 align-items-center">
           <i className="bi bi-check2-circle text-warning"></i>
           <p className="m-0">menggunakan teknologi canva atau figma.</p>
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
           <p className="m-0">proses 1 minggu.</p>
         </div>
         <div className="d-flex gap-2 mb-2 align-items-center">
           <i className="bi bi-x-circle text-danger"></i>
           <p className="m-0">source file.</p>
         </div>
         </div>
       </SwiperSlide>
      </Swiper>
     </section>
     <Faq/>
    </main>
    <Footer/>
    </>
    )
}

const Design = () => {
  return (
    <JasaAll/>
    )
}

export default Design