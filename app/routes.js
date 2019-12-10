const express = require('express')
const router = express.Router()

// Add your routes here - above the module.exports line
const apphubccontroller = require('./controllers/apphubcontroller.js')
const securityController = require('./controllers/securityController.js')
const profileController = require('./controllers/profileController.js')
const applicationController = require('./controllers/applicationController.js')


// SECURITY
router.get('/app/v1/security/signin', securityController.security_signin_get);
router.post('/app/v1/security/signin', securityController.security_signin_post);

router.get('/app/v1/security/create-account', securityController.security_createaccount_get);
router.post('/app/v1/security/create-account', securityController.security_createaccount_post);

router.get('/app/v1/security/code', securityController.security_code_get);
router.post('/app/v1/security/code', securityController.security_code_post);

router.get('/app/v1/security/forgot-password', securityController.security_forgotpassword_get);
router.post('/app/v1/security/forgot-password', securityController.security_forgotpassword_post);

router.get('/app/v1/account/name-password', securityController.account_namepassword_get);
router.post('/app/v1/account/name-password', securityController.account_namepassword_post);

router.get('/app/v1/security/set-password', securityController.security_setpassword_get);
router.post('/app/v1/security/set-password', securityController.security_setpassword_post);

// APPLICATION HUB
router.get('/applicationhub/v2/hub-no-apps', apphubccontroller.hub_no_apps_get);
router.get('/applicationhub/v2/hub-with-apps', apphubccontroller.hub_with_apps2_get);
router.get('/applicationhub/v2/hub-with-apps-submitted', apphubccontroller.hub_with_apps_submitted_get);
router.get('/applicationhub/v2/notifications', apphubccontroller.hub_notifications_get);

// PROFILE
router.get('/profile/', profileController.index_get);

// APPLICATION
// Gets
router.get('/app/v1/application/start', applicationController.application_start_get);
router.get('/app/v1/application/sector', applicationController.application_sector_get);
router.get('/app/v1/application/roles', applicationController.application_roles_get);
router.get('/app/v1/application/equity', applicationController.application_equity_get);
router.get('/app/v1/application/name', applicationController.application_name_get);
router.get('/app/v1/application/date-of-birth', applicationController.application_dob_get);
router.get('/app/v1/application/place-of-birth', applicationController.application_placeofbirth_get);
router.get('/app/v1/application/home-address', applicationController.application_homeaddress_get);
router.get('/app/v1/application/postcode', applicationController.application_postcode_get);
router.get('/app/v1/application/address-results', applicationController.application_addressresults_get);
router.get('/app/v1/application/correspondence-address', applicationController.application_correspondenceaddress_get);
router.get('/app/v1/application/home-overseas', applicationController.application_homeoverseas_get);
router.get('/app/v1/application/full-address', applicationController.application_fulladdress_get);
router.get('/app/v1/application/sex', applicationController.application_sex_get);


// Posts
router.post('/app/v1/application/sector', applicationController.application_sector_post);
router.post('/app/v1/application/roles', applicationController.application_roles_post);
router.post('/app/v1/application/equity', applicationController.application_equity_post);
router.post('/app/v1/application/name', applicationController.application_name_post);
router.post('/app/v1/application/date-of-birth', applicationController.application_dob_post);
router.post('/app/v1/application/place-of-birth', applicationController.application_placeofbirth_post);
router.post('/app/v1/application/home-address', applicationController.application_homeaddress_post);
router.post('/app/v1/application/postcode', applicationController.application_postcode_post);
router.post('/app/v1/application/address-results', applicationController.application_addressresults_post);
router.post('/app/v1/application/correspondence-address', applicationController.application_correspondenceaddress_post);
router.post('/app/v1/application/home-overseas', applicationController.application_homeoverseas_post);
router.post('/app/v1/application/full-address', applicationController.application_fulladdress_post);
router.post('/app/v1/application/sex', applicationController.application_sex_post);


module.exports = router