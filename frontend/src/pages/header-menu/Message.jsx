import React from "react";
import { Link } from "react-router-dom";

const Message = () => {
  return (
    <div>
      <from>
        <div>
          {/* Aro, ID Name, ......! */}
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
                C$K._024
              </div>{" "}
 

              <div>
                <Link to='/..'>
                  <img
                    className="ml-[8.7rem] -mt-[1.2rem] size-[1rem]"
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDedovnlWUPFOn1C7ryewmpG_XIZsRTL5vIQ&s"
                  ></img>
                </Link>
                
              </div>{" "}



              <div className="h-screen justify-between align-top -mt-[1.5rem]">
                <img
                  className="ml-[17.5rem] -mt-[1.2rem] size-[1.7rem]"
                  src="https://i.pinimg.com/280x280_RS/f0/81/92/f081921dd2336a3015adcec4aa30f271.jpg"
                ></img>
                <img
                  className="ml-[21rem] -mt-[1.6rem] size-[1.6rem]"
                  src="https://www.svgrepo.com/show/73131/edit-button.svg"
                ></img>
              </div>
            </div>
          </section>

          {/* Meta Scarch bar */}
          <section>
            <div className="">
              <div className="flex items-center bg-gray-100 rounded-full -mt-[38.7rem] p-3 ml-3 w-[22rem]">
                {/* Left Side Icon */}
                <div className="w-5 h-5 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mr-3"></div>
                {/* Search Input */}
                <input
                  type="text"
                  placeholder="Ask Meta AI or Search"
                  className="bg-transparent focus:outline-none size-0 text-gray-600 w-full font-medium font-sans"
                />
              </div>
            </div>
          </section>

          {/* Profile Photo And Musice  */}
          <section className="items-start gap-0 justify-normal ml-[0.6rem] flex-row flex">
            <div className="flex justify-self-auto">
              <section>
                <div>
                  <Link to="/YourStory">
                    <div className="w-[5rem] py-5 px-1 ml-2 mt-[1.5rem]">
                      <img
                        className="rounded-s-full justify-between size-[4.5rem] mt-[1.8rem] rounded-e-full"
                        src="https://i.pinimg.com/736x/40/03/a6/4003a6ad8040997e6918d531e29bb4ac.jpg"
                      ></img>
                    </div>
                    <div className="flex-col">
                      <div className="ml-5 justify-center -mt-[1.3rem] text-[14px] text-clip text-gray-500 font-semibold">
                        Your note
                      </div>
                    </div>
                  </Link>
                  <div className="">
                    <div className="bg-kred-600 rounded-full w-[0.7rem] h-[0.7rem] ml-[0.3rem] -mt-[9rem]"></div>
                    {/* <div className='bg-red-600 rounded-full w-[0.7rem] h-[0.7rem] ml-[0.7rem] -mt-[9.9rem]'></div> */}
                    <input
                      type="text"
                      className="bg-white shadow-slate-700 shadow rounded-full w-[5rem] h-[3.2rem] placeholder:text-[0.9rem]"
                      placeholder="What`s on your mind?"
                    />
                  </div>
                </div>
              </section>
              <div>
                <Link to="/YourStory">
                  <div className="w-[5rem] py-5 px-1 ml-2 mt-5">
                    <img
                      className="rounded-s-full justify-between size-[4.5rem] mt-[1.8rem] rounded-e-full"
                      src="https://i.pinimg.com/736x/ec/68/61/ec686102621b6103a241d80bd684bac8.jpg"
                    ></img>
                  </div>
                  <div className="flex-col">
                    <div className="ml-5 justify-center -mt-4 text-[14px]">
                      username
                    </div>
                  </div>
                </Link>
                <div className="">
                  <div className="bg-kred-600 rounded-full w-[0.7rem] h-[0.7rem] ml-[0.3rem] -mt-[9rem]"></div>
                  <input
                    type="text"
                    className="bg-white shadow-slate-700 shadow rounded-full w-[5rem] h-[3.2rem] placeholder:text-[1rem]"
                    placeholder="Musice"
                  />
                </div>
              </div>
              <div>
                <Link to="/YourStory">
                  <div className="w-[5rem] py-5 px-1 ml-2 mt-5">
                    <img
                      className="rounded-s-full justify-between size-[4.5rem] mt-[1.8rem] rounded-e-full"
                      src="https://i.pinimg.com/736x/2b/26/e0/2b26e0d569e4a43940b7a75c6f82b782.jpg"
                    ></img>
                  </div>
                  <div className="flex-col">
                    <div className="ml-5 justify-center -mt-4 text-[14px]">
                      username
                    </div>
                  </div>
                </Link>
                <div className="">
                  <div className="bg-kred-600 rounded-full w-[0.7rem] h-[0.7rem] ml-[0.3rem] -mt-[9rem]"></div>
                  <input
                    type="text"
                    className="bg-white shadow-slate-700 shadow rounded-full w-[5rem] h-[3.2rem] placeholder:text-[1rem]"
                    placeholder="Musice"
                  />
                </div>
              </div>
              <div>
                <Link to="/YourStory">
                  <div className="w-[5rem] py-5 px-1 ml-2 mt-5">
                    <img
                      className="rounded-s-full justify-between size-[4.5rem] mt-[1.8rem] rounded-e-full"
                      src="https://i.pinimg.com/736x/51/ae/d9/51aed9b33cc19ba38864791206c6fd7e.jpg"
                    ></img>
                  </div>
                  <div className="flex-col">
                    <div className="ml-5 justify-center -mt-4 text-[14px]">
                      username
                    </div>
                  </div>
                </Link>
                <div className="">
                  <div className="bg-kred-600 rounded-full w-[0.7rem] h-[0.7rem] ml-[0.3rem] -mt-[9rem]"></div>
                  <input
                    type="text"
                    className="bg-white shadow-slate-700 shadow rounded-full w-[5rem] h-[3.2rem] placeholder:text-[1rem]"
                    placeholder="Musice"
                  />
                </div>
              </div>
            </div>
          </section>

          {/*  Messages, Request */}
          <section>
            <div className="gap-1">
              <div className="mt-[6rem] ml-4 text-base gap-1 font-semibold">
                {" "}
                Messages
                <div>
                  <img
                    className="h-7 size-[2rem] ml-[4.5rem] gap-3 -mt-6 -mb-8"
                    src="https://static.thenounproject.com/png/3648044-200.png"
                  ></img>
                </div>
                <div className="ml-[18rem] text-violet-500 font-mono font-light mt-1">
                  Request
                </div>
              </div>
            </div>
          </section>

          {/*  Messages */}
          <section>
            {/* 1 */}
            <div>
              <Link to="/YourStory">
                <div className="w-[5rem] py-3 px-1 ml-2 -mt-[1.5rem]">
                  <img
                    className="rounded-s-full justify-between size-[3.6rem] mt-[1.8rem] rounded-e-full"
                    src="https://i.pinimg.com/736x/03/a7/4e/03a74e598f5a928a1214d37d530ed085.jpg"
                  ></img>
                </div>
              </Link>
              <Link to='/ProfileMessage'>
              <div className="flex justify-between font-medium">
                {/* User name */}
                <div className="ml-[5rem] flex -mt-[4rem] text-sm font-serif text-[1rem]">
                  A B C D <span className="text-yellow-600 ml-1 text-[1rem]">⚜</span>
                  <div className="-ml-[4.3rem] mt-[1.3rem] text-sm text-zinc-900 font-sans text-[0.9rem]">
                    2 new messages
                  </div>
                </div>
              </div>
              </Link>
              <div className="flex justify-between align-top">
                <img
                  className="h-6 -mt-[3.5rem] ml-[20.2rem]"
                  src="https://t4.ftcdn.net/jpg/01/07/57/91/360_F_107579101_QVlTG43Fwg9Q6ggwF436MPIBTVpaKKtb.jpg"
                ></img>
              </div>
            </div>
            {/* 2 */}
            <div>
              <Link to="/YourStory">
                <div className="w-[5rem] py-3 px-1 ml-2 -mt-[1.5rem]">
                  <img
                    className="rounded-s-full justify-between size-[3.6rem] mt-[1.8rem] rounded-e-full"
                    src="https://i.pinimg.com/736x/b0/a4/7b/b0a47b1d176e807bc4fe232cb52c5a4e.jpg"
                  ></img>
                </div>
              </Link>
              <div className="flex justify-between font-medium">
                {/* User name */}
                <div className="ml-[5rem] flex -mt-[4rem] text-sm font-sans text-[1rem]">
                  Instagram User
                  <div className="-ml-[6.1rem] mt-[1.3rem] text-sm text-zinc-500 font-sans text-[0.9rem]">
                    Sent Today
                  </div>
                </div>
              </div>
              <div className="flex justify-between align-top">
                <img
                  className="h-6 -mt-[3.5rem] ml-[20.2rem]"
                  src="https://t4.ftcdn.net/jpg/01/07/57/91/360_F_107579101_QVlTG43Fwg9Q6ggwF436MPIBTVpaKKtb.jpg"
                ></img>
              </div>
            </div>
            {/* 3 */}
            <div>
              <Link to="/YourStory">
                <div className="w-[5rem] py-3 px-1 ml-2 -mt-[1.5rem]">
                  <img
                    className="rounded-s-full justify-between size-[3.6rem] mt-[1.8rem] rounded-e-full"
                    src="https://i.pinimg.com/736x/c9/80/a3/c980a34f69460caf96ed5b11a9a063c2.jpg"
                  ></img>
                </div>
              </Link>
              <div className="flex justify-between font-medium">
                {/* User name */}
                <div className="ml-[5rem] flex -mt-[4rem] text-sm font-sans text-[1rem]">
                  Instagram User
                  <div className="-ml-[6.1rem] mt-[1.3rem] text-sm text-zinc-500 font-sans text-[0.9rem]">
                    Sent a reel
                  </div>
                </div>
              </div>
              <div className="flex justify-between align-top">
                <img
                  className="h-6 -mt-[3.5rem] ml-[20.2rem]"
                  src="https://t4.ftcdn.net/jpg/01/07/57/91/360_F_107579101_QVlTG43Fwg9Q6ggwF436MPIBTVpaKKtb.jpg"
                ></img>
              </div>
            </div>
            {/* 4 */}
            <div>
              <Link to="/YourStory">
                <div className="w-[5rem] py-3 px-1 ml-2 -mt-[1.5rem]">
                  <img
                    className="rounded-s-full justify-between size-[3.6rem] mt-[1.8rem] rounded-e-full"
                    src="https://i.pinimg.com/736x/f1/31/30/f131307a406271bbf3b249fed172584e.jpg"
                  ></img>
                </div>
              </Link>
              <div className="flex justify-between font-medium">
                {/* User name */}
                <div className="ml-[5rem] flex -mt-[4rem] text-sm font-sans text-[1rem]">
                  Instagram User
                  <div className="-ml-[6.1rem] mt-[1.3rem] text-sm text-zinc-500 font-sans text-[0.9rem]">
                    4+ new messages
                  </div>
                </div>
              </div>
              <div className="flex justify-between align-top">
                <img
                  className="h-6 -mt-[3.5rem] ml-[20.2rem]"
                  src="https://t4.ftcdn.net/jpg/01/07/57/91/360_F_107579101_QVlTG43Fwg9Q6ggwF436MPIBTVpaKKtb.jpg"
                ></img>
              </div>
            </div>
            {/* 5 */}
            <div>
              <Link to="/YourStory">
                <div className="w-[5rem] py-3 px-1 ml-2 -mt-[1.5rem]">
                  <img
                    className="rounded-s-full justify-between size-[3.6rem] mt-[1.8rem] rounded-e-full"
                    src="https://i.pinimg.com/736x/12/da/6b/12da6b8f16824d73bc04811923ad79eb.jpg"
                  ></img>
                </div>
              </Link>
              <div className="flex justify-between font-medium">
                {/* User name */}
                <div className="ml-[5rem] flex -mt-[4rem] text-sm font-sans text-[1rem]">
                  Instagram User
                  <div className="-ml-[6.1rem] mt-[1.3rem] text-sm text-zinc-500 font-sans text-[0.9rem]">
                    Sent a reel by sukh_vilas.__92
                  </div>
                </div>
              </div>
              <div className="flex justify-between align-top">
                <img
                  className="h-6 -mt-[3.5rem] ml-[20.2rem]"
                  src="https://t4.ftcdn.net/jpg/01/07/57/91/360_F_107579101_QVlTG43Fwg9Q6ggwF436MPIBTVpaKKtb.jpg"
                ></img>
              </div>
            </div>
            {/* 6 */}
            <div>
              <Link to="/YourStory">
                <div className="w-[5rem] py-3 px-1 ml-2 -mt-[1.5rem]">
                  <img
                    className="rounded-s-full justify-between size-[3.6rem] mt-[1.8rem] rounded-e-full"
                    src="https://i.pinimg.com/736x/b7/40/d9/b740d99d23397856b80e3c0eab1cbaf2.jpg"
                  ></img>
                </div>
              </Link>
              <div className="flex justify-between font-medium">
                {/* User name */}
                <div className="ml-[5rem] flex -mt-[4rem] text-sm font-sans text-[1rem]">
                  Instagram User
                  <div className="-ml-[6.1rem] mt-[1.3rem] text-sm text-zinc-500 font-sans text-[0.9rem]">
                    Sent Today
                  </div>
                </div>
              </div>
              <div className="flex justify-between align-top">
                <img
                  className="h-6 -mt-[3.5rem] ml-[20.2rem]"
                  src="https://t4.ftcdn.net/jpg/01/07/57/91/360_F_107579101_QVlTG43Fwg9Q6ggwF436MPIBTVpaKKtb.jpg"
                ></img>
              </div>
            </div>
            {/* 7 */}
            <div>
              <Link to="/YourStory">
                <div className="w-[5rem] py-3 px-1 ml-2 -mt-[1.5rem]">
                  <img
                    className="rounded-s-full justify-between size-[3.6rem] mt-[1.8rem] rounded-e-full"
                    src="https://i.pinimg.com/736x/f7/55/8d/f7558d46147ae7ca47d36da73958070c.jpg"
                  ></img>
                </div>
              </Link>
              <div className="flex justify-between font-medium">
                {/* User name */}
                <div className="ml-[5rem] flex -mt-[4rem] text-sm font-sans text-[1rem]">
                  Instagram User
                  <div className="-ml-[6.1rem] mt-[1.3rem] text-sm text-zinc-500 font-sans text-[0.9rem]">
                    Sent Today
                  </div>
                </div>
              </div>
              <div className="flex justify-between align-top">
                <img
                  className="h-6 -mt-[3.5rem] ml-[20.2rem]"
                  src="https://t4.ftcdn.net/jpg/01/07/57/91/360_F_107579101_QVlTG43Fwg9Q6ggwF436MPIBTVpaKKtb.jpg"
                ></img>
              </div>
            </div>
          </section>
        </div>
      </from>
    </div>
  );
};

export default Message;
