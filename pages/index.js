import React from "react"; import { motion } from "framer-motion"; import { Button } from "@/components/ui/button"; import { Card, CardContent } from "@/components/ui/card"; import { Youtube, Mail } from "lucide-react";

export default function RajeyWebsite() { return ( <div className="min-h-screen bg-black text-white font-sans selection:bg-white selection:text-black"> {/* NAVBAR */} <nav className="flex justify-between items-center px-8 py-6 border-b border-neutral-900 backdrop-blur-xl bg-black/70 fixed w-full z-50"> <h1 className="text-2xl font-semibold tracking-[0.4em]">RAJEY</h1> <div className="space-x-8 text-xs tracking-[0.3em] hidden md:block uppercase"> <a href="#about" className="hover:text-neutral-400 transition">About</a> <a href="#music" className="hover:text-neutral-400 transition">Music</a> <a href="#videos" className="hover:text-neutral-400 transition">Videos</a> <a href="#store" className="hover:text-neutral-400 transition">Store</a> <a href="#contact" className="hover:text-neutral-400 transition">Contact</a> </div> </nav>

{/* HERO */}
  <section
    className="h-screen flex flex-col justify-center items-center text-center px-6 bg-cover bg-center relative"
    style={{ backgroundImage: "url('/mnt/data/IMG_7167.jpeg')" }}
  >
    <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/60 to-black" />

    <motion.div
      initial={{ opacity: 0, y: 60 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1.4 }}
      className="relative z-10 max-w-4xl"
    >
      <h2 className="text-6xl md:text-8xl font-bold tracking-tight mb-8">
        RAJEY
      </h2>

      <p className="text-lg md:text-xl text-neutral-300 mb-12 tracking-wide">
        Sound. Vision. Evolution.
      </p>

      <div className="flex justify-center gap-6 flex-wrap">
        <a
          href="https://open.spotify.com/artist/6dfXoh79Ln2Zd3cGebRteg?si=ADfkqiJMQXm_96VzbZ02IQ"
          target="_blank"
        >
          <Button className="rounded-2xl px-10 py-6 text-lg bg-white text-black hover:bg-neutral-300 transition">
            Stream
          </Button>
        </a>

        <a href="#about">
          <Button className="rounded-2xl px-10 py-6 text-lg border border-white bg-transparent hover:bg-white hover:text-black transition">
            Enter
          </Button>
        </a>
      </div>
    </motion.div>
  </section>

  {/* ABOUT */}
  <section id="about" className="py-32 px-8 max-w-6xl mx-auto grid md:grid-cols-2 gap-20 items-center">
    <div>
      <h3 className="text-4xl font-semibold mb-10 tracking-wide">About</h3>
      <p className="text-neutral-400 leading-9 text-lg">
        Jeremiah Rapha Mwanamputu (born May 7, 1995), professionally known as Rajey, is a rapper, singer-songwriter and dancer. Recognised as a key figure in the rise of hip-hop gospel in the Democratic Republic of the Congo, he ignited a youth-driven movement in Kinshasa with his 2013 debut mixtape “Think Like a Prophet.”
        <br /><br />
        In 2020, he unveiled his first EP, “Invincible,” featuring “Esperance” and the defining record “Tendre Ami.” The momentum led to endorsements from Trace TV and a partnership with Ziiki Media in 2021, where he released “Smile Again.”
        <br /><br />
        After a five-year hiatus and a widely discussed personal transformation, Rajey returned on February 23rd, 2026 with “Solstice Machine,” signalling a new artistic chapter shaped by cinematic production and genre-blending influences.
      </p>
    </div>

    <div className="rounded-3xl overflow-hidden shadow-2xl border border-neutral-900">
      <img
        src="/mnt/data/IMG_7168.jpeg"
        alt="Rajey portrait"
        className="w-full h-full object-cover"
      />
    </div>
  </section>

  {/* MUSIC */}
  <section id="music" className="py-32 px-8 bg-neutral-950">
    <h3 className="text-4xl font-semibold mb-16 text-center tracking-wide">Selected Works</h3>

    <div className="grid md:grid-cols-3 gap-12 max-w-6xl mx-auto">
      {["Solstice Machine", "Tendre Ami", "Smile Again"].map((track, index) => (
        <Card
          key={index}
          className="bg-neutral-900 border border-neutral-800 rounded-3xl hover:border-white/40 transition-all duration-500"
        >
          <CardContent className="p-10">
            <h4 className="text-2xl font-semibold mb-4 tracking-wide">{track}</h4>
            <p className="text-neutral-500 text-sm mb-8 uppercase tracking-widest">
              Available Worldwide
            </p>

            <a
              href="https://open.spotify.com/artist/6dfXoh79Ln2Zd3cGebRteg?si=ADfkqiJMQXm_96VzbZ02IQ"
              target="_blank"
            >
              <Button className="w-full rounded-2xl bg-white text-black hover:bg-neutral-300 transition">
                Listen
              </Button>
            </a>
          </CardContent>
        </Card>
      ))}
    </div>
  </section>

  {/* VIDEOS */}
  <section id="videos" className="py-32 px-8 max-w-6xl mx-auto">
    <h3 className="text-4xl font-semibold mb-16 text-center tracking-wide">Visuals</h3>

    <div className="grid md:grid-cols-2 gap-14">
      <iframe
        className="w-full aspect-video rounded-3xl border border-neutral-900"
        src="https://www.youtube.com/embed?listType=user_uploads&list=rajey1861"
        title="YouTube video player"
        allowFullScreen
      ></iframe>

      <div className="flex items-center justify-center bg-neutral-900 rounded-3xl border border-neutral-900">
        <p className="text-neutral-600 text-lg tracking-wide">
          More coming soon
        </p>
      </div>
    </div>
  </section>

  {/* STORE */}
  <section id="store" className="py-32 px-8 bg-neutral-950 text-center">
    <h3 className="text-4xl font-semibold mb-12 tracking-wide">Merchandise</h3>
    <p className="text-neutral-500 max-w-2xl mx-auto leading-8">
      Limited releases and exclusive pieces will be introduced in due time.
    </p>
  </section>

  {/* CONTACT */}
  <section id="contact" className="py-32 px-8 text-center">
    <h3 className="text-4xl font-semibold mb-12 tracking-wide">Contact</h3>

    <div className="flex justify-center gap-10 mb-12">
      <a
        href="https://youtube.com/@rajey1861?si=K4w4wPpRo2D-G1O4"
        target="_blank"
      >
        <Youtube className="hover:text-neutral-400 transition" />
      </a>
      <Mail className="hover:text-neutral-400 transition" />
    </div>

    <Button className="rounded-2xl px-12 py-6 text-lg bg-white text-black hover:bg-neutral-300 transition">
      Bookings & Inquiries
    </Button>
  </section>

  <footer className="text-center py-12 border-t border-neutral-900 text-neutral-600 text-xs tracking-widest">
    © {new Date().getFullYear()} RAJEY
  </footer>
</div>

); }
