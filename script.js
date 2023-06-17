let arr = [
    { id: 1, name: "john", age: "18", profession: "developer" },
    { id: 2, name: "jack", age: "20", profession: "developer" },
    { id: 3, name: "karen", age: "19", profession: "admin" },
  ];

  function PrintDeveloperbyMap() {
    console.log(' ')
    arr.map(value => {
        if(value.profession === "developer"){
            console.log(value);
        }
    })
  }

  function PrintDeveloperbyForEach() {
    console.log(" ");
    arr.forEach(value => {
        if(value.profession === "developer"){
            console.log(value);
        }
    })
  }
  
  function addData() {
    console.log(' ')
    let obj = {
        id:4,
        name:"susan",
        age:"20",
        profession:"intern"
    }
    arr.push(obj);
    for(let x in arr){
        console.log(arr[x]);
    }
    
  }
  
  function removeAdmin() {
    console.log(' ')
    arr.filter(value => {
        if(value.profession !== "admin"){
            console.log(value);
        }
    })
  }
  
  let newArray = [
    { id: 5, name: "mani", age: "21", profession: "intern" },
    { id: 6, name: "poorna", age: "22", profession: "developer" },
    { id: 7, name: "rao", age: "24", profession: "admin" },
  ];

  function concatenateArray() {
    console.log(' ')
      arr = arr.concat(newArray);
      for(let x in arr){
        console.log(arr[x]);
      }
      
  }