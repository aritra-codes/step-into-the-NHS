import { useRef } from "react";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import "./ParallaxList.css";
import buildings from "./images/buildings.png";
import road from "./images/road.png";
import roadWithTrees from "./images/road-with-trees.png";
import logo from "./images/nhs-logo.png";
import skyMorning from "./images/sky.png";
import skyNight from "./images/sky-night.png";
import soil from "./images/soil.png";
import ambulance from "./images/ambulance.png";
import redCity from "./images/red-city-background.png";

const ParallaxList = () => {
  const wantPageStartLayer = 1.5;
  const wantPageEndLayer = 9;

  const HandleCloseButtonClick = () => {
    document.querySelector<HTMLElement>(".info-div")!.style.display = "none";
  };

  const returnStickyHeading = (
    stickyStart: number,
    stickyEnd: number,
    topPosition: string,
    fontWeight: string,
    text: string,
    fontSize: string = "1000%"
  ) => {
    return (
      <ParallaxLayer
        className="text-layer text-layer-want"
        speed={2}
        sticky={{ start: stickyStart, end: stickyEnd }}
      >
        <h1
          style={{
            top: topPosition,
            fontWeight: fontWeight,
            fontSize: fontSize,
          }}
        >
          {text}
        </h1>
      </ParallaxLayer>
    );
  };

  const returnStickyPage = (
    pageStartLayer: number,
    pageEndLayer: number,
    style: React.CSSProperties
  ) => {
    return (
      <ParallaxLayer
        factor={1.25}
        sticky={{ start: pageStartLayer, end: pageEndLayer + 0.25 }}
        style={style}
      />
    );
  };

  const returnCityPage = (pageStartLayer: number, skyURL: string) => {
    return (
      <>
        <ParallaxLayer
          speed={1}
          offset={pageStartLayer}
          style={{
            backgroundImage: `url(${skyURL})`,
            backgroundSize: "cover",
          }}
        />
        <ParallaxLayer
          speed={0.25}
          offset={pageStartLayer + 0.125}
          style={{
            backgroundImage: `url(${buildings})`,
            backgroundSize: "cover",
          }}
        />
        <ParallaxLayer
          speed={0.75}
          offset={pageStartLayer + 0.125}
          style={{
            backgroundImage: `url(${logo})`,
            backgroundSize: "25%",
            backgroundPosition: "top center",
          }}
        />
        <ParallaxLayer
          speed={0.5}
          offset={pageStartLayer + 0.5}
          style={{
            backgroundImage: `url(${roadWithTrees})`,
            backgroundSize: "cover",
            backgroundPosition: "bottom center",
          }}
        >
          <img src={ambulance} className="ambulance" />
        </ParallaxLayer>
      </>
    );
  };

  const returnWantPage = (pageStartLayer: number, pageEndLayer: number) => {
    return (
      <>
        {returnStickyPage(pageStartLayer, pageEndLayer, {
          backgroundColor: "orange",
        })}
        {returnStickyHeading(
          pageStartLayer + 1,
          pageEndLayer,
          "5%",
          "400",
          "Want to feel the"
        )}
        {returnStickyHeading(
          pageStartLayer + 2,
          pageEndLayer,
          "20%",
          "700",
          "ADRENALINE? 🔥"
        )}
        {returnStickyHeading(
          pageStartLayer + 3,
          pageEndLayer,
          "35%",
          "400",
          "And save"
        )}
        {returnStickyHeading(
          pageStartLayer + 4,
          pageEndLayer,
          "50%",
          "700",
          "LIVES? ❤️"
        )}
        {returnStickyHeading(
          pageStartLayer + 5,
          pageEndLayer,
          "65%",
          "400",
          "And make"
        )}
        {returnStickyHeading(
          pageStartLayer + 6,
          pageEndLayer,
          "80%",
          "700",
          "MONEY? 💰"
        )}
      </>
    );
  };

  const returnBecomePage = (pageStartLayer: number, pageEndLayer: number) => {
    return (
      <>
        {returnStickyPage(pageStartLayer, pageEndLayer, {
          backgroundColor: "red",
        })}
        {returnStickyHeading(
          pageStartLayer + 1,
          pageEndLayer,
          "20%",
          "400",
          "Become a"
        )}
        {returnStickyHeading(
          pageStartLayer + 2,
          pageEndLayer,
          "35%",
          "700",
          "PARAMEDIC!!!"
        )}
        <ParallaxLayer
          sticky={{ start: pageStartLayer + 3, end: pageEndLayer }}
        >
          <img
            src={ambulance}
            className="ambulance"
            style={{ bottom: "-45%", animationDuration: "4s" }}
          />
        </ParallaxLayer>
      </>
    );
  };

  const returnIncomePage = (pageStartLayer: number, pageEndLayer: number) => {
    return (
      <>
        {returnStickyPage(pageStartLayer, pageEndLayer, {
          backgroundColor: "#6EC531",
        })}
        {returnStickyHeading(
          pageStartLayer + 1,
          pageEndLayer,
          "20%",
          "400",
          "A skilled paramedic can make up to"
        )}
        {returnStickyHeading(
          pageStartLayer + 2,
          pageEndLayer,
          "35%",
          "700",
          "£55,000 annually!!!"
        )}
        {returnStickyHeading(
          pageStartLayer + 3,
          pageEndLayer,
          "50%",
          "700",
          "$$$",
          "2000%"
        )}
      </>
    );
  };

  const returnJourneyPage = (pageStartLayer: number, pageEndLayer: number) => {
    return (
      <>
        {returnStickyPage(pageStartLayer, pageEndLayer, {
          backgroundColor: "#F0D731",
        })}
        {returnStickyHeading(
          pageStartLayer + 1,
          pageEndLayer,
          "10%",
          "400",
          "Every journey is an"
        )}
        {returnStickyHeading(
          pageStartLayer + 2,
          pageEndLayer,
          "25%",
          "700",
          "ADVENTURE 🚑"
        )}
        {returnStickyHeading(
          pageStartLayer + 3,
          pageEndLayer,
          "40%",
          "400",
          "of saving"
        )}
        {returnStickyHeading(
          pageStartLayer + 4,
          pageEndLayer,
          "55%",
          "700",
          "LIVES ❤️"
        )}
      </>
    );
  };

  const returnResponsiblityPage = (
    pageStartLayer: number,
    pageEndLayer: number
  ) => {
    return (
      <>
        {returnStickyPage(pageStartLayer, pageEndLayer, {
          backgroundColor: "#00AFF0",
        })}
        {returnStickyHeading(
          pageStartLayer + 1,
          pageEndLayer,
          "10%",
          "400",
          "But every job comes with"
        )}
        {returnStickyHeading(
          pageStartLayer + 2,
          pageEndLayer,
          "25%",
          "700",
          "RESPONSIBILITIES"
        )}
        {returnStickyHeading(
          pageStartLayer + 3,
          pageEndLayer,
          "40%",
          "400",
          "A paramedic is no"
        )}
        {returnStickyHeading(
          pageStartLayer + 4,
          pageEndLayer,
          "55%",
          "700",
          "DIFFERENT"
        )}
      </>
    );
  };

  const returnMustPage = (pageStartLayer: number, pageEndLayer: number) => {
    return (
      <>
        {returnStickyPage(pageStartLayer, pageEndLayer, {
          backgroundColor: "#96AED0",
        })}
        {returnStickyHeading(
          pageStartLayer + 1,
          pageEndLayer,
          "10%",
          "400",
          "A paramedic MUST:"
        )}
        {returnStickyHeading(
          pageStartLayer + 2,
          pageEndLayer,
          "25%",
          "400",
          "• Be CALM under pressure"
        )}
        {returnStickyHeading(
          pageStartLayer + 3,
          pageEndLayer,
          "40%",
          "400",
          "• Be good at putting people at EASE"
        )}
        {returnStickyHeading(
          pageStartLayer + 4,
          pageEndLayer,
          "55%",
          "400",
          "• Enjoy HELPING others"
        )}
      </>
    );
  };

  const returnHavePage = (pageStartLayer: number, pageEndLayer: number) => {
    return (
      <>
        {returnStickyPage(pageStartLayer, pageEndLayer, {
          backgroundColor: "#47B7DC",
        })}
        {returnStickyHeading(
          pageStartLayer + 1,
          pageEndLayer,
          "10%",
          "400",
          "As a paramedic you also HAVE to:"
        )}
        {returnStickyHeading(
          pageStartLayer + 2,
          pageEndLayer,
          "25%",
          "400",
          "• ASSESS the situation"
        )}
        {returnStickyHeading(
          pageStartLayer + 3,
          pageEndLayer,
          "40%",
          "400",
          "• Make QUICK decisions"
        )}
        {returnStickyHeading(
          pageStartLayer + 4,
          pageEndLayer,
          "55%",
          "400",
          "• Provide life-saving TREATMENT"
        )}
      </>
    );
  };

  const returnYouPage = (pageStartLayer: number, pageEndLayer: number) => {
    return (
      <>
        {returnStickyPage(pageStartLayer, pageEndLayer, {
          backgroundColor: "#E1000F",
        })}
        {returnStickyHeading(
          pageStartLayer + 1,
          pageEndLayer,
          "20%",
          "400",
          "So do YOU want to be a"
        )}
        {returnStickyHeading(
          pageStartLayer + 2,
          pageEndLayer,
          "35%",
          "700",
          "PARAMEDIC?"
        )}
        {returnStickyHeading(
          pageStartLayer + 3,
          pageEndLayer,
          "60%",
          "400",
          "There are THREE ways to do so"
        )}
      </>
    );
  };

  const returnRequirementsPage = (
    pageStartLayer: number,
    pageEndLayer: number
  ) => {
    return (
      <>
        {returnStickyPage(pageStartLayer, pageEndLayer, {
          backgroundColor: "#330072",
        })}
        {returnStickyHeading(
          pageStartLayer + 1,
          pageEndLayer,
          "10%",
          "400",
          "But first, you will need a minimum of"
        )}
        {returnStickyHeading(
          pageStartLayer + 2,
          pageEndLayer,
          "25%",
          "700",
          "Five 9-4 (A*-C) grade GCSEs (or the equivalent)"
        )}
        {returnStickyHeading(
          pageStartLayer + 3,
          pageEndLayer,
          "55%",
          "400",
          "Including Maths, English and Science"
        )}
      </>
    );
  };

  const returnWaysPage = (pageStartLayer: number, pageEndLayer: number) => {
    return (
      <>
        {returnStickyPage(pageStartLayer, pageEndLayer, {
          backgroundColor: "#F2BA49",
        })}
        {returnStickyHeading(
          pageStartLayer + 1,
          pageEndLayer,
          "10%",
          "400",
          "Anyway, the THREE ways are:"
        )}
        {returnStickyHeading(
          pageStartLayer + 2,
          pageEndLayer,
          "25%",
          "400",
          "• Full-time degree"
        )}
        {returnStickyHeading(
          pageStartLayer + 3,
          pageEndLayer,
          "40%",
          "400",
          "• Apprenticeship"
        )}
        {returnStickyHeading(
          pageStartLayer + 4,
          pageEndLayer,
          "55%",
          "400",
          "• Junior role -> Apprenticeship"
        )}
      </>
    );
  };

  const returnWayPage = (
    pageStartLayer: number,
    pageEndLayer: number,
    heading: string,
    content: string,
    backgroundColor: string
  ) => {
    return (
      <>
        {returnStickyPage(pageStartLayer, pageEndLayer, {
          backgroundColor: backgroundColor,
        })}
        {returnStickyHeading(
          pageStartLayer + 1,
          pageEndLayer,
          "10%",
          "700",
          heading
        )}
        {returnStickyHeading(
          pageStartLayer + 2,
          pageEndLayer,
          "30%",
          "400",
          content,
          "600%"
        )}
      </>
    );
  };

  const returnHoweverPage = (pageStartLayer: number, pageEndLayer: number) => {
    return (
      <>
        {returnStickyPage(pageStartLayer, pageEndLayer, {
          backgroundColor: "#338091",
        })}
        {returnStickyHeading(
          pageStartLayer + 1,
          pageEndLayer,
          "5%",
          "400",
          "However, it is extremely"
        )}
        {returnStickyHeading(
          pageStartLayer + 2,
          pageEndLayer,
          "20%",
          "700",
          "IMPORTANT"
        )}
        {returnStickyHeading(
          pageStartLayer + 3,
          pageEndLayer,
          "35%",
          "400",
          "to check with the university or ambulance service trust"
        )}
        {returnStickyHeading(
          pageStartLayer + 4,
          pageEndLayer,
          "65%",
          "400",
          "to find out their requirements"
        )}
      </>
    );
  };

  const returnGoodbyePage = (pageStartLayer: number, pageEndLayer: number) => {
    return (
      <>
        {returnStickyPage(pageStartLayer, pageEndLayer, {
          backgroundColor: "#8CACD6",
        })}
        {returnStickyHeading(
          pageStartLayer + 1,
          pageEndLayer,
          "10%",
          "400",
          "Well that's it!"
        )}
        {returnStickyHeading(
          pageStartLayer + 1,
          pageEndLayer,
          "25%",
          "700",
          "Thank You & Goodbye"
        )}
        {returnStickyHeading(
          pageStartLayer + 1,
          pageEndLayer,
          "40%",
          "400",
          "I hope you have learnt something new and are now willing to try out becoming a PARAMEDIC!!!"
        )}
      </>
    );
  };

  return (
    <>
      <div className="info-div">
        For an optimal experience, please use a desktop or laptop to view this
        website and make sure the browser zoom is on 100%. Also, try not to use
        a plugin that changes the colours of the website.
        <button
          type="button"
          className="btn-close"
          aria-label="Close"
          onClick={HandleCloseButtonClick}
        />
      </div>
      <Parallax pages={98.35} className="parallax">
        <ParallaxLayer className="scroll-div" speed={0.75}>
          <h1>↕️ Scroll to progress ↕️</h1>
        </ParallaxLayer>
        {returnCityPage(0, skyMorning)}
        {returnWantPage(1.5, 9)}
        {returnBecomePage(11, 15)}
        {returnIncomePage(17, 21)}
        {returnJourneyPage(23, 28)}
        {returnResponsiblityPage(30, 35)}
        {returnMustPage(37, 42)}
        {returnHavePage(44, 49)}
        {returnYouPage(51, 55)}
        {returnRequirementsPage(57, 62)}
        {returnWaysPage(64, 69)}
        {returnWayPage(
          71,
          74,
          "Full-time Degree",
          "You can take a full-time approved degree in paramedic science/practice at university. An A level or an equivalent level 3 qualification would allow you to have a wider range of options open to you, to become a paramedic.",
          "#276A6E"
        )}
        {returnWayPage(
          76,
          79,
          "Student Paramedic Post",
          "You can apply for a post with an ambulance service trust as a student paramedic. This will help you to get started being a paramedic right away and allow you to gain precious work experience.",
          "#1DB954"
        )}
        {returnWayPage(
          81,
          84,
          "Junior role -> Apprenticeship",
          "You can apply for a more junior role and then work your way up to doing a degree apprenticeship in paramedic science (which some ambulance service trusts run) and study part-time while you're working.",
          "#FF7300"
        )}
        {returnHoweverPage(86, 91)}
        {returnGoodbyePage(93, 95)}
        <ParallaxLayer
          offset={97}
          factor={1.35}
          style={{ backgroundColor: "#002147" }}
        />
        {returnCityPage(97, skyNight)}
      </Parallax>
    </>
  );
};

export default ParallaxList;
