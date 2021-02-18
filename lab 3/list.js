const input = document.querySelector('input');
const but = document.querySelector('.addTask > button');

but.addEventListener('click',addToList);

function addToList(x){
    const spisok = document.querySelector('.spicok');
    const newEl = document.createElement('li');
    const checkBut = document.createElement('span');
    const delBut = document.createElement('div');
    let ok = true;

    checkBut.innerHTML = '<input type ="checkbox" name ="" class ="check">';
    delBut.innerHTML = '<img src = "https://masterovgorod.com/upload/iblock/a31/a31f436b32e61f9155999e760714526c.jpg" class = "trash">';

    if(input.value !== ''){
        newEl.textContent = input.value;
        input.value = '';
        spisok.appendChild(newEl);
        newEl.appendChild(checkBut);
        newEl.appendChild(delBut);
    }

    checkBut.addEventListener('click',function(){
        if(ok == true) {
            newEl.style.setProperty("text-decoration", "line-through");
            ok = false;
        }
        else{
            newEl.style.setProperty("text-decoration", "none");
            ok = true;
        }
    });

    delBut.addEventListener('click',function(){
        const parent = this.parentNode;
        parent.remove();
    });

}