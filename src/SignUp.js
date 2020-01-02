import React from 'react'

const SignUp = () => {
    return (
      <div className="uk-container uk-container-large uk-margin">
        <div className="uk-card uk-card-default uk-card-body uk-card-large">
          <form>
            <fieldset className="uk-fieldset">
              <legend className="uk-legend">Sign Up:</legend>
              <div className="uk-margin">
                <input
                  className="uk-input"
                  type="text"
                  placeholder="First Name"
                ></input>
              </div>
              <div className="uk-margin">
                <input
                  className="uk-input"
                  type="text"
                  placeholder="Last Name"
                ></input>
              </div>
              <div className="uk-margin">
                <input
                  className="uk-input"
                  type="text"
                  placeholder="Username"
                ></input>
              </div>
              <div className="uk-margin">
                <input
                  className="uk-input"
                  type="text"
                  placeholder="Email"
                ></input>
              </div>
            </fieldset>
          </form>
        </div>
      </div>
    );
}

export default SignUp;