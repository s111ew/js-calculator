var PADDING = 10;

var rect;
var viewport = {
  bottom: 0,
  left: 0,
  right: 0,
  top: 0
}

dragElement(document.querySelector("#calcContainer"));

function dragElement(elmnt) {

  elmnt.onmousedown = dragMouseDown;
  
  function dragMouseDown(e) {
    e = e || window.event;

    pos3 = e.clientX;
    pos4 = e.clientY;
    
    rect = elmnt.getBoundingClientRect();
    viewport.bottom = window.innerHeight - PADDING;
    viewport.left = PADDING;
    viewport.right = window.innerWidth - PADDING;
    viewport.top = PADDING;
    
    document.onmouseup = closeDragElement;
 
    document.onmousemove = elementDrag;
  }

  function elementDrag(e) {
    e = e || window.event;

    pos1 = pos3 - e.clientX;
    pos2 = pos4 - e.clientY;
    pos3 = e.clientX;
    pos4 = e.clientY;
    
    var newLeft = elmnt.offsetLeft - pos1;
    var newTop = elmnt.offsetTop - pos2;

    if (newLeft < viewport.left
        || newTop < viewport.top
        || newLeft + rect.width > viewport.right
        || newTop + rect.height > viewport.bottom
    ) {
    
    } else {
      elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
      elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
    }
  }

  function closeDragElement() {
    document.onmouseup = null;
    document.onmousemove = null;
  }
}

//Old load animation ---->

// window.onload = setTimeout(function() {
//   let box = document.querySelector("#stored");
//   let text = "Try moving me";
//   let typingSpeed = 90;
//   let delayBetween = 550;
//   let deletingSpeed = 90;

//   function typeText() {
//     for (let i = 0; i <= text.length; i++) {
//       setTimeout(function() {
//         box.textContent = text.substring(0, i);
//       }, i * typingSpeed);
//     }
//   }

//   function deleteText() {
//     for (let i = 0; i <= text.length; i++) {
//       setTimeout(function() {
//         box.textContent = text.substring(0, text.length - i);
//       }, i * deletingSpeed);
//     }
//   }

//   typeText();
//   setTimeout(function() {
//     deleteText();
//   }, typingSpeed * text.length + delayBetween);
// }, 300)

window.onload = () => {
  const calc = document.querySelector("#calcContainer");
  const prompt = document.querySelector("#prompt");
  
  calc.addEventListener("mousedown", () => { prompt.remove();
  });
}