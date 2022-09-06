import React, { useState } from "react";
import { Button, Form, InputGroup } from "react-bootstrap";
import { useForm } from "react-hook-form";

export default function Contact() {
  const { register, handleSubmit } = useForm();
  const [data, setData] = useState("");

  return (
    <div className="container">
      {/* <form onSubmit={handleSubmit((data) => setData(JSON.stringify(data)))}>
        <div>
        <input
          className="px-2"
          {...register("firstName")}
          placeholder="First name"
        />
        </div>
        <div>
        <input {...register("email")} placeholder="Email" />
        </div>
        <div>
        <select {...register("category")}>
          <option value="">Select...</option>
          <option value="A">Option A</option>
          <option value="B">Option B</option>
        </select>
        </div>
        <div>
        <textarea {...register("aboutYou")} placeholder="About you" />
        </div>
        <div>
        <p>{data}</p>
        </div>
        <div>
        <input type="submit" />
        </div>
      </form> */}

      <div className="container col-5 mt-5 vh-100">
        <form onSubmit={handleSubmit((data) => setData(JSON.stringify(data)))}>
          <InputGroup className="mb-3">
            <InputGroup.Text>Name</InputGroup.Text>
            <Form.Control
              aria-label="First name"
              className="px-2"
              {...register("firstName")}
              required
            />
          </InputGroup>
          <div>
            <InputGroup className="mb-3">
              <InputGroup.Text>Email</InputGroup.Text>
              <Form.Control
                aria-label="First name"
                className="px-2"
                {...register("email")}
                required
              />
            </InputGroup>
          </div>
          <div>
            <Form.Select
              aria-label="Default select example"
              {...register("category")}
            >
              <option>Open this select menu</option>
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
            </Form.Select>
          </div>
          <div>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>Example textarea</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                {...register("about")}
                required
              />
            </Form.Group>
          </div>
          <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Label>Hasil</Form.Label>
            <p>{data}</p>
          </Form.Group>
          <Button type="submit" variant="success" className="container">
            Submit
          </Button>
          {/* <input type="submit" className="container bg-primary mb-5" /> */}
        </form>
      </div>
    </div>
  );
}
