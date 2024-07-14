import { useEffect } from "react"
import AOS from 'aos';
import 'aos/dist/aos.css';

const Faq = () => {
  useEffect(() => {
     AOS.init({
          duration: 1500,
          once: false,
        })
  }, [])
  return (
    <div className="container mt-5 text-light" data-aos="fadeIn">
     <h4 className="text-light">Faq</h4>
     <p className="">Untuk faq atau pertanyaan lebih lanjut silakan hubungi nomor whatsapp berikut.</p>
     <a className="btn text-dark btn-block btn-warning">Huhungi</a>
    </div>
  )
}

export default Faq