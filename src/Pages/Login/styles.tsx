const withBoxLogin: string = "360px";
const widthInto: string = "300px";

export const centerBox = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  border: 1,
  borderColor: "grey.500",
};

export const boxStyle = {
  width: withBoxLogin,
  height: "500px",
  margin: "0 auto",
  ...centerBox,
};
export const boxLogin = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  width: widthInto,
  height: "200px",
};

export const box2Style = {
  width: withBoxLogin,
  height: "60px",
  transform: "translateY(6px)",
  margin: "0 auto",
  ...centerBox,
};

export const boxText = {
  fontSize: "14px",
  textAlign: "center",
  fontFamily: "Arial",
};

export const field = {
  width: "300px",
  height: "25px",
};
