import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  height: 100vh;
  justify-content: center;
  align-items: center;
  background: linear-gradient(135deg, rgb(248, 153, 125), rgb(173, 51, 109));
`;

const Box = styled(motion.div)`
  height: 200px;
  background-color: rgba(255, 255, 255, 0.5);
  border-radius: 10px;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;

const Circle = styled(motion.div)`
  width: 50px;
  height: 50px;
  background-color: white;
  border-radius: 50px;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  width: 50vw;
  gap: 10px;
`;

const Overlay = styled(motion.div)`
  width: 100%;
  height: 100%;
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Button = styled.button`
  position: absolute;
  bottom: 15vh;
`;

const BoxVar = {
  hover1: {
    scale: 1.2,
    transformOrigin: "bottom right"
  },
  hover2: {
    scale: 1.2,
    transformOrigin: "bottom left"
  },
  hover3: {
    scale: 1.2,
    transformOrigin: "top right"
  },
  hover4: {
    scale: 1.2,
    transformOrigin: "top left"
  },
  end1: {
    transformOrigin: "bottom right"
  },
  end2: {
    transformOrigin: "bottom left"
  },
  end3: {
    transformOrigin: "top right"
  },
  end4: {
    transformOrigin: "top left"
  }
};

export default function framerMotion() {
  const [clicked, setClicked] = useState(false);
  const toggleClicked = () => setClicked((prev) => !prev);
  const [id, setId] = useState<null | string>(null);

  return (
    <Wrapper>
      <Grid>
        {["1", "2", "3", "4"].map((n) => (
          <Box
            variants={BoxVar}
            onClick={() => setId(n)}
            key={n}
            layoutId={n}
            whileHover={`hover${n}`}
            animate={`end${n}`}
          >
            {n === "2" && !clicked ? (
              <Circle layoutId="circle" />
            ) : n === "3" && clicked ? (
              <Circle layoutId="circle" />
            ) : null}
          </Box>
        ))}
      </Grid>
      <Button onClick={toggleClicked}>Switch</Button>
      <AnimatePresence>
        {id ? (
          <Overlay
            onClick={() => setId(null)}
            initial={{ backgroundColor: "rgba(0, 0, 0, 0)" }}
            animate={{ backgroundColor: "rgba(0, 0, 0, 0.5)" }}
            exit={{ backgroundColor: "rgba(0, 0, 0, 0)" }}
          >
            <Box
              layoutId={id}
              style={{
                width: 400,
                height: 200,
                backgroundColor: "rgba(255, 255, 255, 1)"
              }}
            />
          </Overlay>
        ) : null}
      </AnimatePresence>
    </Wrapper>
  );
}
