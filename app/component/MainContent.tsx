const MainContent = () => {
    return (
      <div className="flex-1 flex justify-center items-center bg-blue-50 h-screen"> {/* Hạn chế chiều cao */}
        <div className="text-center">
          <img
            src="empty.png" // Đường dẫn đến hình ảnh của bạn
            alt="Illustration"
            width={200}
            height={200}
          />
          <p className="mt-4 text-lg">Bạn hãy chọn 1 thư mục nào đó!</p>
        </div>
      </div>
    );
  };
  
  export default MainContent;
  