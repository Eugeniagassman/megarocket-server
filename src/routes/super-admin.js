const express = require('express');
const superAdminController = require('../controllers/super-admin');
const validation = require('../validations/super-admin');

const router = express.Router();

router
  .get('/', superAdminController.getAllSuperAdmins)
  .get('/:id', superAdminController.getSuperAdminsById)
  .post('/', validation.validateCreation, superAdminController.createSuperAdmin)
  .put('/:id', validation.validateUpdate, superAdminController.updateSuperAdmin)
  .delete('/:id', superAdminController.deleteSuperAdminsById);

module.exports = router;
