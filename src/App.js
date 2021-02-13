import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './component/pages/home';
import Work from './component/pages/work';
import About from './component/pages/about';
import Contact from './component/pages/contact';
import Blog from './component/pages/blog';
import { Container } from 'react-bootstrap';

function App() {

  return (
    <Router>
      <Container>
        <Route exact path='/' component={Home} />
        <Route path='/work/' component={Work} />
        <Route path='/about/' component={About} />
        <Route path='/contact/' component={Contact} />
        <Route path='/blog/' component={Blog} />
      </Container>
    </Router>
  );
}

export default App;
