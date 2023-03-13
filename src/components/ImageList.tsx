import React from 'react';
import { UnsplashImage } from '../types';
import ImageItem from './ImageItem';

type Props = {
  images: UnsplashImage[];
};

export default function ImageList({ images }: Props) {
  return (
    <div className='mt-5 grid grid-cols-2 sm:grid-cols-6'>
      {images.map((image) => (
        <ImageItem key={image.id} image={image} />
      ))}
    </div>
  );
}
