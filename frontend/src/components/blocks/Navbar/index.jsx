"use client";
import Link from "next/link";

export default function Navbar() {
  return (
    // <nav className="navbar navbar-expand-lg navbar-light bg-light shadow-sm">
    //   <div className="container-fluid">
    //     <Link className="navbar-brand fw-bold" href="/">
    //       GM
    //     </Link>

    //     {/* Botão do menu mobile */}
    //     <button
    //       className="navbar-toggler"
    //       type="button"
    //       data-bs-toggle="collapse"
    //       data-bs-target="#navbarNav"
    //       aria-controls="navbarNav"
    //       aria-expanded="false"
    //       aria-label="Alternar navegação"
    //     >
    //       <span className="navbar-toggler-icon"></span>
    //     </button>

    //     {/* Links do menu */}
    //     <div className="collapse navbar-collapse" id="navbarNav">
    //       <ul className="navbar-nav ms-auto">
    //         <li className="nav-item">
    //           <Link className="nav-link active" aria-current="page" href="/">
    //             Início
    //           </Link>
    //         </li>
    //         <li className="nav-item">
    //           <Link className="nav-link" href="/features">
    //             Recursos
    //           </Link>
    //         </li>
    //         <li className="nav-item">
    //           <Link className="nav-link" href="/pricing">
    //             Planos
    //           </Link>
    //         </li>
    //         <li className="nav-item">
    //           <Link className="nav-link" href="/contact">
    //             Contato
    //           </Link>
    //         </li>
    //       </ul>

    //       {/* Botão de login (exemplo) */}
    //       <div className="d-flex ms-lg-3 mt-2 mt-lg-0">
    //         <Link href="/login" className="btn btn-outline-primary">
    //           Entrar
    //         </Link>
    //       </div>
    //     </div>
    //   </div>
    // </nav>


    <>
      {/*Main Navigation*/}
      <header>
        {/* Sidenav */}
        <div
          id="sidenav-1"
          className="sidenav"
          data-mdb-sidenav-init=""
          data-mdb-color="dark"
          role="navigation"
          data-mdb-hidden="false"
          data-mdb-accordion="true"
        >
          <a
            className="d-flex justify-content-center py-3"
            href="#!"
            data-mdb-ripple-init=""
            data-mdb-ripple-color="primary"
          >
            <img
              id="MDB-logo"
              src="https://mdbootstrap.com/wp-content/uploads/2018/06/logo-mdb-jquery-small.png"
              alt="MDB Logo"
              draggable="false"
              height={25}
            />
          </a>
          <ul className="sidenav-menu">
            <li className="sidenav-item">
              <a className="sidenav-link active">
                <i className="fas fa-home fa-fw me-3" />
                <span>Home</span>
              </a>
            </li>
            <li className="sidenav-item">
              <a className="sidenav-link">
                <i className="fas fa-fire fa-fw me-3" />
                <span>Trending</span>
              </a>
            </li>
            <li className="sidenav-item">
              <a className="sidenav-link">
                <i className="fab fa-youtube-square fa-fw me-3" />
                <span>Subscriptions</span>
              </a>
            </li>
          </ul>
          <hr />
          <ul className="sidenav-menu">
            <li className="sidenav-item">
              <a className="sidenav-link">
                <i className="fas fa-caret-square-right fa-fw me-3" />
                <span>Library</span>
              </a>
            </li>
            <li className="sidenav-item">
              <a className="sidenav-link">
                <i className="fas fa-history fa-fw me-3" />
                <span>History</span>
              </a>
            </li>
            <li className="sidenav-item">
              <a className="sidenav-link">
                <i className="far fa-caret-square-right fa-fw me-3" />
                <span>Your videos</span>
              </a>
            </li>
            <li className="sidenav-item">
              <a className="sidenav-link">
                <i className="fas fa-clock fa-fw me-3" />
                <span>Watch later</span>
              </a>
            </li>
            <li className="sidenav-item">
              <a className="sidenav-link">
                <i className="fas fa-thumbs-up fa-fw me-3" />
                <span>Liked videos</span>
              </a>
            </li>
          </ul>
          <hr />
          <ul className="sidenav-menu">
            <h6 className="text-muted text-uppercase ps-4">Subscriptions</h6>
            <li className="sidenav-item">
              <a className="sidenav-link">
                <img
                  src="https://mdbootstrap.com/img/Photos/Avatars/img (31).jpg"
                  className="rounded-circle me-3"
                  height={25}
                  alt=""
                  loading="lazy"
                />
                <span>The Jazz Hop Cafe</span>
              </a>
            </li>
            <li className="sidenav-item">
              <a className="sidenav-link">
                <img
                  src="https://mdbootstrap.com/img/Photos/Avatars/img (32).jpg"
                  className="rounded-circle me-3"
                  height={25}
                  alt=""
                  loading="lazy"
                />
                <span>MDB Youth</span>
              </a>
            </li>
            <li className="sidenav-item">
              <a className="sidenav-link">
                <img
                  src="https://mdbootstrap.com/img/Photos/Avatars/img (33).jpg"
                  className="rounded-circle me-3"
                  height={25}
                  alt=""
                  loading="lazy"
                />
                <span>Travels by Bus Around the World</span>
              </a>
            </li>
            <li className="sidenav-item">
              <a className="sidenav-link">
                <img
                  src="https://mdbootstrap.com/img/Photos/Avatars/img (30).jpg"
                  className="rounded-circle me-3"
                  height={25}
                  alt=""
                  loading="lazy"
                />
                <span>The Awesome</span>
              </a>
            </li>
            <li className="sidenav-item">
              <a className="sidenav-link">
                <img
                  src="https://mdbootstrap.com/img/Photos/Avatars/img (28).jpg"
                  className="rounded-circle me-3"
                  height={25}
                  alt=""
                  loading="lazy"
                />
                <span>SheriffUSA</span>
              </a>
            </li>
            <li className="sidenav-item">
              <a
                className="sidenav-link"
                data-mdb-collapse-init=""
                role="button"
                aria-expanded="false"
                aria-controls="collapseExample"
              >
                <i className="fas fa-chevron-down fa-fw me-3" />
                <span>Show 2 more</span>
              </a>
            </li>
          </ul>
          <hr />
          <ul className="sidenav-menu">
            <h6 className="text-muted text-uppercase ps-4">More from youtube</h6>
            <li className="sidenav-item">
              <a className="sidenav-link">
                <i className="fab fa-youtube fa-fw me-3" />
                <span>YouTube Premium</span>
              </a>
            </li>
            <li className="sidenav-item">
              <a className="sidenav-link">
                <i className="fas fa-film fa-fw me-3" />
                <span>Movies</span>
              </a>
            </li>
            <li className="sidenav-item">
              <a className="sidenav-link">
                <i className="fas fa-gamepad fa-fw me-3" />
                <span>Gaming</span>
              </a>
            </li>
            <li className="sidenav-item">
              <a className="sidenav-link">
                <i className="fas fa-broadcast-tower fa-fw me-3" />
                <span>Live</span>
              </a>
            </li>
          </ul>
          <hr />
          <ul className="sidenav-menu">
            <li className="sidenav-item">
              <a className="sidenav-link">
                <i className="fas fa-cog fa-fw me-3" />
                <span>Settings</span>
              </a>
            </li>
            <li className="sidenav-item">
              <a className="sidenav-link">
                <i className="fas fa-flag fa-fw me-3" />
                <span>Report history</span>
              </a>
            </li>
            <li className="sidenav-item">
              <a className="sidenav-link">
                <i className="fas fa-question-circle fa-fw me-3" />
                <span>Help</span>
              </a>
            </li>
            <li className="sidenav-item">
              <a className="sidenav-link">
                <i className="fas fa-comment-alt fa-fw me-3" />
                <span>Send feedback</span>
              </a>
            </li>
          </ul>
          <hr />
          <div className="ps-4 mb-3">
            <a href="" className="text-body small me-3">
              About
            </a>
            <a href="" className="text-body small me-3">
              Press
            </a>
            <a href="" className="text-body small me-3">
              Copyright
            </a>
            <a href="" className="text-body small me-3">
              Contact us
            </a>
            <a href="" className="text-body small me-3">
              Creators
            </a>
            <a href="" className="text-body small me-3">
              Advertise
            </a>
            <a href="" className="text-body small me-3">
              Developers
            </a>
          </div>
          <div className="ps-4 mb-4 pb-2">
            <a href="" className="text-body small me-3">
              Terms
            </a>
            <a href="" className="text-body small me-3">
              Privacy
            </a>
            <a href="" className="text-body small me-3">
              Policy &amp; Safety
            </a>
            <a href="" className="text-body small me-3">
              How YouTube works
            </a>
            <a href="" className="text-body small me-3">
              Test new features
            </a>
          </div>
          <p className="small text-muted ps-4">© 2020 MDBootstrap</p>
        </div>
        {/* Sidenav */}
        {/* Navbar */}
        <nav
          id="main-navbar"
          className="navbar navbar-expand-lg navbar-light bg-white fixed-top"
        >
          {/* Container wrapper */}
          <div className="container-fluid">
            {/* Toggler */}
            <button
              data-mdb-toggle="sidenav"
              data-mdb-target="#sidenav-1"
              className="btn shadow-0 p-0 me-3 d-block d-xxl-none"
              aria-controls="#sidenav-1"
              aria-haspopup="true"
            >
              <i className="fas fa-bars fa-lg" />
            </button>
            {/* Search form */}
            <form className="d-none d-md-flex justify-content-center mx-auto input-group w-auto my-auto">
              <input
                autoComplete="off"
                type="search"
                className="form-control rounded"
                placeholder="Search"
                style={{ minWidth: 225 }}
              />
              <span className="input-group-text border-0">
                <i className="fas fa-search" />
              </span>
            </form>
            {/* Right links */}
            <ul className="navbar-nav d-flex align-items-center flex-row">
              <li className="nav-item">
                <a
                  className="nav-link me-3 py-1"
                  href="#"
                  data-mdb-toggle="tooltip"
                  title="Create"
                >
                  <i className="fas fa-video" />
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link me-3 py-1"
                  href="#"
                  data-mdb-toggle="tooltip"
                  title="YouTube apps"
                >
                  <i className="fas fa-th" />
                </a>
              </li>
              <li className="nav-item me-3">
                <a
                  className="nav-link py-1"
                  href="#"
                  data-mdb-toggle="tooltip"
                  title="Notifications"
                >
                  <i className="fas fa-bell" />
                </a>
              </li>
              {/* Avatar */}
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle hidden-arrow d-flex align-items-center py-1"
                  href="#"
                  id="navbarDropdownMenuLink"
                  role="button"
                  data-mdb-dropdown-init=""
                  aria-expanded="false"
                >
                  <img
                    src="https://mdbootstrap.com/img/Photos/Avatars/img (31).jpg"
                    className="rounded-circle"
                    height={30}
                    alt=""
                    loading="lazy"
                  />
                </a>
                <ul
                  className="dropdown-menu dropdown-menu-end"
                  aria-labelledby="navbarDropdownMenuLink"
                  style={{ minWidth: "19rem" }}
                >
                  <li>
                    <div className="px-3 pt-3 d-flex">
                      <img
                        src="https://mdbootstrap.com/img/Photos/Avatars/img (31).jpg"
                        className="rounded-circle me-3"
                        height={40}
                        alt=""
                        loading="lazy"
                      />
                      <div>
                        <h6 className="mb-0">Marie Campbell</h6>
                        <p className="mb-2">mariecampbell@example.com</p>
                        <a className="mb-0" href="">
                          Manage your Google Account
                        </a>
                      </div>
                    </div>
                    <hr className="mb-2" />
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      <i className="fas fa-user-circle fa-fw me-3" />
                      <span>Your channel</span>
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      <i className="fas fa-dollar-sign fa-fw me-3" />
                      <span>Paid memberships</span>
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      <i className="fas fa-play-circle fa-fw me-3" />
                      <span>YouTube Studio</span>
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      <i className="fas fa-users-cog fa-fw me-3" />
                      <span>Switch account</span>
                      <i className="fas fa-chevron-right float-end mt-1" />
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      <i className="fas fa-sign-out-alt me-3" />
                      <span>Sign out</span>
                    </a>
                  </li>
                  <hr className="my-2" />
                  <li>
                    <a className="dropdown-item" href="#">
                      <i className="fas fa-sun fa-fw me-3" />
                      <span>Appearance: Device theme</span>
                      <i className="fas fa-chevron-right float-end mt-1" />
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      <i className="fas fa-language fa-fw me-3" />
                      <span>Language: English</span>
                      <i className="fas fa-chevron-right float-end mt-1" />
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      <i className="fas fa-globe fa-fw me-3" />
                      <span>Location: United Kingdom</span>
                      <i className="fas fa-chevron-right float-end mt-1" />
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      <i className="fas fa-cog fa-fw me-3" />
                      <span>Settings</span>
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      <i className="fas fa-shield-alt fa-fw me-3" />
                      <span>Your data in YouTube</span>
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      <i className="fas fa-question-circle fa-fw me-3" />
                      <span>Help</span>
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      <i className="fas fa-comment-alt fa-fw me-3" />
                      <span>Send feedback</span>
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      <i className="fas fa-keyboard fa-fw me-3" />
                      <span>Keyboard shortcuts</span>
                    </a>
                  </li>
                  <hr className="my-2" />
                  <li>
                    <a className="dropdown-item mb-2" href="#">
                      <span>Restricted Mode: Off</span>
                      <i className="fas fa-chevron-right float-end mt-1" />
                    </a>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
          {/* Container wrapper */}
        </nav>
        {/* Navbar */}
      </header>
      {/*Main Navigation*/}
    </>

  );
}
