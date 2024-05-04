import {create} from 'zustand'

interface useLoadingTypes {
    isLoading: boolean,
    setIsLoading: (value : boolean) => void,
}

const useLoading = create<useLoadingTypes>((set) => ({
    isLoading: false,
    setIsLoading: (value : boolean) => set({isLoading : value})
    })
)
