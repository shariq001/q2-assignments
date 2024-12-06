import React from 'react'

const Home = () => {
  return (
    <div className="relative h-screen bg-cover bg-center bg-[url(/images/back.png)]">
      <div className="absolute inset-0 bg-white  bg-opacity-30"></div>

      <div className="relative z-10 flex items-center justify-center h-full text-center text-white">
        <h1 className="text-4xl font-bold">Clear Text Over a Dimmed Background</h1>
        <p className="mt-4 text-lg">This text is clearly visible due to the dimmed background.</p>
      </div>
    </div>
  )
}

export default Home