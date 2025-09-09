import React from "react";

const Footer = () => {
  const ProductList = ["Market", "ERC20 Token", "Donation"];
  const ContactList = [
    "support@cryptoking.com",
    "info@example.com",
    "Contact us",

  ];
  const usefulLinks = ["Home", "About Us", "Company Bio"];
  return (
    <footer className="text-center text-white bg-black lg:text-left">
      <div className="mx-6 py-10 text-center md:text-left">
        <div className="grid-1 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div className="">
            <h6 className="mb-4 flex items-center justify-center font-semibold md:justify-start">
              Crypto King
            </h6>
            <p>
              Here you can use rows and columns to organize your footer content. Lorem
              ipsum dolor sit amet, consectetur adipisicing elit.
            </p>
          </div>
          <div className="">
            <h6 className="mb-4 flex justify-center font-semibold md:justify-start uppercase">
              Products
            </h6>
            {
              ProductList.map((el, i) => (
                <p className="mb-4" key={i + 1}>
                  <a href="#!" >{el}</a>
                </p>
              ))
            }
          </div>
          <div className="">
            <h6 className="mb-4 flex justify-center font-semibold md:justify-start uppercase">
              Useful links
            </h6>
            {
              usefulLinks.map((el, i) => (
                <p className="mb-4" key={i + 1}>
                  <a href="#!" >{el}</a>
                </p>
              ))
            }
          </div>
          <div>
            <h6 className="mb-4 flex justify-center font-semibold md:justify-start uppercase">
              Contact
            </h6>
            {
              ContactList.map((el, i) => (
                <p className="mb-4" key={i + 1}>
                  <a href="#!" >{el}</a>
                </p>
              ))
            }
          </div>
        </div>
      </div>
      <div className="bg-black p-6 text-center">
        <span>© 2025 Copyright:</span>
        <a
          className="font-semibold text-white"
          href="https://tailwind-elements.com/">
          Crypto King
        </a>
      </div>
    </footer>
  );
};
export default Footer;
