import React from 'react';
import { GifGridItem } from './GifGridItem';
import { useFetchGifs } from '../hooks/useFetchGifs';


export const GifGrid = ({ category }) => {

    const { data: images, loading } = useFetchGifs(category);

    return (
        <>
            <h3>{category}</h3>
            <p>{loading && 'Loading...'}</p>
            <div className="card-grid animate__animated animate__fadeInRightBig">
                {images.map(img => <GifGridItem key={img.id} {...img} />)}
            </div>
        </>
    )
}
