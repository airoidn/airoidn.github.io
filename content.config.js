/**
 * Central content/media registry for AIRO.
 * Update images, captions, hero metrics, product notes, or component order here.
 */
window.AIRO_CONTENT = {
  media: {
    // Hero section sky background
    heroSky: {
      src: 'assets/media/hero-sky.svg',
      alt: 'Osaka skyline background for hero section',
      caption: 'Osaka skyline · Umeda / Nakanoshima',
      creditText: 'Public domain photo',
      creditUrl: 'https://commons.wikimedia.org/wiki/File:Skyline_in_Osaka.jpg',
      loading: 'lazy',
      decoding: 'async',
      enabled: true
    },
    
    // Problem section image (can reuse same source)
    problemOsakaSkyline: {
      src: 'assets/media/osaka-skyline.svg',
      alt: 'Umeda and Nakanoshima skyline in Osaka, Japan',
      caption: 'Osaka skyline · Umeda / Nakanoshima',
      creditText: 'Public domain photo',
      creditUrl: 'https://commons.wikimedia.org/wiki/File:Skyline_in_Osaka.jpg',
      loading: 'lazy',
      decoding: 'async',
      enabled: true
    },
    
    // Device preview image - UPDATE PATH OR USE PLACEHOLDER FOR TESTING
    devicePreview: {
      // For production: 'assets/media/device-preview.webp'
      // For testing: use a public placeholder:
      src: 'assets/media/device-preview.svg',
      alt: 'AIRO portable purifier device preview',
      caption: 'Device preview',
      type: 'device-preview',
      enabled: true  // Set to false to hide and show SVG fallback
    },
    
    showcaseMockup: {
      src: 'assets/media/showcase-mockup.webp',
      alt: 'AIRO product showcase mockup',
      caption: 'Product showcase',
      type: 'showcase',
      enabled: false
    }
  },

  heroStats: [
    { value: '99', suffix: '%', label: 'Particle Removal' },
    { value: 'Solar', label: '+ USB-C Charging' },
    { value: '48h', label: 'Battery Life' }
  ],

  powerDisclaimer: 'Solar charging performance varies with sunlight, angle, temperature, and weather. USB Type-C charging is available as an alternative power source.',

  components: [
    {
      category: 'POWER',
      icon: 'solar',
      title: 'Solar Array',
      description: 'Monocrystalline silicon panels with 23.1% peak conversion efficiency in ideal lab conditions. The integrated fold-flat design angles for improved sun capture in daily use.',
      specs: [
        ['Output', '12W peak'],
        ['Efficiency', '23.1% peak'],
        ['Material', 'Monocrystalline Si'],
        ['Charge time', '4–6 h full sun']
      ]
    },
    {
      category: 'FILTRATION',
      icon: 'hepa',
      title: 'H13 True HEPA',
      description: 'Medical-grade H13 HEPA captures 99.97% of particles at 0.3 microns — including PM2.5, bacteria, mold spores, and viral aerosols. Tested to EN 1822 standard.',
      specs: [
        ['Grade', 'H13 EN 1822'],
        ['Efficiency', '99.97% @ 0.3 μm'],
        ['Targets', 'PM2.5, pollen, spores'],
        ['Filter life', '~6 months']
      ]
    },
    {
      category: 'BATTERY',
      icon: 'battery',
      title: 'LiFePO₄ Battery',
      description: 'Lithium iron phosphate chemistry provides thermal stability, safety, and cycle life. 6,000 mAh supports up to 48 hours on medium mode or 16 hours at full turbo output.',
      specs: [
        ['Capacity', '6,000 mAh'],
        ['Chemistry', 'LiFePO₄'],
        ['Cycle life', '2,000+ @ 80% DoD'],
        ['Charge in', 'USB-C 45W PD']
      ]
    },
    {
      category: 'SENSORS',
      icon: 'sensor',
      title: 'Air Quality Sensors',
      description: 'Dual-sensor array measures PM2.5, PM10, VOC index, CO₂ equivalent, temperature, and relative humidity. Updated every 2 seconds and synced to the companion app.',
      specs: [
        ['PM sensing', 'Laser particle counter'],
        ['VOC sensing', 'MOx semiconductor'],
        ['Update rate', 'Every 2 seconds'],
        ['Display', 'E-ink, sunlight-readable']
      ]
    },
    {
      category: 'HOUSING',
      icon: 'housing',
      title: 'Recycled Enclosure',
      description: 'Injection-molded from 80% post-consumer recycled ABS plastic. Rated IP54 for splash and dust resistance in homes, offices, and outdoor settings.',
      specs: [
        ['Material', '80% rABS plastic'],
        ['IP Rating', 'IP54'],
        ['Weight', '800 g'],
        ['Dimensions', '85 × 85 × 220 mm']
      ]
    },
    {
      category: 'CARBON FILTER',
      icon: 'carbon',
      title: 'Activated Carbon',
      description: 'Coconut-shell derived activated carbon adsorbs VOCs, formaldehyde, benzene, odors, and nitrogen dioxide. Works with HEPA for broader air purification.',
      specs: [
        ['Source', 'Coconut shell carbon'],
        ['Targets', 'VOC, NO₂, Formaldehyde'],
        ['Surface area', '>1,000 m²/g'],
        ['Filter life', '~6 months']
      ]
    }
  ]
};