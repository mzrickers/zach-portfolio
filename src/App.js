import Intro from './components/Intro';
import About from './components/about/About';
import ProjectList from './components/projectList/ProjectList';
import Contact from './components/contact/Contact';
import './App.css';


function App() {
  return (
    <div>
        <Intro/>
        <About/>
        <ProjectList/>
        <Contact/>
    </div>
  );
}

export default App;
