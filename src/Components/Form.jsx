import React from "react";
import cn from "classnames";

const Form = (props) => {
  const {handleSubmitForm, errorFeedback} = props;

  const classNamaFeedback = cn('feedback m-0 position-absolute medium', errorFeedback? 'text-danger' :'text-success')

  const submitForm = (e) => {
    e.preventDefault();

    const documentForm = e.target;
    const inputFormValue = documentForm.querySelector('input').value;
    
    handleSubmitForm(inputFormValue);

    e.target.reset()
  }

  return (
    <section className="container-fluid p-5 bg-dark">
      <div className="row">
        <div className="col-md-10 col-lg-5 mx-auto text-white">
          <h1 className="display-5 text-center m-4">Weather</h1>
          <form action="" id="form" onSubmit={submitForm}>
            <div className="row">
              <div className="col">
                <div className="form-floating">
                  <input
                    type="text"
                    name="rss-input"
                    id="rss-input"
                    aria-label="city"
                    className="form-control"
                    autoFocus
                    required
                    placeholder="RSS Ссылка"
                    autoComplete="off"
                  />
                  <label className="text-dark" htmlFor="input_1">City</label>
                </div>
              </div>
              <button type="submit" id="btn-submit" className="col-auto btn btn-lg btn-info px-5 ms-2 text-white">
                Touch
              </button>
            </div>
          </form>
          <p className={classNamaFeedback}>{errorFeedback}</p>
        </div>
      </div>
    </section>
  )
}

export default Form;