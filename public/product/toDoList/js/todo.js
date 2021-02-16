// todo リストのアイテム
let todoItems = [];
let todoKeyName = '__todoItems';

if (localStorage.getItem(todoKeyName)) {
    // 存在するとき
    todoItems = JSON.parse(localStorage.getItem(todoKeyName));
}

todoItems.forEach(item => {
    let newLI = document.createElement('li');
    let content = document.createTextNode(item.value);

    newLI.appendChild(content);
    if (item.checked) {
        newLI.classList.add('checked');
    }
    newLI.style.display = item.display;

    document.getElementById('myUL').appendChild(newLI)
});

function updateTodoItems() {
    todoItems = [];
    for (i = 0; i < myNodelist.length; i++) {
        item = { value: null, checked: false, display: 'none' }

        item.value = myNodelist[i].innerText.replace('\u00D7', '');

        if (myNodelist[i].className == 'checked') {
            item.checked = true;
        } else {
            item.checked = false;
        }

        if (myNodelist[i].style.display == 'none') {
            item.display = 'none';
        } else {
            item.display = '';
        }

        todoItems.push(item);
    }
    localStorage.setItem(todoKeyName, JSON.stringify(todoItems));
}



// Create a "close" button and append it to each list item
let myNodelist = document.getElementsByTagName("li");
// li要素の末尾にクローズボタン<span class="close">x</span>を追加
for (let i = 0; i < myNodelist.length; i++) {
    let span = document.createElement("span");   // <span class="close">x</span>
    let closeTxt = document.createTextNode("\u00D7"); // x
    span.className = "close";
    span.appendChild(closeTxt);
    myNodelist[i].appendChild(span); // <li>Pay bills <span class="close">x</span></li>
}

// Click on a close button to hide the current list item
let close = document.getElementsByClassName("close");
for (let i = 0; i < close.length; i++) {
    close[i].onclick = function () {
        let li = this.parentElement; // parentElemenは，close buttonを含む li要素
        li.style.display = "none";   // 要素が表示されず，無いものとしてレイアウトされる

        updateTodoItems();
    }
}

// Add a "checked" symbol when clicking on a list item
let ulLists = document.querySelector('ul');
ulLists.addEventListener('click', function (ev) {
    if (ev.target.tagName === 'LI') { // HTMLではtagNameは大文字！
        // 指定のクラス名があればクラス名を除去し，クラス名がなければ追加
        ev.target.classList.toggle('checked');

        updateTodoItems();
    }
}, false);

// Create a new list item when clicking on the "Add" button
function newElement() {
    let li = document.createElement("li");
    let inputValue = document.getElementById("myInput").value;
    let inputTxt = document.createTextNode(inputValue);

    li.appendChild(inputTxt);
    if (inputValue === '') {
        alert("You must write something!");
    } else {
        document.getElementById("myUL").appendChild(li);
    }
    // localStorage に保存する
    updateTodoItems();

    // liを追加したら，myInputの内容をクリア
    document.getElementById("myInput").value = "";

    let span = document.createElement("span");
    let closeTxt = document.createTextNode("\u00D7");
    span.className = "close";
    span.appendChild(closeTxt);
    li.appendChild(span);

    for (i = 0; i < close.length; i++) {
        close[i].onclick = function () {
            let li = this.parentElement;
            li.style.display = "none";

            updateTodoItems();
        }
    }
}

updateTodoItems();