import axios from "axios";
import { ElNotification } from "element-plus";

const base = "http://localhost:8888/api/";
const token = 2; //localStorage.getItem("token");
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
const getAuths = async (table_name, auths_group_id) => {
  return await axios({
    method: "get",
    url: base + "/get-auths/" + table_name + "/" + auths_group_id,

    headers: {
      token: token,
    },
  }).catch((res) => {
    if (res.response.status == 500) {
      ElNotification({
        title: "Error",
        message: "Error",
        type: "error",
      });
    }
    if (res.response.status == 401) {
      ElNotification({
        title: "Error",
        message: "Unauthorized",
        type: "error",
      });
    }
  });
};

const addColumn = async (table_name, fields) => {
  console.log(table_name, fields);
  return await axios({
    method: "post",
    url: base + "/add-column/" + table_name,
    data: fields,
    headers: {
      token: token,
    },
  }).catch((res) => {
    if (res.response?.status == 401) {
      ElNotification({
        title: "Error",
        message: "Unauthorized",
        type: "error",
      });
    }
  });
};

const setError = async (table_name, params) => {
  return await axios({
    method: "put",
    url: "http://localhost:8888/api/Tables/" + table_name + "/store",
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

export default {
  list,
  create,
  update,
  del,
  store,
  detail,
  edit,
  getAuths,
  addColumn,
};
