import logo from "./assets/tri.png";

export default function Header() {
  return (
    <nav className="navbar bg-light mb-4 p-0 navbar-expand{-sm|-md|-lg|-xl|-xxl}">
      <div className="container">
        <a className="navbar-brand" href="/">
          <div className="d-flex">
            <img src={logo} alt="logo" className="mr-2" />
            <div>ProjectMgmt</div>
          </div>
        </a>
      </div>
    </nav>
  );
}
