let controller = {}
controller.isLoggend_Admin = (req, res, next) => {
    if (req.session.isAdmin) {
        next();
    } 
    else {
        res.redirect('/users/login')
    }
};

controller.isLoggend_Teacher = (req,res, next )=>{
    if(req.session.isTeacher){
        next();
    }
    else{
        res.redirect('/teacher/login');
    }
}
module.exports = controller;
