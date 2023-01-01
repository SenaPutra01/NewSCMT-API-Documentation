'use strict';

var utils = require('../utils/writer.js');
var NTE = require('../service/NTEService');

module.exports.approvalNTEMYTECH = function approvalNTEMYTECH (req, res, next, body) {
  NTE.approvalNTEMYTECH(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.installationNTEBYOD = function installationNTEBYOD (req, res, next, body) {
  NTE.installationNTEBYOD(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.nTEQuery = function nTEQuery (req, res, next) {
  NTE.nTEQuery()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.rejectNTEMYTECH = function rejectNTEMYTECH (req, res, next, body) {
  NTE.rejectNTEMYTECH(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.replaceNTEMYTECH = function replaceNTEMYTECH (req, res, next, body) {
  NTE.replaceNTEMYTECH(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.salesOrderGuarantee = function salesOrderGuarantee (req, res, next, body) {
  NTE.salesOrderGuarantee(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.technicianStockList = function technicianStockList (req, res, next) {
  NTE.technicianStockList()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
