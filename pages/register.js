import React from 'react';
import { Formik, Field, FieldArray, Form, ErrorMessage } from 'formik';
import superagent from 'superagent';

import { businessDays } from '../utils/businessDays';
import { businessHours } from '../utils/businessHours';
import { instruments } from '../utils/instruments';

export default function RegisterPage() {
  async function handleSubmit(values) {
    console.log(values);
    // const response = await superagent.post(
    //   'http://localhost:3000/api/register',
    //   JSON.stringify(values)
    // );
    // console.log(response);
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
                Name:
                <Field type="type" name="parentName" />
              </label>
            </div>
            <div>
              <label>
                E-mail:
                <Field type="email" name="email" />
              </label>
            </div>
            <div>
              <label>
                Phone:
                <Field type="tel" name="phone" />
              </label>
            </div>
            <div>
              <label>
                Address:
                <Field type="text" name="address" />
              </label>
            </div>
            <div>
              <label>
                City:
                <Field type="text" name="city" />
              </label>
            </div>
            <div>
              <label>
                ZIP:
                <input type="number" name="zip" />
              </label>
            </div>
            <div>
              <label>
                Student Name(s):
                <Field type="text" name="studentName" />
              </label>
            </div>
            <div>
              <label>
                Birth Date:
                <Field type="date" name="birthDate" />
              </label>
            </div>
            <div>
              <label>
                Instrument:
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
                Do you have your instrument already?:
                <Field component="select">
                  <option>yes</option>
                  <option>no</option>
                  <option>I need assistance in purchasing/renting</option>
                </Field>
              </label>
            </div>

            <div>
              <label>
                Availabilites:
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
                Any previous musical experience:
                <Field component="textarea" name="previousExperience" />
              </label>
            </div>

            <div>
              <label>
                Anything else you would like your teacher to know?:
                <Field component="textarea" name="additionnalInfo" />
              </label>
            </div>

            <div>
              <label>
                How did you hear about us?:
                <Field name="referal" />
              </label>
            </div>

            <div>
              <label>
                Offer Code:
                <Field name="offerCode" />
              </label>
            </div>

            <button type="submit" disabled={isSubmitting}>
              Submit
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
}
