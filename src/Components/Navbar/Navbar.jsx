import './Navbar.css'

export default function Navbar() {
  return (
    <div className="fixed-top py-3">
      <div className="container">
        <div className="d-flex justify-content-between">
          
          <a href="#home" className="text-white mx-3 pb-2 fw-bold logo">
            <span className="text-color">Portfolio</span> | Hadeel
          </a>

          <div className="d-flex justify-content-around">
            <a className="mx-3 pb-2 nav-style navlink" href="#home">Home</a>
            <a className="mx-3 pb-2 nav-style navlink" href="#about">About</a>
            <a className="mx-3 pb-2 nav-style navlink" href="#skills">Skills</a>
            <a className="mx-3 pb-2 nav-style navlink" href="#education">Education</a>
            <a className="mx-3 pb-2 nav-style navlink" href="#projects">Projects</a>
            <a className="mx-3 pb-2 nav-style navlink" href="#contact">Contact</a>
          </div>

        </div>
      </div>
    </div>
  );
}