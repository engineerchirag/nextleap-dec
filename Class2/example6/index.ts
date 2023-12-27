var myNodelist: HTMLCollection = document.getElementsByTagName("LI");
let i: number;
for (i = 0; i < myNodelist.length; i++) {
  var span: HTMLSpanElement = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  myNodelist[i].appendChild(span);
}

// Click on a close button to hide the current list item
var closeRef: HTMLCollection = document.getElementsByClassName("close");
let j: number;
for (j = 0; j < closeRef.length; j++) {
    closeRef[j].onclick = function() {
    var div = this.parentElement;
    div.style.display = "none";
  }
}

// Add a "checked" symbol when clicking on a list item
var list: HTMLUListElement | null  = document.querySelector('ul');
list?.addEventListener('click', function(ev: Event | null) {
  if (ev?.target?.tagName === 'LI') {
    ev?.target?.classList.toggle('checked');
  }
}, false);

// Create a new list item when clicking on the "Add" button
function newElement() {
  var li = document.createElement("li");
  var inputValue = (document.getElementById("myInput") as HTMLInputElement )?.value;
  var t = document.createTextNode(inputValue);
  li.appendChild(t);
  if (inputValue === '') {
    alert("You must write something!");
  } else {
    document.getElementById("myUL")?.appendChild(li);
  }
  const muInputREf: HTMLInputElement | null = document.getElementById("myInput") as HTMLInputElement;
  if (muInputREf) {
    muInputREf.value = "";
  }

  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  li.appendChild(span);

  for (i = 0; i < close.length; i++) {
    close[i].onclick = function() {
      var div = this.parentElement;
      div.style.display = "none";
    }
  }
}