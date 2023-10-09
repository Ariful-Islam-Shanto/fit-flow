import React from "react";
import bend from '../../assets/images/bend yoga festival.webp';
import Navbar from "../../Components/Navbar/Navbar";

const FindEvent = () => {
  return (
    <div className="px-36 py-6 space-y-6">
        <Navbar></Navbar>
      <h1 className="text-6xl text-black text-left font-medium">
        Find the best event for you.
      </h1>
      <p>Upcoming event for you</p>
      <div className="flex flex-col gap-6">

        <div className="space-y-8 bg-white p-6 drop-shadow-sm hover:drop-shadow-md rounded-md">
            <img src={bend} alt="" className="w-full mb-4"/>
            <div className=" space-y-8">
          <h1 className="text-3xl text-black font-bold">
            1. Bend Yoga Festival
          </h1>
          <p className="text-gray-800 text-xl font-semibold">Bend, Oregon | June 8-11, 2023</p>
          <p className="space-y-8 text-xl text-gray-800 tracking-wide">
            <span className="block">
            Explore the majesty of the Cascade Mountains at <span className="text-blue-200">Bend Yoga Festival.</span>
            Situated in the beautiful mountain town of Bend, Oregon, this
            festival features a focused mix of world-class presenters, wellness
            sessions, and outdoor adventures.
            </span>
            <span className="block">
             This year, the Bend Yoga Festival
            moves to Riverbend Park, offering direct access to the flowing
            Deschutes River, stunning mountain views, and more than 15,000
            square feet of lawn. During the festival, attendees can explore
            nearby natural attractions, such as the lava caves and
            <span className="text-blue-200">Smith Rock
            State Park.</span> Join a guided hike to the top of Smith Rock, followed by
            a yoga practice and local brew tasting, or take to the river in an
            open paddle class.
            </span>
            <span className="block">
             Throughout the weekend, you can join
            international and locally loved presenters including   <span className="text-blue-200">Sianna Sherman</span>
            and  <span className="text-blue-200">Annie Carpenter</span> for afternoon yoga sessions at participating
            local yoga studios, all within walking distance of the main venue.
            You can also schedule your own yoga photo shoot with acclaimed
            photographer  <span className="text-blue-200">Robert Sturman.</span> Lodging isn’t included, so you’ll want
            to find a stay at a local Airbnb, campsite, or hotel.
            </span>
          </p>
          <div>
            <button className="px-5 py-2 bg-blue-500 text-white border-none rounded-md">Join Now</button>
          </div>
          </div>
        </div>
        
        <div className=" space-y-8 bg-white p-6 drop-shadow-sm hover:drop-shadow-md rounded-md ">
          <h1 className="text-3xl text-black font-bold">
            2. Telluride Yoga Fest
          </h1>
          <p className="text-gray-800 text-xl font-semibold">Telluride, Colorado | June 22-25, 2023</p>
          <p className="space-y-8 text-xl text-gray-800 tracking-wide">
            <span className="block">
            For a fully immersive yoga experience, the Telluride Yoga Festival is not to be missed. The four-day event offers more than 100 classes, including yoga, meditation, music, hiking, wellness talks, and social gatherings. The event takes place amid the intimate setting of a small village nestled at the base of the Telluride Mountains, surrounded by rugged peaks, mountain air, and crisp blue skies.
            </span>
            <span className="block">
            Start your day with a mountain-top meditation, hike the fan-favorite Jud Wiebe memorial trail, practice standup paddleboard (SUP) yoga on Elk Lake, or simply sleep-in. With its new campus in Mountain Village,  connected to the historic Town of Telluride via a free gondola, the festival provides a unique gathering that’s entirely removed from the hubbub of everyday life. The festival has hosted some of the most well-seasoned yoga teachers, including Kia Miller, Sally Kempton, Hawah, Scott Blossom, and Noah Maze.


            </span>
            <span className="block">
            Telluride offers a selection of hotels, condos, and private residences that cater to every budget.
            </span>
          </p>
          <div>
            <button className="px-5 py-2 bg-blue-500 text-white border-none rounded-md">Join Now</button>
          </div>
        </div>


        <div className=" space-y-8 bg-white p-6 drop-shadow-sm hover:drop-shadow-md rounded-md ">
          <h1 className="text-3xl text-black font-bold">
            3. LoveShinePlay
          </h1>
          <p className="text-gray-800 text-xl font-semibold">Asheville, North Carolina | July 20-23, 2023</p>
          <p className="space-y-8 text-xl text-gray-800 tracking-wide">
            <span className="block">
            The LoveShinePlay Festival, formerly known as the Asheville Yoga Festival, is a four-day event held in downtown Asheville, North Carolina. The festival offers an expansive schedule that includes more than 70 styles of offerings, including Bhakti and anatomy, Kundalini and Yin, and everything in between.
            </span>
            <span className="block">
            Asheville is considered the wellness capital of the South, and the festival takes advantage of its surroundings, allowing attendees to expand their knowledge and practice in the heart of the Blue Ridge Mountains. Throughout the weekend, attendees can experience lectures on practical astrology, Ayurvedic yoga classes, “yin yoga and story time,” plus classes and concerts from DJ Drez and MC Yogi.


            </span>
            <span className="block">
            LoveShinePlay started in 2016 as the Asheville Yoga Festival and has since grown to include partnerships with Lululemon and Yoloha. In 2024, the festival will expand and offer a similar incarnation in Charleston.
            </span>
          </p>
          <div>
            <button className="px-5 py-2 bg-blue-500 text-white border-none rounded-md">Join Now</button>
          </div>
        </div>
<div>
    <h1 className="text-2xl text-gray-600 font-bold">8 more event here</h1>
    <a href="" className="underline text-blue-400 font-medium">Click here</a>
</div>

      </div>
    </div>
  );
};

export default FindEvent;
