import { FaFolder, FaSearch } from "react-icons/fa";

const Sidebar = () => {
    return (
        <div className="w-1/10 bg-gray-100 p-4 flex flex-col space-y-6 items-center">
            <img
                src="logo.png" // Đường dẫn đến hình ảnh của bạn
                alt="logom"
                width={60}
                height={60}
            />
            {/* Các Icon */}
            <button className="flex items-center justify-center w-10 h-10 bg-blue-100 text-blue-500 rounded-[15px] border border-blue-300 hover:bg-blue-200">
                <FaFolder size={20} className="text-blue-400 cursor-pointer hover:text-blue-500" />
            </button>
            
            <button className="flex items-center justify-center w-10 h-10 rounded-[15px] border border-blue-300 hover:bg-blue-200">
                <FaSearch size={20} className="text-blue-400 cursor-pointer hover:text-blue-500" />
            </button>
            {/* Bạn có thể thêm nhiều icon khác ở đây */}
        </div>
    );
};

export default Sidebar;
