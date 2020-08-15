import React, { useState, useEffect, useRef } from "react";
import { useHistory } from "react-router-dom";
import { getAllArtists, getSongs } from "../../services/api-service";
import { Artist, Song } from "../../shared/models";
import { Loader } from "../../shared/components";
import { TriangleRightIcon, KebabHorizontalIcon } from "@primer/octicons-react";
import { Player } from "../Player";
import "./Main.scss";

export const Main: React.FC = () => {
  const history = useHistory();
  const [artists, setArtists] = useState<Artist[]>([]);
  const [selectedSong, setSelectedSong] = useState<Song>({} as Song);
  const [buttonRandom, setButtonRandom] = useState<boolean>(false);
  const componentIsMounted = useRef<boolean>(true);

  useEffect(() => {
    getAllArtists()
      .then((artists) => {
        if (componentIsMounted.current) {
          setArtists(artists);
        }
      })
      .catch((error) => console.error(error));
    return () => {
      componentIsMounted.current = false;
    };
  }, [artists]);

  const playRandomSong = () => {
    setButtonRandom(true);
    const randomAlbum = Math.floor(Math.random() * 50 + 1);
    getSongs(randomAlbum)
      .then((response) => {
        const randomSong = Math.floor(Math.random() * response.length);
        setSelectedSong(response[randomSong]);
        setButtonRandom(false);
      })
      .catch((error) => console.error(error));
  };

  return (
    <div className="main">
      <div className="container-fluid">
        <div className="row">
          {!artists.length && <Loader />}
          {artists
            .filter((artist) => !!artist.name)
            .map((artist) => {
              return (
                <div
                  className="col-sm-6 col-md-2 p-3"
                  key={artist.id}
                  onClick={() => {
                    history.push(`/artist/${artist.id}`);
                  }}
                >
                  <div className="text-white img-wrapper">
                    <img
                      src={artist.image}
                      className="rounded-circle image"
                      alt={artist.name}
                    />
                    <div className="card-img-overlay middle">
                      <p className="card-title text-center mt-5 text">
                        {artist.name}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
        </div>
      </div>
      <button
        className="float btn btn-success"
        title="Cancion Aleatoria text-center"
        onClick={playRandomSong}
      >
        {buttonRandom ? (
          <KebabHorizontalIcon size={40} />
        ) : (
          <TriangleRightIcon size={40} />
        )}
      </button>
      {selectedSong && selectedSong.preview_url ? (
        <Player
          songUrl={selectedSong.preview_url}
          songImage=""
          songName={selectedSong.name}
          songDuration={selectedSong.duration_ms}
        />
      ) : null}
    </div>
  );
};
