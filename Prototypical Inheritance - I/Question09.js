export  function Question09(){
    //1.Create a constructor function Person with properties:
    function Person(name,age){
        this.name=name,
        this.age=age
    }
    //2. Add a method introduce to Person.prototype that logs:
    Person.prototype.introduce=function(){
        console.log(`Hi, my name is ${this.name} and I am ${this.age} years old.`)
    }

    //3. Create a constructor function Employee that inherits from Person and adds:

    function Employee(name,age,jobTitle){
        Person.call(this,name,age)
        this.jobTitle=jobTitle
    }

    Employee.prototype=Object.create(Person.prototype)
    Employee.prototype.constructor=Employee

    //4. Add a method work to Employee.prototype that logs:
    Employee.prototype.work=function(){
        console.log(`${this.name} is working as a ${this.jobTitle}.`)
    }

    let person1=new Person("Amit",26)
    let person2=new Employee("Ritik",25,'SDE')

    person1.introduce()
    person2.introduce()

    person2.work()
}