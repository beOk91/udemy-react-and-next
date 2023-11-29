import { memo } from "react";
import "./Header.css";
function Header() {
  return (
    <div className="Header">
      <h1>{new Date().toDateString()}</h1>
    </div>
  );
}

const OptimizedHeaderComponent = memo(Header);

export default OptimizedHeaderComponent;
