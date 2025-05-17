import React, { useEffect, useState } from "react";
import BottomNav from "../BottomNav";
import { Link } from "react-router-dom";
import { Camera, Grid, PlusCircle, Heart, Radio, Sparkles, LockIcon } from "lucide-react";
import axios from "axios";

const Profile = () => {
  const [profile, setProfile] = useState(null);
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [open, setOpen] = useState(false);
  const [isOpen, setIsOpen] = useState(true);
  const [storyOpen, setStoryOpen] = useState(false);
  const [activeTab, setActiveTab] = useState("posts");

  useEffect(() => {
    const fetchProfileAndPosts = async () => {
      const token = localStorage.getItem("token");
      if (!token) return;
      try {
        const profileRes = await axios.get(
          `${import.meta.env.VITE_BASE_URL}/users/profile`,
          { headers: { Authorization: `Bearer ${token}` } }
        );
        setProfile(profileRes.data);

        const postsRes = await axios.get(
          `${import.meta.env.VITE_BASE_URL}/users/user-posts`,
          { headers: { Authorization: `Bearer ${token}` } }
        );
        setPosts(postsRes.data);
      } catch (err) {
        console.error("Failed to fetch profile or posts:", err);
      }
      setLoading(false);
    };
    fetchProfileAndPosts();
  }, []);

  const menuItems = [
    { label: "Reel", icon: <Camera size={20} /> },
    { label: "Post", icon: <Grid size={20} /> },
    { label: "Story", icon: <PlusCircle size={20} /> },
    { label: "Story highlight", icon: <Heart size={20} /> },
    { label: "Live", icon: <Radio size={20} /> },
    { label: "AI", icon: <Sparkles size={20} />, isNew: true },
  ];

  const tabs = [
    { id: "posts", label: "Posts" },
    { id: "videos", label: "Videos" },
    { id: "tagged", label: "Tagged" },
  ];

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const storyButton = () => {
    setStoryOpen(!storyOpen);
  };

  if (loading) return <div>Loading...</div>;

  return (
    <div>
      <form>
        {/* Header */}
        <section>
          <div>
            <LockIcon className="px-[0.2rem] ml-[0.4rem] mt-1" />
            <div className="-mt-[1.4rem] ml-8 font-medium" alt="username">
              {profile?.username }
            </div>
            <div>
              <img
                className="ml-[6.5rem] -mt-[1.2rem] size-[0.9rem]"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDedovnlWUPFOn1C7ryewmpG_XIZsRTL5vIQ&s"
              ></img>
            </div>
            <section className="h-screen">
              <div>
                <img
                  className="ml-[15rem] -mt-[0.9rem] size-[1.6rem]"
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/9d/Threads_%28app%29_logo.svg/2048px-Threads_%28app%29_logo.svg.png"
                ></img>
              </div>
              <div>
                <img
                  className="ml-[17.7rem] -mt-[1.9rem] size-[2.3rem]"
                  onClick={() => setOpen(true)}
                  src="https://img.freepik.com/premium-vector/instagram-upload-icon_772860-1189.jpg?w=360"
                ></img>
                <div className="relative">
                  {open && (
                    <div className="fixed inset-0 bg-black/50 z-50 flex items-end justify-center">
                      <div className="w-full max-w-md bg-white rounded-t-2xl p-6">
                        {/* Handle */}
                        <div className="w-12 h-1.5 bg-gray-300 rounded-full mx-auto mb-4"></div>

                        {/* Title */}
                        <h2 className="text-center font-bold text-lg mb-4">
                          Create
                        </h2>

                        {/* Menu Items */}
                        <div className="space-y-5">
                          {menuItems.map((item) => (
                            <div
                              key={item.label}
                              className="flex justify-between items-center"
                            >
                              <div className="flex items-center space-x-3">
                                {item.icon}
                                <span>{item.label}</span>
                              </div>
                              {item.isNew && (
                                <span className="bg-blue-500 text-white text-xs px-2 py-0.5 rounded-full">
                                  New
                                </span>
                              )}
                            </div>
                          ))}
                        </div>

                        {/* Close Button */}
                        <button
                          onClick={() => setOpen(false)}
                          className="text-sm text-gray-500 w-full mt-6"
                        >
                          Cancel
                        </button>
                      </div>
                    </div>
                  )}
                </div>
              </div>
              <div>
                <Link to='/ActivitySetting'><img
                  className="ml-[20.8rem] -mt-[2.2rem] size-[2.2rem]"
                  src="https://cdns.iconmonstr.com/wp-content/releases/preview/7.1.0/240/iconmonstr-line-three-horizontal-lined.png"
                ></img></Link>
              </div>
            </section>
          </div>
        </section>

        {/* DP, Post, Followers, Following */}
        <section>
          <div className="-mt-[37.9rem]">
            <img
              className="rounded-full size-[4.2rem] mb-[0.5rem] ml-8"
              onChange={
                storyButton
                
              }
              onClick={async (e) => {
                e.preventDefault();
                const fileInput = document.createElement('input');
                fileInput.type = 'file';
                fileInput.accept = 'image/*';
                fileInput.onchange = async (event) => {
                  const file = event.target.files[0];
                  if (!file) return;
                  const formData = new FormData();
                  formData.append('profileImage', file);
                  try {
                    const token = localStorage.getItem("token");
                    const res = await axios.put(
                      `${import.meta.env.VITE_BASE_URL}/users/profile-image`,
                      formData,
                      {
                        headers: {
                          Authorization: `Bearer ${token}`,
                          'Content-Type': 'multipart/form-data'
                        }
                      }
                    );
                    setProfile((prev) => ({ ...prev, profileImage: res.data.profileImage }));
                  } catch (err) {
                    alert('Failed to upload profile image');
                  }
                };
                fileInput.click();
              }}
              src={profile?.profileImage}
            />
            <section className="h-screen mt-[7rem]">
              <div className="-mt-[11.1rem] font-semibold  ml-[8.5rem] text-[1.3rem]">
                {posts.length}
              </div>
              <span className="ml-[9.5em] text-[0.9rem] font-normal">
                Posts
              </span>
              <Link to='/followers'><div className="-mt-[3.5rem] font-semibold ml-[13rem] text-[1.3rem]">
                {profile?.followers?.length || 0}
              </div>
              <span className="ml-[12.3rem] text-[0.9rem] font-normal">
                followers
              </span>
              <div className="-mt-[3.5rem] font-semibold ml-[18.5rem] text-[1.3rem]">
                {profile?.following?.length || 0}
              </div>
              <span className="ml-[17.8rem] text-[0.9rem] font-normal">
                following
              </span></Link>
            </section>
          </div>
        </section>

        {/* Edit Profile, Share Profile, Icon */}
        <section>
          <div className="-mt-[35.0rem] text-center">
            <Link to="/EditProfile">
              <div className="border-black bg-white border-[1.5px] ml-[0.6rem] w-[9.6rem] h-[1.9rem] rounded-md">
                Edit profile
              </div>
            </Link>
            <div className="border-black bg-white border-[1.5px] ml-[10.5rem] -mt-[1.9rem] w-[9.6rem] h-[1.9rem] rounded-md">
              Share profile
            </div>
            <div className="border-black bg-white border-[1.5px] ml-[20.6rem] w-[2.3rem] -mt-[1.9rem] flex h-[1.9rem] rounded-md">
              <img
                onClick={toggleDropdown}
                className="size-[1.5rem] items-center ml-[0.2rem]"
                src="https://w7.pngwing.com/pngs/112/858/png-transparent-computer-icons-icon-design-user-register-button-heroes-rectangle-logo.png"
              ></img>
            </div>
          </div>
        </section>

        <section>
          <div className="text-black ml-2 mt-1">Discover people</div>
        </section>

        {/* See all Follow */}
        <section className="-mt-5">
          <div className="relative inline-block text-left">
            {/* Button to toggle dropdown */}
            <button
              //onClick={toggleDropdown}
              className="inline-flex ml-[19rem] text-blue-600 text-sm font-medium rounded-md"
            >
              See all
            </button>

            {/* Dropdown menu */}
            {/* 1 */}
            {isOpen && (
              <div className="absolute z-10 mt-4 w-[7.5rem] origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5">
                <div className="py-1">
                  {/* Dummy user list */}
                </div>
                <div className="-mt-[0.2rem]">
                  <img
                    className="px-[3.2rem] mb-2 ml-[2.8rem]"
                    src="https://icons.veryicon.com/png/o/miscellaneous/medium-thin-linear-icon/cross-23.png"
                  ></img>
                </div>
                <div className="w-[5.7rem] py-5 px-1 ml-[1rem] -mt-5">
                  <img
                    className="rounded-s-full rounded-e-full"
                    src="https://i.pinimg.com/736x/b0/a4/7b/b0a47b1d176e807bc4fe232cb52c5a4e.jpg"
                  />
                </div>
                <div className="flex-col ml-7">
                  <div className="-mt-5 text-[14px]">bike._racer</div>
                  <div className="text-center -ml-[9.9rem] w-screen  -mt-1 text-[14px] text-zinc-500">
                    Follow by <br /> abc._024 + 35...
                  </div>
                </div>
                <div className="flex justify-between align-top">
                  <button className="bg-blue-700 text-white mt-[0.9rem] ml-[0.4rem] mr-[0.4rem] mb-2 h-[1.6rem] w-screen rounded-md">
                    Follow
                  </button>
                </div>
              </div>
            )}

            {/* 2 */}
            {isOpen && (
              <div className="absolute ml-[8rem] z-10 mt-[1rem] w-[7.5rem] origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5">
                <div className="py-1">
                  {/* Dummy user list */}
                </div>
                <div className="-mt-[0.2rem]">
                  <img
                    className="px-[3.2rem] mb-2 ml-[2.8rem]"
                    src="https://icons.veryicon.com/png/o/miscellaneous/medium-thin-linear-icon/cross-23.png"
                  ></img>
                </div>
                <div className="w-[5.7rem] py-5 px-1 ml-[1rem] -mt-5">
                  <img
                    className="rounded-s-full rounded-e-full"
                    src="https://i.pinimg.com/736x/b0/a4/7b/b0a47b1d176e807bc4fe232cb52c5a4e.jpg"
                  />
                </div>
                <div className="flex-col ml-7">
                  <div className="-mt-5 text-[14px]">bike._racer</div>
                  <div className="text-center -ml-[9.9rem] w-screen  -mt-1 text-[14px] text-zinc-500">
                    Follow by <br /> abc._024 + 35...
                  </div>
                </div>
                <div className="flex justify-between align-top">
                  <button className="bg-blue-700 text-white mt-[0.9rem] ml-[0.4rem] mr-[0.4rem] mb-2 h-[1.6rem] w-screen rounded-md">
                    Follow
                  </button>
                </div>
              </div>
            )}
          </div>
        </section>

        <section className="mt-[15.7rem]">
          <button>
            <div className="rounded-full size-[5rem] ml-2">
              <img
                className=""
                src="https://img.icons8.com/ios7/512/plus.png"
              ></img>
            </div>
            <div className="py-1">
              {/* Dummy story list */}
            </div>
          </button>
        </section>

        {/* User Posts */}
        <section>
          <div className="mt-8">
            {posts.map((post) => (
              <div key={post._id} className="mb-4">
                <img
                  className="rounded-lg w-full"
                  src={post.media?.url}
                  alt={post.caption}
                />
                <p>{post.caption}</p>
              </div>
            ))}
          </div>
        </section>

        <div className="w-full">
          <div className="flex justify-around border-t border-b border-gray-300">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className="flex flex-col items-center py-3 text-sm font-medium text-gray-500 hover:text-black"
              >
                {tab.label}
                <div
                  className={`h-0.5 w-full mt-2 transition-all duration-300 ${
                    activeTab === tab.id ? "bg-black" : "bg-transparent"
                  }`}
                ></div>
              </button>
            ))}
          </div>
        </div>

        <div>
          <BottomNav />
        </div>
      </form>
    </div>
  );
};

export default Profile;
