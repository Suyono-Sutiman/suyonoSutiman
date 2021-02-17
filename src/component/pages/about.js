import { Container } from "react-bootstrap"
import { Link } from "react-router-dom"
import Back from "../back"

const About = () => {
    const reac = 'https://reactjs.org/'
    const fire = 'https://firebase.google.com/'
    const mid = 'https://midtrans.com/'
    const boot = 'https://getbootstrap.com/'
    const fig = 'https://www.figma.com'
    const beli = 'https://app.sandbox.midtrans.com/payment-links/1613327769211'

    return(
        <Container>
        <Back/>
        <h1>About</h1>
        <p className='lead' >Saya seorang front-end developer & UI-UX designer.</p>
        <p>Saat ini sedang mencoba mendalami <a href={reac}target='blank'>ReactJs<sup>↗</sup></a>, 
        menyambugkan dengan <a href={fire}target='blank'>Firebase<sup>↗</sup></a>, membuat login <Link to='/admin'>admin<sup>↗</sup></Link>, 
        sinkronisasi dengan admin panel, 
        menulis <Link to='/blog'>blog<sup>↗</sup></Link>, 
        menyediakan pembelian dalam website dengan berbagai macam cara <a href={mid}target='blank'>pembayaran<sup>↗</sup></a>, 
        menggunakan <a href={boot}target='blank'>Bootstrap<sup>↗</sup></a> untuk keindahan dan konsistensi tampilan website yang 
        sebelumnya telah saya design menggunakan <a href={fig}target='blank'>Figma<sup>↗</sup></a>, 
        dan yang anda lihat ini adalah 
        hasilnya.
        </p>
        <p>
            Jika anda tertarik membuat website seperti ini bisa langsung anda beli <a href={beli}>disini<sup>↗</sup></a>, 
            atau anda menginginkan website sesuai keinginan sendiri bisa langsung <Link to='/contact'>hubungi<sup>↗</sup></Link> saya.
        </p>
        <p className='text-muted' >*coba klik tulisan yang ada tanda <sup>↗</sup></p>
        </Container>
    )
}

export default About