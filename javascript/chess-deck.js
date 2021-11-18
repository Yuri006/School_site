function generate_board() {
    let deck;
    let color_deck;
    deck = '<table class=\'chessboard\'>\n';
    let letter = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'];
    for (let i = 0; i < 8; i += 1) {
        deck += '    <tr>\n' +
            '       <td><a href=\'#\'>' + (8 - i).toString() + '</a>\n';
        for (let j = 0; j < 8; j++) {
            if ((i % 2 === 0 & j % 2 === 0) || (i % 2 === 1 & j % 2 === 1)) {
                color_deck = 'white';
            } else {
                color_deck = 'black';
            }
            deck += '           <td id=' + letter[i] + (8 - j).toString() + ' class=' + color_deck + ' ><a href=\'#\'></a></td>\n';
        }
        deck += '       </td>\n' + '    </tr>\n';
    }
    deck += '</table>\n';
    return deck
}

