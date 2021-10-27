import React from "react";
import PropTypes from "prop-types";
import AlbumItem from "../AlbumItem";

AlbumList.propTypes = {
  albumList: PropTypes.array,
};

AlbumList.defaultProps = {
  albumList: [],
};

function AlbumList(props) {
  const { albumList } = props;
  return (
    <ul>
      {albumList.map((album) => (
        <li key={album.id}>
          <AlbumItem album={album} />
        </li>
      ))}
    </ul>
  );
}

export default AlbumList;
