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

interface Images {
  xs: string;
  sm: string;
  md: string;
  lg: string;
}

interface MetaHuman {
  id: number;
  name: string;
  slug: string;
  powerstats: PowerStats;
  appearance: Appearance;
  biography: Biography;
  work: Work;
  connections: Connections;
  images: Images;
}

interface MetahumanModalProps {
  metahuman1: MetaHuman;
  metahuman2: MetaHuman;
  onClose: () => void;
}

const calculateTotalPowerStats = (powerstats: PowerStats) => {
  return Object.values(powerstats).reduce((acc, stat) => acc + stat, 0);
};

const MetahumanModal: React.FC<MetahumanModalProps> = ({
  metahuman1,
  metahuman2,
  onClose,
}) => {
  const totalPower1 = calculateTotalPowerStats(metahuman1.powerstats);
  const totalPower2 = calculateTotalPowerStats(metahuman2.powerstats);

  const winner = totalPower1 > totalPower2 ? metahuman1 : metahuman2;

  return (
    <div className="modal-overlay">
      <button className="close-button" onClick={onClose}>
        X
      </button>
      <div className="modal-content">
        <div className="total-power">
          <h2>🎉Winner: {winner.name}🎊</h2>
          <h4>Total Power Stats</h4>
          <p>
            <strong>{metahuman1.name}:</strong> {totalPower1}
          </p>
          <p>
            <strong>{metahuman2.name}:</strong> {totalPower2}
          </p>
        </div>
        <div className="metahuman-details">
          <div className="metahuman-01 metahuman">
            <h3>Metahuman 1: {metahuman1.name}</h3>
            <img src={metahuman1.images.lg} alt={metahuman1.name} />
            <h4>Appearance Details</h4>
            <div className="metahuman-details">
              <p>
                <strong>Gender:</strong> {metahuman1.appearance.gender}
              </p>
              <p>
                <strong>Race:</strong> {metahuman1.appearance.race}
              </p>
              <p>
                <strong>Height</strong>{" "}
                {metahuman1.appearance.height.join(", ")}
              </p>
              <p>
                <strong>Weight:</strong>{" "}
                {metahuman1.appearance.weight.join(", ")}
              </p>
              <p>
                <strong>Eye color:</strong> {metahuman1.appearance.eyeColor}
              </p>
              <p>
                <strong>Hair Color:</strong> {metahuman1.appearance.hairColor}
              </p>
            </div>
            <h3>Power Stats</h3>
            <div className="metahuman-details-power">
              <p>
                <strong>Intelligence:</strong>{" "}
                {metahuman1.powerstats.intelligence}
              </p>
              <p>
                <strong>Strength:</strong> {metahuman1.powerstats.strength}
              </p>
              <p>
                <strong>Speed:</strong> {metahuman1.powerstats.speed}
              </p>
              <p>
                <strong>Durability</strong> {metahuman1.powerstats.durability}
              </p>
              <p>
                <strong>Power</strong> {metahuman1.powerstats.power}
              </p>
              <p>
                <strong>Combat</strong> {metahuman1.powerstats.combat}
              </p>
            </div>
          </div>
          <div className="metahuman-02 metahuman">
            <h3>Metahuman 2: {metahuman2.name}</h3>
            <img src={metahuman2.images.lg} alt={metahuman2.name} />
            <h4>Appearance Details</h4>
            <div className="metahuman-details">
              <p>
                <strong>Gender:</strong> {metahuman2.appearance.gender}
              </p>
              <p>
                <strong>Race:</strong> {metahuman2.appearance.race}
              </p>
              <p>
                <strong>Height</strong>{" "}
                {metahuman2.appearance.height.join(", ")}
              </p>
              <p>
                <strong>Weight:</strong>{" "}
                {metahuman2.appearance.weight.join(", ")}
              </p>
              <p>
                <strong>Eye color:</strong> {metahuman2.appearance.eyeColor}
              </p>
              <p>
                <strong>Hair Color:</strong> {metahuman2.appearance.hairColor}
              </p>
            </div>
            <h3>Power Stats</h3>
            <div className="metahuman-details-power">
              <p>
                <strong>Intelligence:</strong>{" "}
                {metahuman2.powerstats.intelligence}
              </p>
              <p>
                <strong>Strength:</strong> {metahuman2.powerstats.strength}
              </p>
              <p>
                <strong>Speed:</strong> {metahuman2.powerstats.speed}
              </p>
              <p>
                <strong>Durability</strong> {metahuman2.powerstats.durability}
              </p>
              <p>
                <strong>Power</strong> {metahuman2.powerstats.power}
              </p>
              <p>
                <strong>Combat</strong> {metahuman2.powerstats.combat}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MetahumanModal;
