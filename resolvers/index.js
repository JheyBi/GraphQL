const users = [
    {id: String(Math.random()), name: 'John',email: 'jonh@gmail.com',active: true},
    {id: String(Math.random()), name: 'Mary',email: 'mary@gmail.com',active: false},
    {id: String(Math.random()), name: 'Peter',email: 'peter@gmail.com',active: true}
];

const resolvers = {
    Query: {
        hello: () => 'Hello world!',
        users: () => users,
        getUserByEmail: (_, args) => {
            return users.find((user) => user.email === args.email)
        },
    },

    Mutation: {
        createUser: (_,args) => {
            const newUser = {
                id: String(Math.random()),
                name: args.name,
                email: args.email,
                active: true
            };
            users.push(newUser);
            return newUser;
        },
        updateUser: (_,args) => {
            const updatedUser = {
                id: args.id,
                name: args.name,
                email: args.email,
                active: true
            };
            users.push(updatedUser);
            return updatedUser;
        }
    },
};

module.exports = resolvers;
