import React, { useEffect, useState, useCallback } from "react";
import debounce from "lodash/debounce";
import MetahumanDisplay from "./metahumans";
import MetahumanModal from "./metalhumanmodel";

interface MetaHuman {
  id: number;
  name: string;
  slug: string;
  powerstats: {
    intelligence: number;
    strength: number;
    speed: number;
    durability: number;
    power: number;
    combat: number;
  };
  appearance: {
    gender: string;
    race: string;
    height: string[];
    weight: string[];
    eyeColor: string;
    hairColor: string;
  };
  biography: {
    fullName: string;
    alterEgos: string;
    aliases: string[];
    placeOfBirth: string;
    firstAppearance: string;
    publisher: string;
    alignment: string;
  };
  work: {
    occupation: string;
    base: string;
  };
  connections: {
    groupAffiliation: string;
    relatives: string;
  };
  images: {
    xs: string;
    sm: string;
    md: string;
    lg: string;
  };
}

const MetahumansList: React.FC = () => {
  const [metahumans, setMetahumans] = useState<MetaHuman[]>([]);
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [selectedMetahumans, setSelectedMetahumans] = useState<MetaHuman[]>([]);
  const [modalIsOpen, setModalIsOpen] = useState<boolean>(false);

  useEffect(() => {
    fetch("https://homologacao3.azapfy.com.br/api/ps/metahumans")
      .then((response) => response.json())
      .then((data) => setMetahumans(data))
      .catch((error) => console.error("Erro ao buscar dados:", error));
  }, []);

  const handleSearch = useCallback(
    debounce((term: string) => setSearchTerm(term), 300),
    []
  );

  const handleMetahumanClick = (id: number) => {
    const selected = metahumans.find((m) => m.id === id);
    if (selected) {
      setSelectedMetahumans((prevSelected) => {
        if (prevSelected.find((m) => m.id === id)) {
          // Remove o metahuman se ele já estiver selecionado
          return prevSelected.filter((m) => m.id !== id);
        }
        if (prevSelected.length < 2) {
          // Adiciona o metahuman à seleção se houver menos de 2 selecionados
          return [...prevSelected, selected];
        }
        return prevSelected;
      });
    }
  };

  useEffect(() => {
    if (selectedMetahumans.length === 2) {
      setModalIsOpen(true);
    }
  }, [selectedMetahumans]);

  const filteredMetahumans = metahumans.filter((metahuman) =>
    metahuman.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleCloseModal = () => {
    setModalIsOpen(false);
    setSelectedMetahumans([]); // Deseleciona os metahumans ao fechar o modal
  };

  return (
    <>
      <div className="search">
        <div className="search-box">
          <div className="search-field">
            <input
              placeholder="Search..."
              className="search-input"
              type="text"
              onChange={(e) => handleSearch(e.target.value)}
            />
            <div className="search-box-icon">
              <button className="btn-icon-content">
                <i className="search-icon">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    version="1.1"
                    viewBox="0 0 512 512"
                  >
                    <path
                      d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z"
                      fill="#fff"
                    ></path>
                  </svg>
                </i>
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="main-view">
        {filteredMetahumans.length > 0 ? (
          filteredMetahumans.map((metahuman) => (
            <MetahumanDisplay
              key={metahuman.id}
              {...metahuman}
              onClick={handleMetahumanClick}
              isSelected={
                !!selectedMetahumans.find((m) => m.id === metahuman.id)
              }
            />
          ))
        ) : (
          <p>No metahumans found.</p>
        )}
      </div>
      {modalIsOpen && selectedMetahumans.length === 2 && (
        <MetahumanModal
          metahuman1={selectedMetahumans[0]}
          metahuman2={selectedMetahumans[1]}
          onClose={handleCloseModal}
        />
      )}
    </>
  );
};

export default MetahumansList;
