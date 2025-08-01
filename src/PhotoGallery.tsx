// Import the images directly. This allows the build tool to handle the paths correctly.
import image1 from './assets/1.png';
import image2 from './assets/2.png';
import image3 from './assets/3.png';

// Now, the `images` array contains the correct, bundled paths.
const images: string[] = [
  image1,
  image2,
  image3,
];

function PhotoGallery() {
  return (
    <div className="photo-gallery">
      {images.map((image, index) => (
        <img key={index} src={image} alt={`A special memory ${index + 1}`} className="gallery-image" />
      ))}
    </div>
  );
}

export default PhotoGallery;