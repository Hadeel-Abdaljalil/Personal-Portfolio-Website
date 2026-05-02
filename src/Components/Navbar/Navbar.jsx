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
            <a className="mx-3 pb-2 nav-style navlink active" href="#home">Home</a>
            <a className="mx-3 pb-2 nav-style navlink text-white" href="#about">About</a>
            <a className="mx-3 pb-2 nav-style navlink text-white" href="#skills">Skills</a>
            <a className="mx-3 pb-2 nav-style navlink text-white" href="#education">Education</a>
            <a className="mx-3 pb-2 nav-style navlink text-white" href="#projects">Projects</a>
            <a className="mx-3 pb-2 nav-style navlink text-white" href="#contact">Contact</a>
          </div>

        </div>
      </div>
    </div>
  );
}