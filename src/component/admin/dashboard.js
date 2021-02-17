import Admin from "./layout"
import Login from './login'
import {AuthContext} from './auth'
import { useContext } from "react"
import Ckedit from "./ckeditor"


const Dashboard = () => {
    const  {currentUser}  = useContext(AuthContext)

    return(
        <>
        {currentUser == null ? <Login/> : 
        <Admin>
            <Ckedit/>
        </Admin>
        }
        </>
    )
}

export default Dashboard