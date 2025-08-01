import { useState, useRef, useEffect } from 'react';
import './SongHolder.css';

// --- Correct way to import and use assets ---
import SintaSong from './assets/Sinta.mp3';
import SintaArt from './assets/Sinta.png';

function SongHolder() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [duration, setDuration] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);

  const audioRef = useRef<HTMLAudioElement>(null);
  const progressBarRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const audio = audioRef.current;
    if (audio) {
      const setAudioData = () => {
        setDuration(audio.duration);
        setCurrentTime(audio.currentTime);
      }

      const setAudioTime = () => setCurrentTime(audio.currentTime);

      audio.addEventListener('loadeddata', setAudioData);
      audio.addEventListener('timeupdate', setAudioTime);

      return () => {
        audio.removeEventListener('loadeddata', setAudioData);
        audio.removeEventListener('timeupdate', setAudioTime);
      }
    }
  }, []);

  const togglePlayPause = () => {
    const audio = audioRef.current;
    if (audio) {
        if (isPlaying) {
            audio.pause();
        } else {
            audio.play();
        }
        setIsPlaying(!isPlaying);
    }
  };

  const formatTime = (time: number) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
  };

  const progress = duration > 0 ? (currentTime / duration) * 100 : 0;

  return (
    <div className="song-holder-container">
      <h2 className="song-section-title">Our Song</h2>
      <div className="song-and-message-flex">
        <div className="song-holder-card">
          {/* Use the imported variables here */}
          <audio ref={audioRef} src={SintaSong} preload="metadata" />
          <img src={SintaArt} alt="Album Art" className="song-art" />

          <div className="song-details">
            <div className="song-info">
              <span className="song-title">Sinta</span>
              <span className="song-artist">Rob Deniel</span>
            </div>
            <div className="favorite-icon">
                <svg viewBox="0 0 24 24"><path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/></svg>
            </div>
          </div>

          <div className="progress-bar-container" ref={progressBarRef}>
            <div className="progress-bar" style={{ width: `${progress}%` }}></div>
          </div>

          <div className="timestamps">
            <span>{formatTime(currentTime)}</span>
            <span>{formatTime(duration)}</span>
          </div>

          <div className="controls">
            <button className="control-btn shuffle">
                <svg viewBox="0 0 24 24"><path d="M10.59 9.17L5.41 4 4 5.41l5.17 5.17 1.42-1.41zM14.5 4l2.04 2.04L4 18.59 5.41 20 17.96 7.46 20 9.5V4h-5.5zm.33 9.41l-1.41 1.41 3.13 3.13L14.5 20H20v-5.5l-2.04 2.04-3.13-3.13z"/></svg>
            </button>
            <button className="control-btn">
                <svg viewBox="0 0 24 24"><path d="M6 6h2v12H6zm3.5 6l8.5 6V6z"/></svg>
            </button>
            <button className="control-btn play-pause" onClick={togglePlayPause}>
              {isPlaying ? (
                <svg viewBox="0 0 24 24"><path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z"/></svg>
              ) : (
                <svg viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg>
              )}
            </button>
            <button className="control-btn">
                <svg viewBox="0 0 24 24"><path d="M16 6h2v12h-2zm-3.5 6l-8.5 6V6z"/></svg>
            </button>
            <button className="control-btn repeat">
                <svg viewBox="0 0 24 24"><path d="M7 7h10v3l4-4-4-4v3H5v6h2V7zm10 10H7v-3l-4 4 4 4v-3h12v-6h-2v4z"/></svg>
            </button>
          </div>
        </div>

        <div className="song-message-card">
          <div className="song-message-card">
  <p className="song-message-text">To my Sinta,</p>
  <br></br>
  <p>This song says everything my heart struggles to put into words.</p>
  <p>“Ako'y maghihintay sa 'yong pagdating, at tatanggapin kita.”</p>
  <p>Just like the song, I’ll wait, I’ll stay, and I’ll love you—always.</p>
  <p>Kahit saglit, kahit panaginip lang… basta’t kasama ka.</p>
  <p>I love you, Glai.</p>
</div>

        </div>
      </div>
    </div>
  );
}

export default SongHolder;