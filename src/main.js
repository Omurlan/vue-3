import { createApp } from "vue";
import App from "./App";
import components from "@/components/UI";
import directives from "@/directives";
import router from "@/router";
import store from "@/store";
import { OhVueIcon, addIcons } from "oh-vue-icons";
import {
  BiEmojiSmileFill,
  RiEmotionSadFill,
  CoDelete,
  BiArrow90DegLeft,
  CoArrowBottom,
} from "oh-vue-icons/icons";

addIcons(
  BiEmojiSmileFill,
  RiEmotionSadFill,
  CoDelete,
  BiArrow90DegLeft,
  CoArrowBottom
);

const app = createApp(App);

components.forEach((component) => {
  app.component(component.name, component);
});

directives.forEach((directive) => {
  app.directive(directive.name, directive);
});

app.component("v-icon", OhVueIcon);

app.use(router);
app.use(store);

app.mount("#app");
