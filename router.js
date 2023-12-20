const express = require('express')
const multer = require('multer')
const { checkHealth } = require('./features/health')
const { handleFormWithoutFile } = require('./features/fileUpload')
const { storage, fileFilter } = require('./storage/storageConfig')

const router = express.Router()
// multer config with custom options
const upload = multer({ storage: storage, fileFilter: fileFilter })

// health
router.get('/api/v1/health', checkHealth)

// form file upload test
router.post('/api/v1/form-test', upload.any(), handleFormWithoutFile)

module.exports = router
