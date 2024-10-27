import headerStyle from "./header.module.css"
import Link from "next/image";

export default function Header() {
  return (
    <div className= {headerStyle.header}>
        <h1>"My Website"</h1>
    </div>
  );
}