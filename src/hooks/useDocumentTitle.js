import React, { useEffect, useState } from "react";

const useDocumentTitle = (newTitle = "Trang chủ") => {
  const [title, setTitle] = useState(newTitle);
  useEffect(() => {
    document.title = title;
  }, [title]);

  return [title, setTitle];
};

export default useDocumentTitle;
