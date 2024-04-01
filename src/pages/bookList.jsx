import React, { useState } from "react";
// import { useForm } from "react-hook-form";
import Modal from "../components/Modal";
import { data } from "autoprefixer";
// import { number, object, string } from 'yup'

export default function BookList() {
  const [isOpen, setIsOpen] = useState(false);
  const [book, setBook] = useState({});

  const [books, setBooks] = useState([
    // {
    //   id: "",
    //   name: "",
    //   author: "",
    //   price: "",
    //   description: " ",
    // },
  ]);

  const handleOpenModal = () => {
    setIsOpen(true);
    setBook({});
  };

  const handleCloseModal = () => {
    setIsOpen(false);
    // setBook({});
  };

  // const handleEdit = (index, updatedBook) => {
  //   const newBooks = [...books];
  //   newBooks[index] = updatedBook;
  //   setBooks(newBooks);
  //   setEditIndex(null);
  // };

  const handleEdit = (data, index, updateBook) => {
    setIsOpen(true);
    setBook(data);
  };

  const handleDelete = (index) => {
    // console.log('first')
    setBooks((books) => {
      const temp = books.filter((_, i) => i !== index);
      return temp;
    });
  };

  const handleSubmit = (data) => {
    setIsOpen(false);

    if (data.id !== undefined) {
      setBook({});
      setBooks((prevBooks) => {
        const updatedBooks = prevBooks.map((book) =>
          book.id === data.id ? { ...data } : book
        );
        return updatedBooks;
      });
    } else {
      console.log("new save");
      setBooks((prevBooks) => {
        const temp = prevBooks;
        temp.push({ ...data, id: books.length + 1 });
        return temp;
      });
    }
  };

  // const handleChange = (e) => {
  //   const { name, value } = e.target;
  //   setBook((prevBook) => ({ ...prevBook, [name]: value }));
  //   console.log(book);
  // };

  const [val, setVal] = useState(0);

  const btnCLick = () => {
    console.log(val);
    setVal(val + 1);
  };

  return (
    <>
      {/* {val}

      <button
        onClick={() => {
          btnCLick();
        }}
      >
        {" "}
        CLick ME{" "}
      </button> */}




      <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
        <div className="flex items-center justify-between mb-4 flex-wrap gap-4">
          <span className="flex items-center text-[#001731] text-2xl font-semibold">
            <svg
              className="me-2 mt-2"
              width="26px"
              height="26px"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M12 5.854V20.9999" stroke="#1C274D" strokeWidth="1.5" />
              <path
                d="M5 9L9 10"
                stroke="#1C274D"
                strokeWidth="1.5"
                strokeLinecap="round"
              />
              <path
                d="M19 9L15 10"
                stroke="#1C274D"
                strokeWidth="1.5"
                strokeLinecap="round"
              />
              <path
                d="M5 13L9 14"
                stroke="#1C274D"
                strokeWidth="1.5"
                strokeLinecap="round"
              />
              <path
                d="M19 13L15 14"
                stroke="#1C274D"
                strokeWidth="1.5"
                strokeLinecap="round"
              />
              <path
                d="M20.082 3.01775L20.1081 3.76729L20.082 3.01775ZM16.5 3.48744L16.2849 2.76895V2.76895L16.5 3.48744ZM13.6738 4.80275L13.2982 4.15363L13.2982 4.15363L13.6738 4.80275ZM3.9824 3.07489L3.93639 3.82348L3.9824 3.07489ZM7 3.48744L7.19136 2.76227V2.76227L7 3.48744ZM10.2823 4.87546L9.93167 5.53847L10.2823 4.87546ZM13.6276 20.0692L13.9804 20.7311L13.6276 20.0692ZM17 18.6334L16.8086 17.9082H16.8086L17 18.6334ZM19.9851 18.2228L20.032 18.9714L19.9851 18.2228ZM10.3724 20.0692L10.0196 20.7311H10.0196L10.3724 20.0692ZM7 18.6334L7.19136 17.9082H7.19136L7 18.6334ZM4.01486 18.2228L3.96804 18.9714H3.96804L4.01486 18.2228ZM22.75 10.5384C22.75 10.1242 22.4142 9.78839 22 9.78839C21.5858 9.78839 21.25 10.1242 21.25 10.5384H22.75ZM21.25 7C21.25 7.41421 21.5858 7.75 22 7.75C22.4142 7.75 22.75 7.41421 22.75 7H21.25ZM1.25 10.5707C1.25 10.9849 1.58579 11.3207 2 11.3207C2.41421 11.3207 2.75 10.9849 2.75 10.5707H1.25ZM2.75 14C2.75 13.5858 2.41421 13.25 2 13.25C1.58579 13.25 1.25 13.5858 1.25 14H2.75ZM20.0559 2.2682C18.9175 2.30785 17.4296 2.42627 16.2849 2.76895L16.7151 4.20594C17.6643 3.92179 18.9892 3.80627 20.1081 3.76729L20.0559 2.2682ZM16.2849 2.76895C15.2899 3.06684 14.1706 3.64868 13.2982 4.15363L14.0495 5.45188C14.9 4.95969 15.8949 4.45149 16.7151 4.20594L16.2849 2.76895ZM3.93639 3.82348C4.90238 3.88285 5.99643 3.99829 6.80864 4.21262L7.19136 2.76227C6.23055 2.50873 5.01517 2.38695 4.02841 2.3263L3.93639 3.82348ZM6.80864 4.21262C7.77076 4.46651 8.95486 5.02196 9.93167 5.53847L10.6328 4.21244C9.63736 3.68606 8.32766 3.06211 7.19136 2.76227L6.80864 4.21262ZM13.9804 20.7311C14.9714 20.2028 16.1988 19.6205 17.1914 19.3585L16.8086 17.9082C15.6383 18.217 14.2827 18.8701 13.2748 19.4074L13.9804 20.7311ZM17.1914 19.3585C17.9943 19.1466 19.0732 19.0313 20.032 18.9714L19.9383 17.4743C18.9582 17.5356 17.7591 17.6574 16.8086 17.9082L17.1914 19.3585ZM10.7252 19.4074C9.71727 18.8701 8.3617 18.217 7.19136 17.9082L6.80864 19.3585C7.8012 19.6205 9.0286 20.2028 10.0196 20.7311L10.7252 19.4074ZM7.19136 17.9082C6.24092 17.6574 5.04176 17.5356 4.06168 17.4743L3.96804 18.9714C4.9268 19.0313 6.00566 19.1466 6.80864 19.3585L7.19136 17.9082ZM21.25 16.1436C21.25 16.8293 20.6817 17.4278 19.9383 17.4743L20.032 18.9714C21.5062 18.8791 22.75 17.6798 22.75 16.1436H21.25ZM22.75 4.93319C22.75 3.46989 21.5847 2.21495 20.0559 2.2682L20.1081 3.76729C20.7229 3.74588 21.25 4.25161 21.25 4.93319H22.75ZM1.25 16.1436C1.25 17.6798 2.49378 18.8791 3.96804 18.9714L4.06168 17.4743C3.31831 17.4278 2.75 16.8293 2.75 16.1436H1.25ZM13.2748 19.4074C12.4825 19.8297 11.5175 19.8297 10.7252 19.4074L10.0196 20.7311C11.2529 21.3885 12.7471 21.3885 13.9804 20.7311L13.2748 19.4074ZM13.2982 4.15363C12.4801 4.62709 11.4617 4.6507 10.6328 4.21244L9.93167 5.53847C11.2239 6.22177 12.791 6.18025 14.0495 5.45188L13.2982 4.15363ZM2.75 4.9978C2.75 4.30062 3.30243 3.78451 3.93639 3.82348L4.02841 2.3263C2.47017 2.23053 1.25 3.49864 1.25 4.9978H2.75ZM22.75 16.1436V10.5384H21.25V16.1436H22.75ZM22.75 7V4.93319H21.25V7H22.75ZM2.75 10.5707V4.9978H1.25V10.5707H2.75ZM2.75 16.1436V14H1.25V16.1436H2.75Z"
                fill="#1C274D"
              />
            </svg>
            Books
          </span>
          <div className="flex gap-4 flex-wrap">
            <button
              onClick={handleOpenModal}
              type="button"
              className=" text-white bg-[#16A34A] hover:bg-[#16A34A] focus:ring-0  font-normal rounded-lg text-sm px-5 py-2.5 focus:outline-none "
            >
              Add
            </button>
          </div>
        </div>

        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-4 py-2 whitespace-nowrap">
                ID
              </th>
              <th scope="col" className="px-4 py-2 whitespace-nowrap">
                Book Name
              </th>
              <th scope="col" className="px-4 py-2 whitespace-nowrap">
                Book Author
              </th>
              <th scope="col" className="px-4 py-2 whitespace-nowrap">
                Price
              </th>
              <th scope="col" className="px-4 py-2 whitespace-nowrap">
                Description
              </th>
              <th scope="col" style={{ width: "200px" }} className="px-4 py-2 whitespace-nowrap">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {books?.length > 0 &&
              books?.map((book, index) => (
                <tr
                  key={index}
                  className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700"
                >
                  <td className="px-4 py-2 text-ellipsis"> {book.id} </td>
                  <td className="px-4 py-2 text-ellipsis"> {book.name} </td>
                  <td className="px-4 py-2 text-ellipsis">{book.author}</td>
                  <td className="px-4 py-2 text-ellipsis">{book.price}</td>
                  <td className="px-4 py-2 text-ellipsis">{book.description}</td>
                  <td className="px-4 py-2 text-ellipsis">
                    <div className="flex items-center gap-3">
                      <a
                        onClick={() => handleEdit(book)}
                        href="#"
                        className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                      >
                        <svg
                          width="20px"
                          height="20px"
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M21.2799 6.40005L11.7399 15.94C10.7899 16.89 7.96987 17.33 7.33987 16.7C6.70987 16.07 7.13987 13.25 8.08987 12.3L17.6399 2.75002C17.8754 2.49308 18.1605 2.28654 18.4781 2.14284C18.7956 1.99914 19.139 1.92124 19.4875 1.9139C19.8359 1.90657 20.1823 1.96991 20.5056 2.10012C20.8289 2.23033 21.1225 2.42473 21.3686 2.67153C21.6147 2.91833 21.8083 3.21243 21.9376 3.53609C22.0669 3.85976 22.1294 4.20626 22.1211 4.55471C22.1128 4.90316 22.0339 5.24635 21.8894 5.5635C21.7448 5.88065 21.5375 6.16524 21.2799 6.40005V6.40005Z"
                            stroke="#000000"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <path
                            d="M11 4H6C4.93913 4 3.92178 4.42142 3.17163 5.17157C2.42149 5.92172 2 6.93913 2 8V18C2 19.0609 2.42149 20.0783 3.17163 20.8284C3.92178 21.5786 4.93913 22 6 22H17C19.21 22 20 20.2 20 18V13"
                            stroke="#000000"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </a>
                      <a
                        onClick={() => handleDelete(index)}
                        href="#"
                        className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                      >
                        <svg
                          width="22px"
                          height="22px"
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M10 12V17"
                            stroke="#000000"
                            strokeWidth={2}
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <path
                            d="M14 12V17"
                            stroke="#000000"
                            strokeWidth={2}
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <path
                            d="M4 7H20"
                            stroke="#000000"
                            strokeWidth={2}
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <path
                            d="M6 10V18C6 19.6569 7.34315 21 9 21H15C16.6569 21 18 19.6569 18 18V10"
                            stroke="#000000"
                            strokeWidth={2}
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <path
                            d="M9 5C9 3.89543 9.89543 3 11 3H13C14.1046 3 15 3.89543 15 5V7H9V5Z"
                            stroke="#000000"
                            strokeWidth={2}
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </a>
                    </div>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>

      <div className=" flex items-center justify-center bg-gray-200">
        <Modal
          isOpen={isOpen}
          onClose={handleCloseModal}
          book={book}
          saveBookDetailHandler={handleSubmit}
        />
      </div>
    </>
  );
}