import React from "react";
import PropTypes from "prop-types";
import AlbumList from "./components/AlbumList";

AlbumFeature.propTypes = {};

function AlbumFeature(props) {
  const albumList = [
    {
      id: 1,
      name: "Bai Hat 1",
      thumnailUrl: "",
    },
    {
      id: 2,
      name: "Bai Hat 2",
      thumnailUrl: "",
    },
    {
      id: 3,
      name: "Bai Hat 3",
      thumnailUrl: "",
    },
  ];
  return (
    <div>
      <h2>Co the ban se thich day</h2>
      <AlbumList albumList={albumList} />
    </div>
  );
}

export default AlbumFeature;
