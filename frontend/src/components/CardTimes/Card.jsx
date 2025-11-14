import './card.css'

export default function Card({
	pessoa
}) {
	return (
		<div className="card-funcionario text-center bg-white p-3 shadow rounded">
			<div className="overflow-hidden z-index-1 position-relative px-4">
				<img
					className="rounded-circle bordas2px bordaAzulGM border-4"
					src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"
					alt=""
				/>
			</div>

			<div className=" rounded-3   mt-n3 card-body">
				<h6 className="fw-700 dark-color mb-1">{pessoa.nome}</h6>
				<small>{
					pessoa.tipo === 'ft' ? ('Facilitador de time') : ('Membro de time')
				}</small>

				<div className="pt-2 card-icons">
					<a className="icon-sm bg-primary rounded-circle me-1 text-white" href="">
						<i className="bi bi-envelope"></i>
					</a>

					<a className="icon-sm bg-primary rounded-circle me-1 text-white" href="">
						<i className="bi bi-linkedin"></i>
					</a>

					<a className="icon-sm bg-primary rounded-circle me-1 text-white" href="">
						<i className="bi bi-telephone"></i>
					</a>
				</div>
			</div>
		</div>
	);
}
