import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { CalendarDays, ChevronDown, Users } from "lucide-react";
import { DayPicker } from "react-day-picker";
import { format } from "date-fns";
import "react-day-picker/dist/style.css";

export default function BookingBar() {
  const nav = useNavigate();
  const [form, setForm] = useState({ checkIn: null, checkOut: null, guests: 2 });
  const [openPicker, setOpenPicker] = useState(null);
  const today = new Date();

  const go = () => {
    const checkIn = form.checkIn ? format(form.checkIn, "yyyy-MM-dd") : "";
    const checkOut = form.checkOut ? format(form.checkOut, "yyyy-MM-dd") : "";
    nav(`/booking?checkIn=${checkIn}&checkOut=${checkOut}&guests=${form.guests}`);
  };

  return (
    <div className="booking-bar-modern">
      <div className="booking-field">
        <button type="button" className="booking-field-button" onClick={() => setOpenPicker(openPicker === "checkIn" ? null : "checkIn")}>
          <span className="booking-field-icon"><CalendarDays size={18} /></span>
          <span className="booking-field-content"><small>Check in</small><strong>{form.checkIn ? format(form.checkIn, "dd MMM yyyy") : "Select date"}</strong></span>
          <ChevronDown size={16} />
        </button>
        {openPicker === "checkIn" && (
          <div className="booking-calendar-popover">
            <DayPicker
              mode="single"
              selected={form.checkIn}
              disabled={{ before: today }}
              showOutsideDays
              onSelect={(date) => {
                if (!date) return;
                setForm((prev) => ({ ...prev, checkIn: date, checkOut: prev.checkOut && prev.checkOut <= date ? null : prev.checkOut }));
                setOpenPicker("checkOut");
              }}
              className="villa-calendar"
            />
          </div>
        )}
      </div>

      <div className="booking-field">
        <button type="button" className="booking-field-button" onClick={() => setOpenPicker(openPicker === "checkOut" ? null : "checkOut")}>
          <span className="booking-field-icon"><CalendarDays size={18} /></span>
          <span className="booking-field-content"><small>Check out</small><strong>{form.checkOut ? format(form.checkOut, "dd MMM yyyy") : "Select date"}</strong></span>
          <ChevronDown size={16} />
        </button>
        {openPicker === "checkOut" && (
          <div className="booking-calendar-popover">
            <DayPicker
              mode="single"
              selected={form.checkOut}
              showOutsideDays
              disabled={{ before: form.checkIn ? new Date(form.checkIn.getFullYear(), form.checkIn.getMonth(), form.checkIn.getDate() + 1) : today }}
              onSelect={(date) => {
                if (!date) return;
                setForm((prev) => ({ ...prev, checkOut: date }));
                setOpenPicker(null);
              }}
              className="villa-calendar"
            />
          </div>
        )}
      </div>

      <div className="booking-field">
        <div className="booking-field-button static">
          <span className="booking-field-icon"><Users size={18} /></span>
          <span className="booking-field-content"><small>Guests</small>
            <select className="booking-guest-select" value={form.guests} onChange={(e) => setForm((prev) => ({ ...prev, guests: Number(e.target.value) }))}>
              {[1,2,3,4,5].map((guest) => <option key={guest} value={guest}>{guest} {guest === 1 ? "Guest" : "Guests"}</option>)}
            </select>
          </span>
          <ChevronDown size={16} />
        </div>
      </div>

      <button type="button" className="booking-availability-btn" onClick={go}>Check availability</button>
    </div>
  );
}
