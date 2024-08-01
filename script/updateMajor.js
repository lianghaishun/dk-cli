#!/usr/bin/env node
const util = require("./util");

/**
 * 修改package.json version major
 * 当有不兼容的 API 变更时，增加主版本号（MAJOR），表明旧版本的 API 不再完全兼容
 */
const updatePackageVersion = async () => {
  const content = await util.readPackage();
  const [maj, min, pat] = content.version.split(".");
  content.version = `${parseInt(maj) + 1}.${min}.${pat}`;
  await util.writePackage(content);
  await util.removePackageLock();
};

/**
 *
 */
const main = () => {
  updatePackageVersion();
};

main();
