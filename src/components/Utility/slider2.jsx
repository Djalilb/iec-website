import Image from 'next/image'
import { useEffect, useState } from 'react'

function Slider2({Slides, current, theme}) {


  if (!Array.isArray(Slides) || Slides.length <= 0) {
    return null
  }

  return (
    <>
    

      <div
        className='carousel-inner  h-max'
        style={{ transform: `translateX(${-current * 100}%)`}}>
        {Slides.map((slide, index) => {
          return (
            <div
              key={index}
              className='inline-block w-full md:pr-16 px-12 md:px-0'>
               <h2 style={{ whiteSpace: "pre-line" }} className={`text-7xl font-extrabold my-6 ${theme == "dark" ? slide.color[0] : slide.color[1]}`}>{slide.title.replace('<br/>', '\n')}</h2>
            <p className="my-6 leading-7 ">
              {slide.content}
            </p>
            <button className=" bg-iec-orange-2-500 rounded-3xl px-6 py-3 text-black  font-bold ">Découvrir plus</button>
            </div>
          )
        })}
      </div>
    </>
  )
}

export default Slider2
