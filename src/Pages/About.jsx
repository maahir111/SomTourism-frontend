import React, { useState } from "react";
import { FaGlobeAmericas, FaTag, FaCompass, FaFacebook, FaInstagram, FaTimes } from "react-icons/fa";
import { FiPlus, FiMinus } from "react-icons/fi";
import shape from '../assets/shape.png'
import three from '../assets/three.png'
import qariirad from '../assets/qariirad.png'
import abdulkadir from '../assets/abbdulkadir.png'
import daqare from '../assets/daqare.jpg'
import hassan from '../assets/hassan.png'
import ayuub from "../assets/ayuub.png"
import ayuub26 from "../assets/ayuub26.png"
import Footer from "../Components/Footer";
import Header from "../Components/Header";
import Scroll from "../Components/Scroll";

const teamMembers = [
  {
    name: "Abdulkadir Ahmed Hassan",
    role: "CEO & Founder",
    image: abdulkadir,
    socials: ["facebook", "instagram", "times"]
  },
  {
    name: "Ali Mahomed Mohamuud",
    role: "Manager",
    image: daqare,
    socials: ["facebook", "instagram", "times"]
  },
  {
    name: "Hassan Abdi Yusuf",
    role: "Tour Manager",
    image: hassan ,
    socials: ["facebook", "instagram", "times"] 
  },
  {
    name: "Ayuub Abdiaziz Mohamed",
    role: "Tour Manager 2",
    image: ayuub26,
    socials: ["facebook", "instagram", "times"]
  }
];

const faqs = [
  { question: "What is SomTourista?", answer: "Tourista is a comprehensive travel platform designed to help you plan, book, and enjoy your trips with ease." },
  { question: "Can I cancel or change my booking?", answer: "Yes, you can modify your booking based on our cancellation policy." },
  { question: "Is Tourista available worldwide?", answer: "Yes, Tourista offers services in multiple countries." },
  { question: "How do I contact customer support?", answer: "You can reach out via email, phone, or live chat." },
  { question: "How secure is my payment information?", answer: "We use advanced encryption to protect your payment details." }
];

const AboutPage = () => {
  const [openIndex, setOpenIndex] = useState(null);
  const toggleFAQ = (index) => setOpenIndex(openIndex === index ? null : index);

  return (
    <div className="">
      <Header/>
      <Scroll/>
      {/* About Section */}
      <div className="  ">
        <img className="sm:h-[400px] h-[280px] -mt-6 sm:-mt-0 sm:w-full " src={shape} alt="" />
        <img className="absolute sm:top-20 sm:mt-0 sm:left-36 sm:w-[900px] " src={qariirad} alt="" />
        <div className="">
          <h2 className="text-3xl font-serif absolute top-20  right-32 sm:top-24 sm:right-[550px] font-bold text-gray-800 my-10">About Us</h2>
          <img  src={three} alt="" className="absolute  sm:top-52 top-44 left-5 sm:left-36 w-[350px] sm:w-96 h-[380px] sm:h-96" />
        </div>
        <div className=" sm:w-[500px] sm:mt-0 mx-8  sm:absolute sm:top-48 sm:right-[150px]">
          <div>
            <p className="font-semibold text-[22px] sm:mt-0 mt-56 font-serif">Your Gateway to Unforgettable Journeys and Seamless Travel Experiences</p>
            <p className="text-[#2C2C2C]">Discover the world with ease and inspiration through Tourista, your ultimate guide to unforgettable journeys and seamless travel experiences.</p>
          </div>
          <div className="mt-8">
            <div className="flex items-center gap-2 ">
              <svg width="45" height="" viewBox="0 0 61 61" fill="none" xmlns="http://www.w3.org/2000/svg">
  <g filter="url(#filter0_d_1_6415)">
  <circle cx="30.1738" cy="26.8242" r="20" fill="#FF8126"/>
  </g>
  <g clip-path="url(#clip0_1_6415)">
  <path d="M34.6742 16.8242C33.5696 16.8242 32.6742 17.7196 32.6742 18.8242C32.6742 19.9288 33.5696 20.8242 34.6742 20.8242C35.7788 20.8242 36.6742 19.9288 36.6742 18.8242C36.6742 17.7196 35.7788 16.8242 34.6742 16.8242ZM32.4379 21.8242L27.8578 24.1152L27.3598 25.6074L27.3578 25.6055L25.9652 29.6816L23.8363 28.8633C23.3183 28.6723 22.7431 28.938 22.5531 29.457L20.7348 34.2598C20.5438 34.7778 20.8095 35.353 21.3285 35.543L21.6859 35.7129C21.7459 34.1079 23.0552 32.8242 24.6742 32.8242C25.4022 32.8242 26.0615 33.0944 26.5805 33.5254L28.5297 28.166L29.4906 25.5352L31.266 24.6465L28.6898 36.8242H30.7348L32.1156 30.2969C32.5946 30.8659 33.3262 31.7862 33.6742 32.1582V36.8242H35.6742V31.5215L34.5004 29.7617L35.3324 26.2656C35.6164 26.7696 35.9579 27.2045 36.3559 27.5605C37.2799 28.3875 38.4272 28.8242 39.6742 28.8242V26.8242C38.9052 26.8242 38.2568 26.5773 37.6898 26.0703C37.1828 25.6173 36.8076 24.9153 36.5766 23.9863C36.1486 22.2753 34.4912 21.8242 33.6742 21.8242H32.4379ZM24.6742 34.8242C24.1219 34.8242 23.6742 35.2719 23.6742 35.8242C23.6742 36.3765 24.1219 36.8242 24.6742 36.8242C25.2265 36.8242 25.6742 36.3765 25.6742 35.8242C25.6742 35.2719 25.2265 34.8242 24.6742 34.8242Z" fill="white"/>
  </g>
  <defs>
  <filter id="filter0_d_1_6415" x="0.173828" y="0.824219" width="60" height="60" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
  <feFlood flood-opacity="0" result="BackgroundImageFix"/>
  <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
  <feOffset dy="4"/>
  <feGaussianBlur stdDeviation="5"/>
  <feComposite in2="hardAlpha" operator="out"/>
  <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.05 0"/>
  <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_1_6415"/>
  <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_1_6415" result="shape"/>
  </filter>
  <clipPath id="clip0_1_6415">
  <rect width="24" height="24" fill="white" transform="translate(18.1738 14.8242)"/>
  </clipPath>
  </defs>
              </svg>
              <p>Great travel experience </p>
            </div>
            <div className="flex items-center gap-2 ">
              <svg width="45" height="" viewBox="0 0 61 61" fill="none" xmlns="http://www.w3.org/2000/svg">
  <g filter="url(#filter0_d_1_6423)">
  <circle cx="30.1738" cy="26.8242" r="20" fill="#FF8126"/>
  </g>
  <g clip-path="url(#clip0_1_6423)">
  <path d="M26.7342 16.9346C23.1766 16.9346 20.2842 19.827 20.2842 23.3846C20.2842 26.8078 22.9582 29.6145 26.3311 29.8211C26.5679 29.8362 26.7728 29.6548 26.7879 29.418C26.803 29.1812 26.6216 28.9762 26.3848 28.9611C23.4571 28.7814 21.1442 26.3593 21.1442 23.3846C21.1442 20.2923 23.6419 17.7946 26.7342 17.7946C29.7089 17.7946 32.131 20.1075 32.3107 23.0352C32.3259 23.272 32.5308 23.4534 32.7676 23.4383C33.0045 23.4232 33.1859 23.2183 33.1707 22.9814C32.9641 19.6086 30.1574 16.9346 26.7342 16.9346ZM39.2042 17.3646C38.9673 17.3646 38.7742 17.5577 38.7742 17.7946C38.7742 18.0314 38.9673 18.2246 39.2042 18.2246C39.441 18.2246 39.6342 18.0314 39.6342 17.7946C39.6342 17.5577 39.441 17.3646 39.2042 17.3646ZM37.9142 18.6546C37.6773 18.6546 37.4842 18.8477 37.4842 19.0846C37.4842 19.3214 37.6773 19.5146 37.9142 19.5146C38.151 19.5146 38.3442 19.3214 38.3442 19.0846C38.3442 18.8477 38.151 18.6546 37.9142 18.6546ZM36.6242 19.9446C36.3873 19.9446 36.1942 20.1377 36.1942 20.3746C36.1942 20.6114 36.3873 20.8046 36.6242 20.8046C36.861 20.8046 37.0542 20.6114 37.0542 20.3746C37.0542 20.1377 36.861 19.9446 36.6242 19.9446ZM25.5248 20.8583L25.0411 23.5189H25.9279C26.0237 23.3863 26.2303 23.1427 26.667 23.1427C26.8232 23.1427 27.5001 23.2015 27.5001 24.043C27.5001 24.342 27.3221 24.9702 26.667 24.9702C26.0589 24.9702 25.8977 24.4646 25.8742 24.2446H24.8932C24.8832 24.8241 25.298 25.763 26.6804 25.763C27.9939 25.763 28.4676 24.6779 28.4676 24.043C28.4676 23.7104 28.3013 22.4036 26.9895 22.4036C26.4352 22.4036 26.1816 22.6472 26.0489 22.7799L26.0354 22.7664L26.2236 21.6646H28.2123V20.8583H25.5248ZM35.3342 21.2346C35.0973 21.2346 34.9042 21.4277 34.9042 21.6646C34.9042 21.9014 35.0973 22.0946 35.3342 22.0946C35.571 22.0946 35.7642 21.9014 35.7642 21.6646C35.7642 21.4277 35.571 21.2346 35.3342 21.2346ZM34.0442 22.5246C33.8073 22.5246 33.6142 22.7177 33.6142 22.9546C33.6142 23.1914 33.8073 23.3846 34.0442 23.3846C34.281 23.3846 34.4742 23.1914 34.4742 22.9546C34.4742 22.7177 34.281 22.5246 34.0442 22.5246ZM32.7542 23.8146C32.5173 23.8146 32.3242 24.0077 32.3242 24.2446C32.3242 24.4814 32.5173 24.6746 32.7542 24.6746C32.991 24.6746 33.1842 24.4814 33.1842 24.2446C33.1842 24.0077 32.991 23.8146 32.7542 23.8146ZM33.8829 23.828C33.6461 23.8498 33.4714 24.0615 33.4932 24.2983C33.5151 24.5352 33.7267 24.7098 33.9636 24.688C36.8913 24.8677 39.2042 27.2898 39.2042 30.2646C39.2042 33.3569 36.7065 35.8546 33.6142 35.8546C30.6395 35.8546 28.2173 33.5416 28.0376 30.6139C28.0225 30.3771 27.8176 30.1957 27.5807 30.2108C27.3439 30.2259 27.1625 30.4309 27.1776 30.6677C27.3842 34.0405 30.191 36.7146 33.6142 36.7146C37.1718 36.7146 40.0642 33.8221 40.0642 30.2646C40.0642 26.8414 37.3901 24.0346 34.0173 23.828C33.9988 23.8263 33.982 23.8263 33.9636 23.828C33.9501 23.828 33.9367 23.828 33.9232 23.828C33.9098 23.828 33.8964 23.828 33.8829 23.828ZM31.4642 25.1046C31.2273 25.1046 31.0342 25.2977 31.0342 25.5346C31.0342 25.7714 31.2273 25.9646 31.4642 25.9646C31.701 25.9646 31.8942 25.7714 31.8942 25.5346C31.8942 25.2977 31.701 25.1046 31.4642 25.1046ZM30.1742 26.3946C29.9373 26.3946 29.7442 26.5877 29.7442 26.8246C29.7442 27.0614 29.9373 27.2546 30.1742 27.2546C30.411 27.2546 30.6042 27.0614 30.6042 26.8246C30.6042 26.5877 30.411 26.3946 30.1742 26.3946ZM28.8842 27.6846C28.6473 27.6846 28.4542 27.8777 28.4542 28.1146C28.4542 28.3514 28.6473 28.5446 28.8842 28.5446C29.121 28.5446 29.3142 28.3514 29.3142 28.1146C29.3142 27.8777 29.121 27.6846 28.8842 27.6846ZM33.3857 27.9802C33.3589 28.1633 32.8751 28.9343 31.9748 28.9343V29.6733H33.1842V32.8043H34.1651V27.9802H33.3857ZM27.5942 28.9746C27.3573 28.9746 27.1642 29.1677 27.1642 29.4046C27.1642 29.6414 27.3573 29.8346 27.5942 29.8346C27.831 29.8346 28.0242 29.6414 28.0242 29.4046C28.0242 29.1677 27.831 28.9746 27.5942 28.9746ZM26.3042 30.2646C26.0673 30.2646 25.8742 30.4577 25.8742 30.6946C25.8742 30.9314 26.0673 31.1246 26.3042 31.1246C26.541 31.1246 26.7342 30.9314 26.7342 30.6946C26.7342 30.4577 26.541 30.2646 26.3042 30.2646ZM25.0142 31.5546C24.7773 31.5546 24.5842 31.7477 24.5842 31.9846C24.5842 32.2214 24.7773 32.4146 25.0142 32.4146C25.251 32.4146 25.4442 32.2214 25.4442 31.9846C25.4442 31.7477 25.251 31.5546 25.0142 31.5546ZM23.7242 32.8446C23.4873 32.8446 23.2942 33.0377 23.2942 33.2746C23.2942 33.5114 23.4873 33.7046 23.7242 33.7046C23.961 33.7046 24.1542 33.5114 24.1542 33.2746C24.1542 33.0377 23.961 32.8446 23.7242 32.8446ZM22.4342 34.1346C22.1973 34.1346 22.0042 34.3277 22.0042 34.5646C22.0042 34.8014 22.1973 34.9946 22.4342 34.9946C22.671 34.9946 22.8642 34.8014 22.8642 34.5646C22.8642 34.3277 22.671 34.1346 22.4342 34.1346ZM21.1442 35.4246C20.9073 35.4246 20.7142 35.6177 20.7142 35.8546C20.7142 36.0914 20.9073 36.2846 21.1442 36.2846C21.381 36.2846 21.5742 36.0914 21.5742 35.8546C21.5742 35.6177 21.381 35.4246 21.1442 35.4246Z" fill="white"/>
  </g>
  <defs>
  <filter id="filter0_d_1_6423" x="0.173828" y="0.824219" width="60" height="60" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
  <feFlood flood-opacity="0" result="BackgroundImageFix"/>
  <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
  <feOffset dy="4"/>
  <feGaussianBlur stdDeviation="5"/>
  <feComposite in2="hardAlpha" operator="out"/>
  <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.05 0"/>
  <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_1_6423"/>
  <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_1_6423" result="shape"/>
  </filter>
  <clipPath id="clip0_1_6423">
  <rect width="24" height="24" fill="white" transform="translate(18.1738 14.8242)"/>
  </clipPath>
  </defs>
              </svg>
              <p>Competitive pricing offers </p>
            </div>
            <div className="flex items-center gap-2 ">
              <svg width="45" height="" viewBox="0 0 61 61" fill="none" xmlns="http://www.w3.org/2000/svg">
  <g filter="url(#filter0_d_1_6431)">
  <circle cx="30.1738" cy="26.8242" r="20" fill="#FF8126"/>
  </g>
  <g clip-path="url(#clip0_1_6431)">
  <path d="M25.8536 18.4297C22.7253 18.4297 20.1836 20.9714 20.1836 24.0997C20.1836 25.3657 20.8256 26.6695 21.7551 27.9266C22.6846 29.1837 23.9121 30.3975 25.1364 31.4625C27.5851 33.5923 30.0302 35.128 30.0302 35.128L30.1736 35.2187L30.317 35.128C30.317 35.128 32.7621 33.5923 35.2108 31.4625C36.4351 30.3975 37.6626 29.1837 38.5921 27.9266C39.5216 26.6695 40.1636 25.3657 40.1636 24.0997C40.1636 20.9714 37.6219 18.4297 34.4936 18.4297C32.7508 18.4297 31.2129 19.2392 30.1736 20.4779C29.1343 19.2392 27.5963 18.4297 25.8536 18.4297ZM25.8536 18.9697C27.5359 18.9697 29.0211 19.7811 29.9574 21.0311L30.1736 21.3195L30.3898 21.0311C31.3261 19.7811 32.8112 18.9697 34.4936 18.9697C37.3301 18.9697 39.6236 21.2632 39.6236 24.0997C39.6236 25.1793 39.0506 26.3983 38.1576 27.606C37.2646 28.8137 36.0621 30.0067 34.8564 31.0554C32.5597 33.053 30.387 34.4389 30.1736 34.5743C29.9602 34.4389 27.7875 33.053 25.4908 31.0554C24.2851 30.0067 23.0826 28.8137 22.1896 27.606C21.2966 26.3983 20.7236 25.1793 20.7236 24.0997C20.7236 21.2632 23.0171 18.9697 25.8536 18.9697ZM25.8536 19.7797C25.7046 19.7797 25.5836 19.9006 25.5836 20.0497C25.5836 20.1987 25.7046 20.3197 25.8536 20.3197C26.0026 20.3197 26.1236 20.1987 26.1236 20.0497C26.1236 19.9006 26.0026 19.7797 25.8536 19.7797ZM34.4936 19.7797C34.3446 19.7797 34.2236 19.9006 34.2236 20.0497C34.2236 20.1987 34.3446 20.3197 34.4936 20.3197C34.6426 20.3197 34.7636 20.1987 34.7636 20.0497C34.7636 19.9006 34.6426 19.7797 34.4936 19.7797ZM24.8427 19.9205C24.8079 19.9157 24.7716 19.9177 24.7356 19.9273C24.5917 19.966 24.5061 20.1138 24.5447 20.258C24.5833 20.4022 24.7312 20.4875 24.8754 20.4489C25.0196 20.4103 25.1049 20.2624 25.0663 20.1182C25.0373 20.0101 24.9469 19.935 24.8427 19.9205ZM26.8645 19.9205C26.7603 19.935 26.6699 20.0101 26.6409 20.1182C26.6023 20.2622 26.6879 20.4103 26.8318 20.4489C26.9757 20.4875 27.1239 20.4019 27.1625 20.258C27.2011 20.1141 27.1155 19.966 26.9716 19.9273C26.9355 19.9177 26.8993 19.9157 26.8645 19.9205ZM33.4827 19.9205C33.4479 19.9156 33.4117 19.9177 33.3756 19.9273C33.2317 19.966 33.1461 20.1138 33.1847 20.258C33.2233 20.4019 33.3712 20.4875 33.5154 20.4489C33.6593 20.4103 33.7449 20.2624 33.7063 20.1182C33.6773 20.0103 33.5869 19.935 33.4827 19.9205ZM35.505 19.921C35.4008 19.9355 35.3104 20.0106 35.2814 20.1188C35.2428 20.2627 35.3279 20.4108 35.4718 20.4494C35.6157 20.488 35.7644 20.4024 35.803 20.2585C35.8416 20.1146 35.756 19.9665 35.6121 19.9279C35.576 19.9182 35.5398 19.9162 35.505 19.921ZM23.7954 20.3239C23.7606 20.3282 23.7259 20.3396 23.6936 20.3582C23.5645 20.4327 23.5205 20.5983 23.595 20.7273C23.6695 20.8564 23.8345 20.9005 23.9636 20.8259C24.0927 20.7514 24.1367 20.5864 24.0622 20.4573C24.0063 20.3605 23.8998 20.311 23.7954 20.3239ZM32.4348 20.3239C32.4 20.3282 32.3653 20.3396 32.3331 20.3582C32.204 20.4327 32.1599 20.5983 32.2345 20.7273C32.309 20.8564 32.474 20.9005 32.6031 20.8259C32.7321 20.7514 32.7767 20.5864 32.7022 20.4573C32.6463 20.3605 32.5393 20.311 32.4348 20.3239ZM27.9118 20.3244C27.8074 20.3115 27.7009 20.3605 27.645 20.4573C27.5705 20.5864 27.6145 20.7519 27.7436 20.8265C27.8727 20.901 28.0377 20.8564 28.1122 20.7273C28.1867 20.5983 28.1427 20.4332 28.0136 20.3587C27.9813 20.3401 27.9466 20.3287 27.9118 20.3244ZM36.5518 20.3244C36.4475 20.3115 36.3411 20.3611 36.285 20.4579C36.2105 20.5869 36.2545 20.7519 36.3836 20.8265C36.5127 20.901 36.6777 20.8569 36.7522 20.7279C36.8267 20.5988 36.7827 20.4332 36.6536 20.3587C36.6213 20.3401 36.5866 20.3287 36.5518 20.3244ZM22.9896 20.9657C22.9205 20.9657 22.8515 20.9921 22.7987 21.0448C22.6931 21.1504 22.6931 21.3213 22.7987 21.4266C22.9043 21.5322 23.0752 21.5322 23.1805 21.4266C23.2861 21.321 23.2861 21.1501 23.1805 21.0448C23.1277 20.9921 23.0586 20.9657 22.9896 20.9657ZM28.7171 20.9657C28.648 20.9657 28.579 20.9921 28.5262 21.0448C28.4206 21.1504 28.4206 21.3213 28.5262 21.4266C28.6317 21.5322 28.8027 21.5322 28.908 21.4266C29.0135 21.321 29.0135 21.1501 28.908 21.0448C28.8553 20.9921 28.7862 20.9657 28.7171 20.9657ZM31.6296 20.9657C31.5605 20.9657 31.4915 20.9921 31.4387 21.0448C31.3331 21.1504 31.3331 21.3213 31.4387 21.4266C31.5443 21.5322 31.7152 21.5322 31.8205 21.4266C31.9258 21.321 31.9261 21.1501 31.8205 21.0448C31.7678 20.9921 31.6987 20.9657 31.6296 20.9657ZM37.3571 20.9657C37.288 20.9657 37.219 20.9921 37.1662 21.0448C37.0606 21.1504 37.0606 21.3213 37.1662 21.4266C37.2717 21.5322 37.4427 21.5322 37.548 21.4266C37.6535 21.321 37.6535 21.1501 37.548 21.0448C37.4953 20.9921 37.4262 20.9657 37.3571 20.9657ZM37.9672 21.8063C37.9324 21.8106 37.8978 21.8219 37.8654 21.8405C37.7364 21.9151 37.6918 22.0801 37.7663 22.2092C37.8408 22.3382 38.0064 22.3828 38.1354 22.3083C38.2645 22.2338 38.3086 22.0682 38.234 21.9392C38.1782 21.8424 38.0717 21.7933 37.9672 21.8063ZM22.3795 21.8068C22.275 21.7939 22.1685 21.8429 22.1126 21.9397C22.0381 22.0687 22.0822 22.2338 22.2112 22.3083C22.3403 22.3828 22.5059 22.3387 22.5804 22.2097C22.6549 22.0806 22.6103 21.9156 22.4812 21.8411C22.449 21.8224 22.4143 21.8111 22.3795 21.8068ZM29.3272 21.8068C29.2924 21.8111 29.2578 21.8224 29.2254 21.8411C29.0964 21.9156 29.0523 22.0806 29.1268 22.2097C29.2013 22.3387 29.3664 22.3828 29.4954 22.3083C29.6245 22.2338 29.6691 22.0687 29.5946 21.9397C29.5387 21.8429 29.4317 21.7938 29.3272 21.8068ZM31.0195 21.8068C30.915 21.7939 30.808 21.8429 30.7521 21.9397C30.6776 22.0687 30.7222 22.2338 30.8512 22.3083C30.9803 22.3828 31.1453 22.3387 31.2198 22.2097C31.2944 22.0806 31.2503 21.9156 31.1212 21.8411C31.089 21.8224 31.0543 21.8111 31.0195 21.8068ZM30.2105 22.7523C30.1758 22.7475 30.1394 22.7495 30.1035 22.7592C29.9595 22.7978 29.8739 22.9456 29.9126 23.0898C29.9512 23.2337 30.0996 23.3193 30.2437 23.2807C30.3876 23.2421 30.4732 23.0943 30.4346 22.9501C30.4057 22.8421 30.3147 22.7669 30.2105 22.7523ZM21.9043 22.784C21.8001 22.7985 21.7097 22.8738 21.6807 22.9817C21.6421 23.1256 21.7277 23.2738 21.8716 23.3124C22.0155 23.351 22.1637 23.2654 22.2023 23.1215C22.2409 22.9776 22.1553 22.8294 22.0114 22.7908C21.9754 22.7812 21.9391 22.7791 21.9043 22.784ZM38.4429 22.7845C38.4081 22.7796 38.3718 22.7812 38.3358 22.7908C38.1919 22.8294 38.1063 22.9778 38.1449 23.122C38.1835 23.2659 38.3314 23.3515 38.4756 23.3129C38.6195 23.2743 38.7051 23.1259 38.6665 22.9817C38.6375 22.8738 38.5471 22.799 38.4429 22.7845ZM33.6303 22.7898C33.3496 22.7898 33.0688 22.8962 32.8562 23.1088L30.952 25.013L26.4875 24.4182L25.7951 25.4565L29.1885 26.776L27.8153 28.1497H26.507L25.7508 28.9064L27.655 29.8583L28.6069 31.7625L29.3636 31.0063V29.698L30.7368 28.3248L32.0567 31.7177L33.0951 31.0253L32.5002 26.5613L34.4045 24.6571C34.8299 24.2316 34.8297 23.5341 34.4045 23.1088C34.1918 22.8962 33.9111 22.7898 33.6303 22.7898ZM33.6303 23.3266C33.7717 23.3266 33.9132 23.3811 34.0227 23.4906C34.2416 23.7095 34.242 24.056 34.0227 24.2753L31.9296 26.3683L32.5155 30.7632L32.3167 30.8956L30.9404 27.3571L28.8236 29.4744V30.7822L28.755 30.8507L28.0574 29.4559L26.6625 28.7582L26.7311 28.6897H28.0389L30.1557 26.5729L26.6177 25.1966L26.7501 24.9978L31.145 25.5836L33.238 23.4906C33.3475 23.3811 33.4889 23.3266 33.6303 23.3266ZM21.8036 23.8297C21.6546 23.8297 21.5336 23.9506 21.5336 24.0997C21.5336 24.2487 21.6546 24.3697 21.8036 24.3697C21.9526 24.3697 22.0736 24.2487 22.0736 24.0997C22.0736 23.9506 21.9526 23.8297 21.8036 23.8297ZM38.5436 23.8297C38.3946 23.8297 38.2736 23.9506 38.2736 24.0997C38.2736 24.2487 38.3946 24.3697 38.5436 24.3697C38.6926 24.3697 38.8136 24.2487 38.8136 24.0997C38.8136 23.9506 38.6926 23.8297 38.5436 23.8297ZM21.9787 24.8802C21.9439 24.8753 21.9077 24.8774 21.8716 24.887C21.7277 24.9256 21.6421 25.0735 21.6807 25.2177C21.7193 25.3616 21.8672 25.4472 22.0114 25.4086C22.1555 25.3699 22.2409 25.2221 22.2023 25.0779C22.1733 24.97 22.0829 24.8947 21.9787 24.8802ZM38.3685 24.8807C38.2643 24.8951 38.1739 24.9703 38.1449 25.0784C38.1063 25.2223 38.1919 25.3705 38.3358 25.4091C38.4797 25.4477 38.6279 25.3621 38.6665 25.2182C38.7051 25.0743 38.6195 24.9261 38.4756 24.8875C38.4395 24.8779 38.4033 24.8759 38.3685 24.8807ZM22.313 25.8563C22.2782 25.8606 22.2435 25.8719 22.2112 25.8905C22.0822 25.9651 22.0381 26.1301 22.1126 26.2592C22.1871 26.3882 22.3522 26.4328 22.4812 26.3583C22.6103 26.2838 22.6549 26.1182 22.5804 25.9892C22.5245 25.8924 22.4174 25.8433 22.313 25.8563ZM38.0342 25.8573C37.9298 25.8444 37.8227 25.8934 37.7668 25.9902C37.6923 26.1193 37.7364 26.2843 37.8654 26.3588C37.9945 26.4333 38.16 26.3893 38.2346 26.2602C38.3091 26.1312 38.2645 25.9661 38.1354 25.8916C38.1032 25.873 38.069 25.8616 38.0342 25.8573Z" fill="white"/>
  </g>
  <defs>
  <filter id="filter0_d_1_6431" x="0.173828" y="0.824219" width="60" height="60" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
  <feFlood flood-opacity="0" result="BackgroundImageFix"/>
  <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
  <feOffset dy="4"/>
  <feGaussianBlur stdDeviation="5"/>
  <feComposite in2="hardAlpha" operator="out"/>
  <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.05 0"/>
  <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_1_6431"/>
  <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_1_6431" result="shape"/>
  </filter>
  <clipPath id="clip0_1_6431">
  <rect width="24" height="24" fill="white" transform="translate(18.1738 14.8242)"/>
  </clipPath>
  </defs>
              </svg>
              <p>Freedom to discover, confidence to explore</p>
            </div>
          </div>
        </div>
      </div>

      {/* Additional Sections */}
      <div className=" sm:mt-32 mt-10 ">
        <div className="  mx-10">
          <h2 className="text-3xl font-semibold text-[#2C2C2C]">About Us</h2>
          <p className="text-[#2C2C2C] mt-2">Welcome to Tourista.Tourista is a dynamic travel website designed to cater to the diverse needs of travelers across Asia, Europe, and America. Whether you're planning an intimate getaway or organizing a large group expedition, Tourista provides comprehensive travel services that simplify your journey. From personalized itineraries to group bookings, our platform ensures a seamless experience for both small and large groups. With a focus on creating memorable travel experiences, Tourista connects you with the best destinations, accommodations, and activities, making your travel dreams a reality.</p>
        </div>
        <div className="mt-8 mx-10">
          <h3 className="text-3xl font-semibold text-[#2C2C2C]">Mission</h3>
          <p className="text-[#2C2C2C] mt-2">Our mission at Tourista is to make the world more accessible by providing travelers with comprehensive, personalized, and user-friendly travel planning resources. We strive to empower every traveler to explore with confidence, ensuring that each journey is as unique and seamless as the individual embarking on it.</p>
        </div>
        <div className="mt-8 mx-10">
          <h3 className="text-3xl font-semibold text-[#2C2C2C]">Vision</h3>
          <p className="text-[#2C2C2C] mt-2">Our vision is to become the go-to platform for global travelers, recognized for our dedication to creating a more connected, open, and adventurous world. We aim to inspire millions to step out of their comfort zones, experience the diversity of our planet, and foster a deeper understanding and appreciation of different cultures through travel. At Tourista, we envision a future where travel is not just a luxury but an accessible, enriching experience for everyone.</p>
        </div>
       </div>

      {/* Team Section */}
      <div className=" py-12 text-center">
        <h2 className="text-3xl font-bold text-gray-800">Team & Founder</h2>
        <div className="flex flex-wrap justify-center gap-8 mt-8">
          {teamMembers.map((member, index) => (
            <div key={index} className="bg-white  rounded-lg shadow-lg w-64 h-[380px]">
              <img src={member.image} alt={member.image} className="rounded-t-lg  w-[260px] h-[280px] object-cover" />
              <h3 className="text-[16px] font-semibold text-gray-800">{member.name}</h3>
              <p className="text-gray-600">{member.role}</p>
              <div className="flex justify-center gap-4 mt-4 text-gray-500">
                <a href="https://www.facebook.com/">{member.socials.includes("facebook") && <FaFacebook className="text-xl hover:text-blue-600" />}</a>
                <a href="https://www.instagram.com">{member.socials.includes("instagram") && <FaInstagram className="text-xl hover:text-pink-500" />}</a>
                <a href="https://x.com/?lang=en">{member.socials.includes("times") && <FaTimes className="text-xl hover:text-black" />}</a>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* FAQ Section */}
      <div className="max-w-3xl mx-auto text-center mt-16 ">
        <h2 className="text-3xl font-bold text-gray-800">Frequently Asked Questions</h2>
      </div>
      <div className="mx-6 sm:mx-20 mt-10 space-y-4 mb-20">
        {faqs.map((faq, index) => (
          <div key={index} className="bg-white p-4 rounded-lg sm:w-[1120px] shadow-md border border-gray-200">
            <button className="w-full flex justify-between items-center text-left text-gray-800 font-semibold" onClick={() => toggleFAQ(index)}>
              {faq.question}
              {openIndex === index ? <FiMinus className="text-xl text-orange-500" /> : <FiPlus className="text-xl text-gray-500" />}
            </button>
            {openIndex === index && <p className="mt-2 text-gray-600">{faq.answer}</p>}
          </div>
        ))}
      </div>
      <Footer/>
    </div>
  );
};

export default AboutPage;
