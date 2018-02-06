import casual from "casual";
import _ from "lodash";
import db from "../models";

let { sequelize, Artist, Song } = db;

// sequelize.sync({ force: true }).then(() => {
//   _.times(10, () => {
//     return Artist.create({
//       name: casual.first_name
//     }).then(artist => {
//       return artist.createSong({
//         name: "FM"
//       });
//     });
//   });
// });
