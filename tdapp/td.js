let workslist=[];
displayList();
function addTodo(){
    let inputtext=document.querySelector('#takeinput')
    let todowork=inputtext.value;
    //console.log(todowork)
    workslist.push(todowork);
    inputtext.value=''

    displayList();
}
//function displayList(){
//    let displement=document.querySelector('#display');
//    for(let i=0;i<=workslist.length;i++){
//        displement.innerHTML=displement.innerHTML+ workslist[i];

//    }

//}
function displayList(){
    const contele=document.querySelector("#cont");
    let html='';
    for(let i=0;i<=workslist.length;i++){
        html += `<div>
        <span>${workslist[i]}</span>
        <button onclick="workslist.splice(${i},1);>delete</button></div>
        `;
    }

    contele.innerHTML=html;
    
}