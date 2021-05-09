import { useEffect } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';
import OneBlog from './blog/OneBlog';
import Footer from './components/Footer';
import Header from './components/Header';
import NavScrollTop from './components/NavScrollTop';
import AboutPage from './pages/AboutPage';
import BlogPage from './pages/BlogPage';
import ContactPage from './pages/ContactPage';
import HomePage from './pages/HomePage';
import ProjectsPage from './pages/ProjectsPage';
import PickBazar from './projects/PickBazar';

const App = () => {
  useEffect(() => {
    AOS.init({
      offset: 80,
      duration: 1000,
      once: true,
      easing: 'ease',
    });
    AOS.refresh();
  }, []);
  return (
    <Router>
      <NavScrollTop>
        <Header />
        <Route path='/' exact component={HomePage} />
        <Route path='/projects' exact component={ProjectsPage} />
        <Route path='/pick-bazar' component={PickBazar} />
        <Route path='/blog' exact component={BlogPage} />
        <Route path='/blog/one-blog' component={OneBlog} />
        <Route path='/about' exact component={AboutPage} />
        <Route path='/contact' exact component={ContactPage} />
        <Footer />
      </NavScrollTop>
    </Router>
  );
};

export default App;
