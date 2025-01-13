import React, { useEffect, useState } from 'react';
import '../Styles/ProjectView.css';
import ProjectCard1 from '../Assets/projectCard1.png';
import ProjectCard2 from '../Assets/projectCard2.png';
import ProjectCard3 from '../Assets/projectCard3.png';
import DesignCard1 from '../Assets/designCard1.png';
import DesignCard2 from '../Assets/designCard2.png';
import DesignCard3 from '../Assets/designCard3.png';
import HtmlIcon from '../Assets/html.png';
import CssIcon from '../Assets/css.png';
import ReactJsIcon from '../Assets/react.png';
import PhpIcon from '../Assets/php.png';
import SqlIcon from '../Assets/sql.png';
import FigmaIcon from '../Assets/figma.png';
import { useNavigate, useParams } from 'react-router-dom';
import PrimaryButtonPrefab from '../UI/ButtonsPrefab';

export default function ProjectView({projectId}) {
    const navigate = useNavigate();
    const { id } = useParams();
    const [selectedProject, setSelectedProject] = useState([]);

    const projectsData = [
        { 
            id: 1, 
            img: ProjectCard1, 
            name: 'FitPlan: Workout Routine Planner', 
            description: 'FitPlan is a web application designed to help gym enthusiasts create custom workout routines with detailed information about each exercise. It also includes a comprehensive catalog of various workouts, making it particularly useful for beginners venturing into the world of fitness.',
            history: "I developed this web application during the first semester of my 4th year in college. As of today ( 1/13/2025 ), it is my most recent personal project.",
            techUsed: [HtmlIcon, CssIcon, ReactJsIcon, PhpIcon, SqlIcon],
            account: { username:'guest1', password:'guest1' },
            note: "Please don't reload the web app, because for some reason the free hosting keeps generating error upon reloading. You can reload if the catalog is not appearing, this is because of the hosting itself",
            link:'https://fit-plan.lovestoblog.com',
            type:'development' 
        },

        {
            id: 2, 
            img: ProjectCard2,
            name: 'Yecipes: Healthy Vegetarian Meals', 
            description: 'Yecipes is a web application dedicated to promoting healthy vegetarian eating. It features a curated catalog of vegetarian recipes with detailed information on ingredients, nutritional values, and step-by-step preparation methods. The platform is developmented to inspire individuals to explore plant-based meals, whether they are new to vegetarianism or seasoned enthusiasts.',
            history: "Yecipes was my first web application developed using React. I created it during my second year in college while I was still a beginner exploring React. At that time, I had a foundational knowledge of HTML, CSS, and JavaScript, and this project helped me further enhance my skills.",
            techUsed: [HtmlIcon, CssIcon, ReactJsIcon],
            account:'',
            note: "Please don't reload the web app, because for some reason the free hosting keeps generating error upon reloading",
            link:'https://yecipes.netlify.app',
            type:'development' 
        },
        {
            id: 3, 
            img: ProjectCard3,
            name: 'SeaFood: South East Asian Food Catalog', 
            description: 'The SeaFood South East Asian Food Catalog is a web application that showcases a variety of traditional and popular seafood dishes from Southeast Asia. The platform provides detailed information about each dish, including its ingredients, preparation methods, and cultural significance, making it an excellent resource for food enthusiasts and home cooks alike.',
            history: "I created this web application to celebrate and promote the rich culinary heritage of Southeast Asia. It was developed as a personal project to enhance my web development skills and share my passion for diverse cuisines.",
            techUsed: [HtmlIcon, CssIcon, ReactJsIcon, PhpIcon, SqlIcon],
            account: { username:'guest1', password:'guest1' },
            note: "Please don't reload the web app, because for some reason the free hosting keeps generating error upon reloading",
            link:'http://se-asiafoods.onlinewebshop.net',
            type:'development'
        },
        {
            id: 4, 
            img: DesignCard1,
            name: 'PartyBuilders: Website For Party Planners',
            description: 'PartyBuilders is a web application created as a prototype for a fictional business aimed at providing comprehensive event planning services for parties. The site showcases a catalog of services and allows party planners to customize their events.',
            history: "I developed this UI/UX Design as a prototype for our fictional business. It was part of our project in Accountancy to create a fictional business while designing a dedicated website for its promotion.",
            techUsed: [FigmaIcon],
            note: "No notes",
            link: 'https://www.figma.com/design/KKCU4rqMNSNQZ1svx68jDL/party-builderz?t=fTuyy36TjLKIq3Lm-1',
            type:'design'
        },   
        {
            id: 5, 
            img: DesignCard2,
            name: 'ConvertMoto: Document Converter',
            description: 'ConvertMoto is a simple web application designed to convert various document formats. The tool aims to provide an easy-to-use solution for converting documents from one format to another quickly and efficiently.',
            history: "This simple UI/UX Design is a personal project for a document converter web app. Unfortunately, I haven't worked on its development yet.",
            techUsed: [FigmaIcon],
            note: "No notes",
            link: 'https://www.figma.com/design/to72THQdKkt9YP2QtrdyQr/Document-Converter?t=Fwy6ravzG6u7CTzD-1',
            type:'design'
        },
        {
            id: 6, 
            img: DesignCard3,
            name: 'Roomly: E-Commerce Furnitures', 
            description: 'Roomly is an e-commerce platform designed to offer a wide range of furniture for every home and office. The site allows customers to browse through various categories of furniture, view detailed product information, and make purchases online.',
            history: "This is my recent project, an e-commerce UI/UX Design. It was challenging since e-commerce has a lot of different components that i need to consider",
            techUsed: [FigmaIcon],
            note: "No notes",
            link: 'https://www.figma.com/design/1aiHyVRq3IC2rzB7c0NFAT/e-commerce?node-id=0-1&t=5bZo79aislfGDJ8q-1',
            type:'design'
        }
    ]

    useEffect(() => {
        if(id) {
            const selectedProject = projectsData.find(project => project.id == id);
            setSelectedProject(selectedProject);
        }
    }, [id])

    return (
        <div className='project-view'>
          <div className='project-view__wrapper'>
            {selectedProject ? (
              <>
                <img src={selectedProject.img} className='project-view__img' />
      
                <div className='project-view__information-wrapper'>
                  <div className='project-view__general-information'>
                    <h3>{selectedProject.name}</h3>
                    <p>{selectedProject.description}</p>
                    <p>{selectedProject.history}</p>
                  </div>
      
                  <div className='project-view__tech-used-wrapper'>
                    <h4>{selectedProject.type == 'development' ? 'Language Used':'Technology Used'}</h4>
                    <div className='project-view__tech-icons-wrapper'>
                      {selectedProject.techUsed?.map((tech, index) => (
                        <img src={tech} key={index} className='project-view__tech-icons' />
                      ))}
                    </div>
                  </div>
      
                  <div className='project-view__account-wrapper'>
                    <h4>Guest Account</h4>
                    {selectedProject.account ? (
                      <div style={{ display: 'flex', flexDirection: 'column', paddingLeft: '1rem', marginTop: '0.5rem' }}>
                        <p>Username: {selectedProject.account.username}</p>
                        <p>Password: {selectedProject.account.password}</p>
                      </div>
                    ) : (
                        <div style={{ display: 'flex', flexDirection: 'column', paddingLeft: '1rem', marginTop: '0.5rem' }}>
                            <p>Account Not Needed</p>
                        </div>
                    )}
                  </div>
      
                  <div className='project-view__note-wrapper'>
                    <h4>Note</h4>
                    <div style={{ display: 'flex', flexDirection: 'column', paddingLeft: '1rem', marginTop: '0.5rem' }}>
                      <p>{selectedProject.note || 'No additional notes available.'}</p>
                    </div>
                  </div>
      
                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'flex-end',
                      gap: '1rem',
                      marginTop: '1rem',
                    }}
                  >
                    <PrimaryButtonPrefab label={<><i className="fa-solid fa-chevron-left"></i> Back</>} 
                        onClick={() => navigate('/')} 
                    />
                    <PrimaryButtonPrefab 
                        label={<>{selectedProject.type == 'development' ? 'Visit Web App':'Visit Design'} 
                                <i className="fa-solid fa-caret-right"></i></>
                            } 
                        onClick={() => window.open(selectedProject.link, '_blank')} 
                    />
                  </div>
                </div>
              </>
            ) : (
              <p>Loading project details or project not found.</p>
            )}
          </div>
        </div>
      )
}
