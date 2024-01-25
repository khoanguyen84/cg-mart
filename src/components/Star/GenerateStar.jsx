import { FaStar, FaStarHalf } from "react-icons/fa"

export default function GenerateStar({ star }) {
    let gray = 5 - Math.ceil(star)
    let orange = Math.floor(star)
    let ahalf = 5 - (gray + orange) > 0
    return (
        <>
            {
                (new Array(orange).fill(1)).map((item, index) => {
                    return <FaStar key={index} color="orange" />
                })
            }
            {
                ahalf && (<FaStarHalf color="orange" />)
            }
            {
                (new Array(gray).fill(1)).map((item, index) => (
                    <FaStar key={index} color="gray" />
                ))
            }
        </>
    )
}