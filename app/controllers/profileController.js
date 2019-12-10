var menu_profile = true;

exports.index_get = function (req, res) {
        res.render('profile/index', {menu_profile});
}