
import { useEffect, useState } from 'react';
import { FaPinterest, FaYoutube, FaTwitter, FaInstagram ,FaFacebook} from 'react-icons/fa';
import { Link } from 'react-router-dom';

export const Footer = () => {
  const [year,setYear] = useState<number | null>(2024);
  useEffect(()=>{
    setYear(new Date().getFullYear());
  
  },[]);
console.log({year})

  return (
    <>
      {/* <!-- List Container -->    */}
      <footer className="w-screen overflow-hidden inset-x-0 bottom-0 w-screen  bg-veryDarkBlue bottom-0">
        {/* <!-- Flex Container --> */}
        <div className="w-full  flex flex-col-reverse justify-between px-6 py-10 mx-auto space-y-8 md:flex-row md:space-y-0">
          {/* <!-- Logo and social links container --> */}
          <div className="flex flex-col-reverse items-center justify-between space-y-12 md:flex-col md:space-y-0 md:items-start">
            <div className="mx-auto my-6 text-center text-white md:hidden">
              Copyright &copy; {year}, All Rights Reserved
            </div>
            {/* <!-- Logo --> */}
            <div>
              <img src="images/logo.png" className="h-8" alt="" />
            </div>
            {/* <!-- Social Links Container --> */}
            <div className="flex justify-center space-x-4">
              {/* <!-- Link 1 --> */}
              <a href="#">
              <FaFacebook className="text-blue-500 text-2xl mr-2" />
              </a>
              {/* <!-- Link 2 --> */}
              <a href="#">
              <FaYoutube className="text-red-600 text-2xl" />
              </a>
              {/* <!-- Link 3 --> */}
              <a href="#">
              <FaTwitter className="text-blue-500 text-2xl" />
              </a>
              {/* <!-- Link 4 --> */}
              <a href="#">
              <FaPinterest className="text-red-600 text-2xl" />
              </a>
              {/* <!-- Link 5 --> */}
              <a href="#">
              <FaInstagram className="bg-gradient-to-r from-purple-500 to-pink-500 text-white text-2xl p-1 rounded-full" />
    
              </a>
            </div>
          </div>
          {/* <!-- List Container -->    */}
          <div className="flex justify-around space-x-32">
            <div className="flex flex-col space-y-3 text-white">
              <a href="/" className="hover:text-greenMain">
                Home
              </a>
              <Link to="howItWorks" className="hover:text-greenMain">
                How It works
              </Link>
              {/* <a href="#" className="hover:text-greenMain">
                Products
              </a> */}
              <Link to="/aboutuUs" className="hover:text-blue">
                About
              </Link>
            </div>
            {/* <div className="flex flex-col space-y-3 text-white">
              <a href="#" className="hover:text-greenMain">
                Careers
              </a>
              <a href="#" className="hover:text-greenMain">
                Community
              </a>
              <a href="#" className="hover:text-greenMain">
                Privacy Policy
              </a>
            </div> */}
          </div>

          {/* <!-- Input Container --> */}
          <div className="flex flex-col justify-between">
            <form>
              <div className="flex pl-0 flex-row gap-2">
                <input
                  type="text"
                  className="flex-1 md:px-4 px-2 indent-2 rounded-full focus:outline-none"
                  placeholder="subscribe to our emails"
                />
                <button className="md:px-6 px-4 py-2 text-white rounded-full bg-greenMain hover:bg-darkGreen focus:outline-none">
                  Send
                </button>
              </div>
            </form>
            <div className="hidden text-white md:block">
              Copyright &copy; {year}, All Rights Reserved
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};
