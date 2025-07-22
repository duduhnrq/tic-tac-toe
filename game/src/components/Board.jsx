import React, { useState } from "react";

function Board() {
    const [squares, setSquares] = useState(Array(9).fill(null));
    const [isXTurn, setIsXTurn] = useState(true);
    const [winner, setWinner] = useState(null);

    const winningCombos = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
    ]

    function checkWinner(board) {
        for (let combo of winningCombos) {
            const [a, b, c] = combo;
            if (
                board[a] &&
                board[a] === board[b] &&
                board[a] === board[c]
            ) {
                return board[a];
            }
        }
        return null;
    }

    function handleClick(index) {
        if (squares[index] || winner) return;

        const newSquares = [...squares];
        newSquares[index] = isXTurn ? "X" : "O";

        setSquares(newSquares);
        setIsXTurn(!isXTurn);

        const result = checkWinner(newSquares);
        if (result) {
            setWinner(result);
        }
    }

    function resetBoard() {
        setSquares(Array(9).fill(null));
        setIsXTurn(true);
        setWinner(null);
    }

    return (
        <>
            <div style={styles.board}>
                {squares.map((value, index) => (
                    <div
                     key={index}
                     style={{
                        ...styles.square,
                        color: value === "X" ? "#ffae00ff" : "#56FFC5",
                     }}
                     onClick={() => handleClick(index)}
                    >
                        {value}
                    </div>
                ))}
            </div>

            {winner && (
                <h2 style={{ textAlign: "center", color: winner === "X" ? "#ffae00ff" : "#56FFC5" }}>
                    {winner} <span style={{ color: "#fff" }}>Wins!</span>
                </h2>
            )}

            <button style={styles.button} onClick={resetBoard}>
                Reset
            </button>
        </>
    );
}

const styles = {
    board: {
        display: "grid",
        gridTemplateColumns: "repeat(3, 100px)",
        gridTemplateRows: "repeat(3, 100px)",
        gap: "5px",
        margin: "40px auto",
        width: "max-content",
    },
    square: {
        width: "100px",
        height: "100px",
        background: "#21333F",
        fontSize: "2rem",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        cursor: "pointer",
        borderRadius: ".5rem",
    },
    button: {
        display: "block",
        margin: "20px auto",
        padding: "20px 60px",
        fontSize: "1rem",
        backgroundColor: "#21333F",
        color: "#56FFC5",
        border: "none",
        borderRadius: "50px",
        cursor: "pointer",
    },
}

export default Board;