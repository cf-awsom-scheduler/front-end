import React from 'react';
import { Formik, Field, FieldArray, Form, ErrorMessage } from 'formik';
import superagent from 'superagent';

import { businessDays } from '../utils/businessDays';
import { businessHours } from '../utils/businessHours';
import { instruments } from '../utils/instruments';

const BACK_END_SERVER_URI = process.env.BACK_END_SERVER_URI;

export default function RegisterPage() {
  async function handleSubmit(values) {
    const response = await superagent.post(
      `${BACK_END_SERVER_URI}/register`,
      JSON.stringify(values)
    );
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
          isSubmitting
          /* and other goodies */
        }) => (
          <Form>
            <div>
              <label>
                <div>Name:</div>
                <Field type="type" name="parentName" />
              </label>
            </div>
            <div>
              <label>
                <div>E-mail:</div>
                <Field type="email" name="email" />
              </label>
            </div>
            <div>
              <label>
                <div>Phone:</div>
                <Field type="tel" name="phone" />
              </label>
            </div>
            <div>
              <label>
                <div>Address:</div>
                <Field type="text" name="address" />
              </label>
            </div>
            <div>
              <label>
                <div>City:</div>
                <Field type="text" name="city" />
              </label>
            </div>
            <div>
              <label>
                <div>ZIP:</div>
                <input type="number" name="zip" />
              </label>
            </div>
            <div>
              <label>
                <div>Student Name(s):</div>
                <Field type="text" name="studentName" />
              </label>
            </div>
            <div>
              <label>
                <div>Birth Date:</div>
                <Field type="date" name="birthDate" />
              </label>
            </div>
            <div>
              <label>
                <div>Instrument:</div>
                <Field component="select" name="instruments">
                  <option default>Select an instrument</option>
                  {instruments.map(instrument => (
                    <option value={instrument}>{instrument}</option>
                  ))}
                </Field>
              </label>
            </div>
            <div>
              <label>
                <div>Do you have your instrument already?:</div>
                <Field component="select" name="ownInstrument">
                  <option value="true">yes</option>
                  <option value="false">no</option>
                  <option value="assistanceNeeded">
                    I need assistance in purchasing/renting
                  </option>
                </Field>
              </label>
            </div>

            <div>
              <label>
                <div>Availabilites:</div>
                <FieldArray name="availability">
                  {({ push, remove }) => (
                    <>
                      {values.availability &&
                        values.availability.length > 0 &&
                        values.availability.map((item, index) => (
                          <div key={index}>
                            <Field
                              component="select"
                              name={`availability[${index}].day`}
                              className="app__form_dropdownbox"
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
                              <i className="far fa-times-circle" />
                            </button>
                            <ErrorMessage name={`availability[${index}].day`}>
                              {msg => <div className="field-error">{msg}</div>}
                            </ErrorMessage>
                            <ErrorMessage
                              name={`availability[${index}].fromTime`}
                            >
                              {msg => <div className="field-error">{msg}</div>}
                            </ErrorMessage>
                            <ErrorMessage
                              name={`availability[${index}].toTime`}
                            >
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
              </label>
            </div>

            <div>
              <label>
                <div>Any previous musical experience:</div>
                <Field component="textarea" name="previousExperience" />
              </label>
            </div>

            <div>
              <label>
                <div>Anything else you would like your teacher to know?:</div>
                <Field component="textarea" name="additionnalInfo" />
              </label>
            </div>

            <div>
              <label>
                <div>How did you hear about us?:</div>
                <Field name="referal" />
              </label>
            </div>

            <div>
              <label>
                <div>Offer Code:</div>
                <Field name="offerCode" />
              </label>
            </div>

            <button type="submit" disabled={isSubmitting}>
              Submit
            </button>
          </Form>
        )}
      </Formik>

      <style jsx>{``}</style>
    </div>
  );
}
