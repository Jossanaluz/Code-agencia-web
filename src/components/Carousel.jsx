import { useState } from 'react';
import ReactSimplyCarousel from 'react-simply-carousel';
import styles from './Carousel.module.css'

export function Carousel() {
  const [activeSlideIndex, setActiveSlideIndex] = useState(0);

  return (
    <div>
      <ReactSimplyCarousel
        activeSlideIndex={activeSlideIndex}
        onRequestChange={setActiveSlideIndex}
        itemsToShow={1}
        itemsToScroll={1}
        forwardBtnProps={{
          //here you can also pass className, or any other button element attributes
          style: {
            alignSelf: 'center',
            background: 'var(--green-500)',
            border: 'none',
            borderRadius: '50%',
            color: 'white',
            cursor: 'pointer',
            fontSize: '20px',
            height: 30,
            lineHeight: 1,
            textAlign: 'center',
            width: 30,
            marginLeft: "20px",

          },
          children: <span>{`>`}</span>,
        }}
        backwardBtnProps={{
          //here you can also pass className, or any other button element attributes
          style: {
            alignSelf: 'center',
            background: 'var(--green-500)',
            border: 'none',
            borderRadius: '50%',
            color: 'white',
            cursor: 'pointer',
            fontSize: '20px',
            height: 30,
            lineHeight: 1,
            textAlign: 'center',
            width: 30,
            marginRight: "20px",
          },
          children: <span>{`<`}</span>,
        }}
        responsiveProps={[
          {
            itemsToShow: 4,
            itemsToScroll: 4,
            minWidth: 768,
          },
        ]}
        speed={400}
        easing="linear"
      >
        {/* here you can also pass any other element attributes. Also, you can use your custom components as slides */}

        <a href='#' className={styles.box}>
          <img src="/sips.png" alt="" />
        </a>
        <a href='#' className={styles.box}>
          <img src="/avisulat.png" alt="" />
        </a>
        <a href='#' className={styles.box}>
          <img src="/orion.png" alt="" />
        </a>
        <a href='#' className={styles.box}>
          <img src="/zainna.png" alt="" />
        </a>
        <a href='#' className={styles.box}>
          <img src="/frederes.png" alt="" />
        </a>
        <a href='#' className={styles.box}>
          <img src="/idh.png" alt="" />
        </a>
        <a href='#' className={styles.box}>
          <img src="/genio_ead.png" alt="" />
        </a>
        <a href='#' className={styles.box}>
          <img src="/mascote_classicos.png" alt="" />
        </a>
        <a href='#' className={styles.box}>
          <img src="/stipampa.png" alt="" />
        </a>

      </ReactSimplyCarousel>
    </div >
  );
}
