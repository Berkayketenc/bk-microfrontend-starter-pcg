import React from "react";
import { useSelector } from "react-redux";

function ListPage() {
  const message = useSelector((state) => state.app.message);
  return (
    <div className="list-page-root">
      <div className="list-page-title">ListPage Component</div>
      <div> {message} </div>
    </div>
  );
}

export default ListPage;
