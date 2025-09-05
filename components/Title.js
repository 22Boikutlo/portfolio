import React from 'react'

const Title = ({title,subTitle,align, font}) => { 
  return (
    <div className='heading'>
        <h1 className='title'>{title}</h1>
        <p className='subTitle'>{subTitle}</p>
    </div>
  )
}

export default Title