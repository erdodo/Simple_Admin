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

export default {
  list,
  create,
};
