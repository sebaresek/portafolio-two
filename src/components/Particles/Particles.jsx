import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

const Particless = () =>{
    const particlesInit = async (main) => {
        console.log(main);

        await loadFull(main);
    };
    
      return (
    
           <Particles
          id="tsparticles"
          init={particlesInit}
    
          options={{
            "fullScreen": {
                "enable": true,
                "zIndex": -1
            },
            "particles": {
                "number": {
                    "value": 45,
                    "density": {
                        "enable": true,
                        "value_area": 700
                    }
                },
                "color": {
                    "value": "#fff"
                },
                "shape": {
                    "type": "edge",
                    "options": {
                        "sides": 4
                    }
                },
                "opacity": {
                    "value": 0.5,
                    "random": false,
                    "anim": {
                        "enable": false,
                        "speed": 2,
                        "opacity_min": 0,
                        "sync": false
                    }
                },
                "size": {
                    "value": 3,
                    "random": false,
                    "anim": {
                        "enable": false,
                        "speed": 20,
                        "size_min": 0,
                        "sync": false
                    }
                },
                "rotate": {
                    "value": 4,
                    "random": true,
                    "direction": "clockwise",
                    "animation": {
                        "enable": true,
                        "speed": 25,
                        "sync": false
                    }
                },
                "line_linked": {
                    "enable": true,
                    "distance": 150,
                    "color": "#ffffff",
                    "opacity": 0.6,
                    "width": 0.9
                },
                "move": {
                    "enable": true,
                    "speed": 3.5,
                    "direction": "top",
                    "random": false,
                    "straight": false,
                    "out_mode": "out",
                    "bounce": false,
                    "attract": {
                        "enable": false,
                        "rotateX": 1200,
                        "rotateY": 1200
                    }
                }
            },
            "interactivity": {
                "detect_on": 'canvas',
                "events": {
                    "onhover": {
                        "enable": true,
                        "mode": "grab"
                    },
                    "onclick": {
                        "enable": true,
                        "mode": "push"
                    },
                    "resize": true
                },
                "modes": {
                    "grab": {
                        "distance": 100,
                        "line_linked": {
                            "opacity": 1
                        }
                    },
                    "bubble": {
                        "distance": 150,
                        "size": 80,
                        "duration": 0.4,
                        "opacity": 8,
                        "speed": 3
                    },
                    "repulse": {
                        "distance": 200,
                        "duration": 0.4,
                    },
                    "push": {
                        "particles_nb": 4
                    },
                    "remove": {
                        "particles_nb": 2
                    }
                },
                // "mouse":{}
            },
            "retina_detect": true,
            "background": {
                "color": "transparent",
                "image": "n.jpg",
                "position": "50% 50%",
                "repeat": "no-repeat",
                "size": "cover"
            }
        }}
        />
      )
}

export default Particless;