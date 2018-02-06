import { Author, Post } from "./connectors";
import db from "../models";

let { Artist, Song } = db;

const resolvers = {
  Query: {
    artists: () => {
      return Artist.findAll();
    },
    artist(_, args) {
      console.log(args);
      return Artist.find({ where: args });
    },
    song(root, args) {
      return Song.find({ where: args });
    },
    songs: () => {
      return Song.findAll();
    }
  },

  Mutation: {
    addArtist(root, args) {
      return Artist.create({
        name: args.name
      });
    },

    addSong(root, args) {
      return Song.create({ name: args.name, ArtistId: args.artistId });
    },

    updateSong(root, args) {
      return Song.update({ name: args.name }, { where: { id: args.id } }).then(
        () => Song.find({ where: { name: args.name } })
      );
    }
  },

  Artist: {
    songs(artist) {
      return artist.getSongs();
    }
  },

  Song: {
    artist(song) {
      return song.getArtist();
    }
  }
};

export default resolvers;
