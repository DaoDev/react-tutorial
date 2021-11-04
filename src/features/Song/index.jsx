import React from 'react';
import AlbumList from './components/AlbumList';

function AlbumFeature(props) {
  const albumList = [
    {
      id: 1,
      name: 'Bai Hat 1',
      thumbnailUrl: '',
    },
    {
      id: 2,
      name: 'Bai Hat 2',
      thumbnailUrl: '',
    },
    {
      id: 3,
      name: 'Bai Hat 3',
      thumbnailUrl: '',
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
