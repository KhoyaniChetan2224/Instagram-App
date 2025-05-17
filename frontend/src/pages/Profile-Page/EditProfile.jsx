import { Link, useNavigate } from "react-router-dom";
import React, { useState } from "react";
import { ArrowLeft, ChevronDown, Power, PowerOff } from "lucide-react"; // or use any icon

const EditProfile = () => {
  const [uname, setUname] = useState("");
  const [uasername, setUserName] = useState("");
  const [pronouns, setPronouns] = useState("");
  const [bio, setBio] = useState("");
  const [gender, setGender] = useState("Prefer not to say");
  const [profilePic, setProfilePic] = useState(true);

  const Navigate = useNavigate();

  const submitHandler = async (e) => {
    e.preventDefault();
    const userData = {
      uname: uname,
      username: uasername,
      pronouns: pronouns,
      bio: bio,
      gender: gender,
      profilePic: profilePic
    };

    setUname("");
    setUserName("");
    setPronouns("");
    setBio("");
    setGender("");
    setProfilePic(true);
  };

  //const [gender, setGender] = useState("Prefer not to say");
  //   const [isOn, setIsOn] = useState(false);

  const [isEnabled, setIsEnabled] = useState(false);

  return (
    <div className="overflow-hidden w-screen">
      <form onSubmit={(e) => submitHandler(e)}>
        {/* Aro, Edit Profile */}
        <div className="max-w-md mx-auto px-4 py-6 text-center space-y-4">
        {/* Header */}
        {/* <div className="flex items-center space-x-3">
        <Link to="/Profile"><ArrowLeft className="w-5 h-5 cursor-pointer" /></Link>
            <h1 className="text-xl font-semibold">Edit profile</h1>
            <button >update</button>
        </div> */}


        <div className="flex items-center space-x-3">
          <Link to="/Profile">
            <ArrowLeft className="w-5 h-5 cursor-pointer" />
          </Link>
          <h1 className="text-xl font-semibold flex-1 text-left">Edit profile</h1>
          <button
            type="submit"
            onClick={ (e) =>
              submitHandler(e)
            }
            className="text-black mt-2 border-gray-300 border-[1px] px-4 py-1 rounded font-medium transition"
          >
            Update
          </button>
        </div>


        {/* Profile Image */}
        <div className="flex flex-col items-center space-y-2">
           {profilePic ? (
              <img
                src={profilePic}
                className="w-20 h-[5rem] rounded-full object-cover border-2"
              />
            ) : null}
            <input
              type="file"
              accept="image/*"
              id="profilePicInput"
              style={{ display: "none" }}
              onChange={(e) => {
                const file = e.target.files[0];
                if (file) {
                  const reader = new FileReader();
                  reader.onloadend = () => {
                    // Show preview
                    setProfilePic(reader.result);
                  };
                  reader.readAsDataURL(file);
                }
              }}
            />
            <label htmlFor="profilePicInput" className="cursor-pointer text-blue-600 font-medium">
              Change profile picture
            </label>
            {typeof setProfilePic === "undefined" ? null : null}
        </div>
        </div>

        <section>
          <div className="-mt-[0.8rem] ml-3 mr-4">
            {/* Name */}
            <div className="relative rounded-md border-[1.5px] border-gray-400">
              <input
                type="text"
                id="Name"
                name="Name"
                required
                value={uname}
                onChange={(e) => {
                  setUname(e.target.value);
                }}
                className="peer h-11 w-full rounded borde text-black placeholder-transparent focus:outline-none"
                placeholder="Name"
              />
              <label
                className="absolute left-0 -top-[0.1rem]  text-gray-600 rounded text-sm transition-all 
                            peer-placeholder-shown:text-[0.9rem] peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-2.5 
                            peer-focus:-top-0.5 peer-focus:text-sm peer-focus:text-gray-500"
              >
                Name
              </label>
            </div>

            {/* Username */}
            <div className="relative mt-[7px] rounded-md border-[1.5px] border-gray-400">
              <input
                type="text"
                id="Username"
                name="Username"
                required
                value={uasername}
                onChange={(e) => {
                  setUserName(e.target.value);
                }}
                className="peer h-11 w-full rounded borde text-black placeholder-transparent focus:outline-none"
                placeholder="Username"
              />
              <label
                className="absolute left-0 -top-[0.1rem]  text-gray-600 rounded text-sm transition-all 
                            peer-placeholder-shown:text-[0.9rem] peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-2.5 
                            peer-focus:-top-0.5 peer-focus:text-sm peer-focus:text-gray-500"
              >
                Username
              </label>
            </div>

            {/* Pronouns */}
            <div className="relative mt-[7px] rounded-md border-[1.5px] border-gray-400">
              <input
                type="text"
                id="Pronouns"
                name="Pronouns"
                value={pronouns}
                onChange={(e) => {
                  setPronouns(e.target.value);
                }}
                className="peer h-11 w-full rounded borde text-black placeholder-transparent focus:outline-none"
                placeholder="Pronouns"
              />
              <label
                className="absolute left-0 -top-[0.1rem]  text-gray-600 rounded text-sm transition-all 
                            peer-placeholder-shown:text-[0.9rem] peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-2.5 
                            peer-focus:-top-0.5 peer-focus:text-sm peer-focus:text-gray-500"
              >
                Pronouns
              </label>
            </div>

            {/* Bio */}
            <div className="relative mt-[7px] rounded-md border-[1.5px] border-gray-400">
              <input
                type="text"
                id="Bio"
                name="Bio"
                value={bio}
                onChange={(e) => {
                  setBio(e.target.value);
                }}
                className="peer h-11 w-full rounded borde text-black placeholder-transparent focus:outline-none"
                placeholder="Bio"
              />
              <label
                className="absolute left-0 -top-[0.1rem]  text-gray-600 rounded text-sm transition-all 
                            peer-placeholder-shown:text-[0.9rem] peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-2.5 
                            peer-focus:-top-0.5 peer-focus:text-sm peer-focus:text-gray-500"
              >
                Bio
              </label>
            </div>
          </div>
          <div className="mt-[7px] ml-4">Add link</div>
          <div className="mt-[7px] ml-4">Add banners</div>

          {/* Gender */}
          <div className="relative border-gray-400 border-[1.5px] rounded-md ml-2 mr-3 mt-4">
            <label
              className="absolute left-0 -top-[0.1rem] text-gray-600 rounded text-sm transition-all 
                        peer-placeholder-shown:text-[0.9rem] peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-2.5 
                        peer-focus:-top-0.5 peer-focus:text-sm peer-focus:text-gray-500"
            >
              Gender
            </label>
            <select
              value={gender}
              onChange={(e) => setGender(e.target.value)}
              className="appearance-none w-full border rounded-md px-3 py-2 focus:outline-none pr-8"
            >
              <option>Prefer not to say</option>
              <option>Male</option>
              <option>Female</option>
              <option>Other</option>
            </select>

            {/* Optional dropdown icon */}
            <ChevronDown className="absolute right-3 top-[0.9rem] text-gray-500 pointer-events-none w-5 h-5" />
          </div>
        </section>

        <div className="p-4 max-w-md mt-2">
          {/* Label and toggle */}
          <div className="flex items-center justify-between mb-1">
            <span className="text-base font-semibold text-black">
              Show Threads badge
            </span>
            <button
              onClick={() => setIsEnabled(!isEnabled)}
              className={`w-12 h-7 flex items-center rounded-full p-1 transition-colors duration-300 ${
                isEnabled ? "bg-blue-500" : "bg-gray-400"
              }`}
            >
              <div
                className={`bg-white w-5 h-5 rounded-full shadow-md transform transition-transform duration-300 ${
                  isEnabled ? "translate-x-5" : "translate-x-0"
                }`}
              />
            </button>
          </div>

          {/* Description */}
          <p className="text-sm text-gray-500">
            When turned off, the Instagram badge on your Threads profile will
            also disappear.
          </p>
        </div>

        <section className="-mt-[7px]">
            <div className="max-w-md mx-auto space-y-3 px-4 py-4 text-sm">
                <div className="bg-gray-400 border-[0.1px] w-screen -ml-4"></div>
                <p className="text-blue-600 font-medium cursor-pointer">
                    Switch to professional account
                </p>
                <div className="bg-gray-400 border-[0.1px] w-screen -ml-4"></div>
                <p className="text-blue-600 font-medium cursor-pointer">
                    Personal information settings
                </p>
            </div>
        </section>
      </form>
    </div>
  );
};

export default EditProfile;
