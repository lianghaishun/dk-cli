// lib/http.js

// 通过 axios 处理请求
const axios = require("axios");
const { TEMPLATE_REPOS_URL, getRepoTags } = require("../public/template");

axios.interceptors.response.use((res) => {
  return res.data;
});

/**
 * 获取模板列表
 * @returns Promise
 */
async function getRepoList() {
  return axios.get(TEMPLATE_REPOS_URL);
}

/**
 * 获取版本信息
 * @param {string} repo 模板名称
 * @returns Promise
 */
async function getTagList(repo) {
  return axios.get(getRepoTags(repo));
}

module.exports = {
  getRepoList,
  getTagList,
};
