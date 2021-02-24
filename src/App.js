import './App.css';
import { BrowserRouter as Router, Redirect, Route, Switch } from 'react-router-dom';
import Home from './component/pages/home';
import Work from './component/pages/work';
import About from './component/pages/about';
import Contact from './component/pages/contact';
import Blog from './component/pages/blog';
import BlogPost from './component/blogs/post';
import Dashboard from './component/admin/dashboard';
import Blank from './component/pages/404';
import { AuthProvider } from './component/admin/auth';

function App() {

  return (
    <AuthProvider>
    <Router>
        <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/work/' component={Work} />
        <Route path='/about/' component={About} />
        <Route path='/contact/' component={Contact} />
        <Route path='/blog/' component={Blog} />
        <Route path='/post/:judul' component={BlogPost} />
        <Route path='/dashboard/' component={Dashboard}/>
        <Route path='/404' component={Blank}/>
        <Redirect from='*' to='/404'/>
        </Switch>
    </Router>
    </AuthProvider>
  );
}

export default App;
