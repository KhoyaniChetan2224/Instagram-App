import React from "react";
import { Link } from "react-router-dom";
import BottomNav from "../BottomNav";

const Likebutton = () => {
  return (
    <div>
      <form>
        <section>
          {/* Aro, ID Name, ......! */}
          <div>
            <Link to="/OpenHomePage">
              <img
                className="h-6 mt-3 ml-4"
                src="https://cdn-icons-png.flaticon.com/512/109/109618.png"
              ></img>
            </Link>{" "}
            <div className="ml-[4rem] font-semibold -mt-[1.6rem] ">
              Notifications
            </div>
          </div>
          <section>
            <div>
              <Link to='/NewRequest'>
              <div className="w-[5rem] py-9 px-1 ml-5 -mt-3">
                <img
                  className="rounded-s-full size-[2.4rem] mt-2 rounded-e-full"
                  src="https://i.pinimg.com/736x/b0/a4/7b/b0a47b1d176e807bc4fe232cb52c5a4e.jpg"
                ></img>
              </div>
              <div className="w-[5rem] py-9 px-1 ml-[1.9rem] -mt-[6.6rem]">
                <img
                  className="rounded-s-full size-[2.4rem] mt-[0.4rem] bg-white border-[1px] shadow-inherit rounded-e-full"
                  src="https://i.pinimg.com/736x/03/a7/4e/03a74e598f5a928a1214d37d530ed085.jpg"
                ></img>
              </div>
              <div className="-mt-[5.4rem] ml-[5.7rem] text-black">
                Follow requests
                <div className="text-zinc-400 text-start ">
                  username + 10 others
                </div>
              </div>
              <div>
                <img
                  className="ml-[21.6rem] -mt-[2.5rem] size-[1rem]"
                  src="https://universidadeniltonlins.com.br/wp-content/plugins/supportboard/supportboard/media/icons/png/icon-arrow-right.png"
                ></img>
              </div>
              <div className="bg-blue-500 h-[0.6rem] w-[0.6rem] rounded-full -mt-3 ml-[20rem] "></div>
               </Link>
            </div>
          </section>
        </section>
        <section>
          <div className="mt-12 ml-5 text-black">Today</div>
          {/* 1 */}
          <div>
            <div className="">
              <div className="w-[5rem] py-3 px-1 ml-2 -mt-[1.5rem]">
                <img
                  className="rounded-s-full justify-between size-[3.6rem] mt-[1.8rem] rounded-e-full"
                  src="https://i.pinimg.com/736x/b0/a4/7b/b0a47b1d176e807bc4fe232cb52c5a4e.jpg"
                ></img>
              </div>
              <div className="flex justify-between font-mono -mt-2">
                {/* User name */}
                <div className="ml-[5rem] -mt-[4rem] text-sm font-sans text-[0.7rem] font-semibold">
                  bike._racer
                  <span className="-ml-[0.1rem] mt-[5rem] text-sm text-zinc-500 font-sans text-[0.7rem]">
                    {" "}
                    who
                    <br /> you might know, is on <br /> Instagram.{" "}
                    <span className="text-black font-semibold text[0.7rem]">
                      earth_king
                    </span>{" "}
                    1d{" "}
                  </span>
                  <div className="-ml-[24.3rem] mt-[1.9rem] text-sm text-zinc-500 font-sans text-[0.7rem]"></div>
                </div>
              </div>
              <div className="flex justify-between align-top">
                <button className="bg-blue-700 text-white -mt-[5rem] ml-[16.8rem] h-[2.0rem] w-[6.2rem] rounded-md">
                  Follow
                </button>
              </div>
            </div>
          </div>
          {/* 2 */}
          <div className="-mt-[2.5rem]">
            <div className="mb-[0.1rem]">
              <div className="w-[5rem] py-3 px-1 ml-2 -mt-[1.5rem]">
                <img
                  className="rounded-s-full justify-between size-[3.6rem] mt-[1.8rem] rounded-e-full"
                  src="https://i.pinimg.com/736x/03/a7/4e/03a74e598f5a928a1214d37d530ed085.jpg"
                ></img>
              </div>
              <div className="flex justify-between font-mono -mt-2">
                {/* User name */}
                <div className="ml-[5rem] -mt-[4rem] text-sm font-sans text-[0.7rem] font-semibold">
                  angel_girl
                  <span className="-ml-[0.1rem] mt-[5rem] text-sm text-zinc-500 font-sans text-[0.7rem]">
                    {" "}
                    who you might <br /> know, is on Instagram. 3d{" "}
                  </span>
                  <div className="-ml-[24.3rem] mt-[1.9rem] text-sm text-zinc-500 font-sans text-[0.7rem]"></div>
                </div>
              </div>
              <div className="flex justify-between align-top">
                <button className="bg-blue-700 text-white -mt-[4rem] ml-[16.8rem] h-[2.0rem] w-[6.2rem] rounded-md">
                  Follow
                </button>
              </div>
            </div>
          </div>
          {/* 3 */}
          <div className="">
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
                  mr._parfect
                  <span className="-ml-[0.1rem] mt-[5rem] text-sm text-zinc-500 font-sans text-[0.7rem]">
                    {" "}
                    who you might <br /> know, is on Instagram. 3d{" "}
                  </span>
                  <div className="-ml-[24.3rem] mt-[1.9rem] text-sm text-zinc-500 font-sans text-[0.7rem]"></div>
                </div>
              </div>
              <div className="flex justify-between align-top">
                <button className="bg-blue-700 text-white -mt-[4rem] ml-[16.8rem] h-[2.0rem] w-[6.2rem] rounded-md">
                  Follow
                </button>
              </div>
            </div>
          </div>
        </section>
        <section>
          <div className="mt-4 ml-5 text-black">Last 7 days</div>
          {/* 1 */}
          <div>
            <div className="">
              <div className="w-[5rem] py-3 px-1 ml-2 -mt-[1.5rem]">
                <img
                  className="rounded-s-full justify-between size-[3.6rem] mt-[1.8rem] rounded-e-full"
                  src="https://i.pinimg.com/736x/b0/a4/7b/b0a47b1d176e807bc4fe232cb52c5a4e.jpg"
                ></img>
              </div>
              <div className="flex justify-between font-mono -mt-2">
                {/* User name */}
                <div className="ml-[5rem] -mt-[4rem] text-sm font-sans text-[0.7rem] font-semibold">
                  bike._racer
                  <span className="-ml-[0.1rem] mt-[5rem] text-sm text-zinc-500 font-sans text-[0.7rem]">
                    {" "}
                    who
                    <br /> you might know, is on <br /> Instagram.{" "}
                    <span className="text-black font-semibold text[0.7rem]">
                      earth_king
                    </span>{" "}
                    1d{" "}
                  </span>
                  <div className="-ml-[24.3rem] mt-[1.9rem] text-sm text-zinc-500 font-sans text-[0.7rem]"></div>
                </div>
              </div>
              <div className="flex justify-between align-top">
                <button className="bg-blue-700 text-white -mt-[5rem] ml-[16.8rem] h-[2.0rem] w-[6.2rem] rounded-md">
                  Follow
                </button>
              </div>
            </div>
          </div>
        </section>
        <section>
          <div className="mt-1 ml-5 text-black">Last 30 days</div>
          {/* 1 */}
          <div>
            <div className="">
              <div className="w-[5rem] py-3 px-1 ml-2 -mt-[1.5rem]">
                <img
                  className="rounded-s-full justify-between size-[3.6rem] mt-[1.8rem] rounded-e-full"
                  src="https://i.pinimg.com/736x/b0/a4/7b/b0a47b1d176e807bc4fe232cb52c5a4e.jpg"
                ></img>
              </div>
              <div className="flex justify-between font-mono -mt-2">
                {/* User name */}
                <div className="ml-[5rem] -mt-[4rem] text-sm font-sans text-[0.7rem] font-semibold">
                  bike._racer
                  <span className="-ml-[0.1rem] mt-[5rem] text-sm text-zinc-500 font-sans text-[0.7rem]">
                    {" "}
                    who
                    <br /> you might know, is on <br /> Instagram.{" "}
                    <span className="text-black font-semibold text[0.7rem]">
                      earth_king
                    </span>{" "}
                    1d{" "}
                  </span>
                  <div className="-ml-[24.3rem] mt-[1.9rem] text-sm text-zinc-500 font-sans text-[0.7rem]"></div>
                </div>
              </div>
              <div className="flex justify-between align-top">
                <button className="bg-blue-700 text-white -mt-[5rem] ml-[16.8rem] h-[2.0rem] w-[6.2rem] rounded-md">
                  Follow
                </button>
              </div>
            </div>
          </div>
        </section>
        <div>
          <BottomNav />
        </div>
      </form>
    </div>
  );
};

export default Likebutton;
