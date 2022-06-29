import { checkError, client } from './client';

export async function fetchPets() {
  const resp = await fetch(
    `${process.env.REACT_APP_SUPABASE_URL}/rest/v1/pets?`,
    {
      headers: {
        apikey: process.env.REACT_APP_SUPABASE_KEY,
        Authorization: `Bearer ${process.env.REACT_APP_SUPABASE_KEY}`,
      },
    }
  );
  const data = await resp.json();
  return data;
}

export async function fetchPetsById(id) {
  const resp = await client.from('pets').select('*').match({ id }).single();
  return checkError(resp);
}
