import Navbar from '../components/Navbar'

export default function Home() {
  return (
    <div>
      <section className="hero is-fullheight is-default is-bold">
        <Navbar />

        <div className="hero-body">
            <div className="container">
                <div className="columns is-vcentered">
                    <div className="column is-5 is-offset-1 landing-caption">
                        <h1 className="title is-1 is-bold is-spaced">
                            Solutions Télécom dédiées pour Entreprises
                        </h1>

                        <h2 className="subtitle is-5 is-muted">
                            Découvrez des solutions de téléphonie fixe, mobile, réseaux et Cloud pour votre entreprise à des prix compétitifs !
                        </h2>

                        <p>
                            <a className="button cta rounded primary-btn raised" href="#scroll">
                                Découvrez plus
                            </a>
                        </p>
                    </div>
                    <div className="column is-5 is-offset-1">
                        <figure className="image is-4by3">
                            <img src="/undraw_businessman_97x4.svg?v=1" alt="Description" />
                        </figure>
                    </div>
                </div>
            </div>
        </div>

        <div className="hero-foot mb-20">
            <div className="container">
                <div className="tabs is-centered">
                    <ul>
                        <li>
                            <a>
                                <img className="partner-logo" src="/3CX_logo_1.svg" />
                            </a>
                        </li>
                        <li>
                            <a>
                                <img className="partner-logo" src="/Orange_logo_1.svg" />
                            </a>
                        </li>
                        <li>
                            <a>
                                <img className="partner-logo" src="/yealink_1.svg" />
                            </a>
                        </li>
                        <li>
                            <a>
                                <img className="partner-logo" src="/sfr.svg" />
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
      </section>

      <section id="scroll" className="section section-feature-grey is-medium">
        <div className="container">
            <div className="title-wrapper has-text-centered">
                <h2 className="title is-2">Découvrez nos solutions</h2>
                <h3 className="subtitle is-5 is-muted">Nous sommes à votre disposition sur toutes les étapes de la mise en service.
                </h3>
                <div className="divider is-centered"></div>
            </div>

            <div className="content-wrapper">
                <div className="columns">
                    <div className="column is-one-third">
                        <div className="feature-card is-bordered has-text-centered revealOnScroll delay-1 animated fadeInLeft" data-animation="fadeInLeft">
                            <div className="card-title">
                                <h4>Solution Fibre Optique</h4>
                            </div>
                            <div className="card-icon">
                                <img src="/fiber.svg?v=1" />
                            </div>
                            <div className="card-text">
                                <p>Une connexion internet allant jusqu’à 10 Gbit/s.</p>
                            </div>
                            <div className="card-action">
                                <a href="/fibre/" className="button btn-align-md accent-btn raised">En savoir plus</a>
                            </div>
                        </div>
                    </div>
                    <div className="column is-one-third">
                        <div className="feature-card is-bordered has-text-centered revealOnScroll delay-1 animated fadeInLeft" data-animation="fadeInLeft">
                            <div className="card-title">
                                <h4>5G Mobile</h4>
                            </div>
                            <div className="card-icon">
                                <img src="/5g.svg?v=1" />
                            </div>
                            <div className="card-text">
                                <p>Travaillez en trés hauts débits en toute mobilité.</p>
                            </div>
                            <div className="card-action">
                                <a href="/mobile/" className="button btn-align-md accent-btn raised">En savoir plus</a>
                            </div>
                        </div>
                    </div>
                    <div className="column is-one-third">
                        <div className="feature-card is-bordered has-text-centered revealOnScroll delay-1 animated fadeInLeft" data-animation="fadeInLeft">
                            <div className="card-title">
                                <h4>Standard Téléphonique</h4>
                            </div>
                            <div className="card-icon">
                                <img src="/standard.svg?v=1" />
                            </div>
                            <div className="card-text">
                                <p>Créez de la valeur à partir de vos appels.</p>
                            </div>
                            <div className="card-action">
                                <a href="/telephonie/" className="button btn-align-md accent-btn raised">En savoir plus</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <p className="has-text-centered mt-20">
                <a className="button cta is-large rounded secondary-btn raised" href="https://oxxotelecom.com/contact">
                    Contactez-nous
                </a>
            </p>
        </div>
    </section>

    <a href="/contact">
        <img src="/ad-iphone-12-pro-max.png?v=1" style={{width: '100%', height: 'auto'}} />
    </a>

    <a href="/contact">
        <img src="/ad-t46s.png?v=1" style={{width: '100%', height: 'auto'}} />
    </a>

    <a href="/contact">
        <img src="/ad-t41s.png?v=1" style={{width: '100%', height: 'auto'}} />
    </a>

      <section className="section section-feature-grey is-medium">
        <div className="container">
            <div className="columns">
                <div className="column is-10 is-offset-1">
                    <div className="has-text-centered">
                        <img className="pushed-image" src="/3cx.png" />
                    </div>
                </div>
            </div>

            <div className="title-wrapper has-text-centered">
                <h2 className="title is-2">N'hésitez plus!</h2>
                <h3 className="subtitle is-5 is-muted">Passer chez OXXO Télécom!
                </h3>
            </div>

            <p className="has-text-centered mt-20">
                <a className="button cta is-large rounded secondary-btn raised" href="https://market.oxxodata.com/cart.php?gid=1">
                    Commander
                </a>
            </p>
        </div>
    </section>
    </div>
  )
}
