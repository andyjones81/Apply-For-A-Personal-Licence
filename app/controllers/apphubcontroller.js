var menu_hub = true;


exports.hub_with_apps_get = function (req, res) {

    var appdata = require('../data/apphub.json');

    res.render('applicationhub/v1/hub-with-apps', {appdata, menu_hub});
}

exports.hub_with_apps2_get = function (req, res) {

    var appdata = require('../data/apphub.json');
    console.log('applicationhub/v2/hub-with-apps')

    res.render('applicationhub/v2/hub-with-apps', {appdata, menu_hub});
}

exports.hub_with_apps_submitted_get = function (req, res) {

    var appdata = require('../data/apphub.json');

    res.render('applicationhub/v2/hub-with-apps-submitted', {appdata, menu_hub});
}

exports.hub_notifications_get = function (req, res) {

    var appdata = require('../data/apphub.json');

    res.render('applicationhub/v2/notifications', {appdata, menu_hub});
}

exports.hub_no_apps_get = function (req, res) {

    var appdata = require('../data/apphub.json');

    res.render('applicationhub/v2/hub-no-apps', {appdata, menu_hub});
}


exports.hub_with_apps3_get = function (req, res) {

    var appdata = require('../data/apphub.json');

    res.render('applicationhub/v3/hub-with-apps', {appdata, menu_hub});
}

exports.hub_with_contributor_get = function (req, res) {

    var appdata = require('../data/apphub.json');

    res.render('applicationhub/v1/hub-with-contributor', {appdata, menu_hub});
}

exports.hub_with_contributor2_get = function (req, res) {

    var appdata = require('../data/apphub.json');

    res.render('applicationhub/v2/hub-with-contributor', {appdata, menu_hub});
}

exports.hub_with_contributor3_get = function (req, res) {

    var appdata = require('../data/apphub.json');

    res.render('applicationhub/v3/hub-with-contributor', {appdata, menu_hub});
}

exports.appstart_index = function (req, res) {

    var feeSession = req.session.data["fees"];
    var feeSession2 = req.session.data["fees"];

    console.log(feeSession);

    res.render('appstart/index', {
        feeSession, feeSession2
    });
}

exports.step1 = function (req, res) {

    var feeSession = req.session.data["fees"];
    var feeSession2 = req.session.data["fees"];

    console.log(feeSession);

    res.render('appstart/step1', {
        feeSession, feeSession2
    });
}

exports.appstart_v2_index = function (req, res) {

    var feeSession = req.session.data["fees"];
    var feeSession2 = req.session.data["fees"];

    console.log(feeSession);

    res.render('appstart-v2/index', {
        feeSession, feeSession2
    });
}

exports.appstart_v2_activity = function (req, res) {

    var feeSession = req.session.data["fees"];
    var feeSession2 = req.session.data["fees"];

    console.log(feeSession);

    res.render('appstart-v2/activity', {
        feeSession, feeSession2
    });
}
exports.appstart_v2_need = function (req, res) {

    var feeSession = req.session.data["fees"];
    var feeSession2 = req.session.data["fees"];

    console.log(feeSession);

    res.render('appstart-v2/need', {
        feeSession, feeSession2
    });
}

exports.appstart_v2_updates = function (req, res) {

    var feeSession = req.session.data["fees"];
    var feeSession2 = req.session.data["fees"];

    console.log(feeSession);

    res.render('appstart-v2/updates', {
        feeSession, feeSession2
    });
}

exports.appstart_v2_start = function (req, res) {

    var feeSession = req.session.data["fees"];
    var feeSession2 = req.session.data["fees"];

    console.log(feeSession);

    res.render('appstart-v2/start', {
        feeSession, feeSession2
    });
}


// Application

exports.hub_application_start_get = function (req, res) {    
    res.render('app/v1/application/start', {});
}

exports.hub_application_name_get = function (req, res) {    
    res.render('app/v1/application/name', {});
}

exports.hub_application_dob_get = function (req, res) {    
    res.render('app/v1/application/date-of-birth', {});
}

exports.hub_application_placeofbirth_get = function (req, res) {    
    res.render('app/v1/application/place-of-birth', {});
}

exports.hub_application_sector_get = function (req, res) {    
    res.render('app/v1/application/sector', {});
}

exports.hub_application_roles_get = function (req, res) {    
    res.render('app/v1/application/roles', {});
}

exports.hub_application_equity_get = function (req, res) {    
    res.render('app/v1/application/equity', {});
}