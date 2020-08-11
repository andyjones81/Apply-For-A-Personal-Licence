const express = require('express')
const router = express.Router()

// Add your routes here - above the module.exports line
const apphubccontroller = require('./controllers/apphubcontroller.js')
const securityController = require('./controllers/securityController.js')
const profileController = require('./controllers/profileController.js')
const applicationController = require('./controllers/applicationController.js')

// Preference set on the homepage
router.post('/', function (req, res) {
    // Set session app type
    req.session['apptype'] = req.body['apptype'];
    console.log(req.session['apptype'])

    res.redirect('/')
  })

  router.get('/', securityController.home_get);


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
router.get('/app/v1/application/pre-sectors', applicationController.application_sector_get);
router.get('/app/v1/application/pre-role', applicationController.application_roles_get);
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
router.get('/app/v1/application/dbs-consent', applicationController.application_dbs_consent_get);
router.get('/app/v1/application/identity-types', applicationController.application_identity_types_get);
router.get('/app/v1/application/driving-licence', applicationController.application_driving_licence_get);
router.get('/app/v1/application/passport', applicationController.application_passport_get);
router.get('/app/v1/application/national-insurance', applicationController.application_natins_get);
router.get('/app/v1/application/id-verification', applicationController.application_id_verification_get);
router.get('/app/v1/application/documents', applicationController.application_documents_get);
router.get('/app/v1/application/document-detail/:id', applicationController.application_document_detail_get);
router.get('/app/v1/application/document-upload/:id', applicationController.application_document_upload_get);
router.get('/app/v1/application/document-remove/:id', applicationController.application_document_remove_get);
router.get('/app/v1/application/document-not-provided/:id', applicationController.application_document_not_provided_get);
router.get('/app/v1/application/third-party', applicationController.application_third_party_get);
router.get('/app/v1/application/declaration', applicationController.application_declaration_get);
router.get('/app/v1/application/pay', applicationController.application_pay_get);
router.get('/app/v1/application/pay-cancelled', applicationController.application_pay_cancelled_get);
router.get('/app/v1/application/pay-declined', applicationController.application_pay_declined_get);
router.get('/app/v1/application/complete', applicationController.application_complete_get);
router.get('/app/v1/application/complete-gc', applicationController.application_complete_gc_get);
router.get('/app/v1/application/progress', applicationController.application_progress_get);
router.get('/app/v1/application/progress-with-request', applicationController.application_progrees_with_request_get);
router.get('/app/v1/application/additional-info', applicationController.application_additional_info_get);
router.get('/app/v1/application/previous-names', applicationController.application_previous_names_get);
router.get('/app/v1/application/add-previous-name', applicationController.application_add_previous_name_get);
router.get('/app/v1/application/remove-previous-name', applicationController.application_remove_previous_name_get);
router.get('/app/v1/application/assets-liabilities', applicationController.application_assets_liabilities_get);
router.get('/app/v1/application/add-assets-liabilities', applicationController.application_add_assets_liabilities_get);
router.get('/app/v1/application/remove-assets-liabilities/:id', applicationController.application_remove_assets_liabilities_get);
router.get('/app/v1/application/net-worth', applicationController.application_networth_get);
router.get('/app/v1/application/criminality-initial', applicationController.application_criminality_initial_get);
router.get('/app/v1/application/criminality-ongoing', applicationController.application_criminality_ongoing_get);
router.get('/app/v1/application/criminality-action', applicationController.application_criminality_action_get);
router.get('/app/v1/application/criminality-date', applicationController.application_criminality_date_get);
router.get('/app/v1/application/criminality-body', applicationController.application_criminality_body_get);
router.get('/app/v1/application/criminality-reference', applicationController.application_criminality_reference_get);
router.get('/app/v1/application/criminality-details', applicationController.application_criminality_details_get);
router.get('/app/v1/application/criminality-check', applicationController.application_criminality_check_get);
router.get('/app/v1/application/criminality-list', applicationController.application_criminality_list_get);
router.get('/app/v1/application/gamblinginvestigations-initial', applicationController.application_gamblinginvestigations_initial_get);
router.get('/app/v1/application/gamblinginvestigations-ongoing', applicationController.application_gamblinginvestigations_ongoing_get);
router.get('/app/v1/application/gamblinginvestigations-activity', applicationController.application_gamblinginvestigations_activity_get);
router.get('/app/v1/application/gamblinginvestigations-date', applicationController.application_gamblinginvestigations_date_get);
router.get('/app/v1/application/gamblinginvestigations-body', applicationController.application_gamblinginvestigations_body_get);
router.get('/app/v1/application/gamblinginvestigations-reference', applicationController.application_gamblinginvestigations_reference_get);
router.get('/app/v1/application/gamblinginvestigations-details', applicationController.application_gamblinginvestigations_details_get);
router.get('/app/v1/application/gamblinginvestigations-check', applicationController.application_gamblinginvestigations_check_get);
router.get('/app/v1/application/gamblinginvestigations-list', applicationController.application_gamblinginvestigations_list_get);
router.get('/app/v1/application/gambling-training', applicationController.application_gambling_training_get);
router.get('/app/v1/application/gambling-training-trainer', applicationController.application_gambling_training_trainer_get);
router.get('/app/v1/application/gambling-training-date', applicationController.application_gambling_training_date_get);
router.get('/app/v1/application/gambling-training-details', applicationController.application_gambling_training_details_get);
router.get('/app/v1/application/gambling-training-check', applicationController.application_gambling_training_check_get);
router.get('/app/v1/application/gambling-training-list', applicationController.application_gambling_training_list_get);
router.get('/app/v1/application/qualifications', applicationController.application_qualifications_get);
router.get('/app/v1/application/qualifications-body', applicationController.application_qualifications_body_get);
router.get('/app/v1/application/qualifications-date', applicationController.application_qualifications_date_get);
router.get('/app/v1/application/qualifications-details', applicationController.application_qualifications_details_get);
router.get('/app/v1/application/qualifications-check', applicationController.application_qualifications_check_get);
router.get('/app/v1/application/qualifications-list', applicationController.application_qualifications_list_get);
router.get('/app/v1/application/employment', applicationController.application_employment_get);
router.get('/app/v1/application/employment-type', applicationController.application_employment_type_get);
router.get('/app/v1/application/employment-name', applicationController.application_employment_name_get);
router.get('/app/v1/application/employment-role', applicationController.application_employment_role_get);
router.get('/app/v1/application/employment-check', applicationController.application_employment_check_get);
router.get('/app/v1/application/employment-list', applicationController.application_employment_list_get);
router.get('/app/v1/application/licences', applicationController.application_licences_get);
router.get('/app/v1/application/licence-type', applicationController.application_licences_type_get);
router.get('/app/v1/application/licence-status', applicationController.application_licences_status_get);
router.get('/app/v1/application/licence-reference', applicationController.application_licences_reference_get);
router.get('/app/v1/application/licence-name', applicationController.application_licences_name_get);
router.get('/app/v1/application/licence-list', applicationController.application_licences_list_get);
router.get('/app/v1/application/licence-dates', applicationController.application_licences_dates_get);
router.get('/app/v1/application/licence-country', applicationController.application_licences_country_get);
router.get('/app/v1/application/licence-check', applicationController.application_licences_check_get);
router.get('/app/v1/application/licence-body', applicationController.application_licences_body_get);

router.get('/app/v1/application/financial', applicationController.financial_get);
router.get('/app/v1/application/financial-type', applicationController.financial_type_get);
router.get('/app/v1/application/financial-date', applicationController.financial_date_get);
router.get('/app/v1/application/financial-body', applicationController.financial_body_get);
router.get('/app/v1/application/financial-country', applicationController.financial_country_get);
router.get('/app/v1/application/financial-completed', applicationController.financial_completed_get);
router.get('/app/v1/application/financial-details', applicationController.financial_details_get);
router.get('/app/v1/application/financial-check', applicationController.financial_check_get);
router.get('/app/v1/application/financial-list', applicationController.financial_list_get);

router.get('/app/v1/application/assets-total', applicationController.application_totalassets_get);
router.get('/app/v1/application/assets', applicationController.application_assets_get);
router.get('/app/v1/application/add-asset', applicationController.application_addasset_get);

router.get('/app/v1/application/remove-asset/:id', applicationController.application_removeasset_get);

router.get('/app/v1/application/liabilities-total', applicationController.application_totalliabilities_get);
router.get('/app/v1/application/liabilities', applicationController.application_liabilities_get);
router.get('/app/v1/application/add-liability', applicationController.application_addliability_get);
router.get('/app/v1/application/equity', applicationController.application_equity_get);
router.get('/app/v1/application/add-equity', applicationController.application_addequity_get);
router.get('/app/v1/application/remove-equity/:id', applicationController.application_removeequity_get);


// Posts
router.post('/app/v1/application/pre-for', applicationController.application_prefor_post);
router.post('/app/v1/application/start', applicationController.application_start_post);
router.post('/app/v1/application/pre-sectors', applicationController.application_sector_post);
router.post('/app/v1/application/pre-role', applicationController.application_roles_post);
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
router.post('/app/v1/application/dbs-consent', applicationController.application_dbs_consent_post);
router.post('/app/v1/application/identity-types', applicationController.application_identity_types_post);
router.post('/app/v1/application/driving-licence', applicationController.application_driving_licence_post);
router.post('/app/v1/application/passport', applicationController.application_passport_post);
router.post('/app/v1/application/national-insurance', applicationController.application_natins_post);
router.post('/app/v1/application/id-verification', applicationController.application_id_verification_post);
router.post('/app/v1/application/documents', applicationController.application_documents_post);
router.post('/app/v1/application/document-detail/:id', applicationController.application_document_detail_post);
router.post('/app/v1/application/document-upload/:id', applicationController.application_document_upload_post);
router.post('/app/v1/application/document-not-provided/:id', applicationController.application_document_not_provided_post);
router.post('/app/v1/application/third-party', applicationController.application_third_party_post);
router.post('/app/v1/application/declaration', applicationController.application_declaration_post);
router.post('/app/v1/application/pay', applicationController.application_pay_post);
router.post('/app/v1/application/pay-cancelled', applicationController.application_pay_cancelled_post);
router.post('/app/v1/application/pay-declined', applicationController.application_pay_declined_post);
router.post('/app/v1/application/complete', applicationController.application_complete_post);
router.post('/app/v1/application/complete-gc', applicationController.application_complete_gc_post);
router.post('/app/v1/application/progress', applicationController.application_progress_post);
router.post('/app/v1/application/progress-with-request', applicationController.application_progrees_with_request_post);
router.post('/app/v1/application/additional-info', applicationController.application_additional_info_post);
router.post('/app/v1/application/previous-names', applicationController.application_previous_names_post);
router.post('/app/v1/application/add-previous-name', applicationController.application_add_previous_name_post);
router.post('/app/v1/application/remove-previous-name', applicationController.application_remove_previous_name_post);
router.post('/app/v1/application/assets-liabilities', applicationController.application_assets_liabilities_post);
router.post('/app/v1/application/add-assets-liabilities', applicationController.application_add_assets_liabilities_post);
router.post('/app/v1/application/remove-assets-liabilities/:id', applicationController.application_remove_assets_liabilities_post);
router.post('/app/v1/application/net-worth', applicationController.application_networth_post);
router.post('/app/v1/application/criminality-initial', applicationController.application_criminality_initial_post);
router.post('/app/v1/application/criminality-ongoing', applicationController.application_criminality_ongoing_post);
router.post('/app/v1/application/criminality-action', applicationController.application_criminality_action_post);
router.post('/app/v1/application/criminality-date', applicationController.application_criminality_date_post);
router.post('/app/v1/application/criminality-body', applicationController.application_criminality_body_post);
router.post('/app/v1/application/criminality-reference', applicationController.application_criminality_reference_post);
router.post('/app/v1/application/criminality-details', applicationController.application_criminality_details_post);
router.post('/app/v1/application/criminality-check', applicationController.application_criminality_check_post);
router.post('/app/v1/application/criminality-list', applicationController.application_criminality_list_post);
router.post('/app/v1/application/gamblinginvestigations-initial', applicationController.application_gamblinginvestigations_initial_post);
router.post('/app/v1/application/gamblinginvestigations-ongoing', applicationController.application_gamblinginvestigations_ongoing_post);
router.post('/app/v1/application/gamblinginvestigations-activity', applicationController.application_gamblinginvestigations_activity_post);
router.post('/app/v1/application/gamblinginvestigations-date', applicationController.application_gamblinginvestigations_date_post);
router.post('/app/v1/application/gamblinginvestigations-body', applicationController.application_gamblinginvestigations_body_post);
router.post('/app/v1/application/gamblinginvestigations-reference', applicationController.application_gamblinginvestigations_reference_post);
router.post('/app/v1/application/gamblinginvestigations-details', applicationController.application_gamblinginvestigations_details_post);
router.post('/app/v1/application/gamblinginvestigations-check', applicationController.application_gamblinginvestigations_check_post);
router.post('/app/v1/application/gamblinginvestigations-list', applicationController.application_gamblinginvestigations_list_post);
router.post('/app/v1/application/gambling-training', applicationController.application_gambling_training_post);
router.post('/app/v1/application/gambling-training-trainer', applicationController.application_gambling_training_trainer_post);
router.post('/app/v1/application/gambling-training-date', applicationController.application_gambling_training_date_post);
router.post('/app/v1/application/gambling-training-details', applicationController.application_gambling_training_details_post);
router.post('/app/v1/application/gambling-training-check', applicationController.application_gambling_training_check_post);
router.post('/app/v1/application/gambling-training-list', applicationController.application_gambling_training_list_post);
router.post('/app/v1/application/qualifications', applicationController.application_qualifications_post);
router.post('/app/v1/application/qualifications-body', applicationController.application_qualifications_body_post);
router.post('/app/v1/application/qualifications-date', applicationController.application_qualifications_date_post);
router.post('/app/v1/application/qualifications-details', applicationController.application_qualifications_details_post);
router.post('/app/v1/application/qualifications-check', applicationController.application_qualifications_check_post);
router.post('/app/v1/application/qualifications-list', applicationController.application_qualifications_list_post);
router.post('/app/v1/application/employment', applicationController.application_employment_post);
router.post('/app/v1/application/employment-type', applicationController.application_employment_type_post);
router.post('/app/v1/application/employment-name', applicationController.application_employment_name_post);
router.post('/app/v1/application/employment-role', applicationController.application_employment_role_post);
router.post('/app/v1/application/employment-check', applicationController.application_employment_check_post);
router.post('/app/v1/application/employment-list', applicationController.application_employment_list_post);

router.post('/app/v1/application/licences', applicationController.application_licences_post);
router.post('/app/v1/application/licence-type', applicationController.application_licences_type_post);
router.post('/app/v1/application/licence-status', applicationController.application_licences_status_post);
router.post('/app/v1/application/licence-reference', applicationController.application_licences_reference_post);
router.post('/app/v1/application/licence-name', applicationController.application_licences_name_post);
router.post('/app/v1/application/licence-list', applicationController.application_licences_list_post);
router.post('/app/v1/application/licence-dates', applicationController.application_licences_dates_post);
router.post('/app/v1/application/licence-country', applicationController.application_licences_country_post);
router.post('/app/v1/application/licence-check', applicationController.application_licences_check_post);
router.post('/app/v1/application/licence-body', applicationController.application_licences_body_post);

router.post('/app/v1/application/financial', applicationController.financial_post);
router.post('/app/v1/application/financial-type', applicationController.financial_type_post);
router.post('/app/v1/application/financial-date', applicationController.financial_date_post);
router.post('/app/v1/application/financial-body', applicationController.financial_body_post);
router.post('/app/v1/application/financial-country', applicationController.financial_country_post);
router.post('/app/v1/application/financial-completed', applicationController.financial_completed_post);
router.post('/app/v1/application/financial-details', applicationController.financial_details_post);
router.post('/app/v1/application/financial-check', applicationController.financial_check_post);
router.post('/app/v1/application/financial-list', applicationController.financial_list_post);

router.post('/app/v1/application/assets-total', applicationController.application_totalassets_post);
router.post('/app/v1/application/assets', applicationController.application_assets_post);
router.post('/app/v1/application/add-asset', applicationController.application_addasset_post);

router.post('/app/v1/application/liabilities-total', applicationController.application_totalliabilities_post);
router.post('/app/v1/application/liabilities', applicationController.application_liabilities_post);
router.post('/app/v1/application/add-liability', applicationController.application_addliability_post);
router.post('/app/v1/application/equity', applicationController.application_equity_post);
router.post('/app/v1/application/add-equity', applicationController.application_addequity_post);


module.exports = router