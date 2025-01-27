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
import Faq from "../../components/Faq"
import {Helmet} from "react-helmet"

const HelmetsWebDev = () => {
  return (
    <Helmet>
    <title>Zserv | Jasa pembuatan website cepat dan terjangkau</title>
     <meta name="title" content="Zeru service | jasa pembuatan website cepat dan murah" />
       <meta
         name="description"
         content="Menyediakan jasa pembuatan website, proses cepat dan efisien. harga sangat bersahabat. gratis revisi, dan gratis hosting."
        />
       <meta
          name="keywords"
          content="zserv, zservice, zservz, zserv home, jasa pembuatan website, jasa pembuatan aplikasi, jasa pembuatan design, jasa hosting, jasa register domain, joki tugas website, jasa murah, web development, Zserv, Zeru service, jasa pembuatan website termurah, jasa buat web"
       />
    </Helmet>
    )
}
const JasaWebsite = () => {
  useEffect(() => {
     AOS.init({
          duration: 1500,
          once: false,
        })
  }, [])
  return (
    <>
    <HelmetsWebDev/>
    <Navbar/>
    <main className="w-100 m-0 mt-3 pb-3">
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
         <img src="/images/web.svg" style={{width:"80px",height:"80px"}} className="w-100 d-flex justify-content-center mt-5" alt="" />
         <h4 className="m-0 fw-bold">Paket premium</h4>
         <p className="m-0">Cocok untuk website UMKM atau usaha yang baru</p>
         <s className="m-0 mt-5" style={{color:"gray"}}>Rp256.000</s>
         <h1 className="fw-bold m-0 text-warning">Rp226.400</h1>
         <a className="mx-2 text-dark shadow-sm btn btn-warning mt-2" href="https://wa.me/6287774487198?text=Hai admin, saya ingin menggunakan jasa Pembuatan website dengan paket premium seharga Rp.226.400 rupiah. apakah bisa diproses segera?">Gunakan paket ini</a>
         <p className="m-0 mt-1" style={{color:"gray"}}>Rp40.400/tahun berikutnya</p>
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
           <p className="m-0">gratis hosting.</p>
         </div>
         <div className="d-flex gap-2 mb-2 align-items-center">
           <i className="bi bi-check2-circle text-warning"></i>
           <p className="m-0">gratis domain (.my.id/.web.app/..).</p>
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
           <p className="m-0">integrisasi media social.</p>
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
           <p className="m-0">maintence.</p>
         </div>
         <div className="d-flex gap-2 mb-2 align-items-center">
           <i className="bi bi-x-circle text-danger"></i>
           <p className="m-0">fitur e-commerce.</p>
         </div>
         <p className="m-0" style={{color:"gray"}}>proses 1 minggu</p>
         </div>
       </SwiperSlide>
       <SwiperSlide className="d-flex w-100 justify-content-center">
         <div className="d-flex position-relative flex-column border-2 border-warning box-pricing btn btn-info">
         <img src="/images/web.svg" style={{width:"80px",height:"80px"}} className="w-100 d-flex justify-content-center mt-5" alt="" />
         <h4 className="m-0 fw-bold">Paket professional</h4>
         <p className="m-0">Cocok untuk website bisnis perusahan kecil sampai besar maupun website pengelolaan bisnis</p>
         <s className="m-0 mt-5" style={{color:"gray"}}>Rp650.000</s>
         <h1 className="fw-bold m-0 text-warning">Rp552.400/thn</h1>
         <a className="mx-2 text-dark shadow-sm btn btn-warning mt-2" href="https://wa.me/6287774487198?text=Hai admin, saya ingin menggunakan jasa Pembuatan website dengan paket professional seharga Rp.452.000/thn. apakah bisa diproses segera?">Gunakan paket ini</a>
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
           <p className="m-0">gratis hosting.</p>
         </div>
         <div className="d-flex gap-2 mb-2 align-items-center">
           <i className="bi bi-check2-circle text-warning"></i>
           <p className="m-0">gratis domain (.com/.org/..).</p>
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
           <p className="m-0">integrisasi media social.</p>
         </div>
         <div className="d-flex gap-2 mb-2 align-items-center">
           <i className="bi bi-check2-circle text-warning"></i>
           <p className="m-0">fitur e-commerce.</p>
         </div>
         <div className="d-flex gap-2 mb-2 align-items-center">
           <i className="bi bi-check2-circle text-warning"></i>
           <p className="m-0">static/interactive pages.</p>
         </div>
         <div className="d-flex gap-2 mb-2 align-items-center">
           <i className="bi bi-check2-circle text-warning"></i>
           <p className="m-0">gratis 1 month / years maintence.</p>
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
         <p className="m-0" style={{color:"gray"}}>proses 2-3 minggu </p>
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
const HelmetsAppDev = () => {
  return (
    <Helmet>
    <title>Zserv | Jasa pembuatan aplikasi cepat dan terjangkau</title>
     <meta name="title" content="Zeru service | jasa pembuatan aplikasi cepat dan murah" />
       <meta
         name="description"
         content="Menyediakan jasa pembuatan aplikasi, proses cepat dan efisien. harga sangat bersahabat. gratis revisi, dan gratis hosting."
        />
       <meta
          name="keywords"
          content="zserv, zservice, zservz, zserv home, jasa pembuatan website, jasa pembuatan aplikasi, jasa pembuatan design, jasa hosting, jasa register domain, joki tugas website, jasa murah, web development, Zserv, Zeru service, jasa pembuatan aplikasi termurah, jasa buat aplikasi"
       />
    </Helmet>
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
    <HelmetsAppDev/>
    <Navbar/>
    <main className="w-100 m-0 mt-3 pb-3">
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
         <img src="/images/app.svg" style={{width:"80px",height:"80px"}} className="w-100 d-flex justify-content-center mt-5" alt="" />
         <h4 className="m-0 fw-bold">Paket starter</h4>
         <p className="m-0">Cocok untuk custom aplikasi sederhana atau aplikasi kebutuhan sehari-hari</p>
         <h1 className="fw-bold m-0 mt-5 text-warning">Rp80.800</h1>
         <a className="mx-2 text-dark shadow-sm btn btn-warning mt-2" href="https://wa.me/6287774487198?text=Hai admin, saya ingin menggunakan jasa Pembuatan aplikasi dengan paket starter seharga Rp.80.800. apakah bisa diproses segera?">Gunakan paket ini</a>
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
         <div className="d-flex gap-2 mb-2 align-items-center">
           <i className="bi bi-x-circle text-danger"></i>
           <p className="m-0">no maintenance.</p>
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
const HelmetsHostWeb = () => {
  return (
    <Helmet>
    <title>Zserv | Jasa hosting website cepat dan aman</title>
     <meta name="title" content="Zeru service | jasa hosting website cepat dan aman" />
       <meta
         name="description"
         content="Menyediakan jasa web hosting, proses cepat dan efisien. harga sangat bersahabat."
        />
       <meta
          name="keywords"
          content="zserv, zservice, zservz, zserv home, jasa pembuatan website, jasa pembuatan aplikasi, jasa pembuatan design, jasa hosting, jasa register domain, joki tugas website, jasa murah, web development, Zserv, Zeru service, jasa web hosting termurah, jasa web hosting, web hosting murah"
       />
    </Helmet>
    )
}
const JasaHosting = () => {
  useEffect(() => {
     AOS.init({
          duration: 1500,
          once: false,
        })
  }, [])
  return (
    <>
    <HelmetsHostWeb/>
    <Navbar/>
    <main className="w-100 m-0 mt-3 pb-3">
     <section className="text-primary w-100 mt-5 pt-5">
       <h4 className="container m-0" data-aos="fadeIn"><span className="text-warning">-</span> Jasa hosting website <span className="text-warning">-</span></h4>
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
         <img src="/images/web.svg" style={{width:"80px",height:"80px"}} className="w-100 d-flex justify-content-center mt-5" alt="" />
         <h4 className="m-0 fw-bold">Paket starter</h4>
         <p className="m-0">Cocok kebutuhan website sederhana yang tidak terlalu urgent</p>
         <h1 className="fw-bold m-0 mt-5 text-warning">Rp30.000</h1>
         <a className="mx-2 shadow-sm btn text-dark btn-warning mt-2" href="https://wa.me/6287774487198?text=Hai admin, saya ingin menggunakan jasa Hosting website dengan paket Starter seharga Rp.30.000 rupiah. apakah bisa diproses segera?">Gunakan paket ini</a>
         <hr className="my-4" />
         <div className="d-flex gap-2 mb-2 align-items-center">
           <i className="bi bi-check2-circle text-warning"></i>
           <p className="m-0">1 hosting.</p>
         </div>
         <div className="d-flex gap-2 mb-2 align-items-center">
           <i className="bi bi-check2-circle text-warning"></i>
           <p className="m-0">php or html only.</p>
         </div>
         <div className="d-flex gap-2 mb-2 align-items-center">
           <i className="bi bi-check2-circle text-warning"></i>
           <p className="m-0">free ssl.</p>
         </div>
         <div className="d-flex gap-2 mb-2 align-items-center">
           <i className="bi bi-check2-circle text-warning"></i>
           <p className="m-0">free subdomain.</p>
         </div>
         <div className="d-flex gap-2 mb-2 align-items-center">
           <i className="bi bi-check2-circle text-warning"></i>
           <p className="m-0">add on domain.</p>
         </div>
         <div className="d-flex gap-2 mb-2 align-items-center">
           <i className="bi bi-check2-circle text-warning"></i>
           <p className="m-0">max 5x pushed to hosting.</p>
         </div>
         <div className="d-flex gap-2 mb-2 align-items-center">
           <i className="bi bi-check2-circle text-warning"></i>
           <p className="m-0">mysql.</p>
         </div>
         <div className="d-flex gap-2 mb-2 align-items-center">
           <i className="bi bi-x-circle text-danger"></i>
           <p className="m-0">webly builder.</p>
         </div>
         <div className="d-flex gap-2 mb-2 align-items-center">
           <i className="bi bi-x-circle text-danger"></i>
           <p className="m-0">akses ssh.</p>
         </div>
         <div className="d-flex gap-2 mb-2 align-items-center">
           <i className="bi bi-x-circle text-danger"></i>
           <p className="m-0">nodejs & python (build terlebih dahulu).</p>
         </div>
         <div className="d-flex gap-2 mb-2 align-items-center">
           <i className="bi bi-x-circle text-danger"></i>
           <p className="m-0">turbo booster.</p>
         </div>
         <p className="m-0" style={{color:"gray"}}>proses 1 hari</p>
         </div>
       </SwiperSlide>
       <SwiperSlide className="d-flex w-100 justify-content-center">
         <div className="d-flex position-relative flex-column border-2 border-warning box-pricing btn btn-info">
         <img src="/images/web.svg" style={{width:"80px",height:"80px"}} className="w-100 d-flex justify-content-center mt-5" alt="" />
         <h4 className="m-0 fw-bold">Paket professional</h4>
         <p className="m-0">Cocok kebutuhan website komersial atau sejenisnya</p>
         <h1 className="fw-bold m-0 mt-5 text-warning">Rp525.000</h1>
         <a className="mx-2 text-dark shadow-sm btn btn-warning mt-2" href="https://wa.me/6287774487198?text=Hai admin, saya ingin menggunakan jasa Hosting website dengan paket Professional seharga Rp.525.000 rupiah. apakah bisa diproses segera?">Gunakan paket ini</a>
         <hr className="my-4" />
         <div className="d-flex gap-2 mb-2 align-items-center">
           <i className="bi bi-check2-circle text-warning"></i>
           <p className="m-0">1 hosting.</p>
         </div>
         <div className="d-flex gap-2 mb-2 align-items-center">
           <i className="bi bi-check2-circle text-warning"></i>
           <p className="m-0">php or html only.</p>
         </div>
         <div className="d-flex gap-2 mb-2 align-items-center">
           <i className="bi bi-check2-circle text-warning"></i>
           <p className="m-0">free ssl.</p>
         </div>
         <div className="d-flex gap-2 mb-2 align-items-center">
           <i className="bi bi-check2-circle text-warning"></i>
           <p className="m-0">akses ssh.</p>
         </div>
         <div className="d-flex gap-2 mb-2 align-items-center">
           <i className="bi bi-check2-circle text-warning"></i>
           <p className="m-0">weebly builder.</p>
         </div>
         <div className="d-flex gap-2 mb-2 align-items-center">
           <i className="bi bi-check2-circle text-warning"></i>
           <p className="m-0">backup mingguan.</p>
         </div>
         <div className="d-flex gap-2 mb-2 align-items-center">
           <i className="bi bi-check2-circle text-warning"></i>
           <p className="m-0">security 360.</p>
         </div>
         <div className="d-flex gap-2 mb-2 align-items-center">
           <i className="bi bi-check2-circle text-warning"></i>
           <p className="m-0">add on domain.</p>
         </div>
         <div className="d-flex gap-2 mb-2 align-items-center">
           <i className="bi bi-check2-circle text-warning"></i>
           <p className="m-0">turbo booster.</p>
         </div>
         <p className="m-0" style={{color:"gray"}}>proses 1-2 hari</p>
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
const HelmetsDomainWeb = () => {
  return (
    <Helmet>
    <title>Zserv | Jasa register domain website cepat dan aman</title>
     <meta name="title" content="Zeru service | jasa register domain website cepat dan aman" />
       <meta
         name="description"
         content="Menyediakan jasa register domain website, proses cepat dan efisien. harga sangat bersahabat."
        />
       <meta
          name="keywords"
          content="zserv, zservice, zservz, zserv home, jasa pembuatan website, jasa pembuatan aplikasi, jasa pembuatan design, jasa hosting, jasa register domain, joki tugas website, jasa murah, web development, Zserv, Zeru service, jasa register domain termurah, jasa register domain, jasa domain website, jasa buat url website, register domain murah"
       />
    </Helmet>
    )
}
const JasaDomain = () => {
  useEffect(() => {
     AOS.init({
          duration: 1500,
          once: false,
        })
  }, [])
  return (
    <>
    <HelmetsDomainWeb/>
    <Navbar/>
    <main className="w-100 m-0 mt-3 pb-3">
     <section className="text-primary w-100 mt-5 pt-5">
       <h4 className="container m-0" data-aos="fadeIn"><span className="text-warning">-</span> Jasa register domain <span className="text-warning">-</span></h4>
       <p class="m-0 container">Untuk penggunaan jasa register domain bisa langsung menghubungi kami melalui WhatsApp. kita bisa berdiskusi tentang harga dan ketersediaan domain.</p>
       <button class="btn mx-3 mb-3 btn-light">Gunakan jasa ini</button>
     </section>
     <Faq/>
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
  } else if (loc.pathname === "/dev/jasa-hosting") {
    return (
      <JasaHosting/>
      )
  } else if (loc.pathname === "/dev/jasa-domain") {
    return (
      <JasaDomain/>
      )
  } else {
    return (
      <E404/>
      )
  }
}

export default Dev