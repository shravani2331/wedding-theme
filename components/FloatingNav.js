"use client";
import { useEffect, useState } from "react";
import { events } from "@/data/wedding";

export default function FloatingNav() {
  const [active, setActive] = useState(events[0].id);
  useEffect(() => {
    const obs = new IntersectionObserver(entries => entries.forEach(e => e.isIntersecting && setActive(e.target.id)), { rootMargin: "-40% 0px -45%" });
    events.forEach(e => { const el = document.getElementById(e.id); if (el) obs.observe(el); });
    return () => obs.disconnect();
  }, []);
  return <nav className="floating-nav" aria-label="Event navigation">{events.map(e => <a key={e.id} href={`#${e.id}`} className={active === e.id ? "active" : ""}><span>{e.number}</span><b>{e.name}</b></a>)}</nav>;
}
