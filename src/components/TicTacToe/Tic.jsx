import React, { useEffect, useRef, useState } from 'react'
// import ConfettiExplosion from 'react-confetti-explosion'
import './tic.css'

const Tic = () => {
  const [turn, setTurn] = useState("x")
  const [winner, setWinner] = useState("")
  // const [showConfetti, setShowConfetti] = useState(false)
  const boxRef = useRef([])

  console.log(turn)

  function showWinner(winnerNum) {
    setWinner(winnerNum)
  }

  function listenEvent(i) {
    const box = boxRef.current[i]

    if (box.innerText === "x" || box.innerText === "o") {
      alert("can't add to this")
      return
    }
    else {
      box.innerText = turn;
      box.style.color = turn === "x" ? "red" : "black";

    }

    // console.log(box1)


    const box1 = boxRef.current[0].innerText
    const box2 = boxRef.current[1].innerText
    const box3 = boxRef.current[2].innerText
    const box4 = boxRef.current[3].innerText
    const box5 = boxRef.current[4].innerText
    const box6 = boxRef.current[5].innerText
    const box7 = boxRef.current[6].innerText
    const box8 = boxRef.current[7].innerText
    const box9 = boxRef.current[8].innerText


    if (box1 && box1 === box2 && box2 === box3) {

      showWinner(box1)
      // console.log(${box1} Won)
    }
    else if (box1 && box1 === box4 && box4 === box7) {
      showWinner(box1)
      // console.log(${box1} Won)
    }

    else if (box7 && box7 === box8 && box8 === box9) {
      showWinner(box7)
      console.log(`${box7} Won`)

    }

    else if (box2 && box2 === box5 && box5 === box8) {
      showWinner(box2)
      // console.log(${box2} Won)

    }
    else if (box3 && box3 === box6 && box6 === box9) {
      showWinner(box3)
      // console.log(${box3} Won)

    }
    else if (box1 && box1 === box5 && box5 === box9) {
      showWinner(box1)
      // console.log(${box1} Won)

    }
    else if (box3 && box3 === box5 && box5 === box7) {
      showWinner(box3)
      // console.log(${box3} Won)

    }

    else {
      const isDraw = boxRef.current.every((box) => box.innerText !== "");
      if (isDraw) {

        setWinner("NOBODY")
        console.log("MATCH DRAW !!");
      }
    }

    setTurn(turn === "x" ? "o" : "x")
  }


  // 🔥 Trigger confetti when winner changes
  useEffect(() => {
    if (winner) {



      // setShowConfetti(true)

      // auto-hide after a while if you want
      // setTimeout(() => setShowConfetti(false), 3000)
    }
  }, [winner])

  function resetGame() {
    boxRef.current.map(b => b.innerText = "")
    setTurn("x")
    setReset(true)
    setWinner("")

  }



  return (
    <div>
      <h1>Tic Tac Toe Game</h1>
      <h3>{turn}: Your Turn</h3>

      <div className='parent'>
        {[...Array(9)].map((_, i) => (
          <div
            key={i}
            id={`box${i + 1}`}
            ref={(el) => boxRef.current[i] = el}
            onClick={() => listenEvent(i)}
            className='box'

          ></div>
        ))}
      </div>


      <h1 className='winnerText' style={{ display: winner ? "flex" : "none" }}>
        {winner} won the match
      </h1>
      {/* {showConfetti && <ConfettiExplosion />} */}


      <button onClick={() => resetGame()}>Restart Match</button>
    </div>
  )
}

export default Tic
