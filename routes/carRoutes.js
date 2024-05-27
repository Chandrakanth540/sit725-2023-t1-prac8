// const express = require('express');
import express from 'express';
import carController from '../controller/carController.js';
const router = express.Router();

router.get('/', carController.getCars);

// module.exports = router;
export default router;
