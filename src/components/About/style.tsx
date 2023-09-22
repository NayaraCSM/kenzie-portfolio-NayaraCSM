import { styled } from "@/styles/stitches.config";

export const Section = styled("section", {
  backgroundColor: "$grey4",
  padding: "4rem 8rem",

  "@mobile": {
    padding: "4rem 3rem",
  },
});

export const H2 = styled("h2", {
  fontSize: "2rem",
  fontWeight: 600,
  color: "$grey2",
  padding: "2rem 0",
  fontFamily: '"IBM Plex Sans"',
  "@mobile": {
    fontSize: "2rem",
  },
});

export const StackCards = styled("div", {
  display: "grid",
  gridTemplateColumns: "0.8fr 0.8fr 0.8fr 0.8fr 0.8fr",
  padding: "3rem 0",
  gap: "4rem",

  "@tablet": {
    gridTemplateColumns: "1fr 1fr 1fr",
  },

  "@mobile": {
    gridTemplateColumns: "1fr 1fr",
  },

  "@mobileLittle": {
    display: "flex",
    overflow: "auto",
    margin: "0 -1rem",
    paddingInline: "1rem",
  },
});
