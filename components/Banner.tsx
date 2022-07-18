import Image from "next/image";
import { Movie } from "../typings";

interface Props {
  netflixOriginals: Movie[]
}

const Banner = ({netflixOriginals}: Props) => {
  return (
    <div>
        <div className="">
            {/* <Image /> */}
        </div>
    </div>
  )
}

export default Banner