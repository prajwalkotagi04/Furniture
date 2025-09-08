import React, { useState } from 'react';
import { video } from '../../assets/images';
import { FaRegPlayCircle } from 'react-icons/fa';

export default function VideoSection() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Background with video image */}
      <div
        style={{ backgroundImage: `url(${video})` }}
        className="h-160 bg-cover bg-center flex flex-col items-center justify-center mx-20"
      >
        {/* Button to open modal */}
        <button
          onClick={() => setIsOpen(true)}
          className="px-4 py-2 g "
        >
          <FaRegPlayCircle className='text-6xl text-white'/>
        </button>

        {/* Popup Modal */}
        {isOpen && (
          <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
            <div className="bg-white rounded-2xl shadow-lg w-200 h-150 p-6 relative">
              {/* Close button */}
              <button
                onClick={() => setIsOpen(false)}
                className="absolute top-3 right-3 text-gray-500 hover:text-gray-700"
              >
                ✕
              </button>

              <iframe
          width="750"
          height="500"
          src="https://www.youtube.com/embed/lCxcTsOHrjo?si=DJSy2cnyHT5iWl_F"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
          className="mt-6 rounded-lg shadow-lg"
        ></iframe>

              
            </div>
          </div>
        )}

        {/* Embedded YouTube video */}
        
      </div>
    </>
  );
}
