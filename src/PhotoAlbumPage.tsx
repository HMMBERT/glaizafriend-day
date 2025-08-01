
import './App.css';

import p1 from './assets/p1.png';
import p2 from './assets/p2.png';
import p3 from './assets/p3.png';
import p4 from './assets/p4.png';
import p5 from './assets/p5.png';
import p6 from './assets/p6.png';
import p7 from './assets/p7.png';
import p8 from './assets/p8.png';
import p9 from './assets/p9.png';
import p10 from './assets/p10.png';
import p11 from './assets/p11.png';
import p12 from './assets/p12.png';
import p13 from './assets/p13.png';
import p14 from './assets/p14.png';
import p15 from './assets/p15.png';

const albumImages: string[] = [
    p1, p2, p3, p4, p5, p6, p7, p8, p9, p10, p11, p12, p13, p14, p15,
];

interface PhotoAlbumPageProps {
    onBack: () => void;
}

function PhotoAlbumPage({ onBack }: PhotoAlbumPageProps) {
    return (
        <div className="photo-album-page">
            <button className="back-button" onClick={onBack}>← Back</button>
            <div className="photo-album-grid">
                {albumImages.map((image, index) => (
                    <img key={index} src={image} alt={`A special memory ${index + 1}`} className="album-image" />
                ))}
            </div>
        </div>
    );
}

export default PhotoAlbumPage;