import React from 'react'
import { Link } from 'react-router-dom'
import BottomNav from '../BottomNav'

const NewRequest = () => {
  return (
    <div>
      <form>
        <section>
          <div>
            <Link to="/Likebutton">
              <img
                className="h-6 mt-3 ml-4"
                src="https://cdn-icons-png.flaticon.com/512/109/109618.png"
              ></img>
            </Link>{" "}
            <div className="ml-[4rem] font-semibold -mt-[1.6rem] ">
              Follow requests
            </div>
            <Link to='/NewRequestManage'>
              <div className='ml-[19rem] -mt-[1.4rem] font-medium'>
                Manage
              </div>
            </Link>
          </div>
            
            {/* 1 */}
            <div className='mt-[2rem]'>
              <div className='mb-[0.1rem]'>
                  <div className="w-[5rem] py-3 px-1 ml-2 -mt-[1.5rem]">
                    <img
                      className="rounded-s-full justify-between size-[3.6rem] mt-[1.8rem] rounded-e-full"
                      src="https://i.pinimg.com/736x/03/a7/4e/03a74e598f5a928a1214d37d530ed085.jpg"
                    ></img>
                  </div>
                <div className="flex justify-between font-mono -mt-2">
                  {/* User name */}
                  <div className="ml-[5rem] -mt-[4rem] text-sm font-sans text-[0.7rem] font-semibold">
                    angel_girl._0909
                      {/* <span className="-ml-[0.1rem] mt-[5rem] text-sm text-zinc-500 font-sans text-[0.7rem]"> who you might <br/> know, is on Instagram. 3d </span> */}
                    <div className="-ml-[24.3rem] mt-[1.9rem] text-sm text-zinc-500 font-sans text-[0.7rem]">
                    </div>
                  </div>
                </div>
                <div className="flex justify-between align-top">
                  <button className='bg-blue-700 text-white -mt-[4rem] ml-[14.2rem] h-[1.8rem] w-[4.7rem] rounded-md'>Confirm</button>
                  <button className='bg-slate-50 text-black border-black border-0 -mt-[4rem] -ml-[4rem] text-center mr-[0.4rem] h-[1.7rem] w-[3.9rem] rounded-md'>Delete</button>
                </div>
              </div>
            </div>
            {/* 2 */}
            <div className=''>
              <div>
                  <div className="w-[5rem] py-3 px-1 ml-2 -mt-[1.5rem]">
                    <img
                      className="rounded-s-full justify-between size-[3.6rem] mt-[1.8rem] rounded-e-full"
                      src="https://i.pinimg.com/736x/c9/80/a3/c980a34f69460caf96ed5b11a9a063c2.jpg"
                    ></img>
                  </div>
                <div className="flex justify-between font-mono -mt-2">
                  {/* User name */}
                  <div className="ml-[5rem] -mt-[4rem] text-sm font-sans text-[0.7rem] font-semibold">
                    me._parfect_0908
                    {/* <span className="-ml-[0.1rem] mt-[5rem] text-sm text-zinc-500 font-sans text-[0.7rem]"> who you might <br/> know, is on Instagram. 3d </span> */}
                    <div className="-ml-[24.3rem] mt-[1.9rem] text-sm text-zinc-500 font-sans text-[0.7rem]">
                    </div>
                  </div>
                </div>
                <div className="flex justify-between align-top">
                  <button className='bg-blue-700 text-white -mt-[4rem] ml-[14.2rem] h-[1.8rem] w-[4.7rem] rounded-md'>Confirm</button>
                  <button className='bg-slate-50 text-black border-black border-0 -mt-[4rem] -ml-[4rem] text-center mr-[0.4rem] h-[1.7rem] w-[3.9rem] rounded-md'>Delete</button>
                </div>
              </div>
            </div>
            {/* 3 */}
            <div className=''>
              <div>
                  <div className="w-[5rem] py-3 px-1 ml-2 -mt-[1.5rem]">
                    <img
                      className="rounded-s-full justify-between size-[3.6rem] mt-[1.8rem] rounded-e-full"
                      src="https://i.pinimg.com/736x/c9/80/a3/c980a34f69460caf96ed5b11a9a063c2.jpg"
                    ></img>
                  </div>
                <div className="flex justify-between font-mono -mt-2">
                  {/* User name */}
                  <div className="ml-[5rem] -mt-[4rem] text-sm font-sans text-[0.7rem] font-semibold">
                    me._parfect_0908
                    {/* <span className="-ml-[0.1rem] mt-[5rem] text-sm text-zinc-500 font-sans text-[0.7rem]"> who you might <br/> know, is on Instagram. 3d </span> */}
                    <div className="-ml-[24.3rem] mt-[1.9rem] text-sm text-zinc-500 font-sans text-[0.7rem]">
                    </div>
                  </div>
                </div>
                <div className="flex justify-between align-top">
                  <button className='bg-blue-700 text-white -mt-[4rem] ml-[14.2rem] h-[1.8rem] w-[4.7rem] rounded-md'>Confirm</button>
                  <button className='bg-slate-50 text-black border-black border-0 -mt-[4rem] -ml-[4rem] text-center mr-[0.4rem] h-[1.7rem] w-[3.9rem] rounded-md'>Delete</button>
                </div>
              </div>
            </div>
            {/* 4 */}
            <div className=''>
              <div>
                  <div className="w-[5rem] py-3 px-1 ml-2 -mt-[1.5rem]">
                    <img
                      className="rounded-s-full justify-between size-[3.6rem] mt-[1.8rem] rounded-e-full"
                      src="https://i.pinimg.com/736x/c9/80/a3/c980a34f69460caf96ed5b11a9a063c2.jpg"
                    ></img>
                  </div>
                <div className="flex justify-between font-mono -mt-2">
                  {/* User name */}
                  <div className="ml-[5rem] -mt-[4rem] text-sm font-sans text-[0.7rem] font-semibold">
                    me._parfect_0908
                    {/* <span className="-ml-[0.1rem] mt-[5rem] text-sm text-zinc-500 font-sans text-[0.7rem]"> who you might <br/> know, is on Instagram. 3d </span> */}
                    <div className="-ml-[24.3rem] mt-[1.9rem] text-sm text-zinc-500 font-sans text-[0.7rem]">
                    </div>
                  </div>
                </div>
                <div className="flex justify-between align-top">
                  <button className='bg-blue-700 text-white -mt-[4rem] ml-[14.2rem] h-[1.8rem] w-[4.7rem] rounded-md'>Confirm</button>
                  <button className='bg-slate-50 text-black border-black border-0 -mt-[4rem] -ml-[4rem] text-center mr-[0.4rem] h-[1.7rem] w-[3.9rem] rounded-md'>Delete</button>
                </div>
              </div>
            </div>
            {/* 5 */}
            <div className=''>
              <div>
                  <div className="w-[5rem] py-3 px-1 ml-2 -mt-[1.5rem]">
                    <img
                      className="rounded-s-full justify-between size-[3.6rem] mt-[1.8rem] rounded-e-full"
                      src="https://i.pinimg.com/736x/c9/80/a3/c980a34f69460caf96ed5b11a9a063c2.jpg"
                    ></img>
                  </div>
                <div className="flex justify-between font-mono -mt-2">
                  {/* User name */}
                  <div className="ml-[5rem] -mt-[4rem] text-sm font-sans text-[0.7rem] font-semibold">
                    me._parfect_0908
                    {/* <span className="-ml-[0.1rem] mt-[5rem] text-sm text-zinc-500 font-sans text-[0.7rem]"> who you might <br/> know, is on Instagram. 3d </span> */}
                    <div className="-ml-[24.3rem] mt-[1.9rem] text-sm text-zinc-500 font-sans text-[0.7rem]">
                    </div>
                  </div>
                </div>
                <div className="flex justify-between align-top">
                  <button className='bg-blue-700 text-white -mt-[4rem] ml-[14.2rem] h-[1.8rem] w-[4.7rem] rounded-md'>Confirm</button>
                  <button className='bg-slate-50 text-black border-black border-0 -mt-[4rem] -ml-[4rem] text-center mr-[0.4rem] h-[1.7rem] w-[3.9rem] rounded-md'>Delete</button>
                </div>
              </div>
            </div>
            {/* 6 */}
            <div className=''>
              <div>
                  <div className="w-[5rem] py-3 px-1 ml-2 -mt-[1.5rem]">
                    <img
                      className="rounded-s-full justify-between size-[3.6rem] mt-[1.8rem] rounded-e-full"
                      src="https://i.pinimg.com/736x/c9/80/a3/c980a34f69460caf96ed5b11a9a063c2.jpg"
                    ></img>
                  </div>
                <div className="flex justify-between font-mono -mt-2">
                  {/* User name */}
                  <div className="ml-[5rem] -mt-[4rem] text-sm font-sans text-[0.7rem] font-semibold">
                    me._parfect_0908
                    {/* <span className="-ml-[0.1rem] mt-[5rem] text-sm text-zinc-500 font-sans text-[0.7rem]"> who you might <br/> know, is on Instagram. 3d </span> */}
                    <div className="-ml-[24.3rem] mt-[1.9rem] text-sm text-zinc-500 font-sans text-[0.7rem]">
                    </div>
                  </div>
                </div>
                <div className="flex justify-between align-top">
                  <button className='bg-blue-700 text-white -mt-[4rem] ml-[14.2rem] h-[1.8rem] w-[4.7rem] rounded-md'>Confirm</button>
                  <button className='bg-slate-50 text-black border-black border-0 -mt-[4rem] -ml-[4rem] text-center mr-[0.4rem] h-[1.7rem] w-[3.9rem] rounded-md'>Delete</button>
                </div>
              </div>
            </div>
          </section>
          <div>
            < BottomNav />
          </div>
      </form>
    </div>
  )
}

export default NewRequest
