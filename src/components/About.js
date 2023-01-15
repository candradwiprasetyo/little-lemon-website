import React from "react";

const About = () => {

  return (
    <div className="px-5 lg:px-[100px] py-10 my-10">
      <div className="py-6 text-center ">
        <h1 className="text-2xl font-bold ">Little Lemon Website</h1>
      </div>
      <div className="items-center justify-center max-w-5xl gap-10 mx-auto md:flex">
        <img
          src="https://cdn.pixabay.com/photo/2022/05/22/13/21/healthy-7213383_960_720.jpg"
          className="max-w-sm h-[300px] rounded-lg shadow-2xl mx-auto mb-5"
        />
        <div className="text-lg italic text-gray-400">A land kissed by the sun and caressed by the sea in a perfect combination of elements that will always remain the greatest source of prosperity for this corner of the Earth: a tiny plot of land that does not suffer with the evolution of time and seems still, magically frozen in a dimension of simplicity and perfection which in other parts of the world is hard to come by.” Nomadic Puglia</div>
      </div>
    </div>
  );
};

export default About;