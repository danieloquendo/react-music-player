import React, { Fragment } from "react";
import { Song } from "../../../../shared/models";
import { secondsFormat } from "../../../../shared/utils/utils";

interface Suggested {
  playSong: (song: Song) => void;
  songs: Song[];
}

export const SuggestedSong: React.FC<Suggested> = (props) => {
  return (
    <Fragment>
      {props.songs && props.songs.length && (
        <div className="container-fluid">
          <h3 className="p-3 text-white">Sugerencia</h3>
          {props.songs.map((song, index) => {
            return (
              <div
                className="row no-gutters p-3 pointer"
                onClick={() => {
                  props.playSong(song);
                }}
                key={song.id}
              >
                <div className="col-md-12 list-border text-white">
                  <div className="row">
                    <div className="col-md-10">
                      <h6 className="p-0">
                        {index + 1} <span className="item-p">{song.name}</span>
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
      )}
    </Fragment>
  );
};
