import { Text } from "@fluentui/react-components";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer
      style={{
        background: "#3C361F80",
        marginTop: "auto",
        bottom: 0,
        width: "100%",
        height: "auto",
        padding: "1rem",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "0.5rem",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          gap: "1rem",
        }}
      >
        <Link to="/contact">Contact Us</Link>
        <Link to="/terms-and-condition">Terms and Conditions</Link>
        <Link to="/privacy">Privacy Policy</Link>
      </div>
      <Text as="p" size={200}>
        &copy; {new Date().getFullYear()} SUNSHIELD
      </Text>
    </footer>
  );
};

export default Footer;
