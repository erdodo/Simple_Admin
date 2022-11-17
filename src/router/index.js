import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    name: "home",
    component: () => import("@/views/Home.vue"),
  },
  {
    path: "/market",
    name: "market",
    component: () => import("@/views/iyzico/odeme.vue"),
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
          {
            path: "edit/:id",
            component: () => import("@/views/auths/authority-groups/edit.vue"),
          },
          {
            path: "detail/:id",
            component: () => import("@/views/auths/authority-groups/detail.vue"),
          },
          {
            path: "auths/:auths_id/",
            children: [
              {
                path: "list",
                component: () => import("@/views/auths/authority-groups/auths/list.vue"),
              },
              {
                path: "create",
                component: () => import("@/views/auths/authority-groups/auths/create.vue"),
              },
              {
                path: "edit/:id",
                component: () => import("@/views/auths/authority-groups/auths/edit.vue"),
              },
              {
                path: "detail/:id",
                component: () => import("@/views/auths/authority-groups/auths/detail.vue"),
              },
            ],
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
      {
        path: "edit/:id",
        component: () => import("@/views/tables/edit.vue"),
      },
      {
        path: "detail/:id",
        component: () => import("@/views/tables/detail.vue"),
      },
      {
        path: "datas/:table_name",
        children: [
          {
            path: "list",
            component: () => import("@/views/tables/datas/list.vue"),
          },
          {
            path: "create",
            component: () => import("@/views/tables/datas/create.vue"),
          },
          {
            path: "edit/:id",
            component: () => import("@/views/tables/datas/edit.vue"),
          },
          {
            path: "detail/:id",
            component: () => import("@/views/tables/datas/detail.vue"),
          },
        ],
      },
      {
        path: "columns/:table_name",
        children: [
          {
            path: "list",
            component: () => import("@/views/tables/columns/list.vue"),
          },
          {
            path: "create",
            component: () => import("@/views/tables/columns/create.vue"),
          },
          {
            path: "edit/:id",
            component: () => import("@/views/tables/columns/edit.vue"),
          },
          {
            path: "detail/:id",
            component: () => import("@/views/tables/columns/detail.vue"),
          },
        ],
      },
      {
        path: "auths/:table_name",
        children: [
          {
            path: "list",
            component: () => import("@/views/tables/auths/list.vue"),
          },
          {
            path: "create",
            component: () => import("@/views/tables/auths/create.vue"),
          },
          {
            path: "edit/:auths_id",
            component: () => import("@/views/tables/auths/edit.vue"),
          },
          {
            path: "detail/:auths_id",
            component: () => import("@/views/tables/auths/detail.vue"),
          },
        ],
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
    path: "/market",
    children: [
      {
        path: "list",
        component: () => import("@/views/satin-alma/market/list.vue"),
      },
      {
        path: "create",
        component: () => import("@/views/satin-alma/market/create.vue"),
      },
      {
        path: "edit/:id",
        component: () => import("@/views/satin-alma/market/edit.vue"),
      },
      {
        path: "detail/:id",
        component: () => import("@/views/satin-alma/market/detail.vue"),
      },
    ],
  },
  {
    path: "/market-islemler",
    children: [
      {
        path: "list",
        component: () => import("@/views/satin-alma/islemler/list.vue"),
      },
      {
        path: "create",
        component: () => import("@/views/satin-alma/islemler/create.vue"),
      },
      {
        path: "edit/:id",
        component: () => import("@/views/satin-alma/islemler/edit.vue"),
      },
      {
        path: "detail/:id",
        component: () => import("@/views/satin-alma/islemler/detail.vue"),
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
