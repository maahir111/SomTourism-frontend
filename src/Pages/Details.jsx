import React from 'react'
import { useState } from 'react';
import { FaStar } from "react-icons/fa";
import Footer from '../Components/Footer';
import Header from '../Components/Header';

// import tokyo from '../assets/tokyo.png'
// import jg1 from '../assets/jg1.png'
// import jg2 from '../assets/jg2.png'
// import jg3 from '../assets/jg3.png'
// import jg4 from '../assets/jg4.png'
// import jg5 from '../assets/jg5.png'
// import jg6 from '../assets/jg6.png'
import Scroll from '../Components/Scroll';

const faqs = [
  { question: "Day 1 - Arrive in Tokyo, Japan", answer: "We’ll gather at 4 p.m. at our hotel in Tokyo for a “Welcome to Japan” meeting. Afterwards, we’ll enjoy a leisurely evening stroll through the bustling streets of Shibuya, taking in the sights and sounds of one of Tokyo’s most vibrant districts. We’ll end the day with a group dinner, getting to know each other over delicious Japanese cuisine. Sleep in Tokyo (2 nights). No bus. Walking: light." },
  { question: "Day 2 - Tokyo - Asakusa - Akihabara - Ueno", answer: "We'll start the day exploring the historic Asakusa district, home to the famous Senso-ji Temple. Afterward, we'll head to Akihabara, Tokyo’s electric town, known for its anime culture and cutting-edge technology stores. In the afternoon, we’ll visit Ueno Park, where we can explore its museums, zoo, and scenic beauty. The day ends with a traditional dinner. Sleep in Tokyo. Walking: moderate." },
  { question: "Day 3 - Discovering Hakone", answer: "We’ll take a scenic journey to Hakone, a beautiful mountainous area famous for its hot springs, lakes, and views of Mount Fuji. We'll enjoy a boat cruise on Lake Ashi, visit the Hakone Open-Air Museum, and experience a traditional onsen bath. The evening will be spent relaxing with local cuisine. Sleep in Hakone. Walking: moderate." },
  { question: "Day 4 - Kyoto: The Heart of Tradition", answer: "We’ll take a bullet train to Kyoto, the cultural heart of Japan. Our day includes visits to the stunning Kinkaku-ji (Golden Pavilion), the bamboo forests of Arashiyama, and the vibrant streets of Gion, known for its geisha culture. We’ll enjoy a traditional kaiseki dinner. Sleep in Kyoto. Walking: moderate." },
  { question: "Day 5 - Nara and the Temples of Kyoto", answer: "We'll begin our day with a trip to Nara, where we’ll visit Todai-ji Temple, home to Japan’s largest Buddha statue, and interact with the friendly deer of Nara Park. In the afternoon, we return to Kyoto to explore Fushimi Inari Shrine, famous for its thousands of red torii gates. The evening includes a farewell dinner. Sleep in Kyoto. Walking: moderate." }
];
const gallery = [
  { img: jg1},
  { img: jg2},
  { img: jg3},
  { img: jg4},
  { img: jg5},
  { img: jg6}
];



function Datials() {

  const [openIndex, setOpenIndex] = useState(null);
  const toggleFAQ = (index) => setOpenIndex(openIndex === index ? null : index);

  return (
    <div className='sm:mx-10 mx-5 '>
      <Header/>
      <Scroll/>
       {/* qeyta kowaad  */}
        <div>
          <div className=''>
          <h1 className='sm:text-3xl text-2xl font-serif font-semibold'>Arrive in Tokyo,  Japan </h1>
          <div className='flex gap-2 my-2'>
            <FaStar className='text-yellow-400 text-1xl' />
            <FaStar className='text-yellow-400 text-1xl' />
            <FaStar className='text-yellow-400 text-1xl' />
            <FaStar className='text-yellow-400 text-1xl' /> 
            <FaStar className='text-yellow-400 text-1xl' /> 
            <p className='text-[12px] text-[#807f7f] '>  ( 22 Review) </p>
          </ div>
            <div className='my-4 sm:flex  grid grid-cols-2 [00px]  sm:gap-10 gap-10' >
              <div  className='flex gap-2'>
                <svg width="20" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
<g opacity="0.8">
<path d="M21.2104 16.7143C20.5742 18.2188 19.5792 19.5445 18.3123 20.5756C17.0454 21.6067 15.5452 22.3117 13.9428 22.6291C12.3405 22.9464 10.6848 22.8664 9.12055 22.3961C7.55627 21.9257 6.13103 21.0794 4.96942 19.931C3.80782 18.7825 2.94522 17.3671 2.45704 15.8082C1.96886 14.2494 1.86996 12.5948 2.169 10.9889C2.46804 9.38308 3.1559 7.87492 4.17245 6.59633C5.189 5.31773 6.50329 4.30761 8.0004 3.6543" stroke="#1F1F1F" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M22 12.8242C22 11.511 21.7413 10.2106 21.2388 8.99738C20.7362 7.78413 19.9997 6.68174 19.0711 5.75315C18.1425 4.82457 17.0401 4.08797 15.8268 3.58542C14.6136 3.08288 13.3132 2.82422 12 2.82422V12.8242H22Z" stroke="#1F1F1F" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</g>
                </svg>
                <p className='text-[14px] text-[#807f7f] '>3 days</p>
              </div>
              <div  className='flex gap-2'>
                <svg width="20" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M17 21.3242V19.3242C17 18.2634 16.5786 17.2459 15.8284 16.4958C15.0783 15.7456 14.0609 15.3242 13 15.3242H5C3.93913 15.3242 2.92172 15.7456 2.17157 16.4958C1.42143 17.2459 1 18.2634 1 19.3242V21.3242" stroke="#1F1F1F" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M9 11.3242C11.2091 11.3242 13 9.53336 13 7.32422C13 5.11508 11.2091 3.32422 9 3.32422C6.79086 3.32422 5 5.11508 5 7.32422C5 9.53336 6.79086 11.3242 9 11.3242Z" stroke="#1F1F1F" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M23 21.3241V19.3241C22.9993 18.4378 22.7044 17.5769 22.1614 16.8764C21.6184 16.176 20.8581 15.6757 20 15.4541" stroke="#1F1F1F" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M16 3.4541C16.8604 3.6744 17.623 4.1748 18.1676 4.87641C18.7122 5.57802 19.0078 6.44093 19.0078 7.3291C19.0078 8.21727 18.7122 9.08018 18.1676 9.78179C17.623 10.4834 16.8604 10.9838 16 11.2041" stroke="#1F1F1F" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
                <p className='text-[14px] text-[#807f7f] '>Max Guest 100</p>
              </div>
              <div  className='flex gap-2'>
                <svg width="20" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M5 13.374C6.97656 11.7277 9.46761 10.8262 12.04 10.8262C14.6124 10.8262 17.1034 11.7277 19.08 13.374" stroke="#1F1F1F" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M1.42004 9.8245C4.34247 7.24846 8.10434 5.82715 12 5.82715C15.8957 5.82715 19.6576 7.24846 22.58 9.8245" stroke="#1F1F1F" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M8.53027 16.9349C9.54548 16.2137 10.7599 15.8262 12.0053 15.8262C13.2506 15.8262 14.4651 16.2137 15.4803 16.9349" stroke="#1F1F1F" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M12 20.8242H12.01" stroke="#1F1F1F" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
                <p className='text-[14px] text-[#807f7f] '>Wi-Fi Available</p>
              </div>
              <div  className='flex gap-2'>
                <svg width="20" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_1_4190)">
<path d="M18 5.32422H6C4.89543 5.32422 4 6.21965 4 7.32422V19.3242C4 20.4288 4.89543 21.3242 6 21.3242H18C19.1046 21.3242 20 20.4288 20 19.3242V7.32422C20 6.21965 19.1046 5.32422 18 5.32422Z" stroke="#1F1F1F" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M16 3.32422V7.32422" stroke="#1F1F1F" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M8 3.32422V7.32422" stroke="#1F1F1F" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M4 11.3242H20" stroke="#1F1F1F" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M11 15.3242H12" stroke="#1F1F1F" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M12 15.3242V18.3242" stroke="#1F1F1F" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<defs>
<clipPath id="clip0_1_4190">
<rect width="24" height="24" fill="white" transform="translate(0 0.324219)"/>
</clipPath>
</defs>
                </svg>
                <p className='text-[14px] text-[#807f7f] '>Aug - Sep</p>
              </div>
            </div>
          </div>

      <div className=' text-white   my-4 rounded-2xl '>
        <img className='w-full h-[400px] ' src={tokyo} alt="" />

      </div>
      <div className=' flex sm:flex-row flex-col justify-between '>
        <div className=' sm:w-[700px] gap-5'>
          <h1 className='font-semibold font-serif'>Detail</h1>
          <p className='text-[#505050] mt-2'>Are you looking for an adventure of a lifetime? Join us on an  unforgettable journey through some of the world's most stunning  landscapes and cultural destinations. Our expertly curated tours take  you to incredible destinations, from the rugged mountains of Patagonia  to the vibrant cities of Asia. </p>
          <p className='text-[#505050] mt-8'>Our itineraries are designed to immerse  you in the local culture, with opportunities to meet locals, try new  foods, and learn about the history and traditions of each destination. 
          Our experienced guides will lead you through each destination, sharing  their knowledge and passion for travel. We offer a range of activities  to suit every traveler, from hiking and kayaking to cultural tours and  culinary experiences.</p>
        </div>

        <div className='my-10 flex flex-col sm:flex-row  justify-between'>
          <div className='bg-white sm:w-[400px] w-[355px] h-[300px] rounded  border-2 border-white shadow-lg'>
            <div className='sm:mx-10 mx-10 py-4'>
              <h1 className='sm:text-xl text-xl font-serif  font-semibold '> Booking With Confident </h1>
              <div className='flex gap-4  my-4'>
                <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M7 11.0986L11 2.09863C11.7956 2.09863 12.5587 2.4147 13.1213 2.97731C13.6839 3.53992 14 4.30298 14 5.09863V9.09863H19.66C19.9499 9.09535 20.2371 9.15514 20.5016 9.27385C20.7661 9.39256 21.0016 9.56737 21.1919 9.78615C21.3821 10.0049 21.5225 10.2625 21.6033 10.5409C21.6842 10.8193 21.7035 11.112 21.66 11.3986L20.28 20.3986C20.2077 20.8755 19.9654 21.3102 19.5979 21.6226C19.2304 21.935 18.7623 22.1041 18.28 22.0986H7M7 11.0986V22.0986M7 11.0986H4C3.46957 11.0986 2.96086 11.3093 2.58579 11.6844C2.21071 12.0595 2 12.5682 2 13.0986V20.0986C2 20.6291 2.21071 21.1378 2.58579 21.5128C2.96086 21.8879 3.46957 22.0986 4 22.0986H7" stroke="#FF8126" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
                <p>No hassle best price  Guarantee </p>
                </div>
                <div className='flex gap-4  my-4'>
                  <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M22.0001 17.0187V20.0187C22.0012 20.2972 21.9441 20.5729 21.8326 20.8281C21.721 21.0833 21.5574 21.3123 21.3521 21.5006C21.1469 21.6889 20.9046 21.8322 20.6408 21.9214C20.377 22.0107 20.0974 22.0438 19.8201 22.0187C16.7429 21.6844 13.7871 20.6329 11.1901 18.9487C8.77388 17.4134 6.72539 15.3649 5.19006 12.9487C3.50003 10.3399 2.4483 7.36972 2.12006 4.27873C2.09507 4.0022 2.12793 3.72349 2.21656 3.46035C2.30518 3.19722 2.44763 2.95542 2.63482 2.75035C2.82202 2.54528 3.04986 2.38144 3.30385 2.26925C3.55783 2.15706 3.8324 2.09899 4.11006 2.09873H7.11006C7.59536 2.09395 8.06585 2.26581 8.43382 2.58226C8.80179 2.89872 9.04213 3.33818 9.11005 3.81873C9.23668 4.7788 9.47151 5.72146 9.81006 6.62873C9.9446 6.98665 9.97372 7.37564 9.89396 7.74961C9.81421 8.12358 9.62892 8.46684 9.36005 8.73873L8.09006 10.0087C9.51361 12.5123 11.5865 14.5852 14.0901 16.0087L15.3601 14.7387C15.6319 14.4699 15.9752 14.2846 16.3492 14.2048C16.7231 14.1251 17.1121 14.1542 17.4701 14.2887C18.3773 14.6273 19.32 14.8621 20.2801 14.9887C20.7658 15.0573 21.2095 15.3019 21.5266 15.6762C21.8437 16.0505 22.0122 16.5283 22.0001 17.0187Z" stroke="#FF8126" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                  </svg>
                  <p> Customar suppport available 24/7 </p>
                  </div>
                  <div className='flex gap-4  my-4'>
                    <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M12 2.09863L15.09 8.35863L22 9.36863L17 14.2386L18.18 21.1186L12 17.8686L5.82 21.1186L7 14.2386L2 9.36863L8.91 8.35863L12 2.09863Z" stroke="#FF8126" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>

                    <p> Handle picked Tours &  Activeties  </p>
                    </div>
                    <div className='flex gap-4  my-4'>
                      <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M12 22.0986C17.5228 22.0986 22 17.6215 22 12.0986C22 6.57579 17.5228 2.09863 12 2.09863C6.47715 2.09863 2 6.57579 2 12.0986C2 17.6215 6.47715 22.0986 12 22.0986Z" stroke="#FF8126" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M14.3101 8.09863L20.0501 18.0386" stroke="#FF8126" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M9.68994 8.09863H21.1699" stroke="#FF8126" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M7.38 12.0982L13.12 2.1582" stroke="#FF8126" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M9.68995 16.0982L3.94995 6.1582" stroke="#FF8126" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M14.31 16.0986H2.82996" stroke="#FF8126" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M16.62 12.0986L10.88 22.0386" stroke="#FF8126" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                      </svg>
                      <p> Free Travel Insurance  </p>
                    </div>
                  </div>
            </div> 
      </div>
      </div>
 {/* qeyta Afaraaaad  */}

<div className=' flex sm:flex-row flex-col justify-between '>
        <div className='  sm:w-[700px] flex sm:flex-row flex-col gap-8  sm:gap-20'>
          <div>
            <h1 className='font-semibold mb-5 font-serif'>Include</h1>
            <div className='flex gap-2 items-center'>
              <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M20 6.59863L9 17.5986L4 12.5986" stroke="#2C2C2C" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
              <p>Breakfast, lunch, and dinner.</p>
            </div>
            <div className='flex gap-2 mt-2 items-center'>
              <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M20 6.59863L9 17.5986L4 12.5986" stroke="#2C2C2C" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
              <p>Professional tour guide</p>
            </div>
            <div className='flex gap-2 mt-2 items-center'>
              <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M20 6.59863L9 17.5986L4 12.5986" stroke="#2C2C2C" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
              <p>Transfers between destinations</p>
            </div>
            <div className='flex gap-2 mt-2 items-center'>
              <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M20 6.59863L9 17.5986L4 12.5986" stroke="#2C2C2C" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
              <p>Entrance fees to museums</p>
            </div>
            <div className='flex gap-2 mt-2 items-center'>
              <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M20 6.59863L9 17.5986L4 12.5986" stroke="#2C2C2C" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
              <p>Accommodation at hotel</p>
            </div>
          </div>
          <div>
            <h1 className='font-semibold font-serif'>Exclude</h1>
            <div className='flex gap-2 mt-2 items-center'>
              <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M18 6.09863L6 18.0986" stroke="#2C2C2C" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M6 6.09863L18 18.0986" stroke="#2C2C2C" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
              <p>Guide service fee</p>
            </div>
            <div className='flex gap-2 mt-2 items-center'>
              <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M18 6.09863L6 18.0986" stroke="#2C2C2C" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M6 6.09863L18 18.0986" stroke="#2C2C2C" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
              <p>Driver service fee</p>
            </div>
            <div className='flex gap-2 mt-2 items-center'>
              <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M18 6.09863L6 18.0986" stroke="#2C2C2C" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M6 6.09863L18 18.0986" stroke="#2C2C2C" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
              <p>Custom itinerary</p>
            </div>
          </div>
        </div>

        <div className='sm:mb-10 mt-8 sm:mt-0   flex flex-col sm:flex-row border-2 border-black rounded-lg  justify-between'>
          <div className='bg-white sm:w-[400px] w-full h-[220px] rounded  border-2 border-white shadow-lg'>
            <div className='sm:mx-10 mx-10 py-4'>
              <h1 className='sm:text-xl text-xl font-serif  font-semibold '> Need Help? </h1>
                <div className='flex gap-4  mt-8'>
                  <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M22.0001 17.0187V20.0187C22.0012 20.2972 21.9441 20.5729 21.8326 20.8281C21.721 21.0833 21.5574 21.3123 21.3521 21.5006C21.1469 21.6889 20.9046 21.8322 20.6408 21.9214C20.377 22.0107 20.0974 22.0438 19.8201 22.0187C16.7429 21.6844 13.7871 20.6329 11.1901 18.9487C8.77388 17.4134 6.72539 15.3649 5.19006 12.9487C3.50003 10.3399 2.4483 7.36972 2.12006 4.27873C2.09507 4.0022 2.12793 3.72349 2.21656 3.46035C2.30518 3.19722 2.44763 2.95542 2.63482 2.75035C2.82202 2.54528 3.04986 2.38144 3.30385 2.26925C3.55783 2.15706 3.8324 2.09899 4.11006 2.09873H7.11006C7.59536 2.09395 8.06585 2.26581 8.43382 2.58226C8.80179 2.89872 9.04213 3.33818 9.11005 3.81873C9.23668 4.7788 9.47151 5.72146 9.81006 6.62873C9.9446 6.98665 9.97372 7.37564 9.89396 7.74961C9.81421 8.12358 9.62892 8.46684 9.36005 8.73873L8.09006 10.0087C9.51361 12.5123 11.5865 14.5852 14.0901 16.0087L15.3601 14.7387C15.6319 14.4699 15.9752 14.2846 16.3492 14.2048C16.7231 14.1251 17.1121 14.1542 17.4701 14.2887C18.3773 14.6273 19.32 14.8621 20.2801 14.9887C20.7658 15.0573 21.2095 15.3019 21.5266 15.6762C21.8437 16.0505 22.0122 16.5283 22.0001 17.0187Z" stroke="#FF8126" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                  </svg>
                  <p> Customar suppport available 24/7 </p>
                </div>
                <div className='flex gap-4  mt-6'>
                  <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_1_4291)">
<path d="M19 5.09863H5C3.89543 5.09863 3 5.99406 3 7.09863V17.0986C3 18.2032 3.89543 19.0986 5 19.0986H19C20.1046 19.0986 21 18.2032 21 17.0986V7.09863C21 5.99406 20.1046 5.09863 19 5.09863Z" stroke="#FF8126" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M3 7.09863L12 13.0986L21 7.09863" stroke="#FF8126" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<defs>
<clipPath id="clip0_1_4291">
<rect width="24" height="24" fill="white" transform="translate(0 0.0986328)"/>
</clipPath>
</defs>
                  </svg>
                  <p> Hand picked Tours & Activities </p>
                </div>
              </div>
            </div> 
          </div>
        </div>
      </div>
    
    <div >
      <h1 className='text-2xl font-serif mt-8 font-semibold '> What is Exprect</h1>
      <p className='sm:w-full w-[300px] my-4 text-[#505050]'>A delightful calm has enveloped my spirit entirely, much like the gentle spring mornings that fill my heart with joy. In this peaceful place, designed for souls seeking pure contentment, I find myself alone, yet deeply connected to the beauty of existence. My happiness is complete, as I am lost in the serene pleasure of simply being, so much so that I forget my usual pursuits.</p>
      <div className='sm:ml-5 font-semibold'>
        <p><span className='text-xl mr-2'>•</span> Explore the Historic City Walls</p>
        <p><span className='text-xl mr-2'>•</span> Wander through the Enchanting Forest</p>
        <p><span className='text-xl mr-2'>•</span> Visit the Renowned Viewpoint "The Skylark</p>
        <p><span className='text-xl mr-2'>•</span> Enjoy a Sunset Cruise</p>
      </div>
    </div>
{/* qeyta 7  */}
<div className='bg-white shadow-xl  sm:w-full sm:h-[120px] my-10'>
  <div className=' flex sm:justify-between flex-col sm:flex-row '>
    <div my-4>
      <h3 className='text-[14px] font-bold px-10 my-4 font-serif'> Best Saller</h3>
      <div className='text-2xl font-bold font-serif   px-10 flex gap-4  my-4'>
        <h1> Price :  </h1>
        <h1>565</h1>
    </div>
    </div>
  <div className='px-10 my-4'>
    <button className='sm:px-16 px-10 py-3  text-white shadow-2xl shadow-[#FF8126] font-sans bg-[#FF8126] my-4 rounded  '> Book Now </button>
  </div>
</div>
</div>

  <div className="max-w-3xl  mt-16 ">
      <h2 className="text-3xl font-semibold text-gray-900">Itinerary</h2>
    </div>
    <div className="max- sm:mx-6  mt-10 space-y-4 mb-20">
      {faqs.map((faq, index) => (
        <div key={index} className=" p-2  sm:w-full  border-b-[1.5px] border-gray-500">
          <button className="w-full flex justify-between items-center text-left font-serif font-semibold" onClick={() => toggleFAQ(index)}>
          {faq.question}
          {/* {openIndex === index ?  className="text-xl text-orange-500" /> : < className="text-xl text-gray-500" />} */}
          </button>
          {openIndex === index && <p className="mt-2 text-gray-600">{faq.answer}</p>}
        </div>
        ))}
    </div>

{/* qeyta 8  */}
<div>
  <h1 className='font-serif font-semibold text-xl mb-5'>Gallery</h1>
  <div className=" grid sm:grid-cols-3 grid-cols-1 items-center gap-4 justify-between  mt-10  mb-20">
      {gallery.map((gallery, index) => (
        <div key={index} className=" ">
          <img src={gallery.img} alt="" />
        </div>
        ))}
    </div>

  </div>

{/* 
  qeybta  Shanaaad  Map */} 
  <div className='mb-20'>

  <div>
    <h1 className='font-serif font-semibold mb-5 text-xl'>Tour Map</h1>
  <iframe width="100%" height="400" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=1%20Grafton%20Street,%20Dublin,%20Ireland+(My%20Business%20Name)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"><a href="https://www.gps.ie/collections/drones/">gps drone</a></iframe>
  </div>


  </div>
  <Footer/>


    </div>
  )
}

export default Datials
