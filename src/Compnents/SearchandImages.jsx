import {React,useState,useEffect,useRef} from 'react'

const SearchandImages = () => {
    const [images, setimages] = useState([])
    const [searchQ, setsearchQ] = useState("")
    const [modalDataa, setmodalDataa] = useState({})
    useEffect( () => {
      fetch(`https://api.unsplash.com/photos/?client_id=U2gdHPVmNWavRzZxvK9MR1ap9PPonWD0uXgfwZGg1lg`)
      .then(res=>res.json())
      .then(ress=>setimages(ress))
      .catch(err=>console.log(err))
    }, [])

    function searchForImages(){
      fetch(`https://api.unsplash.com/search/photos?query=${searchQ}&client_id=U2gdHPVmNWavRzZxvK9MR1ap9PPonWD0uXgfwZGg1lg`)
      .then(res=>res.json())
      .then(ress=> setimages(ress.results))
      .catch(err => console.log(err))
    }
    const modalRef = useRef(null);
    function showModal(ee){
      const modalDataaCopy = JSON.parse(JSON.stringify(ee));
      setmodalDataa(modalDataaCopy)
      if(modalRef.current){
        modalRef.current.classList.remove('hidden');
        modalRef.current.scrollIntoView({ behavior: 'smooth' });
      }
    }    
    function closeModal(){
      modalRef.current.classList.add('hidden');
    }
  return (
    <div >
      {modalDataa['urls']? 
      <div ref={modalRef}  id="modal" className='border text-center border-[#fad3af] shadow-slate-700 hidden shadow-lg p-7 mx-20 z-30 md:w-[600px] md:mx-auto md:my-16' >
            <i onClick={closeModal} className="fa fa-close md:text-4xl text-2xl text-red-500 ml-[130px] md:ml-[470px] p-6 cursor-pointer"></i>
            <img className='mx-auto' src={`${modalDataa['urls']['small']}`} alt="" />
            <h2 className="text-sm md:text-2xl md:p-4 ">No Of Likes: {modalDataa.likes}</h2>
            <p className="text-sm md:text-2xl md:p-4 ">{modalDataa["alt_description"]}</p>
            <p className="text-sm md:text-2xl md:p-4 "> <i class="fa fa-instagram"></i> {modalDataa.user.instagram_username}</p>

        </div> : null
        }
      <div className='p-5 md:px-28 md:w-[750px] lg:w-1/2 mx-auto'>   
        <label for="search" class="mb-2 text-sm font-medium text-gray-900 sr-only "> Search for images</label>
        <div className="relative">
            <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <svg className="w-4 h-4  dark:text-[#fad3af]" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
                </svg>
            </div>
            <input onChange={(e)=>{setsearchQ(e.target.value)}} type="search" id="search" class="block w-full p-4 pl-10 text-sm text-[#fad3af] border border-[#fad3af] rounded-lg  focus:ring-[#fad3af] focus:border-[#fad3af] placeholder:text-[#fad3af] " placeholder="Search for images" required />
            <button onClick={searchForImages} type="submit" class="text-[#191970] absolute right-2.5 bottom-2.5 bg-[#fad3af] hover:bg-[#fad3af] focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 ">Search</button>
        </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3">
          {
            images.length == 0 ? <div
            class="inline-block h-8 w-8 animate-[spinner-grow_0.75s_linear_infinite] rounded-full bg-red-500 align-[-0.125em] opacity-0 motion-reduce:animate-[spinner-grow_1.5s_linear_infinite]"
            role="status">
            <span
              class="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]"
              >Loading...</span
            >
          </div>:
            images.map(image=>
              <div key={image.id} className="p-7 mx-7 mb-0 ">
                <a href="modal" onClick={(e)=>{e.preventDefault()}}> <img  onClick={(ee)=>{showModal(image)}} className=' rounded-xl cursor-pointer' loading='lazy' src={`${image.urls['full']}`} alt="" /></a>
                <div className="py-4 z-20 relative  bottom-14 bg-[#fad3af]">
                  <h2 className='text-[#191970]   text-lg rounded-md'> {image.user.name} <span className='text-[#191970] ml-[30px] md:ml-[130px] text-lg rounded-md'>No Of Likes: {image.likes} </span></h2>
                </div>
             </div>  
              )
          }
        </div>
    </div>
  )
}

export default SearchandImages
