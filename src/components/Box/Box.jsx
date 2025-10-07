import React from "react";
import { FaHiking, FaPuzzlePiece, FaFootballBall, FaGamepad, FaFistRaised } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { useLanguage } from '../../contexts/LanguageContext.jsx';
import GameCard from "./GameCard/Gamecard";
import "./Box.css";

// Known categories with their specific icons only
const KNOWN_CATEGORIES = {
  action: {
    icon: FaFistRaised,
  },
  adventure: {
    icon: FaHiking,
  },
  puzzle: {
    icon: FaPuzzlePiece,
  },
  sports: {
    icon: FaFootballBall,
  },
  reflex: {
    icon: FaGamepad,
  }
};

// Background colors in sequence: black, green, black, green...
const BACKGROUND_COLORS = ["#000", "#85c443"];

// Text colors that contrast with backgrounds
const TEXT_COLORS = ["#fff", "#fff"];
const HEADER_COLORS = ["#85c443", "#fff"];

// Specific icon colors for known categories
const KNOWN_CATEGORY_COLORS = {
  action: "#ff8c42",
  adventure: "#85c443",
  puzzle: "#ff6b6b",
  sports: "#4ecdc4",
  reflex: "#ffd93d"
};

// Default icon color for unknown categories
const DEFAULT_ICON_COLOR = "#85c443";

// Game data for each category (fallback when API data is not available)
const gameData = {
  action: [
    { name: "Potty Plan", img: "/images/gpotty_plan.jpg", link: "https://www.kidopia.et/esportsmix/content/Action/game1.html" },
    { name: "Turtules", img: "/images/gturtles.jpg", link: "https://www.kidopia.et/esportsmix/content/Action/game2.html" },
    { name: "Mighty Raju", img: "/images/gmighty_raju.png", link: "https://www.kidopia.et/esportsmix/content/Action/game3.html" },
  ],
  adventure: [
    { name: "Avalaunch", img: "/images/gava_launch.png", link: "https://www.kidopia.et/esportsmix/content/Adventure/Avalaunch/index.html" },
    { name: "A Dungeon Adventure for Brave", img: "/images/logo.jpg", link: "https://www.kidopia.et/esportsmix/content/Adventure/ADungeonAdventurefortheBrave/index.html" },
    { name: "Alien Rivals", img: "/images/logo(1).png", link: "https://www.kidopia.et/esportsmix/content/Adventure/AlienRivals/index.html" },
    { name: "Angry Betty", img: "/images/logo(2).png", link: "https://www.kidopia.et/esportsmix/content/Adventure/AngryBetty/index.html" },
  ],
  puzzle: [
    { name: "Lung Defender", img: "/images/logo(3).png", link: "#" },
    { name: "Water Sons", img: "/images/gwater_sons.png", link: "#" },
  ],
  sports: [
    { name: "Maighty Raju", img: "/images/gmighty_raju.png", link: "#" },
    { name: "Bouncy Cubs", img: "/images/gbouncy_cubs.png", link: "#" },
  ],
  reflex: [
    { name: "Beary Rapids", img: "/images/gbeary_rapids.png", link: "#" },
    { name: "44 Chats", img: "/images/g44chats.png", link: "#" },
  ]
};

function Box({ categoryName, showAllGames = false, categoryData = [], index = 0 }) {
  const navigate = useNavigate();
  const { t } = useLanguage();

  console.log("Box received categoryName:", categoryName, "with data:", categoryData);

  // Use lowercase for consistency
  const categoryKey = categoryName?.toLowerCase() || "action";

  // Get background and text colors based on index (0,1,0,1,0,1...)
  const colorIndex = index % BACKGROUND_COLORS.length;
  const backgroundColor = BACKGROUND_COLORS[colorIndex];
  const textColor = TEXT_COLORS[colorIndex];
  const headerColor = HEADER_COLORS[colorIndex];

  // Check if this is a known category
  const knownCategory = KNOWN_CATEGORIES[categoryKey];

  // Use known category icon or fallback to FaGamepad
  const IconComponent = knownCategory?.icon || FaGamepad;

  // Use known category specific color or fallback to default icon color
  const iconColor = KNOWN_CATEGORY_COLORS[categoryKey] || DEFAULT_ICON_COLOR;

  // Get name and title from API data first, then fallback to translations
  const name = categoryData.name || t(categoryKey + 'Games') || categoryKey.charAt(0).toUpperCase() + categoryKey.slice(1);
  const title = categoryData.title || t(categoryKey + 'Title') || `${categoryKey.charAt(0).toUpperCase() + categoryKey.slice(1)} Games`;

  // Games data: First try API data, then fallback to hardcoded gameData
  const apiGames = categoryData.games || [];
  const fallbackGames = gameData[categoryKey] || [];
  const allGames = apiGames.length > 0 ? apiGames : fallbackGames;
  const games = showAllGames ? allGames : allGames.slice(0, 4);

  const handleSeeAllClick = (e) => {
    e.preventDefault();
    navigate(`/category/${categoryKey}`);
  };

  return (
    <section className="games" style={{ backgroundColor: backgroundColor }}>
      {/* Main section title */}
      <h2 className="section-title" style={{ color: headerColor }}>{title}</h2>

      {/* Header with icon, name, and see-all in one line */}
      <div className="section-header">
        <div className="title-container">
          <IconComponent className="clr" style={{ color: iconColor }} size="2em" />
          <h2 className="section-title-h2" style={{ color: textColor }}>
            {name}
          </h2>
        </div>
        {/* Show "See All" link that navigates to internal category page */}
        {!showAllGames && (
          <a
            className="see-all"
            href={`/category/${categoryKey}`}
            onClick={handleSeeAllClick}
            style={{ color: textColor }}
          >
            {t('seeAll')}
          </a>
        )}



      </div>

      <div className="game-grid">
        {games.map((game, index) => (
          <GameCard key={index} {...game} />
        ))}

        {/* Show message if no games available */}
        {games.length === 0 && (
          <div className="no-games-message" style={{ color: textColor }}>
            {t('noGamesAvailable') || 'No games available yet'}
          </div>
        )}
      </div>
    </section>
  );
}

export default Box;