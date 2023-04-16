import { ParallaxLayer } from "@react-spring/parallax";
import StickyHeading from "./StickyHeading";
import ambulance from "./images/ambulance.png";

interface BecomePageProps {
  pageStartLayer: number;
  pageEndLayer: number;
}

const BecomePage = ({ pageStartLayer, pageEndLayer }: BecomePageProps) => {
  return (
    <>
      <ParallaxLayer
        factor={1.25}
        sticky={{ start: pageStartLayer, end: pageEndLayer + 0.25 }}
        style={{
          backgroundColor: "red",
        }}
      />
      <StickyHeading
        stickyStart={pageStartLayer + 1}
        stickyEnd={pageEndLayer}
        topPosition="20%"
        fontWeight="400"
        text="Become a"
      />
      <StickyHeading
        stickyStart={pageStartLayer + 2}
        stickyEnd={pageEndLayer}
        topPosition="35%"
        fontWeight="700"
        text="PARAMEDIC"
      />
      <ParallaxLayer sticky={{ start: pageStartLayer + 3, end: pageEndLayer }}>
        <img src={ambulance} className="ambulance" style={{ bottom: "-45%" }} />
      </ParallaxLayer>
    </>
  );
};

export default BecomePage;
