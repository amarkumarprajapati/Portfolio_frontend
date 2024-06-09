import React, { useState } from "react";
import phone from "../Assects/images/phone-call.png";
import email from "../Assects/images/mail.png";
import address from "../Assects/images/placeholder.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";

const Connect = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Check if any form field is filled
    const isFormFilled = Object.values(formData).some(
      (value) => value.trim() !== ""
    );

    // If form is filled, generate WhatsApp URL and open in a new tab
    if (isFormFilled) {
      const whatsappUrl = `https://wa.me/8908013842?text=${encodeURIComponent(
        `Name: ${formData.firstName} ${formData.lastName}\nEmail: ${formData.email}\nPhone: ${formData.phone}\nMessage: ${formData.message}`
      )}`;
      window.open(whatsappUrl, "_blank");
    } else {
      // Handle form submission locally if form is not filled
      console.log("Form is empty. Do something else...");
    }
  };

  return (
    <div>
      <div className="bg-[#F6F3FC]">
        <div className="flex flex-row gap-10 w-fit m-auto">
          <div className="bg-white rounded-2xl m-24 w-[40%]">
            <form
              className="px-10 py-8 flex flex-col gap-5"
              onSubmit={handleSubmit}
            >
              <h1 className="text-5xl font-bold">Let’s work together!</h1>
              <p className="text-lg">
                I design and code beautifully simple things and I love what I
                do. Just simple like that!
              </p>
              {/* input */}

              <form>
                <div className="grid gap-6 mb-6 md:grid-cols-2">
                  <div>
                    <label
                      htmlFor="first_name"
                      className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                      First name
                    </label>
                    <input
                      type="text"
                      id="first_name"
                      name="firstName"
                      className="border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      placeholder="First name"
                      value={formData.firstName}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="last_name"
                      className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                      Last name
                    </label>
                    <input
                      type="text"
                      id="last_name"
                      name="lastName"
                      className="border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      placeholder="Last name"
                      value={formData.lastName}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="company"
                      className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                      Company
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      className="border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      placeholder="Company Name"
                      value={formData.company}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="phone"
                      className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                      Phone number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      className="border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      placeholder="123-45-678"
                      pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>
              </form>

              <textarea
                name="message"
                placeholder="Message"
                value={formData.message}
                onChange={handleChange}
                className="w-full py-3 px-3 border-2 rounded-lg placeholder-left"
                rows="4"
                required
              />

              <button
                type="submit"
                className="bg-blue-500 w-fit px-10 py-5 rounded-lg text-white flex items-center gap-2"
              >
                <FontAwesomeIcon icon={faWhatsapp} />
                Submit
              </button>
            </form>
          </div>
          <div className="flex flex-col gap-6 items-center justify-center">
            <div className="flex gap-5 items-center w-[100%]">
              <img src={phone} alt="phone" className="w-12" />
              <div className="text-2xl font-semibold">
                <p>Phone</p>
                <p>+91-8908013842</p>
              </div>
            </div>
            <div className="flex gap-5 items-center w-[100%]">
              <img src={email} alt="email" className="w-12" />
              <div className="font-semibold">
                <p>Email</p>
                <p className="text-2xl">amarkumarprajapati@gmail.com</p>
              </div>
            </div>
            <div className="flex gap-5 items-center w-[100%]">
              <img src={address} alt="address" className="w-12" />
              <div className="text-2xl font-semibold">
                <p>Address</p>
                <p>+01 123 654 8096</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Connect;
