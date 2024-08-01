#!/usr/bin/env node

const fs = require("fs");
const path = require("path");

/**
 * 读取指定文件的内容
 * @param {String} path 文件路径
 */
const readFile = (path) => {
  return new Promise((resolve, reject) => {
    fs.readFile(path, "utf-8", (err, data) => {
      if (err) {
        reject(err);
      } else {
        resolve(data);
      }
    });
  });
};

/**
 * 将指定内容写入文件
 * @param {String} path 文件路径
 * @param {String} content 文件内容
 */
const writeFile = (path, content) => {
  return new Promise((resolve, reject) => {
    fs.writeFile(path, content, "utf-8", (err) => {
      if (err) {
        reject(err);
      } else {
        resolve();
      }
    });
  });
};

/**
 * 读取package.json文件，并转化成对象
 */
const readPackage = () => {
  return new Promise((resolve) => {
    const packagePath = path.resolve(__dirname, "../package.json");
    readFile(packagePath).then((content) => {
      resolve(JSON.parse(content));
    });
  });
};

/**
 * 将指定内容写入package.json文件
 */
const writePackage = (content) => {
  return new Promise((resolve) => {
    const packagePath = path.resolve(__dirname, "../package.json");
    writeFile(packagePath, JSON.stringify(content, null, 2)).then(() => {
      resolve();
    });
  });
};

/**
 * 删除文件
 */
const removePackageLock = () => {
  const packagePath = path.resolve(__dirname, "../package-lock.json");
  return new Promise((resolve, reject) => {
    fs.unlink(packagePath, (err) => {
      if (err) {
        reject(err);
      } else {
        resolve();
      }
    });
  });
};

module.exports = {
  readFile,
  readPackage,
  writeFile,
  writePackage,
  removePackageLock,
};
