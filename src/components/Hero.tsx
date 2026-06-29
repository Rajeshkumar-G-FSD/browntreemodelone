/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useRef, useEffect } from "react";
import { MapPin, Calendar, User, Search, Check, Sparkles } from "lucide-react";
import TextType from "./TextType";
import BlurText from "./BlurText";

const heroNature = "https://i.postimg.cc/9MBBdTWW/nature.png";

interface HeroProps {
  onSearch: (filters: { destination: string; checkIn: string; checkOut: string; guests: number }) => void;
  onExploreClick: () => void;
  onOpenBooking: () => void;
}

export default function Hero({ onSearch, onExploreClick, onOpenBooking }: HeroProps) {
  const [destination, setDestination] = useState("");
  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setCheckOut] = useState("");
  const [guests, setGuests] = useState(2);

  // Popover States
  const [showDestPopover, setShowDestPopover] = useState(false);
  const [showDatesPopover, setShowDatesPopover] = useState(false);
  const [showGuestsPopover, setShowGuestsPopover] = useState(false);

  const destRef = useRef<HTMLDivElement>(null);
  const datesRef = useRef<HTMLDivElement>(null);
  const guestsRef = useRef<HTMLDivElement>(null);

  const destinationsList = [
    { label: "Ooty", region: "Nilgiri Hills, India" },
    { label: "Kothagiri", region: "Nilgiri Hills, India" },
    { label: "Kodaikanal", region: "Palani Hills, India" }
  ];

  // Close popovers on click outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (destRef.current && !destRef.current.contains(event.target as Node)) {
        setShowDestPopover(false);
      }
      if (datesRef.current && !datesRef.current.contains(event.target as Node)) {
        setShowDatesPopover(false);
      }
      if (guestsRef.current && !guestsRef.current.contains(event.target as Node)) {
        setShowGuestsPopover(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleSearchClick = () => {
    onSearch({
      destination,
      checkIn: checkIn || "Anytime",
      checkOut: checkOut || "Anytime",
      guests
    });
  };

  return (
    <section
      id="home"
      className="relative min-h-[92vh] md:min-h-screen flex flex-col justify-center items-center text-white px-4 pt-24 md:pt-16 pb-20 md:pb-32 overflow-hidden"
    >
      {/* Background Image with Dark Linear Overlay for contrast */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroNature}
          alt="Luxe Sanctuary Nature View"
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover brightness-[0.75] scale-105 transition-transform duration-[10s] ease-out select-none"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-brand-primary/40 via-brand-primary/10 to-brand-primary/60" />
      </div>

      {/* Main Hero Content */}
      <div className="relative z-10 max-w-4xl mx-auto text-center space-y-6 md:space-y-8 animate-fade-in-up mt-8 md:mt-16">
        <div className="flex items-center justify-center space-x-2 text-xs md:text-sm font-semibold tracking-[0.3em] text-brand-gold-light uppercase">
          <Sparkles size={16} />
          <span>Curated Global Sanctuaries</span>
        </div>

        <TextType
          text="Luxury Stay Experience"
          className="font-display text-4xl sm:text-5xl md:text-7xl font-medium tracking-tight text-brand-background leading-[1.1]"
          as="h1"
          typingSpeed={60}
          initialDelay={300}
          loop={false}
          showCursor={true}
          cursorCharacter="|"
          cursorClassName="text-brand-gold-light"
        />

        <BlurText
          text="Discover unparalleled tranquility and bespoke elegance at our curated global properties. Your sanctuary awaits."
          className="font-sans text-sm sm:text-base md:text-lg text-brand-background/85 max-w-2xl mx-auto font-light leading-relaxed px-2"
          delay={40}
          animateBy="words"
          direction="top"
        />

        {/* Hero CTA Action buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
          <button
            id="hero-book-now-cta"
            onClick={onOpenBooking}
            className="w-full sm:w-auto bg-brand-primary text-brand-gold-light hover:bg-brand-secondary hover:text-white font-sans text-xs font-semibold tracking-[0.2em] py-4 px-8 rounded-full shadow-lg shadow-brand-primary/30 transition-all duration-300 hover:scale-105 active:scale-95 cursor-pointer"
          >
            BOOK NOW
          </button>
          <button
            id="hero-explore-cta"
            onClick={onExploreClick}
            className="w-full sm:w-auto glass-panel text-white hover:bg-white hover:text-brand-primary font-sans text-xs font-semibold tracking-[0.2em] py-4 px-8 rounded-full border border-white/20 transition-all duration-300 hover:scale-105 active:scale-95 cursor-pointer"
          >
            EXPLORE PROPERTIES
          </button>
        </div>
      </div>

      {/* Floating Glassmorphic Search Container */}
      <div className="relative z-20 w-full max-w-5xl mx-auto mt-12 md:mt-20 px-2">
        <div
          id="hero-search-bar"
          className="glass-panel rounded-2xl md:rounded-full p-4 md:py-3 md:pl-8 md:pr-3 flex flex-col md:flex-row gap-4 md:gap-0 items-center justify-between shadow-2xl border border-white/40 shadow-brand-primary/10 w-full"
        >
          {/* Destination Field */}
          <div ref={destRef} className="relative flex-1 w-full text-left md:border-r border-brand-primary/10 md:pr-4">
            <button
              id="search-dest-button"
              onClick={() => {
                setShowDestPopover(!showDestPopover);
                setShowDatesPopover(false);
                setShowGuestsPopover(false);
              }}
              className="flex items-center space-x-3 w-full p-2 hover:bg-black/5 rounded-xl transition text-left focus:outline-none cursor-pointer"
            >
              <MapPin className="text-brand-secondary shrink-0" size={18} />
              <div className="overflow-hidden">
                <span className="block text-[10px] font-bold tracking-[0.1em] text-brand-primary/65 uppercase">
                  DESTINATION
                </span>
                <span className="block text-sm font-semibold text-brand-primary truncate">
                  {destination || "Where to?"}
                </span>
              </div>
            </button>

            {showDestPopover && (
              <div className="absolute top-[110%] left-0 z-30 w-full sm:w-[280px] bg-white rounded-2xl shadow-xl border border-brand-primary/5 p-3 mt-1 animate-scale-up">
                <p className="text-[10px] font-bold tracking-widest text-brand-primary/50 px-2 pb-2 border-b border-brand-primary/5">
                  POPULAR SANCTUARIES
                </p>
                <div className="space-y-1 mt-2">
                  <button
                    onClick={() => {
                      setDestination("");
                      setShowDestPopover(false);
                    }}
                    className="flex items-center justify-between w-full text-left text-xs font-semibold py-2 px-3 rounded-lg hover:bg-brand-background text-brand-primary"
                  >
                    <span>All Locations</span>
                    {destination === "" && <Check size={14} className="text-brand-secondary" />}
                  </button>
                  {destinationsList.map((dest) => (
                    <button
                      key={dest.label}
                      onClick={() => {
                        setDestination(dest.label);
                        setShowDestPopover(false);
                      }}
                      className="flex items-center justify-between w-full text-left py-2 px-3 rounded-lg hover:bg-brand-background transition cursor-pointer"
                    >
                      <div>
                        <span className="block text-xs font-semibold text-brand-primary">{dest.label}</span>
                        <span className="block text-[10px] text-brand-primary/50">{dest.region}</span>
                      </div>
                      {destination === dest.label && <Check size={14} className="text-brand-secondary" />}
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Check In / Out Dates Field */}
          <div ref={datesRef} className="relative flex-1 w-full text-left md:border-r border-brand-primary/10 md:px-6">
            <button
              id="search-dates-button"
              onClick={() => {
                setShowDatesPopover(!showDatesPopover);
                setShowDestPopover(false);
                setShowGuestsPopover(false);
              }}
              className="flex items-center space-x-3 w-full p-2 hover:bg-black/5 rounded-xl transition text-left focus:outline-none cursor-pointer"
            >
              <Calendar className="text-brand-secondary shrink-0" size={18} />
              <div>
                <span className="block text-[10px] font-bold tracking-[0.1em] text-brand-primary/65 uppercase">
                  TRAVEL DATES
                </span>
                <span className="block text-sm font-semibold text-brand-primary truncate">
                  {checkIn && checkOut ? `${checkIn} to ${checkOut}` : "Add dates"}
                </span>
              </div>
            </button>

            {showDatesPopover && (
              <div className="absolute top-[110%] left-0 sm:left-1/2 sm:-translate-x-1/2 z-30 w-full sm:w-[320px] bg-white rounded-2xl shadow-xl border border-brand-primary/5 p-4 mt-1 animate-scale-up">
                <p className="text-[10px] font-bold tracking-widest text-brand-primary/50 pb-2 border-b border-brand-primary/5 text-center">
                  SELECT DATES
                </p>
                <div className="grid grid-cols-2 gap-3 mt-3">
                  <div>
                    <label className="block text-[9px] font-bold text-brand-primary/50 tracking-wider uppercase mb-1">
                      Check-In
                    </label>
                    <input
                      type="date"
                      value={checkIn}
                      onChange={(e) => setCheckIn(e.target.value)}
                      className="w-full border border-brand-primary/15 rounded-lg p-2 text-xs text-brand-primary focus:outline-none focus:border-brand-secondary"
                    />
                  </div>
                  <div>
                    <label className="block text-[9px] font-bold text-brand-primary/50 tracking-wider uppercase mb-1">
                      Check-Out
                    </label>
                    <input
                      type="date"
                      value={checkOut}
                      onChange={(e) => setCheckOut(e.target.value)}
                      className="w-full border border-brand-primary/15 rounded-lg p-2 text-xs text-brand-primary focus:outline-none focus:border-brand-secondary"
                    />
                  </div>
                </div>
                <div className="flex justify-between items-center mt-4 pt-3 border-t border-brand-primary/5">
                  <button
                    onClick={() => {
                      setCheckIn("");
                      setCheckOut("");
                    }}
                    className="text-[10px] font-bold text-brand-primary/40 hover:text-brand-secondary"
                  >
                    RESET
                  </button>
                  <button
                    onClick={() => setShowDatesPopover(false)}
                    className="bg-brand-primary text-brand-gold-light text-[10px] font-bold px-3 py-1.5 rounded-full"
                  >
                    APPLY
                  </button>
                </div>
              </div>
            )}
          </div>

          {/* Guests Field */}
          <div ref={guestsRef} className="relative flex-1 w-full text-left md:px-6">
            <button
              id="search-guests-button"
              onClick={() => {
                setShowGuestsPopover(!showGuestsPopover);
                setShowDestPopover(false);
                setShowDatesPopover(false);
              }}
              className="flex items-center space-x-3 w-full p-2 hover:bg-black/5 rounded-xl transition text-left focus:outline-none cursor-pointer"
            >
              <User className="text-brand-secondary shrink-0" size={18} />
              <div>
                <span className="block text-[10px] font-bold tracking-[0.1em] text-brand-primary/65 uppercase">
                  GUESTS
                </span>
                <span className="block text-sm font-semibold text-brand-primary truncate">
                  {guests} {guests === 1 ? "Guest" : "Guests"}
                </span>
              </div>
            </button>

            {showGuestsPopover && (
              <div className="absolute top-[110%] right-0 z-30 w-full sm:w-[240px] bg-white rounded-2xl shadow-xl border border-brand-primary/5 p-4 mt-1 animate-scale-up">
                <p className="text-[10px] font-bold tracking-widest text-brand-primary/50 pb-2 border-b border-brand-primary/5">
                  SELECT GUESTS
                </p>
                <div className="flex items-center justify-between py-3">
                  <span className="text-xs font-semibold text-brand-primary">Adults & Children</span>
                  <div className="flex items-center space-x-3">
                    <button
                      onClick={() => setGuests(Math.max(1, guests - 1))}
                      className="w-8 h-8 rounded-full border border-brand-primary/10 flex items-center justify-center text-brand-primary hover:border-brand-secondary hover:text-brand-secondary text-sm font-bold focus:outline-none"
                    >
                      -
                    </button>
                    <span className="text-sm font-bold text-brand-primary w-4 text-center">{guests}</span>
                    <button
                      onClick={() => setGuests(Math.min(10, guests + 1))}
                      className="w-8 h-8 rounded-full border border-brand-primary/10 flex items-center justify-center text-brand-primary hover:border-brand-secondary hover:text-brand-secondary text-sm font-bold focus:outline-none"
                    >
                      +
                    </button>
                  </div>
                </div>
                <button
                  onClick={() => setShowGuestsPopover(false)}
                  className="w-full bg-brand-primary text-brand-gold-light text-[10px] font-bold py-2 rounded-full text-center mt-2 uppercase tracking-wider"
                >
                  Confirm Guests
                </button>
              </div>
            )}
          </div>

          {/* Search CTA Round Button */}
          <div className="w-full md:w-auto flex justify-end">
            <button
              id="search-submit-cta"
              onClick={handleSearchClick}
              className="bg-brand-primary hover:bg-brand-secondary text-brand-gold-light p-4 rounded-full transition-all duration-300 hover:scale-105 active:scale-95 shadow-lg shadow-brand-primary/10 flex items-center justify-center w-full md:w-12 md:h-12 border border-brand-gold-light/20 cursor-pointer"
              title="Search Sanctuaries"
            >
              <Search size={20} className="shrink-0" />
              <span className="md:hidden ml-2 font-semibold text-xs tracking-widest">SEARCH PROPERTIES</span>
            </button>
          </div>
        </div>
      </div>

      {/* Swoooping Organic Curved Separator */}
      <div className="absolute bottom-0 left-0 right-0 z-10 overflow-hidden line-height-0 pointer-events-none select-none">
        <svg
          viewBox="0 0 1440 120"
          fill="none"
          preserveAspectRatio="none"
          className="relative block w-full h-[40px] sm:h-[80px] md:h-[120px]"
        >
          <path d="M0,0 Q720,120 1440,0 L1440,120 L0,120 Z" fill="#fcf9f8" />
        </svg>
      </div>
    </section>
  );
}
