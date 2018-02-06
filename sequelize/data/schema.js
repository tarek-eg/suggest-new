import { makeExecutableSchema } from "graphql-tools";
import resolvers from "./resolvers";

const typeDefs = `
type Query {
  artists : [Artist]
  artist(name: String): Artist
  songs: [Song]
  song(name: String): Song
  
}

type Mutation {
  addArtist(name: String): Artist
  addSong(name: String, artistId: Int): Song
  updateSong(name: String, id: Int): Song
}

type Artist {
  id: Int
  name: String
  songs: [Song]
}

type Song {
  id: Int
  name: String
  artist: Artist
}

`;

const schema = makeExecutableSchema({ typeDefs, resolvers });

export default schema;
