import React from 'react';
import { UnsplashImage } from '../types';

type Props = {
  image: UnsplashImage;
};

export default function ImageItem({ image }: Props) {
  return (
    <div>
      <img src={image.urls.small} alt={image.description || 'Some Image'} />
    </div>
  );
}
