import { ArrowDown, Heart, MapPin, ArrowUpRight } from "lucide-react";
import EventSection from "@/components/EventSection";
import FloatingNav from "@/components/FloatingNav";
import RevealObserver from "@/components/RevealObserver";
import { events, wedding } from "@/data/wedding";

export default function Home() {
  return <main>
    <RevealObserver />
    <FloatingNav />
    <section className="hero">
      <div className="hero-wash hero-wash-one" /><div className="hero-wash hero-wash-two" />
      <div className="toran" aria-hidden="true"><i>●</i><i>❋</i><i>●</i><i>❋</i><i>●</i><i>❋</i><i>●</i></div>
      <div className="hanging-diya diya-left" aria-hidden="true"><span>♢</span></div><div className="hanging-diya diya-right" aria-hidden="true"><span>♢</span></div>
      <div className="rangoli rangoli-left" aria-hidden="true">✤</div><div className="rangoli rangoli-right" aria-hidden="true">✤</div>
      <div className="hero-celebration" aria-hidden="true">
        <div className="color-pop pop-one" /><div className="color-pop pop-two" /><div className="color-pop pop-three" />
        <div className="firework firework-one"><i /><i /><i /><i /><i /><i /><i /><i /></div>
        <div className="firework firework-two"><i /><i /><i /><i /><i /><i /><i /><i /></div>
        <div className="flower-shower"><i>❋</i><i>✿</i><i>❊</i><i>❋</i><i>✿</i><i>❊</i><i>❋</i><i>✿</i><i>❊</i><i>❋</i><i>✿</i><i>❊</i></div>
        <div className="dancers"><span className="dancer dancer-one">●<i>╱│╲</i><b>╱ ╲</b></span><span className="dancer dancer-two">●<i>╲│╱</i><b>╱ ╲</b></span></div>
      </div>
      <div className="hero-motif">❋</div>
      <div className="hero-inner" data-reveal>
        <p className="kicker">Together with our families</p>
        <div className="hero-title"><span>8000 Miles</span><em>to</em><span>I Do</span></div>
        <p className="hero-copy">One love story · Six celebrations<br />Every mile led us here</p>
        <div className="wedding-date"><span>Save the dates</span><strong>{wedding.dateDisplay}</strong></div>
      </div>
      <a href="#celebrations" className="scroll-cue"><span>scroll into the celebration</span><ArrowDown size={17} /></a>
    </section>
    <section className="intro" id="celebrations">
      <div className="intro-flower">✤</div><p>THE WEDDING WEEK</p><h2>Come for the rituals.<br /><em>Stay for the magic.</em></h2>
      <p className="intro-copy">Six moments, each with a world of its own. Scroll for everything you need to arrive in the right place, at the right time, dressed for the story.</p>
      <div className="marquee"><span>Mehendi · Engagement · Haldi · Sangeet · Saptapadi · Varmala · </span></div>
    </section>
    {events.map((event, i) => <EventSection event={event} index={i} key={event.id} />)}
    <section className="finale" id="contact">
      <div className="finale-content">
        <div className="finale-ring"><Heart className="finale-heart" fill="currentColor" /></div><p className="kicker">With love, from</p>
        <h2>Save the dates.<br /><em>Bring your dancing shoes.</em></h2>
        <div className="venue-block">
          <span>The celebration awaits at</span><h3>The Amora Estate</h3>
          <p><MapPin size={16} /> Wagholi</p>
          <a href="https://share.google/KKWlUa0s0lCCNIY9h" target="_blank" rel="noreferrer">View location <ArrowUpRight size={16} /></a>
        </div>
        <p className="family-signoff">The Jadhav &amp; Gaikwad Families</p>
        <div className="signature">8000 Miles to I Do</div>
      </div>
    </section>
  </main>;
}
