"use client";

import { useState } from "react";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";

const SingleFaq = (props: { question: string; answer: string }) => {
  const { question, answer } = props;
  const [isOpen, setIsOpen] = useState(false);

  const toggleFaq = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="mb-4 border rounded-lg overflow-hidden shadow-md">
      <button
        onClick={toggleFaq}
        className={`flex items-center justify-between w-full p-4 text-left bg-white hover:bg-gray-100 transition-colors duration-200 rounded-t-lg ${
          isOpen ? "bg-gray-100" : "bg-white"
        }`}
      >
        <h3 className="text-lg font-medium text-dark">
          {question}
        </h3>
        {isOpen ? (
          <AiOutlineMinus className="text-2xl text-primary" />
        ) : (
          <AiOutlinePlus className="text-2xl text-primary" />
        )}
      </button>
      {isOpen && (
        <div className="p-4 bg-gray-50 text-left">
          <p className="text-gray-700">{answer}</p>
        </div>
      )}
    </div>
  );
};

export default SingleFaq;