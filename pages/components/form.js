import React from 'react'
import { useRef } from 'react';
import emailjs from '@emailjs/browser';


function Form() {
    const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_47roltt', 'template_w7clena', form.current, 'YQYfdC3f93pjdvBfi')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });

    e.target.reset()
  };

  return (
    
<form ref={form} onSubmit={sendEmail} className="lg:mb-5 flex w-full max-w-sm space-x-3">
    <div className="w-full max-w-2xl px-5 py-10 m-auto mt-10  rounded-lg shadow dark:bg-gray-800">
        <div className="mb-6  font-light text-center text-gray-800 dark:text-white">
    
               <span className='text-2xl lg:text-4xl text-white font-semibold'>{`I'd love to hear from you!`}</span>
               <span className='text-gray-400 mt-2 block'>Leave a message and I will get back to you soon.</span>
        
        </div>
        <div className="grid max-w-xl grid-rows-2 gap-4 m-auto">
            <div className="col-span-2">
                <div className=" relative ">
                    <input type="text" id="contact-form-name" className="project-box-color  border-transparent flex-1 appearance-none  w-full py-5 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent" name = "name" placeholder="Name"/>
                    </div>
                </div>
                <div className="col-span-2 lg:col-span-2">
                    <div className=" relative ">
                        <input type="text" id="contact-form-email" className="project-box-color  w-full border-transparent flex-1 appearance-none  w-full py-5 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent" name="emailaddress" placeholder="email"/>
                        </div>
                    </div>
                    <div className="col-span-2">
                        <label className="text-gray-700" htmlFor="name">
                            <textarea className="project-box-color  flex-1 appearance-none  w-full py-3 px-4 bg-white text-gray-700 placeholder-gray-400 r text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent" id="comment" placeholder="Enter your comment"  name="message" rows="5" cols="40">
                            </textarea>
                        </label>
                    </div>
                    <div className="col-span-2 text-right">
                        <button type="submit" className="py-3 px-4 bg-gradient-to-br from-purple-900 to-pink-700 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-500 dark:focus:ring-blue-800 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg ">
                            Send
                        </button>
                    </div>
                </div>
            </div>
        </form>

  )
}

export default Form