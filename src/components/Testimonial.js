import React from "react";

const Testimonial = () => {
  const testimonialData = [
    {
      name: "James Rodrigues",
      review:
        "Thanks again this year for having our TCSD at your fine restaurant last Monday evening.",
      img: "https://picsum.photos/160",
      rating: "5",
    },
    {
      name: "Lionel Messi",
      review:
        "The food, service, ambience and more was all superb!!! On behalf of us all, fight on!",
      img: "https://picsum.photos/170",
      rating: "4",
    },
    {
      name: "Ronaldinho",
      review:
        "I just wanted to let you know that I had one of the best dinners of my life last night…. at your restaurant!!",
      img: "https://picsum.photos/180",
      rating: "3",
    },
    {
      name: "Tomas Mueller",
      review:
        "Last Friday I came for restaurant week. It was FABULOUS! The portions were overly generous. Everything was so yummy – what a bargain. I will be back soon.",
      img: "https://picsum.photos/190",
      rating: "5",
    },
  ];

  return (
    <div className="px-5 lg:px-[100px] py-10 bg-gray-50 my-10">
      <div className="py-6 text-center ">
        <h1 className="text-2xl font-bold ">Testimonials</h1>
      </div>
      <div className="items-stretch justify-center md:flex">
        {testimonialData.map((item, indexItem) => (
          <div
            className=" rounded-lg mt-5 overflow-clip mb-5 md:w-[260px] mx-4 p-4 bg-white shadow-md"
            key={indexItem}
          >
            <h2 className="card-title">Rating: <span className="text-yellow-500">{item.rating} / 5</span></h2>
            <div className="flex items-center gap-2 my-3">
              <div className="w-1/3">
                <figure>
                  <img src={item.img} className="rounded-lg " alt="car!" width="100%"/>
                </figure>
              </div>
              <div className="font-bold">{item.name}</div>
            </div>
            <div className="bg-base">
              <p className="text-gray-500 text-start">{item.review}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonial;