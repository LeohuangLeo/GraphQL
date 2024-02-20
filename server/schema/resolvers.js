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
    },

    Mutation: {
        createUser: (parent, args) => {
            const user = args.createUserInput;
            const lastId = UserList[UserList.length - 1].id;
            user.id = lastId + 1;
            UserList.push(user);
            return user;
        },
        updateUsername: (parent, args) => {
            const newuser = args.updateUsernameInput.newUsername;
            // console.log(args)
            const user = _.find(UserList, { id: Number(args.updateUsernameInput.id) } )
            console.log(user)
            user.username = newuser
            return user;
        },
        deleteUser: (parent, args) => {
            const id = args.id;
            console.log(id)
            _.remove(UserList, (user) => user.id === Number(id));
            return null;
        }
    }
}

module.exports = { resolvers };