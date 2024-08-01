#!/usr/bin/env node
const util = require("./util");

/**
 * 修改package.json version patch
 * 当进行向后兼容的 bug 修复时，增加补丁版本号（PATCH）
 */
const updatePackageVersion = async () => {
  const content = await util.readPackage();
  const [maj, min, pat] = content.version.split(".");
  content.version = `${maj}.${min}.${parseInt(pat) + 1}`;
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
