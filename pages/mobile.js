import Navbar from "../components/Navbar";
import { Tabs, Tab, TabPanel, TabList } from 'react-web-tabs'
import PriceMobile from "../components/tabs/PriceMobile";


export default function telephonie() {
    return (
        <div>
            <section className="hero is-fullheight is-default is-bold">
                <Navbar />
                <div className="hero-body delay-1 animated fadeInLeft" data-animation="fadeInLeft">
                    <div className="container">
                        <div className="columns is-vcentered">
                            <div className="column is-5 is-offset-1 landing-caption">
                                <h1 className="title is-1 is-bold is-spaced">
                                    Offres Téléphonie Mobile
                        </h1>

                                <h2 className="subtitle is-5 is-muted">
                                    Opter pour la meilleur solution d'internet mobile qui combine mobilité et rapidité.
                        </h2>

                                <p>
                                    <a className="button cta rounded primary-btn raised"
                                        href="https://market.oxxodata.com/cart.php?gid=1">
                                        Commander
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
                                        <img className="partner-logo" src="/sfr.svg" />
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


            <section className="section hero is-fullheight">
            <Tabs
                defaultTab="one"
                onChange={(tabId) => { console.log(tabId) }}
            >
                <div style={{ width: '50rem', margin: 'auto', marginBottom: '40px' }}>
                    <TabList>
                        <Tab tabFor="one">Prix</Tab>
                        <Tab tabFor="two">Info</Tab>
                        <Tab tabFor="three">Fonctionnalités</Tab>
                    </TabList>
                </div>
                <TabPanel tabId="one">
                    <PriceMobile />
                </TabPanel>
                <TabPanel tabId="two">
                    <p>Tab 2 content</p>
                </TabPanel>
                <TabPanel tabId="three">
                    <p>Tab 3 content</p>
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
        </div >
    )
}