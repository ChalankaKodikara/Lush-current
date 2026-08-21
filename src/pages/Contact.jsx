import { MapPin, Waves, MessageCircle } from "lucide-react";
import { property } from "../data/villas";

export default function Contact() {
  return (
    <main className="page-shell">
      <section className="landing-section contact-layout">
        <div className="contact-copy">
          <div className="section-kicker">GET IN TOUCH</div>
          <h1>Planning your<br />Ahangama stay?</h1>
          <p>For current availability, dates and booking questions, use the Airbnb listing or connect this form to your preferred email / WhatsApp booking workflow.</p>
          <div className="contact-points">
            <div><MapPin /><span><small>Location</small><strong>{property.shortLocation}</strong></span></div>
            <div><Waves /><span><small>Beach</small><strong>{property.beachDistance}</strong></span></div>
            <div><MessageCircle /><span><small>Host response</small><strong>{property.hostResponse}</strong></span></div>
          </div>
          <a className="primary-button" href={property.airbnbUrl} target="_blank" rel="noreferrer">Open Airbnb listing</a>
        </div>

        <form className="contact-form" onSubmit={(e) => e.preventDefault()}>
          <label>Name<input placeholder="Your name" /></label>
          <label>Email<input type="email" placeholder="you@example.com" /></label>
          <label>Travel dates<input placeholder="e.g. 10–14 September" /></label>
          <label>Message<textarea rows="6" placeholder="Tell us about your stay..." /></label>
          <button className="primary-button" type="submit">Send enquiry</button>
          <small>This demo form is UI-only until connected to a backend or email service.</small>
        </form>
      </section>
    </main>
  );
}
