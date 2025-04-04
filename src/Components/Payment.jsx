import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Toaster, toast } from 'react-hot-toast';

const Payment = () => {
    const [cardholder, setCardholder] = useState("");
    const [cnumber, setCnumber] = useState("");
    const [edata, setEdata] = useState("");
    const [cvv, setCvv] = useState("");
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();

        // Hubinta xogta
        if (!cardholder.trim()) {
            toast.error("Fadlan buuxi magaca kaarka.");
            return;
        }

        if (!cnumber.trim() || cnumber.length !== 16 || isNaN(cnumber)) {
            toast.error("Lambarka kaarka waa inuu ahaadaa 16 lambar oo sax ah.");
            return;
        }

        const expiryRegex = /^(0[1-9]|1[0-2])\/\d{2}$/;
        if (!edata.trim() || !expiryRegex.test(edata)) {
            toast.error("Taariikhda dhicitaanka waa in ay ahaataa MM/YY (tusaale: 08/25)");
            return;
        }

        if (!cvv.trim() || cvv.length !== 3 || isNaN(cvv)) {
            toast.error("CVV waa inuu ahaadaa 3 lambar oo sax ah.");
            return;
        }

        toast.success("Lacag bixinta waa la xaqiijiyay!");
        setTimeout(() => {
            navigate("/home");
        }, 2000);
    };

    return (
        <div className="flex justify-center bg-gradient-to-br from-[#f48b40] via-[#f9bd91] to-[#f16705]  items-center h-screen ">
            <div className=" bg-gradient-to-br from-[#f1c09d] via-[#eeae81] to-[#fda769] p-6 rounded-2xl shadow-lg w-full max-w-md">
                <h2 className="text-xl font-semibold mb-4 text-gray-700">Payment Details</h2>
                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label className="block text-sm font-medium text-gray-600">Cardholder Name</label>
                        <input value={cardholder} onChange={(e) => setCardholder(e.target.value)} type="text" className="bg-gray-200 mt-1 outline-none p-2 w-full border rounded-lg" />
                    </div>

                    <div className="mb-4">
                        <label className="block text-sm font-medium text-gray-600">Card Number</label>
                        <input value={cnumber} onChange={(e) => setCnumber(e.target.value)} type="text" className="bg-gray-200 mt-1 outline-none p-2 w-full border rounded-lg" maxLength="16" />
                    </div>

                    <div className="flex gap-4">
                        <div className="mb-4 w-1/2">
                            <label className="block text-sm font-medium text-gray-600">Expiry Date</label>
                            <input value={edata} onChange={(e) => setEdata(e.target.value)} type="text" placeholder="MM/YY" className="bg-gray-200 mt-1 outline-none p-2 w-full border rounded-lg" maxLength="5" />
                        </div>

                        <div className="mb-4 w-1/2">
                            <label className="block text-sm font-medium text-gray-600">CVV</label>
                            <input value={cvv} onChange={(e) => setCvv(e.target.value)} type="text" className="bg-gray-200 mt-1 outline-none p-2 w-full border rounded-lg" maxLength="3" />
                        </div>
                    </div>

                    <button type="submit" className="w-full bg-gradient-to-r from-[#f5b383] to-[#f16705] text-white p-2 rounded-lg">Confirm Payment</button>
                </form>
            </div>
            <Toaster />
        </div>
    );
};

export default Payment;
