import { useEffect, useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, ArrowRight, MapPin } from "lucide-react";

import BookingBar from "./BookingBar";
import { money } from "../data/villas";

import hero1 from "../assets/hero/hero-1.jpeg";
import hero2 from "../assets/hero/hero-2.jpeg";
import hero3 from "../assets/hero/hero-3.jpeg";
import hero4 from "../assets/hero/hero-4.jpeg";
import hero5 from "../assets/hero/hero-5.jpeg";
import hero6 from "../assets/hero/hero-6.jpeg";

export default function HeroSection({ featured }) {
  const heroImages = useMemo(
    () => [hero1, hero2, hero3, hero4, hero5, hero6],
    [],
  );

  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) =>
        prev === heroImages.length - 1 ? 0 : prev + 1,
      );
    }, 5000);

    return () => clearInterval(interval);
  }, [heroImages]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === heroImages.length - 1 ? 0 : prev + 1));
  };

  const previousSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? heroImages.length - 1 : prev - 1));
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  return (
    <section className="landing-hero">
      {/* =========================
          HERO IMAGE SLIDER
      ========================== */}
      <div className="landing-hero-media">
        {heroImages.map((image, index) => (
          <img
            key={image}
            src={image}
            alt={`Lush Villa ${index + 1}`}
            className={`landing-hero-slide ${
              currentSlide === index ? "active" : ""
            }`}
          />
        ))}
      </div>

      {/* Dark overlay */}
      <div className="landing-hero-overlay" />

      {/* =========================
          HERO CONTENT
      ========================== */}
      <div className="landing-hero-content">
        <div className="landing-location-pill">
          <MapPin size={14} />
          Sri Lanka
        </div>

        <p className="landing-kicker">PRIVATE VILLA EXPERIENCE</p>

        <h1>
          A quieter way
          <span>to stay.</span>
        </h1>

        <p className="landing-hero-text">
          Thoughtful spaces, tropical calm and private comfort — designed for
          slow days and memorable stays.
        </p>

        <div className="landing-hero-actions">
          <Link className="landing-btn landing-btn-light" to="/booking">
            Book your stay
            <ArrowRight size={17} />
          </Link>

          <Link className="landing-btn landing-btn-ghost" to="/villas">
            Explore the villa
          </Link>
        </div>
      </div>

      {/* =========================
          PRICE
      ========================== */}
      {featured && (
        <div className="landing-price-chip">
          <span>Stays from</span>

          <strong>{money(featured.price)}</strong>

          <small>per night</small>
        </div>
      )}

      {/* =========================
          SLIDER ARROWS
      ========================== */}
      <div className="hero-slider-controls">
        <button
          type="button"
          onClick={previousSlide}
          aria-label="Previous image"
        >
          <ArrowLeft size={18} />
        </button>

        <button type="button" onClick={nextSlide} aria-label="Next image">
          <ArrowRight size={18} />
        </button>
      </div>

      {/* =========================
          SLIDER DOTS
      ========================== */}
      <div className="hero-slider-dots">
        {heroImages.map((_, index) => (
          <button
            key={index}
            type="button"
            className={currentSlide === index ? "active" : ""}
            onClick={() => goToSlide(index)}
            aria-label={`Show image ${index + 1}`}
          />
        ))}
      </div>

      {/* =========================
          BOOKING SEARCH
      ========================== */}
      <BookingBar />
    </section>
  );
}
