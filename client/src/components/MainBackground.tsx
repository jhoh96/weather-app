import React from "react";
import { Image } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { Grid, GridItem } from "@chakra-ui/react";

// asset imports
import cloudOne from "../assets/cloudOne.png";
import cloudTwo from "../assets/cloudTwo.png";
import cloudThree from "../assets/cloudThree.png";
import airPlane from "../assets/airplane.png";

// page imports
import "./componentStyles.css";


export default function MainBackground() {
  return (
    <div>
      <Grid templateRows="repeat(2, 1fr)" className="background-content-grid">
        <GridItem id="background-content-images" rowSpan={2}>
          <motion.div
            initial={{ x: "105vw" }}
            animate={{ x: -250 }}
            transition={{
              repeat: Infinity,
              duration: 25,
              repeatType: "reverse",
            }}
          >
            <Image id="cloudTwo" src={cloudTwo} />
          </motion.div>
          <motion.div
            initial={{
              x: -250,
              y: Math.random() * (window.innerHeight - 1) + 1,
            }}
            animate={{ x: "105vw" }}
            transition={{
              repeat: Infinity,
              duration: 18,
              repeatType: "reverse",
            }}
          >
            <Image id="cloudOne" src={cloudOne} />
          </motion.div>
          <motion.div
            initial={{
              x: -250,
              y: Math.random() * (window.innerHeight - 1) + 1,
            }}
            animate={{ x: "105vw" }}
            transition={{
              repeat: Infinity,
              duration: 21,
              repeatType: "reverse",
            }}
          >
            <Image id="cloudThree" src={cloudThree} />
          </motion.div>{" "}
          <motion.div
            initial={{
              x: -250,
              y: Math.random() * (window.innerHeight - 150) + 150,
            }}
            animate={{ x: "105vw" }}
            transition={{
                duration: 13,
              }}
          >
            <Image id="airPlane" src={airPlane} />
          </motion.div>
        </GridItem>

        {/*
         *** PARTY TWO LOL
         */}

        <GridItem id="background-content-images" rowSpan={2}>
          <motion.div
            initial={{ x: "105vw" }}
            animate={{ x: -250 }}
            transition={{
              duration: 25,
              delay: 25,
            }}
          >
            <Image id="cloudTwo" src={cloudTwo} />
          </motion.div>
          <motion.div
            initial={{
              x: -250,
              y: Math.random() * (window.innerHeight - 1) + 1,
            }}
            animate={{ x: "105vw" }}
            transition={{
              duration: 25,
              delay: 25,
            }}
          >
            <Image id="cloudOne" src={cloudOne} />
          </motion.div>
          <motion.div
            initial={{
              x: -250,
              y: Math.random() * (window.innerHeight - 1) + 1,
            }}
            animate={{ x: "105vw" }}
            transition={{
              duration: 15,
              delay: 25,
            }}
          >
            <Image id="cloudThree" src={cloudThree} />
          </motion.div>{" "}
          <motion.div
            initial={{
              x: -250,
              y: Math.random() * (window.innerHeight - 150) + 150,
            }}
            animate={{ x: "105vw" }}
            transition={{
              duration: 15,
              delay: 25,
            }}
          >
            <Image id="airPlane" src={airPlane} />
          </motion.div>
        </GridItem>
      </Grid>
    </div>
  );
}
