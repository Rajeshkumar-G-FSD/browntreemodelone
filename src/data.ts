/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Property, Experience, Review, Destination } from "./types";
import azureBayResort from "./assets/images/azure_bay_resort_1782714903912.jpg";
import heritagePalace from "./assets/images/heritage_palace_1782714918331.jpg";
import mistyPeaks from "./assets/images/misty_peaks_1782714932656.jpg";

export const PROPERTIES: Property[] = [
  {
    id: "azure-bay",
    name: "Azure Bay Resort",
    type: "Coastal Retreat",
    location: "Maldives",
    region: "Indian Ocean",
    price: 750,
    rating: 4.9,
    reviewCount: 42,
    image: azureBayResort,
    gallery: [
      azureBayResort,
      "https://picsum.photos/seed/maldives1/1200/800",
      "https://picsum.photos/seed/maldives2/1200/800",
      "https://picsum.photos/seed/maldives3/1200/800"
    ],
    description: "Suspended between the azure heavens and the sapphire waters of the Indian Ocean, Azure Bay Resort is a masterpiece of light-filled modernist design. Features seamless indoor-outdoor living, fully retractable glass facades, private direct coral reef access, and a spectacular cantilevered infinity pool that merges with the horizon.",
    highlights: [
      "Direct Coral Reef Access",
      "Overwater Cantilevered Infinity Pool",
      "Private Yacht Charter on Demand"
    ],
    amenities: [
      "Private Infinity Pool",
      "Dedicated 24/7 Butler",
      "Fully Retractable Retractable Glass Facade",
      "In-Villa Wellness Sanctuary",
      "Private Sunset Deck",
      "Personal Sommelier Service"
    ],
    suites: [
      {
        id: "ocean-pavilion",
        name: "Ocean Overwater Pavilion",
        description: "Elegant overwater pavilion boasting floor-to-ceiling glass, sunrise views, and a private plunge pool suspended over the lagoon.",
        pricePerNight: 750,
        maxGuests: 2,
        size: "140 sqm / 1,500 sqft",
        amenities: ["Plunge Pool", "Outdoor Rainfall Shower", "Glass Floor Panel", "Apple TV", "Bose Sound System"]
      },
      {
        id: "sunset-sanctuary",
        name: "Sunset Reef Sanctuary Suite",
        description: "A sprawling residence with premium sunset vistas, expansive overwater sun decks, and an automated private outdoor theater setup.",
        pricePerNight: 1200,
        maxGuests: 4,
        size: "280 sqm / 3,010 sqft",
        amenities: ["Large Infinity Pool", "Kitchenette", "Private Hammock", "Sun Loungers", "Wellness Room"]
      }
    ],
    coordinates: { lat: 3.2028, lng: 73.2207 }
  },
  {
    id: "heritage-palace",
    name: "Heritage Palace",
    type: "Heritage Residence",
    location: "Jaipur, India",
    region: "Rajasthan",
    price: 450,
    rating: 4.9,
    reviewCount: 118,
    image: heritagePalace,
    gallery: [
      heritagePalace,
      "https://picsum.photos/seed/jaipur1/1200/800",
      "https://picsum.photos/seed/jaipur2/1200/800",
      "https://picsum.photos/seed/jaipur3/1200/800"
    ],
    description: "An exquisite revival of royal Rajput architectural grandeur, redesigned with sleek contemporary glass screens and minimalist luxury. Flooded with golden Jaipur sunlight through 10-meter-tall arched windows, the palace offers absolute privacy, sand-colored lounge spaces, and majestic royal courtyards for meditative reflection.",
    highlights: [
      "UNESCO-Heritage Architecture",
      "Hand-Carved Sandstone Colonnades",
      "Bespoke Ayurvedic Soma Rituals"
    ],
    amenities: [
      "Private Mughal Gardens",
      "Bespoke Royal Chauffeur",
      "Royal Ayurvedic Spa Treatment",
      "10-meter Arched Glass Salon",
      "In-Suite Sitar Performances",
      "Fine Dining Jodhpur-style Kitchen"
    ],
    suites: [
      {
        id: "maharaja-glass",
        name: "Maharaja Glass Suite",
        description: "A brilliant royal suite featuring a glass bedroom looking directly onto private interior water courtyards.",
        pricePerNight: 450,
        maxGuests: 2,
        size: "120 sqm / 1,290 sqft",
        amenities: ["Copper Soaking Tub", "Hand-woven Indian Rugs", "Terrace Bed", "Luxury Linens", "Pillow Menu"]
      },
      {
        id: "royal-pavilion",
        name: "Royal Courtyard Pavilion",
        description: "Grand historic sanctuary with exclusive garden access, high arches, private pool, and historical antique furnishings.",
        pricePerNight: 750,
        maxGuests: 3,
        size: "210 sqm / 2,260 sqft",
        amenities: ["Private Courtyard Pool", "Dedicated Chauffeur", "Antique Desk", "Outdoor Daybed"]
      }
    ],
    coordinates: { lat: 26.9124, lng: 75.7873 }
  },
  {
    id: "misty-peaks",
    name: "Misty Peaks",
    type: "Mountain Lodge",
    location: "Swiss Alps",
    region: "Zermatt, Switzerland",
    price: 550,
    rating: 4.8,
    reviewCount: 36,
    image: mistyPeaks,
    gallery: [
      mistyPeaks,
      "https://picsum.photos/seed/swiss1/1200/800",
      "https://picsum.photos/seed/swiss2/1200/800",
      "https://picsum.photos/seed/swiss3/1200/800"
    ],
    description: "Perched majestically among snow-kissed alpine summits, Misty Peaks combines rough-hewn structural cedar timbers with soaring minimalist floor-to-ceiling glass. Enjoy private stargazing with an in-lodge professional telescope, a warm hand-carved stone fireplace, and pristine views of majestic pine forests.",
    highlights: [
      "Ski-in / Ski-out Access",
      "Professional Stargazing Telescope",
      "Geothermal Outdoor Hot Spring"
    ],
    amenities: [
      "Double-sided Stone Fireplace",
      "Observatory Deck",
      "Geothermal Hot Tub",
      "Heated Ski Locker Room",
      "In-Villa Sommelier Wine Tasting",
      "Bespoke Mountain Heli-Ski Guide"
    ],
    suites: [
      {
        id: "alpine-hearth",
        name: "Alpine Hearth Loft",
        description: "A cozy log-and-glass loft with double-sided stone fireplace, premium sheepskin upholstery, and spectacular mountain views.",
        pricePerNight: 550,
        maxGuests: 2,
        size: "95 sqm / 1,020 sqft",
        amenities: ["Stone Fireplace", "Telescope Access", "Heated Floors", "Steam Shower", "Fine Alpine Tea Bar"]
      },
      {
        id: "glacial-vista",
        name: "Summit Glacial Vista Suite",
        description: "Superb split-level suite offering panoramic glacial peak vistas, private outdoor hot tub, and direct ski trail access.",
        pricePerNight: 950,
        maxGuests: 4,
        size: "185 sqm / 1,990 sqft",
        amenities: ["Outdoor Geothermal Tub", "Private Sauna", "Vaulted Cedar Ceilings", "Wine Dispenser"]
      }
    ],
    coordinates: { lat: 46.0207, lng: 7.7491 }
  },
  {
    id: "desert-mirage",
    name: "Desert Mirage",
    type: "Desert Oasis",
    location: "Morocco",
    region: "Sahara Desert",
    price: 600,
    rating: 4.9,
    reviewCount: 29,
    image: "https://picsum.photos/seed/morocco/800/600",
    gallery: [
      "https://picsum.photos/seed/morocco/1200/800",
      "https://picsum.photos/seed/morocco2/1200/800",
      "https://picsum.photos/seed/morocco3/1200/800"
    ],
    description: "A stunning architecture of rammed-earth and sleek gold-tinted brass situated among rolling desert dunes. Offers a luxurious pool that acts as an oasis under the starlit sky, custom velvet upholstery, and traditional Berber hospitality with high-end modern comforts.",
    highlights: [
      "Epic Dune-Sunset Views",
      "Astronomer-Guided Stargazing",
      "Camel Trek in Private Reserve"
    ],
    amenities: [
      "Oasis Pool",
      "Traditional Hammam Wellness Room",
      "Desert Glamping Star-Deck",
      "Gold Brass Firepit Lounge",
      "Nomadic Feast Chef Services",
      "Premium Leather Lounge"
    ],
    suites: [
      {
        id: "nomad-dome",
        name: "Royal Nomad Dome",
        description: "An elegant structure featuring a retractable star-viewing roof, Moroccan plaster details, and a cozy central fire pit.",
        pricePerNight: 600,
        maxGuests: 2,
        size: "110 sqm / 1,180 sqft",
        amenities: ["Retractable Sky Roof", "Hammam Shower", "Handmade Berber Carpet", "Desert Telescope"]
      }
    ],
    coordinates: { lat: 31.1728, lng: -7.0083 }
  },
  {
    id: "komorebi-sanctuary",
    name: "Komorebi Sanctuary",
    type: "Forest Haven",
    location: "Kyoto, Japan",
    region: "Arashiyama Forest",
    price: 680,
    rating: 5.0,
    reviewCount: 54,
    image: "https://picsum.photos/seed/kyoto/800/600",
    gallery: [
      "https://picsum.photos/seed/kyoto/1200/800",
      "https://picsum.photos/seed/kyoto2/1200/800",
      "https://picsum.photos/seed/kyoto3/1200/800"
    ],
    description: "A tranquil sanctuary nestled deep in the bamboo forests of Arashiyama, Kyoto. Framed by masterfully crafted hinoki cypress wood and glass, Komorebi (the dappled light filtering through trees) features private Zen stone gardens, natural warm spring onsen baths, and exquisite Kaiseki dining.",
    highlights: [
      "Private Hinoki Cypress Onsen",
      "Zen Sand and Moss Gardens",
      "Award-winning Kaiseki Dining"
    ],
    amenities: [
      "Outdoor Mineral Onsen",
      "Tea Ceremony Tearoom",
      "Forest Meditation Deck",
      "Shiatsu Treatment Suite",
      "Calligraphy & Zen Salon",
      "Tatami Dining Pavilion"
    ],
    suites: [
      {
        id: "hinoki-villa",
        name: "Hinoki Forest Villa",
        description: "An immersive forest sanctuary featuring sliding shoji screens, luxury low-profile tatami bedding, and a private natural wood onsen tub.",
        pricePerNight: 680,
        maxGuests: 2,
        size: "130 sqm / 1,400 sqft",
        amenities: ["Wooden Hinoki Onsen", "Shoji Glass Walls", "Yukata & Obis", "Custom Incense Selector"]
      }
    ],
    coordinates: { lat: 35.0116, lng: 135.7681 }
  }
];

export const EXPERIENCES: Experience[] = [
  {
    id: "exp-yacht",
    title: "Private Horizon Yacht Charter",
    category: "Adventure",
    description: "Embark on a bespoke ocean exploration aboard our private 80ft luxury yacht. Complete with a private chef, custom champagne flight, and a dedicated marine biologist guide to tailor your itinerary.",
    image: "https://picsum.photos/seed/yacht/800/500",
    duration: "Full Day (8 Hours)",
    pricePerPerson: 1800,
    details: [
      "Private customized oceanic navigation",
      "Michelin-starred multi-course onboard dining",
      "Underwater snorkeling with coral biologist",
      "Premium vintage champagne tasting"
    ]
  },
  {
    id: "exp-healing",
    title: "Soma Ayurvedic Healing Journey",
    category: "Wellness",
    description: "A transformative deep-wellness retreat curated by traditional master practitioners. Includes a personalized body constitution diagnosis, customized herbal oils, organic local botanical therapy, and sound resonance healing.",
    image: "https://picsum.photos/seed/spa/800/500",
    duration: "3 Hours",
    pricePerPerson: 350,
    details: [
      "Ayurvedic Doctor constitution consult",
      "Four-hand synchronous botanical massage",
      "Tibetan sound bowl vibrational session",
      "Custom-formulated herbal tea curation"
    ]
  },
  {
    id: "exp-heli",
    title: "Alpine Peak Heli-Skiing",
    category: "Adventure",
    description: "Ascend directly to untouched, glacial powdered alpine fields via private helicopter. Ski down breathtaking, deserted Swiss ridges accompanied by a veteran UIAGM-certified high-mountain guide.",
    image: "https://picsum.photos/seed/heli/800/500",
    duration: "6 Hours",
    pricePerPerson: 1250,
    details: [
      "Scenic high-altitude helicopter ascent",
      "UIAGM certified professional ski guide",
      "Preloaded state-of-the-art avalanche safety gear",
      "Glacier-top luxury hot fondue luncheon"
    ]
  }
];

export const REVIEWS: Review[] = [
  {
    id: "rev-1",
    author: "Lady Eleanor Sterling",
    role: "Aesthetic Connoisseur & Member since 2021",
    avatar: "https://picsum.photos/seed/woman1/100/100",
    rating: 5,
    date: "May 2026",
    content: "Luxe Sanctuary truly understands that modern luxury is about silence, space, and pristine architectural restraint. Our stay at the Maharaja Suite in Jaipur was a masterclass in elegant serenity. The sunlight flowing through those soaring arches is etched into my memory.",
    propertyId: "heritage-palace"
  },
  {
    id: "rev-2",
    author: "Jean-Pierre Moreau",
    role: "Architectural Critic",
    avatar: "https://picsum.photos/seed/man1/100/100",
    rating: 5,
    date: "April 2026",
    content: "The cantilevered pool at Azure Bay defies physics while maintaining a seamless dialogue with the Indian Ocean. Every line, from the retractable glass facades to the brushed gold fixtures, reflects absolute, uncompromising craftsmanship.",
    propertyId: "azure-bay"
  },
  {
    id: "rev-3",
    author: "Dr. Maya Lin",
    role: "Elite Travel Journal Editor",
    avatar: "https://picsum.photos/seed/woman2/100/100",
    rating: 5,
    date: "June 2026",
    content: "Misty Peaks is a true alpine sanctuary. Sitting by the double-sided stone hearth, with a cup of curated chamomile tea, watching the pine forests disappear into the thick glacial fog—it was the ultimate digital detox.",
    propertyId: "misty-peaks"
  }
];

export const DESTINATIONS: Destination[] = [
  {
    id: "dest-maldives",
    name: "Maldives",
    country: "Indian Ocean",
    image: "https://picsum.photos/seed/dest-mald/600/400",
    description: "Coral atolls rising from sapphire waters, perfect for serene marine discoveries.",
    propertyCount: 1
  },
  {
    id: "dest-jaipur",
    name: "Jaipur",
    country: "India",
    image: "https://picsum.photos/seed/dest-jaip/600/400",
    description: "The historical Pink City, home to majestic architecture and royal traditions.",
    propertyCount: 1
  },
  {
    id: "dest-alps",
    name: "Swiss Alps",
    country: "Switzerland",
    image: "https://picsum.photos/seed/dest-swiss/600/400",
    description: "Soaring peaks, glacial valleys, and cozy wood-glass fireside hideaways.",
    propertyCount: 1
  }
];
