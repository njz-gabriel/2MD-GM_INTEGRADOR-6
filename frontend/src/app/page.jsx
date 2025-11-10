import Image from "next/image";
import styles from "./page.module.css";
import './main.css';

export default function Home() {
  return (<>

    <div className="subtitles fontetop size-fonte">
      <div className="border-gm-color">
        <h1>
          Sistema inovador para gestão de treinamento
        </h1>
      </div>
      <div className="d-flex justify-content-center align-items-center">
        <h1>
          {`Projetado de acordo com a`}<br />{`necessidade do `}
          <span className="fundoAzulGM operador text-white px-2">operador</span>
        </h1>
      </div>
      <div className="tamanho">
        <p>Centralize a gestão de competências e treinamentos da sua equipe.
          Solicite novos usuários, acompanhe o progresso e acesse relatórios e dashboards para decisões mais estratégicas.</p>
      </div>
      <div>
        <Image
          src="/img/fabrica.png"
          width={1920}
          height={628}
          alt="Imagem para banner 1" />
      </div>
    </div>

  </>
  );
}
