import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Slide } from "react-toastify";
import ConfirmationModal from "./ConfirmationModal";

interface TableProps {
  addedDate: string;
  title: string;
  author: string;
  bookId: number;
}

const Table: React.FC = () => {
  const [data, setData] = useState<TableProps[]>([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [confirmationType, setConfirmationType] = useState<string>("");
  const [selectedBookId, setSelectedBookId] = useState<number | null>(null);

  const navigate = useNavigate();

  const getData = () => {
    axios
      .get("https://localhost:7197/api/Book")
      .then((result) => {
        setData(result.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    getData();
  }, []);

  const handleEdit: (bookId: number) => void = (bookId) => {
    navigate(`/admin/update-a-post/${bookId}`);
  };

  const handleDelete: (bookId: number) => void = (bookId) => {
    setSelectedBookId(bookId);
    setConfirmationType("delete");
    setIsModalOpen(true);
  };

  const confirmDelete = () => {
    if (selectedBookId !== null) {
      axios
        .delete(`https://localhost:7197/api/Book/${selectedBookId}`)
        .then((result) => {
          if (result.status === 200) {
            toast.success("Book deleted successfully");
            getData();
            setIsModalOpen(false);
          }
        })
        .catch((error) => {
          toast.error("Failed to delete book");
        });
    }
  };

  const cancelAction = () => {
    setIsModalOpen(false);
  };

  // Function to format date to YYYY-MM-DD
  const formatDate = (dateString: string) => {
    console.log(dateString);
    const date = new Date(dateString);
    return date.toISOString().split("T")[0];
  };

  return (
    <>
      <ToastContainer
        position="bottom-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        transition={Slide}
      />
      <div className="overflow-x-auto w-full">
        <table className="min-w-full bg-gray-50 rounded-xl shadow-md">
          <thead className="bg-gray-200">
            <tr>
              <th className="py-3 px-6 text-left border-b border-gray-300 text-sm font-medium text-gray-700 rounded-tl-xl w-1/4">
                Added Date
              </th>
              <th className="py-3 px-6 text-left border-b border-gray-300 text-sm font-medium text-gray-700 w-1/4">
                Book Name
              </th>
              <th className="py-3 px-6 text-left border-b border-gray-300 text-sm font-medium text-gray-700 w-1/4">
                Author Name
              </th>
              <th className="py-3 px-6 text-left border-b border-gray-300 text-sm font-medium text-gray-700 rounded-tr-xl w-1/4">
                Actions
              </th>
            </tr>
          </thead>
          <tbody>
            {data.map((row, index) => (
              <tr
                key={index}
                className="hover:bg-gray-100 transition duration-200 ease-in-out"
              >
                <td className="py-4 px-6 text-sm font-medium text-gray-700">
                  {formatDate(row.addedDate)}
                </td>
                <td className="py-4 px-6 text-sm font-medium text-gray-700">
                  {row.title}
                </td>
                <td className="py-4 px-6 text-sm font-medium text-gray-700">
                  {row.author}
                </td>
                <td className="py-4 px-6 text-sm font-medium text-white flex">
                  <button
                    className="bg-pri_green px-3 py-1 rounded-md hover:bg-text_green"
                    onClick={() => handleEdit(row.bookId)}
                  >
                    Edit
                  </button>
                  <button
                    className="bg-red-500 px-3 py-1 rounded-md hover:bg-red-700 ml-2"
                    onClick={() => handleDelete(row.bookId)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {/* Confirmation Modal */}
      <ConfirmationModal
        isOpen={isModalOpen}
        confirmationType={confirmationType}
        onConfirm={confirmDelete}
        onCancel={cancelAction}
      />
    </>
  );
};

export default Table;
