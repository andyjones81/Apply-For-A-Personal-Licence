const uuidv4 = require('uuid/v4');

// GETS *********************************************************************************



exports.application_prefor_get = function (req, res) {
    res.render('app/v1/application/pre-for', {});
}

exports.application_start_get = function (req, res) {
    res.render('app/v1/application/start', {});
}

exports.application_sector_get = function (req, res) {
    res.render('app/v1/application/pre-sectors', {});
}



exports.application_roles_get = function (req, res) {
    res.render('app/v1/application/pre-role', {});
}

exports.application_equity_get = function (req, res) {
    res.render('app/v1/application/equity', {});
}

exports.application_name_get = function (req, res) {
    res.render('app/v1/application/name', {});
}

exports.application_dob_get = function (req, res) {
    res.render('app/v1/application/date-of-birth', {});
}

exports.application_placeofbirth_get = function (req, res) {
    res.render('app/v1/application/place-of-birth', {});
}

exports.application_homeaddress_get = function (req, res) {
    res.render('app/v1/application/home-address', {});
}

exports.application_postcode_get = function (req, res) {
    res.render('app/v1/application/postcode', {});
}

exports.application_addressresults_get = function (req, res) {
    res.render('app/v1/application/address-results', {});
}

exports.application_correspondenceaddress_get = function (req, res) {
    res.render('app/v1/application/correspondence-address', {});
}

exports.application_homeoverseas_get = function (req, res) {
    res.render('app/v1/application/home-overseas', {});
}

exports.application_fulladdress_get = function (req, res) {

    res.render('app/v1/application/full-address', {});
}

exports.application_sex_get = function (req, res) {

    res.render('app/v1/application/sex', {});
}

exports.application_dbs_consent_get = function (req, res) {

    res.render('app/v1/application/dbs-consent', {});
}

exports.application_identity_types_get = function (req, res) {

    res.render('app/v1/application/identity-types', {});
}

exports.application_driving_licence_get = function (req, res) {

    res.render('app/v1/application/driving-licence', {});
}

exports.application_passport_get = function (req, res) {

    res.render('app/v1/application/passport', {});
}

exports.application_natins_get = function (req, res) {

    res.render('app/v1/application/national-insurance', {});
}

exports.application_id_verification_get = function (req, res) {
    res.render('app/v1/application/id-verification', {});
}

exports.application_documents_get = function (req, res) {

    var docsList = require('../data/appdocs.json');
    req.session.data['docload'] = true;
    var docs = docsList.docs.filter(function (value) {
        return (value.type === 'pml');
    });

    res.render('app/v1/application/documents', {
        docs
    });
}

exports.application_document_remove_get = function (req, res) {

    var docsList = require('../data/appdocs.json');
    var id = req.params.id;



    var docs = docsList.docs.filter(function (value) {
        return (value.type === 'pml');
    });

    res.redirect('/app/v1/application/document-detail/' + id);
}

exports.application_document_detail_get = function (req, res) {
    var docsList = require('../data/appdocs.json');

    var id = req.params.id;

    req.session.data['docload'] = true;

    var doc = docsList.docs.filter(function (value) {
        return (value.id === id);
    });

    doc = doc[0];

    res.render('app/v1/application/document-detail', {
        doc
    });
}

exports.application_document_upload_get = function (req, res) {
    var docsList = require('../data/appdocs.json');
    var id = req.params.id;

    var doc = docsList.docs.filter(function (value) {
        return (value.id === id);
    });

    doc = doc[0];

    res.render('app/v1/application/document-upload', {
        doc
    });
}

exports.application_document_not_provided_get = function (req, res) {
    var docsList = require('../data/appdocs.json');
    var id = req.params.id;

    var doc = docsList.docs.filter(function (value) {
        return (value.id === id);
    });

    doc = doc[0];

    res.render('app/v1/application/document-not-provided', {
        doc
    });
}

exports.application_third_party_get = function (req, res) {
    res.render('app/v1/application/third-party', {});
}

exports.application_declaration_get = function (req, res) {
    res.render('app/v1/application/declaration', {});
}

exports.application_pay_get = function (req, res) {
    res.render('app/v1/application/pay', {});
}
exports.application_pay_cancelled_get = function (req, res) {
    res.render('app/v1/application/pay-cancelled', {});
}
exports.application_pay_declined_get = function (req, res) {
    res.render('app/v1/application/pay-declined', {});
}
exports.application_complete_get = function (req, res) {
    res.render('app/v1/application/complete', {});
}
exports.application_complete_gc_get = function (req, res) {
    res.render('app/v1/application/complete-gc', {})
}
exports.application_progress_get = function (req, res) {
    res.render('app/v1/application/progress', {});
}
exports.application_progrees_with_request_get = function (req, res) {
    res.render('app/v1/application/progress-with-request', {});
}
exports.application_additional_info_get = function (req, res) {
    res.render('app/v1/application/additional-info', {});
}


exports.application_previous_names_get = function (req, res) {
    res.render('app/v1/application/previous-names', {});
}

exports.application_add_previous_name_get = function (req, res) {
    res.render('app/v1/application/add-previous-name', {});
}

exports.application_remove_previous_name_get = function (req, res) {
    req.session.data['prev-first-name'] = "";
    req.session.data['prev-middle-name'] = "";
    req.session.data['prev-last-name'] = "";
    req.session.data['previousnameadded'] = false;

    res.redirect('/app/v1/application/previous-names');
}



exports.application_assets_liabilities_get = function (req, res) {

    var allimit = "";
    var totalNetWorth = cleanNumber(req.session.data['totalnetworth']);

    if (req.session.data['totalnetworth'] === undefined) {
        return res.redirect('/app/v1/application/net-worth');
    }

    if (totalNetWorth < 500000) {
        allimit = "more than £10,000"
    }

    if (totalNetWorth >= 500000) {
        allimit = "more than £50,000"
    }

    if (totalNetWorth >= 1000000) {
        allimit = "more than £100,000"
    }


    var listOfItems = [];

    if (req.session.data['assetsAndLiabilities'] !== undefined) {
        listOfItems = req.session.data['assetsAndLiabilities'];
    }

    res.render('app/v1/application/assets-liabilities', {
        allimit,
        listOfItems
    });
}

exports.application_add_assets_liabilities_get = function (req, res) {
    res.render('app/v1/application/add-assets-liabilities', {});
}

exports.application_networth_get = function (req, res) {
    res.render('app/v1/application/net-worth', {});
}


exports.application_remove_assets_liabilities_get = function (req, res) {

    var id = req.params.id;
    var listOfItems = [];
    var listOfItems = req.session.data["assetsAndLiabilities"];

    // Check the session

    var sessionObject = listOfItems.filter(function (value) {
        return value.id !== id;
    });

    req.session.data["assetsAndLiabilities"] = sessionObject;

    res.redirect('/app/v1/application/assets-liabilities');
}


exports.application_criminality_initial_get = function (req, res) {
    res.render('app/v1/application/criminality-initial', {});
}
exports.application_criminality_ongoing_get = function (req, res) {
    res.render('app/v1/application/criminality-ongoing', {});
}
exports.application_criminality_action_get = function (req, res) {
    res.render('app/v1/application/criminality-action', {});
}
exports.application_criminality_date_get = function (req, res) {
    res.render('app/v1/application/criminality-date', {});
}
exports.application_criminality_body_get = function (req, res) {
    res.render('app/v1/application/criminality-body', {});
}
exports.application_criminality_reference_get = function (req, res) {
    res.render('app/v1/application/criminality-reference', {});
}
exports.application_criminality_details_get = function (req, res) {
    res.render('app/v1/application/criminality-details', {});
}
exports.application_criminality_check_get = function (req, res) {
    req.session.data['criminalityadded'] = true;
    res.render('app/v1/application/criminality-check', {});
}
exports.application_criminality_list_get = function (req, res) {
    res.render('app/v1/application/criminality-list', {});
}

exports.application_gamblinginvestigations_initial_get = function (req, res) {
    res.render('app/v1/application/gamblinginvestigations-initial', {});
}
exports.application_gamblinginvestigations_ongoing_get = function (req, res) {
    res.render('app/v1/application/gamblinginvestigations-ongoing', {});
}
exports.application_gamblinginvestigations_activity_get = function (req, res) {
    res.render('app/v1/application/gamblinginvestigations-activity', {});
}
exports.application_gamblinginvestigations_date_get = function (req, res) {
    res.render('app/v1/application/gamblinginvestigations-date', {});
}
exports.application_gamblinginvestigations_body_get = function (req, res) {
    res.render('app/v1/application/gamblinginvestigations-body', {});
}
exports.application_gamblinginvestigations_reference_get = function (req, res) {
    res.render('app/v1/application/gamblinginvestigations-reference', {});
}
exports.application_gamblinginvestigations_details_get = function (req, res) {
    res.render('app/v1/application/gamblinginvestigations-details', {});
}
exports.application_gamblinginvestigations_check_get = function (req, res) {
    req.session.data['gamblinginvestigationsadded'] = true;
    res.render('app/v1/application/gamblinginvestigations-check', {});
}
exports.application_gamblinginvestigations_list_get = function (req, res) {
    res.render('app/v1/application/gamblinginvestigations-list', {});
}



exports.application_gambling_training_get = function (req, res) {
    res.render('app/v1/application/gambling-training', {});
}

exports.application_gambling_training_trainer_get = function (req, res) {
    res.render('app/v1/application/gambling-training-trainer', {});
}

exports.application_gambling_training_date_get = function (req, res) {
    res.render('app/v1/application/gambling-training-date', {});
}

exports.application_gambling_training_details_get = function (req, res) {
    res.render('app/v1/application/gambling-training-details', {});
}

exports.application_gambling_training_check_get = function (req, res) {
    res.render('app/v1/application/gambling-training-check', {});
}

exports.application_gambling_training_list_get = function (req, res) {
    res.render('app/v1/application/gambling-training-list', {});
}

exports.application_qualifications_get = function (req, res) {
    res.render('app/v1/application/qualifications', {});
}

exports.application_qualifications_body_get = function (req, res) {
    res.render('app/v1/application/qualifications-body', {});
}

exports.application_qualifications_date_get = function (req, res) {
    res.render('app/v1/application/qualifications-date', {});
}

exports.application_qualifications_details_get = function (req, res) {
    res.render('app/v1/application/qualifications-details', {});
}

exports.application_qualifications_check_get = function (req, res) {
    res.render('app/v1/application/qualifications-check', {});
}

exports.application_qualifications_list_get = function (req, res) {
    res.render('app/v1/application/qualifications-list', {});
}


exports.application_employment_get = function (req, res) {
    res.render('app/v1/application/employment', {});
}

exports.application_employment_type_get = function (req, res) {
    res.render('app/v1/application/employment-type', {});
}

exports.application_employment_name_get = function (req, res) {
    res.render('app/v1/application/employment-name', {});
}

exports.application_employment_role_get = function (req, res) {
    res.render('app/v1/application/employment-role', {});
}

exports.application_employment_check_get = function (req, res) {
    res.render('app/v1/application/employment-check', {});
}

exports.application_employment_list_get = function (req, res) {
    res.render('app/v1/application/employment-list', {});
}



exports.application_licences_get = function (req, res) {
    res.render('app/v1/application/licences', {});
}
exports.application_licences_type_get = function (req, res) {
    res.render('app/v1/application/licence-type', {});
}
exports.application_licences_status_get = function (req, res) {
    res.render('app/v1/application/licence-status', {});
}
exports.application_licences_reference_get = function (req, res) {
    res.render('app/v1/application/licence-reference', {});
}
exports.application_licences_name_get = function (req, res) {
    res.render('app/v1/application/licence-name', {});
}
exports.application_licences_list_get = function (req, res) {
    res.render('app/v1/application/licence-list', {});
}
exports.application_licences_dates_get = function (req, res) {
    res.render('app/v1/application/licence-dates', {});
}
exports.application_licences_country_get = function (req, res) {
    res.render('app/v1/application/licence-country', {});
}
exports.application_licences_check_get = function (req, res) {
    res.render('app/v1/application/licence-check', {});
}
exports.application_licences_body_get = function (req, res) {
    res.render('app/v1/application/licence-body', {});
}


exports.financial_get = function (req, res) {
    res.render('app/v1/application/financial', {});
}
exports.financial_type_get = function (req, res) {
    res.render('app/v1/application/financial-type', {});
}
exports.financial_date_get = function (req, res) {
    res.render('app/v1/application/financial-date', {});
}
exports.financial_body_get = function (req, res) {
    res.render('app/v1/application/financial-body', {});
}
exports.financial_country_get = function (req, res) {
    res.render('app/v1/application/financial-country', {});
}
exports.financial_completed_get = function (req, res) {
    res.render('app/v1/application/financial-completed', {});
}
exports.financial_details_get = function (req, res) {
    res.render('app/v1/application/financial-details', {});
}
exports.financial_check_get = function (req, res) {
    res.render('app/v1/application/financial-check', {});
}
exports.financial_list_get = function (req, res) {
    res.render('app/v1/application/financial-list', {});
}
exports.application_totalassets_get = function (req, res) {
    res.render('app/v1/application/assets-total', {});
}
exports.application_assets_get = function (req, res) {
    res.render('app/v1/application/assets', {});
}
exports.application_addasset_get = function (req, res) {
    res.render('app/v1/application/add-asset');
}
exports.application_removeasset_get = function (req, res) {
    var id = req.params.id;
    var listOfItems = [];
    var listOfItems = req.session.data["assetslist"];

    // Check the session

    var sessionObject = listOfItems.filter(function (value) {
        return value.id !== id;
    });

    req.session.data["assetslist"] = sessionObject;


    //Whats the total assets required?

    var totalAssetsNeeded = req.session.data['assets70Percent'];

    var left = (totalAssetsNeeded - sum)
    console.log(left)
    req.session.data['assetsLeftToAdd'] = left;

    res.redirect('/app/v1/application/assets');



    res.redirect('/app/v1/application/assets');


    res.render('app/v1/application/remove-asset');
}
exports.application_totalliabilities_get = function (req, res) {
    res.render('app/v1/application/liabilities-total', {});
}
exports.application_liabilities_get = function (req, res) {
    res.render('app/v1/application/liabilities', {});
}
exports.application_addliability_get = function (req, res) {
    res.render('app/v1/application/add-liability');
}



// POSTS *********************************************************************************




exports.application_prefor_post = function (req, res) {

    res.redirect('/app/v1/application/start');
}



exports.application_start_post = function (req, res) {


    if (req.session.data['licence-type'] === 'Functional licence') {
        res.redirect('/app/v1/application/pre-role');
    }
    else {
        res.redirect('/app/v1/application/pre-sectors');
    }
}


exports.application_sector_post = function (req, res) {


    res.redirect('/app/v1/application/pre-role');
}

exports.application_roles_post = function (req, res) {
    res.redirect('/app/v1/application/pre-cya');
}

exports.application_equity_post = function (req, res) {
    res.redirect('/app/v1/application/name');
}

exports.application_name_post = function (req, res) {
    res.redirect('/app/v1/application/date-of-birth');
}

exports.application_dob_post = function (req, res) {
    res.redirect('/app/v1/application/place-of-birth');
}

exports.application_placeofbirth_post = function (req, res) {
    res.redirect('/app/v1/application/home-address');
}

exports.application_homeaddress_post = function (req, res) {

    var location = req.session.data['AddressLocality'];

    if (location === 'Somewhere else') {
        return res.redirect('/app/v1/application/home-overseas');
    }

    return res.redirect('/app/v1/application/postcode');
}

exports.application_postcode_post = function (req, res) {
    res.redirect('/app/v1/application/address-results');
}

exports.application_addressresults_post = function (req, res) {

    var location = req.session.data['addressresult'];

    if (location !== 'notlisted') {
        req.session.data['f-address1'] = '15 River Street';
        req.session.data['f-city'] = 'Manchester';
        req.session.data['f-postcode'] = 'M12 3AB';
        req.session.data['f-country'] = 'United Kingdom';
    } else {
        req.session.data['f-address1'] = '';
        req.session.data['f-city'] = '';
        req.session.data['f-postcode'] = '';
        req.session.data['f-country'] = '';
    }


    res.redirect('/app/v1/application/full-address');
}

exports.application_correspondenceaddress_post = function (req, res) {
    res.redirect('/app/v1/application/correspondence-address');
}

exports.application_homeoverseas_post = function (req, res) {
    res.redirect('/app/v1/application/home-overseas');
}


exports.application_fulladdress_post = function (req, res) {
    res.redirect('/app/v1/application/dbs-consent');
}

exports.application_sex_post = function (req, res) {
    res.redirect('/app/v1/application/sex');
}

exports.application_dbs_consent_post = function (req, res) {
    res.redirect('/app/v1/application/identity-types');
}

exports.application_identity_types_post = function (req, res) {

    var idTypes = req.body['dbsid'];

    if (idTypes === undefined) {
        return res.redirect('/app/v1/application/id-verification');
    }

    if (idTypes.includes('iddrivers')) {
        return res.redirect('/app/v1/application/driving-licence');
    } else if (idTypes.includes('idni')) {
        return res.redirect('/app/v1/application/national-insurance');
    } else if (idTypes.includes('idpassport')) {
        return res.redirect('/app/v1/application/passport');
    }

}

exports.application_id_verification_post = function (req, res) {
    res.redirect('/app/v1/application/assets-liabilities');
}


exports.application_pay_post = function (req, res) {
    return res.redirect('/app/v1/application/complete');
}


exports.application_previous_names_post = function (req, res) {
    res.redirect('/app/v1/application/previous-names');
}

exports.application_add_previous_name_post = function (req, res) {

    req.session.data['previousnameadded'] = true;

    res.redirect('/app/v1/application/previous-names');
}

exports.application_assets_liabilities_post = function (req, res) {
    res.redirect('/app/v1/application/financial');
}

exports.application_add_assets_liabilities_post = function (req, res) {

    var assetsAndLiabilities = req.session.data["assetsAndLiabilities"];

    // Check the session

    var listOfItems = [];

    if (req.session.data['assetsAndLiabilities'] !== undefined) {
        listOfItems = req.session.data['assetsAndLiabilities'];
    }

    var alamount = req.body['al-amount'].replace(/,/g, '');;

    listOfItems.push({
        type: req.body['al-type'],
        amount: cleanNumber(alamount),
        details: req.body['al-details'],
        id: uuidv4()
    })

    req.session.data['assetsAndLiabilities'] = listOfItems;


    res.redirect('/app/v1/application/assets-liabilities');
}

exports.application_networth_post = function (req, res) {

    var netWorth = req.body['networth'].replace(/,/g, '');;
    req.session.data['totalnetworth'] = cleanNumber(netWorth);

    res.redirect('/app/v1/application/assets-liabilities');
}


exports.application_driving_licence_post = function (req, res) {
    res.redirect('/app/v1/application/driving-licence');
}
exports.application_passport_post = function (req, res) {
    res.redirect('/app/v1/application/passport');
}
exports.application_natins_post = function (req, res) {
    res.redirect('/app/v1/application/national-insurance');
}
exports.application_documents_post = function (req, res) {
    res.redirect('/app/v1/application/tasks');
}
exports.application_document_detail_post = function (req, res) {
    req.session.data['docload'] = false;
    res.redirect('/app/v1/application/documents');
}
exports.application_document_upload_post = function (req, res) {

    var docid = req.body['id'];
    req.session.data['docsuploaded'] = true;
    req.session.data['docload'] = false;
    res.redirect('/app/v1/application/document-detail/' + docid);
}

exports.application_document_not_provided_post = function (req, res) {

    var docid = req.body['id'];
    req.session.data['docnotprovided'] = true;
    req.session.data['docload'] = false;

    console.log(req.session.data['docnotprovided'])
    console.log(req.session.data['reasonfornodocument'])

    res.redirect('/app/v1/application/document-detail/' + docid);
}

exports.application_third_party_post = function (req, res) {
    res.redirect('/app/v1/application/declaration');
}
exports.application_declaration_post = function (req, res) {
    res.redirect('/app/v1/application/tasks');
}
exports.application_pay_cancelled_post = function (req, res) {
    res.redirect('/app/v1/application/pay-cancelled');
}
exports.application_pay_declined_post = function (req, res) {
    res.redirect('/app/v1/application/pay-declined');
}
exports.application_complete_post = function (req, res) {
    res.redirect('/app/v1/application/complete');
}
exports.application_complete_gc_post = function (req, res) {
    res.redirect('/app/v1/application/complete-gc');
}
exports.application_progress_post = function (req, res) {
    res.redirect('/app/v1/application/progress');
}
exports.application_progrees_with_request_post = function (req, res) {
    res.redirect('/app/v1/application/progress-with-request');
}
exports.application_additional_info_post = function (req, res) {
    res.redirect('/app/v1/application/additional-info');
}
exports.application_remove_previous_name_post = function (req, res) {
    res.redirect('/app/v1/application/remove-previous-name');
}
exports.application_remove_assets_liabilities_post = function (req, res) {
    res.redirect('/app/v1/application/remove-assets-liabilities');
}


exports.application_criminality_initial_post = function (req, res) {
    res.redirect('/app/v1/application/gamblinginvestigations-initial');
}
exports.application_criminality_ongoing_post = function (req, res) {
    res.redirect('/app/v1/application/criminality-action');
}
exports.application_criminality_action_post = function (req, res) {
    res.redirect('/app/v1/application/criminality-date');
}
exports.application_criminality_date_post = function (req, res) {
    res.redirect('/app/v1/application/criminality-body');
}
exports.application_criminality_body_post = function (req, res) {
    res.redirect('/app/v1/application/criminality-reference');
}
exports.application_criminality_reference_post = function (req, res) {
    res.redirect('/app/v1/application/criminality-details');
}
exports.application_criminality_details_post = function (req, res) {
    res.redirect('/app/v1/application/criminality-check');
}
exports.application_criminality_check_post = function (req, res) {
    res.redirect('/app/v1/application/criminality-list');
}
exports.application_criminality_list_post = function (req, res) {
    res.redirect('/app/v1/application/gamblinginvestigations-initial');
}

exports.application_gamblinginvestigations_initial_post = function (req, res) {
    res.redirect('/app/v1/application/gambling-training');
}
exports.application_gamblinginvestigations_ongoing_post = function (req, res) {
    res.redirect('/app/v1/application/gamblinginvestigations-activity');
}
exports.application_gamblinginvestigations_activity_post = function (req, res) {
    res.redirect('/app/v1/application/gamblinginvestigations-date');
}
exports.application_gamblinginvestigations_date_post = function (req, res) {
    res.redirect('/app/v1/application/gamblinginvestigations-body');
}
exports.application_gamblinginvestigations_body_post = function (req, res) {
    res.redirect('/app/v1/application/gamblinginvestigations-reference');
}
exports.application_gamblinginvestigations_reference_post = function (req, res) {
    res.redirect('/app/v1/application/gamblinginvestigations-details');
}
exports.application_gamblinginvestigations_details_post = function (req, res) {
    res.redirect('/app/v1/application/gamblinginvestigations-check');
}
exports.application_gamblinginvestigations_check_post = function (req, res) {
    res.redirect('/app/v1/application/gamblinginvestigations-list');
}
exports.application_gamblinginvestigations_list_post = function (req, res) {
    res.redirect('/app/v1/application/gambling-training');
}


exports.application_gambling_training_post = function (req, res) {
    res.redirect('/app/v1/application/employment');
}

exports.application_gambling_training_trainer_post = function (req, res) {
    res.redirect('/app/v1/application/gambling-training-date');
}

exports.application_gambling_training_date_post = function (req, res) {
    res.redirect('/app/v1/application/gambling-training-details');
}

exports.application_gambling_training_details_post = function (req, res) {
    res.redirect('/app/v1/application/gambling-training-check');
}

exports.application_gambling_training_check_post = function (req, res) {
    res.redirect('/app/v1/application/gambling-training-list');
}

exports.application_gambling_training_list_post = function (req, res) {
    res.redirect('/app/v1/application/employment');
}


exports.application_qualifications_post = function (req, res) {
    res.redirect('/app/v1/application/licences');
}

exports.application_qualifications_body_post = function (req, res) {
    res.redirect('/app/v1/application/qualifications-date');
}

exports.application_qualifications_date_post = function (req, res) {
    res.redirect('/app/v1/application/qualifications-details');
}

exports.application_qualifications_details_post = function (req, res) {
    res.redirect('/app/v1/application/qualifications-check');
}

exports.application_qualifications_check_post = function (req, res) {
    res.redirect('/app/v1/application/qualifications-list');
}

exports.application_qualifications_list_post = function (req, res) {
    res.render('app/v1/application/licences');
}


exports.application_employment_post = function (req, res) {
    res.redirect('/app/v1/application/qualifications');
}

exports.application_employment_type_post = function (req, res) {
    res.redirect('/app/v1/application/employment-name');
}

exports.application_employment_name_post = function (req, res) {
    res.redirect('/app/v1/application/employment-role');
}

exports.application_employment_role_post = function (req, res) {
    res.redirect('/app/v1/application/employment-check');
}

exports.application_employment_check_post = function (req, res) {
    res.redirect('/app/v1/application/employment-list');
}

exports.application_employment_list_post = function (req, res) {
    res.redirect('/app/v1/application/qualifications');
}

exports.application_licences_post = function (req, res) {
    res.redirect('/app/v1/application/associated-accounts');
}
exports.application_licences_status_post = function (req, res) {
    res.redirect('/app/v1/application/licence-body');
}
exports.application_licences_body_post = function (req, res) {
    res.redirect('/app/v1/application/licence-country');
}
exports.application_licences_country_post = function (req, res) {
    res.redirect('/app/v1/application/licence-type');
}
exports.application_licences_type_post = function (req, res) {
    res.redirect('/app/v1/application/licence-name');
}
exports.application_licences_name_post = function (req, res) {
    res.redirect('/app/v1/application/licence-reference');
}
exports.application_licences_reference_post = function (req, res) {
    res.redirect('/app/v1/application/licence-dates');
}
exports.application_licences_dates_post = function (req, res) {
    res.redirect('/app/v1/application/licence-check');
}
exports.application_licences_check_post = function (req, res) {
    res.redirect('/app/v1/application/licence-list');
}
exports.application_licences_list_post = function (req, res) {
    res.redirect('/app/v1/application/associated-accounts');
}

exports.financial_post = function (req, res) {
    res.redirect('/app/v1/application/criminality-initial');
}
exports.financial_type_post = function (req, res) {
    res.redirect('/app/v1/application/financial-date');
}
exports.financial_date_post = function (req, res) {
    res.redirect('/app/v1/application/financial-body');
}
exports.financial_body_post = function (req, res) {
    res.redirect('/app/v1/application/financial-country');
}
exports.financial_country_post = function (req, res) {
    res.redirect('/app/v1/application/financial-completed');
}
exports.financial_completed_post = function (req, res) {
    res.redirect('/app/v1/application/financial-details');
}
exports.financial_details_post = function (req, res) {
    res.redirect('/app/v1/application/financial-check');
}
exports.financial_check_post = function (req, res) {
    res.redirect('/app/v1/application/financial-list');
}
exports.financial_list_post = function (req, res) {
    res.redirect('/app/v1/application/criminality-initial');
}

exports.application_totalassets_post = function (req, res) {

    var assets70Percent = "";
    var total = cleanNumber(req.session.data['totalassets']);

    if (total < 50000) {
        res.redirect('/app/v1/application/liabilities-total');
    }
    else {
        assets70Percent = (total * 0.70);
        req.session.data['assets70Percent'] = assets70Percent;

        res.redirect('/app/v1/application/assets');
    }
}

exports.application_assets_post = function (req, res) {
    res.redirect('/app/v1/application/liabilities-total');
}
exports.application_addasset_post = function (req, res) {

    var listOfItems = req.session.data["assetslist"];
    req.session.data['assetsLeftToAdd'] = 0;
  
    // Check the session

    var listOfItems = [];

    if (req.session.data['assetslist'] !== undefined) {
        listOfItems = req.session.data['assetslist'];
    }

    var aamount = req.body['a-amount'].replace(/,/g, '');;

    listOfItems.push({
        amount: cleanNumber(aamount),
        details: req.body['a-details'],
        id: uuidv4()
    })

    req.session.data['assetslist'] = listOfItems;

    //Sum up the assets added and whats left to add
    var totalAddedAssets = 0;

    if (req.session.data['totalAddedAssets'] !== undefined) {
        totalAddedAssets = req.session.data['totalAddedAssets']
    }

    console.log(totalAddedAssets)

    var tempAssets = cleanNumber(aamount);
    console.log(tempAssets)

    var sum = (totalAddedAssets + tempAssets)
    console.log(sum)
    req.session.data['totalAddedAssets'] = sum;

    //Whats the total assets required?

    var totalAssetsNeeded = req.session.data['assets70Percent'];

    var left = (totalAssetsNeeded - sum)
    console.log(left)
    req.session.data['assetsLeftToAdd'] = left;

    res.redirect('/app/v1/application/assets');

}



exports.application_totalliabilities_post = function (req, res) {

    var liabilities70Percent = "";
    var total = cleanNumber(req.session.data['totalliabilities']);

    if (total < 50000) {
        res.redirect('/app/v1/application/criminality');
    }
    else {
        liabilities70Percent = (total * 0.70);
        req.session.data['liabilities70Percent'] = liabilities70Percent;

        res.redirect('/app/v1/application/liabilities');
    }
}

exports.application_liabilities_post = function (req, res) {
    res.redirect('/app/v1/application/liabilities');
}


exports.application_addliability_post = function (req, res) {
    var listOfItems = req.session.data["liabilitieslist"];
    req.session.data['liabilitiesLeftToAdd'] = 0;
  
    // Check the session

    var listOfItems = [];

    if (req.session.data['liabilitieslist'] !== undefined) {
        listOfItems = req.session.data['liabilitieslist'];
    }

    var aamount = req.body['l-amount'].replace(/,/g, '');;

    listOfItems.push({
        amount: cleanNumber(aamount),
        details: req.body['l-details'],
        id: uuidv4()
    })

    req.session.data['liabilitieslist'] = listOfItems;

    //Sum up the liabilities added and whats left to add
    var totalAddedliabilities = 0;

    if (req.session.data['totalAddedliabilities'] !== undefined) {
        totalAddedliabilities = req.session.data['totalAddedliabilities']
    }

    console.log(totalAddedliabilities)

    var templiabilities = cleanNumber(aamount);
    console.log(templiabilities)

    var sum = (totalAddedliabilities + templiabilities)
    console.log(sum)
    req.session.data['totalAddedliabilities'] = sum;

    //Whats the total liabilities required?

    var totalliabilitiesNeeded = req.session.data['liabilities70Percent'];

    var left = (totalliabilitiesNeeded - sum)
    console.log(left)
    req.session.data['liabilitiesLeftToAdd'] = left;

    res.redirect('/app/v1/application/liabilities');

}


function cleanNumber(x) {

    x = parseFloat(x.replace(/,/g, ''));
    x = Number(x);
    return x >= 0 ? Math.floor(x) : Math.ceil(x);

}