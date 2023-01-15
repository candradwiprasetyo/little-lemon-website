import React from "react";

export const Item = () => {
  const foodData = [
    {
      name: "GreekSalad",
      description:
        " These tasty and easy green salad recipes are so versatile! They pair with just about any main dish, from pasta to pizza to salmon to chili.",
      img: "https://cdn.pixabay.com/photo/2016/03/05/23/01/prawn-1239427_960_720.jpg",
      price: "50$",
    },
    {
      name: "Breechuta",
      description:
        " These tasty and easy green salad recipes are so versatile! They pair with just about any main dish, from pasta to pizza to salmon to chili.",
      img: "https://media.istockphoto.com/id/1344945761/photo/italian-bruschetta-on-a-rustic-wood-cutting-board.jpg?s=612x612&w=is&k=20&c=FPhj6B7ma1wWncme5LVBG9_gk19nrXsn82STFY38WAY=",
      price: "40$",
    },
    {
      name: "Lemon desert",
      description:
        " These tasty and easy green salad recipes are so versatile! They pair with just about any main dish, from pasta to pizza to salmon to chili.",
      img: "https://cdn.pixabay.com/photo/2016/03/05/20/11/afters-1238692_960_720.jpg",
      price: "60$",
    },
  ];

  return (
    <div className="px-5 lg:px-[100px]   ">
      <div className="flex justify-between py-6 ">
        <h1 className="text-2xl font-bold ">Specials</h1>
        <button className="rounded-full btn btn-base px-7" role="button">Online Menu </button>
      </div>
      <div className="flex flex-col items-center justify-center md:flex-row">
        {foodData.map((item, indexItem) => (
          <div
            className="card rounded-lg mt-5 overflow-clip w-[300px] glass ml-4"
            key={indexItem}
          >
            <div className="">
              <figure>
                <img src={item.img} alt="car!" />
              </figure>
            </div>

            <div className="card-body bg-base">
              <h2 className="card-title">{item.name}</h2>
              <h5 className="text-red-400 card-title">{item.price}</h5>
              <p className="text-start">{item.description}</p>
              <div className="justify-start card-actions">
                <a href="/booking" role="button">
                  <button className="btn btn-white">order delivery!</button>
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
