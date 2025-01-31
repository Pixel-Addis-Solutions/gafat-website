import { Calendar, Megaphone, Award } from "lucide-react";

const newsItems = [
  { icon: <Calendar className="w-12 h-12 text-blue-600" />, title: "Annual Healthcare Expo", date: "March 15, 2024" },
  { icon: <Megaphone className="w-12 h-12 text-blue-600" />, title: "New Product Arrival", date: "April 5, 2024" },
  { icon: <Award className="w-12 h-12 text-blue-600" />, title: "Best Supplier Award", date: "May 20, 2024" },
  { icon: <Calendar className="w-12 h-12 text-blue-600" />, title: "Pharmaceutical Conference", date: "June 10, 2024" },
  { icon: <Megaphone className="w-12 h-12 text-blue-600" />, title: "Company Expansion", date: "July 8, 2024" },
  { icon: <Award className="w-12 h-12 text-blue-600" />, title: "Quality Excellence Recognition", date: "August 3, 2024" },
];

const NewsPage = () => {
  return (
    <section className="bg-gray-50 py-16">
      <div className="max-w-6xl mx-auto px-6">
        <h1 className="text-4xl font-bold text-gray-900 text-center">News & Events</h1>
        <p className="text-lg text-gray-600 mt-4 text-center">
          Keep up with our latest company updates, product launches, and industry events.
        </p>

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {newsItems.map((item, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300 text-center">
              <div className="flex justify-center">{item.icon}</div>
              <h3 className="text-xl font-semibold text-gray-800 mt-4">{item.title}</h3>
              <p className="text-gray-600 mt-2 text-sm">{item.date}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default NewsPage;
