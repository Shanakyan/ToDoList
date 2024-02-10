let formInput = document.querySelector(".form__input"); 
let redBtn = document.querySelector("#red-btn");
let greyBtn = document.querySelector("#grey-btn");
let lists = document.querySelector("#list");
let addBtn = document.querySelector("#add");

const main = document.querySelector("#list");

// ф-я делает заглавной первую букву элемента в списке
let firstUpperLetter = (str) => str.split('')[0].toUpperCase()+str.slice(1);
   
// ф-я создает элемент списка
function  createList(str){ 

    const label = document.createElement("label")
    label.setAttribute("for","check");
    label.classList.add("label");     
    label.innerText = `${firstUpperLetter(str.trim())}`;
    
    const list = document.createElement("div");
    list.classList.add("field-chek");

    const input = document.createElement("input")
    input.setAttribute("type","checkbox");
    input.setAttribute("id","checkbox");
    input.classList.add("check");

    const deleteItem = document.createElement("span");
    deleteItem.classList.add("delete_item")
    deleteItem.innerText = "❌";

    main.append(list);
    list.append(label);
    label.prepend(input);
    list.append(deleteItem)
}
    // ф-я добавляет список элементов
function addList(e){
    let key = e.key || String.fromCharCode(e.Code);
    if (key === 'Enter' ) {  
        e.preventDefault() ;
       createList(formInput.value);
       formInput.value='';   
    }
}

// при вводе инпута в список добавляется новый элемент
formInput.addEventListener('keypress',addList);

// кнопка "Удалить все" убирает весь список
redBtn.addEventListener("click", function(e){
    lists.innerText = '';
    main.innerHTML = '';
    // list.innerHTML = "";
    formInput.value = '';   
})

// ввод инпута при нажатии кнопки "Добавить" 
addBtn.addEventListener("click", function(e){
    e.preventDefault() ;
   if(formInput.value=='' ){
   formInput.value='' 
   }
   else        
       createList(formInput.value);
       formInput.value='';       
})



// greyBtn.addEventListener("click", func)

// formInput.addEventListener("", function(){
//    console.log("dfvgbhnjm");
// })


// let findSelected=()=> {
//     let selected=document.querySelector("input[name='check']:checked").value;
//     console.log(selected);
//     if (selected==="user") {
//       document.querySelector(".userLabel").textContent="Username";
//     }
//     if (selected==="guest") {
//       document.querySelector(".userLabel").textContent="Pseudonym";
//     }
//   }



// formInput.addEventListener('keypress', function (e) {
//     let key = e.key || String.fromCharCode(e.Code);
//     if (key === 'Enter' ) {  
//         e.preventDefault() ;
//        createList(formInput.value);
//        formInput.value='';   
//     }
// });