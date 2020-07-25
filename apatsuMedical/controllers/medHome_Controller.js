// Render the home/main page
module.exports.home = function(req,res){
    // console.log(req);
    // console.log(res.locals)
    return res.render('index',{title:'Shop | Medical'});
}

// Render the team Page
// module.exports.team = function(req,res){
//     return res.render('contact',{title:'Team'})
// }

//Rendering the service page
// module.exports.services = function(req,res){
//     return res.render('services',{title:'Services'})
// } 

// Render the SignUp Page
module.exports.login = function(req,res){
    if(req.isAuthenticated()){
        return res.redirect('/');
    }

    return res.render('login',{title:'LogIn | Medical'})
}

// Render the SignUp Page
// module.exports.logup = function(req,res){
//     if(req.isAuthenticated()){
//         return res.redirect('/users/profile');
//     }

//     return res.render('logup',{title:'Sign-Up'})
// }