import React from "react";

const Testimonial = () => {
  return (
    <div className="py-20">
      <div className="flex items-center justify-center">
        <div className="">
          <p className="text-4xl font-bold text-center mb-8">
            Clients Testimonials
          </p>

          <div className="flex justify-start mb-6">
            <div className="flex space-x-1">
              {[1, 2, 3, 4, 5].map((star) => (
                <svg
                  key={star}
                  className="w-5 h-5 text-yellow-400 fill-current"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>
          </div>

          <div className="mb-8">
            <p className="text-gray-700 text-lg leading-relaxed max-w-3xl mx-auto text-start">
              I have been working with DeshIt-BD since 2011. My contact person
              has now taken on the role of CTO. With the help of his team, he
              takes full responsibility for all tech-related things from daily
              maintenance to servers and security. Recently, DeshIt-BD also took
              over product development. I highly trust DeshIt-BD and am glad to
              work with such a committed and competent team. I can recommend
              DeshIt-BD for any web or Ruby on Rails project.
            </p>
          </div>

          <div className="flex items-center justify-start mb-6">
            <img
              src="https://images.unsplash.com/photo-1494790108755-2616b612b5c5?w=100&h=100&fit=crop&crop=face"
              alt="Bodilija Abelsson"
              className="w-16 h-16 rounded-full mr-4"
            />
            <div>
              <p className="text-black font-medium">
                Bodilija Abelsson,{" "}
                <span className="text-orange-500">
                  Founder of SimpleSignup.se
                </span>
              </p>
            </div>
          </div>

          {/* Pagination Dots */}
          <div className="flex justify-center space-x-2">
            <div className="w-3 h-3 bg-orange-500 rounded-full"></div>
            <div className="w-3 h-3 bg-gray-300 rounded-full"></div>
            <div className="w-3 h-3 bg-gray-300 rounded-full"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
