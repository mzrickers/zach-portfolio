import Intro from './components/Intro';
import About from './components/about/About';
import ProjectList from './components/projectList/ProjectList';
import './App.css';


function App() {
  return (
    <div>
        <Intro/>
        <About/>
        <ProjectList/>
    </div>
  );
}

export default App;
