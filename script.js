let add = document.getElementById("add")
let to_do = document.getElementById("to_do")
let text = document.getElementById("text")
let done=document.getElementById("done")
let del=document.getElementById("del")

add.addEventListener('click',()=>{
    var para = document.createElement('p');
    para.classList.add('para');

    var check = document.createElement('input');
    check.setAttribute('type','checkbox');
    check.classList.add("check");
    
    para.innerText=text.value;
    
    to_do.appendChild(check);
    to_do.appendChild(para);

    text.value="";
    done.addEventListener('click',()=>{
        if(check.checked){
            para.style.textDecoration="line-through";
        }
    })
    del.addEventListener('click',()=>{
        if(check.checked){
            to_do.removeChild(para);
            to_do.removeChild(check);
        }
        
    })
})



