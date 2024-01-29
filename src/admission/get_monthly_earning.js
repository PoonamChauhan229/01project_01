const pg_connection=require('../base/pg_connection')
const mongo_connection=require('../base/mongo_connection')

const get_monthly_earning=async(req,res)=>{

    try{   
        const db=await mongo_connection()
      
        const currentMonthIncomeResult=await db.collection('admission').find().toArray()
        
        const arr=currentMonthIncomeResult.map(element=>({               
                    "month":element.month,
                    "admission_fees": element.admission_fees
                }))
        let monthlyData=[]
        var month=[1,2,3,4,5,6,7,8,9,10,11,12]

        function getMonthWords(monthno) {
            const monthAbbreviations = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
            return monthno >= 1 && monthno <= 12 ? monthAbbreviations[monthno - 1] : null;
        }

        month.forEach((element)=>{
           let abc= arr.filter((x)=>x.month==element)
           let xyz=abc.map((element)=>element.month)
        //    console.log(xyz)
           let pqr=abc.reduce((acc,cv)=>acc+cv.admission_fees,0)
            if(pqr!==0 && xyz!==0){
                // console.log(pqr,xyz[0])
            
                monthlyData.push({
                    "totalMonthlyFees":pqr,
                    "month":getMonthWords(xyz[0])
                })
            }
            else{
                monthlyData.push({
                    "totalMonthlyFees":0,
                    "month":getMonthWords(element)
                })
            }
        
        })
        res.send(monthlyData)

    }
    catch(e){
        console.log("Some Internal Error",e)
    }
}
module.exports=get_monthly_earning;
