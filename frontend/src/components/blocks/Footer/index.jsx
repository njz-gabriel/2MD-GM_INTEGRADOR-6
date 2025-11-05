"use client";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-light text-dark mt-5 border-top">
      <div className="container py-4">
        <div className="row">
          {/* Coluna 1 - Marca e descrição */}
          <div className="col-md-4 mb-3">
            <h5 className="fw-bold">GM</h5>
            <p className="small text-muted">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio, fuga earum temporibus odit unde reiciendis sequi nulla repudiandae perspiciatis doloribus! Tempore est quae atque illum distinctio ratione a asperiores molestiae!
            </p>
          </div>

          {/* Coluna 2 - Links */}
          <div className="col-md-4 mb-3">
            <h6 className="fw-bold mb-3">Links úteis</h6>
            <ul className="list-unstyled">
              <li>
                <Link href="/" className="text-decoration-none text-dark">
                  Início
                </Link>
              </li>
              <li>
                <Link href="/features" className="text-decoration-none text-dark">
                  Recursos
                </Link>
              </li>
              <li>
                <Link href="/pricing" className="text-decoration-none text-dark">
                  Planos
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-decoration-none text-dark">
                  Contato
                </Link>
              </li>
            </ul>
          </div>

          {/* Coluna 3 - Redes sociais */}
          <div className="col-md-4 mb-3">
            <h6 className="fw-bold mb-3">Siga-nos</h6>
            <div className="d-flex gap-3">
              <Link
                href="https://facebook.com"
                className="text-dark fs-5"
                target="_blank"
              >
                <i className="bi bi-facebook"></i>
              </Link>
              <Link
                href="https://instagram.com"
                className="text-dark fs-5"
                target="_blank"
              >
                <i className="bi bi-instagram"></i>
              </Link>
              <Link
                href="https://twitter.com"
                className="text-dark fs-5"
                target="_blank"
              >
                <i className="bi bi-twitter"></i>
              </Link>
              <Link
                href="https://linkedin.com"
                className="text-dark fs-5"
                target="_blank"
              >
                <i className="bi bi-linkedin"></i>
              </Link>
            </div>
          </div>
        </div>

        <hr />

        {/* Linha inferior */}
        <div className="text-center small text-muted">
          © {new Date().getFullYear()} GM — Todos os direitos reservados.
        </div>
      </div>
    </footer>
  );
}
