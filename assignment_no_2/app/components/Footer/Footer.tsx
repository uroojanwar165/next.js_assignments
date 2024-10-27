import footerStyle from "./footer.module.css"
import Link from "next/image";

export default function Footer() {
  return (
    <div className={footerStyle.footer}>
        <p>&copy; 2024 My Website. All rights reserved.</p>
    </div>
  );
}