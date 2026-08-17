const validateParamsObjects = (params) => {
  if (Object.keys(params).length > 0) {
    return true;
  } else {
    return false;
  }
};

const validateParamsString = (params) => {
  if (params != "") {
    return true;
  } else {
    return false;
  }
};

const validateParamsArrays = (params) => {
  if (params.length > 0) {
    return true;
  } else {
    return false;
  }
};

module.exports = {
  validateParamsObjects,
  validateParamsString,
  validateParamsArrays,
};
