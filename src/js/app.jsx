function App() {
  return (
    <>
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
          </div>
        </div>
      </header>

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

      <section className="habilidades section" id="skills">
        <div className="container">
          <div className="row">
            <div className="section-title">
              <h2>Skills</h2>
            </div>
          </div>
          <div className="container-habilidades">
            <div className="informacoes javascript">
              <div className="logo">
                <i className="devicon devicon-javascript-plain" id="javascript"></i>
              </div>
              <h3>JavaScript</h3>
              <p>I am starting my journey with JavaScript, exploring its basic concepts and applications. I am eager to deepen my knowledge in this powerful language.</p>
            </div>
            <div className="informacoes html">
              <div className="logo">
                <i className="devicon devicon-html5-plain-wordmark" id="html"></i>
              </div>
              <h3>HTML5</h3>
              <p>I understand the fundamentals of HTML5 and use its semantic tags to structure pages clearly.</p>
            </div>
            <div className="informacoes css">
              <div className="logo">
                <i className="devicon devicon-css3-plain-wordmark" id="css"></i>
              </div>
              <h3>CSS3</h3>
              <p>I use CSS3 to create responsive layouts and attractive designs with Flexbox and animations.</p>
            </div>
            <div className="informacoes github">
              <div className="logo">
                <i className="devicon devicon-github-original" id="github"></i>
              </div>
              <h3>GitHub</h3>
              <p>I am familiar with GitHub for hosting and sharing projects, collaborating in teams, and organizing version control.</p>
            </div>
            <div className="informacoes git">
              <div className="logo">
                <i className="devicon devicon-git-plain" id="git"></i>
              </div>
              <h3>Git</h3>
              <p>I have practical knowledge of Git and use basic commands to manage repositories and maintain version control.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="projetos section" id="projects">
        <div className="container">
          <div className="row">
            <div className="section-title">
              <h2>Projects</h2>
            </div>
          </div>
          <div className="container-projetos">
            <div className="projeto">
              <a href="https://vanderlei94.github.io/app-buscar-usuarios-github/" target="_blank" rel="noopener">
                <img src="./src/imagens/app-buscar-github.png" alt="GitHub User Finder" />
                <h3>GitHub User Finder</h3>
                <div className="informacoes-projeto">
                  <p>A small app built with JS to practice fetching a REST API and showing GitHub user info such as name, bio, followers, and repositories.</p>
                  <p>🔗 View on GitHub Pages</p>
                </div>
              </a>
            </div>
            <div className="projeto">
              <a href="https://vanderlei94.github.io/app-gerador-de-conselhos/" target="_blank" rel="noopener">
                <img src="./src/imagens/demo-advices.png" alt="Advice Generator" />
                <h3>Random Advice Generator</h3>
                <div className="informacoes-projeto">
                  <p>My first JS project with a simple interface that consumes an API to display new advice every time you roll the dice.</p>
                  <p>🔗 View on GitHub Pages</p>
                </div>
              </a>
            </div>
            <div className="projeto">
              <a href="https://vanderlei94.github.io/preview-card-nft/" target="_blank" rel="noopener">
                <img src="./src/imagens/card-nft.gif" alt="NFT Card" />
                <h3>NFT Card - Frontend Mentor</h3>
                <div className="informacoes-projeto">
                  <p>A challenge to reinforce HTML and CSS skills while training responsive design using pseudo-classes and pseudo-elements.</p>
                  <p>🔗 View on GitHub Pages</p>
                </div>
              </a>
            </div>
            <div className="projeto">
              <a href="https://vanderlei94.github.io/landing-page-com-grid-agencia/" target="_blank" rel="noopener">
                <img src="./src/imagens/agencia.gif" alt="Agency Landing" />
                <h3>Agency Landing Page</h3>
                <div className="informacoes-projeto">
                  <p>Demonstrates CSS and HTML skills to create animations without JavaScript.</p>
                  <p>🔗 View on GitHub Pages</p>
                </div>
              </a>
            </div>
            <div className="projeto">
              <a href="https://vanderlei94.github.io/projeto-pokedex/" target="_blank" rel="noopener">
                <img src="./src/imagens/pokedex.gif" alt="Pokedex" />
                <h3>Pokedev Pokedex</h3>
                <div className="informacoes-projeto">
                  <p>My first project using only CSS and HTML, which motivated me to start learning programming in depth.</p>
                  <p>🔗 View on GitHub Pages</p>
                </div>
              </a>
            </div>
            <div className="projeto">
              <a href="https://vanderlei94.github.io/portfolio/" target="_blank" rel="noopener">
                <img src="./src/imagens/portfolio-capa.png" alt="Old Portfolio" />
                <h3>Portfolio</h3>
                <div className="informacoes-projeto">
                  <p>My first portfolio built only with HTML and CSS, showing my initial skills.</p>
                  <p>🔗 View on GitHub Pages</p>
                </div>
              </a>
            </div>
          </div>
        </div>
      </section>

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
    </>
  );
}

const container = document.getElementById('root');
ReactDOM.render(<App />, container);
