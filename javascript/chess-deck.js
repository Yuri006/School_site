start_position = {'pawn_1': [['a2', 'b2', 'c2', 'd2', 'e2', 'f2', 'g2', 'h2'], '2.png'],
         'bishop_1': [['c1', 'f1'], '6.png'],
         'knight_1': [['b1', 'g1'], '4.png'],
         'rook_1': [['a1', 'h1'], '8.png'],
         'queen_1': [['d1'], '10.png'],
         'king_1': [['e1'], '12.png'],
         'pawn_2': [['a7', 'b7', 'c7', 'd7', 'e7', 'f7', 'g7', 'h7'], '14.png'],
         'bishop_2': [['c8', 'f8'], '18.png'],
         'knight_2': [['b8', 'g8'], '16.png'],
         'rook_2': [['a8', 'h8'], '20.png'],
         'queen_2': [['d8'], '22.png'],
         'king_2': [['e8'], '24.png']
}
let postion = start_position
let current_cell = null
function generate_board(side_px) {
    let letter = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];
    let table = document.createElement("table");
    table.className = 'chessboard';
    for (let i = 1; i < 9; i++) {
        let tr = document.createElement('tr');
        for (let j = 1; j < 9; j++) {
            let td = document.createElement('td');
            if (i % 2 == j % 2) {
                td.className = "white";
            } else {
                td.className = "black";
            }
            if (j === 0) {
                td.id = ''
            } else {
                td.id = letter[j - 1].toString() + i.toString()
            }
            td.style.width = (side_px / 8).toString() + 'px';
            td.style.height = (side_px / 8).toString() + 'px';
            td.onclick = click_table
            tr.appendChild(td);
        }
        table.appendChild(tr);
    }
    console.log(table)
    // document.body.appendChild(table);
    return table
}

function set_img(cell, path_to_img) {
    let image = document.createElement('img');
    image.src = path_to_img;
    image.style = "max-height:100%; max-width:100%";
    // image.width = parseInt(document.styleSheets[0].rules[0].style['width']) / 16;
    // image.height = parseInt(document.styleSheets[0].rules[0].style['height']) / 16;
    document.getElementById(cell).appendChild(image);
    console.log(document);
}

function delete_img(cell) {
    if (document.getElementById(cell).firstChild != null){
        document.getElementById(cell).removeChild(document.getElementById(cell).firstChild);
    }

}
function click_table(){
    if (current_cell == null){
        current_cell = [this.id, document.getElementById(this.id).firstChild.attributes[0].nodeValue]
    }else{
        console.log(current_cell[1])
        delete_img(this.id);
        set_img(this.id, current_cell[1]);
        delete_img(current_cell[0]);
        current_cell = null;
    }

}

function start_game() {
    console.log('start');
    for (let i in start_position){
        for (let j in start_position[i][0]){
            set_img(start_position[i][0][j], start_position[i][1]);
        }
    }
}
function restart_game(){
    let lett = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];
    for (let i in lett){
        for (let j = 0; j < 8; j++){
            console.log(lett[i]+j.toString())
            delete_img(lett[i]+(j+1).toString())
        }
    }
    start_game()
}

