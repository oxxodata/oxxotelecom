import Link from 'next/link'

export default function Footer() {
    return (
        <footer class="footer footer-dark">
            <div class="container">
                <div class="columns">
                    <div class="column">
                        <div class="footer-logo">
                            <img src="/logo.png" style={{ width: '180px', height: 'auto' }} />
                        </div>
                    </div>
                    <div class="column">
                        <div class="footer-column">
                            <div class="footer-header">
                                <h3>OXXO Télécom</h3>
                            </div>
                            <ul class="link-list">
                                <li>
                                    <a href="https://www.oxxodata.com/rgpd/">
                                        RGPD
                                </a>
                                </li>
                                <li>
                                    <a href="https://www.oxxodata.com/conditions-general-dutilisation/">
                                        CGV
                                </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div class="column">
                        <div class="footer-column">
                            <div class="footer-header">
                                <h3>Internet</h3>
                            </div>
                            <ul class="link-list">
                                <li>
                                    <Link href="/fibre">
                                        <a>Fibre Pro</a>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/adsl">
                                        <a>ADSL Pro</a>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/vpn">
                                        <a>VPN</a>
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div class="column">
                        <div class="footer-column">
                            <div class="footer-header">
                                <h3>Mobile</h3>
                            </div>
                            <ul class="link-list">
                                <li>
                                    <Link href="/mobile">
                                        <a>Internet Mobile</a>
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div class="column">
                        <div class="footer-column">
                            <div class="footer-header">
                                <h3>Téléphonie Pro</h3>
                            </div>
                            <ul class="link-list">
                                <li>
                                    <Link href="/telephonie">
                                        <a>Standard Téléphonique</a>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/trunksip">
                                        <a>Ligne Trunk SIP</a>
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div class="column">
                        <div class="footer-column">
                            <div class="footer-header">
                                <h3>Follow Us</h3>
                                <nav class="level is-mobile link-list">
                                    <div class="level-left">
                                        <a class="level-item" href="https://www.facebook.com/Oxxodata-111178560575340">
                                            <span class="icon"><i class="fa fa-facebook"></i></span>
                                        </a>
                                        <a class="level-item" href="https://twitter.com/oxxodata">
                                            <span class="icon"><i class="fa fa-twitter"></i></span>
                                        </a>
                                        <a class="level-item" href="https://www.linkedin.com/company/oxxodata">
                                            <span class="icon"><i class="fa fa-linkedin"></i></span>
                                        </a>
                                    </div>
                                    <div>
                                        <a href="https://www.infogreffe.fr/entreprise-societe/851741850-l-alliance-des-solutions-it-d-infogerance-et-cloud-690119B046720000.html?typeProduitOnglet=EXTRAIT&afficherretour=true">Numéro SIRET : 85174185000016</a>
                                    </div>
                                </nav>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}