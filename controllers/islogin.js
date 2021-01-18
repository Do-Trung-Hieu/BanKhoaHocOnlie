let controller = {}
controller.isLoggend_Admin = (req, res, next) => {
    if (req.session.isAdmin) {
        next();
    } 
    else {
        res.redirect(`/admin/login?returnURL=${req.originalUrl}`)
    }
};

controller.isLoggend_Teacher = (req,res, next )=>{
    if(req.session.isTeacher){
        next();
    }
    else{
        res.redirect(`/teacher/login?returnURL=${req.originalUrl}`);
    }
}
module.exports = controller;
