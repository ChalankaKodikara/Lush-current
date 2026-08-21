import VillaCard from "../components/VillaCard";
import { villas } from "../data/villas";
export default function Villas() {
  return <main className="page section"><p className="eyebrow">OUR STAYS</p><h1>Private spaces,<br/><em>beautifully simple.</em></h1><p className="lead">Choose the villa that suits your stay. Every option includes thoughtful essentials and attentive service.</p><div className="cards top-gap">{villas.map(v=><VillaCard key={v.id} villa={v}/>)}</div></main>
}