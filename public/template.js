/**
 * @description 模板仓库地址
 */
module.exports = {
  // 模板仓库地址
  TEMPLATE_REPOS_URL: `https://api.github.com/orgs/coding-fort/repos`,
  // 获取仓库的 tag
  getRepoTags: (repo) =>
    `https://api.github.com/repos/coding-fort/${repo}/tags`,
  // 获取仓库下载地址
  getRepoDownloadUrl: (repo, tag) =>
    `coding-fort/${repo}${tag ? "#" + tag : ""}`,
};
