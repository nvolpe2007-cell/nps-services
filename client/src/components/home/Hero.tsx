import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { ChevronRight, Phone } from "lucide-react";
import { trackCall } from "@/lib/tracking";

// Animated in Blender (blender/commercial_pour.py: rebar -> truck pours panel by
// panel -> cure), then restyled into photoreal drone footage in Runway. The
// poster is the finished slab, so visitors who never get the video (reduced
// motion, data saver) still see it.
const HERO_VIDEO_MP4 = "/video/hero-pour.mp4";
const HERO_VIDEO_WEBM = "/video/hero-pour.webm";
const HERO_POSTER = "/video/hero-pour.jpg";

function useShouldPlayVideo() {
  const [play, setPlay] = useState(false);
  useEffect(() => {
    const reduced = window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;
    const saveData = (navigator as Navigator & { connection?: { saveData?: boolean } })
      .connection?.saveData;
    setPlay(!reduced && !saveData);
  }, []);
  return play;
}

export function Hero() {
  const playVideo = useShouldPlayVideo();

  return (
    <section className="relative h-screen min-h-[600px] md:min-h-[800px] overflow-hidden bg-black">
      {/* Background: commercial pour animation, poster image as the fallback */}
      <div className="absolute inset-0">
        {playVideo ? (
          <video
            className="w-full h-full object-cover"
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
            poster={HERO_POSTER}
            aria-hidden="true"
          >
            <source src={HERO_VIDEO_WEBM} type="video/webm" />
            <source src={HERO_VIDEO_MP4} type="video/mp4" />
          </video>
        ) : (
          <img
            src={HERO_POSTER}
            alt="Freshly finished concrete slab with a ready-mix truck parked beside the forms"
            className="w-full h-full object-cover"
            width="1600"
            height="900"
            fetchPriority="high"
          />
        )}
        <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/55 to-black/10" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-black/30" />
      </div>

      {/* Content */}
      <div className="relative h-full flex items-center z-10 pt-24 md:pt-28">
        <div className="container mx-auto px-4 md:px-12 lg:px-20">
          <div className="max-w-3xl">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="mb-4 md:mb-6"
            >
              <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-3 md:px-4 py-2 border-l-4 border-red-500">
                <span className="text-[10px] md:text-xs font-bold tracking-[0.15em] md:tracking-[0.2em] uppercase text-white">
                  Houston's Parking Lot & Asphalt Experts
                </span>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold text-white mb-3 md:mb-4 leading-[0.95] tracking-tight">
                Commercial Concrete & Parking Lots
              </h1>
              <div className="h-1 bg-red-500 mb-4 md:mb-6 w-20 md:w-[120px]" />
              <p className="text-base md:text-xl text-white/85 max-w-xl leading-relaxed">
                Slabs, parking lots, sidewalks, concrete repair, striping and site work for
                developers, general contractors, property managers, cities and local
                businesses across Greater Houston.
              </p>
              <p className="mt-3 text-sm md:text-base text-white/60">
                17+ years in business &middot; A+ BBB rated &middot; Free bids
              </p>
            </motion.div>

            <motion.div
              className="flex flex-col sm:flex-row gap-3 md:gap-4 mt-8 md:mt-10"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.4 }}
            >
              <Button
                asChild
                size="lg"
                className="w-full sm:w-auto h-12 md:h-14 px-6 md:px-8 text-xs md:text-sm font-bold tracking-wider uppercase bg-red-600 text-white hover:bg-red-700 rounded-none"
              >
                <Link href="/contact">
                  Request a Bid
                  <ChevronRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <a
                href="tel:832-226-4018"
                onClick={() => trackCall("hero")}
                className="inline-flex items-center justify-center h-12 md:h-14 px-6 md:px-8 text-xs md:text-sm font-bold tracking-wider uppercase text-white border-2 border-white/30 hover:border-white hover:bg-white/10 transition-colors"
              >
                <Phone className="mr-2 h-4 w-4" />
                (832) 226-4018
              </a>
            </motion.div>

            <Link
              href="/commercial-concrete"
              className="inline-flex items-center mt-6 text-sm font-semibold uppercase tracking-wider text-white/70 hover:text-white"
            >
              See our commercial services
              <ChevronRight className="ml-1 h-4 w-4" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
