import './global.css';
import { Header } from './components/Header';
import { Banner } from './components/Banner';
import { Content } from './components/Content';
import { Carousel } from './components/Carousel';
import { Footer } from './components/Footer';

export function App() {

  return (
    <>
      <Header />
      <Banner />
      <Content />
      <Carousel />
      <Footer />
    </>
  )
}

