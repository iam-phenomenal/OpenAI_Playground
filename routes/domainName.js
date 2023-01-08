const router = require("express").Router()
const {domainName} = require("../http/requests/domainNameGenerator")

router.post("", domainName)

module.exports = router