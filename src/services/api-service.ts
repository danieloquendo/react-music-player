import { get } from "../shared/http";
import { Song, Album, Artist, ArtistAlbum, AlbumSong } from "../shared/models";
import { config } from "../shared/config";

export const getAllArtists = async (): Promise<Artist[]> => {
  const response = await get<Artist[]>(`${config.API_URL}/artists/`);
  const artists = response.parsedBody as Artist[];
  return artists;
};

export const getArtist = async (id: number): Promise<Artist> => {
  const response = await get<Artist>(`${config.API_URL}/artists/${id}`);
  const artist = response.parsedBody as Artist;
  return artist;
};

export const getAlbums = async (id: number): Promise<Album[]> => {
  const response = await get<ArtistAlbum[]>(
    `${config.API_URL}/artists/${id}/albums`
  );
  const albums = response.parsedBody?.find((item) => item.artist === Number(id))
    ?.albums as Album[];
  return albums;
};

export const getSongs = async (id: number): Promise<Song[]> => {
  const response = await get<AlbumSong[]>(
    `${config.API_URL}/albums/${id}/songs`
  );
  const songs = response.parsedBody?.find((item) => item.album === Number(id))
    ?.songs as Song[];
  return songs;
};

export const suggestedSong = async (artistId: number): Promise<Song[]> => {
  const albums = await getAlbums(artistId);
  var randomAlbum = albums[Math.floor(Math.random() * albums.length)];

  const response = await get<AlbumSong[]>(
    `${config.API_URL}/albums/${randomAlbum.id}/songs`
  );

  const allSongs = response.parsedBody;
  const selectedSongs = allSongs
    ?.filter((song) => albums.some((albums) => albums.id === song.album))
    .map((song) => song.songs);

  const merged = selectedSongs?.flat(1);
  const suggestedSongs = [];
  const suggestedItems = 3;

  for (let i = 0; i < suggestedItems; i++) {
    if (merged && merged.length) {
      const randomSong = merged[Math.floor(Math.random() * albums.length)];
      suggestedSongs.push(randomSong);
    }
  }

  return suggestedSongs as Song[];
};
