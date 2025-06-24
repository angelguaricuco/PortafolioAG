import React from 'react'
import './Projects.css'


function Projects() {
  return (
	<>
  {/* Primary project */}
	  <div className='projects_card'>
		<img src="../public/img/pokedex.png" alt="PokeDex" title="PokeDex" className='img'/>
	  
		<div className="projects__info">
		  <h3 className="projects__name">°1- PokeDex</h3>
		  <p className="projects__description">
			Una PokeDex interactiva y minimalista que permite a los usuarios explorar
      información detallada sobre Pokémon, incluyendo sus habilidades, tipos y estadísticas.
		  </p>

		  <div className="projects__buttons">
			<a href="https://poke-dex-ag.netlify.app/" target="_blank" rel="noopener noreferrer">
        <button className="btn projects__button" type="button">
          Ver Proyecto
        </button>
      </a>
			<a href="https://github.com/angelguaricuco/PokeDex" target="_blank" rel="noopener noreferrer">
        <button className="btn projects__button" type="button">
          Ver Código
        </button>
      </a>
		  </div>
		</div>
	  </div>
    {/* Second project */}
    <div className='projects_card'>
		<img src="../public/img/appclimas.png" alt="App del Clima" title="App Clima" className='img'/>
	  
		<div className="projects__info">
		  <h3 className="projects__name">°2- App Clima</h3>
		  <p className="projects__description">
			Es una aplicación web que permite a los usuarios consultar el clima actual
      y pronósticos futuros de diferentes ubicaciones utilizando la API de OpenWeatherMap.
		  </p>

		  <div className="projects__buttons">
			<a href="https://weatherapp-adgr.netlify.app/" target="_blank" rel="noopener noreferrer">
        <button className="btn projects__button" type="button">
          Ver Proyecto
        </button>
      </a>
			<a href="https://github.com/angelguaricuco/Clima" target="_blank" rel="noopener noreferrer">
        <button className="btn projects__button" type="button">
          Ver Código
        </button>
      </a>
		  </div>
		</div>
	  </div>
    {/* Third project */}
 <div className='projects_card'>
		<img src="../public/img/rickandmortys.png" alt="Rick And Morty" title="App Clima" className='img'/>
	  
		<div className="projects__info">
		  <h3 className="projects__name">°3- Rick and Morty</h3>
		  <p className="projects__description">
			Es una aplicación web que permite a los usuarios explorar personajes, episodios y ubicaciones del universo de Rick and Morty,
      utilizando la API de Rick and Morty para obtener datos actualizados.
		  </p>

		  <div className="projects__buttons">
			<a href="https://rickandmortyapp-ag.netlify.app/" target="_blank" rel="noopener noreferrer">
        <button className="btn projects__button" type="button">
          Ver Proyecto
        </button>
      </a>
			<a href="https://github.com/angelguaricuco/RIckAndMortyApp" target="_blank" rel="noopener noreferrer">
        <button className="btn projects__button" type="button">
          Ver Código
        </button>
      </a>
		  </div>
		</div>
	  </div>

    {/* Fourth project*/}
    <div className='projects_card'>
		<img src="../public/img/fortunecookiee.png" alt="Galleta de la Fortuna" title="App Clima" className='img'/>
	  
		<div className="projects__info">
		  <h3 className="projects__name">°4- Galleta de la Fortuna</h3>
		  <p className="projects__description">
			Es una aplicación web que genera frases aleatorias de motivación y reflexión,
      brindando a los usuarios una dosis diaria de inspiración y positividad.
		  </p>

		  <div className="projects__buttons">
			<a href="https://galleta-de-la-fortuna-ag.netlify.app" target="_blank" rel="noopener noreferrer">
        <button className="btn projects__button" type="button">
          Ver Proyecto
        </button>
      </a>
			<a href="https://github.com/angelguaricuco/FortuneCookie" target="_blank" rel="noopener noreferrer">
        <button className="btn projects__button" type="button">
          Ver Código
        </button>
      </a>
		  </div>
		</div>
	  </div>
    <div className='projects_card'>
		<img src="../public/img/primerportafolioo.png" alt="Primer portafolio" title="App Clima" className='img'/>
	  
		<div className="projects__info">
		  <h3 className="projects__name">°5- Primer Portafolio</h3>
		  <p className="projects__description">
      (Fue mi primer portafolio (No esta actualizado))
			Es un portafolio personal que muestra mis habilidades, proyectos y experiencia como desarrollador web,
      permitiendo a los visitantes conocer más sobre mi trabajo y contactar conmigo.
		  </p>

		  <div className="projects__buttons">
			<a href="https://portfolio-angel-guaricuco.netlify.app/#home" target="_blank" rel="noopener noreferrer">
        <button className="btn projects__button" type="button">
          Ver Proyecto
        </button>
      </a>
			<a href="https://github.com/angelguaricuco/PortfolioFinished" target="_blank" rel="noopener noreferrer">
        <button className="btn projects__button" type="button">
          Ver Código
        </button>
      </a>
		  </div>
		</div>
	  </div>
	 
	</>
  );
}

export default Projects
