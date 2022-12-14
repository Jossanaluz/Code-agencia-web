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
          <img src="/box01.png" alt="" />
        </a>
        <a href='#' className={styles.box}>
          <img src="/box01.png" alt="" />
        </a>
        <a href='#' className={styles.box}>
          <img src="/zainna.png" alt="" />
        </a>
        <a href='#' className={styles.box}>
          <img src="/box01.png" alt="" />
        </a>
        <a href='#' className={styles.box}>
          <img src="/box01.png" alt="" />
        </a>
        <div style={{ width: 300, height: 300, background: '#ffe4e1' }}>
          slide 6
        </div>
        <div style={{ width: 300, height: 300, background: '#008080' }}>
          slide 7
        </div>
        <div style={{ width: 300, height: 300, background: '#ff0000' }}>
          slide 8
        </div>
        <div style={{ width: 300, height: 300, background: '#e6e6fa' }}>
          slide 9
        </div>
      </ReactSimplyCarousel>
    </div >
  );
}
