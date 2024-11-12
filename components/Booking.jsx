// components/BookingForm.js
import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
// import 'font-awesome/css/font-awesome.min.css';

const Booking = () => {
    const [checkInDate, setCheckInDate] = useState(new Date());
    const [checkOutDate, setCheckOutDate] = useState(new Date(new Date().setDate(new Date().getDate() + 1)));
    const [promoCode, setPromoCode] = useState('');
    const [currency, setCurrency] = useState('NA');
    const [adults, setAdults] = useState(1);
    const [children, setChildren] = useState(0);

    const changeFormat = (date) => {
        const dateObject = new Date(date);
        let formatedate = `${dateObject.getFullYear()}-`;
        formatedate += dateObject.getMonth() < 9 ? `0${dateObject.getMonth() + 1}-` : `${dateObject.getMonth() + 1}-`;
        formatedate += dateObject.getDate() < 10 ? `0${dateObject.getDate()}` : dateObject.getDate();
        return formatedate;
    };

    const bookNow = () => {
        if (!checkInDate) {
            alert('Select check-in date');
            return;
        }
        if (!checkOutDate) {
            alert('Select check-out date');
            return;
        }
        if (currency === 'NA') {
            alert('Please select nationality');
            return;
        }

        const chkin = changeFormat(checkInDate);
        const chkout = changeFormat(checkOutDate);

        window.open(
            `https://staahmax.staah.net/be/indexpackdetail?propertyId=OTg5Ng==&individual=true&checkIn=${chkin}&checkOut=${chkout}&roomadult=${adults}&roomchild=${children}&promoCode=${promoCode}&m_currency=${currency}`,
            '_blank'
        );
    };

    return (
        <form className="space-y-8 ">
            <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
                <div className="form-group ">
                    <label className="block text-sm  font-semibold ">Check In</label>
                    <div className='relative'>
                        <DatePicker className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-customBlue focus:border-customBlue sm:text-sm" selected={checkInDate} onChange={(date) => setCheckInDate(date)} dateFormat="d MMM yyyy" />
                        <span className='absolute top-1/2 -translate-y-1/2 right-2'>

                            <svg fill="#000000" width="20px" height="20x" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24"><path d="M2,19c0,1.7,1.3,3,3,3h14c1.7,0,3-1.3,3-3v-8H2V19z M19,4h-2V3c0-0.6-0.4-1-1-1s-1,0.4-1,1v1H9V3c0-0.6-0.4-1-1-1S7,2.4,7,3v1H5C3.3,4,2,5.3,2,7v2h20V7C22,5.3,20.7,4,19,4z" /></svg>
                        </span>

                    </div>
                </div>
                <div className="form-group">
                    <label className="block text-sm  font-semibold ">Check Out</label>
                    <div className='relative'>
                        <DatePicker
                            selected={checkOutDate}
                            onChange={(date) => setCheckOutDate(date)}
                            dateFormat="d MMM yyyy"
                            minDate={new Date(checkInDate.getTime() + 24 * 60 * 60 * 1000)}
                            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-customBlue focus:border-customBlue sm:text-sm"
                        />
                        <span className='absolute top-1/2 -translate-y-1/2 right-2'>

                            <svg fill="#000000" width="20px" height="20x" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24"><path d="M2,19c0,1.7,1.3,3,3,3h14c1.7,0,3-1.3,3-3v-8H2V19z M19,4h-2V3c0-0.6-0.4-1-1-1s-1,0.4-1,1v1H9V3c0-0.6-0.4-1-1-1S7,2.4,7,3v1H5C3.3,4,2,5.3,2,7v2h20V7C22,5.3,20.7,4,19,4z" /></svg>
                        </span>
                    </div>
                </div>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-12 gap-4'>
                <div className="form-group md:col-span-3">
                    <label className="block text-sm  font-semibold ">Adult</label>
                    <select className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-customBlue focus:border-customBlue sm:text-sm" value={adults} onChange={(e) => setAdults(e.target.value)}>
                        {[1, 2, 3, 4, 5, 6].map((num) => (
                            <option key={num} value={num}>
                                {num}
                            </option>
                        ))}
                    </select>
                </div>
                <div className="form-group md:col-span-3">
                    <label className="block text-sm  font-semibold ">Child</label>
                    <select className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-customBlue focus:border-customBlue sm:text-sm" value={children} onChange={(e) => setChildren(e.target.value)}>
                        {[0, 1, 2, 3, 4].map((num) => (
                            <option key={num} value={num}>
                                {num}
                            </option>
                        ))}
                    </select>
                </div>
                <div className="form-group md:col-span-6">
                    <label className="block text-sm  font-semibold ">Promo Code</label>
                    <input className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-customBlue focus:border-customBlue sm:text-sm" type="text" value={promoCode} onChange={(e) => setPromoCode(e.target.value)} />
                </div>
            </div>
            <div className="form-group">
                <label className="block text-sm  font-semibold ">Nationality</label>
                <select className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-customBlue focus:border-customBlue sm:text-sm" value={currency} onChange={(e) => setCurrency(e.target.value)}>
                    <option value="NA">Select Nationality</option>
                    <option value="LKR">Resident</option>
                    <option value="USD">Non Resident</option>
                </select>
            </div>
            <button className="sm:w-2/3 bg-customBlue text-white md:py-2 md:px-4 px-2 py-1 rounded-md shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                onClick={bookNow}>
                Book Now
            </button>
        </form>
    );
};

export default Booking;
