import { styled } from "@/styles/stitches.config";
import { Container, Flex } from "@/styles/Global";
import dots from "@/public/static/img/background/dots.svg";

export const Footer = styled("footer", {
  backgroundColor: "$grey0",
  padding: "4rem 0",
  backgroundImage: `url(${dots})`,
  backgroundRepeat: "no-repeat",
  backgroundPosition: "left top 8rem",
  "& a": {
    margin: "0 !important",
  },
  "@tablet": {
    backgroundPosition: "center top 1rem",
    padding: "4rem 4rem ",
  },
  [`& ${Container}`]: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    "@mobile": {
      flexDirection: "column",
      [`& ${Flex}:first-child`]: {
        marginBottom: "$5",
        flexDirection: "column",
        [`& img`]: {
          marginBottom: "$2",
        },
      },
    },
  },
});

export const UserImage = styled("img", {
  borderRadius: "50%",
  "@mobile": {
    width: "2.25rem",
    height: "2.25rem",
  },
});
