export const productResolvers = {
  Query: {
    products: async () => {
      const res = await fetch("https://dummyjson.com/products");
      const json = await res.json();
      return json.products;
    },
    product: async (_: unknown, { id }: { id: number }) => {
      const res = await fetch(`https://dummyjson.com/products/${id}`);
      const response = await res.json();
      return response;
    },
  },
  Mutation: {
    addProduct: async (_: any, { input }: { input: any }) => {
      const response = await fetch("https://dummyjson.com/products/add", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(input),
      });

      if (!response.ok) {
        throw new Error(`Failed to add product: ${response.statusText}`);
      }

      const product = await response.json();
      return product;
    },
  },
};
