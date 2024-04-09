let a= 10;
console.log(typeof(String()));
console.log(typeof(a));


////
let myobj={
        name: 'ketaki' ,
        age: 20,
        fname:{
            car: 'kia' ,
            color: "white"
        },
    
    pushToMyArray:function(){
        let arr=["Ketatki","Riya","Sakshi"]
        arr.push("Chaitali")
        return arr
    }
}
console.log(myobj.pushToMyArray())