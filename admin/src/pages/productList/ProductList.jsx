import { DataGrid } from '@mui/x-data-grid'
import './ProductList.css'
import { useState } from 'react'
import { productRows } from '../../DummyData'
import {DeleteOutline}  from '@mui/icons-material'
import {Link} from 'react-router-dom'

const ProductList = () => {
    const [data,setData] = useState(productRows)

    const handleDelete =(id)=>{
        setData(data.filter((item)=> item.id !== id))
    }


    const columns = [
        {
            field:'id',
            headerName:'ID',
            width:90
        },
        {
            field:'product',
            headerName:'Product',
            width:200,
            renderCell : (params)=>{
                return (
                    <div className='productListItem'>
                        <img src='https://images.pexels.com/photos/7156886/pexels-photo-7156886.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500' alt='' className='productListImg'>
                        </img>
                        {params.row.name}
                    </div>
                )
            }

        },
        {
            field:'stock',
            headerName:'Stock',
            width:100
        },
        {
            field:'status',
            headerName:'Status',
            width:100
        },
        {
            field:'price',
            headerName:'Price',
            width:100
        },
        {
            field:'action',
            headerName:'Action',
            width:100,
            renderCell:(params)=>{
                return(
                    <>
                    <Link to={'/product/'+params.row.id}>
                    <button className='userListEdit'>Edit</button>
                    </Link>
                    <DeleteOutline className='userListDelete' onClick={()=>handleDelete(params.row.id)}/>
                    </>
                  )
            }
        }
    ]

  return (
    <div className='productList'>
        <DataGrid rows={data} columns={columns} checkboxSelection disableRowSelectionOnClick />
    </div>
  )
}

export default ProductList