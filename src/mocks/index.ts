import { Song, Artist } from "../shared/models";

export const song: Song = {
  id: 302,
  name: "Uprising",
  spotify_url: "https://open.spotify.com/track/3FiVtA8z2yUOyw7MiHjiVM",
  preview_url:
    "https://p.scdn.co/mp3-preview/82bd3ffd727cc8c743e55ad3c84737c5fda147c2?cid=76ef95421e3a4e7aac6358eba6727257",
  duration_ms: "146887",
  explicit: "f",
};

export const songs: Song[] = [
  {
    id: 11,
    name: "The Ultracheese",
    spotify_url: "https://open.spotify.com/track/4VysGAsuHWHDxasPnTgwbo",
    preview_url:
      "ttps://p.scdn.co/mp3-preview/a39ed52d9b4ea57be3c972c5195ad33f772a1492?cid=76ef95421e3a4e7aac6358eba6727257",
    duration_ms: "236655",
    explicit: "f",
  },
  {
    id: 45,
    name: "Uprising",
    spotify_url: "https://open.spotify.com/track/3FiVtA8z2yUOyw7MiHjiVM",
    preview_url: "",
    duration_ms: "146887",
    explicit: "f",
  },
  {
    id: 17,
    name: "Four Out Of Five",
    spotify_url: "https://open.spotify.com/track/5Z5nbOXhsSbySVC7WUc6y9",
    preview_url:
      "https://p.scdn.co/mp3-preview/50649285856b2324b33046c6b1e03172ee90e808?cid=76ef95421e3a4e7aac6358eba6727257",
    duration_ms: "312346",
    explicit: "f",
  },
];

export const artist: Artist[] = [
  {
    id: 1,
    name: "Arctic Monkeys",
    image: "https://i.scdn.co/image/ed0552e9746ed2bbf04ae4bcb5525700ca31522d",
    genres: [
      "garage_rock",
      "modern_rock",
      "permanent_wave",
      "rock",
      "sheffield_indie",
    ],
    popularity: "83.0",
    spotify_url: "https://open.spotify.com/artist/7Ln80lUS6He07XvHI8qqHH",
    spotify_id: "7Ln80lUS6He07XvHI8qqHH",
    created_at: "2019-10-23T13:49:20.323Z",
    updated_at: "2019-10-23T13:49:20.323Z",
  },
  {
    id: 2,
    name: "Metallica",
    image: "https://i.scdn.co/image/5a06711d7fc48d5e0e3f9a3274ffed3f0af1bd91",
    genres: [
      "hard_rock",
      "metal",
      "old_school_thrash",
      "rock",
      "speed_metal",
      "thrash_metal",
    ],
    popularity: "84.0",
    spotify_url: "https://open.spotify.com/artist/2ye2Wgw4gimLv2eAKyk1NB",
    spotify_id: "2ye2Wgw4gimLv2eAKyk1NB",
    created_at: "2019-10-23T13:52:32.755Z",
    updated_at: "2019-10-23T13:52:32.755Z",
  },
  {
    id: 3,
    name: "Nirvana",
    image: "https://i.scdn.co/image/84282c28d851a700132356381fcfbadc67ff498b",
    genres: [
      "alternative_rock",
      "grunge",
      "permanent_wave",
      "post-grunge",
      "rock",
    ],
    popularity: "81.0",
    spotify_url: "https://open.spotify.com/artist/6olE6TJLqED3rqDCT0FyPh",
    spotify_id: "6olE6TJLqED3rqDCT0FyPh",
    created_at: "2019-10-23T13:58:28.853Z",
    updated_at: "2019-10-23T13:58:28.853Z",
  },
  {
    id: 4,
    name: "Diomedes Diaz",
    image: "https://i.scdn.co/image/c3b77cdff8b152466447e4573c45613b06fbcf1b",
    genres: ["vallenato"],
    popularity: "60.0",
    spotify_url: "https://open.spotify.com/artist/66NweiA3nU84k1S3SZdTSG",
    spotify_id: "66NweiA3nU84k1S3SZdTSG",
    created_at: "2019-10-23T14:08:06.257Z",
    updated_at: "2019-10-23T14:08:06.257Z",
  },
];
