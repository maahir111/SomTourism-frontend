import React from 'react'
import { FiPhone } from "react-icons/fi";
import { IoLocationOutline } from "react-icons/io5";
import { MdOutlineMailOutline } from "react-icons/md";
import Footer from '../Components/Footer';
import Header from '../Components/Header';
import Scroll from '../Components/Scroll';

function Contact() {
  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "6d892250-1acb-4c5c-b640-cd1f2619d321");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  return (

    <div className='' >
        <Header/>
        <Scroll/>
        <div className="relative w-full h-[60vh] bg-cover bg-center" style={{ backgroundImage: "url('https://miro.medium.com/v2/resize:fit:1100/format:webp/1*19vMcRUjeJwMwdfO0B_sUA.jpeg')" }}>
          <div className='text-center py-20'>

          <h1 className=' font-serif text-white my-2 text-3xl font-semibold '> Contact Us </h1>  
          <h2 className=' font-serif text-[#d2d1d1] '> Get in Tech </h2>
          </div>
      
        </div>
       
       
        {/*    
   qeybta  seddaxaddd  */}
 <div className='flex justify-center mt-10 flex-col sm:flex-row  px-10'>

      <div className=' px-10 flex  flex-col gap-2 items-center'>
        <FiPhone className='text-3xl ' />
        <h1 className='text-2xl font-semibold  '>Phone</h1>
        <p className=' w-[300px] text-center text-[#505050] '>Need quick assistance? Give us a call! Our team is ready to answer your questions and help with your travel needs. Reach us</p>
        <h5 className='text-[#FF8126] '>  +252 619738014 </h5>
      </div>
      <div className=' px-10 flex  flex-col gap-2 items-center'>
        <MdOutlineMailOutline className='text-3xl ' />
        <h1 className='text-2xl font-semibold  '>Email</h1>
        <p className=' w-[300px] text-center text-[#505050] '>Have inquiries or need more details? Send us an email, and we'll get back to you as soon as possible!</p>
        <h5 className='text-[#FF8126] '>  daadira392@gmail.com </h5>
      </div>
      <div className=' px-10 flex  flex-col gap-2 items-center'>
        <IoLocationOutline className='text-3xl ' />
        <h1 className='text-2xl font-semibold  '>Location</h1>
        <p className=' w-[300px] text-center text-[#505050] '>Visit our office for a personalized service experience. Find us easily and let us assist you with your next adventure.</p>
        <a href="https://www.google.com/maps/dir/@2.0557043,45.3651364,15z?entry=ttu&g_ep=EgoyMDI1MDMzMC4wIKXMDSoASAFQAw%3D%3D"><h5 className='text-[#FF8126] '>  view on Google Map</h5></a>
      </div>
  </div>

    {/* qeybta  Afaraaad  */}

    <div className='my-20  flex justify-between sm:px-10 flex-col sm:flex-row'>
            <div className='sm:px-10 px-4 '>
              <h3 className='text-[#FF8126] '> Get In Teach </h3>
              <h1 className='sm:w-[400px] w-[300px] py-2 text-3xl font-serif font-semibold'> Feel Free To Contact With Us </h1>
              <p className='sm:w-[400px] w-[300px] '>For any inquiries or assistance, please feel free to reach out to us. We're here to help and are committed to providing you with the best possible support.</p>

            </div>
            <div className='my-4 sm:px-10 px-2 sm:py-5  bg-white border-1 border-white shadow sm:w-[500px]  h-[300px] rounded-2xl  '>
              
                <form onSubmit={onSubmit}>
                  <div className='grid sm:grid-cols-2 gap-5  items-center'>
                    <input  className=' h-[40px] outline-none border-2 px-2  border-[#a3a3a3] ' type="text" name='Name' placeholder='Your name'  required/>
                    <input  className=' h-[40px] outline-none border-2 px-2 border-[#a3a3a3]'type="text" name='Email Address' placeholder='Email Address' required />
                    <input  className=' h-[40px] outline-none border-2 px-2 border-[#a3a3a3] ' type="Number" name='Phone Number' placeholder='Enter Your Phone Number' />
                    <input  className=' h-[40px] outline-none border-2 px-2 border-[#a3a3a3]'type="text" name='subject' placeholder='Enter subject' required />
                    <textarea  className=' sm:w-[420px] h-[70px] outline-none border-2 px-2  border-[#a3a3a3]  'type="Message" name='Message' placeholder='Enter Your Message' required ></textarea>
                  </div>
                  <button type='submit' className='px-3 py-2 rounded text-white mt-8  shadow-lg shadow-[#FF8126]  bg-orange-500'> Submit Now  </button>
                </form>
              

            </div>



   </div>
   {/*    
   qeybta  Shanaaad  Map */}
   <div>

  <div className=''>
  <iframe width="100%" height="400" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=1%20Grafton%20Street,%20Dublin,%20Ireland+(My%20Business%20Name)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"><a href="https://www.gps.ie/collections/drones/">gps drone</a></iframe>
  </div>


   </div>
{/* 
   qeynta Loginka  */}

  <div>
    
  </div>

  <Footer/>
    </div>
  )
}

export default Contact
  

 

