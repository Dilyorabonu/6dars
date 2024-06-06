function Footer({ color, changeColor }) {
  return (
    <div>
      <div
        onClick={() => changeColor("green")}
        style={{ color: color, cursor: "pointer" }}
      ></div>
    </div>
  );
}

export default Footer;
