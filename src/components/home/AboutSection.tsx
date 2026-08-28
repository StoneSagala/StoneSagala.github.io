"use client";

import { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Container from "@/components/ui/Container";
import ScrollReveal from "@/components/ui/ScrollReveal";

const songs = [
  { title: "Oil", artist: "Gorillaz", spotifyId: "36MGfjOTOwx1udRX5dDnoJ", image: "/images/songs/oil.jpg" },
  { title: "Sunday Candy", artist: "Nico Segal", spotifyId: "6fTdcGsjxlAD9PSkoPaLMX", image: "/images/songs/sunday-candy.jpg" },
  { title: "Fish and Poi", artist: "Sean Na'auao", spotifyId: "7A6K7roZu3VjaoqIPOkMrL", image: "/images/songs/fish-and-poi.jpg" },
  { title: "Cocoa Butter Kisses", artist: "Chance the Rapper", spotifyId: "5SVcXBFyidkEVbBgD9Sp3v", image: "/images/songs/cocoa-butter.jpg" },
];

const anime = [
  { title: "Vinland Saga", gif: "/images/anime/vinland-saga.gif", cover: "/images/anime/cover-vinland-saga.webp", objectPosition: "object-top" },
  { title: "Hunter x Hunter", gif: "/images/anime/hxh.gif", cover: "/images/anime/cover-hxh.jpg", objectPosition: "object-right" },
  { title: "Hajime no Ippo", gif: "/images/anime/hajime-no-ippo.gif", cover: "/images/anime/cover-hajime-no-ippo.avif", objectPosition: "object-top" },
  { title: "Psycho-Pass", gif: "/images/anime/psycho-pass.gif", cover: "/images/anime/cover-psycho-pass.jpg", objectPosition: "object-[center_75%]" },
];

const hobbies = [
  { name: "BJJ", desc: "The chess of martial arts. Slowly getting less bad.", image: "/images/hobbies/bjj.jpg", gif: "/images/hobbies/bjj.gif", objectPosition: "object-top" },
  { name: "Magic the Gathering", desc: "Commander format. I built an AI pipeline to build decks. Still lose to my friends.", image: "/images/hobbies/mtg.jpg", gif: "/images/hobbies/mtg.gif", objectPosition: "object-center" },
  { name: "Board Games", desc: "The longer the rulebook, the better. Wingspan, Root, Catan.", image: "/images/hobbies/board-games.jpg", gif: "/images/hobbies/board-games.gif", objectPosition: "object-center" },
  { name: "Travel", desc: "Any excuse to go somewhere new.", image: "/images/hobbies/travel.jpg", gif: "/images/hobbies/travel.gif", objectPosition: "object-center" },
];

const tabs = ["Hobbies", "Favorite Anime", "Top Songs"] as const;
type Tab = typeof tabs[number];


function SongCard({ song }: { song: typeof songs[0] }) {
  return (
    <iframe
      src={`https://open.spotify.com/embed/track/${song.spotifyId}?utm_source=generator&theme=0`}
      width="100%"
      height="212"
      frameBorder="0"
      allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
      loading="lazy"
      title={song.title}
      className="rounded-xl"
    />
  );
}

function AnimeCard({ show }: { show: typeof anime[0] }) {
  const [hovered, setHovered] = useState(false);
  const holdTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const startHold = () => {
    holdTimer.current = setTimeout(() => setHovered(true), 150);
  };
  const endHold = () => {
    if (holdTimer.current) clearTimeout(holdTimer.current);
    setHovered(false);
  };

  return (
    <div
      className={`overflow-hidden rounded-xl border bg-bg-secondary transition-colors ${hovered ? "border-border-hover" : "border-border"}`}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onTouchStart={startHold}
      onTouchEnd={endHold}
      onTouchCancel={endHold}
    >
      <div className="relative w-full h-44 overflow-hidden">
        <Image
          src={show.cover}
          alt={show.title}
          width={200}
          height={300}
          unoptimized
          className={`h-full w-full object-cover ${show.objectPosition}`}
        />
        <motion.div
          className="absolute inset-0"
          animate={{ opacity: hovered ? 1 : 0 }}
          transition={{ duration: 0.2 }}
        >
          <Image
            src={show.gif}
            alt={show.title}
            width={200}
            height={176}
            unoptimized
            className="h-full w-full object-cover"
          />
        </motion.div>
      </div>
      <div className="px-3 py-2">
        <p className="font-sans text-sm font-medium text-text-primary">{show.title}</p>
      </div>
    </div>
  );
}

function HobbyCard({ hobby }: { hobby: typeof hobbies[0] }) {
  const [hovered, setHovered] = useState(false);
  const [tapped, setTapped] = useState(false);

  const active = hovered || tapped;

  return (
    <div
      className={`overflow-hidden rounded-xl border bg-bg-secondary transition-colors duration-200 ${active ? "border-border-hover" : "border-border"}`}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onClick={() => setTapped((prev) => !prev)}
    >
      <div className="relative w-full h-44 overflow-hidden bg-bg-tertiary">
        <Image
          src={hobby.image}
          alt={hobby.name}
          width={400}
          height={176}
          unoptimized
          className={`h-full w-full object-cover ${hobby.objectPosition}`}
        />
        {hobby.gif && (
          <motion.div
            className="absolute inset-0"
            animate={{ opacity: active ? 1 : 0 }}
            transition={{ duration: 0.2 }}
          >
            <Image
              src={hobby.gif}
              alt={hobby.name}
              width={400}
              height={176}
              unoptimized
              className="h-full w-full object-cover"
            />
          </motion.div>
        )}
      </div>
      <div className="px-3 py-2">
        <p className="font-sans text-sm font-medium text-text-primary">{hobby.name}</p>
      </div>
    </div>
  );
}

export default function AboutSection() {
  const [activeTab, setActiveTab] = useState<Tab>("Hobbies");


  return (
    <section className="py-24 md:py-32">
      <Container>
        <ScrollReveal delay={0}>
          <p className="mb-2 font-sans text-sm text-accent">The other 16 hours</p>
        </ScrollReveal>
        <div className="mt-0 grid grid-cols-1 gap-12 md:grid-cols-[2fr_3fr] md:gap-16 md:items-start">
          {/* Bio */}
          <ScrollReveal delay={0}>
            <h2 className="font-sans text-3xl font-semibold tracking-tight text-text-primary md:text-4xl">
              Outside Design
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-text-secondary">
              Hey there! My name is Stone Sagala, just like The Rock, but a little bit smaller.
            </p>
            <p className="mt-4 text-lg leading-relaxed text-text-secondary">
              I got into design after realizing, with 6 months left in my Marketing degree, that I was tired of hearing about problems I couldn&apos;t fix. So I pivoted to a profession that actually lets me solve them.
            </p>
            <p className="mt-4 text-lg leading-relaxed text-text-secondary">
              I love a good challenge and learning new things. Whether it&apos;s cybersecurity, a new game, or just learning about people, there&apos;s always something fascinating to dive into.
            </p>
            <p className="mt-4 text-lg leading-relaxed text-text-secondary">
              Here are a couple of interesting things about me!
            </p>
          </ScrollReveal>

          {/* Tabbed fun facts */}
          <ScrollReveal delay={0.1}>
            <div>
              {/* Tabs */}
              <div className="mb-6 flex gap-6 border-b border-border">
                {tabs.map((tab) => (
                  <button
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    className={`pb-3 font-sans text-sm font-medium transition-colors ${
                      activeTab === tab
                        ? "border-b-2 border-accent text-accent"
                        : "text-text-secondary hover:text-text-primary"
                    }`}
                  >
                    {tab}
                  </button>
                ))}
              </div>

              {/* Tab content */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeTab}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{ duration: 0.2 }}
                  className="space-y-3"
                >
                  {activeTab === "Top Songs" && (
                    <div className="grid grid-cols-1 gap-1 sm:grid-cols-2 sm:gap-2">
                      {songs.map((song, i) => (
                        <SongCard key={i} song={song} />
                      ))}
                    </div>
                  )}
                  {activeTab === "Favorite Anime" && (
                    <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                      {anime.map((show, i) => (
                        <AnimeCard key={i} show={show} />
                      ))}
                    </div>
                  )}
                  {activeTab === "Hobbies" && (
                    <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                      {hobbies.map((hobby, i) => (
                        <HobbyCard key={i} hobby={hobby} />
                      ))}
                    </div>
                  )}
                </motion.div>
              </AnimatePresence>
            </div>
          </ScrollReveal>
        </div>
      </Container>
    </section>
  );
}
