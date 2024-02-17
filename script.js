let form = document.querySelector("form");
let formInput = document.querySelector(".form__input"); 
let redBtn = document.querySelector("#red-btn");
let greyBtn = document.querySelector("#grey-btn");
let addBtn = document.querySelector("#add");
let check = 0; //счетчик чекбоксов
const main = document.querySelector("#list");

let buttons = document.querySelector(".wrap__buttons")
// ф-я делает заглавной первую букву элемента в списке
let firstUpperLetter = (str) => str.split('')[0].toUpperCase()+str.slice(1);
 let LS = window.localStorage;
let arr = [];  
// ф-я создает элемент списка
function  createList(str){ 
    check++;
    const label = document.createElement("label")
    label.setAttribute("for",`${check}`);
    label.classList.add("label");     
    label.innerText = `${firstUpperLetter(str.trim())}`;
    
    const list = document.createElement("div");
    list.classList.add("field-chek");

    const input = document.createElement("input")
    input.setAttribute("type","checkbox");
    input.setAttribute("id",`${check}`);
    input.classList.add("check");
    input.setAttribute("name",`${check}`);
    const span =  document.createElement("span");
    span.classList.add("check_box");
   
   
    let checked = document.querySelector(".ckeck_box")


    const deleteItem = document.createElement("div");
    deleteItem.classList.add("delete_item")
    deleteItem.innerText = "❌";
    // let del = document.querySelector(".delete_item");
 
    main.append(list);
    list.append(label);                                          
    label.prepend(input);
    label.prepend(span)
    list.append(deleteItem);

    //зачеркивание выбранного элемента
    label.addEventListener("click",function(e){  
        // if(input.checked) 
        // {                 
        // label.classList.add("linethrough"); 
        // span.classList.remove("check_box")   
        // span.classList.toggle("checked")
        // }
        // else
        // label.classList.remove("linethrough"); 
        // span.classList.add("check_box")  
        if(input.checked)
        {
        label.classList.toggle("linethrough");
        span.classList.toggle("check_box")
        span.classList.toggle("checked")
         }
    }) 

    //удаление выбранного элемента при нажатии кнопку "Удалить завершенные"
    deleteItem.addEventListener("click", function(e){  
 
        arr.splice(arr.indexOf(label.textContent),1) // убираю из массива по индексу  списка   нужный элемент 
        // LS.removeItem("task".arr); // удаление  хранилище
        LS.setItem("task",arr) // запись хранилище  уже без этого эл-а
// console.log(arr);
       list.remove() ;
    }) 
  
    //удаление выбранного элемента с помощью крестика 
    greyBtn.addEventListener("click", function(e){ 
              
        if(input.checked) {       
        // // удаление элемента списка
         list.remove();  //
        //  console.log("+++");              
     } 
     

    })    
}
form.addEventListener("submit",function(e){
    if(formInput.value=='' ){
           formInput.value='' 
           }
     else {
        e.preventDefault();  buttons.classList.remove("d-none")
        createList(formInput.value);       
        arr.push(formInput.value);
        LS.setItem("task", arr);
        formInput.value='';
            
    }
 
})

    // ф-я добавляет список элементов
// function addList(e){
//         let key = e.key || String.fromCharCode(e.Code);
//         if (key === 'Enter' ) {  
//             e.preventDefault() ;
//             // line.classList.remove("d-none");
//             buttons.classList.remove("d-none")
//         createList(formInput.value);       
//         arr.push(formInput.value)
//         LS.setItem("task", arr)
//         // formInput.value='';   
//         }
// }

// при вводе инпута в список добавляется новый элемент
// formInput.addEventListener('keypress',addList);

// кнопка "Удалить все" убирает весь список
redBtn.addEventListener("click", function(e){
    LS.removeItem("task");
    buttons.classList.add("d-none")
    main.innerText = ''; 
    formInput.value = '';

})

if(LS.task){
    let storage = LS.task.split(",")
    arr.push(...storage)
    for(let el of storage){
        createList(el);       
        buttons.classList.remove("d-none")  
    }
  
}
// ввод инпута при нажатии кнопки "Добавить" 
// addBtn.addEventListener("click", function(e){   
   
//     e.preventDefault() ;
//    if(formInput.value=='' ){
//    formInput.value='' 
//    }
//    else  
// //    arr.push(formInput.value)
// //    LS.setItem("task", arr)      
//        createList(formInput.value);
//        formInput.value='';      
// })







