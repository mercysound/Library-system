
let isEditing = false
let arrayOfBook = [];
let saveEditIndex;
const saveBook = ()=>{
  // alert("work")
  if(isEditing){
    if((bName.value == "") || (bAuthor.value == "") || (bDate.value == "") || (bPrice.value == "")){
      alert("fill the input to continue")
    }else{
      
      let bookName = bName.value
      let bookAuthor = bAuthor.value;
      let bookDate = bDate.value;
      let bookPrice = bPrice.value
  
      let listOfBookobj = {title: bookName, author: bookAuthor, date: bookDate, price: bookPrice};
      arrayOfBook[saveEditIndex] = listOfBookobj;
      displayBook()
      localStorage.setItem("myBook", JSON.stringify(arrayOfBook))
      bName.value = "";
      bAuthor.value = "";
      bDate.value = "";
      bPrice.value = "";

    }
    isEditing = false
    forUpdatBtn.innerHTML = "Save book"
  }else if((bName.value == "") || (bAuthor.value == "") || (bDate.value == "") || (bPrice.value == "")){
    alert("fill the input to continue")
  }else{
      var dateTime = new Date()
      var hrs = dateTime.getHours()
      let time = hrs
      let bookName = bName.value
      let bookAuthor = bAuthor.value;
      let bookDate = bDate.value;
      let bookPrice = bPrice.value
      
      let listOfBookobj = {title: bookName, author: bookAuthor, date: bookDate, price: bookPrice, booktime: time};
      arrayOfBook.push(listOfBookobj)
      localStorage.setItem("myBook", JSON.stringify(arrayOfBook))
      // console.log(listOfBookobj);
      // console.log(arrayOfBook);
      displayBook()
      bName.value = "";
      bAuthor.value = "";
      bDate.value = "";
      bPrice.value = "";

    }
  }
  // examPle()




const displayBook = () =>{
  bookBox.innerHTML = "";
  // for(i = 0; i < arrayOfBook.length; i++){
  //   //  console.log(arrayOfBook[i]);
  //   bookBox.innerHTML +=`
  //   <tr>
  //     <td>${i+1}</td>
  //     <td>${arrayOfBook[i].title}</td>
  //     <td>${arrayOfBook[i].author}</td>
  //     <td>${arrayOfBook[i].date}</td>
  //     <td>${arrayOfBook[i].price}</td>
  //   </tr>`;
  // }
  arrayOfBook.map((eachItem, index)=>{
      bookBox.innerHTML += `
      <tr>
          <td>${index+1}</td>
          <td>${eachItem.title}</td>
          <td>${eachItem.author}</td>
          <td>${eachItem.date}</td>
          <td>${eachItem.price}</td>
          <td>${eachItem.booktime}</td>
          <td class=""><button class="btn btn-danger text-light me-2" onclick="forDelete(${index})">Delete</button><button class="btn btn-warning text-light" onclick="forEdit(${index})">Edit</button></td>
      </tr>
      `
  })
} 
const getBookArrayLocal = () =>{
  let getLoca = localStorage.getItem("myBook")
  if(getLoca){
    let getString = JSON.parse(getLoca)
    arrayOfBook = getString;
  }
  displayBook()
}

const forDelete = (index) =>{
  // alert("i dey wprl")
  if(confirm("are you sure you want to delete")){
    arrayOfBook.splice(index, 1)
    localStorage.setItem("myBook", JSON.stringify(arrayOfBook))
    displayBook()
  }
}
const forEdit = (index) =>{
  isEditing = true
  // alert("work")
  // alert("i dey wprl")
  // if(confirm("are you editing")){
  //   arrayOfBook.splice(index, 1)
  //   localStorage.setItem("myBook", JSON.stringify(arrayOfBook))
  //   displayBook()
  // }
  let editArray = arrayOfBook[index]
   bName.value = editArray.title
   bAuthor.value = editArray.author;
   bDate.value = editArray.date;
   bPrice.value =  editArray.price;
   saveEditIndex = (index)
   forUpdatBtn.innerHTML = "Update"
}
const updateBook = () =>{
}



// creating cbt var cbt = [{question: "your name", answer: ["more", "cali", "all"], answer: "cali"}]
