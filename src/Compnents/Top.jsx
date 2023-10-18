import React from 'react'
import illus  from '../Images/illus.png'

const Top = () => {
    // #feddbf
  return (
    <>
    <div className='bg-[#feddbf] p-7'>
        <h1 className="text-center mx-7 text-[#191970]  text-md md:text-2xl font-medium capitalize  drop-shadow-"md >📷 Image Hunt - Your hunt for awesome images ends here  🏞</h1>
    </div>
 
    <div className=" mx-7 my-2 flex  flex-col md:flex-row ">
        <div className='p-2 md:p-4 my-auto mx-2 md:text-xl text-[#191970] font-medium' >Hello, I'm Trish, and I'm submitting the assignment I received from Internshala. I've diligently followed the assignment instructions to ensure it meets the required criteria. I hope you find my work to be of high quality. I'm open to any feedback that can help me. Thank you for the opportunity! </div>
        <div className='p-2' > <img  className='w-[205px] md:p-4 mx-auto h-[205px] md:h-[300px] md:w-[85rem]' src={illus} alt="" /> </div> 
    </div>
  </>
  )
}

export default Top

