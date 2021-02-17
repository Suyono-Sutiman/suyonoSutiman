import { Link } from "react-router-dom"

const Blank = () => {
    return(
        <Link to='/'>
        <div className='d-flex flex-column justify-content-center align-items-center full'>
        <div className='gaada'>
        <h1 className='display-4'>404</h1>
        <h1 className='display-4'>Not Found</h1>
        <h1 className='lead'>Kembali Ke Halaman Utama</h1>
        </div>
        </div>
        </Link>
    )
}
export default Blank