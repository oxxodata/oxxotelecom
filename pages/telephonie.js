import Navbar from "../components/Navbar"
import { Tabs, Tab, TabPanel, TabList } from 'react-web-tabs'
import PriceFixe from "../components/tabs/PriceFixe"


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
                                    La téléphonie sur IP pour le télétravail
                        </h1>

                                <h2 className="subtitle is-5 is-muted">
                                    Pour assurer la continuité de votre activité, facile à installer. Simple à utiliser. Et Intégrée à vos outils.<b style={{ color: '#f37f3c' }}> À partir de 12€ par mois!</b>
                                </h2>

                                <p>
                                    <a className="button cta rounded primary-btn raised" href="https://form.typeform.com/to/y7qfA7Lb">
                                        Demandez un devis
                            </a>
                                </p>
                            </div>
                            <div className="column is-5 is-offset-1">
                                <figure className="image is-4by3">
                                    <img src="/undraw_Mobile_marketing_re_p77p.svg" alt="Description" />
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
                                        <img className="partner-logo" src="/yealink_1.svg" />
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
            <section className="section is-medium hero">
                <Tabs
                    defaultTab="one"
                    onChange={(tabId) => { console.log(tabId) }}
                >
                    <div className="price-tab">
                        <TabList>
                            <div style={{ margin: 'auto', width: '46%' }}>
                                <Tab tabFor="one"><b>Prix</b></Tab>
                                <Tab tabFor="two"><b>Info</b></Tab>
                                <Tab tabFor="three"><b>Fonctionnalités</b></Tab>
                            </div>
                        </TabList>
                    </div>
                    <TabPanel tabId="one">
                        <PriceFixe />
                    </TabPanel>
                    <TabPanel tabId="two">
                        <p style={{ padding: '0 100px', textAlign: 'center' }}>Portabilité de numeros fixe 10 euros / Numeros<br />
Création illimité de Numéro(s) non géographique(s) ( FMS = 0 euros ) (Abo/Récurrence : 1 euros / mois / numéros )<br />
Création Numéro(s) non géographique(s) Gold ( FMS = 100 euros ) (Abo/Récurrence : 1 euros / mois / numéros )<br />
Création illimitée de numéros SDA ( 04 , 02 ,01 ,03 ... ) ( FMS = 0 euros ) (Abo/Récurrence : 5 euros / mois / tranche de 5 numéros )<br />
Création illimitée de numéros SDA Gomd ( 04 , 02 ,01 ,03 ... ) ( FMS = 100 euros ) (Abo/Récurrence : 5 euros / mois / tranche de 5 numéros )<br />
Création de numéros étrangers ( Nous consulter )<br />
Pays disponibles : Croatie, Danemark, Géorgie,
Allemagne, Hong Kong, Irlande, Pays-Bas, Norvège, Singapour,
Corée du Sud, Espagne, Turquie, Pologne. Hongrie, Suède, Slovaquie,
Slovénie, Roumanie, Luxembourg, Finlande, Canada,UK,Swisse<br />
Création de numeros 08 ( Nous consulter )<br />
Création de numeros Numéros 08 Premium ( Nous consulter )</p>
                    </TabPanel>
                    <TabPanel tabId="three">
                        <div class="columns is-mobile is-centered" style={{ marginTop: '20px' }}>
                            <div class="column is-one-quarter">
                                <ul>
                                    <li><i style={{ marginLeft: '20px' }} className="fa fa-exchange" aria-hidden="true" style={{ marginRight: '5px' }} /> Transfert</li>
                                    <li><i style={{ marginLeft: '20px' }} className="fa fa-share" aria-hidden="true" style={{ marginRight: '5px' }} /> Renvoi d’appel</li>
                                    <li><i style={{ marginLeft: '20px' }} className="fa fa-music" aria-hidden="true" style={{ marginRight: '5px' }} /> Sonneries personnalisables</li>
                                    <li><i style={{ marginLeft: '20px' }} className="fa fa-music" aria-hidden="true" style={{ marginRight: '5px' }} /> Musique d’attente</li>
                                    <li><i style={{ marginLeft: '20px' }} className="fa fa-phone" aria-hidden="true" style={{ marginRight: '5px' }} /> Double appel</li>
                                    <li><i style={{ marginLeft: '20px' }} className="fa fa-phone" aria-hidden="true" style={{ marginRight: '5px' }} /> Parking</li>
                                    <li><i style={{ marginLeft: '20px' }} className="fa fa-phone" aria-hidden="true" style={{ marginRight: '5px' }} /> Pickup</li>
                                    <li><i style={{ marginLeft: '20px' }} className="fa fa-microphone" aria-hidden="true" style={{ marginRight: '5px' }} /> Enregistrement d’appel</li>
                                    <li><i style={{ marginLeft: '20px' }} className="fa fa-microphone" aria-hidden="true" style={{ marginRight: '5px' }} /> Messagerie vocale</li>
                                    <li><i style={{ marginLeft: '20px' }} className="fa fa-fax" aria-hidden="true" style={{ marginRight: '5px' }} /> Fax out</li>
                                    <li><i style={{ marginLeft: '20px' }} className="fa fa-fax" aria-hidden="true" style={{ marginRight: '5px' }} /> Fax in</li>
                                    <li><i style={{ marginLeft: '20px' }} className="fa fa-book" aria-hidden="true" style={{ marginRight: '5px' }} /> Annuaires</li>
                                    <li><i style={{ marginLeft: '20px' }} className="fa fa-book" aria-hidden="true" style={{ marginRight: '5px' }} /> Contact Sync</li>
                                    <li><i style={{ marginLeft: '20px' }} className="fa fa-history" aria-hidden="true" style={{ marginRight: '5px' }} /> Historique d’appels</li>
                                    <li><i style={{ marginLeft: '20px' }} className="fa fa-columns" aria-hidden="true" style={{ marginRight: '5px' }} /> Portail utilisateur</li>
                                    <li><i style={{ marginLeft: '20px' }} className="fa fa-phone" aria-hidden="true" style={{ marginRight: '5px' }} /> Click to Call</li>
                                </ul>
                            </div>
                            <div class="column is-one-quarter">
                                <ul>
                                    <li><i style={{ marginLeft: '20px' }} className="fa fa-phone" aria-hidden="true" style={{ marginRight: '5px' }} /> Notification d’appel</li>
                                    <li><i style={{ marginLeft: '20px' }} className="fa fa-phone" aria-hidden="true" style={{ marginRight: '5px' }} /> Groupe</li>
                                    <li><i style={{ marginLeft: '20px' }} className="fa fa-phone" aria-hidden="true" style={{ marginRight: '5px' }} /> Menu - Serveur Vocal Interactif</li>
                                    <li><i style={{ marginLeft: '20px' }} className="fa fa-phone" aria-hidden="true" style={{ marginRight: '5px' }} /> Nom de ligne entrante</li>
                                    <li><i style={{ marginLeft: '20px' }} className="fa fa-phone" aria-hidden="true" style={{ marginRight: '5px' }} /> Calendrier</li>
                                    <li><i style={{ marginLeft: '20px' }} className="fa fa-phone" aria-hidden="true" style={{ marginRight: '5px' }} /> Appels Vidéo</li>
                                    <li><i style={{ marginLeft: '20px' }} className="fa fa-phone" aria-hidden="true" style={{ marginRight: '5px' }} /> Numéros internationaux</li>
                                    <li><i style={{ marginLeft: '20px' }} className="fa fa-phone" aria-hidden="true" style={{ marginRight: '5px' }} /> Opérateur international</li>
                                    <li><i style={{ marginLeft: '20px' }} className="fa fa-phone" aria-hidden="true" style={{ marginRight: '5px' }} /> Softphone</li>
                                    <li><i style={{ marginLeft: '20px' }} className="fa fa-phone" aria-hidden="true" style={{ marginRight: '5px' }} /> Webphone</li>
                                    <li><i style={{ marginLeft: '20px' }} className="fa fa-phone" aria-hidden="true" style={{ marginRight: '5px' }} /> Numéro unique</li>
                                    <li><i style={{ marginLeft: '20px' }} className="fa fa-phone" aria-hidden="true" style={{ marginRight: '5px' }} /> Flex desking</li>
                                    <li><i style={{ marginLeft: '20px' }} className="fa fa-phone" aria-hidden="true" style={{ marginRight: '5px' }} /> Salons de conférence</li>
                                    <li><i style={{ marginLeft: '20px' }} className="fa fa-phone" aria-hidden="true" style={{ marginRight: '5px' }} /> Web Meeting Lite</li>
                                    <li><i style={{ marginLeft: '20px' }} className="fa fa-phone" aria-hidden="true" style={{ marginRight: '5px' }} /> Privacy</li>
                                </ul>
                            </div>
                        </div>
                    </TabPanel>
                </Tabs>

            </section>

            <section className="section section-feature-grey is-medium" style={{ padding: '1.5rem 1.5rem' }}>
                <div className="container">
                    <div className="title-wrapper has-text-centered">
                        <h2 className="title is-2">Une mise en place rapide</h2>
                        <h3 className="subtitle is-5 is-muted">Une installation rapide pour une solution dans cloud sur mesure</h3>
                        <div className="divider is-centered"></div>
                    </div>
                    <div className="content-wrapper">
                        <div className="columns">
                            <div className="column is-one-third">
                                <div style={{ height: '280px' }} className="feature-card is-bordered has-text-centered revealOnScroll delay-1 animated fadeInLeft" data-animation="fadeInLeft">
                                    <div className="round-num" style={{ margin: 'auto', marginTop: '20px' }}>1</div>
                                    <div className="card-title">
                                        <h4>Mise en place en 5 min</h4>
                                    </div>
                                    <div className="card-text">
                                        <p>Découvrez notre solution 100% cloud que vous pouvez installer rapidement pour appeler partout dans le monde.
                                </p>
                                    </div>
                                </div>
                            </div>
                            <div className="column is-one-third">
                                <div style={{ height: '280px' }} className="feature-card is-bordered has-text-centered revealOnScroll delay-1 animated fadeInLeft" data-animation="fadeInLeft">
                                    <div className="round-num" style={{ margin: 'auto', marginTop: '20px' }}>2</div>
                                    <div className="card-title">
                                        <h4>Connectez vos outils</h4>
                                    </div>
                                    <div className="card-text">
                                        <p>Améliorez vos appels avec la remontée de fiches. Intégrez Aircall à vos outils CRM, Service Client et vos autres applications.
                                </p>
                                    </div>
                                </div>
                            </div>
                            <div className="column is-one-third">
                                <div style={{ height: '280px' }} className="feature-card is-bordered has-text-centered revealOnScroll delay-1 animated fadeInLeft" data-animation="fadeInLeft">
                                    <div className="round-num" style={{ margin: 'auto', marginTop: '20px' }}>3</div>
                                    <div className="card-title">
                                        <h4>Améliorez votre productivité</h4>
                                    </div>
                                    <div className="card-text">
                                        <p>Créez rapidement de nouveaux process, numéros et groupes de compétences quand vous en avez besoin.
                                </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="title-wrapper has-text-centered">
                        <h2 className="title is-2">Nos Qualités</h2>
                        <h3 className="subtitle is-5 is-muted">L'installation et la géstion du service est totalement prise en charge.
                </h3>
                        <div className="divider is-centered"></div>
                    </div>

                    <div className="content-wrapper">
                        <div className="columns">
                            <div className="column is-one-third">
                                <div className="feature-card is-bordered has-text-centered revealOnScroll delay-1 animated fadeInLeft" data-animation="fadeInLeft">
                                    <div className="card-title">
                                        <h4>Installation et Administration</h4>
                                    </div>
                                    <div className="card-text">
                                        <p>Vous souhaitez remplacer le PBX obsolète de votre entreprise? Avec OXXO, aucune inquiétude à avoir concernant l’installation et l’administration de votre nouvelle solution.
                                </p>
                                    </div>
                                    <div className="card-action">
                                        <button id="install-modal" className="button btn-align-md accent-btn raised">En savoir
                                    plus</button>
                                    </div>
                                </div>
                            </div>
                            <div className="column is-one-third">
                                <div className="feature-card is-bordered has-text-centered revealOnScroll delay-1 animated fadeInLeft" data-animation="fadeInLeft">
                                    <div className="card-title">
                                        <h4>Sécurité & Sauvegarde</h4>
                                    </div>
                                    <div className="card-text">
                                        <p>Quand il s’agit de sécurité en VoIP, OXXO montre l’exemple. Les fonctionnalités de sécurité intégrées à OXXO ont été exclusivement conçues pour protéger votre PBX des attaques.
                                </p>
                                    </div>
                                    <div className="card-action">
                                        <button id="security-modal" className="button btn-align-md accent-btn raised">En savoir
                                    plus</button>
                                    </div>
                                </div>
                            </div>
                            <div className="column is-one-third">
                                <div className="feature-card is-bordered has-text-centered revealOnScroll delay-1 animated fadeInLeft" data-animation="fadeInLeft">
                                    <div className="card-title">
                                        <h4>Diminuez vos coûts</h4>
                                    </div>
                                    <div className="card-text">
                                        <p>En utilisant les services OXXO Télécom, vous allez pouvoir réduire de façon significative vos frais de téléphonie, ainsi que les coûts liés à l’achat, l’évolutivité et la maintenance de votre IPBX.</p>
                                    </div>
                                    <div className="card-action">
                                        <button id="price-modal" className="button btn-align-md accent-btn raised">En savoir
                                    plus</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="columns">
                            <div className="column is-one-third">
                                <div className="feature-card is-bordered has-text-centered revealOnScroll delay-1 animated fadeInLeft" data-animation="fadeInLeft">
                                    <div className="card-title">
                                        <h4>Applications & Fonctionnalités</h4>
                                    </div>
                                    <div className="card-text">
                                        <p>Vous pouvez emporter votre extension où que vous soyez. Avec les applications pour Android et iOS, les softphones pour Windows et Mac, le softphone WebRTC et la web conférence sans client.</p>
                                    </div>
                                    <div className="card-action">
                                        <button id="application-modal" className="button btn-align-md accent-btn raised">En savoir
                                    plus</button>
                                    </div>
                                </div>
                            </div>
                            <div className="column is-one-third">
                                <div className="feature-card is-bordered has-text-centered revealOnScroll delay-1 animated fadeInLeft" data-animation="fadeInLeft">
                                    <div className="card-title">
                                        <h4>Visioconférence Intégrée</h4>
                                    </div>
                                    <div className="card-text">
                                        <p>Un système de communication complet incluant des appels vidéo intégrés. Cela veut dire que vous n’avez plus besoin d’utiliser des applications séparées pour la visio.
                                </p>
                                    </div>
                                    <div className="card-action">
                                        <button id="visio-modal" className="button btn-align-md accent-btn raised">En savoir
                                    plus</button>
                                    </div>
                                </div>
                            </div>
                            <div className="column is-one-third">
                                <div className="feature-card is-bordered has-text-centered revealOnScroll delay-1 animated fadeInLeft" data-animation="fadeInLeft">
                                    <div className="card-title">
                                        <h4>Call Center</h4>
                                    </div>
                                    <div className="card-text">
                                        <p>Augmentez vos ventes, boostez la productivité de vos collaborateurs et offrez un support de qualité avec la technologie pour centres de contacts de OXXO Télécom. Des fonctionnalités avancés...</p>
                                    </div>
                                    <div className="card-action">
                                        <button id="call-modal" className="button btn-align-md accent-btn raised">En savoir
                                    plus</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>




            <section className="section is-medium">
                <div className="container">
                    <div>
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
                                            <span className="icon-box-title">Une interface intuitive et simple</span>

                                            <span className="icon-box-text">Nous vous proposons une plateforme pour géré tout vos
                                        appéles et messages depuis une seul endroit.</span>
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
                                            <span className="icon-box-title">Syncronisations des données</span>

                                            <span className="icon-box-text">Les données et appeles sont syncronisé sur tout vos
                                        appréils en temps réel.</span>
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
                                            <span className="icon-box-title">Accessible depuis tout vos apparéils</span>

                                            <span className="icon-box-text">Vous pouvez utilisez notre plateforme depuis tout vos
                                        appareils Android, iOS ou Navigateur Web.</span>
                                        </p>
                                    </div>
                                </div>
                            </article>
                        </div>
                    </div>
                </div>
            </section>
            <div className="modal" id="install">
                <div className="modal-background"></div>
                <div className="modal-card">
                    <header className="modal-card-head">
                        <p className="modal-card-title">Installation & Configuration Simplifiées</p>
                        <button className="delete close-modal" aria-label="close"></button>
                    </header>
                    <section className="modal-card-body">
                        <ul className="disc-list">
                            <li>Templates pré-configurés pour une intégration facile avec les opérateurs trunks SIP leaders.
                    </li>
                            <li>Interopérabilité Plug &amp; Play des téléphones IP et passerelles pour une configuration automatique.
                    </li>
                            <li>Evitez les problèmes de compatibilité avec les téléphones IP testés par 3CX.</li>
                            <li>Fonctionnalités de sécurité avancées incluant les mises à jour automatiques et la liste noire globale d’IP</li>
                            <li>Déployable sur le cloud ou en local sur Windows, Linux, Mini PC ou Raspberry Pi</li>
                        </ul>
                    </section>
                </div>
            </div>

            <div className="modal" id="sucurity">
                <div className="modal-background"></div>
                <div className="modal-card">
                    <header className="modal-card-head">
                        <p className="modal-card-title">Sécurité & Sauvegarde</p>
                        <button className="delete close-modal" aria-label="close"></button>
                    </header>
                    <section className="modal-card-body">
                        <ul className="disc-list">
                            <li>Configuration du serveur web avec sécurité renforcée</li>
                            <li>Détection automatique et blacklisting des outils d’attaque SIP</li>
                            <li>Liste noire globale d’IP automatiquement mise à jour pour les IPBX participants</li>
                            <li>Le trafic vers les applications 3CX est crypté via le tunnel 3CX</li>
                            <li>Le trafic vocal est crypté via SRTP</li>
                            <li>Génération et gestion automatique des certificats SSL</li>
                            <li>Sécurité VoIP révolutionnaire et obtention d’un A+ de SSL lab</li>
                            <li>Failover automatique pour une sauvegarde instantanée</li>
                            <li>Cryptage entre le navigateur et le site Internet assuré via HTTPS</li>
                            <li>Restriction de l’accès à la console d’administration basée sur l’adresse IP</li>
                        </ul>
                    </section>
                </div>
            </div>

            <div className="modal" id="price">
                <div className="modal-background"></div>
                <div className="modal-card">
                    <header className="modal-card-head">
                        <p className="modal-card-title">Diminuez vos coûts</p>
                        <button className="delete close-modal" aria-label="close"></button>
                    </header>
                    <section className="modal-card-body">
                        <ul className="disc-list">
                            <li>Réduisez votre facture téléphonique jusqu’à 80%</li>
                            <li>Licence basée sur le nombre d’appels simultanés et non le nombre d’extensions</li>
                            <li>Pas de licence par extensions mais un paiement unique par IPBX</li>
                            <li>Passez des appels gratuits entre les bureaux et succursales</li>
                            <li>Utilisez les trunks SIP les plus communs pour réduire les coûts des appels sortants</li>
                            <li>Réduisez vos frais de déplacement avec la web conférence intégrée</li>
                            <li>Eliminez les frais liés aux numéros surtaxés grâce à l’intégration WebRTC</li>
                            <li>Utilisez des SDA internationales et la téléphonie sur IP pour permettre à clients de vous appeler à des tarifs compétitifs</li>
                        </ul>
                    </section>
                </div>
            </div>

            <div className="modal" id="application">
                <div className="modal-background"></div>
                <div className="modal-card">
                    <header className="modal-card-head">
                        <p className="modal-card-title">Applications & Fonctionnalités</p>
                        <button className="delete close-modal" aria-label="close"></button>
                    </header>
                    <section className="modal-card-body">
                        <ul className="disc-list">
                            <li>Utilisez votre extensions depuis n’importe où</li>
                            <li>Appels VoIP gratuits avec votre smartphone</li>
                            <li>Economisez de la batterie avec les notifications “PUSH”</li>
                            <li>Connectez toutes les applications simultanément avec le SIP forking</li>
                            <li>Les applications VoIP pour Android &amp; iOS les plus modernes sur le marché des UC</li>
                            <li>Bénéficiez des fonctionnalités intégrées comme les statuts, la web conférence, la messagerie instantanée
                    </li>
                        </ul>
                    </section>
                </div>
            </div>

            <div className="modal" id="visio">
                <div className="modal-background"></div>
                <div className="modal-card">
                    <header className="modal-card-head">
                        <p className="modal-card-title">Visioconférence Intégrée</p>
                        <button className="delete close-modal" aria-label="close"></button>
                    </header>
                    <section className="modal-card-body">
                        <ul className="disc-list">
                            <li>Gratuite jusqu’à 250 participants</li>
                            <li>Utilisateurs illimités quelle que soit l’édition</li>
                            <li>Débutez une conférence en un simple clic </li>
                            <li>Connectez-vous à une réunion via téléphone </li>
                            <li>Fonctionnement corrélé entre la VoIP et la vidéo</li>
                            <li>Gestion et contrôle de la bande passante</li>
                            <li>Assistance à distance pour une résolution de problèmes facile et rapide - partage d’écran sans plugin/extension
                    </li>
                            <li>Possibilité de pré uploader des PowerPoints &amp; PDF avant la réunion</li>
                            <li>Outil de sondage facile à utiliser pour obtenir des retours des participants</li>
                        </ul>
                    </section>
                </div>
            </div>

            <div className="modal" id="call">
                <div className="modal-background"></div>
                <div className="modal-card">
                    <header className="modal-card-head">
                        <p className="modal-card-title">Fonctionnalités de call center de dernière génération</p>
                        <button className="delete close-modal" aria-label="close"></button>
                    </header>
                    <section className="modal-card-body">
                        <ul className="disc-list">
                            <li>Rapport de centre d’appels - activité des utilisateurs, files d’attentes, SLA et plus encore
                    </li>
                            <li>Stratégies de files d’attentes &amp; statistiques en temps réel – round robin, envoi vers 3 agents et plus encore</li>
                            <li>Fonctions écoute, chuchotement et interruption des appels des agents </li>
                            <li>Intégration CRM avec les CRM les plus communs - Salesforce, Office 365, Freshdesk et plus </li>
                            <li>API CRM 3CX pour développer votre propre intégration CRM</li>
                            <li>Live Chat &amp; Talk avec les visiteurs de votre site web, et offrez un support en temps réel
                    </li>
                        </ul>
                    </section>
                </div>
            </div>
        </div>
    )
}