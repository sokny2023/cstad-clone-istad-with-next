import React from "react";

export function EnrollmentForm() {
  return (
    <section className="w-[80%] mx-auto mt-24">
        <h1 className="text-center text-3xl font-medium">Enroll Form</h1>
      <div className="container mx-auto px-4 py-8">
        <form>
          <div className="flex flex-wrap -mx-3 mb-6">
            <div className="w-full px-3 mb-6 md:w-1/2">
              <label
                className="text-xs font-semibold text-gray-700 block pb-2"
                htmlFor="full-name"
              >
                FULL NAME (EN) *
              </label>
              <input
                className="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 focus:outline-none focus:ring-indigo-500 focus:ring-w-1 text-gray-700 shadow-sm"
                id="full-name"
                type="text"
                placeholder="Chan Tola"
                required
              />
            </div>
            <div className="w-full px-3 mb-6 md:w-1/2">
              <label
                className="text-xs font-semibold text-gray-700 block pb-2"
                htmlFor="email"
              >
                EMAIL
              </label>
              <input
                className="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 focus:outline-none focus:ring-indigo-500 focus:ring-w-1 text-gray-700 shadow-sm"
                id="email"
                type="email"
                placeholder="tola1998@gmail.com"
                required
              />
            </div>
          </div>
          <div className="flex flex-wrap -mx-3 mb-6">
            <div className="w-full px-3 mb-6 md:w-1/2">
              <label
                className="text-xs font-semibold text-gray-700 block pb-2"
                htmlFor="gender"
              >
                GENDER
              </label>
              <select
                className="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 focus:outline-none focus:ring-indigo-500 focus:ring-w-1 text-gray-700 shadow-sm"
                id="gender"
              >
                <option value="">Select gender</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
              </select>
            </div>
            <div className="w-full px-3 mb-6 md:w-1/2">
              <label
                className="text-xs font-semibold text-gray-700 block pb-2"
                htmlFor="phone"
              >
                PHONE NUMBER
              </label>
              <input
                className="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 focus:outline-none focus:ring-indigo-500 focus:ring-w-1 text-gray-700 shadow-sm"
                id="phone"
                type="tel"
                placeholder="+855 95990910 (Telegram)"
              />
            </div>
          </div>
          <div className="flex flex-wrap -mx-3 mb-6">
            <div className="w-full px-3 mb-6 md:w-1/2">
              <label
                className="text-xs font-semibold text-gray-700 block pb-2"
                htmlFor="date-of-birth"
              >
                DATE OF BIRTH
              </label>
              <input
                className="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 focus:outline-none focus:ring-indigo-500 focus:ring-w-1 text-gray-700 shadow-sm"
                id="date-of-birth"
                type="date"
              />
            </div>
            <div className="w-full px-3 mb-6 md:w-1/2">
              <label
                className="text-xs font-semibold text-gray-700 block pb-2"
                htmlFor="date-of-birth"
              >
                PLACE OF BIRTH
              </label>
              <input
                className="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 focus:outline-none focus:ring-indigo-500 focus:ring-w-1 text-gray-700 shadow-sm"
                id="date-of-birth"
                type="date"
              />
            </div>
            <div className="w-full px-3 mb-6 md:w-1/2">
              <label
                className="text-xs font-semibold text-gray-700 block pb-2"
                htmlFor="education"
              >
                EDUCATION
              </label>
              <select
                className="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 focus:outline-none focus:ring-indigo-500 focus:ring-w-1 text-gray-700 shadow-sm"
                id="education"
              >
                <option value="">Select education level</option>
                <option value="high-school">High School</option>
                <option value="bachelor">Bachelor's Degree</option>
                <option value="master">Master's Degree</option>
                <option value="phd">PhD</option>
              </select>
            </div>
            <div className="w-full px-3 mb-6 md:w-1/2">
              <label
                className="text-xs font-semibold text-gray-700 block pb-2"
                htmlFor="education"
              >
                UNIVERSITY
              </label>
              <select
                className="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 focus:outline-none focus:ring-indigo-500 focus:ring-w-1 text-gray-700 shadow-sm"
                id="education"
              >
                <option value="">Select univesity level</option>
                <option value="high-school">RUPP</option>
                <option value="bachelor">CSTAD</option>
                <option value="master">NUM</option>
                <option value="phd">SETEC</option>
              </select>
            </div>
          </div>
          <div className="flex flex-wrap -mx-3 mb-6">
            <div className="w-full px-3 flex gap-14">
              <button
                type="submit"
                className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-2 px-6 rounded focus:outline-none focus:shadow-outline"
              >
                Enroll Now
              </button>
              <button
                type="submit"
                className="bg-pink-500 hover:bg-pink-600 text-white font-bold py-2 px-6 rounded focus:outline-none focus:shadow-outline"
              >
                Cancel
              </button>
            </div>
          </div>
        </form>
      </div>
    </section>
  );
}

export default EnrollmentForm;
