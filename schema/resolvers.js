const { UserList, MovieList } = require("../FakeData");
const _ = require("lodash");

const resolvers = {
    Query: {
        users() {
            console.log(UserList);
            return UserList;
          },
        user: (parent, args) => {
            const id = args.id;
            console.log(id);
            const user = _.find(UserList, { id: Number(id) });
            console.log(user);
            return user;
        },
        movies: () => {
            return MovieList;
        },
        movie: (parent, args) => {
            const name = args.name;
            const movie = _.find(MovieList, { name });
            return movie;
        }
    },
    User: {
        favoriteMovies: () => {
            return _.filter(
                MovieList,
                (movie) => movie.yearOfPublication >= 2022
            );
        }
    }
}

module.exports = { resolvers };