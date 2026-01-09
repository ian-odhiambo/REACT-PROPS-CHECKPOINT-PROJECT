import { useState } from "react";
import { FaMapMarker, FaFlag, FaBirthdayCake, FaUsers } from "react-icons/fa";
import { Link } from "react-router-dom";

const PlayerListing = ({ player }) => {
  const [showFullDescription, setShowFullDescription] = useState(false);
  let description = player.description;

  if (!showFullDescription) {
    description = description.substring(0, 90) + `...`;
  }

  return (
    <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden">
      {/* Player Image Section */}
      {player.imageUrl && (
        <div className="h-48 overflow-hidden">
          <img
            src={player.imageUrl}
            alt={player.name}
            className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
          />
        </div>
      )}

      <div className="p-6">
        {/* Header and  Name  */}
        <div className="mb-4">
          <div className="flex justify-between items-start mb-2">
            <div>
              <h3 className="text-2xl font-bold text-gray-900">
                {player.name}
              </h3>
              <div className="flex items-center gap-2 mt-1">
                <span className="text-sm font-medium text-indigo-600 bg-indigo-50 px-3 py-1 rounded-full">
                  {player.position || player.player}
                </span>
                <span className="text-sm text-gray-600">
                  #{player.jerseyNumber}
                </span>
              </div>
            </div>
            {player.networth && (
              <div className="text-right">
                <div className="text-sm text-gray-500">Net Worth</div>
                <div className="text-lg font-bold text-green-600">
                  ${player.networth}
                </div>
              </div>
            )}
          </div>

          {/* Team and Nationality */}
          <div className="flex flex-wrap gap-4 mb-4 text-gray-700">
            <div className="flex items-center gap-2">
              <FaUsers className="text-blue-400" />
              <span className="font-medium">{player.team}</span>
            </div>
            <div className="flex items-center gap-2">
              <FaFlag className="text-amber-400" />
              <span>{player.nationality}</span>
            </div>
            {player.age && (
              <div className="flex items-center gap-2">
                <FaBirthdayCake className="text-green-400" />
                <span>{player.age} years</span>
              </div>
            )}
          </div>
        </div>

        {/* Description */}
        <div className="mb-4">
          <p className="text-gray-600 mb-2">{description}</p>
          {player.description.length > 90 && (
            <button
              onClick={() => setShowFullDescription((prevState) => !prevState)}
              className="text-indigo-600 hover:text-indigo-800 font-medium text-sm"
            >
              {showFullDescription ? "" : "Read more"}
            </button>
          )}
        </div>

        {/* Location - Action Button */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4 mt-6 pt-4 border-t border-gray-100"></div>
      </div>
    </div>
  );
};

export default PlayerListing;
