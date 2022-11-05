import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    name: "home",
    component: () => import("@/views/Home.vue"),
  },
  {
    path: "/profile",
    children: [
      {
        path: "edit",
        component: () => import("@/views/profile/edit.vue"),
      },
      {
        path: "settings",
        component: () => import("@/views/profile/settings.vue"),
      },
      {
        path: "privacy-and-security",
        component: () => import("@/views/profile/privacy-and-security.vue"),
      },
      {
        path: "log-out",
        component: () => import("@/views/profile/log-out.vue"),
      },
    ],
  },
  {
    path: "/auths",
    children: [
      {
        path: "tables-group",
        children: [
          {
            path: "list",
            component: () => import("@/views/auths/tables-group/list.vue"),
          },
          {
            path: "create",
            component: () => import("@/views/auths/tables-group/create.vue"),
          },
          {
            path: "edit/:id",
            component: () => import("@/views/auths/tables-group/edit.vue"),
          },
          {
            path: "detail/:id",
            component: () => import("@/views/auths/tables-group/detail.vue"),
          },
          {
            path: "tables",
            children: [
              {
                path: "list",
                component: () => import("@/views/auths/tables-group/tables/list.vue"),
              },
              {
                path: "create",
                component: () => import("@/views/auths/tables-group/tables/create.vue"),
              },
              {
                path: "edit/:id",
                component: () => import("@/views/auths/tables-group/tables/edit.vue"),
              },
              {
                path: "detail/:id",
                component: () => import("@/views/auths/tables-group/tables/detail.vue"),
              },
            ],
          },
        ],
      },
      {
        path: "authority-groups",
        children: [
          {
            path: "list",
            component: () => import("@/views/auths/authority-groups/list.vue"),
          },
          {
            path: "create",
            component: () => import("@/views/auths/authority-groups/create.vue"),
          },
        ],
      },
    ],
  },
  {
    path: "/tables",
    children: [
      {
        path: "list",
        component: () => import("@/views/tables/list.vue"),
      },
      {
        path: "create",
        component: () => import("@/views/tables/create.vue"),
      },
    ],
  },
  {
    path: "/users",
    children: [
      {
        path: "list",
        component: () => import("@/views/users/list.vue"),
      },
      {
        path: "create",
        component: () => import("@/views/users/create.vue"),
      },
      {
        path: "edit/:id",
        component: () => import("@/views/users/edit.vue"),
      },
      {
        path: "detail/:id",
        component: () => import("@/views/users/detail.vue"),
      },
    ],
  },
  {
    path: "/settings",

    component: () => import("@/views/settings/index.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
