// check interaction of var and let
// var samp1 = 1;

// function something () {
//     var samp1 = 2;
//     console.log(samp1);
// }
// console.log(samp1)
// something();


// check var and let with changing variables
// var ctr = 0;
// function inc() {
//     for(var i = 0; i < 10; i++) {
//         ctr += i;
        
//     }
//     return ctr;
// }

// console.log("var i is =" + i); // error
// console.log("var ctr total is " + inc());

// let ctr2 = 0;
// function inc2() {
//     for(let j = 0; j < 10; j++) {
//         ctr2 += j;
        
//     }
//     return ctr2;
// }

// console.log("let j is =" + j); // error
// console.log("let ctr2 total is " + inc());


// spread operator function
// let total = 0;
// function numTotal([...number],mul) {
//     for(let i = 0; i < number.length; i++) {
//         total += number[i];
//     }
//     return total*mul;
// }
// console.log(numTotal([5,6,7,8,10,1,3],2));

//try recursion with spread operators

// function countdown(n) {
//     return n < 1 ? [] : [n, ...countdown(n-1)];
// }
// console.log(countdown(10));


//try recursion with spread operator with max, and min
// function countdown(max, min) {
//      return max <= min ? [min]:[max, ...countdown(max-1, min)];
// }
// console.log(countdown(10,5));


//create sample objects for practice on property manipulation;

// let myInformation = {
//     name: "Nicolas Sebastian R. Mendoza",
//     address: "Capas, Tarlac",
//     hobbies: ["programming", "music", "watching movies"],
//     age: 25,
//     birthday: '06/19/1996',
//     pets: [{
//             petName: "Suri",
//             type: "dog",
//             breed: "Shih-Tzu",
//             food: ["chicken liver","chicken adobo","dog food"]
//         },
//         {
//             petName: "Sid",
//             type: "dog",
//             breed: "Belgian Malinois",
//             food: ["corned-beef","dog food"]
//         },
//         {
//             petName: "Link",
//             type: "cat",
//             breed: "Persian",
//             food: ["cat food"]
//         },
//         {
//             petName: "Euruce",
//             type: "cat",
//             breed: "Puskal",
//             food: ["cat food"]
//         }
        
//     ]
// }

// factory function
// function createCircle(radius) {
//     return {
//         radius,
//         draw() {
//             console.log('draw');
//         }
//     }
// }

//constructor function
// const myCircle = createCircle(1); 
// console.log(myCircle);
// //constructor function

// function Circle(radius) {
//     this.radius = radius;
//     this.draw = function() {
//         console.log('draw');
//     }
// }

// const circle = new Circle(2);
// console.log(circle);
// console.log();
// console.log(Circle);  


// class GotChar {
//     constructor (firstName, lastName) {
//         this.firstName = firstName;
//         this.lastName = lastName;
//     }
// }

// const charNew = new GotChar('Ned','Stark');
// console.log(charNew);

// setter and getter function

// class Book {
//     constructor(author) {
//       this._author = author;
//     }
//     // getter
//     get writer() {
//       return this._author;
//     }
//     // setter
//     set writer(updatedAuthor) {
//       this._author = updatedAuthor;
//     }
//   }
//   const novel = new Book('anonymous');
//   console.log(novel.writer);
//   novel.writer = 'newAuthor';
//   console.log(novel.writer);


//   console.log(novel);
//   console.log(novel.author);
//   console.log(novel._author);

  class Names {
      constructor(firstName, lastName) {
          this._firstName = firstName;
          this._lastName = lastName;
      }
      get givenName() {
          return `${this._firstName} ${this._lastName} is my Name`
      }
      set changeName(name) {
          this._firstName = name.split(' ')[0];
          this._lastName = name.split(' ')[1]
      }
  }

  const newName = new Names('Nicolas','Mendoza');
  console.log(newName);
  let wholeName = newName.givenName;
  console.log(wholeName);
  newName.changeName = "Dolores Mendoza";
  console.log(newName.givenName);

