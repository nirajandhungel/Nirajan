import React from 'react';
import { TESTIMONIALS } from '../../constants';
import { Star } from 'lucide-react';

const Testimonials: React.FC = () => {
    return (
                <section className="py-12 sm:py-16 lg:py-20 bg-gradient-to-b from-gray-50 to-white">
          <div className="container mx-auto px-4 sm:px-6 md:px-10">
            <div className="text-center mb-8 sm:mb-12 lg:mb-16">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground mb-3 sm:mb-4">
                What Our <span className="text-primary">Team Says</span>
              </h2>
              <p className="text-muted-foreground text-sm sm:text-base lg:text-lg max-w-2xl mx-auto">
                Hear from the people who make it all happen
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
              {[
                {
                  name: "Suman Rana",
                  role: "Sr. Node JS Developer",
                  text: "Working here has been transformative. The learning opportunities and collaborative environment push me to grow every day.",
                  img: "https://picsum.photos/seed/suman/100/100",
                },
                {
                  name: "Sujan Maharjan",
                  role: "Frontend Designer",
                  text: "The creative freedom and support from the team allows me to deliver my best work. It's more than just a job.",
                  img: "https://picsum.photos/seed/sujan/100/100",
                },
                {
                  name: "Nishant Gupta",
                  role: "SEO Expert",
                  text: "Amazing work culture! The team respects work-life balance while maintaining high standards of excellence.",
                  img: "https://picsum.photos/seed/nishant/100/100",
                },
              ].map((testimonial, index) => (
                <div
                  key={index}
                  className="p-5 sm:p-6 lg:p-8 bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300"
                >
                  <div className="flex items-center gap-3 sm:gap-4 mb-3 sm:mb-4">
                    <img
                      src={testimonial.img}
                      alt={testimonial.name}
                      className="w-12 h-12 sm:w-16 sm:h-16 rounded-full object-cover border-2 border-primary"
                      width="64"
                      height="64"
                    />
                    <div>
                      <h4 className="text-sm sm:text-base font-bold text-foreground">
                        {testimonial.name}
                      </h4>
                      <p className="text-xs sm:text-sm text-primary">
                        {testimonial.role}
                      </p>
                    </div>
                  </div>
                  <p className="text-xs sm:text-sm text-muted-foreground italic leading-relaxed">
                    "{testimonial.text}"
                  </p>
                  <div className="flex gap-1 mt-3 sm:mt-4">
                    {[...Array(5)].map((_, i) => (
                      <span
                        key={i}
                        className="text-yellow-400 text-sm sm:text-base"
                      >
                        ⭐
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
    );
};

export default Testimonials;