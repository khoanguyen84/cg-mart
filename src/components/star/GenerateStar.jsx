import { FaStar, FaStarHalf } from "react-icons/fa";
export default function GenerateStar({ star }) {
    const orange = Math.floor(star)
    const gray = 5 - Math.ceil(star)
    const ahalf = 5 - (orange + gray) > 0
    return (
        <>
            {
                (new Array(orange).fill(1)).map((item, index) => (
                    <FaStar key={index} color="orange" />
                ))
            }
            {
                ahalf && (
                    <FaStarHalf color="orange" />
                )
            }
            {
                (new Array(gray).fill(1)).map((item, index) => (
                    <FaStar key={index} color="gray" />
                ))
            }
        </>
    )
}