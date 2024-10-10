import { createRouter, createWebHistory } from "vue-router";
import login from "../views/login/login.vue";
import user from "../views/user/user.vue";
import work from "../views/user/components/work.vue";
import Projects from "../views/user/components/project.vue";
import AI from "../views/user/components/ai.vue";
import Notes from "../views/user/components/note.vue";
import Code from "../views/user/components/code.vue";
import Products from "../views/user/components/box.vue";
import Insights from "../views/user/components/think.vue";
import Knowledge from "../views/user/components/book.vue";
import Automation from "../views/user/components/auto.vue";
import recent from "../views/user/components/codecom/BaseA.vue";
import repos from "../views/user/components/codecom/BaseB.vue";
import source from "../views/user/components/codecom/BaseC.vue";

const routes = [
  {
    path: "/",
    name: "Login",
    component: login,
  },
  {
    path: "/user",
    name: "user",
    component: user,
    children: [
      {
        path: "/work",
        name: "work",
        component: work,
      },
      {
        path: "/project",
        name: "Projects",
        component: Projects,
      },
      {
        path: "/ai",
        name: "AI",
        component: AI,
      },
      {
        path: "/note",
        name: "Notes",
        component: Notes,
      },
      {
        path: "/code",
        name: "Code",
        component: Code,
        children: [
          {
            path: "/recent",
            name: "recent",
            component: recent,
          },
          {
            path: "/repos",
            name: "repos",
            component: repos,
          },
          {
            path: "/open-source",
            name: "open-source",
            component: source,
          },
        ],
      },
      {
        path: "/box",
        name: "Products",
        component: Products,
      },
      {
        path: "/think",
        name: "Insights",
        component: Insights,
      },
      {
        path: "/book",
        name: "Knowledge",
        component: Knowledge,
      },
      {
        path: "/auto",
        name: "Automation",
        component: Automation,
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
