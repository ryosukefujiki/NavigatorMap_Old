const kanban = new jKanban({
    element: '#myKanban',
    gutter: '15px',
    widthBoard: '250px',
    boards: defaultBoards,
    addItemButton   : true,
    buttonClick: (elem, id) => addFormElement(id)
});


var addBoardButton = document.getElementById("AddBoardButton");
var idNumber = 3;

addBoardButton.addEventListener("click", function(e) {
    e.preventDefault();
    var TitleName = document.getElementById("BoardTitle").value;
    var ColorName = document.getElementById("BoardColor").value;
    if(TitleName != "" && ColorName != ""){
      console.log(TitleName);
      addBoardItem(TitleName,ColorName);
    }
    document.getElementById("BoardTitle").value = "";
    document.getElementById("BoardColor").value = "";
});



function addBoardItem(title,color){
  idNumber++;
  idName = "board-" + String(idNumber);
  titleName = title;
  colorName = color;
  const addedBoard = [{
      "id": idName,
      "title": titleName,
      "class": colorName,
  }];
  kanban.addBoards(addedBoard);
}

function addFormElement( id ) {
    const formItem = document.createElement('form');
    formItem.innerHTML = '<input type="text">';
    kanban.addForm( id, formItem );
    formItem.addEventListener('submit', (e) => {
      e.preventDefault();
      kanban.addElement(id, {"title": e.target[0].value});
      formItem.parentNode.removeChild(formItem);
    })
}
