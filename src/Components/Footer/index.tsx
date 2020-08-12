import React from "react";
import "./style.scss";

interface IFooterProps {
  text: string;
}

const Footer: React.FC<IFooterProps> = ({ text }) => (
  <footer className="common-footer">{text}</footer>
);

export default Footer;
