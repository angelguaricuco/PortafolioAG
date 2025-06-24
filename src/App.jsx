import './App.css';
import { GrLinkedin } from 'react-icons/gr';
import { ImGithub } from 'react-icons/im';
import { FaHtml5, FaCss3Alt, FaReact, FaWhatsapp } from 'react-icons/fa';
import { IoLogoJavascript } from 'react-icons/io';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Form from './components/Form';
import {useEffect, useMemo, useState} from 'react';
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import Projects from './components/Projects';
import Iconws from './components/iconws.jsx';




function App() {
	  const [init, setInit] = useState(false);
   useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  const particlesLoaded = (container) => {
    console.log("Particles Loaded:", container);
  };

  const options = useMemo(() => ({
    background: {
      color: "#282c34",
    },
    fpsLimit: 40,
    interactivity: {
      events: {
        onClick: { enable: true, mode: "push" },
        onHover: { enable: true, mode: "repulse" },
      },
      modes: {
        push: { quantity: 4 },
        repulse: { distance: 200, duration: 0.4 },
      },
    },
    particles: {
      color: { value: "#f1f1f1" },
      links: {
        color: "#ffffff",
        distance: 150,
        enable: true,
        opacity: 0.5,
        width: 1,
      },
      move: {
        direction: "none",
        enable: true,
        outModes: { default: "bounce" },
        random: false,
        speed: 3,
        straight: false,
      },
      number: {
        density: { enable: true, area: 1080 },
        value: 200,
      },
      opacity: {
        value: { min: 0.1, max: 0.5 },
        animation: {
          enable: true,
          speed: 1,
          minimumValue: 0.1,
        },
      },
      shape: {
        type: "circle",
      },
      size: {
        value: { min: 0.5, max: 1.5 },
        random: { enable: true },
      },
    },
    detectRetina: true,
  }), []);
	return (
		<>
		  <div className='background-intro' >
     {init && (
        <Particles
          id="tsparticles"
          options={options}
          particlesLoaded={particlesLoaded}
        />
      )}
    </div>
    <Navbar />
		<div className='whatsapp__icon'>
			<Iconws />
		</div>
		
			{/* <Header /> */}

			<main className="portafolio__main">
<section className="portafolio__intro" id='home'>
					<div className="container">
						
					<p className="social__links">
						<a
							className="linkedin__link"
							href="https://www.linkedin.com/in/angel-guaricuco/"
							target="_blank"
							rel="noopener noreferrer"
						>
							<GrLinkedin />
						</a>
						<a
							className="github__link"
							href="https://github.com/angelguaricuco"
							target="_blank"
							rel="noopener noreferrer"
						>
							<ImGithub />
						</a>
						<a
							className="whatsapp__link"
							href="https://wa.me/+584242611859"
							target="_blank"
							rel="noopener noreferrer"
						>
							<FaWhatsapp />
						</a>
					</p>
					<h1 className="portafolio__title">Soy Angel Guaricuco</h1>
					<h2 className="portafolio__subtitle">Desarrollador Web</h2>
						
					

					</div>
				
				</section>

				<section className="portafolio__about" id='about-me'>
					<h2 className="portafolio__subtitle2">Sobre mi</h2>
					<div className="container_about">
						<img
							className="portafolio__image"
							src="../img/iconpage.png"
							alt="Imagen de perfil"
						/>

						<p className="portafolio__description">
							Soy un desarrollador web apasionado por la creación de
							aplicaciones y sitios web. Me encanta aprender nuevas tecnologías
							y mejorar mis habilidades constantemente. En este portafolio
							encontrarás algunos de mis proyectos más destacados.
						</p>
					</div>
				</section>
				<section className="portafolio__skills_section" id='skills'>
					<h2 className="portafolio__skills__tittle">
						ALGUNAS DE LAS TECNOLOGIAS QUE UTILIZO
					</h2>

					<div className="portafolio__skills">
						<span className="portafolio__skills__text">
							<FaHtml5 className="icon" />
							HTML5
						</span>
						<span className="portafolio__skills__text">
							<FaCss3Alt className="icon" />
							CSS3
						</span>
						<span className="portafolio__skills__text">
							<IoLogoJavascript className="icon" />
							JavaScript
						</span>
						<span className="portafolio__skills__text">
							<FaReact className="icon" />
							React JS
						</span>
						<span className="portafolio__skills__text">
							<ImGithub className="icon" />
							GitHub
						</span>
					</div>
				</section>
				<section className="portafolio__projects" id='projects'>
					<span className="portafolio__projects__subtitle">Mis Proyectos</span>
					<div className="portafolio_projects_container_description">
						<p className="portafolio__projects__description">
							Este es un portafolio de ejemplo para mostrar mis habilidades y
							proyectos como desarrollador web. Aquí encontrarás información
							sobre mí, mis proyectos y cómo contactarme.
						</p>
					</div>
					<div className="portafolio__projectss">
						<Projects/>
					</div>
				</section>
        <section className="portafolio__contact" id='contact'>
          <div className="container__form2">
            
           <Form />
              </div>
           

        </section>
			</main>
			<Footer />
		</>
	);
}

export default App;
