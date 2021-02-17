import { Container } from "react-bootstrap"
import Back from "../back"

const Contact = () => {
    return(
        <Container>
        <Back/>
        <h1>Contact</h1>
        <p className='lead'>Saya tinggal di Cikupa, Kab. Tangerang, dan saat ini bekerja freelance. 
        Hubungi saya kapanpun sesuai waktu luang anda.</p>
        <p>
            <a href='https://wa.me/6281219013721' target='blank'>
                Whatsapp<sup>↗</sup>
            </a>
        </p>
        <p>
            <a href='https://www.instagram.com/noo_oonex/' target='blank'>
                Instagram<sup>↗</sup>
            </a>
        </p>
        <p>
            <a href='https://github.com/Suyono-Sutiman'target='blank'>
                GitHub<sup>↗</sup>
            </a>
        </p>
        <p>
            <a href=''>
                Coba buat website<sup>↗</sup>
            </a>
        </p>
        </Container>
    )
}

export default Contact