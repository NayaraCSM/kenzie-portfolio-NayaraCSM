import { styled } from "@/styles/stitches.config";
import { Flex } from "@/styles/Global";
import { Button } from "@/styles/Buttons";

import dots from "@/public/static/img/background/dots.svg";

export const Header = styled("header", {
  backgroundColor: "$grey3",
  padding: "9rem 0 6rem 0",
  backgroundRepeat: "no-repeat",
  borderBottom: "2px solid $grey5",
  "@tablet": {
    backgroundPosition: "right -10% center",
  },
  "@mobile": {
    padding: "9rem 0 6rem 0",
  },
  "@mobileLittle": {
    padding: "9rem 0 0 0",
  },
});

export const HeaderButtonsArea = styled(Flex, {
  marginTop: "$2",
  flexDirection: "collum",
  display: "flex",
  justifyContent: "center",

  [`& ${Button}`]: {
    overflow: "hidden",
  },
});

export const H2 = styled("h2", {
  fontSize: "2rem",
  fontWeight: 600,
  color: "$grey4",
  padding: "2rem 0",
  fontFamily: '"IBM Plex Sans"',
  "@mobile": {
    fontSize: "2rem",
  },
});

export const ProjectsArea = styled("section", {
  padding: "$section 0",
  backgroundColor: "$grey0",
  backgroundImage: `url(${dots})`,
  backgroundRepeat: "no-repeat",
  "@tablet": {
    backgroundPosition: "right top 8rem",
    padding: "$sectionMobile 0",
  },
});

export const ProjectAreaWrapperColumns = styled("div", {
  padding: "4rem 8rem",
  position: "relative",
  alignItems: "flex-start",
  "@table": {
    padding: "4rem 6rem",
  },
  "@mobile": {
    flexDirection: "column",
    padding: "4rem 2rem",
  },
});
