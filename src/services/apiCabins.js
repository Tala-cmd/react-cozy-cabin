import supabase from "./supabase";

export async function getCabins(){
  const { data, error } = await supabase
  .from('cabins')
  .select('*')

  if(error){
    console.error('error')
    throw new Error('Cabins cannot be loaded')
  }

  return data
}

export async function createCabin(newCabin){
  const { data, error } = await supabase
  .from('cabins')
  .insert([newCabin])
  

  if(error){
    console.error('error')
    throw new Error('Cabin cannot be created')
  }

  return data
}

export async function deleteCabin(id){
  const { data, error } = await supabase
  .from('cabins')
  .delete()
  .eq('id', id)

  if(error){
    console.error('error')
    throw new Error('Cabin cannot be deleted')
  }

  return data
}
