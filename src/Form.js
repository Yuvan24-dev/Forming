import React from 'react';
import { Form, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Form.css';
import { useForm } from 'react-hook-form';

const MyForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    getValues,
  } = useForm();

  const handleRegistration = (data) => {
    console.log(data);
  };

  const handleError = (errors) => {
    console.log(errors);
  };

  return (
    <Form onSubmit={handleSubmit(handleRegistration, handleError)}>
      <div className="container-fluid d-flex forPad1" style={{ backgroundColor: 'aquamarine' }}>
        <div className="row">
          {/* General Information */}
          <div className="col-sm-6 col-12 forPad" style={{ backgroundColor: 'rgb(246, 250, 250)' }}>
            <h4 style={{ color: 'blue' }}>General Information</h4>

            {/* Title Dropdown */}
            <Form.Group className="mb-3">
              <Form.Control
                as="select"
                {...register('title', { required: 'Title is required' })}
              >
                <option value="">Title</option>
                <option value="Businessman">Businessman</option>
                <option value="Reporter">Reporter</option>
                <option value="Secretary">Secretary</option>
              </Form.Control>
              {errors.title && <div className="error-message">{errors.title.message}</div>}
            </Form.Group>

            {/* First Name */}
            <Form.Group className="mb-3">
              <Form.Control
                type="text"
                {...register('firstName', {
                  required: 'First name is required',
                  pattern: {
                    value: /^[A-Za-z]+$/,
                    message: 'First name can only contain letters',
                  },
                })}
                placeholder="First Name"
              />
              {errors.firstName && <div className="error-message">{errors.firstName.message}</div>}
            </Form.Group>

            {/* Last Name */}
            <Form.Group className="mb-3">
              <Form.Control
                type="text"
                {...register('lastName', {
                  required: 'Last name is required',
                  pattern: {
                    value: /^[A-Za-z]+$/,
                    message: 'Last name can only contain letters',
                  },
                })}
                placeholder="Last Name"
              />
              {errors.lastName && <div className="error-message">{errors.lastName.message}</div>}
            </Form.Group>

            {/* Password */}
            <Form.Group className="mb-3">
              <Form.Control
                type="password"
                {...register('password', {
                  required: 'Password is required',
                  pattern: {
                    value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
                    message: 'Password must include uppercase, lowercase, number, and special character',
                  },
                })}
                placeholder="Password"
              />
              {errors.password && <div className="error-message">{errors.password.message}</div>}
            </Form.Group>

            {/* Confirm Password */}
            <Form.Group className="mb-3">
              <Form.Control
                type="password"
                {...register('confirmPassword', {
                  required: 'Confirm password is required',
                  validate: (value) => value === getValues('password') || 'Passwords do not match',
                })}
                placeholder="Confirm Password"
              />
              {errors.confirmPassword && (
                <div className="error-message">{errors.confirmPassword.message}</div>
              )}
            </Form.Group>

            {/* Company */}
            <Form.Group className="mb-3">
              <Form.Control
                type="text"
                {...register('company', {
                  pattern: {
                    value: /^[A-Za-z0-9\s,.'-]{2,}$/,
                    message: 'Company name must be valid',
                  },
                })}
                placeholder="Company"
              />
              {errors.company && <div className="error-message">{errors.company.message}</div>}
            </Form.Group>

            {/* Position Dropdown */}
            <Form.Group className="mb-3">
              <Form.Control
                as="select"
                {...register('position', { required: 'Position is required' })}
              >
                <option value="">Position</option>
                <option value="Director">Director</option>
                <option value="Manager">Manager</option>
                <option value="Employee">Employee</option>
              </Form.Control>
              {errors.position && <div className="error-message">{errors.position.message}</div>}
            </Form.Group>

            {/* Date of Birth */}
            <Form.Group className="mb-3">
              <Form.Label style={{ color: 'rgb(92, 88, 88)' }}>Select Date Of Birth</Form.Label>
              <Form.Control
                type="date"
                {...register('dob', { required: 'Date of birth is required' })}
                min="1990-01-01"
                max="2004-12-01"
              />
              {errors.dob && <div className="error-message">{errors.dob.message}</div>}
            </Form.Group>
          </div>

          {/* Contact Details */}
          <div
            className="col-sm-6 col-12 forPad colorin"
            style={{ backgroundColor: 'rgb(135, 135, 206)' }}
          >
            <h4>Contact Details</h4>

            {/* Address */}
            <Form.Group className="mb-3">
              <Form.Control
                type="text"
                {...register('address', {
                  required: 'Address is required',
                  pattern: {
                    value: /^[A-Za-z0-9\s,.'-]{5,}$/,
                    message: 'Address must be at least 5 characters',
                  },
                })}
                placeholder="D.No + Street"
              />
              {errors.address && <div className="error-message">{errors.address.message}</div>}
            </Form.Group>

            {/* Zip Code */}
            <Form.Group className="mb-3">
              <Form.Control
                type="number"
                {...register('zipCode', {
                  required: 'Zip code is required',
                  pattern: {
                    value: /^\d{5}$/,
                    message: 'Zip code must be 5 digits',
                  },
                })}
                placeholder="Zip code"
              />
              {errors.zipCode && <div className="error-message">{errors.zipCode.message}</div>}
            </Form.Group>

            {/* Email */}
            <Form.Group className="mb-3">
              <Form.Control
                type="email"
                {...register('email', {
                  required: 'Email is required',
                  pattern: {
                    value: /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$/,
                    message: 'Please enter a valid email',
                  },
                })}
                placeholder="Your Email"
              />
              {errors.email && <div className="error-message">{errors.email.message}</div>}
            </Form.Group>

            {/* File Upload */}
            <Form.Group className="mb-3">
              <Form.Control
                type="file"
                {...register('file', {
                  required: 'File is required',
                  validate: {
                    isPdf: (files) =>
                      files[0]?.type === 'application/pdf' || 'Only PDF files are allowed',
                  },
                })}
                accept=".pdf"
              />
              {errors.file && <div className="error-message">{errors.file.message}</div>}
            </Form.Group>

            {/* Country Dropdown */}
            <Form.Group className="mb-3">
              <Form.Control
                as="select"
                {...register('country', { required: 'Country is required' })}
              >
                <option value="">Country</option>
                <option value="Vietnam">Vietnam</option>
                <option value="Malaysia">Malaysia</option>
                <option value="India">India</option>
              </Form.Control>
              {errors.country && <div className="error-message">{errors.country.message}</div>}
            </Form.Group>

            {/* Terms and Conditions */}
            <Form.Group className="mb-3 d-flex justify-content-between">
              <Form.Check
                {...register('terms', { required: 'You must accept the terms and conditions' })}
                type="checkbox"
                label="I do accept the Terms and Conditions of your site."
              />
              {errors.terms && <div className="error-message">{errors.terms.message}</div>}
            </Form.Group>
          </div>

          {/* Submit Button */}
          <Button type="submit" className="mt-1 btn btn-light px-3 py-2 rounded-pill">
            <b style={{ color: 'black' }}>Register Badge</b>
          </Button>
        </div>
      </div>
    </Form>
  );
};

export default MyForm;
