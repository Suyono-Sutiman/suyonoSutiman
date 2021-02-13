import {Link} from 'react-router-dom'

const Back = () => {
    return(
        <div className='clearfix'>
        <Link to='/'>
        <button type="button" className="tutup font-weight-bold" aria-label="Close">
        <span aria-hidden="true">&times;</span>
        </button>
        </Link>
        </div>
    )
}
export default Back