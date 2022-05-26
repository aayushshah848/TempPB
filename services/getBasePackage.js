const fs = require('fs-extra');
const { zip } = require('zip-a-folder');

/**
 * Services for working on base packages
 * @returns {Object}
 */
const basePackService = () => {
  /**
   * Service for copying a folder
   * @param {String} originalPath 
   * @param {String} destinationPath 
   */
  const copyService = (originalPath, destinationPath) => {
    try {
      fs.copySync(originalPath, destinationPath);
    }
    catch (err) {
      console.error(err);
      throw err;
    }
  }

  /**
   * service for zipping folder
   * @param {String} target 
   */
  const zipService = async (target) => {
    try {
      await zip(target, `${target}.zip`);
      fs.removeSync(target);
    }
    catch (err) {
      console.error(err);
      throw err;
    }
  }

  const deleteFile = (target) => fs.unlinkSync(target);

  return {
    copyService,
    zipService,
    deleteFile
  }
}

module.exports = basePackService;