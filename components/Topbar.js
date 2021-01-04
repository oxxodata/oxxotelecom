export default function Topbar() {
    return (
        <div>
            <div id="preloader" style={{display: 'none'}}>
                <div id="status" style={{display: 'none'}}></div>
            </div>

            <div className="topbar">
                <i className="fa fa-phone phonebar" aria-hidden="true"></i><a className="phonebar h5" href="tel:0033481133327">04 81 13
            33 27</a> <i style={{marginLeft: '20px'}} className="fa fa-envelope phonebar" aria-hidden="true"></i><a className="phonebar h5 contactez" href="/contact/">Contactez-nous</a>
            </div>
        </div>
    )
}