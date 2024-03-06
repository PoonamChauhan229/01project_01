const show_dashboard=async(req,res,user)=>{
    
    res.send({
        "dashboard":"Dashboard Page",
        "name":user
    })
}
module.exports=show_dashboard;