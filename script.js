let arr = [
    { id: 1, name: 'john', age: 18, profession: 'developer' },
    { id: 2, name: 'jack', age: 20, profession: 'developer' },
    { id: 3, name: 'karen', age: 19, profession: 'admin' },
  ];
  
  
  
  // Don't worry about consoling these functions, they are already being called on the button clicks.
  // Please don't change anything in the index.html file.
  
  function PrintDeveloper() {
    //Write your code here , just console.log
    for(let i in arr){ 
     
      if(arr[i].profession == 'developer'){ // if the employee are developer then there details will show
        console.log(arr[i]);
      }
      
    }
  }
  
  function addData() {
    //Write your code here, just console.log
    // adding the new entry of an employee.
    arr.push(
      { id:4, name:'susan', age:20, profession: 'intern' }
      );
  }
  
  function removeAdmin() {
    //Write your code here, just console.log
    // removing the admin
    for(let i in arr){
      if(arr[i].profession=='admin'){
        arr.splice(i,1);
      }
      
    }
    // print the desire output
    console.log(arr);
  
  }
  
  // create a new array, to merge it with the arr
  let arr2 = [
    { id: 5, name: 'Aman', age: 21, profession: 'programmer'},
    { id: 6, name: 'Manan', age: 22, profession: 'Project manager'}
  ]
  
  function concatenateArray() {
    //Write your code here, just console.log
    // mergint the arr with arr2
    console.log(arr.concat(arr2));
  
  }
  
  // Here is an example of how functions work,
  // basically a function is a block of code which can directly access your 'arr' variable since arr is global.
  // If I have a function called consoleArr(), that can directly access arr like this to console it.
  
  function consoleArr() {
    console.log('Consoling Array Variable', arr);
    // Over here I can directly access the variable.
  }
  