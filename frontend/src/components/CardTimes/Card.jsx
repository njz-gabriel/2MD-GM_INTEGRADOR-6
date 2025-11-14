import './card.css'

export default function Card() {
  return (
    <div className="card-funcionario text-center">
      <div className="overflow-hidden z-index-1 position-relative px-4">
        <img
          className="rounded-circle border border-4 border-white shadow"
          src="https://bootdey.com/img/Content/avatar/avatar1.png"
          alt=""
        />
      </div>

      <div className="shadow rounded-3 bg-white p-3 mt-n3 card-body">
        <h6 className="fw-700 dark-color mb-1">Nancy Bayers</h6>
        <small>Co-Founder</small>

        <div className="pt-2 card-icons">
          <a className="icon-sm bg-primary rounded-circle me-1 text-white" href="#">
            <i className="bi bi-facebook"></i>
          </a>

          <a className="icon-sm bg-primary rounded-circle me-1 text-white" href="#">
            <i className="bi bi-twitter"></i>
          </a>

          <a className="icon-sm bg-primary rounded-circle me-1 text-white" href="#">
            <i className="bi bi-linkedin"></i>
          </a>

          <a className="icon-sm bg-primary rounded-circle me-1 text-white" href="#">
            <i className="bi bi-instagram"></i>
          </a>
        </div>
      </div>
    </div>
  );
}
