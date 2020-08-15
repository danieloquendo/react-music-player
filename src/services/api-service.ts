import { get } from "../shared/http";
import { Song, Album, Artist } from "../shared/models";
import { config } from "../shared/config";

export const getAllArtists = async (): Promise<Artist[]> => {
  const response = await get<Artist[]>(
    `${config.API_URL}/artists/`
  );
  const artists = response.parsedBody as Artist[];
  return artists;
};

export const getArtist = async (id: number): Promise<Artist> => {
  const response = await get<Artist>(
    `${config.API_URL}/artists/${id}`
  );
  const artist = response.parsedBody as Artist;
  return artist;
};

export const getAlbums = async (id: number): Promise<Album[]> => {
  const response = await get<{ artist: number; albums: Album[] }[]>(
    `${config.API_URL}/artists/${id}/albums`
  );
  const albums = response.parsedBody?.find((item) => item.artist === Number(id))
    ?.albums as Album[];
  return albums;
};

export const getSongs = async (id: number): Promise<Song[]> => {
  const response = await get<{ album: number; songs: Song[] }[]>(
    `${config.API_URL}/albums/${id}/songs`
  );
  const songs = response.parsedBody?.find((item) => item.album === Number(id))
    ?.songs as Song[];
  return songs;
};
