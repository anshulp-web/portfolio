import { useState } from 'react';
import BannerLayout from '../components/Common/BannerLayout';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';
import { SiUpwork } from 'react-icons/si';
import { HiMail, HiUser } from 'react-icons/hi';
import { BsChatTextFill } from 'react-icons/bs';
import Fiverr_Icon from '../components/Fiverr_Icon';
import Footer from '../components/Footer';
import { Modal } from 'antd';

const Contact = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <BannerLayout>
      <div className=" px-4 py-2">
        <div className="my-6 text-Snow flex flex-col gap-y-5">
          <h1 className="text-lg font-bold">Contact Information</h1>
          <div className="flex flex-col md:flex-row items-center gap-5 text-xs">
            <div className="card_stylings w-full md:w-1/2 p-5 md:p-6 lg:p-8 flex flex-col gap-y-4">
              <div className="flex justify-between items-center">
                <span className="md:text-base">Country:</span>
                <span className="text-LightGray md:text-sm">India </span>
              </div>
              <div className="flex justify-between items-center">
                <span className="md:text-base">City:</span>
                <span className="text-LightGray md:text-sm">Dewas (M.P)</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="md:text-base">Previous Company:</span>
                <span className="text-LightGray md:text-sm">
                  Trisha Websoft
                </span>
              </div>
            </div>
            <div className="card_stylings rounded-xl w-full md:w-1/2 p-5 md:p-6 lg:p-8 flex flex-col gap-y-4">
              <div className="flex justify-between items-center">
                <span className="md:text-base">Email:</span>
                <span className="text-LightGray text-sm">
                  <a
                    href="https://mail.google.com/mail/?view=cm&fs=1&to=anshulp.dev@gmail.com"
                    target="_blank"
                  >
                    anshulp.dev@gmail.com
                  </a>
                </span>
              </div>
              <div className="flex justify-between items-center">
                <span className="md:text-base">Linkedin:</span>
                <span className="text-LightGray text-sm">
                  <a
                    href="https://www.linkedin.com/in/anshul-pandya1/"
                    target="_blank"
                  >
                    anshul-pandya1
                  </a>
                </span>
              </div>
              <div className="flex justify-between items-center">
                <span className="md:text-base">Phone:</span>
                <span className="text-LightGray text-sm">
                  <a href="tel:+918269481761">+91-8269481761</a>
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="h-16 w-full card_stylings text-xl sm:text-3xl flex gap-x-8 sm:gap-x-16 items-center justify-center text-Snow">
          <a
            className="hover:scale-125 ease-in-out duration-700"
            href="https://mail.google.com/mail/?view=cm&fs=1&to=anshulp.dev@gmail.com"
            target="_blank"
            rel="noreferrer"
          >
            <HiMail />
          </a>
          <a
            className="hover:scale-125 ease-in-out duration-700"
            href="https://github.com/anshulp-web"
            target="_blank"
            rel="noreferrer"
          >
            <FaGithub />
          </a>
          <a
            className="hover:scale-125 ease-in-out duration-700"
            href="https://www.linkedin.com/in/anshul-pandya1/"
            target="_blank"
            rel="noreferrer"
          >
            <FaLinkedin />
          </a>
        </div>
      </div>

      <Footer />
    </BannerLayout>
  );
};

export default Contact;
