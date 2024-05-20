import supabase, {supabaseUrl} from "./supabase";

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

export async function createEditCabin( newCabin, id ){
  const hasImagePath = newCabin.image?.startsWith?.("https://"); //Optional chaining cause image might not be a string
  
  // reference path https://sxmohtbvjcpwxrvfcgfu.supabase.co/storage/v1/object/public/cabin-images/cabin-001.jpg
  const imageName = `${Math.random()}-${newCabin.image.name}`
  .replaceAll('/', '')

  const imagePath = hasImagePath ? newCabin.image 
    :`${supabaseUrl}/storage/v1/object/public/cabin-images/${imageName}`

  // 1. Create/Edit cabin
  let query = supabase.from('cabins') 
  
  // A) CREATE
  if(!id)
    query = query.insert([{...newCabin, image: imagePath}]) //placed in an array

  // B) EDIT
  if(id) 
    query = query.update({...newCabin, image: imagePath}) //placed without an array
    .eq('id', id)
  
  const { data, error } = await query.select().single()  

  if(error){
    console.error('error')
    throw new Error('Cabin cannot be created')
  }
  
  // 2. Upload image 
  const { error: storageError } = await supabase
  .storage
  .from('cabin-images')
  .upload(imageName, newCabin.image)

  // 3. Delete he cabin IF there was an error uploading image
  if(storageError){
    await supabase.from('cabins').delete()
    .eq('id', data.id)
    console.error(storageError)
    throw new Error('Cabin image cannot be uploaded and the cabin was not created')
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
