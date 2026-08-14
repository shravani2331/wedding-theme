import Image from "next/image";

export default function EventSection({ event, index }) {
  return (
    <section id={event.id} className={`event event-${event.id} ${index % 2 ? "event-reverse" : ""}`} style={{ "--bg": event.palette.bg, "--ink": event.palette.ink, "--accent": event.palette.accent, "--glow": event.palette.glow }}>
      <div className="wash wash-one" /><div className="wash wash-two" />
      <div className="event-mandala" aria-hidden="true"><span>✦</span></div>
      <div className="petal-field" aria-hidden="true"><i>❋</i><i>✦</i><i>❊</i><i>·</i><i>❋</i></div>
      <div className="corner-vine vine-left" aria-hidden="true">❧</div><div className="corner-vine vine-right" aria-hidden="true">❧</div>
      <div className="event-number">{event.number}</div>
      <div className="poster-wrap" data-reveal>
        <Image src={event.image} alt={`${event.name} event theme and dress code`} fill sizes="(max-width: 768px) 92vw, 45vw" className="poster" />
        <div className="poster-frame" />
      </div>
      <div className="event-copy" data-reveal>
        <div className="mini-motif stagger-item">✦</div>
        <p className="event-index stagger-item">{event.eyebrow}</p>
        <h2 className="stagger-item">{event.name}</h2>
        <p className="event-description stagger-item">{event.description}</p>
        <div className="dress stagger-item">
          <small>Come dressed in</small>
          {event.dress.shared ? (
            <div className="dress-shared"><h3>{event.dress.shared}</h3></div>
          ) : (
            <div className="dress-grid">
              <div><span>Women</span><h3>{event.dress.women}</h3></div>
              <div><span>Men</span><h3>{event.dress.men}</h3></div>
            </div>
          )}
          {event.dress.doodle === "sunglasses" && <div className="sunglasses-note"><div className="sunglasses-doodle" aria-hidden="true"><i /><i /><b /></div><strong>{event.dress.extra}</strong></div>}
        </div>
      </div>
    </section>
  );
}
