import React from "react";

const Footer = () => {

  return (
    <div className="px-5 lg:px-[100px] py-10 bg-yellow-50">
      <div className="container mx-auto text-left md:px-40">
        <h1 className="mb-6 text-2xl font-bold text-center md:text-left ">Little Lemon Website</h1>
        <div className="justify-between mx-auto md:flex ">
          <div>
            <img src="/menu/footer.jpeg" width="300" className="mx-auto mb-5 rounded-lg" />
          </div>
          <nav className="mb-5 md:w-1/3">
            <ul className="font-bold text-center md:text-left">
              <li className="py-5 border-b">
                <a href="/">Home</a>
              </li>
              <li className="py-5 border-b">
                <a role="button">About</a>
              </li>
              <li className="py-5 border-b">
                <a role="button">Menu</a>
              </li>
              <li className="py-5 border-b">
                <a href="/booking" role="button">Reservation</a>
              </li>
              <li className="py-5">
                <a href="/booking" role="button">Order Online</a>
              </li>
            </ul>
          </nav>
          <div>
            <h2 className="mb-6 text-2xl font-bold text-left">Contact</h2>
            <ul className="font-bold">
              <li>
              Jalan Petitenget No.100<br />
              Seminyak, Bali<br />
              Indonesia
              </li>
              <li>
                <br />Contant number 0251-8385841
              </li>
              <li>
                <br />Whatsapp number +62-857-7022-9892
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;