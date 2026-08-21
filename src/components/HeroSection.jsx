import { useEffect, useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, ArrowRight, MapPin, Star } from "lucide-react";
import BookingBar from "./BookingBar";
import { money } from "../data/villas";

export default function HeroSection({ featured }) {
  const heroImages = useMemo(() => featured.images, [featured.images]);
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev === heroImages.length - 1 ? 0 : prev + 1));
    }, 5000);
    return () => clearInterval(interval);
  }, [heroImages.length]);

  const nextSlide = () => setCurrentSlide((prev) => (prev === heroImages.length - 1 ? 0 : prev + 1));
  const previousSlide = () => setCurrentSlide((prev) => (prev === 0 ? heroImages.length - 1 : prev - 1));

  return (
    <section className="landing-hero">
      <div className="landing-hero-media">
        {heroImages.map((image, index) => (
          <img
            key={image}
            src={image}
            alt={`Lush Current view ${index + 1}`}
            className={`landing-hero-slide ${currentSlide === index ? "active" : ""}`}
          />
        ))}
      </div>
      <div className="landing-hero-overlay" />

      <div className="landing-hero-content">
        <div className="hero-location-badge">
          <span className="hero-location-icon"><MapPin size={15} /></span>
          <span><small>AHANGAMA WEST</small><strong>Sri Lanka</strong></span>
        </div>
        <p className="landing-kicker">BOUTIQUE GUESTHOUSE · 50 M FROM ZION BEACH</p>
        <h1>Lush Current.<span>Stay close to the sea.</span></h1>
        <p className="landing-hero-text">
          Two king rooms, a private balcony, tropical garden and easy access to Ahangama’s surf, cafes and sunsets.
        </p>
        <div className="landing-hero-actions">
          <Link className="landing-btn landing-btn-light" to="/booking">Book your stay <ArrowRight size={17} /></Link>
          <Link className="landing-btn landing-btn-ghost" to="/villas/lush-current">Explore the stay</Link>
        </div>
        <div className="hero-rating"><Star size={15} fill="currentColor" /> <strong>{featured.rating.toFixed(1)}</strong><span>Guest favourite · {featured.reviewCount} reviews</span></div>
      </div>

      <div className="landing-price-chip">
        <span>Direct rate from</span>
        <strong>{money(featured.price)}</strong>
        <small>per night · configured website rate</small>
      </div>

      <div className="hero-slider-controls">
        <button type="button" onClick={previousSlide} aria-label="Previous image"><ArrowLeft size={18} /></button>
        <button type="button" onClick={nextSlide} aria-label="Next image"><ArrowRight size={18} /></button>
      </div>

      <div className="hero-slider-dots">
        {heroImages.map((_, index) => (
          <button key={index} type="button" className={currentSlide === index ? "active" : ""} onClick={() => setCurrentSlide(index)} aria-label={`Show image ${index + 1}`} />
        ))}
      </div>

      <BookingBar />
    </section>
  );
}
