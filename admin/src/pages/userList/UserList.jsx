import { userRows } from '../../DummyData'
import {DeleteOutline} from '@mui/icons-material'
import { DataGrid } from '@mui/x-data-grid';
import './UserList.css'
import { Link } from 'react-router-dom';
import {useState} from 'react'


const UserList = () => {

  const [data,setData] = useState(userRows)

  const handleDelete = (id) => {
    setData(data.filter((item)=> item.id !== id))
  }

  const columns=[
    { field: 'id', headerName: 'ID', width: 70 },
    { field: 'username', headerName: 'Username', width: 130 ,renderCell:(params)=>{
      return (
        <div className='userList'>
          <img className='userListImg' src={params.row.avatar} alt=''></img>
          {params.row.username}
        </div>
      )      
    } 
  },
    {
      field: 'email',
      headerName: 'Email',
      width: 150,
    },
    {
      field: 'status',
      headerName: 'Status',
    },
    {
      field:'transaction',
      headerName:'Transaction',
    },
    {
      field:'action',
      headerName:'Action',
      renderCell:(params)=>{
        return(
          <>
          <Link to={'/user/'+params.row.id}>
          <button className='userListEdit'>Edit</button>
          </Link>
          <DeleteOutline className='userListDelete' onClick={()=>handleDelete(params.row.id)}/>
          </>
        )
      }
    }
  ];

  return (
    <div className='userList' style={{height:'100%', width:'100%' }}>
      <DataGrid
        rows={data}
        columns={columns}
        disableRowSelectionOnClick
        pagination={5}
        checkboxSelection
      />
    </div>
  )
}

export default UserList