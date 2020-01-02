import React from 'react'

const ImageModal = (props) => {

    const keywordsExist = () => {
        if (props.imageData.keywords) {
            return props.imageData.keywords.map((keyword, index) => <li key={index}>{keyword.phrase}</li>)
        }
    }

    const hrefsExist = () => {
        if (props.imageData.thumb_url) { 
            return props.imageData.thumb_url
        }
        else {
            return "https://i.imgur.com/1sYu3VL.png";
        }
    }
        const { description, title, hrefs } = props.imageData;
        return (
        <div id="modal-center" className="uk-flex-top" data-uk-modal>
            <div className="uk-modal-dialog uk-modal-body uk-margin-auto-vertical" style={{borderRadius: "1.5rem"}}>
                    <button className="uk-modal-close-default" type="button" data-uk-close></button>
                    <img src={hrefsExist()} style={{borderRadius: "1.5rem"}} alt={title}></img>
                    <h1>{title}</h1>
                    <ul style={{ fontWeight: 'bold' }}>Keywords: {keywordsExist()}</ul>
                    <p>Description: {description}</p>
            </div>
        </div>
        );
}

export default ImageModal;