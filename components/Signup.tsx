"use client"
import React, { useState } from "react";

const SignupForm = () => {
  const [step, setStep] = useState(1); // Step tracking

  // Step navigation
  const nextStep = () => setStep((prevStep) => prevStep + 1);
  const prevStep = () => setStep((prevStep) => prevStep - 1);

  // Submit logic for the form
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget as HTMLFormElement);
    const data = Object.fromEntries(formData.entries());
    console.log("Form Data Submitted: ", data);
  };

  return (
    <div className="h-screen bg-gray-100 flex items-center justify-center px-4">
      <div className="bg-white rounded-lg shadow-lg p-8 w-full max-w-md">
        <h2 className="text-2xl font-bold text-gray-800 text-center mb-6">
          Student Portal Signup 
        </h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Step 1: Personal Information */}
          {step === 1 && (
            <>
              <h3 className="text-lg font-semibold text-gray-700">Personal Information</h3>
              <div>
                <label className="block text-gray-700 font-medium">Full Name</label>
                <input
                  type="text"
                  name="fullName"
                  className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Enter your full name"
                  required
                />
              </div>
              <div>
                <label className="block text-gray-700 font-medium">Date of Birth</label>
                <input
                  type="date"
                  name="dob"
                  className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>
              <div>
                <label className="block text-gray-700 font-medium">Gender</label>
                <select
                  name="gender"
                  className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                >
                  <option value="">Select Gender</option>
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                  <option value="Other">Other</option>
                </select>
              </div>
              <button
                type="button"
                onClick={nextStep}
                className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600 transition"
              >
                Next
              </button>
            </>
          )}

          {/* Step 2: City and Contact Information */}
          {step === 2 && (
            <>
              <h3 className="text-lg font-semibold text-gray-700">City and Contact Information</h3>
              <div>
                <label className="block text-gray-700 font-medium">City</label>
                <input
                  type="text"
                  name="city"
                  className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Enter your city"
                  required
                />
              </div>
              <div>
                <label className="block text-gray-700 font-medium">Country</label>
                <input
                  type="text"
                  name="country"
                  className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Enter your country"
                  required
                />
              </div>
              <div>
                <label className="block text-gray-700 font-medium">Contact Number (WhatsApp)</label>
                <input
                  type="text"
                  name="contact"
                  className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Enter your contact number"
                  required
                />
              </div>
              <div className="flex justify-between">
                <button
                  type="button"
                  onClick={prevStep}
                  className="bg-gray-300 text-gray-700 py-2 px-4 rounded hover:bg-gray-400 transition"
                >
                  Back
                </button>
                <button
                  type="button"
                  onClick={nextStep}
                  className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition"
                >
                  Next
                </button>
              </div>
            </>
          )}

          {/* Step 3: Qualification and Other Details */}
          {step === 3 && (
            <>
              <h3 className="text-lg font-semibold text-gray-700">Qualification and Other Details</h3>
              <div>
                <label className="block text-gray-700 font-medium">Last Qualification</label>
                <select
                  name="qualification"
                  className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                >
                  <option value="">Select Qualification</option>
                  <option value="High School">High School</option>
                  <option value="Bachelor's">Bachelor's</option>
                  <option value="Master's">Master's</option>
                </select>
              </div>
              <div>
                <label className="block text-gray-700 font-medium">Do you have a laptop?</label>
                <select
                  name="laptop"
                  className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                >
                  <option value="No">No</option>
                  <option value="Yes">Yes</option>
                </select>
              </div>
              <div className="flex justify-between">
                <button
                  type="button"
                  onClick={prevStep}
                  className="bg-gray-300 text-gray-700 py-2 px-4 rounded hover:bg-gray-400 transition"
                >
                  Back
                </button>
                <button
                  type="button"
                  onClick={nextStep}
                  className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition"
                >
                  Next
                </button>
              </div>
            </>
          )}

          {/* Step 4: Authentication */}
          {step === 4 && (
            <>
              <h3 className="text-lg font-semibold text-gray-700">Authentication</h3>
              <div>
                <label className="block text-gray-700 font-medium">Gmail</label>
                <input
                  type="email"
                  name="gmail"
                  className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Enter your Gmail"
                  required
                />
              </div>
              <div>
                <label className="block text-gray-700 font-medium">Password</label>
                <input
                  type="password"
                  name="password"
                  className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Enter your password"
                  required
                />
              </div>
              <div>
                <label className="block text-gray-700 font-medium">Confirm Password</label>
                <input
                  type="password"
                  name="confirmPassword"
                  className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Confirm your password"
                  required
                />
              </div>
              <div className="flex justify-between">
                <button
                  type="button"
                  onClick={prevStep}
                  className="bg-gray-300 text-gray-700 py-2 px-4 rounded hover:bg-gray-400 transition"
                >
                  Back
                </button>
                <button
                  type="submit"
                  className="bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600 transition"
                >
                  Signup
                </button>
              </div>
            </>
          )}
        </form>
      </div>
    </div>
  );
};

export default SignupForm;
