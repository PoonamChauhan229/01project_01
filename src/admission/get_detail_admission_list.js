const pg_connection=require('../base/pg_connection')


const get_detail_admission_list=async(req,res)=>{

    try{   

        const currentMonth=new Date().getMonth()+1;
        const currentYear=new Date().getFullYear();
        const currentDay = new Date().getDate();
        // console.log(currentMonth)
        console.log(`${currentYear}-${currentMonth}-${currentDay}`)
        const day=`${currentYear}-${currentMonth}-${currentDay}`
        
        const currentDayIncomeResult = await pg_connection('SELECT * FROM students s, admission a WHERE s.student_id=a.student_id AND YEAR=$1 AND Month=$2 AND admission_date=$3', [currentYear, currentMonth, day]);
        // console.log(currentDayIncomeResult);

        const currentDayIncome= currentDayIncomeResult.reduce((acc,cv)=>acc+cv.admission_fees,0)
        console.log("currentDayIncome",currentDayIncome)

        const currentMonthIncomeResult=await pg_connection(`SELECT * from students s, admission a where s.student_id=a.student_id AND YEAR=${currentYear} AND Month=${currentMonth}`)

        const currentMonthIncome= currentMonthIncomeResult.reduce((acc,cv)=>acc+cv.admission_fees,0)
        console.log("currentMonthIncome",currentMonthIncome)

        

        const currentYearIncomeResult=await pg_connection(`SELECT * from students s, admission a where s.student_id=a.student_id AND YEAR=${currentYear}`)
        const currentYearIncome= currentYearIncomeResult.reduce((acc,cv)=>acc+cv.admission_fees,0)
        console.log("currentYearIncome",currentYearIncome)
        
        const totalIncomeResult=await pg_connection('SELECT * from students s, admission a where s.student_id=a.student_id')
        const totalIncome= totalIncomeResult.reduce((acc,cv)=>acc+cv.admission_fees,0)
        console.log("totalIncome",totalIncome)
        res.send([
            {
                "price":currentDayIncome,
                "earning": "EARNINGS (DAILY)",
                "color": "warning",
                "icon": "dollar-sign",
                },
           {
            "price":currentMonthIncome,
            "earning": "EARNINGS (MONTHLY)",
            "color": "primary",
            "icon": "dollar-sign",
            },
            {
            "earning": "EARNINGS (ANNUAL)",
            "price": currentYearIncome,
            "color": "success",
            "icon": "dollar-sign",
            },
            {
                "earning": "EARNINGS (TOTAL)",
                "price": totalIncome,
                "color": "info",
                "icon": "dollar-sign",
                }
        ])
    }
    catch(e){
        console.log("Some Internal Error",e)
    }
}
module.exports=get_detail_admission_list
