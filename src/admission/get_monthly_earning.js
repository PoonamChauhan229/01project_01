const pg_connection=require('../base/pg_connection')
const mongo_connection=require('../base/mongo_connection')

const get_monthly_earning=async(req,res)=>{

    try{   
        const db=await mongo_connection()
        const currentYear = new Date().getFullYear();
    // console.log(currentYear);
      
        const currentMonthIncomeResult=await db.collection('admission').find({year:currentYear}).toArray()
        // console.log(currentMonthIncomeResult)
        
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

        let resources=['Social','Referral','Direct']
        
        let resourcesobj = {
            'Social': 0,
            'Referral': 0,
            'Direct': 0
        };

          

        month.forEach((element)=>{
           let abc= arr.filter((x)=>x.month==element)
           let xyz=abc.map((element)=>element.month)
        //    console.log(xyz)
           let pqr=abc.reduce((acc,cv)=>acc+cv.admission_fees,0)
        //    console.log(resources)
           
            //  let resouresTotal;
            // resources.forEach((x)=>{
            //     if(pqr!==0){
            //         resouresTotal =currentMonthIncomeResult.filter((element)=>element.admission_sources.includes(x))
            //     // console.log(resouresTotal.length)
            //     resourcesobj[x] = resouresTotal.length;
            //     }
            //     else{
            //         resourcesobj[x] = 0
            //        }
            // })
            // console.log(resourcesobj)
           
          
            if(pqr!==0 && xyz!==0){
                let resouresTotal;
                // console.log(pqr,xyz[0])
                resources.forEach((x)=>{
                    resouresTotal =currentMonthIncomeResult.filter((element)=>element.admission_sources.includes(x))
                    // console.log(resouresTotal.length)
                    resourcesobj[x] = resouresTotal.length;
                    })
                monthlyData.push(
                    {
                    "earning":pqr,
                    "month":getMonthWords(xyz[0]),                
                    "overallResources":resourcesobj
                })
            }
            else{
                monthlyData.push({
                    "earning":0,
                    "month":getMonthWords(element),
                    "overallResources":{
                                        'Social': 0,
                                        'Referral': 0,
                                        'Direct': 0
                                        }
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
