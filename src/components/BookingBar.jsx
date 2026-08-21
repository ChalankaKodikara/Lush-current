import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function BookingBar() {
  const nav = useNavigate();
  const [form, setForm] = useState({ checkIn:"", checkOut:"", guests:2 });
  const go = () => nav(`/booking?checkIn=${form.checkIn}&checkOut=${form.checkOut}&guests=${form.guests}`);
  return (
    <div className="booking-bar">
      <label><span>Check in</span><input type="date" value={form.checkIn} onChange={e=>setForm({...form,checkIn:e.target.value})}/></label>
      <label><span>Check out</span><input type="date" value={form.checkOut} onChange={e=>setForm({...form,checkOut:e.target.value})}/></label>
      <label><span>Guests</span><select value={form.guests} onChange={e=>setForm({...form,guests:e.target.value})}>{[1,2,3,4,5,6].map(x=><option key={x}>{x}</option>)}</select></label>
      <button onClick={go}>Check availability</button>
    </div>
  );
}