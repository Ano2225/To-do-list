import React from 'react'

const Stats = ({toDoList}) => {
    let counterList = toDoList.length;

  return (
    <div className='stats'>
      <p className='notify'>
        {counterList === 0 ? 'You got everything! ':`Vous avez ${counterList} element(s) dans votre liste`}
      </p>
    </div>
  )
}

export default Stats
