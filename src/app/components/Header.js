
// 'use client'
import Image from 'next/image'
import Link from 'next/link'
import 'bootstrap/dist/css/bootstrap.css'
// import 'bootstrap/dist/js/bootstrap.min.js'


const Header = () => {

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
    <div className="container-fluid">
      
      <Link className="navbar-brand" href="/">
      <Image
      src="/ahmerflixLogo.png"
      width={100}
      height={50}
      alt="logo"
    />
      </Link>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon" />
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item">
            {/* <a className="nav-link active" aria-current="page" href="#">Home</a> */}
            <Link href="/" className="nav-link active">Home</Link>

          </li>
          <li className="nav-item">
            {/* <a className="nav-link" href="#">Link</a> */}
            <Link href="/about" className="nav-link">About</Link>
          </li>
          <li className="nav-item">
            {/* <a className="nav-link" href="#">Link</a> */}
            <Link href="/movie" className="nav-link">Movie</Link>
          </li>
          <li className="nav-item dropdown">
            <Link className="nav-link dropdown-toggle" href="/movie" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              Movie
            </Link>
            <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
              <li><a className="dropdown-item" href="#">Action</a></li>
              <li><a className="dropdown-item" href="#">Another action</a></li>
              <li><hr className="dropdown-divider" /></li>
              <li><a className="dropdown-item" href="#">Something else here</a></li>
            </ul>
          </li>
          <li className="nav-item">
          <Link href="/contact" className="nav-link">Contact Us</Link>
          </li>
        </ul>
        <form className="d-flex">
          <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
          <button className="btn btn-outline-success" type="submit">Search</button>
        </form>
      </div>
    </div>
  </nav>
  )
}

export default Header
