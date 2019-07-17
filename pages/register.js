import React from 'react';
import { Formik, Field, FieldArray, Form, ErrorMessage } from 'formik';
import superagent from 'superagent';

import { businessDays } from '../utils/businessDays';
import { businessHours } from '../utils/businessHours';
import { instruments } from '../utils/instruments';

import validateEmail from '../utils/validateEmail';
import validateZipCode from '../utils/validateZipCode';
import validatePhone from '../utils/validatePhone';

const BACK_END_SERVER_URI = process.env.BACK_END_SERVER_URI;

export default function TrialRequest() {
  async function handleSubmit(values) {
    try {
      superagent
        .post(`${BACK_END_SERVER_URI}/trialRequests`)
        .set('Content-Type', 'application/json')
        .send(JSON.stringify(values));
    } catch (error) {
      console.error(error);
    }
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
          <Form style={formStyle}>
            <h1>Free Trial Lesson</h1>
            <div className="formField">
              <label>Parent Name</label>
              <Field
                style={inputStyle}
                type="type"
                name="parentName"
                required
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
                {msg => <div style={errorStyle}>{msg}</div>}
              </ErrorMessage>
            </div>
            <div className="formField">
              <label>Phone</label>
              <Field
                type="tel"
                name="phone"
                validate={validatePhone}
                required
                style={inputStyle}
              />
              <ErrorMessage name="phone">
                {msg => <div style={errorStyle}>{msg}</div>}
              </ErrorMessage>
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
              <label>Student Name(s)</label>
              <Field type="text" name="studentName" style={inputStyle} />
            </div>
            <div className="formField">
              <label>Birth Date</label>
              <Field type="date" name="birthDate" style={inputStyle} />
            </div>
            <div className="formField">
              <label>Instrument</label>
              <Field
                component="select"
                name="instruments"
                required
                style={selectStyle}
              >
                <option default>Select an instrument</option>
                {instruments.map(instrument => (
                  <option value={instrument}>{instrument}</option>
                ))}
              </Field>
            </div>
            <div className="formField">
              <label>Do you have your instrument already?</label>
              <Field
                component="select"
                name="ownInstrument"
                style={selectStyle}
              >
                <option value="true">yes</option>
                <option value="false">no</option>
                <option value="assistanceNeeded">
                  I need assistance in purchasing/renting
                </option>
              </Field>
            </div>

            <div className="formField">
              <label>Availabilites</label>
              <FieldArray name="availability">
                {({ push, remove }) => (
                  <div className="availabilities">
                    {values.availability &&
                      values.availability.length > 0 &&
                      values.availability.map((item, index) => (
                        <div key={index}>
                          <Field
                            component="select"
                            name={`availability[${index}].day`}
                            className="app__form_dropdownbox"
                            required
                            style={selectStyle}
                          >
                            <option value="">Select</option>
                            {businessDays.map(element => (
                              <option key={element.id} value={element.day}>
                                {element.day.replace(/^\w/, c =>
                                  c.toUpperCase()
                                )}
                              </option>
                            ))}
                          </Field>
                          <span />
                          <Field
                            component="select"
                            name={`availability[${index}].fromTime`}
                            style={selectStyle}
                          >
                            <option value="">From</option>
                            {businessHours.map(element => (
                              <option key={element.id} value={element.time}>
                                {element.label}
                              </option>
                            ))}
                          </Field>
                          <span />
                          <Field
                            component="select"
                            name={`availability[${index}].toTime`}
                            style={selectStyle}
                          >
                            <option value="">To</option>
                            {businessHours.map(element => (
                              <option key={element.id} value={element.time}>
                                {element.label}
                              </option>
                            ))}
                          </Field>
                          <button
                            type="button"
                            className="btn"
                            onClick={() => remove(index)}
                          >
                            ×
                          </button>
                          <ErrorMessage name={`availability[${index}].day`}>
                            {msg => <div className="field-error">{msg}</div>}
                          </ErrorMessage>
                          <ErrorMessage
                            name={`availability[${index}].fromTime`}
                          >
                            {msg => <div className="field-error">{msg}</div>}
                          </ErrorMessage>
                          <ErrorMessage name={`availability[${index}].toTime`}>
                            {msg => <div className="field-error">{msg}</div>}
                          </ErrorMessage>
                        </div>
                      ))}
                    <div className="app__form_container">
                      <button
                        type="button"
                        onClick={() =>
                          push({ day: '', fromTime: '', toTime: '' })
                        }
                        className="btn btn-secondary"
                      >
                        Add Time
                      </button>
                    </div>
                  </div>
                )}
              </FieldArray>
            </div>

            <div className="formField">
              <label>Any previous musical experience?</label>
              <Field
                component="textarea"
                name="previousExperience"
                style={inputStyle}
              />
            </div>

            <div className="formField">
              <label>Anything else you would like your teacher to know?</label>
              <Field
                component="textarea"
                name="additionnalInfo"
                style={inputStyle}
              />
            </div>

            <div className="formField">
              <label>How did you hear about us?</label>
              <Field name="referal" style={inputStyle} />
            </div>

            <div className="formField">
              <label>Offer Code</label>
              <Field name="offerCode" style={inputStyle} />
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
//styling for Formik components
const inputStyle = {
  fontSize: '1em',
  padding: '.5em',
  width: '90%',
  marginBottom: '.8em',
};

const formStyle = {
  width: '40%',
};

const errorStyle = {
  color: 'red',
};

const selectStyle = {
  height: '2.5em',
  fontSize: '1em',
  marginRight: '.8em',
  marginTop: '.8em',
  marginBottom: '.8em',
};
