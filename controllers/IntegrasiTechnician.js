'use strict';

var utils = require('../utils/writer.js');
var IntegrasiTechnician = require('../service/IntegrasiTechnicianService');

module.exports.checkKtp = function checkKtp (req, res, next) {
  IntegrasiTechnician.checkKtp()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.checkSb = function checkSb (req, res, next) {
  IntegrasiTechnician.checkSb()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.findById = function findById (req, res, next, contentType) {
  IntegrasiTechnician.findById(contentType)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.inactive = function inactive (req, res, next) {
  IntegrasiTechnician.inactive()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.insert = function insert (req, res, next, body) {
  IntegrasiTechnician.insert(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.insertCustInstallasi = function insertCustInstallasi (req, res, next, body) {
  IntegrasiTechnician.insertCustInstallasi(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.integrasiApi = function integrasiApi (req, res, next, body) {
  IntegrasiTechnician.integrasiApi(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.update = function update (req, res, next, body) {
  IntegrasiTechnician.update(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
