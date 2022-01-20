import { useContext } from 'react'
import Intro from './components/Intro';
import About from './components/about/About';
import ProjectList from './components/projectList/ProjectList';
import Contact from './components/contact/Contact';
import Toggle from './components/toggle/Toggle';
import { ThemeContext } from './context';
import './App.css';


function App() {

  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;

  return (
    <div style={{
      backgroundColor: darkMode ? "#222" : "white",
      color: darkMode && "white"
      }}>
        <Toggle />
        <Intro/>
        <About/>
        <ProjectList/>
        <Contact/>
    </div>
  );
}

export default App;
