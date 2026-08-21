import { ArrowUpRight, BedDouble, Users } from "lucide-react";
import { Link } from "react-router-dom";
import { money } from "../data/villas";

export default function VillaCard({ villa }) {
  return (
    <article className="villa-card">
      <Link to={`/villas/${villa.id}`} className="card-image"><img src={villa.image} alt={villa.name}/></Link>
      <div className="card-body">
        <div><p className="eyebrow">{villa.location}</p><h3>{villa.name}</h3></div>
        <div className="meta"><span><Users size={17}/>{villa.guests} guests</span><span><BedDouble size={17}/>{villa.bedrooms} bedrooms</span></div>
        <div className="card-bottom"><p>From <strong>{money(villa.price)}</strong> <small>/ night</small></p><Link className="round-link" to={`/villas/${villa.id}`}><ArrowUpRight/></Link></div>
      </div>
    </article>
  );
}