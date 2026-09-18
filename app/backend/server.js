const express = require('express');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

const products = [
    {
        id: 1,
        name: 'Nova ANC Headphones',
        category: 'Audio',
        brand: 'Nova',
        price: 8999,
        rating: 4.8,
        reviewsCount: 328,
        inStock: true,
        featured: true,
        image: '🎧',
        description: 'Flagship active noise cancellation, spatial audio, 40-hour battery life, and ergonomic plush memory-foam comfort tuned for all-day listening.',
        features: ['Active Noise Cancellation', '40h Battery Life', 'Multipoint Bluetooth 5.3', 'Custom 40mm Drivers']
    },
    {
        id: 2,
        name: 'Pulse Pro Earbuds',
        category: 'Audio',
        brand: 'Pulse',
        price: 5499,
        rating: 4.8,
        reviewsCount: 328,
        inStock: true,
        featured: true,
        image: '🎵',
        description: 'Ultra-compact true wireless earbuds with immersive bass, transparency mode, and IPX5 sweat resistance for workouts.',
        features: ['Low-latency Gaming Mode', '32h Total Playtime', 'Fast Wireless Charging', 'ENC Quad Mics']
    },
    {
        id: 3,
        name: 'Arc Gaming Headset',
        category: 'Audio',
        brand: 'Arc',
        price: 12999,
        rating: 4.8,
        reviewsCount: 328,
        inStock: true,
        featured: true,
        image: '🎙️',
        description: 'Studio-grade acoustic architecture with 7.1 surround sound, retractable broadcast mic, and RGB aura sync.',
        features: ['Lossless 2.4GHz Wireless', '7.1 Surround Sound', 'Dual Chamber Audio', 'Detachable Boom Mic']
    },
    {
        id: 4,
        name: 'Aero Studio Buds',
        category: 'Audio',
        brand: 'Nova',
        price: 6999,
        rating: 4.8,
        reviewsCount: 328,
        inStock: true,
        featured: true,
        image: '✨',
        description: 'Audiophile-tuned lightweight in-ear monitors with high-resolution LDAC codec support and crystal clear highs.',
        features: ['Hi-Res Wireless LDAC', 'Custom EQ Presets', 'Touch Controls', '28h Playtime']
    },
    {
        id: 5,
        name: 'Sentinel Ultra Phone 15',
        category: 'Smartphones',
        brand: 'Sentinel',
        price: 74999,
        rating: 4.9,
        reviewsCount: 512,
        inStock: true,
        featured: false,
        image: '📱',
        description: 'Next-gen flagship smartphone with OLED 144Hz display, 200MP camera system, and all-day titanium endurance.',
        features: ['6.7" 144Hz OLED, 200MP ProLight Camera, 5000mAh All-Day Battery, Titanium Build']
    },
    {
        id: 6,
        name: 'Sentinel Fold X',
        category: 'Smartphones',
        brand: 'Sentinel',
        price: 159999,
        rating: 4.7,
        reviewsCount: 212,
        inStock: false,
        featured: true,
        image: ' foldable_phone ',
        description: 'Future of mobile: 7.6" dynamic AMOLED folding display, S-Pen Pro support, and 120Hz adaptive refresh rate in a premium compact design.',
        features: ['7.6" Foldable AMOLED', 'S-Pen Pro Support', '120Hz Adaptive Refresh', 'IPX8 Water Resistance']
    },
    {
        id: 7,
        name: 'Sentinel Pro Tablet',
        category: 'Tablets',
        brand: 'Sentinel',
        price: 54999,
        rating: 4.6,
        reviewsCount: 187,
        inStock: true,
        featured: false,
        image: ' tablet ',
        description: 'Cinematic 12.4" Super AMOLED display, quad-speaker audio with Dolby Atmos, and S Pen included for creativity on the go.',
        features: ['12.4" Super AMOLED', 'Quad Speakers with Dolby Atmos', 'S Pen Included', '7,040mAh Long Battery']
    },
    {
        id: 8,
        name: 'Sentinel Mini Pad',
        category: 'Tablets',
        brand: 'Sentinel',
        price: 24999,
        rating: 4.5,
        reviewsCount: 215,
        inStock: true,
        featured: true,
        image: ' mini_tablet ',
        description: 'Compact 8" HD display with slim metal body, ideal for streaming, reading, and portability with 12-hour battery life.',
        features: ['8" HD Display', 'Slim Metal Design', 'Up to 12h Battery', 'Kids Mode & Parental Controls']
    },
    {
        id: 9,
        name: 'AeroBook Pro X',
        category: 'Laptops',
        brand: 'Aero',
        price: 114999,
        rating: 4.9,
        reviewsCount: 412,
        inStock: true,
        featured: true,
        image: ' laptop ',
        description: 'Ultrabright 14" OLED display, M3 Pro chip performance, 18-hour battery, and precision aluminum chassis. Perfect for creative professionals demanding power and portability.',
        features: ['14" 2.8K OLED', 'M3 Pro Chip', '18h Battery Life', 'All-Metal Premium Build']
    },
    {
        id: 10,
        name: 'NovaBook Air',
        category: 'Laptops',
        brand: 'Nova',
        price: 64999,
        rating: 4.7,
        reviewsCount: 287,
        inStock: true,
        featured: false,
        image: ' thin_laptop ',
        description: 'Featherlight 13.3" laptop with 15-hour battery and fast charging for students and mobile professionals. Stunning QHD IPS screen with slim bezels.',
        features: ['13.3" QHD IPS', '15h Battery', 'Fast Charge Tech', 'Windows Hello Support']
    },
    {
        id: 11,
        name: 'Stream Deck MK.II',
        category: 'Peripherals',
        brand: 'Stream',
        price: 14999,
        rating: 4.8,
        reviewsCount: 978,
        inStock: true,
        featured: true,
        image: ' stream_deck ',
        description: 'Customizable macro pad with 15 LCD keys, dynamic folder system, and live-updating visual feedback. Integrates with 200+ apps for streamers and creators.',
        features: ['15 LCD Keys', 'Visual Folder System', 'Hotkey Macro Control', '200+ App Integrations']
    },
    {
        id: 12,
        name: 'Pulse Wristband Pro',
        category: 'Wearables',
        brand: 'Pulse',
        price: 8999,
        rating: 4.6,
        reviewsCount: 634,
        inStock: true,
        featured: true,
        image: ' smartwatch ',
        description: 'Advanced health tracking smartwatch with blood oxygen monitoring, ECG, GPS, and 10-day battery life. Water-resistant for swimming and workouts.',
        features: ['ECG + SpO2 Sensors', 'Built-in GPS', '10-Day Battery', 'Swimproof Design']
    },
    {
        id: 13,
        name: 'Nova Cam X',
        category: 'Cameras',
        brand: 'Nova',
        price: 24999,
        rating: 4.7,
        reviewsCount: 298,
        inStock: true,
        featured: true,
        image: ' camera ',
        description: 'Mirrorless APS-C camera with 24MP sensor, 4K/60fps video, and AI-powered autofocus. Compact body with interchangeable lens support.',
        features: ['24MP APS-C Sensor', '4K/60fps Video', 'AI Hybrid AF', 'In-Body Image Stabilization']
    },
    {
        id: 14,
        name: 'GearBot Pro Drone',
        category: 'Drones',
        brand: 'GearBot',
        price: 39999,
        rating: 4.6,
        reviewsCount: 192,
        inStock: true,
        featured: false,
        image: ' drone ',
        description: 'Professional-grade quadcopter with 4K HDR camera, 30-minute flight time, and 10km transmission range. Foldable design for portability.',
        features: ['4K HDR Camera', '30-min Flight Time', '10km Range', 'Obstacle Avoidance Sensors']
    },
    {
        id: 15,
        name: 'PixelFlow Smart Monitor',
        category: 'Monitors',
        brand: 'PixelFlow',
        price: 27999,
        rating: 4.8,
        reviewsCount: 487,
        inStock: true,
        featured: true,
        image: ' monitor ',
        description: '32" 4K IPS monitor with HDR1000, 144Hz refresh rate, and 98% DCI-P3 coverage. USB-C docking and built-in KVM for multitasking productivity.',
        features: ['32" 4K IPS', '144Hz Refresh Rate', 'HDR1000', 'USB-C Docking + KVM']
    },
    {
        id: 16,
        name: 'Nova PowerBank 20K',
        category: 'Accessories',
        brand: 'Nova',
        price: 2499,
        rating: 4.7,
        reviewsCount: 2109,
        inStock: true,
        featured: false,
        image: ' powerbank ',
        description: '20000mAh high-capacity power bank with 65W fast charging. Compact size, dual-port output, and LED power indicator.',
        features: ['20000mAh Capacity', '65W Fast Charging', 'PD 3.0 Support', 'LED Power Display']
    },
    {
        id: 17,
        name: 'Arc Pro Keyboard',
        category: 'Peripherals',
        brand: 'Arc',
        price: 12999,
        rating: 4.8,
        reviewsCount: 734,
        inStock: true,
        featured: true,
        image: ' mechanical_keyboard ',
        description: 'Mechanical gaming keyboard with Cherry MX switches, customizable RGB, and PBT keycaps. Available in blue, red, and brown switch options.',
        features: ['Cherry MX Switches', 'Full Per-Key RGB', 'PBT Keycaps', 'Hot-Swappable Sockets']
    },
    {
        id: 18,
        name: 'Nova Soundbar 2.1',
        category: 'Audio',
        brand: 'Nova',
        price: 15999,
        rating: 4.7,
        reviewsCount: 378,
        inStock: true,
        featured: false,
        image: ' soundbar ',
        description: 'Immersive 2.1 soundbar system with wireless subwoofer, Dolby Audio support, and Bluetooth 5.0. Includes HDMI ARC and Optical connectivity.',
        features: ['2.1 Channel Audio', 'Wireless Subwoofer', 'Dolby Audio Support', 'HDMI ARC Connectivity']
    },
];
app.get("/", (req, res) => {
    res.json({
        message: "Welcome to SentinelCart API",
        status: "running",
    });
});

app.get("/health", (req, res) => {
    res.status(200).json({
        status: "healthy",
    });
});

app.get("/api/products", (req, res) => {
    res.json(products);
});

app.listen(PORT, () => {
    console.log(`SentinelCart API is running on port ${PORT}`);
});