import { Link } from "react-router-dom";
import {
  ArrowRight,
  BedDouble,
  CalendarDays,
  ChevronRight,
  MapPin,
  ShieldCheck,
  Sparkles,
  Star,
  Users,
  Waves,
  Wifi,
} from "lucide-react";
import BookingBar from "../components/BookingBar";
import { villas, money } from "../data/villas";

export default function Home() {
  const featured = villas[0];

  return (
    <main className="landing-page">
      <section className="landing-hero">
        <div className="landing-hero-media">
          <img
            src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=2200&q=90"
            alt="Modern private villa"
          />
        </div>

        <div className="landing-hero-overlay" />

        <div className="landing-hero-content">
          <div className="landing-location-pill">
            <MapPin size={14} /> Sri Lanka
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
              Book your stay <ArrowRight size={17} />
            </Link>
            <Link className="landing-btn landing-btn-ghost" to="/villas">
              Explore the villa
            </Link>
          </div>
        </div>

        <div className="landing-price-chip">
          <span>Stays from</span>
          <strong>{money(featured.price)}</strong>
          <small>per night</small>
        </div>

        <BookingBar />
      </section>

      <section className="landing-section landing-intro">
        <div className="landing-section-label">THE LUSH EXPERIENCE</div>
        <div className="landing-intro-grid">
          <div>
            <h2>Minimal by design.<br />Rich in experience.</h2>
          </div>
          <div className="landing-intro-copy">
            <p>
              Lush Villa brings together warm architecture, private spaces and
              simple hospitality in one relaxed Sri Lankan escape.
            </p>
            <Link className="landing-inline-link" to="/villas">
              Discover the stay <ChevronRight size={16} />
            </Link>
          </div>
        </div>

        <div className="landing-stat-row">
          <div><strong>06</strong><span>Guests</span></div>
          <div><strong>03</strong><span>Bedrooms</span></div>
          <div><strong>01</strong><span>Private pool</span></div>
          <div><strong>24/7</strong><span>Guest support</span></div>
        </div>
      </section>

      <section className="landing-showcase landing-section">
        <div className="landing-showcase-image">
          <img
            src="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1500&q=88"
            alt="Elegant villa interior"
          />
          <div className="landing-image-note">
            <Sparkles size={16} /> Designed for effortless living
          </div>
        </div>

        <div className="landing-showcase-copy">
          <div className="landing-section-label">YOUR PRIVATE SPACE</div>
          <h2>Everything feels<br />a little lighter here.</h2>
          <p>
            Wake up slowly, spend the day by the pool, share long meals and
            enjoy the privacy of having the whole space to yourself.
          </p>

          <div className="landing-feature-list">
            <div><Waves /><span><strong>Private pool</strong><small>Swim, lounge and unwind in your own space.</small></span></div>
            <div><Wifi /><span><strong>Fast Wi-Fi</strong><small>Reliable connectivity throughout the villa.</small></span></div>
            <div><ShieldCheck /><span><strong>Private & secure</strong><small>A peaceful stay with comfort and privacy.</small></span></div>
          </div>
        </div>
      </section>

      <section className="landing-section landing-stay">
        <div className="landing-stay-top">
          <div>
            <div className="landing-section-label">FEATURED STAY</div>
            <h2>{featured.name}</h2>
          </div>
          <div className="landing-stay-price">
            <span>From</span>
            <strong>{money(featured.price)}</strong>
            <small>/ night</small>
          </div>
        </div>

        <div className="landing-stay-card">
          <div className="landing-stay-image">
            <img src={featured.image} alt={featured.name} />
          </div>
          <div className="landing-stay-info">
            <p>{featured.description}</p>
            <div className="landing-stay-meta">
              <span><Users size={18} /> {featured.guests} guests</span>
              <span><BedDouble size={18} /> {featured.bedrooms} bedrooms</span>
              <span><Waves size={18} /> Private pool</span>
            </div>
            <Link className="landing-btn landing-btn-dark" to={`/villas/${featured.id}`}>
              View villa details <ArrowRight size={17} />
            </Link>
          </div>
        </div>
      </section>

      <section className="landing-section landing-benefits">
        <div className="landing-section-label">WHY STAY WITH US</div>
        <div className="landing-benefit-grid">
          <article>
            <div className="landing-icon"><CalendarDays /></div>
            <h3>Easy booking</h3>
            <p>Choose your dates, guests and extras with a clear price summary.</p>
          </article>
          <article>
            <div className="landing-icon"><Sparkles /></div>
            <h3>Thoughtful comfort</h3>
            <p>Clean spaces, considered details and everything you need to settle in.</p>
          </article>
          <article>
            <div className="landing-icon"><Star /></div>
            <h3>Personal experience</h3>
            <p>A private stay with attentive support whenever you need it.</p>
          </article>
        </div>
      </section>

      <section className="landing-quote">
        <div>
          <p className="landing-section-label landing-light-label">STAY DIFFERENTLY</p>
          <h2>Leave the schedule behind.</h2>
          <p>Come for the villa. Stay for the feeling.</p>
          <Link className="landing-btn landing-btn-light" to="/booking">
            Check availability <ArrowRight size={17} />
          </Link>
        </div>
      </section>
    </main>
  );
}
