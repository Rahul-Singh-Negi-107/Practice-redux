import React, { useEffect, useRef, useState } from 'react'
import './tic.css'

const Tic = () => {

    const [turn, setTurn] = useState("x")
    const boxRef = useRef([])

    // console.log(boxRef.current)




    function listenEvent(i) {

        const box = boxRef.current[i]
        // console.dir(box)

        if (box.innerText === "x" || box.innerText === "o") {
            alert("can't add to this")
        }
        else {
            box.innerText = turn;
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
            console.log(`${box1} Won`)
        }
        else if (box1 && box1 === box4 && box4 === box7) {
            console.log(`${box1} Won`)
        }

        else if (box7 &&box7 === box8 && box8 === box9) {
            console.log(`${box7} Won`)

        }

        else if (box2 && box2 === box5 && box5 === box8) {
            console.log(`${box2} Won`)

        }
        else if(box3 &&box3 === box6 && box6 ===box9)
        {
            console.log(`${box3} Won`)

        }
        else if(box1&&box1 === box5 && box5 === box9)
        {
            console.log(`${box1} Won`)

        }
        else if(box3&&box3 === box5 && box5 ===box7)
        {
            console.log(`${box3} Won`)

        }

 else {
  const isDraw = boxRef.current.every((box) => box.innerText !== "");
  if (isDraw) {
    console.log("MATCH DRAW !!");
  }
}

        setTurn(turn === "x" ? "o" : "x")
    }


    return (
        <div className='parent'>
            {
                [...Array(9)].map((_, i) =>


                    <div

                        key={i}
                        id={`box${i + 1}`}
                        ref={(el) => boxRef.current[i] = el}
                        onClick={() => listenEvent(i)}
                        className='box'>

                    </div>



                )
            }
        </div>


    )
}

export default Tic