import './App.css';
import Header from './Components/Sections/Header';
import HeroSection from './Components/Sections/HeroSection';
import EducationSection from './Components/Sections/EducationSection';
import SkillsSection from './Components/Sections/SkillsSection';
import ContactSection from './Components/Sections/ContactSection';
import ProjectsSection from './Components/Sections/ProjectsSection';
import { Toaster } from 'sonner';
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';
import ProjectView from './Components/Pages/ProjectView';

function App() {
  return (
    <Router>
      <div className="App">
        <header>
          <Header />
        </header>
        <main>
          <Routes>
            <Route path='/' element = {
              <>
                <HeroSection/>
                <EducationSection/>
                <SkillsSection id='skills-section'/>
                <ProjectsSection id='projects-section'/>
                <ContactSection id='contacts-section'/>
              </>
              } 
            />

            <Route path='/project-view/:id?' element={<ProjectView />} />
          </Routes>
        </main>

        {/* Background Shapes */}
        <div className='shapes shape-blue shape1'></div>
        <div className='shapes shape-purple shape2'></div>

        {/* Toast Container*/}
        <Toaster richColors={true}  position="top-right"/>
      </div>
    </Router>
    
  );
}

export default App;
