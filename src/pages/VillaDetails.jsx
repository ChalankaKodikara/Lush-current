import { useParams, Link } from "react-router-dom";
import { villas, money } from "../data/villas";
import { Check, Users, BedDouble, Bath } from "lucide-react";

export default function VillaDetails() {
  const { id } = useParams();
  const v = villas.find(x=>x.id===id) || villas[0];
  return <main>
    <section className="detail-hero"><img src={v.image} alt={v.name}/></section>
    <section className="section detail-grid">
      <div><p className="eyebrow">{v.location}</p><h1>{v.name}</h1><div className="meta large"><span><Users/> {v.guests} guests</span><span><BedDouble/> {v.bedrooms} bedrooms</span><span><Bath/> {v.bathrooms} bathrooms</span></div><p className="lead">{v.description}</p><h3>Included with your stay</h3><div className="amenities-list">{v.amenities.map(a=><span key={a}><Check size={18}/>{a}</span>)}</div></div>
      <aside className="price-box"><p>From</p><h2>{money(v.price)}</h2><p>per night</p><hr/><p>Taxes and optional extras are calculated during booking.</p><Link className="button full" to={`/booking?villa=${v.id}`}>Check dates & book</Link></aside>
    </section>
  </main>
}