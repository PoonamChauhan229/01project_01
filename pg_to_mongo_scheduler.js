const cron=require('node-cron')
const process_data=require('./pg_to_mongo')


let semaphore=0;
const pg_to_mongo_scheduler=()=>{
    console.log("process_data")
    
    // running a task every minute
    
    cron.schedule('* * * * * *', () => {        
        console.log("Scheduler Started",semaphore)
        if(semaphore==0){
            console.log("Running after evry sec")
            semaphore=1;
            try{
            process_data(function(){
                console.log("Checking....")
                semaphore=0;
             })
            }
            catch(e){
                console.log(e)
            }
        }
      });
}

pg_to_mongo_scheduler()
// module.exports=pg_to_mongo_scheduler
