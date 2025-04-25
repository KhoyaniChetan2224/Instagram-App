import React from "react";
import { Link } from "react-router-dom";
import logoinsta from "./img/logoinsta.png";
import dp2 from "./img/dp-2.jpg";
import mahadev from "./img/mahadev.jpg";
import BottomNav from "./BottomNav";
import { Home, PlusSquare, Search, Video } from "lucide-react";

const OpenHomePage = () => {
    return (
        <div>
            <form className="h-screen">
                <section className="border-gray-100 border-[1px] h-[41.7rem] scroll-ml-10">
                    <div className="h-screen">
                        {/*  Insta Logo, Like, Messege */}
                        <section>
                            <div className="w-11/12 px-2 py-1 flex">
                                <section className="flex">
                                    <section className="">
                                        <div className="flex-auto flex">
                                            {/* Insta Logo */}
                                            <img
                                                className="size-2/5 -ml-1 mt-2"
                                                src={logoinsta}
                                                alt="logoinsta"
                                            />
                                        </div>
                                    </section>
                                    <section className="size-[10rem] top-4 py-3 -mr-8">
                                        <div className="flex gap-4">
                                            {/* Like, Messege */}
                                            <Link to="/Likebutton">
                                                <img
                                                    className="size-[1.9rem] mr-8 justify-center flex"
                                                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcScoeUkY5FPvB1tE6GCv7w7MqkpeKj0MUSqDg&s"
                                                />
                                            </Link>
                                            <section className="mt-[0.12rem]">
                                                <div className="flex size-[2rem] top-3 items-start justify-between">
                                                    <Link to="/Massege">
                                                        <img
                                                            className="size-9/12"
                                                            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTejT6rId4Rtx_YAkTHxFRQaVfnel_J5a1_lw&s"
                                                        ></img>
                                                    </Link>
                                                </div>
                                            </section>
                                        </div>
                                    </section>
                                </section>
                            </div>
                            <div>
                                <p className="w-full bg-white shadow-md p-4 flex justify-between items-center -mt-[9rem] px-6"></p>
                            </div>
                        </section>
                        {/* All Story`s */}
                        <section className="">
                            <div className="">
                                <section className="items-start gap-[0.2rem] flex-row flex">
                                    <Link to="/YourStory">
                                        <div className="w-[5rem] py-5 px-1 ml-2 -mt-3">
                                            <img
                                                className="rounded-s-full rounded-e-full"
                                                src="https://i.pinimg.com/736x/40/03/a6/4003a6ad8040997e6918d531e29bb4ac.jpg"
                                            />

                                            <div className="flex-col ">
                                                <img
                                                    className="w-[1.5rem] ml-[3.2rem] -mt-[1.5rem] flex justify-around items-center"
                                                    src="https://cdn-icons-png.flaticon.com/512/5822/5822053.png"
                                                ></img>
                                            </div>
                                        </div>
                                        <div className="flex-col">
                                            <div className="ml-5 -mt-5 text-[14px]">your story</div>
                                        </div>
                                    </Link>
                                    <Link to="/YourStory">
                                        <div className="w-[5rem] py-5 px-1 ml-2 -mt-3">
                                            <img
                                                className="rounded-s-full size-[3.8rem] mt-2 rounded-e-full"
                                                src={dp2}
                                                alt="dp-2"
                                            />
                                            <div className="flex-col ">
                                                <img
                                                    className="-mt-[4.19rem] flex -ml-[5px] justify-around items-center"
                                                    src="https://702pros.com/wp-content/uploads/2021/01/Instagram-Ring.png"
                                                ></img>
                                            </div>
                                        </div>
                                        <div className="flex-col">
                                            <div className="ml-5 -mt-5 text-[14px]">username</div>
                                        </div>
                                    </Link>
                                    <Link to="/YourStory">
                                        <div className="w-[5rem] py-5 px-1 ml-2 -mt-3">
                                            <img
                                                className="rounded-s-full size-[3.8rem] mt-2 rounded-e-full"
                                                src="https://i.pinimg.com/736x/ec/68/61/ec686102621b6103a241d80bd684bac8.jpg"
                                            ></img>
                                            <div className="flex-col ">
                                                <img
                                                    className="-mt-[4.19rem] flex -ml-[5px] justify-around items-center"
                                                    src="https://702pros.com/wp-content/uploads/2021/01/Instagram-Ring.png"
                                                ></img>
                                            </div>
                                        </div>
                                        <div className="flex-col">
                                            <div className="ml-5 -mt-5 text-[14px]">username</div>
                                        </div>
                                    </Link>
                                    <Link to="/YourStory">
                                        <div className="w-[5rem] py-5 px-1 ml-2 -mt-3">
                                            <img
                                                className="rounded-s-full size-[3.8rem] mt-2 rounded-e-full"
                                                src="https://i.pinimg.com/736x/2b/26/e0/2b26e0d569e4a43940b7a75c6f82b782.jpg"
                                            ></img>
                                            <div className="flex-col ">
                                                <img
                                                    className="-mt-[4.13rem] flex -ml-[5.5px] justify-around items-center"
                                                    src="https://702pros.com/wp-content/uploads/2021/01/Instagram-Ring.png"
                                                ></img>
                                            </div>
                                        </div>
                                        <div className="flex-col">
                                            <div className="ml-5 -mt-5 text-[14px]">username</div>
                                        </div>
                                    </Link>
                                </section>
                            </div>
                        </section>
                        {/* round shap story, User name, Location, three dots*/}
                        <section>
                            <div>
                                <p className="w-full bg-white shadow-md p-7 flex justify-between -mt-[3.2rem] items-center px-4"></p>
                            </div>
                            <div className="flex">
                                {/* round shap story */}
                                <Link to="/YourStory">
                                    <div className="w-[5rem] py-4 px-1 ml-2 -mt-3">
                                        <img
                                            className="rounded-s-full size-[3.3rem] mt-2 rounded-e-full"
                                            src="https://i.pinimg.com/736x/45/13/4a/45134a235dbf2c8cb57332f629620eb7.jpg"
                                        ></img>
                                        <div className="flex-col ">
                                            <img
                                                className="-mt-[3.6rem] size-[4rem] flex -ml-[5.5px] justify-around items-center"
                                                src="https://702pros.com/wp-content/uploads/2021/01/Instagram-Ring.png"
                                            ></img>
                                        </div>
                                    </div>
                                </Link>
                                <div className="flex justify-between font-medium">
                                    {/* User name */}
                                    <div className="mr-4 -ml-1 flex mt-[1rem] text-sm font-sans text-[1rem]">
                                        C$K._024
                                        <div className="-ml-[3.5rem] mt-6 text-sm font-sans text-[0.9rem]">
                                            Ahamdabad-अहमदाबाद
                                        </div>
                                    </div>
                                </div>
                                <div className="flex justify-between align-top">
                                    <img
                                        className="h-6 mt-5 ml-[6rem]"
                                        src="https://cdn-icons-png.freepik.com/512/7066/7066144.png"
                                    ></img>
                                </div>
                            </div>
                            <div className="w-full bg-white shadow-md p-7 flex justify-between -mt-[4.2rem] items-center px-4"></div>
                            <div>
                                {/* Image */}
                                <img className="size-[25rem]" src={mahadev} alt="mahadev" />
                            </div>
                        </section>
                        {/* Like, Massege, Shara, Save */}
                        <section>
                            <div>
                                {/* Like, Massege, Shara, Save */}
                                <section className="size-[10rem] top-4 py-3 ">
                                    <div className="flex gap-4">
                                        {/* Like */}
                                        <Link to="/#">
                                            <img
                                                className="size-[2.5rem] -mt-[0.5rem] justify-center flex"
                                                src="https://media.istockphoto.com/id/1439973042/vector/red-heart-flat-icon-the-symbol-of-love-vector-illustration.jpg?s=612x612&w=0&k=20&c=i2vL1DR3XaqPcLAUBiaQzeQOj8uqksXED6wI66MO3h0="
                                            />
                                        </Link>{" "}
                                        <div className="-ml-5 ">150</div>
                                        <section className="gap-4">
                                            {/* Massege */}
                                            <div className="size-[2.5rem] gap-2 -mt-[0rem] justify-center">
                                                <Link to="/#">
                                                    <img
                                                        className="-ml-3 gap-2 -mt-[0.4rem] size-[2.5rem]"
                                                        src="https://cdn2.iconfinder.com/data/icons/instagram-outline/19/8-512.png"
                                                    ></img>{" "}
                                                    <div className="ml-7 -mt-8 ">25</div>
                                                </Link>
                                            </div>
                                            {/* Shara */}
                                            <div className="size-[2.5rem] gap-2 -mt-[0rem] justify-center">
                                                <Link to="/#">
                                                    <img
                                                        className="ml-[3.5rem] gap-2 -mt-[31px] size-[1.8rem]"
                                                        src="https://cdn-icons-png.flaticon.com/512/5728/5728145.png"
                                                    ></img>{" "}
                                                    <div className="ml-[5.6rem] -mt-[30px] ">2</div>
                                                </Link>
                                            </div>
                                            {/* Save */}
                                            <div className="size-[2.5rem] gap-2 -mt-[0rem] justify-center">
                                                <Link to="/#">
                                                    <img
                                                        className="ml-[16.5rem] gap-2 -mt-[40px] size-[1.5rem]"
                                                        src="https://cdn-icons-png.flaticon.com/512/5662/5662990.png"
                                                    ></img>
                                                </Link>
                                            </div>
                                        </section>
                                    </div>
                                </section>
                                <div className="w-full bg-white shadow-inner p-1 flex justify-between -mt-[7rem] items-center px-4"></div>
                                <div></div>
                            </div>
                        </section>
                    </div>
                </section>
                <div>
                    < BottomNav />
                </div>
            </form>            
        </div>
    );
};

export default OpenHomePage;
