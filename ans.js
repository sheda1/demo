
class student {
    static count = 0;
    constructor(fname,age,pno,marks){

        this.fname= fname;
    
        this.age = age;
    
        this.pno = pno;
    
        this.marks = marks;
         student.count++;
    }
    studentCount(){
        console.log(' Total Student ' + student.count);
    }

   
    placement(minage) {
            return (minmarks) => {
                if (this.marks > minmarks && this.age > minage){
                     console.log(this.fname + " is ready for placement");
                }else {
                      console.log(this.fname + " is not ready for placement");
                   }

            }
       
    
    }
}
 


const student1 = new student('John',25,123456789,50);


const student2 = new student('sheda',35,123456789,30);

const student3 = new student('sha',15,123456789,70);

const student4 = new student('Jo',65,123456789,20);

const student5 = new student('Joh',28,123456789,90);


//const student6 = new student('Joh',28,123456789,90);

student1.placement(18)(40);

student2.placement(18)(40);

student3.placement(18)(40);

student4.placement(18)(40);

student5.placement(18)(40);

student1.studentCount();   

/*

  console.log(board(student1.marks));

 

  console.log(board(student2.marks));

  console.log(board(student3.marks));
  console.log(board(student4.marks));
  console.log(board(student5.marks));
   student1.studentCount();*/



