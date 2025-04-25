import React from 'react'
import postvideo from './img/postvideo.mp4'

const YourStory = () => {

  // const [query, setQuery] = useState("");
  // const items = [];

  // const filteredItems = items.filter((item) =>
  //   item.toLowerCase().includes(query.toLowerCase())
  // );

  return (
    <div className='h-screen'>
      <section>
        {/* Story File */}
        <section>
          <div>
            <video 
              className='-mt-[6rem] bg-white border-[2px] rounded-b-xl'
              src={postvideo} 
              autoPlay={true} 
              alt="postvideo"
            ></video>
          </div>
        </section>

        <section className='bg-black'>
          <div className='bg-black -mt-[0rem] border-[3rem]'>
            <div>

            </div>
          </div>
        </section>
      </section>

      {/* Scarch Bar Button */}
      {/* <div className=" max-w-md mx-auto">
        <input
          type="text"
          placeholder="Type Message hear...!"
          className="w-full p-2 border rounded-md"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <ul className="mt-2 border rounded-md p-2">
          {filteredItems.length > 0 ? (
            filteredItems.map((item, index) => (
              <li key={index} className="p-1 border-b last:border-b-0">
                {item}
              </li>
            ))
          ) : (
            <li className="p-1 text-gray-500">No results found</li>
          )}
        </ul>
      </div> */}
    </div>
    

  )
}

export default YourStory