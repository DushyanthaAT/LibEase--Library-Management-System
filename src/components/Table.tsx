import React from "react";

interface TableProps {
  data: { date: string; bookId: number; bookName: string; link: string }[];
}

const Table: React.FC<TableProps> = ({ data }) => {
  return (
    <>
      <div className="overflow-x-auto w-full">
        <table className="min-w-full bg-white rounded-xl shadow-md">
          <thead className="bg-gray-200">
            <tr>
              <th className="py-3 px-6 text-left border-b border-gray-300 text-sm font-medium text-gray-700 rounded-tl-xl w-1/4">
                Added Date
              </th>
              <th className="py-3 px-6 text-left border-b border-gray-300 text-sm font-medium text-gray-700 w-1/4">
                Book ID
              </th>
              <th className="py-3 px-6 text-left border-b border-gray-300 text-sm font-medium text-gray-700 w-1/4">
                Book Name
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
                className="hover:bg-gray-50 transition duration-200 ease-in-out"
              >
                <td className="py-4 px-6 text-sm font-medium text-gray-700">
                  {row.date}
                </td>
                <td className="py-4 px-6 text-sm font-medium text-gray-700">
                  {row.bookId}
                </td>
                <td className="py-4 px-6 text-sm font-medium text-gray-700">
                  {row.bookName}
                </td>
                <td className="py-4 px-6 text-sm font-medium text-white flex">
                  <a
                    href={row.link}
                    className="transition duration-200 ease-in-out"
                  >
                    <button className="bg-pri_green px-3 py-1 rounded-md hover:bg-text_green">
                      Edit
                    </button>
                  </a>
                  <button className="bg-red-500 px-3 py-1 rounded-md hover:bg-red-700 ml-2">
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Table;
