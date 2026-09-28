export interface Product {
  id: string;
  slug: string;
  name: string;
  nameCn?: string;
  category: "mala" | "dzi" | "bracelet" | "accessory";
  price: number;
  currency: string;
  images: string[];
  description: string;
  descriptionCn?: string;
  highlights: string[];
  specs: {
    material: string;
    beadSize: string;
    length: string;
    weight: string;
  };
  story: string;
  inStock: boolean;
  stripePriceId?: string; // 用户后续填入 Stripe 的 price ID
}

export const products: Product[] = [
  {
    id: "1",
    slug: "nine-eye-dzi-bead",
    name: "Nine-Eye Dzi Bead",
    nameCn: "九眼天珠",
    category: "dzi",
    price: 2880,
    currency: "USD",
    images: [
      "https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=authentic%20Tibetan%20nine%20eye%20dzi%20bead%20close%20up%20on%20dark%20silk%20background%2C%20professional%20studio%20photography%2C%20soft%20golden%20light%2C%20luxury%20jewelry%20aesthetic&image_size=square_hd",
    ],
    description:
      "A rare and revered nine-eye dzi bead, hand-selected from the Himalayan plateau. Each eye carries a distinct spiritual significance, representing the nine planetary deities of Tibetan cosmology.",
    descriptionCn: "九眼天珠，稀有珍贵，精选自喜马拉雅高原。每一只眼睛对应一位星曜，承载着西藏宇宙观的九重天。",
    highlights: [
      "Natural agate, aged over a century",
      "Genuine mineral deposit markings",
      "Blessed in a Himalayan monastery",
      "Comes with authenticity certificate",
    ],
    specs: {
      material: "Natural Agate (玛瑙)",
      beadSize: "38mm × 14mm",
      length: "—",
      weight: "12g",
    },
    story:
      "For thousands of years, dzi beads have been revered across the Himalayas as vessels of protection and wisdom. This nine-eye dzi was collected by our artisans during a pilgrimage to central Tibet, where it had remained in a single family lineage for generations.",
    inStock: true,
  },
  {
    id: "2",
    slug: "108-bead-bodhi-mala",
    name: "108-Bead Bodhi Mala",
    nameCn: "108颗菩提佛珠",
    category: "mala",
    price: 480,
    currency: "USD",
    images: [
      "https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Tibetan%20108%20bead%20bodhi%20seed%20mala%20prayer%20beads%20on%20old%20wooden%20table%2C%20warm%20natural%20light%2C%20minimalist%20luxury%20photography%2C%20soft%20depth%20of%20field&image_size=square_hd",
    ],
    description:
      "A classic 108-beed mala hand-strung with bodhi seeds from sacred bodhi trees. Includes three hand-polished yak bone markers and a silk tassel in traditional Tibetan red.",
    descriptionCn: "经典108颗菩提佛珠，选用圣地菩提树籽，手工串制。配三颗抛光牦牛骨间隔珠与传统朱红丝穗。",
    highlights: [
      "108 hand-sorted bodhi seeds",
      "Yak bone marker beads",
      "Traditional silk tassel",
      "Hand-knotted by Tibetan artisans",
    ],
    specs: {
      material: "Bodhi Seed (菩提子), Yak Bone, Silk",
      beadSize: "8mm",
      length: "48cm (full loop)",
      weight: "65g",
    },
    story:
      "The bodhi tree under which the Buddha attained enlightenment is symbolically present in every bodhi seed. This mala is strung by a family of artisans in Kathmandu Valley who have been making malas for over three generations.",
    inStock: true,
  },
  {
    id: "3",
    slug: "turtle-bone-bracelet",
    name: "Turtle Bone Wrist Mala",
    nameCn: "龟骨手串",
    category: "bracelet",
    price: 320,
    currency: "USD",
    images: [
      "https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Tibetan%20turtle%20bone%20wrist%20mala%20bracelet%20on%20model%20wrist%2C%20minimalist%20white%20background%2C%20professional%20luxury%20product%20photography%2C%20soft%20shadow%2C%20elegant&image_size=square_hd",
    ],
    description:
      "A compact wrist mala made from ethically sourced turtle bone beads. The turtle symbolizes longevity and stability in Tibetan tradition — a perfect companion for daily mindfulness.",
    descriptionCn: "精选龟骨，小而精致的手腕佛珠。在藏地传统中，龟象征长寿与稳重，是日常修行的良伴。",
    highlights: [
      "Ethically sourced turtle bone",
      "Hand-polished smooth finish",
      "Stretch cord — one size fits all",
      "Traditional 21 bead count",
    ],
    specs: {
      material: "Turtle Bone (龟骨)",
      beadSize: "10mm",
      length: "21 beads",
      weight: "28g",
    },
    story:
      "Turtle bone has been used in Tibetan prayer beads for centuries, prized for its warmth and smoothness against the skin. Our supply comes from naturally deceased turtles in protected Himalayan nature reserves.",
    inStock: true,
  },
  {
    id: "4",
    slug: "coral-dzi-set",
    name: "Coral & Dzi Pendant Set",
    nameCn: "珊瑚天珠挂件套装",
    category: "accessory",
    price: 1680,
    currency: "USD",
    images: [
      "https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=luxury%20Tibetan%20coral%20and%20dzi%20bead%20pendant%20necklace%20on%20silk%20velvet%2C%20studio%20photography%2C%20deep%20red%20and%20gold%20tones%2C%20elegant%20oriental%20aesthetic%2C%20high%20end%20jewelry&image_size=square_hd",
    ],
    description:
      "A statement pendant combining Mediterranean coral with a small dzi bead, set in hand-wrought 18k gold vermeil. Worn by lamas and lay practitioners alike as an emblem of compassion.",
    descriptionCn: "地中海珊瑚搭配小天珠，18K金手工镶嵌。无论僧侣还是居士佩戴，皆为慈悲之象征。",
    highlights: [
      "Natural Mediterranean coral",
      "Antique dzi bead accent",
      "18k gold vermeil setting",
      "Includes adjustable silk cord",
    ],
    specs: {
      material: "Coral, Dzi Bead, 18k Gold Vermeil",
      beadSize: "Coral 16mm / Dzi 22mm",
      length: "45cm adjustable cord",
      weight: "18g",
    },
    story:
      "Red coral has been treasured in Tibetan culture as a symbol of the life force for more than a millennium. This piece was designed in collaboration with a master jeweler in Lhasa.",
    inStock: true,
  },
];

export const getProductBySlug = (slug: string) =>
  products.find((p) => p.slug === slug);
