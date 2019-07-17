import React from 'react';
import { Formik, Field, FieldArray, Form, ErrorMessage } from 'formik';
import superagent from 'superagent';

import validateZipCode from '../utils/validateZipCode';
import { instruments } from '../utils/instruments';

// const BACK_END_SERVER_URI = 'http://localhost:3000/api';
const BACK_END_SERVER_URI = process.env.BACK_END_SERVER_URI;

export default function SignUp() {
  async function handleSubmit(values) {
    const instrumentString = values.instrument.reduce(
      (outputString, instrumentName) => {
        outputString += JSON.stringify(instrumentName);
        return outputString;
      },
      ''
    );
    values.instrument = instrumentString;
    try {
      await superagent
        //put in module/env
        .post(`${BACK_END_SERVER_URI}/users/signup`)
        .set('Content-Type', 'application/json')
        .send(JSON.stringify(values));
    } catch (error) {
      console.error(error);
    }
  }

  function validateEmail(value) {
    let error;
    if (!value) {
      error = 'Required';
    } else if (!/@awsom\.info$/i.test(value)) {
      error = 'Invalid email address';
    }
    return error;
  }

  return (
    <div>
      <Formik onSubmit={handleSubmit}>
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
          isSubmitting,
        }) => (
          <Form>
            <h1>Sign Up</h1>
            <div className="formField">
              <label>Name</label>
              <Field
                type="type"
                name="name"
                required
                placeholder="First and Last"
                style={inputStyle}
              />
            </div>
            <div className="formField">
              <label>E-mail</label>
              <Field
                type="email"
                name="email"
                validate={validateEmail}
                style={inputStyle}
              />
              <ErrorMessage name="email">
                {msg => <div>{msg}</div>}
              </ErrorMessage>
            </div>
            <div className="formField">
              <label>Password</label>
              <Field
                type="password"
                name="password"
                required
                style={inputStyle}
              />
            </div>
            <div className="formField">
              <label>Address</label>
              <Field type="text" name="address" required style={inputStyle} />
            </div>
            <div className="addressRowTwo">
              <div className="formField">
                <label>City</label>
                <Field type="text" name="city" required style={inputStyle} />
              </div>
              <div className="formField">
                <label>Region</label>
                <Field type="text" name="region" required style={inputStyle} />
              </div>
              <div className="formField">
                <label>Zip</label>
                <Field
                  type="number"
                  name="zip"
                  validate={validateZipCode}
                  style={inputStyle}
                />
                <ErrorMessage name="zip">
                  {msg => <div style={errorStyle}>{msg}</div>}
                </ErrorMessage>
              </div>
            </div>
            <div className="formField">
              <label>Instruments</label>
              <FieldArray name="instrument">
                {({ push, remove }) => (
                  <>
                    {values.instrument &&
                      values.instrument.length > 0 &&
                      values.instrument.map((item, index) => (
                        <div key={index}>
                          <Field
                            component="select"
                            name={`instrument[${index}].instrument`}
                            className="app__form_dropdownbox"
                            required
                            style={selectStyle}
                          >
                            <option value="">Select</option>
                            {instruments.map(element => (
                              <option
                                key={element.id}
                                value={element.instrument}
                              >
                                {element.instrument.replace(/^\w/, c =>
                                  c.toUpperCase()
                                )}
                              </option>
                            ))}
                          </Field>
                          <button
                            type="button"
                            className="btn"
                            onClick={() => remove(index)}
                            style={removeButtonStyle}
                          >
                            ×
                          </button>
                          <ErrorMessage
                            name={`instrument[${index}].instrument`}
                          >
                            {msg => <div className="field-error">{msg}</div>}
                          </ErrorMessage>
                        </div>
                      ))}
                    <div className="app__form_container">
                      <button
                        type="button"
                        onClick={() => push({ instrument: '' })}
                        className="btn btn-secondary"
                      >
                        Add Instrument
                      </button>
                    </div>
                  </>
                )}
              </FieldArray>
            </div>

            <button type="submit" disabled={isSubmitting}>
              Submit
            </button>
          </Form>
        )}
      </Formik>

      <style jsx>{`
        @import url('https://fonts.googleapis.com/css?family=Open+Sans+Condensed:300|PT+Sans&display=swap');
        display: flex;
        justify-content: center;
        font-family: 'Open Sans Condensed', sans-serif;
        letter-spacing: 1.3px;

        label {
          margin-bottom: 0.5em;
          font-size: 1.2em;
        }

        .formField {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          margin-bottom: 0.8em;
        }

        .address {
          border: none;
        }

        .addressRowTwo > div {
          margin-right: 0.5em;
          display: flex;
          flex-direction: column;
          justify-contnet: flex-start;
          align-items: flex-start;
        }

        button {
          height: 3em;
          width: 7em;
          font-size: 0.7em;
        }
      `}</style>
    </div>
  );
}

const inputStyle = {
  fontSize: '1em',
  padding: '.5em',
  width: '90%',
  marginBottom: '.8em',
};

const formStyle = {
  width: '40%',
};

const selectStyle = {
  height: '2.5em',
  fontSize: '1em',
  marginRight: '.8em',
  marginTop: '.8em',
  marginBottom: '.8em',
};

const removeButtonStyle = {
  padding: '0',
  border: 'none',
  background: 'none',
  width: '3em',
  fontSize: '1em',
};
