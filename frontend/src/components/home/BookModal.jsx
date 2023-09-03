import {AiOutLinClose} from 'react-icons/ai'
import {BiUserCircle} from 'react-icons/bi'
import {PiBookOpenTextLight} from 'react-icons/pi'

const BookModal = ({ book, onClose}) => {
  return (
    <div
      className="fixed bg-black bg-opacity-50 top-0 left-0 right-0 bottom-0 z-50 flex justify-center items-center "
      onClick={onClose}
    >
      <div
        onClick={(event) => event.stopPropagation()}
        className="w-[600px] max-w-full h-[400px] bg-white rounded-xl p-4 flex flex-col relative"
      >
        <AiOutLinClose
          className=" absolute right-6 text-2xl text-red-600 cursor-pointer"
          onClick={onClose}
        />
        <h2 className="w-fit px-4 py-1 bg-red-300 rounded-lg">
          {book.publishYear}
        </h2>
        <h4 className="my-2 text-gray-400">{book._id}</h4>
        <div className="flex justify-start items-center gap-x-2">
          <PiBookOpenTextLight className="text-red-300" />
          <h3 className="my-1">{book.title}</h3>
        </div>
        <div className="flex justify-start items-center gap-x-2">
          <BiUserCircle className="text-red-300" />
          <h3 className="my-1">{book.author}</h3>
        </div>
      </div>
    </div>
  );
}

export default BookModal