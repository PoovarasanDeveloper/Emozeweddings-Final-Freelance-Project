import { WeddingGalleryItem, HeroSlide, Testimonial, FilmItem } from "../types";

export const HERO_SLIDES: HeroSlide[] = [
  {
    id: "hero-1",
    title: "Pure Love! Premium Kerala Wedding Photography",
    subtitle:
      "Archive your day with the best candid wedding photographers in Kerala & beyond",
    category: "Christian & Destination Wedding",

    bgImage: "/images/hero/hero-1.jpeg",
    videoUrl: "https://www.youtube.com/embed/S43-3qf1L0E?autoplay=1",
    hasVideo: true,
  },
  {
    id: "hero-2",
    title: "Best Wedding Videography Experience | Authentic Life Stories",
    subtitle:
      "Enjoy the services of best cinematic wedding filmers in South India",
    category: "Cinematic Wedding Films",
    bgImage: "/images/hero/hero-2.jpeg",
    videoUrl: "https://www.youtube.com/embed/_s7r1nNbCLg?autoplay=1",
    hasVideo: true,
  },
  {
    id: "hero-3",
    title: "Classic Chennai & Royal Destination Wedding Stories",
    subtitle:
      "Register for our creative wedding photography services in Chennai & Abroad",
    category: "Tamil & Royal Wedding",
    bgImage: "/images/hero/hero-3.jpeg",
    videoUrl: "https://www.youtube.com/embed/bKRlt1MyH_4?autoplay=1",
    hasVideo: true,
  },
  {
    id: "hero-4",
    title: "Engagement & Pre-Wedding Visuals | True Love in Bloom",
    subtitle: "Reach out to us for the most soul-stirring pre-wedding shoots",
    category: "Pre-Wedding & Outdoor",
    bgImage: "/images/hero/hero-4.jpeg",
    hasVideo: false,
  },
];

export const GALLERY_ITEMS: WeddingGalleryItem[] = [
  {
    id: "gal-1",
    title: "Destination Wedding at Taj Green Cove Resort",
    subtitle: "A Garden Brew Wedding Diary of Kevin & Karishma",
    category: "destination",
    categoryLabel: "Destination Wedding",
    location: "Kovalam, Kerala",
    coverImage: "/images/hero/hero-1.jpeg",
    images: [
      "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&q=80&w=1200",
      "https://images.unsplash.com/photo-1583939003579-730e3918a45a?auto=format&fit=crop&q=80&w=1200",
      "https://images.unsplash.com/photo-1520854221256-17451cc331bf?auto=format&fit=crop&q=80&w=1200",
      "https://images.unsplash.com/photo-1544078751-58fee2d8a03b?auto=format&fit=crop&q=80&w=1200",
      "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&q=80&w=1200",
    ],
    featured: true,
    hasVideo: true,
    videoUrl: "https://www.youtube.com/embed/S43-3qf1L0E?autoplay=1",
    storyDate: "October 2025",
    photographerNotes:
      "Set amidst the lush coastal slopes of Kovalam, Kevin & Karishma exchange vows in a serene cliffside ceremony surrounded by ocean breeze and sunset hues.",
    vendors: {
      venue: "Taj Green Cove Resort & Spa, Kovalam",
      decor: "Rainmaker Events",
      outfits: "Sabyasachi",
      planner: "Emoze Event Curators",
    },
  },
  {
    id: "gal-2",
    title: "Vibrant Desi Celebration at The Leela Raviz Kovalam",
    subtitle: "Aishwarya & Vikram’s Grand Coastal Nuptials",
    category: "destination",
    categoryLabel: "Destination Wedding",
    location: "Kovalam, Trivandrum",
    coverImage: "/images/gallery/destination/cover-1.jpg",
    images: [
      "https://images.unsplash.com/photo-1583939003579-730e3918a45a?auto=format&fit=crop&q=80&w=1200",
      "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&q=80&w=1200",
      "/images/gallery/prewedding/cover-6.jpeg",
      "https://images.unsplash.com/photo-1606800052052-a08af7148866?auto=format&fit=crop&q=80&w=1200",
    ],
    featured: true,
    hasVideo: true,
    videoUrl: "https://www.youtube.com/embed/bKRlt1MyH_4?autoplay=1",
    storyDate: "December 2025",
    photographerNotes:
      "A extravaganza of marigold yellows, traditional South Indian rituals, and sunset beach pheras at the iconic Leela Kovalam.",
    vendors: {
      venue: "The Leela Kovalam A Raviz Hotel",
      decor: "Aangana Wedding Decor",
      makeup: "Janas Artisans",
    },
  },
  {
    id: "gal-3",
    title: "The Trinket Box: Nature-Inspired Pre-Wedding Shoot",
    subtitle: "Athirappally Waterfalls, Alleppey Backwaters & Munnar Hills",
    category: "pre-wedding",
    categoryLabel: "Pre-Wedding Shoot",
    location: "Kerala Landscapes",
    coverImage: "/images/gallery/prewedding/cover-3.jpg",
    images: [
      "/images/gallery/prewedding/cover-3.jpg",
      "https://images.unsplash.com/photo-1537633552985-df8429e8048b?auto=format&fit=crop&q=80&w=1200",
      "/images/gallery/destination/cover-8.jpg",
      "/images/gallery/prewedding/cover-3.jpg",
    ],
    featured: false,
    hasVideo: false,
    storyDate: "January 2026",
    photographerNotes:
      "Journeying through misty tea gardens in Munnar and golden sunsets on houseboats in Alleppey, capturing deep candid moments.",
    vendors: {
      venue: "Munnar & Alleppey, Kerala",
      outfits: "Custom Linen & Silk",
    },
  },
  {
    id: "gal-4",
    title: "Al Habtoor Polo Resort Dubai: Beenish & Saad",
    subtitle: "The Moonflower Pre-Wedding Visuals",
    category: "destination",
    categoryLabel: "Dubai Destination",
    location: "Dubai, UAE",
    coverImage:
      "https://images.unsplash.com/photo-1520854221256-17451cc331bf?auto=format&fit=crop&q=80&w=1200",
    images: [
      "https://images.unsplash.com/photo-1520854221256-17451cc331bf?auto=format&fit=crop&q=80&w=1200",
      "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&q=80&w=1200",
      "https://images.unsplash.com/photo-1544078751-58fee2d8a03b?auto=format&fit=crop&q=80&w=1200",
    ],
    featured: true,
    hasVideo: true,
    videoUrl: "https://www.youtube.com/embed/_s7r1nNbCLg?autoplay=1",
    storyDate: "February 2026",
    photographerNotes:
      "Regal equestrian vibes combined with desert twilight shots at Al Habtoor Polo Resort in Dubai.",
    vendors: {
      venue: "Al Habtoor Polo Resort Dubai",
      planner: "Luxurious Weddings Dubai",
    },
  },
  {
    id: "gal-5",
    title: "Royal Cathedral Christian Wedding of Tesa & Alexander",
    subtitle: "Timeless Elegance & St. Andrews Cathedral Nuptials",
    category: "christian",
    categoryLabel: "Christian Wedding",
    location: "Kochi, Kerala",
    coverImage: "/images/gallery/prewedding/cover-5.jpeg",

    images: [
      "/images/gallery/prewedding/cover-5.jpeg",
      "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&q=80&w=1200",
      "https://images.unsplash.com/photo-1583939003579-730e3918a45a?auto=format&fit=crop&q=80&w=1200",
      "https://images.unsplash.com/photo-1520854221256-17451cc331bf?auto=format&fit=crop&q=80&w=1200",
    ],
    featured: false,
    hasVideo: false,
    storyDate: "November 2025",
    photographerNotes:
      "Sacred choral choir tones, white lace veil trailing down cathedral steps, and a grand ballroom reception in Kochi.",
    vendors: {
      venue: "St. Francis Cathedral & Bolgatty Palace",
      decor: "Dream Wedding Kochi",
    },
  },
  {
    id: "gal-6",
    title: "Traditional Tamilnadu Hindu Wedding: Gaya & Ragav",
    subtitle: "Golden Kanjivaram Silks & Jasmine Flower Splendor",
    category: "hindu",
    categoryLabel: "Hindu Wedding",
    location: "Guruvayur / Thrissur",
    coverImage: "/images/gallery/prewedding/cover-6.jpg",
    images: [
      "/images/gallery/prewedding/cover-6.jpeg",
      "https://images.unsplash.com/photo-1583939003579-730e3918a45a?auto=format&fit=crop&q=80&w=1200",
      "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&q=80&w=1200",
      "https://images.unsplash.com/photo-1606800052052-a08af7148866?auto=format&fit=crop&q=80&w=1200",
    ],
    featured: true,
    hasVideo: false,
    storyDate: "August 2025",
    photographerNotes:
      "Nadaswaram melodies fill the traditional tharavadu courtyard as Gaya and Ragav exchange garlands in auspicious morning light.",
    vendors: {
      venue: "Heritage Tharavadu, Thrissur",
      outfits: "Kanchipuram Heritage Weaver",
    },
  },
  {
    id: "gal-7",
    title: "Grand Nikah Ceremony: Reema & Faizal",
    subtitle: "Opulent Muslim Wedding at Grand Hyatt Kochi",
    category: "muslim",
    categoryLabel: "Muslim Wedding",
    location: "Bolgatty, Kochi",
    coverImage:
      "https://images.unsplash.com/photo-1544078751-58fee2d8a03b?auto=format&fit=crop&q=80&w=1200",
    images: [
      "https://images.unsplash.com/photo-1544078751-58fee2d8a03b?auto=format&fit=crop&q=80&w=1200",
      "https://images.unsplash.com/photo-1520854221256-17451cc331bf?auto=format&fit=crop&q=80&w=1200",
      "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&q=80&w=1200",
    ],
    featured: false,
    hasVideo: true,
    videoUrl: "https://www.youtube.com/embed/S43-3qf1L0E?autoplay=1",
    storyDate: "September 2025",
    photographerNotes:
      "Shimmering emerald lehengas, intricate mehendi artwork, and heartfelt family moments by the backwaters.",
    vendors: {
      venue: "Grand Hyatt Kochi Bolgatty",
      decor: "Classy Events",
    },
  },
  {
    id: "gal-8",
    title: "Chennai Heritage Temple Wedding: Priyamvada & Karthik",
    subtitle: "A Royal Tamil Kalyanam in Mylapore",
    category: "hindu",
    categoryLabel: "Tamil Wedding",
    location: "Chennai, Tamil Nadu",
    coverImage: "/images/gallery/destination/cover-8.jpg",
    images: [
      "/images/gallery/destination/cover-8.jpg",
      "/images/gallery/prewedding/cover-6.jpeg",
      "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&q=80&w=1200",
    ],
    featured: false,
    hasVideo: false,
    storyDate: "March 2026",
    photographerNotes:
      "Deep red Kanchipuram sarees, temple pillars drenched in morning sunlight, and classic South Indian rituals.",
    vendors: {
      venue: "Mylapore Heritage Mandapam, Chennai",
      makeup: "Chennai Bridal Couture",
    },
  },
];

export const FILMS: FilmItem[] = [
  {
    id: "film-1",
    title: "A Symphony of Ocean Hues",
    couple: "Kevin & Karishma",
    location: "Taj Green Cove Resort, Kovalam",
    duration: "4:15 min",
    thumbnail:
      "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&q=80&w=800",
    videoUrl: "https://www.youtube.com/embed/S43-3qf1L0E?autoplay=1",
    description:
      "A cinematic wedding trailer capturing ocean cliffside vows and intimate sunset moments in Kerala.",
  },
  {
    id: "film-2",
    title: "Whispers of Kovalam Waves",
    couple: "Aishwarya & Vikram",
    location: "The Leela Kovalam",
    duration: "5:40 min",
    thumbnail:
      "https://images.unsplash.com/photo-1583939003579-730e3918a45a?auto=format&fit=crop&q=80&w=800",
    videoUrl: "https://www.youtube.com/embed/bKRlt1MyH_4?autoplay=1",
    description:
      "Vibrant marigold celebrations, joyous Baraat dances and heartfelt traditional promises.",
  },
  {
    id: "film-3",
    title: "Desert Mirage & Royal Horses",
    couple: "Beenish & Saad",
    location: "Al Habtoor Polo Resort, Dubai",
    duration: "3:50 min",
    thumbnail:
      "https://images.unsplash.com/photo-1520854221256-17451cc331bf?auto=format&fit=crop&q=80&w=800",
    videoUrl: "https://www.youtube.com/embed/_s7r1nNbCLg?autoplay=1",
    description:
      "Opulent Dubai pre-wedding film set against golden dunes and twilight architectural grandeur.",
  },
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: "test-1",
    reviewby: "Sathiskumar",
    names: "Navya Meriam & Joseph",
    location: "Kochi, Kerala",
    review:
      "An excellent photography service! The whole team are extremely professional. They made our special day even more special and memorable. Down to the initial phone call, their knowledge, to the photography and post production, their customer service was outstanding. I would highly recommend them to all.",
    rating: 5,
    avatar: "/images/testimonials/sathiskumar.jpg",
    weddingDate: "December 2025",
  },
  {
    id: "test-2",
    reviewby: "Haripriya",
    names: "Aishwarya & Vikram",
    location: "Chennai",
    review:
      "Emoze weddings are truly amazing and the outputs really awesome.... Great Team.... Wishing you all the very best for upcoming events",
    rating: 5,
    avatar: "/images/testimonials/Haripriya.jpg",
    weddingDate: "November 2025",
  },
  {
    id: "test-3",
    reviewby: "Ben",
    names: "Rhea & Dev",
    location: "Coimbatore",
    review:
      "First things is Atomsphere of this office almost Makes You a vibe..great choice for wedding and all events!",
    rating: 5,
    avatar: "/images/testimonials/Ben_Human.jpg",
    weddingDate: "January 2026",
  },
];
