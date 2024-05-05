import React, { useState } from "react";
import Image from "next/image";
import Modal from "./Modal";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";

const Gallery = ({ id }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const openModal = () => {
    setIsModalOpen(true);
  };
  const closeModal = () => {
    setIsModalOpen(false);
  };
  return (
    <motion.div
      variants={fadeIn("up", 0.5, 0)}
      initial="offscreen"
      whileInView="onscreen"
      viewport={{ once: true, amount: 0 }}
    >
      <div className=" w-[90%] h-[90%]">
        <Image
          onClick={openModal}
          className="rounded-lg  w-full h-full"
          src={`/gallery/gallery-${id}.jpg`}
          width={900}
          height={900}
          alt="image"
        />{" "}
      </div>
      {isModalOpen && (
        <Modal
          closeModal={closeModal}
          imageSrc={`/gallery/gallery-${id}.jpg`}
        />
      )}
    </motion.div>
  );
};

export default Gallery;
