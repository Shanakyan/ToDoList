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
function  createList(str, chek){ 
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
   
    label.classList.add(`${chek}`);//при выборе чекбокса добавляется класс зачеркивания ("linethrough")
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
    // label.addEventListener("click",function(e){  
 
    //     if(input.checked)
    //     {
    //     label.classList.toggle("linethrough");
    //     span.classList.toggle("check_box")
    //      span.classList.toggle("checked")
        
    //     // label.toggleAttribute("checked")
        
       
    //     // input.toggleAttribute(`${chek = "linethrough" ? "checked" : ""}`)
      
        
    //       let textItem  = label.textContent;
    //     //   console.log(textItem);
    //      let x = arr.findIndex(item => item.text === textItem)
    //      console.log(x);
    //     arr[x].chek = arr[x].chek ? false : "linethrough";
    //     // label.toggleAttribute(`${chek = "linethrough" ? "checked" : ""}`)
    //      LS.setItem("task",JSON.stringify(arr))
    //     }
    // }) 
    function checking(e){  
 
        if(input.checked)
        {
        label.classList.toggle("linethrough");
        span.classList.toggle("check_box")
         span.classList.toggle("checked")
        
        // label.toggleAttribute("checked")
        
       
        // input.toggleAttribute(`${chek = "linethrough" ? "checked" : ""}`)
      
        
          let textItem  = label.textContent;
        //   console.log(textItem);
         let x = arr.findIndex(item => item.text === textItem)
        //  console.log(x);
        arr[x].chek = arr[x].chek ? false : "linethrough";
        // label.toggleAttribute(`${chek = "linethrough" ? "checked" : ""}`)
         LS.setItem("task",JSON.stringify(arr))
        }
    }
    label.addEventListener("click", checking)
    
    function delet(e){  
 
        // arr.splice(arr.indexOf(label.textContent),1) // убираю из массива по индексу  списка   нужный элемент 
        // let x = arr.findIndex(item => item.text === label.textContent)
        // console.log(x);
        arr.splice(arr.findIndex(item => item.text === label.textContent),1)// находим нужный объект по ключу и извлекаем из массива 
        LS.setItem("task",JSON.stringify(arr)) // запись хранилище  уже без этого эл-а
        // console.log(arr);
       list.remove() ;
    }
    
     
        deleteItem.addEventListener("click", delet)     
    //удаление выбранного элемента при нажатии кнопку "Удалить завершенные"
    // deleteItem.addEventListener("click", function(e){  
 
    //     // arr.splice(arr.indexOf(label.textContent),1) // убираю из массива по индексу  списка   нужный элемент 
    //     // let x = arr.findIndex(item => item.text === label.textContent)
    //     // console.log(x);
    //     arr.splice(arr.findIndex(item => item.text === label.textContent),1)// находим нужный объект по ключу и извлекаем из массива 
    //     LS.setItem("task",JSON.stringify(arr)) // запись хранилище  уже без этого эл-а
    //     // console.log(arr);
    //    list.remove() ;
    
    //     if(arr.length===0){
    //             LS.clear()
    //             buttons.remove()
    //         }             
    //         }) 
        //     greyBtn.addEventListener("click", function(e){ 
        //         const  target = e.target;    
        //        if(input.checked) { 
                   
                   
        //        // // удаление элемента списка
        //         list.remove();  //
        //        //  console.log("+++");              
        //     } 
       
           
        //    })
    //удаление выбранного элемента с помощью крестика 
    greyBtn.addEventListener("click", function(e){ 
         const  target = e.target;
    
        if(input.checked){
            list.remove()
          arr = arr.filter(el => el.chek === false)
          LS.setItem("task",JSON.stringify(arr))
        }
  
    })  
   
}
form.addEventListener("submit",function(e){
    e.preventDefault(); 
    if(formInput.value)
    {
        
        let objLS = {
            text:formInput.value,
            chek:false,
        }
        buttons.classList.remove("d-none");

        arr.push(objLS);
        LS.setItem("task", JSON.stringify(arr));      
        createList(formInput.value);         
        formInput.value='' ;
    } 
    else
    {
        formInput.value='' ;
     }  
 
})

// кнопка "Удалить все" убирает весь список
redBtn.addEventListener("click", function(e){
    // LS.removeItem("task");
    LS.clear()
    buttons.classList.add("d-none")
    main.innerText = ''; 
    formInput.value = '';

})

if(LS.getItem("task")){
    // let storage = LS.task.split(",")
    arr =  JSON.parse( LS.getItem("task"))
    // console.log(storage);
    // arr.push(...storage)
    for(let el of arr){
        createList(el.text, el.chek);       
        buttons.classList.remove("d-none")  
    }
  
}

