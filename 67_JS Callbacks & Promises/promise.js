console.log('This is promises...');

let prom1 = new Promise((resolve, reject) =>{
    let a = Math.random();
    if(a<0.5){
        reject("No, random number was not supporting you.")
    }
    else{
        setTimeout(()=>{
            console.log("Yes I am done.");
            resolve("Roshan");    
        }, 3000);
    } 
})

prom1.then((a)=>{
    console.log(a); 
}).catch((err)=>{
    console.log(err);
    
})

//PROMISE API:

// 1]Promise.all([promises])
// 2] Promise.allSettled()
// 3]Promise.race()
// 4]Promise.any()
// 5]Promise.resolve(value)
// 6]Promise.reject(error)

let prom2 = new Promise((resolve, reject) =>{
    let a = Math.random();
    if(a<0.5){
        reject("No, random number was not supporting you 2.")
    }
    else{
        setTimeout(()=>{
            console.log("Yes I am done 2.");
            resolve("Roshan 2");    
        }, 3000);
    } 
})

let p3 = Promise.all([prom1,prom2]);
p3.then((a)=>{
    console.log(a);
}).catch(err =>{
    console.log(err);
})



