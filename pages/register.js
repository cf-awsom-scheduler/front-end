import React from 'react';
import { Formik, Field, FieldArray, Form, ErrorMessage } from 'formik';

export default function RegisterPage() {
  function handleSubmit(values, { setSubmitting }) {
    setTimeout(() => {
      alert(JSON.stringify(values, null, 2));
      setSubmitting(false);
    }, 400);
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
          <form onSubmit={handleSubmit}>
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
                <Field component="select">
                  <option>Piano</option>
                  <option>Voice</option>
                  <option>Flute</option>
                  <option>Others</option>
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
                <Field name="availabilities" />
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
          </form>
        )}
      </Formik>
    </div>
  );
}
