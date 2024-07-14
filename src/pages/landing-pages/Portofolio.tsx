import { useEffect } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';
import Navbar from "../../components/Navbar"
import Footer from "../../components/Footer"
import "./styles/Portofolio.css"
import {Helmet} from "react-helmet"

const Helmets = () => {
  return (
    <Helmet>
    <title>Zserv | Portofolio</title>
     <meta name="title" content="Zeru service | home" />
       <meta
         name="description"
         content="Menjual jasa pembuatan website, aplikasi, maupun desain. proses cepat dan efisien serta harga terjangkau."
        />
       <meta
          name="keywords"
          content="zserv, zservice, zservz, zserv home, jasa pembuatan website, jasa pembuatan aplikasi, jasa pembuatan design, jasa hosting, jasa register domain, joki tugas website, jasa murah, web development, Zserv, Zeru service, zserv portofolio"
       />
    </Helmet>
    )
}
const Tooper = () => {
  return (
  <section className="text-light w-100 mt-5 container" data-aos="fadeInLeft">
    <h4 class="m-0 mt-5">Portofolio</h4>
    <span class="m-0 mt-3 pt-5">• Official website</span>
    <br />
    <a href="https://zerupgmm.web.app" class="text-warning">https://zerupgmm.web.app</a>
  </section>
  )
}
const OurExampleDesignWeb = () => {
   return (
  <section className="mt-5 container text-light" data-aos="zoomIn">
    <h4 className="m-0">Our example design</h4>
    <div className="d-flex mt-3 flex-wrap gap-3">
      <div class="m-0 box-por">
        <img src="/images/por/1.png" alt="" />
      </div>
      <div class="m-0 box-por">
        <img src="/images/por/2.png" alt="" />
      </div>
      <div class="m-0 box-por">
        <img src="/images/por/3.png" alt="" />
      </div>
      <div class="m-0 box-por">
        <img src="/images/por/4.png" alt="" />
      </div>
      <div class="m-0 box-por">
        <img src="/images/por/5.png" alt="" />
      </div>
      <div class="m-0 box-por">
        <img src="/images/por/6.png" alt="" />
      </div>
    </div>
  </section>
   )
}
const BtnBuatkanSayaJuga = () => {
  return (
  <section className="mt-4 container">
    <a href="https://wa.me/6287774487198?text=Hai admin, saya ingin mencoba jasa pembuatan website/apk/design yang tersedia di zserv, bagaimana cara proses pemesanan nya?" className="btn btn-warning text-dark">Buatkan saya juga <i class="bi bi-arrow-right"></i></a>
  </section>
  )
}
const Portofolio = () => {
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
  <main className="w-100 m-0 gap-3 py-5">
    <Tooper/>
    <OurExampleDesignWeb/>
    <BtnBuatkanSayaJuga/>
  </main>
    <Footer/>
  </>
  )
}

export default Portofolio