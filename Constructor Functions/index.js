//question 11

function createEmployee(name,role,salary){
let obj={}
obj.name=name
obj.role=role
obj.salary=salary
obj.introduce=function(){
    console.log(`Hello, I am ${this.name}, working as a ${this.role}.`)
}
}

const employee1 = createEmployee("Alice", "Developer", 60000);
employee1.introduce();
