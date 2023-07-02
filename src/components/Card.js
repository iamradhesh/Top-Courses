import React from 'react'
import {FcLike,FcLikePlaceholder} from 'react-icons/fc';

import { toast } from'react-toastify';

const Card = (props) => {
  let course=props.course;
  let likedCourses=props.likedCourses;
  let setLikedCourses=props.setLikedCourses;

  function clickHandler(){
    //logic

    if(likedCourses.includes(course.id)){
      //phle se liked hua pda h

      setLikedCourses((prev)=>prev.filter((id)=>(id!==course.id)));
      toast.warning("like removed");
    }

    else{
      if(likedCourses.length===0)
      {
        setLikedCourses([course.id]);
       
      }
      else{
        setLikedCourses((prev)=>[...prev, course.id]);
        
      }
      toast.success("like added");
    }

  }
  return (
    <div className='w-[300px] bg-slate-800 bg-opacity-80 rounded-md overflow-hidden'>
        <div className='relative '>
          <img src={course.image.url}></img>

          <div className='absolute w-[40px] h-[40px] bg-white rounded-full
          right-2 bottom-3 grid place-items-center'>
              <button onClick={clickHandler}>
                 {
                  likedCourses.includes(course.id)?(<FcLike fontSize="1.75rem"/>):(<FcLikePlaceholder fontSize="1.75rem"/>) 
                 } 
              </button>
        </div>
        </div>

       
        <div className='p-4'>
          <p className='text-white font-semibold text-lg leading-6'>{course.title}</p>
          <p className='text-white mt-2 '>
                 {
                    course.description.length>100?(course.description.substr(0,100)+"..."):(course.description)
                 }
          </p>
        </div>
    </div>
  )
}

export default Card;
