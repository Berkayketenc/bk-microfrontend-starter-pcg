import React from "react";
import { useSelector } from "react-redux";
function HomePage() {
  const message = useSelector((state) => state.app2.message);
  return (
    <div className="home-page-root">
      <div className="home-page-title">HomePage Component</div>
      <div>{message}</div>
    </div>
  );
}
export default HomePage;
