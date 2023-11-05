const WidthRegister: string = "300px";
const WithBoxRegister: string = "360px";

const BoxStyle = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  width: WithBoxRegister,
  height: "600px",
  border: 1,
  borderColor: "grey.500",
  margin: "0 auto",
};

const Box2Style = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  width: WithBoxRegister,
  height: "80px",
  border: 1,
  borderColor: "grey.500",
  margin: "0 auto",
  transform: "translateY(6px)",
} as const;

const BoxEnter = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  width: WidthRegister,
  height: "200px",
} as const;

const BoxRegister = {
  transform: "translateY(-130px)",
  fontSize: "15px",
  textAlign: "center",
  fontFamily: "Arial",
  width: WidthRegister,
  color: "gray",
};

const BoxText = {
  fontSize: "12px",
  textAlign: "center",
  fontFamily: "Arial",
} as const;

const MainBox = { transform: "translateY(-90px)" };

export {
  BoxStyle,
  BoxText,
  BoxRegister,
  BoxEnter,
  Box2Style,
  MainBox,
  WidthRegister,
  WithBoxRegister,
};
