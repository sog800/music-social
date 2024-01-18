// SongCard.js
import React, { useState } from "react";
import mainImg from "../assets/mainImg.jpg";

const SongCard = ({ songInfo }) => {
  const [likes, setLikes] = useState(0);
  const [comment, setComment] = useState("");
  const [comments, setComments] = useState([]);

  const handleLike = () => {
    setLikes(likes + 1);
  };

  const handleComment = () => {
    if (comment.trim() !== "") {
      setComments([...comments, comment]);
      setComment("");
    }
  };

  return (
    <div className="bg-white shadow-md p-4 mb-4 w-96">
      <div className=" w-fit items-center mb-4">
        <img
          src={songInfo.artwork || mainImg} // Use the provided artwork or a default picture
          alt="Song Artwork"
          className=""
        />
        <div>
          <h2 className="text-xl font-semibold">{songInfo.title}</h2>
          <p className="text-gray-600">{songInfo.description}</p>
        </div>
      </div>

      {/* Like Button */}
      <div className="flex items-center mb-2">
        <button onClick={handleLike} className="text-blue-500 mr-2">
          Like
        </button>
        <span>{likes} Likes</span>
      </div>

      {/* Comment Section */}
      <div>
        <textarea
          placeholder="Add a comment..."
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          className="w-full h-16 p-2 border rounded-md mb-2"
        />
        <button
          onClick={handleComment}
          className="bg-blue-500 text-white px-4 py-2 rounded-md"
        >
          Comment
        </button>
        {comments.map((comment, index) => (
          <p key={index} className="text-gray-600 mt-2">
            {comment}
          </p>
        ))}
      </div>
    </div>
  );
};

export default SongCard;
