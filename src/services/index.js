import axios from "axios";
import { ElNotification } from "element-plus";

const base = "http://localhost:8888/api/";
const token = 0; //localStorage.getItem("token");
const list = async (table_name, params) => {
  return await axios({
    method: "post",
    url: base + "/tables/" + table_name,
    data: params,
    headers: {
      token: token,
    },
  }).catch((res) => {
    if (res.response.status == 401) {
      ElNotification({
        title: "Error",
        message: "Unauthorized",
        type: "error",
      });
    }
  });
};
const detail = async (table_name, id) => {
  return await axios({
    method: "get",
    url: base + "/tables/" + table_name + "/" + id + "/get",

    headers: {
      token: token,
    },
  }).catch((res) => {
    if (res.response.status == 401) {
      ElNotification({
        title: "Error",
        message: "Unauthorized",
        type: "error",
      });
    }
  });
};

const create = async (table_name) => {
  return await axios({
    method: "get",
    url: base + "/tables/" + table_name + "/create",

    headers: {
      token: token,
    },
  }).catch((res) => {
    if (res.response.status == 401) {
      ElNotification({
        title: "Error",
        message: "Unauthorized",
        type: "error",
      });
    }
  });
};

const store = async (table_name, params) => {
  return await axios({
    method: "put",
    url: base + "/tables/" + table_name + "/store",
    data: params,
    headers: {
      token: token,
    },
  }).catch((res) => {
    if (res.response.status == 401) {
      ElNotification({
        title: "Error",
        message: "Unauthorized",
        type: "error",
      });
    }
  });
};

const edit = async (table_name, id) => {
  return await axios({
    method: "get",
    url: base + "/tables/" + table_name + "/" + id + "/edit",

    headers: {
      token: token,
    },
  }).catch((res) => {
    if (res.response.status == 401) {
      ElNotification({
        title: "Error",
        message: "Unauthorized",
        type: "error",
      });
    }
  });
};

const update = async (table_name, id, params) => {
  return await axios({
    method: "patch",
    url: base + "/tables/" + table_name + "/" + id + "/update",
    data: params,
    headers: {
      token: token,
    },
  }).catch((res) => {
    if (res.response.status == 401) {
      ElNotification({
        title: "Error",
        message: "Unauthorized",
        type: "error",
      });
    }
  });
};

const del = async (table_name, id) => {
  return await axios({
    method: "delete",
    url: base + "/tables/" + table_name + "/" + id + "/delete",

    headers: {
      token: token,
    },
  }).catch((res) => {
    if (res.response.status == 401) {
      ElNotification({
        title: "Error",
        message: "Unauthorized",
        type: "error",
      });
    }
  });
};

export default {
  list,
  create,
  update,
  del,
  store,
  detail,
  edit,
};
