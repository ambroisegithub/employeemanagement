import "./Tabledash.css"

const Tabledash = () => {
  return (
    <>
      <body>
  <div className="containerTable">
    <div className="tbl_container">
      <h1>Responsive table</h1>
      
      <table className="tbl">
        <thead>
          <tr>
            <th>User Id</th>
            <th>User Name</th>
            <th>Email</th>
            <th>Status</th>
            <th colSpan="2" data-table="Action">Action</th>
          </tr>
        </thead>
        
        <tbody>
          <tr>
            <td data-table="User Id">001</td>
            <td data-table="User Name">John doe</td>
            <td data-table="Email">johndoe@gmail.com</td>
            <td data-table="Status">Male</td>
            <td>
              <button className="btn_edit" data-table="Edit">Edit</button>
              <button className="btn_trash" data-table="Delete">Delete</button>
            </td>
          </tr>
          
          <tr>
             <td data-table="User Id">001</td>
            <td data-table="User Name">John doe</td>
            <td data-table="Email">johndoe@gmail.com</td>
            <td data-table="Status">Male</td>
            <td>
              <button className="btn_edit" data-table="Edit">Edit</button>
              <button className="btn_trash" data-table="Delete">Delete</button>
            </td>
          </tr>
          
          <tr>
            <td data-table="User Id">001</td>
            <td data-table="User Name">John doe</td>
            <td data-table="Email">johndoe@gmail.com</td>
            <td data-table="Status">Male</td>
            <td>
              <button className="btn_edit" data-table="Edit">Edit</button>
              <button className="btn_trash" data-table="Delete">Delete</button>
            </td>
          </tr>
          
          <tr>
            <td data-table="User Id">001</td>
            <td data-table="User Name">John doe</td>
            <td data-table="Email">johndoe@gmail.com</td>
            <td data-table="Status">Male</td>
            <td>
              <button className="btn_edit" data-table="Edit">Edit</button>
              <button className="btn_trash" data-table="Delete">Delete</button>
            </td>
          </tr>
          
          <tr>
            <td data-table="User Id">001</td>
            <td data-table="User Name">John doe</td>
            <td data-table="Email">johndoe@gmail.com</td>
            <td data-table="Status">Male</td>
            <td>
              <button className="btn_edit" data-table="Edit">Edit</button>
              <button className="btn_trash" data-table="Delete">Delete</button>
            </td>
          </tr>
          
          <tr>
            <td data-table="User Id">001</td>
            <td data-table="User Name">John doe</td>
            <td data-table="Email">johndoe@gmail.com</td>
            <td data-table="Status">Male</td>
            <td>
              <button className="btn_edit" data-table="Edit">Edit</button>
              <button className="btn_trash" data-table="Delete">Delete</button>
            </td> 
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</body>


    </>
  )
}

export default Tabledash
