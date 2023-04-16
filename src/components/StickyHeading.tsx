import { ParallaxLayer } from "@react-spring/parallax";

interface StickyHeadingProps {
  stickyStart: number;
  stickyEnd: number;
  topPosition: string;
  fontWeight: string;
  text: string;
}

const StickyHeading = ({
  stickyStart,
  stickyEnd,
  topPosition,
  fontWeight,
  text,
}: StickyHeadingProps) => {
  return (
    <ParallaxLayer
      className="text-layer text-layer-want"
      speed={2}
      sticky={{ start: stickyStart, end: stickyEnd }}
    >
      <h1 style={{ top: topPosition, fontWeight: fontWeight }}>{text}</h1>
    </ParallaxLayer>
  );
};

export default StickyHeading;
