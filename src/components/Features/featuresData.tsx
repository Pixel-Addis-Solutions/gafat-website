import { Feature } from "@/types/feature";

const featuresData = [
  {
    id: 1,
    icon: (
      <svg width="37" height="37" viewBox="0 0 37 37" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="8" y="5" width="21" height="27" rx="3" stroke="white" stroke-width="2"/>
        <line x1="12" y1="12" x2="25" y2="12" stroke="white" stroke-width="2"/>
        <line x1="12" y1="17" x2="25" y2="17" stroke="white" stroke-width="2"/>
        <line x1="12" y1="22" x2="25" y2="22" stroke="white" stroke-width="2"/>
      </svg>
    ),
    title: "Pharmaceutical",
    paragraph: "Advanced medical devices and pharmaceuticals to improve healthcare accessibility and patient care.",
    btn: "Learn More",
    btnLink: "/products"
  },
  {
    id: 2,
    icon: (
      <svg width="37" height="37" viewBox="0 0 37 37" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="5" y="10" width="27" height="17" rx="3" stroke="white" stroke-width="2"/>
        <circle cx="14" cy="18.5" r="2" fill="white"/>
        <circle cx="23" cy="18.5" r="2" fill="white"/>
      </svg>
    ),
    title: "Manufacturing",
    paragraph: "Essential raw materials and high-quality manufactured goods to optimize global trade networks.",
    btn: "Learn More",
    btnLink: "/products",
  },
  {
    id: 3,
    icon: (
      <svg width="37" height="37" viewBox="0 0 37 37" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="8" y="8" width="21" height="21" rx="3" stroke="white" stroke-width="2"/>
        <line x1="18.5" y1="13" x2="18.5" y2="23" stroke="white" stroke-width="2"/>
        <line x1="13" y1="18.5" x2="23" y2="18.5" stroke="white" stroke-width="2"/>
      </svg>
    ),
    title: "Mining",
    paragraph: "Valuable minerals and raw materials supplied to global markets while maintaining responsible extraction practices.",
    btn: "Learn More",
    btnLink: "/products",
  },
  {
    id: 4,
    icon: (
      <svg width="37" height="37" viewBox="0 0 37 37" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="12" y="5" width="13" height="7" rx="2" stroke="white" stroke-width="2"/>
        <line x1="15" y1="12" x2="22" y2="12" stroke="white" stroke-width="2"/>
        <rect x="10" y="12" width="17" height="18" rx="3" stroke="white" stroke-width="2"/>
      </svg>
    ),
    title: "Agriculture",
    paragraph: "Premium agricultural products, supporting sustainable farming, and promoting global food security.",
    btn: "Learn More",
    btnLink: "/products",
  },
];



export default featuresData;
