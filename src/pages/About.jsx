import React from 'react'
import Title from '../components/Title'
const About = () => {
  return (
    <div className=''>
      <div className='text-center py-8 text-3xl '>
        <Title text1={'About'} text2={'Us'} />
      </div>

      <div>
        <div className=' py-8 text-xl '>
          <Title text1={'WHY'} text2={'CHOOSE US'} />
        </div>

        <div className='w-full  flex flex-col sm:flex-row justify-between items-center'>
          <div className='border h-[200px] flex flex-col justify-center px-10 items-center w-full border-gray-300'>
            <div>
              <h1 className='font-bold text-[16px] mb-6'>Quality Assurance:</h1>
              <p>We meticulously select and vet each product to ensure it meets our stringent quality standards.</p></div>
          </div> 
          
          
           <div className='border h-[200px] flex  px-10 items-center w-full border-gray-300'>
          <div>
              <h1 className='font-bold text-[16px] mb-6'>Convenience:</h1>
            <p>With our user-friendly interface and hassle-free ordering process, shopping has never been easier.</p></div></div>
          
          
          
          <div className='border h-[200px] flex  px-10 items-center w-full border-gray-300'><div>
            <h1 className='font-bold text-[16px] mb-6'>Exceptional Customer Service:</h1>
            <p>Our team of dedicated professionals is here to assist you the way, ensuring your satisfaction is our top priority.</p></div></div>
        </div>
      </div>
    </div>
  )
}

export default About