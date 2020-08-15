import React, { useState, useEffect, useRef } from "react";
import { Song, Album as AlbumMode } from "../../shared/models";
import { getSongs } from "../../services/api-service";
import { useParams, useLocation } from "react-router-dom";
import { Player } from "../Player";
import { Loader } from "../../shared/components";
import "./Album.scss";
import { secondsFormat } from "../../shared/utils/utils";

export const Album: React.FC = () => {
  const { id } = useParams();
  const location = useLocation();
  const album = location.state as AlbumMode;
  const [songs, setSongs] = useState<Song[]>([]);
  const [selectedSong, setSelectedSong] = useState<Song>({} as Song);
  const componentIsMounted = useRef<boolean>(true);

  useEffect(() => {
    getSongs(id)
      .then((response) => {
        if (componentIsMounted.current) {
          setSongs(response);
        }
      })
      .catch((error) => console.log(error));
    return () => {
      componentIsMounted.current = false;
    };
  }, [songs, id]);

  const playSong = (song: Song): void => {
    setSelectedSong(song);
  };

  return (
    <div className="album">
      {songs && songs.length ? (
        <div>
          <div className="jumbotron header-d text-white">
            <div className="row">
              <div className="col-md-2">
                <img
                  src={album.image}
                  className="img-fluid img-thumbnail"
                  alt={album.name}
                />
              </div>
              <div className="col-md-10">
                <h3 className="font-weight-bold pt-5">{album.name}</h3>
                <p>Álbum • {album.name}</p>
                <p>{album.total_tracks} canciones</p>
              </div>
            </div>
          </div>
          <div className="container-fluid">
            <h3 className="p-3 text-white">Canciones</h3>
            {songs.map((song, index) => {
              return (
                <div
                  className="row no-gutters p-3"
                  onClick={() => {
                    playSong(song);
                  }}
                  key={song.id}
                >
                  <div className="col-md-12 list-border text-white">
                    <div className="row">
                      <div className="col-md-10">
                        <h6 className="p-0">
                          {index + 1}{" "}
                          <span className="item-p">{song.name}</span>
                        </h6>
                      </div>
                      <div className="col-md-2">
                        {!song.preview_url && (
                          <span className="badge badge-warning">
                            No Encontrado
                          </span>
                        )}
                        <h6 className="p-0 float-right">
                          {secondsFormat(Number(song.duration_ms))}
                        </h6>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      ) : (
        <Loader />
      )}

      {selectedSong && selectedSong.preview_url ? (
        <Player
          songUrl={selectedSong.preview_url}
          songImage={album.image}
          songName={selectedSong.name}
          songDuration={selectedSong.duration_ms}
        />
      ) : null}
    </div>
  );
};
