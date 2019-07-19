import React from 'react';
import { Formik, Field, FieldArray, Form, ErrorMessage } from 'formik';
import Link from 'next/link';
import superagent from 'superagent';

import { businessDays } from '../utils/businessDays';
import { businessHours } from '../utils/businessHours';
import { instruments } from '../utils/instruments';
import { regions } from '../utils/regions';

import validateEmail from '../utils/validateEmail';
import validateZipCode from '../utils/validateZipCode';
import validatePhone from '../utils/validatePhone';

const BACK_END_SERVER_URI = process.env.BACK_END_SERVER_URI;

export default function TrialRequest() {
  async function handleSubmit(values) {
    // const availabilitiesString = values.Availability.reduce(
    //   (outputString, timeRange) => {
    //     outputString += JSON.stringify(timeRange);
    //     return outputString;
    //   },
    //   ''
    // );
    values.Availability = JSON.stringify(values.Availability);
    try {
      await superagent
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
                name="ParentName"
                required
              />
            </div>
            <div className="formField">
              <label>E-mail</label>
              <Field
                type="email"
                name="Email"
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
                name="Phone"
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
              <Field type="text" name="Address" required style={inputStyle} />
            </div>
            <div className="addressRowTwo">
              <div className="formField">
                <label>City</label>
                <Field type="text" name="City" required style={inputStyle} />
              </div>
              <div className="formField">
                <label>State</label>
                <Field type="text" name="State" style={inputStyle} />
              </div>

              <div className="formField">
                <label>Zip</label>
                <Field
                  type="number"
                  name="ZipCode"
                  validate={validateZipCode}
                  style={inputStyle}
                />
                <ErrorMessage name="zip">
                  {msg => <div style={errorStyle}>{msg}</div>}
                </ErrorMessage>
              </div>
            </div>
            <div className="formField">
              <label>Region</label>
              <Field
                component="select"
                name="Region"
                required
                style={selectStyle}
              >
                <option default>Select a Region</option>
                {regions.map(region => (
                  <option value={region.region} key={region.id}>
                    {region.region}
                  </option>
                ))}
              </Field>
            </div>

            <div className="formField">
              <label>Student Name(s)</label>
              <Field type="text" name="StudentName" style={inputStyle} />
            </div>
            <div className="formField">
              <label>Birth Date</label>
              <Field type="date" name="StudentBirthDate" style={inputStyle} />
            </div>
            <div className="formField">
              <label>Instrument</label>
              <Field
                name="Instrument"
                list="instruments"
                required
                style={inputStyle}
              />
              <datalist id="instruments">
                {instruments.map(instrument => (
                  <option value={instrument.instrument} key={instrument.id} />
                ))}
              </datalist>
            </div>
            <div className="formField">
              <label>Do you have your instrument already?</label>
              <Field
                component="select"
                name="HasInstrument"
                style={selectStyle}
              >
                <option default>Select</option>
                <option value="true">Yes</option>
                <option value="false">No</option>
                <option value="assistanceNeeded">
                  I need assistance in purchasing/renting
                </option>
              </Field>
            </div>

            <div className="formField">
              <label>Availabilites</label>
              <FieldArray name="Availability">
                {({ push, remove }) => (
                  <>
                    {values.Availability &&
                      values.Availability.length > 0 &&
                      values.Availability.map((item, index) => (
                        <div key={index}>
                          <Field
                            component="select"
                            name={`Availability[${index}].day`}
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
                            name={`Availability[${index}].fromTime`}
                            style={selectStyle}
                            required
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
                            name={`Availability[${index}].toTime`}
                            style={selectStyle}
                            required
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
                            style={removeButtonStyle}
                          >
                            ×
                          </button>
                          <ErrorMessage name={`Availability[${index}].day`}>
                            {msg => <div className="field-error">{msg}</div>}
                          </ErrorMessage>
                          <ErrorMessage
                            name={`Availability[${index}].fromTime`}
                          >
                            {msg => <div className="field-error">{msg}</div>}
                          </ErrorMessage>
                          <ErrorMessage name={`Availability[${index}].toTime`}>
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
                  </>
                )}
              </FieldArray>
            </div>

            <div className="formField">
              <label>Any previous musical experience?</label>
              <Field
                component="textarea"
                name="Experience"
                style={inputStyle}
              />
            </div>

            <div className="formField">
              <label>Anything else you would like your teacher to know?</label>
              <Field component="textarea" name="Notes" style={inputStyle} />
            </div>
            <div className="formField">
              <label>How did you hear about us?</label>
              <Field name="Referral" style={inputStyle} />
            </div>

            <div className="formField">
              <label>Offer Code</label>
              <Field name="OfferCode" style={inputStyle} />
            </div>
            {/* <Link href="/submission"> */}
            <button
              type="submit"
              disabled={isSubmitting}
              className="submitButton"
            >
              Submit
            </button>
            {/* </Link> */}
          </Form>
        )}
      </Formik>

      <style jsx>{`
        @import url('https://fonts.googleapis.com/css?family=Open+Sans+Condensed:300|PT+Sans&display=swap');
        @import url('https://fonts.googleapis.com/css?family=Playfair+Display&display=swap');
        display: flex;
        justify-content: center;
        font-family: 'Playfair Display', serif;
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
          border: solid 1px black;
        }

        button:hover {
          background-color: #edf2f7;
        }

        h1 {
          font-size: 2em;
        }

        .submitButton {
          margin-top: 3em;
          margin-bottom: 10em;
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
  border: '1px solid black',
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

const removeButtonStyle = {
  padding: '0',
  border: 'none',
  background: 'none',
  width: '3em',
  fontSize: '1em',
};
