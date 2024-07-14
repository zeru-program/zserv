import { useEffect } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import Navbar from "../../components/Navbar"
import Footer from "../../components/Footer"
import {Helmet} from "react-helmet"

const Helmets = () => {
  return (
    <Helmet>
    <title>Zserv | Contact</title>
     <meta name="title" content="Zeru service | contact" />
       <meta
         name="description"
         content="Menjual jasa pembuatan website, aplikasi, maupun desain. proses cepat dan efisien serta harga terjangkau."
        />
       <meta
          name="keywords"
          content="zserv, zservice, zservz, zserv home, jasa pembuatan website, jasa pembuatan aplikasi, jasa pembuatan design, jasa hosting, jasa register domain, joki tugas website, jasa murah, web development, Zserv, Zeru service, zserv contact, zserv contact kami"
       />
    </Helmet>
    )
}
const Tooper = () => {
  useEffect(() => {
     AOS.init({
          duration: 1500,
          once: false,
        })
  }, [])
  return (
  <section className="text-light w-100 mt-5 container">
    <h4 class="m-0 text-center mt-5" data-aos="fadeIn">Hubungi kami</h4>
    <p class="m-0 text-center" data-aos="fadeIn">+62 877-7448-7198</p>
    <p class="m-0 text-center" data-aos="fadeIn">@zerr.ace</p>
    <p class="m-0 text-center" data-aos="fadeIn">zeruprogram@gmail.com</p>
  </section>
  )
}
const ServiceAds = () => {
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
const Contact = () => {
  return (
  <>
  <Helmets/>
  <Navbar/>
  <main className="w-100 m-0 gap-3 py-5">
    <Tooper/>
    <ServiceAds/>
  </main>
    <Footer/>
  </>
  )
}

export default Contact