/* eslint-disable no-undef */
const express = require('express');
const router = express.Router();
const FaqController = require('../controllers/FaqController');

router.get('/', FaqController.getFaqs);
router.get('/:id', FaqController.getFaq);
router.post('/', FaqController.createFaq);
router.put('/:id', FaqController.updateFaq);
router.delete('/:id', FaqController.deleteFaq);

module.exports = router;