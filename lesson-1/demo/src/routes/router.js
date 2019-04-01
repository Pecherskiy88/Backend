const mainRoute = require('./main-route/main-route');
const productRoute = require('./product-route/product-route');
const signUpRoute = require('./SignUpRoute/sign-up-route');

const router = {
    'main': mainRoute,
    '/products': productRoute,
    '/signup': signUpRoute,
};

module.exports = router;