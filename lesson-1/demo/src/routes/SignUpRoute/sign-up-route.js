const signUpRoute = (req, res) => {
    if(req.method === 'POST'){
        let body = '';
        let filePath = '';
        req.on('data', function(data) {
            body = data;
            console.log('Incoming data!!!');
        });
    }
    // ПИЗДЕЧ!!!!
}
module.exports = signUpRoute;