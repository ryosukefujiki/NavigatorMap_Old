const kanban = new jKanban({
    element: '#myKanban', //タスク管理ボードを表示させたいHTML要素
    gutter: '15px', //ボード同士の間隔
    widthBoard: '250px', //ボードのサイズ
    boards: defaultBoards, //初期状態のボードの中身をJSONで指定
    addItemButton   : true,
    buttonClick: (elem, id) => addFormElement(id)
});

function addFormElement( id ) {


    const formItem = document.createElement('form');


    formItem.innerHTML = '<input type="text">';
    kanban.addForm( id, formItem );

    formItem.addEventListener('submit', (e) => {
      e.preventDefault();


      //入力された「タスク」をボードに登録
      kanban.addElement(id, {"title": e.target[0].value});


      //フォーム要素を非表示にするため削除
      formItem.parentNode.removeChild(formItem);
    })

}
