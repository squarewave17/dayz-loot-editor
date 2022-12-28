import { createRouter, createWebHashHistory } from "vue-router";
import EditorView from "../views/Editor.vue";
import TestDataObject from "../views/TestDataObject.vue";
import TestOutput from "../views/TestOutput.vue";

const routes = [
  {
    path: "/",
    name: "editor",
    component: EditorView,
  },
  {
    path: "/data",
    name: "data",
    component: TestDataObject,
  },
  {
    path: "/output",
    name: "output",
    component: TestOutput,
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
