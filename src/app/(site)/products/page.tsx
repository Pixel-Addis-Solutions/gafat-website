"use client";
import { useState } from "react";

const products = [
  {
    image: "/images/prescription-drugs.jpg",
    title: "Prescription Drugs",
    category: "Medicine",
    description: "High-quality medications sourced from trusted manufacturers.",
  },
  {
    image: "/images/laboratory-reagents.jpg",
    title: "Laboratory Reagents",
    category: "Lab Supplies",
    description: "Reliable reagents and chemicals for medical and research labs.",
  },
  {
    image: "/images/medical-equipment.jpg",
    title: "Medical Equipment",
    category: "Equipment",
    description: "Essential tools and devices for hospitals and clinics.",
  },
  {
    image: "/images/over-the-counter-medicine.jpg",
    title: "Over-the-Counter Medicine",
    category: "Medicine",
    description: "A wide range of non-prescription medicines for everyday health needs.",
  },
  {
    image: "/images/laboratory-reagents.jpg",
    title: "Laboratory Reagents",
    category: "Lab Supplies",
    description: "Reliable reagents and chemicals for medical and research labs.",
  },
  {
    image: "/images/medical-equipment.jpg",
    title: "Medical Equipment",
    category: "Equipment",
    description: "Essential tools and devices for hospitals and clinics.",
  },
  {
    image: "/images/over-the-counter-medicine.jpg",
    title: "Over-the-Counter Medicine",
    category: "Medicine",
    description: "A wide range of non-prescription medicines for everyday health needs.",
  },
  {
    image: "/images/laboratory-reagents.jpg",
    title: "Laboratory Reagents",
    category: "Lab Supplies",
    description: "Reliable reagents and chemicals for medical and research labs.",
  },
  {
    image: "/images/medical-equipment.jpg",
    title: "Medical Equipment",
    category: "Equipment",
    description: "Essential tools and devices for hospitals and clinics.",
  },
  {
    image: "/images/over-the-counter-medicine.jpg",
    title: "Over-the-Counter Medicine",
    category: "Medicine",
    description: "A wide range of non-prescription medicines for everyday health needs.",
  },
  {
    image: "/images/laboratory-reagents.jpg",
    title: "Laboratory Reagents",
    category: "Lab Supplies",
    description: "Reliable reagents and chemicals for medical and research labs.",
  },
  {
    image: "/images/medical-equipment.jpg",
    title: "Medical Equipment",
    category: "Equipment",
    description: "Essential tools and devices for hospitals and clinics.",
  },
  {
    image: "/images/over-the-counter-medicine.jpg",
    title: "Over-the-Counter Medicine",
    category: "Medicine",
    description: "A wide range of non-prescription medicines for everyday health needs.",
  },
  {
    image: "/images/laboratory-reagents.jpg",
    title: "Laboratory Reagents",
    category: "Lab Supplies",
    description: "Reliable reagents and chemicals for medical and research labs.",
  },
  {
    image: "/images/medical-equipment.jpg",
    title: "Medical Equipment",
    category: "Equipment",
    description: "Essential tools and devices for hospitals and clinics.",
  },
  {
    image: "/images/over-the-counter-medicine.jpg",
    title: "Over-the-Counter Medicine",
    category: "Medicine",
    description: "A wide range of non-prescription medicines for everyday health needs.",
  },
  // Add more products here for testing pagination
];

const categories = ["All", "Medicine", "Lab Supplies", "Equipment"];
const PRODUCTS_PER_PAGE = 8;

const Products = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [currentPage, setCurrentPage] = useState(1);

  const filteredProducts = selectedCategory === "All"
    ? products
    : products.filter((product) => product.category === selectedCategory);

  const totalPages = Math.ceil(filteredProducts.length / PRODUCTS_PER_PAGE);
  const displayedProducts = filteredProducts.slice(
    (currentPage - 1) * PRODUCTS_PER_PAGE,
    currentPage * PRODUCTS_PER_PAGE
  );

  const handlePageChange = (newPage:any) => {
    if (newPage >= 1 && newPage <= totalPages) {
      setCurrentPage(newPage);
    }
  };

  return (
    <section className="bg-white py-14">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold text-gray-900">Our Products</h2>
        <p className="text-lg text-gray-600 mt-2">Explore our diverse range of pharmaceutical and medical products.</p>

        <div className="mt-6 flex justify-center space-x-4">
          {categories.map((category) => (
            <button
              key={category}
              className={`px-4 py-2 rounded-lg transition duration-300 ${selectedCategory === category ? "bg-primary text-white" : "bg-gray-200 text-gray-800"}`}
              onClick={() => {
                setSelectedCategory(category);
                setCurrentPage(1); // Reset to first page when category changes
              }}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {displayedProducts.map((product, index) => (
            <div key={index} className="bg-gray-50 p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300">
              <div className="flex justify-center">
                <img src={product.image} alt={product.title} className="w-20 h-20 object-cover rounded-md" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mt-4">{product.title}</h3>
              <p className="text-gray-600 mt-2 text-sm">{product.description}</p>
            </div>
          ))}
        </div>

        {totalPages > 1 && (
          <div className="mt-8 flex justify-center space-x-4">
            <button
              className="px-4 py-2 bg-gray-200 text-gray-800 rounded-lg"
              disabled={currentPage === 1}
              onClick={() => handlePageChange(currentPage - 1)}
            >
              Previous
            </button>
            <span className="px-4 py-2 text-gray-800">Page {currentPage} of {totalPages}</span>
            <button
              className="px-4 py-2 bg-gray-200 text-gray-800 rounded-lg"
              disabled={currentPage === totalPages}
              onClick={() => handlePageChange(currentPage + 1)}
            >
              Next
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default Products;
