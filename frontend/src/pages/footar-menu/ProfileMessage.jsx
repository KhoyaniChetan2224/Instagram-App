import React, { Profiler } from 'react'
import { Link } from 'react-router-dom'
import ChatBox from '../chetabox/ChatBox'

const ProfileMessage = () => {
  return (
    <div>
      <form>
        <section>
            <div className='mt-3'>
              <Link to="/Massege">
                <img
                  className="h-6 mt-3 ml-4"
                  src="https://cdn-icons-png.flaticon.com/512/109/109618.png"
                ></img>
                <div className="flex-col">
                  <img
                      className="size-[2.3rem] ml-[49px] -mt-[1.9rem] -mb-[4.4rem]"
                      src="https://702pros.com/wp-content/uploads/2021/01/Instagram-Ring.png"
                  ></img>
                </div>
              </Link>{" "}
              <div className="w-[5rem] py-2 px-1 ml-[3rem] -mt-[4rem]">
                <img
                className="rounded-s-full justify-between size-[1.9rem] mt-[1.8rem] rounded-e-full"
                src="https://i.pinimg.com/736x/03/a7/4e/03a74e598f5a928a1214d37d530ed085.jpg"
                ></img>
            </div>
              <div className="ml-[5.8rem] font-serif -mt-[2.6rem] ">
                A B C D <span className="text-yellow-600 ml-1 text-[1rem]">⚜</span>
              </div>{" "}
              <div className="ml-[5.6rem] text-[0.8rem] font-mono -mt-[0.5rem] ">
                abcdef._024 <span className='text-zinc-400'> > </span>
              </div>{" "}

              <div className="h-screen justify-between align-top -mt-[1.5rem]">
                <img
                  className="ml-[17rem]  mt-[3px] size-[1.7rem]"
                  src="https://i.pinimg.com/736x/fd/f2/a8/fdf2a87d36fc2801d281cc0dd0780698.jpg"
                ></img>
                <img
                  className="ml-[20.2rem] -mt-[1.7rem] size-[1.6rem]"
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQgJwdAPoB4-Edk_85JrQyFoAOEi-1slFnrElpbgBg93yCoxQAu3AvBm-QJDixOldJE0wI&usqp=CAU"
                ></img>
              </div>
              
            </div>
        </section>

        <section>
            <div>
                <div className="w-[5rem] py-3 px-1 ml-[9rem]  -mt-[39rem]">
                    <img
                        className="rounded-s-full justify-between size-[75px] mt-[1.8rem] rounded-e-full"
                        src="https://i.pinimg.com/736x/03/a7/4e/03a74e598f5a928a1214d37d530ed085.jpg"
                    ></img>
                </div>
                <div>
                  <div className='text-center font-semibold'>abcdef._024</div>
                  <p className='text-center text-zinc-500'>237 followers. 1 posts <br/> Your follow each other on Instagram <br/> Your both follow abc._02 and 35 other</p>
                </div>
                <div>
                    <button className='bg-slate-200 text-black rounded-lg text-center font-medium mt-[0.7rem] ml-[8rem] w-[7rem] h-[1.9rem]'> View Profile</button>
                </div>
            </div>
        </section>

        <div>
              < ChatBox />
            </div>
        </form>
    </div>
  )
}

export default ProfileMessage