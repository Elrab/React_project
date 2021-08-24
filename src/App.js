import "./App.css";
import React, { useState, useEffect } from "react";
import Photos from "./utils/Photos";
import Pagination from "./utils/Pagination";
import axios from "axios";

function App() {
  const [photos, setPhotos] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(
    localStorage.getItem("currentPage")
      ? localStorage.getItem("currentPage")
      : 1
  );
  const [photosPerPage] = useState(150);

  useEffect(() => {
    const fetchPosts = async () => {
      setLoading(true);
      try {
        const res = await axios.get(
          `https://jsonplaceholder.typicode.com/photos` //?_start=${currentPhotos}&_limit=${photosPerPage} ?_start=&_limit=${photosPerPage}
        );
        setPhotos(res.data);
        setLoading(false);
      } catch (err) {
        // IN CASE OF 404 ERROR
        alert(err);
      }
    };

    fetchPosts();
    localStorage.setItem("currentPage", currentPage);
  }, [currentPage]); // RERUN ON PAGE CHANGE

  // GET CURRENT POSTS
  const indexOfLastPhoto = currentPage * photosPerPage;
  const indexOfFirstPhoto = indexOfLastPhoto - photosPerPage;
  const currentPhotos = photos.slice(indexOfFirstPhoto, indexOfLastPhoto);

  // CHANGE PAGE
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className='container mt-5'>
      <h1 className='text-primary'>PICTURES</h1>
      <Photos photos={currentPhotos} loading={loading} />
      <Pagination
        currentPage={currentPage}
        photosPerPage={photosPerPage}
        totalPhotos={photos.length}
        paginate={paginate}
      />
    </div>
  );
}

export default App;
