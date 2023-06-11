import './Banner.css'
import Particless from "../../components/Particles/Particles";
import imegen from '../../Assets/image-pc.svg';

const Banner = () =>{
    
    const scrollToSection = (sectionId) => {
        const section = document.getElementById(sectionId);
        if (section) {
          window.scrollTo({
            top: section.offsetTop,
            behavior: 'smooth'
          });
        }
      };
    

    return(
        <section className='container-banner' id="inicio">
            <Particless />
            <div className='bienvenido'>
                <span className='portafolio'> Bienvenido a mi Portafolio! </span>
                <h1 className='title'>¡Hola! soy seba, Desarrollador Web</h1>
                <p className='parrafo'>Comprometido y apasionado, con una gran capacidad y deseo de aprender nuevas habilidades y enfrentar desafíos de manera efectiva. Me dedico de manera constante a encontrar soluciones a cualquier problema que se presente. Esta dedicación y perseverancia me ayudan a llevar adelante y culminar mis proyectos con éxito.</p>
                <button class="btnn" type="button" onClick={() => scrollToSection('contact')}>
                    <strong> ESCRIBEME! </strong>
                    <div id="container-stars">
                        <div id="stars"></div>
                    </div>

                    <div id="glow">
                        <div class="circle"></div>
                        <div class="circle"></div>
                    </div>
                </button>

                
            </div>
            <div className='conteiner-image'>
                <img src={imegen} alt="" className='imagenn'/>
            </div>

        </section>
        
    )
}

export default Banner;