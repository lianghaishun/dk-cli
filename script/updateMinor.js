#!/usr/bin/env node
const util = require("./util");

/**
 * 修改package.json version minor
 * 当进行向后兼容的新增功能时，增加次版本号（MINOR）
 */
const updatePackageVersion = async () => {
  const content = await util.readPackage();
  const [maj, min, pat] = content.version.split(".");
  content.version = `${maj}.${parseInt(min) + 1}.${pat}`;
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
