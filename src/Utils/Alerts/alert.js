import { toast } from 'react-toastify';
export const successMessage=()=>{
    toast.success("the operation done...",
        {
            position: "top-center",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
            icon:"🦄"
            }
        );
}