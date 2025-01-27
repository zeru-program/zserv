const Footer = () => {
  return (
    <footer className="py-5 px-3 d-flex flex-column">
     <div className="about-us-footer">
      <img src="/zserv-nav.png" className="img-footer" style={{width:"150px",height:"auto"}} alt="" />
        <p className="text-left text-about text-comment-review">Saya Justine, yang memulai karir di bidang jasa pembuatan seni digital. Saya Justine di balik nama Zeru. Saat ini saya menyediakan tiga layanan, yaitu pembuat situs web, pembuat aplikasi, dan desain grafis.</p>
     </div>
      <div className="d-flex justify-content-around flex-wrap gap-5">
      <div className="d-flex flex-column">
        <h4 className="m-0">Navigation</h4>
        <a href="/" className="m-0"><ion-icon name="chevron-forward-outline"></ion-icon> Home</a>
        <a href="/portofolio" className="m-0"><ion-icon name="chevron-forward-outline"></ion-icon> Portofolio</a>
        <a href="/contact-kami" className="m-0"><ion-icon name="chevron-forward-outline"></ion-icon> Contact kami</a>
        <a href="/login" className="m-0"><ion-icon name="chevron-forward-outline"></ion-icon> Login</a>
        <a href="/register" className="m-0"><ion-icon name="chevron-forward-outline"></ion-icon> Register</a>
      </div>
      <div className="d-flex flex-column">
        <h4 className="m-0">Service</h4>
        <span className="m-0">Development</span>
        <span className="m-0">Deign</span>
      </div>
      <div className="d-flex flex-column">
        <h4 className="m-0">Product</h4>
        <span className="m-0">Website</span>
        <span className="m-0">Application</span>
        <span className="m-0">Software</span>
        <span className="m-0">Design web app</span>
        <span className="m-0">Design graphics</span>
      </div>
      <div className="d-flex flex-column">
        <h4 className="m-0">Our sosmed</h4>
        <a className="m-0 bi bi-whatsapp sosmed-footer" href="https://wa.me/6287774487198"> +62 877-7448-7198</a>
        <a className="m-0 bi bi-instagram sosmed-footer" href="https://instagram.api/"> @zerr.ace</a>
        <a className="m-0 bi bi-envelope sosmed-footer" href="mailto:zeruprogram@gmail.com?subject=feedback"> zeruprogram@gmail.com</a>
      </div>
      </div>
      <div className="m-0 pb-3 d-block text-center align-items-center w-100">
        <hr className="text-light w-100" />
        <span className="m-0">© 2024 by zeru. All right reversed. version app 1.0.0</span>
      </div>
    </footer>
  )
}

export default Footer