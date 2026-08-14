"use client";
import { useEffect, useState } from "react";

export default function Countdown({ date }) {
  const [left, setLeft] = useState(null);
  useEffect(() => {
    if (!date) return;
    const tick = () => setLeft(Math.max(0, new Date(date).getTime() - Date.now()));
    tick(); const timer = setInterval(tick, 1000); return () => clearInterval(timer);
  }, [date]);
  if (!date) return <p className="countdown-tbd">The date reveal is coming soon</p>;
  const units = [["Days", 86400000], ["Hours", 3600000], ["Minutes", 60000], ["Seconds", 1000]];
  return <div className="countdown">{units.map(([label, size], i) => {
    const value = i === 0 ? Math.floor(left / size) : Math.floor(left / size) % (i === 1 ? 24 : 60);
    return <div key={label}><strong>{String(value).padStart(2, "0")}</strong><span>{label}</span></div>;
  })}</div>;
}
