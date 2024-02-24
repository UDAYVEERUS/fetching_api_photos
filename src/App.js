import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'

const App = () => {
  const [data, setData] = useState([])

  // create a new function for fetch API
  const fetchApi = async () => {
    const url = "https://jsonplaceholder.typicode.com/photos"
    const response = await fetch(url)
    const response_json = await response.json()
    // console.log(response_json,"here")
    // set all data to the setData state
    setData(response_json)
  }

  useEffect(() => {

    // calling the function
    fetchApi()
  }, [])

  return (
    <>
      <h1 className='flex justify-center text-4xl mt-4 italic text-red-700 mb-10'>SIMPLE FETCHING API FROM FAKEAPI "https://jsonplaceholder.typicode.com/photos" </h1><hr/>
      <div className='w-full mt-2 mx-auto grid grid-cols-5 gap-3'>
 
        {data && data.map((val, index) => {
          return (
            <div className='border shadow-xl' key={index}>
              <div className='w-full h-fit bg-slate-100'>
                <div className='flex justify-center'>
                  <img className='h-72 w-full' src={val.url ? val.url : ""} alt="_blank" />
                </div>
                <div className='flex justify-center font-medium'>Title : {val.title}</div>
                <div className='flex justify-center font-medium'>Price : {val.albumId}</div>
                {/* <div className='flex justify-center items-center px-2'>{val.description.substring(0, 40) + "..."}</div> */}
              </div>
            </div>
          )
        })}
      </div>
    </>
  )
}

export default App
