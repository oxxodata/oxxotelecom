import Navbar from "../components/Navbar";

export default function trunksip() {
    return (
        <div>
            <section className="hero is-fullheight is-default is-bold">
                <Navbar />
                <div className="hero-body delay-1 animated fadeInLeft" data-animation="fadeInLeft">
                    <div className="container">
                        <div className="columns is-vcentered">
                            <div className="column is-5 is-offset-1 landing-caption">
                                <h1 className="title is-1 is-bold is-spaced">Téchnologie 5G</h1>
                                <h2 className="subtitle is-5 is-muted">Une connexion a trés haut débits sur mobile.</h2>
                                <p>
                                    <a className="button cta rounded primary-btn raised" href="https://market.oxxodata.com/cart.php?gid=1">Commander</a>
                                </p>
                            </div>
                            <div className="column is-5 is-offset-1">
                                <figure className="image is-4by3">
                                    <img src="/undraw_calling_kpbp.svg" alt="Description" />
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




            <section className="section section-feature-grey is-medium">
                <div className="container">
                    <div className="title-wrapper has-text-centered" style={{ maxWidth: '1000px' }}>
                        <h3 className="title is-3">La 5G. C'est quoi ?</h3>
                        <h5 className="subtitle is-5 is-muted" style={{ marginTop: '10px' }}>La 5G est la 5e génération de réseaux de téléphonie mobile.

En France, la consomation de services de données mobiles a été multipliée par 5 au cours des cinq dernières années. La 5G va ainsi permettre à oﬀrir de disposer de meilleurs débits pour accompagner la montée en puissance des usages numériques au quotidien (téléchargement rapide de vos films/séries, visio fluide, qualité vidéo en UHD...), mais aussi pour permettre le développement de nouveaux usages (objets connectés, voitures autonomes, santé connectée...). </h5>
                        <div className="divider is-centered"></div>
                    </div>

                    <div className="title-wrapper has-text-centered" style={{ maxWidth: '1000px', marginTop: '50px' }}>
                        <h3 className="title is-3">La 4G et la 5G sont des réseaux complémentaires</h3>
                        <h5 className="subtitle is-5 is-muted" style={{ marginTop: '10px' }}>4G et 5G font bon ménage ! La nature complémentaire des réseaux permet une meilleure connexion, notamment dans les zones urbaines denses où la 5G est prioritairement déployée, avant de s'étendre progressivement au reste de la France.
                </h5>
                        <div className="divider is-centered"></div>
                    </div>
                </div>
            </section>




            <section className="section is-medium">
                <div className="container">
                    <div className="columns">
                        <div className="column is-centered-tablet-portrait">
                            <h1 className="title section-title">Les avantages de la 5Gk</h1>
                            <div className="divider"></div>
                        </div>
                        <div className="column is-7 mt-60">
                            <article className="media icon-box">
                                <figure className="media-left">
                                    <p className="image">
                                        <img src="/laptop-globe.svg" />
                                    </p>
                                </figure>
                                <div className="media-content mt-50">
                                    <div className="content">
                                        <p>
                                            <span className="icon-box-title">Rapidité</span>

                                            <span className="icon-box-text">Photos, films, séries…
                                            A vous le téléchargement
                                            de données à très
grande vitesse !.</span>
                                        </p>
                                    </div>
                                </div>
                            </article>
                            <article className="media icon-box">
                                <figure className="media-left">
                                    <p className="image">
                                        <img src="/doc-sync.svg" />
                                    </p>
                                </figure>
                                <div className="media-content mt-50">
                                    <div className="content">
                                        <p>
                                            <span className="icon-box-title">Fluidité</span>

                                            <span className="icon-box-text">Surfez sur internet
                                            avec encore plus
de facilité !</span>
                                        </p>
                                    </div>
                                </div>
                            </article>
                            <article className="media icon-box">
                                <figure className="media-left">
                                    <p className="image">
                                        <img src="/mobile-feed.svg" />
                                    </p>
                                </figure>
                                <div className="media-content mt-50">
                                    <div className="content">
                                        <p>
                                            <span className="icon-box-title">Stabilité</span>

                                            <span className="icon-box-text">Bénéficiez d’une meilleure
                                            connexion, même dans des
zones à forte affluence</span>
                                        </p>
                                    </div>
                                </div>
                            </article>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}