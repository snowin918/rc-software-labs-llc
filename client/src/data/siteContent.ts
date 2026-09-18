export type CounterStat = {
  icon: string;
  value: string;
  description: string;
};

export const counterStats: CounterStat[] = [
  {
    icon: "/images/counter/star.svg",
    value: "10+ years",
    description: "Of senior delivery across regulated industries",
  },
  {
    icon: "/images/counter/admin.svg",
    value: "8 countries",
    description: "Engineers collaborating across time zones",
  },
  {
    icon: "/images/counter/bag.svg",
    value: "45+ launches",
    description: "AI, cloud, and product deployments",
  },
];

export type ServiceItem = {
  icon: string;
  title: string;
  description: string;
};

export const serviceItems: ServiceItem[] = [
  {
    icon: "/images/services/ux-design-product_1.svg",
    title: "UX & Product Design",
    description:
      "Human-centered research, strategy, and design systems that keep teams shipping fast.",
  },
  {
    icon: "/images/services/perfomance-optimization.svg",
    title: "Performance Optimization",
    description:
      "Audits, tuning, and observability that keep modern platforms reliable under load.",
  },
  {
    icon: "/images/services/ux-design-product_2.svg",
    title: "Product Engineering",
    description:
      "Cross-functional pods that move from concept to launch with calm, senior velocity.",
  },
];

export type ProgressItem = {
  title: string;
  Progress: number;
};

export const workProgress: ProgressItem[] = [
  { title: "UX Research and Testing", Progress: 95 },
  { title: "Product Management", Progress: 84 },
  { title: "UI & Visual Design", Progress: 90 },
];

export type PortfolioItem = {
  image: string;
  alt: string;
  title: string;
  slug: string;
  info: string;
  className?: string;
};

export const portfolioItems: PortfolioItem[] = [
  {
    image: "/images/portfolio/cozycasa.png",
    alt: "Cozycasa preview",
    title: "Cozycasa",
    slug: "cozycasa",
    info: "Residential commerce platform",
    className: "md:mt-0",
  },
  {
    image: "/images/portfolio/mars.png",
    alt: "Mars preview",
    title: "Mars",
    slug: "mars",
    info: "Deep tech simulation stack",
    className: "md:mt-24",
  },
  {
    image: "/images/portfolio/humans.png",
    alt: "Everyday Humans preview",
    title: "Everyday Humans",
    slug: "everyday-humans",
    info: "Social product ecosystem",
    className: "md:mt-0",
  },
  {
    image: "/images/portfolio/roket-squred.png",
    alt: "Rocket Squared preview",
    title: "Rocket Squared",
    slug: "rocket-squared",
    info: "Launch analytics hub",
    className: "md:mt-24",
  },
  {
    image: "/images/portfolio/panda-logo.png",
    alt: "Panda Labs preview",
    title: "Panda Labs",
    slug: "panda-logo",
    info: "Brand & product accelerator",
    className: "md:mt-0",
  },
  {
    image: "/images/portfolio/humans.png",
    alt: "Fusion Dynamics preview",
    title: "Fusion Dynamics",
    slug: "fusion-dynamics",
    info: "Multi-cloud orchestration",
    className: "md:mt-0",
  },
  {
    image: "/images/portfolio/cozycasa.png",
    alt: "InnovateX Ventures preview",
    title: "InnovateX Ventures",
    slug: "innovate-x-ventures",
    info: "Capital deployment OS",
    className: "md:mt-24",
  },
  {
    image: "/images/portfolio/mars.png",
    alt: "Nebula Holdings preview",
    title: "Nebula Holdings",
    slug: "nebula-holdings",
    info: "Financial intelligence suite",
    className: "md:mt-0",
  },
  {
    image: "/images/portfolio/panda-logo.png",
    alt: "Summit Partners preview",
    title: "Summit Partners",
    slug: "summit-partners",
    info: "Growth advisory platform",
    className: "md:mt-24",
  },
  {
    image: "/images/portfolio/roket-squred.png",
    alt: "Apex Strategies preview",
    title: "Apex Strategies",
    slug: "apex-strategies",
    info: "Global program ops",
    className: "md:mt-0",
  },
];

