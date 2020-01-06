import React from 'react'
import { motion } from 'framer-motion'

const ImageCard = (props) => {
    const imageThumb = () => {
        let thumbUrl = "https://i.imgur.com/1sYu3VL.png"
        if (props.image.thumb_url) {
            thumbUrl = props.image.thumb_url
        }

        return thumbUrl
    }
    const imageInfo = async () => {
        await props.fetchImageData(props.image.id)
    }

    return (
      <div>
        <motion.div className="uk-inline" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.9 }}>
            <img
                className="uk-card uk-card-default uk-flex uk-flex-center uk-flex-middle"
                src={imageThumb()}
                    alt={props.image.title}
                    onClick={imageInfo}
                    data-uk-toggle="target: #modal-center"
                data-uk-img>
                </img>
            <div className="uk-overlay uk-overlay-primary uk-dark uk-position-bottom">
                <p>{props.image.title}</p>
            </div>
        </motion.div>
        </div>
    );
}

export default ImageCard;