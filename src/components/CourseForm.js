import React, { useState } from 'react'

import useCourseStore from '../app/courseStore'

const CourseForm = () => {

    const addCourse = useCourseStore((state) => state.addCourse)
   const [courseTitle, setCourseTitle] = useState('');

   const handleChange = (e)=>{
    setCourseTitle(e.target.value)
   }

   const handleClick =()=>{
    if (!courseTitle) {
        alert('please add a course title')
    }
    addCourse(
        {
            id:Math.ceil(Math.random()*100000),
            title: courseTitle
        }
    )
    setCourseTitle('')
   }
  return (
    <div className='form-container'>
      <input 
      value={courseTitle}
      onChange={handleChange}
      className='form-input'/>
      <button
      onClick={handleClick}
       className='form-submit-btn'>
        Add Course
      </button>
    </div>
  )
}

export default CourseForm
