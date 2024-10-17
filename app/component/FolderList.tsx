import { FaFolder } from 'react-icons/fa';
import { MdAdd, MdMoreVert } from 'react-icons/md';

const FolderList = () => {
  return (
    <div className="w-1/4 bg-gray-50 p-4">
      {/* Thanh tiêu đề với icon add */}
      <div className="flex justify-between items-center mb-6 text-xl font-bold">
        <span>THƯ MỤC</span>
        {/* Icon add */}
        <button className="flex items-center justify-center w-8 h-8 bg-blue-100 text-blue-500 rounded-[10px] border border-blue-300 hover:bg-blue-200">
          <MdAdd size={20} />
        </button>
      </div>
      <input
        type="text"
        placeholder="Tìm Kiếm Thư Mục"
        className="mb-4 w-full p-2 border rounded-md text-sm"
      />
      <div className="space-y-3">
        <div className="flex items-center p-2 bg-white border rounded-md cursor-pointer hover:bg-gray-200">
          {/* Icon thư mục */}
          <FaFolder className="text-blue-300 mr-3" size={30} />
          {/* Cụm chứa text và ngày tháng */}
          <div className="flex-1">
            <span className="block text-black font-medium">Tuyển Dụng Senior Reactjs</span>
            <p className="text-sm text-gray-500">04/10/2024</p>
          </div>
          {/* Icon 3 chấm */}
          <MdMoreVert className="text-gray-500 cursor-pointer" size={24} />
        </div>
        <div className="flex items-center p-2 bg-white border rounded-md cursor-pointer hover:bg-gray-200">
          <FaFolder className="text-blue-300 mr-3" size={30} />
          <div className="flex-1">
            <span className="block text-black font-medium">Tuyển Dụng Nodejs</span>
            <p className="text-sm text-gray-500">04/10/2024</p>
          </div>
          <MdMoreVert className="text-gray-500 cursor-pointer" size={24} />
        </div>
        <div className="flex items-center p-2 bg-white border rounded-md cursor-pointer hover:bg-gray-200">
          <FaFolder className="text-blue-300 mr-3" size={30} />
          <div className="flex-1">
            <span className="block text-black font-medium">Tuyển Dụng Dev Java</span>
            <p className="text-sm text-gray-500">04/10/2024</p>
          </div>
          <MdMoreVert className="text-gray-500 cursor-pointer" size={24} />
        </div>
        <div className="flex items-center p-2 bg-white border rounded-md cursor-pointer hover:bg-gray-200">
          <FaFolder className="text-blue-300 mr-3" size={30} />
          <div className="flex-1">
            <span className="block text-black font-medium">Tuyển Dụng Senior Reactjs</span>
            <p className="text-sm text-gray-500">04/10/2024</p>
          </div>
          <MdMoreVert className="text-gray-500 cursor-pointer" size={24} />
        </div>
      </div>
    </div>
  );
};

export default FolderList;
