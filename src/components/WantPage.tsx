import { ParallaxLayer } from "@react-spring/parallax";
import StickyHeading from "./StickyHeading";

interface WantPageProps {
  pageStartLayer: number;
  pageEndLayer: number;
}

const WantPage = ({ pageStartLayer, pageEndLayer }: WantPageProps) => {
  return (
    <>
      <ParallaxLayer
        factor={1.25}
        sticky={{ start: pageStartLayer, end: pageEndLayer + 0.25 }}
        style={{
          backgroundColor: "orange",
        }}
      />
      <StickyHeading
        stickyStart={pageStartLayer + 1}
        stickyEnd={pageEndLayer}
        topPosition="5%"
        fontWeight="400"
        text="Want to feel the"
      />
      <StickyHeading
        stickyStart={pageStartLayer + 2}
        stickyEnd={pageEndLayer}
        topPosition="20%"
        fontWeight="700"
        text="ADRENALINE? 🔥"
      />
      <StickyHeading
        stickyStart={pageStartLayer + 3}
        stickyEnd={pageEndLayer}
        topPosition="35%"
        fontWeight="400"
        text="And save"
      />
      <StickyHeading
        stickyStart={pageStartLayer + 4}
        stickyEnd={pageEndLayer}
        topPosition="50%"
        fontWeight="700"
        text="LiIVES? ❤️"
      />
      <StickyHeading
        stickyStart={pageStartLayer + 5}
        stickyEnd={pageEndLayer}
        topPosition="65%"
        fontWeight="400"
        text="And make"
      />
      <StickyHeading
        stickyStart={pageStartLayer + 6}
        stickyEnd={pageEndLayer}
        topPosition="80%"
        fontWeight="700"
        text="MONEY? 💰"
      />
    </>
  );
};

export default WantPage;
