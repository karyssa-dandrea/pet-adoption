import { checkError, client } from "./client";

export async function fetchPets() {
  const resp = await client.from("pets").select("*");
  return checkError(resp);
}

export async function fetchPetsById(id) {
  const resp = await client.from("pets").select("*").match({ id }).single();
  return checkError(resp);
}
