import { useMutation, useQueryClient } from "@tanstack/react-query";
import { CreateEditCabin } from "../../services/apiCabins";
import toast from "react-hot-toast";

export function useEditCabin() {
  const queryClient = useQueryClient();

  const { mutate: editCabin, isLoading: isEditing } = useMutation({
    mutationFn: (newCabinData) =>
      CreateEditCabin(newCabinData.cabinData, newCabinData.id),
    mutationKey: ["cabins", "editCabin"],
    onSuccess: () => {
      toast.success("Cabin  succesfully  edited");
      queryClient.invalidateQueries({ queryKey: ["cabins"] });
    },
    onError: (err) => toast.error(err.message),
  });

  return { isEditing, editCabin };
}
