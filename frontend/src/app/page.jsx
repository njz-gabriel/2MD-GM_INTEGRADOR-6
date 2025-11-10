import Image from "next/image";
import './main.css';

export default function Home() {
	return (<>
		{/* Header */}
		<header className="col-12 d-flex justify-content-center justify-content-md-between px-3 py-2 bordas2px border-top-0 border-start-0 border-end-0 bordaAzulGM align-items-center">
			<div className="fw-bold fs-5" style={{textTransform:'uppercase'}}>Sistemas para gestão de treinamentos</div>
			<a className="btn btn-azulGM" href="/login">Fazer login</a>
		</header>

		<header className="fundoAzulGM col-12 d-flex justify-content-center justify-content-md-between px-3 py-2 bordas2px border-top-0 border-start-0 border-end-0 bordaAzulGM align-items-center">
			<div className="fw-bold fs-5" style={{textTransform:'uppercase'}}>Sistemas para gestão de treinamentos</div>
			<a className="btn btn-White" href="/login">Fazer login</a>
		</header>

		{/* Corpo */}
		<div className="container d-md-flex justify-content-between align-items-center py-5">
			<div className='col-md-6 d-flex flex-column text-center gap-3 my-4'>
				{/* Titulo */}
				<div className="px-3 pb-1 bordas2px border-top-0 border-start-0 border-end-0 bordaAzulGM fs-1">
					<h1 className="p-0 m-0" style={{textTransform:'capitalize'}}>Sistemas para gestão de treinamentos</h1>
				</div>

				{/* Subtitulo */}
				<div className="fs-3">
					<h4 className="p-0 m-0" style={{lineHeight:'2.3rem'}}>
						Projetado de acordo com a necessidade do <span className="operador text-white px-2 py-1">operador</span>
					</h4>
				</div>

				<div>
					<p className="p-0 m-0 text-secondary">
						Centralize a gestão de competências e treinamentos da sua equipe. <br />
						Solicite novos usuários, acompanhe o progresso e acesse relatórios e dashboards <br />
						Tome decisões mais estratégicas.
					</p>
				</div>
			</div>

			{/* Imagem */}
			<div className="col-md-4 d-flex justify-content-center align-itens-center">
					<svg width="320px" height="100%" alt="GM Logo" title="GM" viewBox="0 0 54 55" fill="none" xmlns="http://www.w3.org/2000/svg" data-di-res-id="a27f4106-d12b074b" data-di-rand="1762433650408"><path d="M24.6285 40.4839H43.9691V37.0484H24.6285V40.4839ZM50.5549 46.4516V8.54839C50.5549 5.51613 48.9846 3.93548 45.9401 3.93548H8.04392C4.99941 3.93548 3.42908 5.51613 3.42908 8.54839V46.4032C3.42908 49.4355 4.99941 51.0161 8.04392 51.0161H45.892C48.9846 51.0645 50.5549 49.5 50.5549 46.4677V46.4516ZM53.984 46.7903C53.984 51.4516 50.9395 54.5 46.2766 54.5H7.70742C3.04451 54.5 0 51.4677 0 46.7903V8.20968C0 3.53226 3.04451 0.5 7.70742 0.5H46.2926C50.9555 0.5 54 3.53226 54 8.20968V46.7903H53.984ZM17.7223 17.8871H15.527C14.6777 17.8387 14.0047 18.5 13.9567 19.2903V28.1774C13.8926 29.0161 14.5816 29.7581 15.4148 29.7581H17.7223V17.8871ZM21.6641 14.5161V33.9839C21.6641 36.2903 20.6546 40.5161 13.9567 40.5161H12.3223V37.0806H13.9567C16.6006 37.0323 17.6742 35.9032 17.7223 33.9839V33.1936H14.4053C12.0979 33.3065 10.127 31.5645 10.0148 29.2581V18.9032C10.0148 16.2581 11.7614 14.5161 14.4053 14.5161H21.6641ZM43.9852 18.9032V33.1936H40.0433V19.4677C40.1074 18.6774 39.4825 17.9516 38.6973 17.8871H36.2777V33.1774H32.3359V17.8871H28.5703V33.1774H24.6285V14.5H39.5947C42.3507 14.5 43.9852 16.1935 43.9852 18.8871V18.9032Z" fill="#0956FF"></path></svg>
			</div>
		</div>

		<div className="container d-md-flex justify-content-between align-items-center py-5">
			<div className='col-md-6 d-flex flex-column text-center gap-3 my-4'>
				<img src='/img/img1.svg' className="imgCompleta"></img>
			</div>

			<div className='col-md-5 rounded overflow-hidden d-flex flex-column text-center gap-3 my-4'>
				<img src='/img/img2.svg' className="imgCompleta"></img>
			</div>
		</div>

		{/* Banner */}
		<div>
			<Image
				src="/img/banner1.svg"
				width={1920}
				height={628}
				alt="Imagem para banner 1" />
		</div>
	</>
	);
}
