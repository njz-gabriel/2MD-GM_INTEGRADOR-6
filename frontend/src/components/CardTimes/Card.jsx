//exemplo de card usando Bootstrap 5
import './card.css'


export default function Card() {
  return (<>
    <div className="hover-top-in text-center">
      <div className="overflow-hidden z-index-1 position-relative px-5">
        <img
          className="rounded-circle border border-5 border-white shadow"
          src="https://bootdey.com/img/Content/avatar/avatar1.png"
          title=""
          alt=""
        />
      </div>
      <div className="mx-2 mx-xl-3 shadow rounded-3 position-relative mt-n4 bg-white p-4 pt-6 mx-4 text-center hover-top--in">
        <h6 className="fw-700 dark-color mb-1">Nancy Bayers</h6>
        <small>Co-Founder</small>
        <div className="pt-2">
          <a className="icon-sm bg-primary rounded-circle me-1 text-white" href="#">
            <i className="bi bi-facebook" />
          </a>{" "}
          <a className="icon-sm bg-primary rounded-circle me-1 text-white" href="#">
            <i className="bi bi-twitter" />
          </a>{" "}
          <a className="icon-sm bg-primary rounded-circle me-1 text-white" href="#">
            <i className="bi bi-linkedin" />
          </a>{" "}
          <a className="icon-sm bg-primary rounded-circle me-1 text-white" href="#">
            <i className="bi bi-instagram" />
          </a>
        </div>
      </div>
    </div>

  </>
  );
}