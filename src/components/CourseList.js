import React from 'react'
import useCourseStore from '../app/courseStore'

const CourseList = () => {
    const {courses , removeCourse , toggleCourseState} = useCourseStore((state)=>({
        courses:state.courses,
        removeCourse:state.removeCourse,
        toggleCourseState:state.toggleCourseState
    }))
  return (
   <>
    <ul>

      {courses.map((course ,i) =>{
        return (
            <React.Fragment key={i}>
            <li className={`course-item`}
            style={{
                backgroundColor:course.completed ? "green" : "white" 
            }}
            >
        <span className='course-item-col-1'>
            <input type='checkbox' checked={course.completed}
                onChange={(e)=>{
                    toggleCourseState(course.id)
                }}
            />
        </span>
        <span style={{color:"black"}}>{course?.title}</span>
        <button 
        onClick={()=>{
            removeCourse(course?.id)
        }}
        className='delete-btn'>Delete</button>
            </li>
            </React.Fragment>
        )
      })}
    </ul>
   </>
  )
}

export default CourseList
