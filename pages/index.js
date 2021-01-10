import Navbar from '../components/Navbar'

export default function index() {
    return (
        <div>
            <section className="hero is-fullheight is-default is-bold">
                <Navbar />

                <div className="hero-body delay-1 animated fadeInLeft" data-animation="fadeInLeft">
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
                                        <h4>Ligne Fixe Business</h4>
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
                            <div className="column is-one-third">
                                <div className="feature-card is-bordered has-text-centered revealOnScroll delay-1 animated fadeInLeft" data-animation="fadeInLeft">
                                    <div className="card-title">
                                        <h4>SIP Trunking</h4>
                                    </div>
                                    <div className="card-icon">
                                        <img src="/standard.svg?v=1" />
                                    </div>
                                    <div className="card-text">
                                        <p>Révolutionné vos communications avec la VoIP.</p>
                                    </div>
                                    <div className="card-action">
                                        <a href="/telephonie/" className="button btn-align-md accent-btn raised">En savoir plus</a>
                                    </div>
                                </div>
                            </div>
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

                        </div>

                        <div className="columns">
                            <div className="column is-one-third">
                                <div className="feature-card is-bordered has-text-centered revealOnScroll delay-1 animated fadeInLeft" data-animation="fadeInLeft">
                                    <div className="card-title">
                                        <h4>Box 4G++</h4>
                                    </div>
                                    <div className="card-icon">
                                        <img src="/4g.svg" />
                                    </div>
                                    <div className="card-text">
                                        <p>Combinez rapidité et mobilité avec nos offres de Box 4G++.</p>
                                    </div>
                                    <div className="card-action">
                                        <a href="/telephonie/" className="button btn-align-md accent-btn raised">En savoir plus</a>
                                    </div>
                                </div>
                            </div>
                            <div className="column is-one-third">
                                <div className="feature-card is-bordered has-text-centered revealOnScroll delay-1 animated fadeInLeft" data-animation="fadeInLeft">
                                    <div className="card-title">
                                        <h4>Téléphonie Mobile</h4>
                                    </div>
                                    <div className="card-icon">
                                        <img src="/standard.svg" />
                                    </div>
                                    <div className="card-text">
                                        <p>Idéal pour les appèles illimiter partout en France.</p>
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

                        </div>
                    </div>
                    <p className="has-text-centered mt-20">
                        <a className="button cta is-large rounded secondary-btn raised" href="https://oxxotelecom.com/contact">
                            Contactez-nous
                </a>
                    </p>
                </div>
            </section>

            <div className="columns" style={{ padding: '5rem' }}>
                <div className="column is-half" >
                    <img src="/3cx.png" />
                </div>
                <div className="column is-half">
                    <h3 style={{
                        fontFamily: 'open sans,sans-serif',
                        fontSize: '35px',
                        fontWeight: '600', color: '#444f60',
                        paddingBottom: '1rem'
                    }}>Communiquez librement Téléphonie VoIP et Collaboration dans le Cloud</h3>
                    <p style={{
                        fontSize: '1rem',
                        fontWeight: '400',
                        marginBottom: '1.25rem',
                        textRendering: 'optimizeLegibility',
                    }}>
                        <div style={{ marginBottom: '10px' }}>
                            Téléphonie VoIP et Collaboration avancées pour la PME futée
                            De nos jours, il est essentiel pour toute organisation d’avoir un système de téléphonie efficace et des outils de collaboration afin d’augmenter sa productivité et de mieux satisfaire ses clients.
                        </div>

                        <div style={{ marginBottom: '10px' }}>
                            OXXO Télécom s’adresse à toutes les entreprises qui souhaitent économiser près de 80% sur leur facture téléphonique et leurs outils de collaboration, tout en bénéficiant d’une meilleure mobilité et d’une plus grande flexibilité.
                        </div>

                        <div style={{ marginBottom: '10px' }}>
                            Avec la téléphonie avancée et les services de collaboration en cloud OXXO Télécom, vous pouvez concentrer votre attention sur votre activité principale sans devoir effectuer des investissements inutiles en infrastructure ou signer des contrats de maintenance coûteux. Il suffit de vous connecter sur Internet depuis votre téléphone IP, votre smartphone ou votre ordinateur : vous pouvez désormais communiquer de manière avancée et économique avec vos partenaires commerciaux et vos collègues, où que vous soyez, quand vous le voulez.
                        </div>
                    </p>
                </div>
            </div>

            <div className="columns" style={{ padding: '5rem' }}>
                <div className="column is-half">
                    <h3 style={{
                        fontFamily: 'open sans,sans-serif',
                        fontSize: '35px',
                        fontWeight: '600', color: '#444f60',
                        paddingBottom: '1rem'
                    }}>Connectez votre Téléphonie avec vos Logiciels Professionnels Préférés</h3>
                    <p style={{
                        fontSize: '1rem',
                        fontWeight: '400',
                        marginBottom: '1.25rem',
                        textRendering: 'optimizeLegibility',
                    }}>
                        <div style={{ marginBottom: '10px' }}>
                            OXXO Télécom vous permetd’intégrer votre téléphonie à vos logiciels professionnels préférés tels que votre CRM, ERP, ticketing, reporting, productivité, etc.
                        </div>

                        <div style={{ marginBottom: '10px' }}>
                            Lancez vos appels directement depuis votre logiciel, visualisez l’identité de l’appelant et ouvrez sa fiche dans votre logicielavant même d’avoir décroché. Bref, augmentez votre productivité et la satisfaction de vos clients.
                        </div>

                        <div style={{ marginBottom: '10px' }}>
                            De plus, vous pouvez créer des scénarios sophistiqués en quelques clics pour transformer votre téléphonie en un canal de communication super intelligent ! En effet, votre téléphonie peut accéder à des données de votre logiciel professionnel afin de diriger au mieux l’appel. Par exemple : lorsqu’un client qui a des paiements en retard appelle, il est automatiquement redirigé vers la comptabilité.
                        </div>
                    </p>
                </div>
                <div className="column is-half" >
                    <img src="/tools.jpg" />
                </div>
            </div>

            <a href="/contact">
                <img src="/ad-iphone-12-pro-max.png?v=1" style={{ width: '100%', height: 'auto' }} />
            </a>

            <a href="/contact">
                <img src="/ad-t46s.png?v=1" style={{ width: '100%', height: 'auto' }} />
            </a>

            <a href="/contact">
                <img src="/ad-t41s.png?v=1" style={{ width: '100%', height: 'auto' }} />
            </a>
        </div>
    )
}
