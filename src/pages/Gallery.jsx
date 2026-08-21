import { property } from "../data/villas";

export default function Gallery() {
  return (
    <main className="page-shell">
      <section className="page-hero compact">
        <div className="section-kicker">GALLERY</div>
        <h1>A little look<br />around Lush Current.</h1>
        <p>Bedrooms, shared spaces, outdoor dining and the tropical setting around your Ahangama stay.</p>
      </section>
      <section className="landing-section gallery-grid">
        {property.images.map((image, index) => <figure key={image} className={index === 0 || index === 3 ? "wide" : ""}><img src={image} alt={`Lush Current gallery ${index + 1}`} /></figure>)}
      </section>
    </main>
  );
}
