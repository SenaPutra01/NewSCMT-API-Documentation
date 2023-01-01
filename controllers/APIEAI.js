'use strict';

var utils = require('../utils/writer.js');
var APIEAI = require('../service/APIEAIService');

module.exports.attrDelete = function attrDelete (req, res, next) {
  APIEAI.attrDelete()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.attrInsert = function attrInsert (req, res, next, body, postmanToken, host, userAgent, accept, acceptEncoding, connection, xAuth, contentLength) {
  APIEAI.attrInsert(body, postmanToken, host, userAgent, accept, acceptEncoding, connection, xAuth, contentLength)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.attrUpdate = function attrUpdate (req, res, next, body) {
  APIEAI.attrUpdate(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getToken = function getToken (req, res, next, body) {
  APIEAI.getToken(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
