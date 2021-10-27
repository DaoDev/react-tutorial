import React from "react";
import PropTypes from "prop-types";

AlbumItem.propTypes = {
  album: PropTypes.string.isRequired,
};

function AlbumItem({ album }) {
  return (
    <div className="album">
      <p>{album.name}</p>
    </div>
  );
}

export default AlbumItem;
