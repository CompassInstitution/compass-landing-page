import './App.css';
import Navbar from './components/Navbar';
import Events from './components/Events';
import About from './components/About';
import ProjectGallery from './components/ProjectGallery';
import JobList from './components/JobList';
import Footer from './components/Footer';



function App() {
  return (
    <div>
      <Navbar />
      <About />
      <Events />
      <ProjectGallery />
      <JobList />
      <Footer />
    </div>
  );
}

export default App;
