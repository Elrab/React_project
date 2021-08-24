import React from "react";
import Table from "react-bootstrap/Table";

const Photos = ({ photos, loading }) => {
  if (loading) {
    return <h2>Loading ...</h2>;
  }

  return (
    <Table responsive>
      <thead>
        <tr>
          <th>#</th>
          <th>Title</th>
          <th>URL</th>
        </tr>
      </thead>
      {photos.map((photo) => (
        <tbody key={photo.id}>
          <tr>
            <td>{photo.id}</td>
            <td>{photo.title}</td>
            <td>
              <a href={photo.url}>{photo.url}</a>
            </td>
          </tr>
        </tbody>
      ))}
    </Table>

    //CSS
    // <ul className='list-group mb-4'>
    //   {photos.map((photo) => (
    //     <li key={photo.id} className='search'>
    //       <span className='search-id'>{photo.id}</span>
    //       <span className='search-title'>{photo.title}</span>
    //       <a href={photo.url}>
    //         <span className='search-url'>{photo.url}</span>
    //       </a>
    //     </li>
    //   ))}
    // </ul>
  );
};
export default Photos;
