import '../styles/globals.css'
import Head from 'next/head'
import Topbar from '../components/Topbar'
import Footer from '../components/Footer'
import Reviews from '../components/Reviews'

function MyApp({ Component, pageProps }) {
  return <div>
    <Head>
      <title>Le Télécom dans le Cloud | OXXO Télécom</title>
      <link rel="icon" type="image/ico" href="https://www.oxxodata.com/wp-content/uploads/2019/10/favicon.ico" />
      <link rel="stylesheet" type="text/css" href="/style.min.css" integrity="sha256-Oe9ggpO3FYXsVAcBfwU+52hvDiyUYuqPukeCxJhwoj8=" />
      <link rel="stylesheet" type="text/css" href="/icons.css" />
      <link href="/index.css" rel="stylesheet"></link>
    </Head>
    <Topbar />
    <Component {...pageProps} />
    <Reviews />
    <Footer />
    <script src="/jquery.min.js"></script>
    <script src="/feather-icons"></script>
    <script src="/fresh.js"></script>
    <script src="/jquery.panelslider.min.js"></script>
    <script src="/modernizr.min.js"></script>
  </div>
}

export default MyApp
