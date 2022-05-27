const { v4: uuidv4 } = require('uuid');
const buildTree = require('../services/dirToJsonService');
const basePackService = require('../services/getBasePackage');

/**
 * Controller for airlift's app
 * @return {Object}
 */
 const controller = (project) => {

  /**
   * Node controller for copying and zipping folder
   * @returns {String}
   */
  const nodeController = async () => {
    const uuid = uuidv4();
    console.log(uuid);
    const originalPath = `/home/ubuntu/airlift/basePackages/${project}`;
    const destinationPath = `/home/ubuntu/airlift/tmp/${uuid}/`;
    basePackService().copyService(originalPath, destinationPath);
    await basePackService().zipService(destinationPath);
    return `${destinationPath}.zip`;
  }

  const jsonController = () => {
    const path = `/home/ubuntu/airlift/basePackages/${project}`;
    return buildTree(path);
  }

  const cleanUp = (target) => {
    try {
      basePackService().deleteFile(target);
    }
    catch (err) {
      console.error(err);
      throw err;
    }
  }

  return {
    nodeController,
    cleanUp,
    jsonController
  }
}

module.exports = controller;
