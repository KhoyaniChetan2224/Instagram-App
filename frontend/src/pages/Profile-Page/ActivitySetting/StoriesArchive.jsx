import { ArrowDown, ArrowDown01Icon, ArrowDownAZ, ArrowLeft, DotIcon } from "lucide-react";
import React from "react";
import { Link } from "react-router-dom";
const months = [
  {
    name: "March 2025",
    days: [
      "",
      "",
      "",
      "",
      "",
      "",
      "1",
      "2",
      "3",
      "4",
      "5",
      "6",
      "7",
      "8",
      "9",
      "10",
      "11",
      "12",
      "13",
      "14",
      "15",
      "16",
      "17",
      "18",
      "19",
      "20",
      "21",
      "22",
      "23",
      "24",
      "25",
      "26",
      "27",
      "28",
      "29",
      "30",
      "31",
    ],
  },
  {
    name: "April 2025",
    days: [
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "1",
      "2",
      "3",
      "4",
      "5",
      "6",
      "7",
      "8",
      "9",
      "10",
      "11",
      "12",
      "13",
      "14",
      "15",
      "16",
      "17",
      "18",
      "19",
      "20",
      "21",
      "22",
      "23",
      "24",
      "25",
      "26",
      "27",
      "28",
      "29",
      "30",
    ],
  },
];
const StoriesArchive = () => {
  return (
    <div className="max-w-md mx-auto bg-white min-h-screen p-4 space-y-6 font-sans">
      {/* Header */}
      <div className="flex items-center space-x-4">
        <Link to="/ActivitySetting">
          <ArrowLeft />
        </Link>
        <h1 className="text-xl font-semibold">Saved</h1>
        <div className=" text-2xl">< ArrowDown /></div>
      </div>

      <div className="p-4 font-sans">
        {/* Calendar Grid */}
        {months.map((month, index) => (
          <div key={index} className="mb-8">
            <h2 className="text-center text-lg font-medium mb-2">
              {month.name}
            </h2>
            <div className="grid grid-cols-7 text-sm text-center text-gray-700 mb-2">
              <div>Sun</div>
              <div>Mon</div>
              <div>Tue</div>
              <div>Wed</div>
              <div>Thu</div>
              <div>Fri</div>
              <div>Sat</div>
            </div>
            <div className="grid grid-cols-7 text-center gap-y-1 text-gray-400">
              {month.days.map((day, idx) => (
                <div key={idx} className="h-8 flex items-center justify-center">
                  {day}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default StoriesArchive;
