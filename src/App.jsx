import React from 'react';
import Profile from './component/Profile.jsx';
import { getImageUrl } from './utils.jsx';

const Gallery = () => {
  return (
    <div>
      <h1>Notable Scientists</h1>
      <Profile
        name="Maria Skłodowska-Curie"
        imageUrl={getImageUrl('szV5sdG')}
        profession="physicist and chemist"
        awards={[
          'Nobel Prize in Physics',
          'Nobel Prize in Chemistry',
          'Davy Medal',
          'Matteucci Medal'
        ].join(', ')}
        discovery="polonium (element)"
      />
      <Profile
        name="Katsuko Saruhashi"
        imageUrl={getImageUrl('YfeOqp2')}
        profession="geochemist"
        awards={[
          'Miyake Prize for geochemistry',
          'Tanaka Prize'
        ].join(', ')}
        discovery="a method for measuring carbon dioxide in seawater"
      />
    </div>
  );
};

export default Gallery;