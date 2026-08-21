import { Link } from "react-router-dom";
import {
  ArrowRight,
  BedDouble,
  BriefcaseBusiness,
  ChevronRight,
  CookingPot,
  MapPin,
  ParkingCircle,
  PawPrint,
  Star,
  Trees,
  Users,
  Waves,
  Wifi,
} from "lucide-react";
import HeroSection from "../components/HeroSection";
import { property, money } from "../data/villas";

export default function Home() {
  return (
    <main className="landing-page">
      <HeroSection featured={property} />

      <section className="landing-section intro-section">
        <div className="section-kicker">THE LUSH CURRENT EXPERIENCE</div>
        <div className="intro-grid">
          <h2>Two king rooms.<br />One easy coastal stay.</h2>
          <div>
            <p>
              A spacious upstairs guesthouse in Ahangama West with a private balcony,
              tropical garden, outdoor dining and shared kitchen access — only 50 metres
              from Zion Beach.
            </p>
            <Link className="inline-link" to="/villas/lush-current">Discover the space <ChevronRight size={16} /></Link>
          </div>
        </div>

        <div className="stat-row">
          <div><strong>5</strong><span>Guests maximum</span></div>
          <div><strong>2</strong><span>King bedrooms</span></div>
          <div><strong>2</strong><span>Bathrooms</span></div>
          <div><strong>50 m</strong><span>From Zion Beach</span></div>
        </div>
      </section>

      <section className="landing-section experience-grid">
        <div className="experience-photo large"><img src={property.images[0]} alt="Lush Current outdoor dining area" /></div>
        <div className="experience-copy">
          <div className="section-kicker">SPACE TO SETTLE IN</div>
          <h2>Garden mornings.<br />Beach afternoons.</h2>
          <p>
            Start the day with tropical garden views, prepare a simple meal in the shared
            kitchen and finish with a short walk to the beach for surf or sunset.
          </p>
          <div className="feature-list">
            <div><Waves /><span><strong>Beach access</strong><small>Zion Beach is just 50 metres away.</small></span></div>
            <div><CookingPot /><span><strong>Shared kitchen</strong><small>Available for preparing your own meals.</small></span></div>
            <div><Trees /><span><strong>Garden & outdoor dining</strong><small>Relax, eat and spend time outside.</small></span></div>
          </div>
        </div>
      </section>

      <section className="landing-section stay-section">
        <div className="stay-heading">
          <div><div className="section-kicker">THE STAY</div><h2>{property.listingName}</h2></div>
          <div className="stay-rate"><span>Direct website rate from</span><strong>{money(property.price)}</strong><small>per night</small></div>
        </div>

        <div className="stay-card">
          <div className="stay-card-image"><img src={property.images[1]} alt="Lush Current king bedroom" /></div>
          <div className="stay-card-content">
            <div className="rating-line"><Star size={16} fill="currentColor" /> {property.rating.toFixed(1)} · Guest favourite · {property.reviewCount} reviews</div>
            <p>{property.description}</p>
            <div className="stay-meta">
              <span><Users size={18} /> {property.guests} guests</span>
              <span><BedDouble size={18} /> {property.bedrooms} bedrooms</span>
              <span><MapPin size={18} /> Ahangama West</span>
            </div>
            <Link className="primary-button" to="/villas/lush-current">View full details <ArrowRight size={17} /></Link>
          </div>
        </div>
      </section>

      <section className="landing-section amenities-section">
        <div className="section-kicker">EVERYDAY COMFORT</div>
        <div className="amenities-grid">
          <article><Wifi /><h3>Wi-Fi</h3><p>Stay connected throughout your visit.</p></article>
          <article><BriefcaseBusiness /><h3>Workspace</h3><p>A dedicated place to work when you need it.</p></article>
          <article><ParkingCircle /><h3>Free parking</h3><p>Parking is available on the premises.</p></article>
          <article><PawPrint /><h3>Pet friendly</h3><p>Your furry travel companion is welcome too.</p></article>
        </div>
      </section>

      <section className="landing-section nearby-section">
        <div>
          <div className="section-kicker">AROUND AHANGAMA</div>
          <h2>Surf, swim, eat,<br />then do it again.</h2>
        </div>
        <div className="nearby-list">
          {property.nearby.map((item, index) => <div key={item}><span>{String(index + 1).padStart(2,"0")}</span><p>{item}</p></div>)}
        </div>
      </section>

      <section className="review-strip">
        <div><Star size={20} fill="currentColor" /><strong>5.0</strong><span>Guest favourite on Airbnb</span></div>
        <p>Recent guests rate check-in and host communication especially highly.</p>
        <a href={property.airbnbUrl} target="_blank" rel="noreferrer">View Airbnb listing <ArrowRight size={16} /></a>
      </section>

      <section className="final-cta">
        <div>
          <div className="section-kicker light">YOUR AHANGAMA STAY</div>
          <h2>Sea air is<br />50 metres away.</h2>
          <p>Choose your dates and start planning a slower stay on Sri Lanka’s south coast.</p>
          <Link className="light-button" to="/booking">Check availability <ArrowRight size={17} /></Link>
        </div>
      </section>
    </main>
  );
}
