import Navbar from "../components/Navbar";
import { Tabs, Tab, TabPanel, TabList } from 'react-web-tabs'
import PriceMobileInternet from "../components/tabs/PriceMobileInternet";


export default function internetMobile() {
    return (
        <div>
            <section className="hero is-fullheight is-default is-bold">
                <Navbar />
                <div className="hero-body delay-1 animated fadeInLeft" data-animation="fadeInLeft">
                    <div className="container">
                        <div className="columns is-vcentered">
                            <div className="column is-5 is-offset-1 landing-caption">
                                <h1 className="title is-1 is-bold is-spaced">
                                    Offres Internet Mobile
                        </h1>

                                <h2 className="subtitle is-5 is-muted">
                                    Opter pour la meilleur solution d'internet mobile qui combine mobilité et rapidité.
                        </h2>

                                <p>
                                <a className="button cta rounded primary-btn raised" href="https://form.typeform.com/to/y7qfA7Lb">
                                        Demandez un devis
                            </a>
                                </p>
                            </div>
                            <div className="column is-5 is-offset-1">
                                <figure className="image is-4by3">
                                    <img src="/undraw_download_pc33.svg" alt="Description" />
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
                                        <img className="partner-logo" src="/Orange_logo_1.svg" />
                                    </a>
                                </li>
                                <li>
                                    <a>
                                        <img className="partner-logo" src="/bouygues.svg" />
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>


            <section className="section hero">
                <Tabs
                    defaultTab="one"
                    onChange={(tabId) => { console.log(tabId) }}
                >
                    <div style={{ width: '50rem', margin: 'auto', marginBottom: '40px' }}>
                        <TabList>
                            <div style={{ margin: 'auto', width: '46%' }}>
                                <Tab tabFor="one"><b>Prix</b></Tab>
                                <Tab tabFor="two"><b>Info</b></Tab>
                                <Tab tabFor="three"><b>Fonctionnalités</b></Tab>
                            </div>
                        </TabList>
                    </div>
                    <TabPanel tabId="one">
                        <PriceMobileInternet />
                    </TabPanel>
                    <TabPanel tabId="two">
                        <div className="columns" style={{ padding: '5rem' }}>
                            <div className="column is-half" >
                                <img src="/europe.png" style={{ height: '400px', margin: 'auto' }} />
                            </div>
                            <div className="column is-half">
                                <h3 style={{
                                    fontFamily: 'open sans,sans-serif',
                                    fontSize: '35px',
                                    fontWeight: '600', color: '#444f60',
                                    paddingBottom: '1rem'
                                }}>C'est quoi l'offre Internet Pro</h3>
                                <p style={{
                                    fontSize: '1rem',
                                    fontWeight: '400',
                                    marginBottom: '1.25rem',
                                    textRendering: 'optimizeLegibility',
                                }}>Offre sans engagement, permet de changé l'opérateur mobile a n'importe quel moment et gratuitement.
                                <br />
                                Profitez d’une connexion internet sans ralentissements grâce à l’intégration d’une technologie ultra performante.
                                <br />
                                </p>
                            </div>
                        </div>
                    </TabPanel>
                    <TabPanel tabId="three">
                        <div className="columns" style={{ padding: '5rem' }}>
                            <div className="column is-half" >
                                <img src="/switching.png" style={{ height: '500px', margin: 'auto' }} />
                            </div>
                            <div className="column is-half">
                                <h3 style={{
                                    fontFamily: 'open sans,sans-serif',
                                    fontSize: '35px',
                                    fontWeight: '600', color: '#444f60',
                                    paddingBottom: '1rem'
                                }}>Switching entre les opérateurs</h3>
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
                    </TabPanel>
                </Tabs>
            </section>

            <section className="section section-feature-grey is-medium">
                <div className="container">
                    <div className="title-wrapper has-text-centered">
                        <h2 className="title is-2">Nos Qualités</h2>
                        <h3 className="subtitle is-5 is-muted">L'installation et la géstion du service est totalement prise en
                        charge.
                </h3>
                        <div className="divider is-centered"></div>
                    </div>

                    <div className="content-wrapper">
                        <div className="columns">
                            <div className="column is-one-third">
                                <div className="feature-card is-bordered has-text-centered revealOnScroll delay-1 animated fadeInLeft"
                                    data-animation="fadeInLeft">
                                    <div className="card-title">
                                        <h4>Restriction d’usage</h4>
                                    </div>
                                    <div className="card-icon">
                                        <img src="/mouse-globe.svg" />
                                    </div>
                                    <div className="card-text">
                                        <p>Restriction d’usage. Bloquez des usages comme les appels vers l’international,
                                    l’usage d’Internet etc…</p>
                                    </div>
                                </div>
                            </div>
                            <div className="column is-one-third">
                                <div className="feature-card is-bordered has-text-centered revealOnScroll delay-1 animated fadeInLeft"
                                    data-animation="fadeInLeft">
                                    <div className="card-title">
                                        <h4>Suivi Conso</h4>
                                    </div>
                                    <div className="card-icon">
                                        <img src="/mouse-globe.svg" />
                                    </div>
                                    <div className="card-text">
                                        <p>Visualisez et exportez les consommations de vos collaborateurs.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="column is-one-third">
                                <div className="feature-card is-bordered has-text-centered revealOnScroll delay-1 animated fadeInLeft"
                                    data-animation="fadeInLeft">
                                    <div className="card-title">
                                        <h4>Messagerie Vocale Visuelle</h4>
                                    </div>
                                    <div className="card-icon">
                                        <img src="/mouse-globe.svg" />
                                    </div>
                                    <div className="card-text">
                                        <p>Vous pouvez consulter l'ensemble de vos messages vocaux, dans l'ordre que vous
                                    souhaitez, où que vous soyez.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="columns">
                            <div className="column is-one-third">
                                <div className="feature-card is-bordered has-text-centered revealOnScroll delay-1 animated fadeInLeft"
                                    data-animation="fadeInLeft">
                                    <div className="card-title">
                                        <h4>Alerte conso</h4>
                                    </div>
                                    <div className="card-icon">
                                        <img src="/mouse-globe.svg" />
                                    </div>
                                    <div className="card-text">
                                        <p>Conﬁgurez pour chacune des lignes des seuils d’alerte (Voix, SMS, Internet Mobile)
                                </p>
                                    </div>
                                </div>
                            </div>
                            <div className="column is-one-third">
                                <div className="feature-card is-bordered has-text-centered revealOnScroll delay-1 animated fadeInLeft"
                                    data-animation="fadeInLeft">
                                    <div className="card-title">
                                        <h4>Blocage abonnement</h4>
                                    </div>
                                    <div className="card-icon">
                                        <img src="/mouse-globe.svg" />
                                    </div>
                                    <div className="card-text">
                                        <p>Bloquez les abonnements SMS+ / MMS+ (SMS/MMS Surfacturé)</p>
                                    </div>
                                </div>
                            </div>
                            <div className="column is-one-third">
                                <div className="feature-card is-bordered has-text-centered revealOnScroll delay-1 animated fadeInLeft"
                                    data-animation="fadeInLeft">
                                    <div className="card-title">
                                        <h4>Suspension de ligne</h4>
                                    </div>
                                    <div className="card-icon">
                                        <img src="/mouse-globe.svg" />
                                    </div>
                                    <div className="card-text">
                                        <p>Suspendez la ligne d’un collaborateur en toute autonomie via l’Espace Client Stella
                                        Telecom.
                                </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>




            <section className="section is-medium">
                <div className="container">
                    <div className="columns">
                        <div className="column is-centered-tablet-portrait">
                            <h1 className="title section-title">Créez de la valeur à partir de vos appels</h1>
                            <h3 className="subtitle is-5 is-muted">Démarquez-vous de vos concurrents.</h3>
                            <div className="divider"></div>
                        </div>
                        <div className="column is-7 mt-60">
                            <article className="media icon-box">
                                <figure className="media-left">
                                    <p className="image">
                                        <img src="/laptop-globe.png" />
                                    </p>
                                </figure>
                                <div className="media-content mt-50">
                                    <div className="content">
                                        <p>
                                            <span className="icon-box-title">Jusqu'à 15 fois plus rapide que l'ADSL</span>

                                            <span className="icon-box-text">Bénéficiez d'une connexion internet ultra rapide grâce à
                                            la Box 4G+ de Free et son débit descendant pouvant aller jusqu’à 10
                                        Gbit/s.</span>
                                        </p>
                                    </div>
                                </div>
                            </article>
                            <article className="media icon-box">
                                <figure className="media-left">
                                    <p className="image">
                                        <img src="/doc-sync.png" />
                                    </p>
                                </figure>
                                <div className="media-content mt-50">
                                    <div className="content">
                                        <p>
                                            <span className="icon-box-title">Connexion plus stable</span>

                                            <span className="icon-box-text">Profitez d’une connexion internet sans ralentissements
                                        grâce à l’intégration d’une technologie ultra performante.</span>
                                        </p>
                                    </div>
                                </div>
                            </article>
                            <article className="media icon-box">
                                <figure className="media-left">
                                    <p className="image">
                                        <img src="/mobile-feed.png" />
                                    </p>
                                </figure>
                                <div className="media-content mt-50">
                                    <div className="content">
                                        <p>
                                            <span className="icon-box-title">Tous vos usages en simultané</span>

                                            <span className="icon-box-text">Surfez sur le web ou les réseaux sociaux, regardez des
                                            vidéos. Tout ça en simultané, depuis tous vos écrans (tablette, PC ou
                                        smartphone). </span>
                                        </p>
                                    </div>
                                </div>
                            </article>
                        </div>
                    </div>
                </div>
            </section>
        </div >
    )
}