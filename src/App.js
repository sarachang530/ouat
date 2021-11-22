import React, { useState, useEffect } from 'react';
import Masonry from 'react-masonry-css';
import { apiProvider } from './api/api';
import { Card } from './components/cards/Card';
import { Slider } from './components/slider/Slider';
import { Header } from './components/header/header';
import { Footer } from './components/footer/footer';
import { HeroText } from './components/slider/heroText';
import './App.scss';
import './api/api';

function App() {
  const [cards, setCards] = useState([]);
  const [slides, setSlides] = useState([]);
  const [heroText, setHeroText] = useState([]);

  /*
   *   Masonry break points
   */
  const breakpointColumnsObj = {
    default: 3,
    1441: 3,
    1440: 3,
    1024: 2,
    768: 2,
    480: 1,
  };

  /*
   *   Fetch data from API    *
   */
  useEffect(() => {
    apiProvider.getData().then(res => {
      setHeroText(res.data.hero_text);
      setCards(
        res.data.cards.sort((a, b) => {
          return new Date(b.date) - new Date(a.date);
        }),
      );
    });
  }, []);
  /*
   *   Hero Slides from API   *
   */
  useEffect(() => {
    apiProvider.getData().then(res => {
      setSlides(res.data.hero_slides);
    });
  }, []);

  return (
    <div className="App">
      <Header />
      <main className="main">
        <section className="hero-container">
          <Slider slides={slides} />
          <HeroText
          title={heroText.title}
          date={(new Date(heroText.date)).toLocaleDateString(undefined, {  year: 'numeric', month: 'long', day: 'numeric' })}
          subtitle={heroText.subtitle}
        />
        </section>

        <section className="card-container">
          <Masonry
            breakpointCols={breakpointColumnsObj}
            className="my-masonry-grid"
            columnClassName="my-masonry-grid_column"
          >
            {cards.map(({ image, title, date, author }) => (
              <Card
                key={title}
                image={image}
                title={title}
                date={date}
                author={author}
              />
            ))}
          </Masonry>
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default App;

/*
  overflow: hidden;
  max-width: 1440px;
  position: relative;
  margin: 0 -720px;
  left: 50%;
  */
