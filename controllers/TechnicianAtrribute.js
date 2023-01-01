'use strict';

var utils = require('../utils/writer.js');
var TechnicianAtrribute = require('../service/TechnicianAtrributeService');

module.exports.deleted = function deleted (req, res, next) {
  TechnicianAtrribute.deleted()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.deleteArr = function deleteArr (req, res, next, contentType) {
  TechnicianAtrribute.deleteArr(contentType)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.insertArr = function insertArr (req, res, next, body) {
  TechnicianAtrribute.insertArr(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.updateArr = function updateArr (req, res, next, body) {
  TechnicianAtrribute.updateArr(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
