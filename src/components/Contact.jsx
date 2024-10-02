import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

import { styles } from "../styles";
import { EarthCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";

//TEMPLATE_ID template_mnepown
//SERVICE_ID service_2cbphni
//PUBLIC_KEY l93SCcwkRRptliO67
//test

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { target } = e;
    const { name, value } = target;

    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .send(
        "service_2cbphni",
        "template_mnepown",
        {
          from_name: form.name,
          to_name: "Ramy Gouiaa",
          from_email: form.email,
          to_email: "ramygouiaa90@gmail.com",
          message: form.message,
        },
        "l93SCcwkRRptliO67"
      )
      .then(
        () => {
          setLoading(false);
          alert("Thank you. I will get back to you as soon as possible.");

          setForm({
            name: "",
            email: "",
            message: "",
          });
        },
        (error) => {
          setLoading(false);
          console.error(error);

          alert("Ahh, something went wrong. Please try again.");
        }
      );
  };

  return (
    <div
      className={`xl:mt-12 flex xl:flex-row flex-col-reverse gap-10 overflow-hidden`}
    >
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className="flex-[0.75] bg-black-100 p-8 rounded-2xl"
      >
        <p className={styles.sectionSubText}>Get in touch</p>
        <h3 className={styles.sectionHeadText}>Contact.</h3>

        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className="mt-12 flex flex-col gap-8"
        >
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">
              <a href="https://encr.pw/ramygouiaaresume" target="_blank">
                My resume
              </a>
            </span>
          </label>
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">
              ramygouiaa90@gmail.com
            </span>
          </label>
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">
              <a
                href="https://www.instagram.com/ramygouia?igsh=Z2V1aXB5MDNkNjYw"
                target="_blank"
              >
                Instagram
              </a>
            </span>
          </label>
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">
              <a
                href="https://www.facebook.com/rg.enpersonne?mibextid=ZbWKwL"
                target="_blank"
              >
                Facebook
              </a>
            </span>
          </label>
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">
              <a href="https://github.com/ramygouiaa" target="_blank">
                Github
              </a>
            </span>
          </label>
        </form>
      </motion.div>

      <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        className="xl:flex-1 xl:h-auto md:h-[550px] h-[350px]"
      >
        <EarthCanvas />
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Contact, "contact");
