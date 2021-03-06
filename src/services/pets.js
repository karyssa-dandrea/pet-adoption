import { checkError, client } from "./client";

export async function fetchPets() {
  const resp = await client.from("pets").select("*");
  return checkError(resp);
}

export async function fetchPetsById(id) {
  const resp = await client.from("pets").select("*").match({ id: id }).single();
  return checkError(resp);
}

export async function updatePet(id, pet) {
  const resp = await client.from("pets").update(pet).match({ id });
  return checkError(resp);
}

export async function deletePet(id) {
  const resp = await client.from("pets").delete().match({ id: id });
  return checkError(resp);
}

export async function insertPet(pet) {
  const resp = await client.from("pets").insert("pet");
  return checkError(resp);
}
