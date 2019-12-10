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
    res.render('app/v1/application/documents', {});
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