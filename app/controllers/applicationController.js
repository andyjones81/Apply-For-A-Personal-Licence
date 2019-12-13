const uuidv4 = require('uuid/v4');

// GETS *********************************************************************************

exports.application_start_get = function (req, res) {
    res.render('app/v1/application/start', {});
}

exports.application_sector_get = function (req, res) {
    res.render('app/v1/application/sector', {});
}

exports.application_roles_get = function (req, res) {
    res.render('app/v1/application/roles', {});
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

    var docs = docsList.docs.filter(function (value) {
        return (value.type === 'pml');
    });

    res.render('app/v1/application/documents', {docs});
}

exports.application_document_detail_get = function (req, res) {
    var docsList = require('../data/appdocs.json');
    var id = req.params.id;

    var doc = docsList.docs.filter(function (value) {
        return (value.id === id);
    });

    doc = doc[0];

    res.render('app/v1/application/document-detail', { doc });
}

exports.application_document_upload_get = function (req, res) {
    var docsList = require('../data/appdocs.json');
    var id = req.params.id;

    var doc = docsList.docs.filter(function (value) {
        return (value.id === id);
    });

    doc = doc[0];

    res.render('app/v1/application/document-upload', { doc });
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



// POSTS *********************************************************************************





exports.application_start_post = function (req, res) {
    res.redirect('/app/v1/application/sector');
}

exports.application_sector_post = function (req, res) {
    res.redirect('/app/v1/application/roles');
}

exports.application_roles_post = function (req, res) {
    res.redirect('/app/v1/application/equity');
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
    res.redirect('/app/v1/application/home-overseas');
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
    res.redirect('/app/v1/application/id-verification');
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
    res.redirect('/app/v1/application/assets-liabilities');
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
    res.redirect('/app/v1/application/documents');
}
exports.application_document_upload_post = function (req, res) {

    var docid = req.body['id'];
    res.redirect('/app/v1/application/document-detail/'+docid);
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





function cleanNumber(x) {
    x = Number(x);
    return x >= 0 ? Math.floor(x) : Math.ceil(x);
}