import { useState } from 'react';
import './App.css';
import Header from './Header';
import Message from './Message';
import PhotoGallery from './PhotoGallery';
import PhotoAlbumPage from './PhotoAlbumPage';
import SongHolder from './SongHolder';
import FlowerHolder from './Flowerholder'; 
import OurTimeTogether from './OurTimeTogether';

function App() {
  const name = "Glaiza";
  const [showAlbum, setShowAlbum] = useState(false);

  return (
    <div className="app-container">
      {showAlbum ? (
        <PhotoAlbumPage onBack={() => setShowAlbum(false)} />
      ) : (
        <>
          <Header />
          <main>
            <FlowerHolder /> {/* <-- Place the new component here */}
            <br></br>
            
            <SongHolder />
            <br></br>
             <OurTimeTogether /> 
            <Message name={name} />
            <PhotoGallery />
            <button className="photo-album-button" onClick={() => setShowAlbum(true)}>
              View More Photos
            </button>
          </main>
          <footer>
            <p>&copy; {new Date().getFullYear()} - All my love</p>
          </footer>
        </>
      )}
    </div>
  );
}

export default App;