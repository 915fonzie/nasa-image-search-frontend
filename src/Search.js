import React from 'react'   

export default class Search extends React.Component {


    render() {
        return (
          <div className="uk-container uk-margin">
            <div className="uk-container uk-flex uk-flex-between uk-margin">
              <div className="uk-inline uk-margin">
                <form className="uk-form-width-medium uk-search uk-search-default">
                  <input
                    className="uk-search-input"
                    type="search"
                    placeholder="Search..."
                  ></input>
                </form>
              </div>

              <div className="uk-inline">
                <button className="uk-button uk-button-default" type="button">
                  Filter
                </button>
                <div data-uk-dropdown="mode: click; pos: bottom-right">
                  This is a duck
                </div>
              </div>
            </div>

            <div className="uk-child-width-1-3@s uk-child-width-1-4@m uk-child-width-1-5@l uk-flex-center uk-grid-small" data-uk-grid="masonry: true">
              <div>
                <img
                  className="uk-card uk-card-default uk-flex uk-flex-center uk-flex-middle"
                  src="https://images-assets.nasa.gov/image/GSFC_20171208_Archive_e002130/GSFC_20171208_Archive_e002130~thumb.jpg"
                  alt="this is earth"
                  height="200"
                  data-uk-img
                >
                </img>
              </div>
            </div>
          </div>
        );
    }
}