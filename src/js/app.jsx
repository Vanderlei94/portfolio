const { useState, useEffect } = React;

function Header({ onToggleTheme, darkMode }) {
  return (
    <header className="header">
      <div className="container">
        <div className="row justify-content-between alinhar-itens-no-centro">
          <a href="#">
            <h1 className="logo">VJ</h1>
          </a>
          <nav>
            <input id="menu-hamburguer" type="checkbox" />
            <label htmlFor="menu-hamburguer">
              <div className="menu">
                <span className="hamburguer"></span>
              </div>
            </label>
            <ul>
              <li><a href="#about">About Me</a></li>
              <li><a href="#skills">Skills</a></li>
              <li><a href="#projects">Projects</a></li>
            </ul>
          </nav>
          <button className="theme-toggle" onClick={onToggleTheme} aria-label="Toggle theme">
            <i className={`fas ${darkMode ? 'fa-sun' : 'fa-moon'}`}></i>
          </button>
        </div>
      </div>
    </header>
  );
}

function Home() {
  return (
    <section className="home">
      <div className="container">
        <div className="row full-screen alinhar-itens-no-centro">
          <div className="texto-home">
            <p>Hello 🖖,</p>
            <h1>I am Vanderlei Junior</h1>
            <h2>Frontend Developer</h2>
            <div className="redes-sociais">
              <a href="https://www.linkedin.com/in/vanderleidev/" className="outer-shadow" target="_blank" rel="noopener"><i className="fab fa-linkedin-in"></i></a>
              <a href="https://wa.me/351935267788?text=Hello%21%20I%20found%20your%20portfolio%20and%20would%20like%20more%20information." className="outer-shadow" target="_blank" rel="noopener"><i className="fab fa-whatsapp"></i></a>
              <a href="https://github.com/Vanderlei94" className="outer-shadow" target="_blank" rel="noopener"><i className="fab fa-github"></i></a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function About() {
  return (
    <section className="sobre-mim section" id="about">
      <div className="container">
        <div className="row">
          <div className="section-title">
            <h2>About Me</h2>
          </div>
        </div>
        <div className="row">
          <div className="imagem-sobre-mim">
            <div className="img-box inner-shadow">
              <img src="./src/imagens/perfil-portfolio.PNG" alt="Profile" className="outer-shadow" />
            </div>
          </div>
          <div className="informacoes-sobre-mim">
            <p><strong>Hello! I am Vanderlei Junior, a frontend developer in training!</strong> Technology is my passion and I believe I can add a lot of value to any team with my skills and enthusiasm.</p>
            <p>I love challenging myself with new projects and I am always willing to learn more from the obstacles I face. When needed, I search for reliable information in developer communities and Git repositories to improve my solutions.</p>
            <p>Also, I am a big fan of movies, series, and everything nerdy.</p>
            <div className="botoes">
              <a target="_blank" href="./documents/pdfs/cv.pdf" className="botao outer-shadow" rel="noopener">View my CV</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

const skills = [
  {
    icon: 'devicon-javascript-plain',
    title: 'JavaScript',
    description: 'Currently learning and exploring its fundamental concepts.'
  },
  {
    icon: 'devicon-react-original',
    title: 'React',
    description: 'Building interfaces with reusable components.'
  },
  {
    icon: 'devicon-typescript-plain',
    title: 'TypeScript',
    description: 'Adding static typing to JavaScript.'
  },
  {
    icon: 'devicon-html5-plain-wordmark',
    title: 'HTML5',
    description: 'Building semantic structures for web pages.'
  },
  {
    icon: 'devicon-css3-plain-wordmark',
    title: 'CSS3',
    description: 'Advanced styling with modern layouts and animations.'
  },
  {
    icon: 'devicon-tailwindcss-original',
    title: 'Tailwind CSS',
    description: 'Utility-first framework for rapid UI development.'
  },
  {
    icon: 'devicon-git-plain',
    title: 'Git',
    description: 'Version control and project collaboration.'
  },
  {
    icon: 'devicon-postgresql-plain',
    title: 'PostgreSQL',
    description: 'Managing relational databases.'
  },
  {
    icon: 'devicon-docker-plain',
    title: 'Docker',
    description: 'Containerizing applications.'
  },
  {
    icon: 'devicon-redux-original',
    title: 'Redux',
    description: 'Predictable state management for JavaScript apps.'
  },
  {
    icon: 'devicon-supabase-original',
    title: 'Supabase',
    description: 'Backend-as-a-Service built on PostgreSQL.'
  }
];

function Skills() {
  return (
    <section className="habilidades section" id="skills">
      <div className="container">
        <div className="row">
          <div className="section-title">
            <h2>Skills</h2>
          </div>
        </div>
        <div className="container-habilidades">
          {skills.map((skill) => (
            <div className="informacoes" key={skill.title}>
              <div className="logo">
                <i className={`devicon ${skill.icon}`}></i>
              </div>
              <h3>{skill.title}</h3>
              <p>{skill.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

const projects = [
  {
    url: 'https://vanderlei94.github.io/app-buscar-usuarios-github/',
    img: './src/imagens/app-buscar-github.png',
    alt: 'GitHub User Finder',
    title: 'GitHub User Finder',
    description: 'A small app built with JS to practice fetching a REST API and showing GitHub user info such as name, bio, followers, and repositories.'
  },
  {
    url: 'https://vanderlei94.github.io/app-gerador-de-conselhos/',
    img: './src/imagens/demo-advices.png',
    alt: 'Advice Generator',
    title: 'Random Advice Generator',
    description: 'My first JS project with a simple interface that consumes an API to display new advice every time you roll the dice.'
  },
  {
    url: 'https://vanderlei94.github.io/preview-card-nft/',
    img: './src/imagens/card-nft.gif',
    alt: 'NFT Card',
    title: 'NFT Card - Frontend Mentor',
    description: 'A challenge to reinforce HTML and CSS skills while training responsive design using pseudo-classes and pseudo-elements.'
  },
  {
    url: 'https://vanderlei94.github.io/landing-page-com-grid-agencia/',
    img: './src/imagens/agencia.gif',
    alt: 'Agency Landing',
    title: 'Agency Landing Page',
    description: 'Demonstrates CSS and HTML skills to create animations without JavaScript.'
  },
  {
    url: 'https://vanderlei94.github.io/projeto-pokedex/',
    img: './src/imagens/pokedex.gif',
    alt: 'Pokedex',
    title: 'Pokedev Pokedex',
    description: 'My first project using only CSS and HTML, which motivated me to start learning programming in depth.'
  },
  {
    url: 'https://vanderlei94.github.io/portfolio/',
    img: './src/imagens/portfolio-capa.png',
    alt: 'Old Portfolio',
    title: 'Portfolio',
    description: 'My first portfolio built only with HTML and CSS, showing my initial skills.'
  }
];

function Projects() {
  return (
    <section className="projetos section" id="projects">
      <div className="container">
        <div className="row">
          <div className="section-title">
            <h2>Projects</h2>
          </div>
        </div>
        <div className="container-projetos">
          {projects.map((project) => (
            <div className="projeto" key={project.title}>
              <a href={project.url} target="_blank" rel="noopener">
                <img src={project.img} alt={project.alt} />
                <h3>{project.title}</h3>
                <div className="informacoes-projeto">
                  <p>{project.description}</p>
                  <p>🔗 View on GitHub Pages</p>
                </div>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <h2>Send me a message!</h2>
        <div className="redes-sociais">
          <a href="https://www.linkedin.com/in/vanderleidev/" className="outer-shadow" target="_blank" rel="noopener"><i className="fab fa-linkedin-in"></i></a>
          <a href="https://wa.me/351935267788?text=Hello%21%20I%20found%20your%20portfolio%20and%20would%20like%20more%20information." className="outer-shadow" target="_blank" rel="noopener"><i className="fab fa-whatsapp"></i></a>
          <a href="https://github.com/Vanderlei94" className="outer-shadow" target="_blank" rel="noopener"><i className="fab fa-github"></i></a>
        </div>
      </div>
      <div>
        <a href="#" className="up-home"><i className="fas fa-space-shuttle"></i></a>
        <a href="#"><p>Back to top</p></a>
      </div>
    </footer>
  );
}

function App() {
  const [darkMode, setDarkMode] = useState(true);

  useEffect(() => {
    document.body.classList.toggle('dark', darkMode);
  }, [darkMode]);

  return (
    <>
      <Header onToggleTheme={() => setDarkMode(!darkMode)} darkMode={darkMode} />
      <Home />
      <About />
      <Skills />
      <Projects />
      <Footer />
    </>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
