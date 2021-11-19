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

function start_game() {
    return 0
}

