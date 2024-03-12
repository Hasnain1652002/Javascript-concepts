function sum(a,b){
    console.log(a+b);
}

function calculate(a,b,sumCallback){
    sumCallback(a,b);
}

calculate(1,432,(a,b)=>{
    console.log(a+b);
});

const hello = ()=>{
    console.log("helo");
}

setTimeout(hello,3000 )
const getPromise = ()=>{
    return new Promise((resolve,reject) => {
        console.log("I'm a promise");
        // resolve("success");
        
        reject("error occurred");
    });
};

// let promise = getPromise();
// promise.then((result)=>{
//     console.log("promise fulfilled",result);
// })

promise.catch((err)=>{
    console.log("rejected ",err)
});


function getData(id,nextData){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log("data",id);
            resolve("Success");
            if (nextData){
                nextData();
            }
        },5000)
    }); 
    
}
// call back hell
getData(1,()=>{
    getData(2,()=>{
        getData(3,()=>{
            getData(4,()=>{
                getData(5);
            });
        });
    });
});

let promise = new Promise((resolve,reject) => {
    console.log("I'm a promise");
    resolve("success");
    // reject("error occurred");
});

function asynFunc(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log("some details");
            resolve("success");
        },4000)
    });
}

console.log("fetching details")
let p1 = asynFunc();
p1.then((res)=>{
    console.log(res);
}); 

function hello(){
    console.log("Hello");
}

hello();

function api(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log("Weather data");
            resolve("success");
        },2000)
    })
}


async function WeatherData(){
    await api();
    await api(); 
}