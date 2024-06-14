/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react'
import styles from './styles.module.scss'
import CustomTableHeader from './CustomTableHeader'
import CustomBodyTable from './CustomBodyTable'

const CustomTable = <T extends Record<string, unknown>>(props: CustomTableProps<T>) => {

  const {data =[],columns} = props



    
  return (
    <table className={styles.tableBody}>
      <CustomTableHeader  columns={columns}/>
      <CustomBodyTable columns={columns} data={data || []}/>
    </table>
  )
}

export default CustomTable