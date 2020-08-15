import React, { useRef } from "react";
import "./Player.scss";
import { secondsFormat } from "../../shared/utils/utils";

interface AudioPlayer {
  songUrl: string;
  songName: string;
  songImage: string;
  songDuration: string;
}

export const Player: React.FC<AudioPlayer> = (props) => {
  const componentIsMounted = useRef<boolean>(true);

  if (componentIsMounted.current) {
    const element = document.getElementById("audio-player");
    element?.setAttribute("src", props.songUrl);
  }

  return (
    <div className="footer">
      <div className="container-fluid">
        <div className="row p-2">
          <div className="col-sm-6 col-md-4">
            <audio
              controls
              autoPlay
              controlsList="nodownload"
              className="mt-1"
              id="audio-player"
            >
              <source src={props.songUrl} type="audio/ogg" />
              <source src={props.songUrl} type="audio/mpeg" />
              Your browser does not support the audio element.
            </audio>
          </div>
          <div className="col-md-4">
            <div className="row no-gutters">
              <div className="col-md-2">
                <img
                  src={props.songImage}
                  className="img-fluid"
                  alt={props.songName}
                  style={{ height: "50px", width: "50px" }}
                />
              </div>
              <div className="col-md-10 text-white">
                <div className="row no-gutters">
                  <div className="col-md-10">
                    <h6 className="p-0">{props.songName}</h6>
                    <p className="m-0">
                      Duracion: {secondsFormat(Number(props.songDuration))}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
