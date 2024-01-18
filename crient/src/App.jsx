import React from "react";
import Header from "./components/Header";
import SongCard from "./components/SongCard";

export default function App() {
  const sampleSong = {
    title: "Awesome Song",
    description: "An amazing song that everyone should listen to!",
    artwork: "", // Replace with the actual artwork URL
  };

  return (
    <>
      <div className="fixed top-0 w-full bg-white shadow-md">
        <div className="container mx-auto p-4">
          <div className="flex items-center justify-between">
            <h1 className="text-yellow-700 text-lg font-bold">MusicSocial</h1>
            <Header />
          </div>
        </div>
      </div>

      {/* Add padding or margin-top to create space for the fixed header */}
      <div className="mt-20 flex items-center justify-center">
        <div className="container mx-auto mt-8 grid grid-cols-1 gap-8 w-fit">
          <SongCard songInfo={sampleSong} />
          <SongCard songInfo={sampleSong} />
          <SongCard songInfo={sampleSong} />
          <SongCard songInfo={sampleSong} />
          <SongCard songInfo={sampleSong} />
          <SongCard songInfo={sampleSong} />
          <SongCard songInfo={sampleSong} />
          <SongCard songInfo={sampleSong} />
          <SongCard songInfo={sampleSong} />
          <SongCard songInfo={sampleSong} />
          {/* Add more SongCard components with different songInfo as needed */}
        </div>
      </div>
    </>
  );
}
