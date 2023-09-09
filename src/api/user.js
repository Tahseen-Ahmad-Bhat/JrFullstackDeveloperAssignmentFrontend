import client from "./client";

export const createUser = async (userData) => {
  try {
    const { data } = await client.post("/user/createUser", userData);

    return data;
  } catch (error) {
    return { error: error.message || error };
  }
};
