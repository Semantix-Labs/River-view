// components/BookingForm.js
import { useState } from 'react';

const BookingForm = () => {
  const [formData, setFormData] = useState({
    checkInDate: '',
    checkOutDate: '',
    person: 1,
    fullName: '',
    email: '',
    phone: '',
    roomPreference: 'Standard',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log(formData);
  };

  return (
   
      <div className="bg-white p-5  sm:p-10 shadow-lg rounded-lg max-w-screen-2xl w-full">
        <h2 className="text-2xl font-bold mb-6">Booking Information</h2>
        <form onSubmit={handleSubmit} className="space-y-8">
           <div className='grid grid-cols-1 md:grid-cols-3 gap-4'>
          <div>
            <label className="block text-sm  font-semibold ">Check In Date</label>
            <input
              type="date"
              name="checkInDate"
              value={formData.checkInDate}
              onChange={handleChange}
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-customBlue focus:border-customBlue sm:text-sm"
            />
          </div>
          <div>
            <label className="block text-sm font-semibold ">Check Out Date</label>
            <input
              type="date"
              name="checkOutDate"
              value={formData.checkOutDate}
              onChange={handleChange}
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-customBlue focus:border-customBlue sm:text-sm"
            />
          </div>
          <div>
            <label className="block text-sm font-semibold ">Person</label>
            <select
              name="person"
              value={formData.person}
              onChange={handleChange}
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-customBlue focus:border-customBlue sm:text-sm"
            >
              <option value="1">1 person</option>
              <option value="2">2 persons</option>
              <option value="3">3 persons</option>
              <option value="4">4 persons</option>
            </select>
          </div>
          </div> 
          <div>
            <label className="block text-sm font-semibold ">Full Name</label>
            <input
              type="text"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              placeholder="Enter your name here"
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-customBlue focus:border-customBlue sm:text-sm"
            />
          </div>
          <div>
            <label className="block text-sm font-semibold ">E-Mail</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter your E-mail here"
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-customBlue focus:border-customBlue sm:text-sm"
            />
          </div>
          <div>
            <label className="block text-sm font-semibold">Phone</label>
            <input
              type="text"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="Enter your phone number here"
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-customBlue focus:border-customBlue sm:text-sm"
            />
          </div>
          <div>
            <label className="block text-sm font-semibold">Room Preference</label>
            <div className="mt-1 flex space-x-4">
              <label className="flex items-center">
                <input
                  type="radio"
                  name="roomPreference"
                  value="Luxury"
                  checked={formData.roomPreference === 'Luxury'}
                  onChange={handleChange}
                  className="form-radio h-4 w-4 text-indigo-600"
                />
                <span className="ml-2">Luxury</span>
              </label>
              <label className="flex items-center">
                <input
                  type="radio"
                  name="roomPreference"
                  value="Suite"
                  checked={formData.roomPreference === 'Suite'}
                  onChange={handleChange}
                  className="form-radio h-4 w-4 text-indigo-600"
                />
                <span className="ml-2">Suite</span>
              </label>
              <label className="flex items-center">
                <input
                  type="radio"
                  name="roomPreference"
                  value="Standard"
                  checked={formData.roomPreference === 'Standard'}
                  onChange={handleChange}
                  className="form-radio h-4 w-4 text-customBlue"
                />
                <span className="ml-2">Standard</span>
              </label>
            </div>
          </div>
          <div>
            <button
              type="submit"
              className="w-1/3 bg-customBlue text-white py-2 px-4 rounded-md shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Submit Now
            </button>
          </div>
        </form>
      </div>
   
  );
};

export default BookingForm;
