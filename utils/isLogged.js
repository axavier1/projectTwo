const isLoged = (req, res, next) => {
    if (!req.session.logged_in) {
        // confirm(`Please Log in first`)
        res.redirect('/login');
    } else {
        next();
    }
};

module.exports = isLoged;
