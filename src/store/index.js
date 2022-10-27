import { createStore } from "vuex";
import postModule from "@/store/postModule";
import themeModule from "@/store/themeModule";

export default createStore({
  modules: {
    post: postModule,
    theme: themeModule,
  },
});
