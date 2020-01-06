import React from 'react'
import ImageCard from './ImageCard'

const ImageCardList = (props) => {
    const looper = () => {
        const images = props.images
        console.log("list created")
        return images.map((image) => <ImageCard key={image.id} image={image} fetchImageData={props.fetchImageData} imageData={props.imageData}/>);
    }

    return (
      <div
        className="uk-child-width-1-3@s uk-child-width-1-4@m uk-child-width-1-5@l uk-flex-left uk-grid-small"
        data-uk-grid="masonry: true"
        >
        {looper()}
      </div>
    );
}

export default ImageCardList;