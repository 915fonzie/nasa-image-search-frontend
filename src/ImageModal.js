import React from 'react'

const ImageModal = (props) => {
    console.log(props.imageData.hrefs)
    const keywordsExist = () => {
        if (props.imageData.keywords) {
            return props.imageData.keywords.map((keyword, index) => <li key={index}>{keyword.phrase}</li>)
        }
    }

    const thumbExist = () => {
        if (props.imageData.thumb_url) { 
            return props.imageData.thumb_url
        }
        else {
            return "https://i.imgur.com/1sYu3VL.png";
        }
    }

    const hrefsExist = () => {
        if (props.imageData.hrefs) {
            return props.imageData.hrefs.map((href, index) => <a key={index} href={href.image_size_url}>{index}</a>)
        }
        return null;
    }
        const { description, title} = props.imageData;
        return (
        <div id="modal-center" className="uk-flex-top" data-uk-modal>
            <div className="uk-modal-dialog uk-modal-body uk-margin-auto-vertical" style={{borderRadius: "1.5rem"}}>
                    <button className="uk-modal-close-default" type="button" data-uk-close></button>
                    <img src={thumbExist()} style={{borderRadius: "1.5rem"}} alt={title}></img>
                    <h1>{title}</h1>
                    <ul style={{ fontWeight: 'bold' }}>Keywords: {keywordsExist()}</ul>
                    <ul>Downloads: {hrefsExist()}</ul>
                    <p>Description: {description}</p>
            </div>
        </div>
        );
}

export default ImageModal;