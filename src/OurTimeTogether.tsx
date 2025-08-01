import { useEffect, useState } from 'react';
import './OurTimeTogether.css';

const OurTimeTogether = () => {
    const startDate = new Date('2025-04-12T10:30:00');
    const [duration, setDuration] = useState({ years: 0, days: 0, hours: 0, minutes: 0, seconds: 0 });

    useEffect(() => {
        const calculateDuration = () => {
            const now = new Date();
            const diffInSeconds = Math.floor((now.getTime() - startDate.getTime()) / 1000);

            const years = Math.floor(diffInSeconds / (365.25 * 24 * 60 * 60));
            const remainingSecondsAfterYears = diffInSeconds % (365.25 * 24 * 60 * 60);

            const days = Math.floor(remainingSecondsAfterYears / (24 * 60 * 60));
            const remainingSecondsAfterDays = remainingSecondsAfterYears % (24 * 60 * 60);

            const hours = Math.floor(remainingSecondsAfterDays / (60 * 60));
            const remainingSecondsAfterHours = remainingSecondsAfterDays % (60 * 60);

            const minutes = Math.floor(remainingSecondsAfterHours / 60);
            const seconds = remainingSecondsAfterHours % 60;

            setDuration({ years, days, hours, minutes, seconds });
        };

        calculateDuration();
        const intervalId = setInterval(calculateDuration, 1000);

        return () => clearInterval(intervalId);
    }, []);

    return (
        <div className="our-time-together">
            <h2 className="title">Our Time Together</h2>
            <p className="message">
                Every second since we met has been a gift. On April 12, 2025, at 10:30 AM, our journey began, and my world became brighter.
                This special clock is a tribute to every moment, big and small, that we've shared.
            </p>
            <p className="duration-text">
                <span className="duration-number">
                    {duration.years > 0 && `${duration.years} year${duration.years !== 1 ? 's' : ''}, `}
                    {duration.days > 0 && `${duration.days} day${duration.days !== 1 ? 's' : ''}, `}
                </span>
                <span className="time-display">
                    {String(duration.hours).padStart(2, '0')}:{String(duration.minutes).padStart(2, '0')}:{String(duration.seconds).padStart(2, '0')}
                </span>
            </p>
        </div>
    );
};

export default OurTimeTogether;