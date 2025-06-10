import styles from './GifCard.module.css';

const GifCard = ({ gif }) => {
  return (
    <div className={styles.gifCard}>
      <img
        className={styles.gifImage}
        src={gif.images.fixed_width.webp}
        alt={gif.title || 'GIF'}
        loading="lazy"
      />
    </div>
  );
};

export default GifCard;