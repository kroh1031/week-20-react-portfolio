const NavBar = () => {
  return (
    <nav class="navbar navbar-expand-lg navbar-dark bg-primary p-3">
    <div class="container-fluid">
      <a class="navbar-brand" href="#home">KAREN ROH</a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarColor01"
        aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse justify-content-end" id="navbarColor01">
        <ul class="navbar-nav">
          <li class="nav-item">
            <a class="nav-link active" href="#about">About Me
              <span class="visually-hidden">(current)</span>
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#projects">Projects</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#contact">Contact Me</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
  )
}


export default NavBar;
