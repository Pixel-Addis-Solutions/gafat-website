import { Testimonial } from "@/types/testimonial";
import SectionTitle from "../Common/SectionTitle";
import SingleTestimonial from "./SingleTestimonial";

const testimonialData: Testimonial[] = [
  // {
  //   id: 1,
  //   name: "Dr. Mekdes A. – Addis Ababa",
  //   designation: "Founder @ Rolex",
  //   content:
  //     "As a hospital administrator, we rely on consistent and high-quality pharmaceutical supplies. This company has never let us down! Reliable service, fast delivery, and genuine products.",
  //   image: "/images/testimonials/author-01.png",
  //   star: 5,
  // },
  // {
  //   id: 2,
  //   name: " Bethel Pharmacy – Hawassa",
  //   designation: "Founder @ UI Hunter",
  //   content:
  //     "We've been sourcing our medicines from them for over a year now. Their products are always certified, and their customer service is outstanding. Highly recommended!",
  //   image: "/images/testimonials/author-02.png",
  //   star: 5,
  // },
  // {
  //   id: 3,
  //   name: "Dr. Samuel G. – Bahir Dar",
  //   designation: "Founder @ Trorex",
  //   content:
  //     "Finding trusted pharmaceutical suppliers in Ethiopia can be challenging. But with this company, we have peace of mind knowing that every product is authentic and safe.",
  //   image: "/images/testimonials/author-03.png",
  //   star: 5,
  // },
  // {
  //   id: 4,
  //   name: "Lidya M. – Community Health Worker, Adama",
  //   designation: "Founder @ Trorex",
  //   content:
  //     "Affordable pricing, timely deliveries, and excellent support. They genuinely care about improving healthcare access in Ethiopia.",
  //   image: "/images/testimonials/author-03.png",
  //   star: 5,
  // },
];

const Testimonials = () => {
  return (
    <section className="bg-gray-1 py-8 dark:bg-dark-2 md:py-[40]">
      {/* <div className="container px-4">
        <SectionTitle
          subtitle="What Our Clients Say"
          title="What our Client Say"
          paragraph="Read firsthand experiences from our satisfied clients and see how our products and services have made a difference."
          width="640px"
          center
        />

        <div className="mt-[60px] flex flex-wrap lg:mt-20 gap-y-8">
          {testimonialData.map((testimonial, i) => (
            <SingleTestimonial key={i} testimonial={testimonial} />
          ))}
        </div>
      </div> */}
    </section>
  );
};

export default Testimonials;
