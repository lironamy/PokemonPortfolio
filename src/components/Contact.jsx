import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";
import { Mewtwo } from "../components";
import { Canvas } from "@react-three/fiber";
import Swal from "sweetalert2";



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

    if (!form.name || !form.email || !form.message) {
      setLoading(false);
      return (
        Swal.fire({
          title: "Oops!",
          text: "Please fill all the fields.",
          icon: "error",
          confirmButtonText: "Ok",
        })
      )
    }

    emailjs
      .send(
        'service_ncuy6t8',
        'template_t6tvhsp',
        {
          from_name: form.name,
          to_name: "Liron",
          from_email: form.email,
          to_email: "lironamy@gmail.com",
          message: form.message,
        },
        'PtDT7V1ZOJMw17_H0'
      )
      .then(
        () => {
          setLoading(false);
          Swal.fire({
            title: "Thank you!",
            text: "Your message has been sent successfully.",
            icon: "success",
            confirmButtonText: "Ok",
          });


          setForm({
            name: "",
            email: "",
            message: "",
          });
        },
        (error) => {
          setLoading(false);
          console.error(error);

          Swal.fire({
            title: "Oops!",
            text: "Something went wrong. Please try again later.",
            icon: "error",
            confirmButtonText: "Ok",
          });
        }
      );
  };

  return (
    <div className="h-screen">
      <div
        className={`xl:mt-12 flex xl:flex-row flex-col-reverse gap-10 overflow-hidden`}
      >
        <motion.div
          variants={slideIn("left", "tween", 0.2, 1)}
          className='flex-[0.75] bg-black-100 p-8 rounded-2xl'
        >
          <p className={styles.sectionSubText}>Get in touch</p>
          <h3 className={styles.sectionHeadText}>Contact.</h3>

          <form
            ref={formRef}
            onSubmit={handleSubmit}
            className='mt-12 flex flex-col gap-8'
          >
            <label className='flex flex-col'>
              <span className='text-white font-medium mb-4'>Your Name</span>
              <input
                type='text'
                name='name'
                value={form.name}
                onChange={handleChange}
                placeholder="What's your name?"
                className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
              />
            </label>
            <label className='flex flex-col'>
              <span className='text-white font-medium mb-4'>Your email</span>
              <input
                type='email'
                name='email'
                value={form.email}
                onChange={handleChange}
                placeholder="What's your email?"
                className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
              />
            </label>
            <label className='flex flex-col'>
              <span className='text-white font-medium mb-4'>Your Message</span>
              <textarea
                rows={7}
                name='message'
                value={form.message}
                onChange={handleChange}
                placeholder='What would you like to say?'
                className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
              />
            </label>

            <button
              type='submit'
              className='bg-tertiary py-3 px-8 rounded-xl outline-none w-fit text-white font-bold shadow-md shadow-primary'
            >
              {loading ? "Sending..." : "Send"}
            </button>
          </form>
        </motion.div>

        <motion.div
          variants={slideIn("right", "tween", 0.2, 1)}
          className='xl:flex-1 xl:h-auto md:h-[550px] h-[350px]'
        >
          <Canvas camera={{ position: [0, 0, 12], fov :50,  }} >
          <Mewtwo />

          </Canvas>
        </motion.div>
      </div>
    </div>
  );
};

export default SectionWrapper(Contact, "contact");
