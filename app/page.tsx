"use client";

import FolderList from "./component/FolderList";
import MainContent from "./component/MainContent";
import Sidebar from "./component/Sidebar";



export default function Home() {
  return (
    <div className="flex h-screen">
      {/* Sidebar với các icon */}
      <Sidebar />

      {/* Danh sách thư mục */}
      <FolderList />

      {/* Nội dung chính */}
      <MainContent />
    </div>
  );
}

