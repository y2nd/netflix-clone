import Image from "next/image";
import { BASE_URL_IMAGE } from "../constants/movie";
import { Movie } from "../typings";
import { useRecoilState } from "recoil";
import { modalState, movieState } from "../atoms/modalAtom";

interface Props {
  movie: Movie;
}
const Thumbnail = ({ movie }: Props) => {
  const [showModal, setShowModal] = useRecoilState(modalState);
  const [currentMovie, setCurrentMovie] = useRecoilState(movieState);

  return (
    <div
      className="relative h-28 min-w-[180px] cursor-pointer transition duration-200 ease-out md:h-36 md:min-w-[260px] md:hover:scale-105"
      onClick={() => {
        setShowModal(true);
        setCurrentMovie(movie);
      }}
    >
      <Image
        src={`${BASE_URL_IMAGE}${movie.backdrop_path || movie.poster_path}`}
        alt={movie.name}
        layout="fill"
        className="rounded-sm object-cover md:rounded "
      />

      <div className="w-full h-full flex items-center justify-center bg-gray-500 transition duration-300 opacity-0 hover:opacity-80 rounded-sm">
        <h2>
          {movie.original_name ||
            movie.name ||
            movie.title ||
            movie.original_title}
        </h2>
      </div>
    </div>
  );
};

export default Thumbnail;
