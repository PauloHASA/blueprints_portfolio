import React from "react";

import "../style/components/LandingPage.css";

function LandingPage() {


    return (
        <div className="default-auth-page">

            <div className="row">
                <div className="col central-apresentation-container">
                    <h1>
                        A primeira e maior plataforma Portifolio
                        e cupons de desconto do mundo
                    </h1>
                    <h2>
                        Conecte-se com milhares de arquitetos, designers
                        de interiores, designers, paisagistas, construtoras,
                        serviços, lojas, artistas, milhares de empresas do
                        seguimento através de seus portfolios.
                    </h2>
                    <h3>
                        Conecte-se , se relacione, comunique-se
                    </h3>

                    <button
                        className="default-btn"
                    >
                        Planos de assinatura
                    </button>

                </div>
                <div className="col"></div>
            </div>

            <button className="seeAll-Projecs">
                <i className="bi bi-arrow-down"></i>
                Ver projetos
            </button>
        </div>
    );
}

export default LandingPage;