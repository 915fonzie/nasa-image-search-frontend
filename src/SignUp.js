import React from 'react'

const SignUp = (props) => {
    localStorage.removeItem("userId")
    const handleSignUpSubmit = (e) => {
        e.preventDefault()
        console.log(e.target["first"].value)
        console.log(e.target["last"].value)
        console.log(e.target["username"].value)
        console.log(e.target["email"].value)

        fetch("https://nasa-file-search-backend.herokuapp.com/users", {
            method: 'POST',
            headers: {
                "Content-Type": 'application/json',
                "Accept": 'application/json'
            },
            body: JSON.stringify({
                "first_name": e.target["first"].value,
                "last_name": e.target["last"].value,
                "username": e.target["username"].value,
                "email": e.target["email"].value
            })
        })
            .then(resp => resp.json())
            .then(json => {
                console.log(json)
                localStorage.setItem("userId", json["id"])
                props.handleLoggedIn()
            })

    }

    const handleLoginSubmit = (e) => {
        e.preventDefault()
        console.log(e.target)
    }

    const allUsers = async () => {
        await props.handleFetchUsers()
    }

    const createDropDownSelect = () => {
        return props.users.map((user) => <option key={user.id}>{user.username}</option>)
    }

    return (
      <div className="uk-container uk-container-large uk-margin">
        <div className="uk-card uk-card-default uk-card-body uk-card-large">
          <form onSubmit={handleSignUpSubmit}>
            <fieldset className="uk-fieldset">
              <legend className="uk-legend">Sign Up:</legend>
              <div className="uk-margin">
                <input
                  className="uk-input"
                  id="first"
                  type="text"
                  placeholder="First Name"
                ></input>
              </div>
              <div className="uk-margin">
                <input
                  className="uk-input"
                  id="last"
                  type="text"
                  placeholder="Last Name"
                ></input>
              </div>
              <div className="uk-margin">
                <input
                  className="uk-input"
                  id="username"
                  type="text"
                  placeholder="Username"
                ></input>
              </div>
              <div className="uk-margin">
                <input
                  className="uk-input"
                  id="email"
                  type="text"
                  placeholder="Email"
                ></input>
              </div>
              <div>
                <button className="uk-button uk-button-default" type="submit">Submit</button>
                <button
                    className="uk-button uk-link-text uk-margin-left"
                                type="button"
                                onClick={allUsers}
                  data-uk-toggle="target: #modal-login"
                >
                  Already have an Account?
                </button>
              </div>
            </fieldset>
          </form>
        </div>
        <div id="modal-login" className="uk-flex-top" data-uk-modal>
          <div className="uk-modal-dialog uk-modal-body uk-margin-auto-vertical">
            <button
              className="uk-modal-close-default"
              type="button"
              data-uk-close
            ></button>
            <form onSubmit={handleLoginSubmit}>
              <fieldset className="uk-fieldset">
                <legend className="uk-legend">Please Login:</legend>
                <div className="uk-margin uk-margin-left uk-margin-right uk-flex">
                                <select className="uk-select">
                                    {createDropDownSelect()}
                  </select>
                  <button className="uk-button uk-button-default">
                    Submit
                  </button>
                </div>
              </fieldset>
            </form>
          </div>
        </div>
      </div>
    );
}

export default SignUp;