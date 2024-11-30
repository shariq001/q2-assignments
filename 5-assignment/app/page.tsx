
export default function Home() {
  return (
    <div>
      <div className="grid grid-cols-5 grid-rows-5 gap-4 mt-5 ml-3 mr-3 text-center text-white">
        <div className="bg-[#a36361] row-span-5 col-span-1 rounded-2xl text-white">
          <h1>Ag 1</h1>
          <p>2 of 10</p>
        </div>
        <div className="bg-[#eecc8c] h-[95vh] col-span-3 row-span-5 rounded-2xl col-start-2 row-start-1 text-black">
          <h1>Ag 2</h1>
          <p>2 of 10</p>
        </div>
        <div className="bg-[#a36361] text-white col-start-5 row-span-5 col-span-1 rounded-2xl">
          <h1>Ag 3</h1>
          <p>2 of 10</p>
        </div>
        <div className="col-start-2 row-start-2 col-span-1 w-[28vw] bg-[#ff004f] rounded-2xl ">
          <h1>Ag 4</h1> 
          <p>2 of 10</p>
        </div>
        <div className="col-start-3 ml-[10.8vw]  row-start-2 col-span-1 w-[28vw]  bg-[#ff004f] rounded-2xl">
          <h1>Ag 5</h1>
          <p>2 of 10</p>
        </div>
        <div className="col-start-2 row-start-3 bg-orange-600 row-span-3 rounded-2xl">
          <h1>Ag 6</h1>
          <p>2 of 10</p>
        </div>
        <div className="row-start-3 col-start-3 bg-[#718355] col-span-2 row-span-3 rounded-2xl">
          <h1>Ag 7</h1>
          <p>2 of 10</p>
        </div>
        <div className="row-start-4 col-start-3 bg-[#e9f5db] text-black rounded-2xl">
          <h1>Ag 8</h1>
          <p>2 of 10</p>
        </div>
        <div className="row-start-4 col-start-4 bg-[#e9f5db] text-black rounded-2xl">
          <h1>Ag 9</h1>
          <p>2 of 10</p>
        </div>
        <div className="col-start-3 row-start-5 col-span-2 bg-[#9eaba2]">
          <h1>Ag 10</h1>
          <p>2 of 10</p>
        </div>
      </div>
    </div>
  );
}