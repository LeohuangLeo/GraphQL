const UserList = [
    {
        id: 1,
        name: "Leo",
        username: "leo",
        age: 1,
        nationality: "TW",
        friends: [
            {
                id: 3,
                name: "Grace",
                username: "grace",
                age: 3,
                nationality: "TW"
            }
        ]
    },
    {
        id: 2,
        name: "Terry",
        username: "terry",
        age: 2,
        nationality: "US"
    }
];

const MovieList = [
    {
        id: 1,
        name: "Love",
        yearOfPublication: 2020,
        isInTheaters: false
    },
    {
        id: 2,
        name: "Fight",
        yearOfPublication: 2024,
        isInTheaters: true
    }
]

module.exports = { UserList, MovieList };