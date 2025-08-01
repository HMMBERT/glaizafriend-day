
import './FlowerHolder.css';
import redRose from './assets/f1.png';
import lavender from './assets/f2.png';
import violetTulips from './assets/f3.png';
import pinkRose from './assets/f4.png';
import flowerPlaceholder from './assets/f5.png'; // Placeholder for the main picture

const flowers = [
  {
    image: redRose,
    name: 'Red Rose',
    meaning: 'A red rose signifies deep love, romance, and enduring passion. It’s a timeless symbol of affection and desire.',
  },
  {
    image: lavender,
    name: 'Lavender',
    meaning: 'Lavender represents serenity, grace, and calmness. It is also associated with purity and devotion, making it a symbol of a peaceful and loving heart.',
  },
  {
    image: violetTulips,
    name: 'Violet Tulips',
    meaning: 'Violet tulips symbolize royalty and elegance. Giving them shows deep admiration and respect, representing a love that is sophisticated and truly special.',
  },
  {
    image: pinkRose,
    name: 'Pink Rose',
    meaning: 'A pink rose expresses admiration, joy, and gratitude. It is often given to show appreciation and happiness, representing a love that is gentle and sweet.',
  },
];

const FlowerHolder = () => {
  return (
    <div className="flower-holder-container">
      <div className="main-picture-container">
        <img src={flowerPlaceholder} alt="A special moment" className="main-picture" />
      </div>

      <div className="flower-message-card">
        <p className="flower-message-text">
            To the girl who never received a real flower from any other man,
to the girl who stayed with someone who had only the bare minimum
I promise you 
I will give you not just the bare minimum,
but all of me my time, my effort, and everything it takes to make you feel truly special.
          </p>
      </div>

      <div className="divider"></div>

      <h2 className="flowers-title">Language of Flowers</h2>
      <div className="flower-grid">
        {flowers.map((flower, index) => (
          <div key={index} className="flower-card">
            <img src={flower.image} alt={flower.name} className="flower-image" />
            <h3 className="flower-name">{flower.name}</h3>
            <p className="flower-meaning">{flower.meaning}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FlowerHolder;