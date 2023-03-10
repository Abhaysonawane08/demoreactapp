import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import MyRoutes from './MyRoutes';
import MynavScroll from './MynavScroll';
import Home from './compo/Home';
import About from './compo/About';
import Courses from './compo/Courses';
import Contact from './compo/Contact';
import Services from './compo/Services';

function App() {
  return (
    <div>
      <MynavScroll />
      <section id="home">
        <Home />
      </section>
      <section id="about">
        <About />
      </section>
      <section id="services">
        <Services />
      </section>
      <section id="courses">
        <Courses />
      </section>
      <section id="contact">
        <Contact />
      </section>
    </div>
  );
}

export default App;
