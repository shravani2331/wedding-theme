"use client";
import { useEffect } from "react";

export default function RevealObserver() {
  useEffect(() => {
    const items = document.querySelectorAll("[data-reveal]");
    const sections = document.querySelectorAll(".event, .intro, .finale");
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12 });
    items.forEach((item) => observer.observe(item));
    const sectionObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) entry.target.classList.add("section-visible");
      });
    }, { threshold: 0.1 });
    sections.forEach((section) => sectionObserver.observe(section));
    return () => { observer.disconnect(); sectionObserver.disconnect(); };
  }, []);
  return null;
}
