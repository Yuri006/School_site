start_position = {'pawn_1': ['a2', 'b2', 'c2', 'd2', 'e2', 'f2', 'g2', 'h2'],
         'bishop_1': ['c1', 'f1'],
         'knight_1': ['b1', 'g1'],
         'rook_1': ['a1', 'h1'],
         'queen_1': ['d1'],
         'king_1': ['e1'],
         'pawn_2': ['a7', 'b7', 'c7', 'd7', 'e7', 'f7', 'g7', 'h7'],
         'bishop_2': ['c8', 'f8'],
         'knight_2': ['b8', 'g8'],
         'rook_2': ['a8', 'h8'],
         'queen_2': ['d8'],
         'king_2':['e8']
}
postion = start_position
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
            td.onclick = replace
            console.log(td.style.width, td.style.height, td.id)
            tr.appendChild(td);
        }
        table.appendChild(tr);
    }
    console.log(table)
    // document.body.appendChild(table);
    return table
}

function set_img(cell, path_to_img = 'img.png') {
    let image = document.createElement('img');
    image.src = path_to_img;
    image.style = "max-height:100%; max-width:100%";
    // image.width = parseInt(document.styleSheets[0].rules[0].style['width']) / 16;
    // image.height = parseInt(document.styleSheets[0].rules[0].style['height']) / 16;
    document.getElementById(cell).appendChild(image);
    console.log(document);
}

function delete_img(cell) {
    document.getElementById(cell).removeChild(document.getElementById(cell).firstChild);
    console.log(document.body);
}
function replace(){
    return 0
}

function start_game() {
    console.log('start')
    let im = 'img.png'
    for (let i in start_position){
        console.log(start_position[i])
        for (let j in start_position[i]){
            console.log(start_position[i][j])
            set_img(start_position[i][j])
        }
    }
}
function restart_game(){
    for (let i in start_position){
        console.log(start_position[i])
        for (let j in start_position[i]){
            console.log(start_position[i][j])
            delete_img(start_position[i][j])
        }
    }
    start_game()
}

