import React from "react";

const NewsLetterBox = () => {
    const submitHandler = (e)=>{
        e.preventDefault()
    }
  return (
    <div className="text-center">
      <p className="text-2xl font-medium text-gray-800">
        Subscribe Now & get 20% off
      </p>
      <p className="text-gray-400 mt-3">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor
        consectetur, corporis blanditiis voluptates cumque dignissimos optio
        adipisci eveniet ducimus consequuntur architecto doloremque totam
        reiciendis libero molestias necessitatibus asperiores atque vero?
      </p>
      <form onSubmit={submitHandler} className="w-full sm:w-1/2 items-center flex mx-auto gap-3 my-6 border pl-3">
        <input
          type="email"
          required
          className="w-full sm:flex-1 outline-none"
          placeholder="Enter your Email"
        />
        <button
          type="submit"
          className="bg-black  text-white text-xs px-10 py-4"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default NewsLetterBox;
