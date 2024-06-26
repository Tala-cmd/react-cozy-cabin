import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createEditCabin } from "../../services/apiCabins";
import toast from "react-hot-toast";

export function useCreateCabin(){
  const queryClient = useQueryClient()

  const {mutate: createCabin, isPending: isCreating} = useMutation({
    mutationFn: createEditCabin, // same as (newCabin)=> createCabin(newCabin)
    onSuccess: () => {
      toast.success('Cabin successfully created') 

      queryClient.invalidateQueries({ 
        queryKey: ['cabins'] });
    },
    onError: (err) => toast.error(err.message)
  })

  return {isCreating, createCabin}
} 

