import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useContext } from "react";
import Context from "../Data";
import * as Yup from "yup";
import { Formik, Field, Form } from "formik";

const validationSchema = Yup.object().shape({
  date: Yup.date().required("this feild is required"),
  guests: Yup.number().required("this feild is required"),
});

export default function BookingForm() {
  const data = useContext(Context);

  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [guests, setGuests] = useState("");
  const [occas, setOccas] = useState("");
  return (
    <div className="booking">
      <Formik
        initialValues={{
          date: "",
          guests: "",
         
        }}
        onSubmit={(values) => {
          console.log(values);
        }}
        validationSchema={validationSchema}
      >
        {({ errors, values, handleChange, touched, onSubmit }) => (
          <form
            style={{ display: "grid", maxWidth: "200px", gap: "20px" }}
            className="forrm"
          >
            <label htmlFor="res-date">Choose date</label>
            <input
              type="date"
              id="res-date"
              value={values.date}
              onChange={handleChange}
              error={errors.date && touched.date}
              helperText={errors.date}
            />
            <label htmlFor="res-time">Choose time</label>
            <select
              id="res-time "
              onChange={(e) => setTime(e.target.value)}
              value={time}
            >
              <option>
                17:00 {data.availalbe["17:00"] ? "available" : "not available"}{" "}
              </option>
              <option>
                18:00 {data.availalbe["18:00"] ? "available" : "not available"}
              </option>
              <option>
                19:00 {data.availalbe["19:00"] ? "available" : "not available"}
              </option>
              <option>
                20:00 {data.availalbe["20:00"] ? "available" : "not available"}
              </option>
              <option>
                21:00 {data.availalbe["21:00"] ? "available" : "not available"}{" "}
              </option>
              <option>
                22:00 {data.availalbe["22:00"] ? "available" : "not available"}
              </option>
            </select>
            <label htmlFor="guests">number of guests</label>
            <input
              type="number"
             
              placeholder="1"
              min="1"
              max="10"
              id="guests"
              value={values.number}
              onChange={handleChange}
              error={errors.number && touched.number}
              helperText={errors.number}
            />
            <label htmlFor="occasion">Occasion</label>
            <select
              id="occasion"
              onChange={(e) => setOccas(e.target.value)}
              value={occas}
            >
              <option>Birthday</option>
              <option>Anniversary</option>
            </select>
            <Link to="/">
              <button
                type="submit"
                onClick={() => alert("your Reservation was successful")}
              >
                Make Your reservation
              </button>
            </Link>
          </form>
        )}
      </Formik>
    </div>
  );
}
