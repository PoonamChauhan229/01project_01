const pg_connection=require('../base/pg_connection')

const get_admission=async(req,res)=>{
    try{
    const result=await pg_connection('SELECT * FROM admission')
    // res.send(result)


        const currentMonth=new Date().getMonth()+1;
        const currentYear=new Date().getFullYear();
        const currentDay = new Date().getDate();
        // console.log(currentMonth)
        //console.log(`${currentYear}-${currentMonth}-${currentDay}`)
        const day=`${currentYear}-${currentMonth}-${currentDay}`
        
        const currentDayAdmissionResult = await pg_connection('SELECT COUNT(*) FROM  admission  WHERE  YEAR=$1 AND Month=$2 AND admission_date=$3', [currentYear, currentMonth, day]);
        let currentDayAdmission=currentDayAdmissionResult[0].count

        const currentMonthAdmissionResult=await pg_connection(`SELECT COUNT(*) FROM  admission  WHERE  YEAR=${currentYear} AND Month=${currentMonth}`)
        let currentMonthAdmission=currentMonthAdmissionResult[0].count

        

        const currentYearAdmissionResult=await pg_connection(`SELECT COUNT(*) FROM  admission  WHERE  YEAR=${currentYear}`)
        let currentYearAdmission=currentYearAdmissionResult[0].count
        
        const totalAdmissionResult=await pg_connection('SELECT COUNT(*) FROM  admission')
        let totalAdmission=totalAdmissionResult[0].count
    res.send([
      {
        "admission": "ADMISSIONS (DAILY)",
        "admissionNo": currentDayAdmission,
        "color": "warning",
        "icon": "clipboard-list"
      },
      {
        "admission":"ADMISSIONS (MONTHLY)",
        "admissionNo": currentMonthAdmission,
        "color": "primary",
        "icon": "clipboard-list"
      },
      {
        "admission":"ADMISSIONS (YEARLY)",
        "admissionNo": currentYearAdmission,
        "color": "success",
        "icon": "clipboard-list"
      },
      {
        "admission":"ADMISSIONS (TOTAL))",
        "admissionNo": totalAdmission,
        "color": "info",
        "icon": "clipboard-list"
      }
    ])
}
catch(e){
  console.log("Some internal error")
}
}
module.exports=get_admission