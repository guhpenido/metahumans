import React from "react";

interface PowerStats {
  intelligence: number;
  strength: number;
  speed: number;
  durability: number;
  power: number;
  combat: number;
}

interface Appearance {
  gender: string;
  race: string;
  height: string[];
  weight: string[];
  eyeColor: string;
  hairColor: string;
}

interface Biography {
  fullName: string;
  alterEgos: string;
  aliases: string[];
  placeOfBirth: string;
  firstAppearance: string;
  publisher: string;
  alignment: string;
}

interface Work {
  occupation: string;
  base: string;
}

interface Connections {
  groupAffiliation: string;
  relatives: string;
}

interface Images {
  xs: string;
  sm: string;
  md: string;
  lg: string;
}

interface MetaHumanProps {
  id: number;
  name: string;
  slug: string;
  powerstats: PowerStats;
  appearance: Appearance;
  biography: Biography;
  work: Work;
  connections: Connections;
  images: Images;
  onClick: (id: number) => void;
  isSelected: boolean;
}

const MetahumanDisplay: React.FC<MetaHumanProps> = ({
  id,
  name,
  images,
  onClick,
  isSelected,
}) => {

  const divClass = `box ${isSelected ? "selecionado" : ""}`;

  const divStyle = {
    backgroundImage: `url(${images.lg})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    border: isSelected ? "2px solid rgb(80, 255, 10)" : "2px solid gray",
    backgroundPosition: "center",
  };

  return (
    <>
      <div className={divClass} style={divStyle} onClick={() => onClick(id)}>
        <p>{name}</p>
      </div>
    </>
  );
};

export default MetahumanDisplay;
