import React from 'react'   
import ImageCardList from './ImageCardList'
import ImageModal from './ImageModal'

export default class Search extends React.Component {

  constructor() {
    super()
    this.state = {
      images: [],
      image: []
    }
  }

  imageThumb = () => {
    let thumbUrl = "https://i.imgur.com/1sYu3VL.png"
    if (this.state.image.thumb_url) {
        thumbUrl = this.state.image.thumb_url
    }
      return thumbUrl
  }

  handleSearch = (e) => {
    e.preventDefault()
    console.log(e.target[1].value)
    fetch(`https://nasa-file-search-backend.herokuapp.com/search?query=${e.target[1].value}&page=1&perPage=100`)
      .then(resp => resp.json())
      .then(json => {
        this.setState({
          images: json.file
        });
      });
  }


  fetchImageData = async (id) => {
    await fetch(`https://nasa-file-search-backend.herokuapp.com/search/${id}`)
      .then(resp => resp.json())
      .then(json => {
        this.setState({
          image: json.file
        });
      });
    return this.state.image
  }

    render() {
        return (
          <div className="uk-container uk-margin">
            <div className="uk-container uk-flex uk-flex-between uk-margin">
              <div className="uk-inline uk-margin">
                <form
                  className="uk-form-width-medium uk-search uk-search-default"
                  onSubmit={this.handleSearch}
                >
                  <button
                    className="uk-search-icon-flip"
                    data-uk-search-icon
                  ></button>
                  <input
                    className="uk-search-input"
                    type="search"
                    placeholder="Search..."
                  ></input>
                </form>
              </div>

              <div className="uk-inline">
                <button
                  className="uk-button uk-button-default"
                  type="button"
                  data-uk-toggle="target: #offcanvas-push"
                >
                  Filter
                </button>
                <div
                  id="offcanvas-push"
                  data-uk-offcanvas="mode: push; overlay: true; flip: true"
                >
                  <div className="uk-offcanvas-bar">
                    <button
                      className="uk-offcanvas-close"
                      type="button"
                      data-uk-close
                    ></button>
                    <h1>This will be the options</h1>
                  </div>
                </div>
              </div>
            </div>
            <ImageCardList
              images={this.state.images}
              fetchImageData={this.fetchImageData}
              imageData={this.state.image}
            />
            <ImageModal imageData={this.state.image} imagePhoto={this.imageThumb()} />
          </div>
        );
    }
}