import Link from 'next/link'

export default function Navbar() {
    return (
        <nav className="navbar is-fresh is-transparent no-shadow" role="navigation" aria-label="main navigation">
            <div className="container" style={{ display: 'flex' }}>
                <div className="navbar-brand">
                    <Link href="/">
                        <a className="navbar-item">
                            <img src="/logo.png" alt="" style={{ width: '180px', height: 'auto' }} />
                        </a>
                    </Link>

                    <a role="button" className="navbar-burger" aria-label="menu" aria-expanded="false" data-target="navbar-menu">
                        <span aria-hidden="true"></span>
                        <span aria-hidden="true"></span>
                        <span aria-hidden="true"></span>
                    </a>
                </div>

                <div id="navbar-menu" className="navbar-menu is-static">

                    <div className="navbar-end">
                        <div className="navbar-item has-dropdown is-hoverable">
                            <a className="navbar-link">
                                Téléphonie Pro
                            </a>
                            <div className="navbar-dropdown">
                                <Link href="/telephonie">
                                    <a className="navbar-item">
                                        Ligne Fixe Business
                                    </a>
                                </Link>
                                <Link href="/trunksip/">
                                    <a className="navbar-item ">
                                        Ligne Trunk SIP
                                    </a>
                                </Link>
                            </div>
                        </div>
                        <div className="navbar-item has-dropdown is-hoverable">
                            <a className="navbar-link">
                                Internet & Réseaux
                            </a>
                            <div className="navbar-dropdown">
                                <Link href="/fibre">
                                    <a className="navbar-item">
                                        Fibre Pro
                                    </a>
                                </Link>
                                <Link href="/adsl">
                                    <a className="navbar-item ">
                                        ADSL Pro
                                    </a>
                                </Link>
                                <Link href="/4g">
                                    <a className="navbar-item ">
                                        Box 4G++
                                    </a>
                                </Link>
                                <Link href="/vpn">
                                    <a className="navbar-item ">
                                        VPN & MPLS
                                    </a>
                                </Link>
                                <Link href="/5g">
                                    <a className="navbar-item ">
                                        Téchnologie 5G
                                    </a>
                                </Link>
                            </div>
                        </div>
                        <div className="navbar-item has-dropdown is-hoverable">
                            <a className="navbar-link">
                                Mobile
                            </a>

                            <div className="navbar-dropdown">
                                <Link href="/mobile">
                                    <a className="navbar-item ">
                                        Téléphonie Mobile
                                    </a>
                                </Link>
                                <Link href="/internet-mobile">
                                    <a className="navbar-item ">
                                        Internet Mobile
                                    </a>
                                </Link>
                            </div>
                        </div>
                        <a href="/contact" className="navbar-item">
                            <span className="button signup-button rounded secondary-btn raised">
                                Contactez-nous
                        </span>
                        </a>
                    </div>
                </div>
            </div>
        </nav>
    )
}