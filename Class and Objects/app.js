const student = {
    fullName : "hasnain" ,
    marks : 98 ,
    printMarks : function(){
        console.log("marks = ",this.marks)
    }
};

const std = {
    marks : 87
}

std.__proto__= student;

class Toyata{
    constructor(cost,car){
        this.cost = cost;
        this.car = car ;
    }
    start(){
        console.log("start")
    }
    stop(){
        console.log("stop")
    }
    setBrand(brand){
        this.brand = brand;
    }
}

let audi =new Toyata("20M","jet");
let audi1 =new Toyata("20M","jet");
audi.setBrand("funki");  

let data = "data"

class user{
    constructor(name,email){
        this.name = name;
        this.email = email;
    }

    veiwData(){
        console.log(data);
    }
}

class admin extends user{
    constructor(name,email){
        super(name,email);
    }
    edit(){
        data = "new";
    }
}

let std1 = new user("hasnain","email");
let std2 = new user("hasnain2","email2");

let admin1 = new admin("sir","siremail")