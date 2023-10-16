import create from "zustand";
import { devtools } from "zustand/middleware";
import axios from "axios";

const store = (set) => ({
  data: [],
  name: "",
  birth: "",
  num:"",
  email: "",
  pw: "",



  setName: (name) => set({ name }),
  setBirth: (birth) => set({ birth }),
  setNum: (num) => set({ num }),
  setEmail: (email) => set({ email }),
  setPw: (pw) => set({ pw }),

  isLogin: false,
  loading: false,
  hasErrors: false,
  setIsLogin: (isLogin) => set({ isLogin }),
  

  // zustand 내에서 axios post 요청
  fetch: async (name, birth, num, email, pw) => {
    set(() => ({ loading: true }));
    try {
      const response = await axios.post("http://localhost:3001/user", {
        name,
        birth,
        num,
        email,
        pw
      });
      set((state) => ({ data: (state.data = response.data), loading: false }));
      console.log(response.data);
    } catch (err) {
      set(() => ({ hasErrors: true, loading: false }));
    }
  },
});

const useStore = create(
  process.env.NODE_ENV !== "production" ? devtools(store) : store
);

export default useStore;