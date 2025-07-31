const books = [
  {
    id: 1,
    title: "The Awakening",
    author: "Kate Chopin",
  },
  {
    id: 2,
    title: "City of Glass",
    author: "Paul Auster",
  },
];

export const bookResolvers = {
  Query: {
    books: () => {
      return books;
    },
    book: (_: unknown, { id }: { id: number }) => {
      return books.find((book) => +book.id === +id);
    },
  },
  Mutation: {
    addBook: (
      _: unknown,
      {
        title,
        author,
      }: {
        title: string;
        author: string;
      }
    ) => {
      const newBook = { id: books.length + 1, title, author };
      books.push(newBook);
      return newBook;
    },
  },
};
