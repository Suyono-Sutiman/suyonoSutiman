import Admin from "./layout"
import Login from './login'
import {AuthContext} from './auth'
import { useContext } from "react"
import Ckedit from "./ckeditor"
import Editpost from "./editpost"
import { Route, Switch } from "react-router-dom"
import Edit from './edit'


const Dashboard = () => {
    const  {currentUser}  = useContext(AuthContext)

    return(
        <>
        {currentUser == null ? <Login/> : 
        <Admin>
            <Switch>
                <Route path='/dashboard/edit' component={Editpost}/>
                <Route path='/dashboard/baru' component={Ckedit}/>
                <Route path='/dashboard/post/:judul' component={Edit}/>
            </Switch>
        </Admin>
        }
        </>
    )
}

export default Dashboard