import React, { useState, useEffect, useRef } from "react";
import { useParams, useHistory } from "react-router-dom";
import { Album, Artist as ArtistModel } from "../../shared/models";
import { getArtist, getAlbums } from "../../services/api-service";
import { StarFillIcon, TriangleRightIcon } from "@primer/octicons-react";
import { Loader } from "../../shared/components";
import "./Artist.scss";


export const Artist: React.FC = () => {
  const { id } = useParams();
  const history = useHistory();
  const [albums, setAlbums] = useState<Album[]>([]);
  const [artist, setArtist] = useState<ArtistModel>({} as ArtistModel);
  const componentIsMounted = useRef<boolean>(true);

  useEffect(() => {
    Promise.all([getArtist(id), getAlbums(id)]).then((values) => {
      if (componentIsMounted.current) {
        setArtist(values[0]);
        setAlbums(values[1]);
      }
    });
    return () => {
      componentIsMounted.current = false;
    };
  }, [albums, id]);

  return (
    <div className="artist">
      {!albums.length && <Loader />}
      <div className="jumbotron header pb-2 text-white text-center">
        <img
          src={artist.image}
          className="rounded-circle image-size"
          alt={artist.name}
        />
        <h3 className="font-weight-bold pt-5">
          {artist.name}
          <span className="popularity">
            <StarFillIcon size={12} className="star" />
            {artist.popularity}
          </span>
        </h3>
      </div>
      <div className="container">
        {albums.map((album) => {
          return (
            <div className="row no-gutters p-3" key={album.id}>
              <div className="col-md-1">
                <img
                  src={album.image}
                  className="img-fluid rounded-circle"
                  alt={artist.name}
                  style={{ height: "60px", width: "60px" }}
                />
              </div>
              <div className="col-md-11 list-border text-white">
                <div className="row no-gutters">
                  <div className="col-md-10">
                    <h6 className="p-0">{album.name}</h6>
                    <p className="m-0 sub-title">
                      Canciones: {album.total_tracks}
                    </p>
                  </div>
                  <div className="col-md-2">
                    <button
                      className="btn btn-link float-right text-white"
                      onClick={() =>
                        history.push(`/album/${album.id}`, album)
                      }
                    >
                      <TriangleRightIcon size={30} />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
