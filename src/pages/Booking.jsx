import { useMemo, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { villas, money } from "../data/villas";

export default function Booking() {
  const [params] = useSearchParams();
  const [villaId,setVillaId] = useState(params.get("villa") || "ocean");
  const [checkIn,setCheckIn] = useState(params.get("checkIn") || "");
  const [checkOut,setCheckOut] = useState(params.get("checkOut") || "");
  const [guests,setGuests] = useState(Number(params.get("guests") || 2));
  const [breakfast,setBreakfast] = useState(false);
  const villa = villas.find(v=>v.id===villaId);
  const nights = useMemo(()=>{
    if(!checkIn || !checkOut) return 1;
    return Math.max(1, Math.ceil((new Date(checkOut)-new Date(checkIn))/86400000));
  },[checkIn,checkOut]);
  const stay = villa.price*nights;
  const extras = breakfast ? 4000*nights : 0;
  const service = Math.round((stay+extras)*0.1);
  const total = stay+extras+service;

  return <main className="page section booking-page">
    <div><p className="eyebrow">RESERVATION</p><h1>Book your stay.</h1><p className="lead">Choose your dates and we'll calculate your stay instantly.</p>
      <div className="form-grid">
        <label>Villa<select value={villaId} onChange={e=>setVillaId(e.target.value)}>{villas.map(v=><option value={v.id} key={v.id}>{v.name} — {money(v.price)}/night</option>)}</select></label>
        <label>Guests<input type="number" min="1" max={villa.guests} value={guests} onChange={e=>setGuests(e.target.value)}/></label>
        <label>Check in<input type="date" value={checkIn} onChange={e=>setCheckIn(e.target.value)}/></label>
        <label>Check out<input type="date" value={checkOut} onChange={e=>setCheckOut(e.target.value)}/></label>
      </div>
      <label className="extra"><input type="checkbox" checked={breakfast} onChange={e=>setBreakfast(e.target.checked)}/><span><strong>Daily breakfast</strong><small>LKR 4,000 / night</small></span></label>
    </div>
    <aside className="summary">
      <img src={villa.image} alt={villa.name}/><h3>{villa.name}</h3>
      <div className="summary-row"><span>{money(villa.price)} × {nights} night{nights>1?"s":""}</span><strong>{money(stay)}</strong></div>
      {breakfast && <div className="summary-row"><span>Breakfast</span><strong>{money(extras)}</strong></div>}
      <div className="summary-row"><span>Service charge (10%)</span><strong>{money(service)}</strong></div>
      <hr/><div className="summary-row total"><span>Total</span><strong>{money(total)}</strong></div>
      <button className="button full">Request booking</button><small className="note">Demo booking UI. Connect this button to your backend/payment flow when ready.</small>
    </aside>
  </main>
}