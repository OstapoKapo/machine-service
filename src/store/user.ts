import { create } from "zustand";
import { immer } from 'zustand/middleware/immer';
import { fullUser } from "../types/index";

type State = {
    user: fullUser
}

type Actions = {
    updateUser: (newUser: fullUser) => void
}

export const userStore = create<State & Actions>()(
    immer((set) => ({
      user: {
        name: '',
        email: '',
        password: '',
        profileImg: '',
        cars: [],
        __id: '',
        _v: 0
      },
      updateUser: (newUser) => set(((state) => ({
        user: {...newUser}
    }))),
    })),
)