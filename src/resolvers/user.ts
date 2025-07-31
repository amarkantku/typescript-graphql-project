let users = [
  { id: "1", name: "Alice", email: "alice@example.com", age: 30 },
  { id: "2", name: "Bob", email: "bob@example.com", age: 25 },
];

export const userResolvers = {
  Query: {
    users: () => users,
    user: (_: any, { id }: { id: string }) =>
      users.find((u) => u.id === id) || null,
  },
  Mutation: {
    createUser: (_: any, { input }: any) => {
      const newUser = {
        id: (users.length + 1).toString(),
        ...input,
      };
      users.push(newUser);
      return newUser;
    },
    updateUser: (_: any, { id, input }: any) => {
      const index = users.findIndex((u) => u.id === id);
      if (index === -1) return null;
      users[index] = { ...users[index], ...input };
      return users[index];
    },
    deleteUser: (_: any, { id }: { id: string }) => {
      const index = users.findIndex((u) => u.id === id);
      if (index === -1) return false;
      users.splice(index, 1);
      return true;
    },
  },
};
export default userResolvers;
