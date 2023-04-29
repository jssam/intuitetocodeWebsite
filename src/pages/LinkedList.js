import { Table, Tag } from "antd";
import React, { useEffect, useState } from "react";
import {backend} from "../util/Api"

const LinkedList=()=>{
    const [pilotsData, setPilotsData] = useState([]);
    const fetch =async()=>{
        try{
            const result = await  backend.get('linkedList');
            console.log(result.data)
            if(Array.isArray(result.data)){
                setPilotsData(result.data);
            }
        }
        catch (err) {
            setPilotsData([]);
        }
    }
   useEffect( ()=>{
       fetch();
    },[])

    const columns = [
        {
            title: "s.no",
            dataIndex: "sno",
            key: "sno",
            width: 50,
        },
        ,
        {
            title: 'name',
            key: 'name',
            dataIndex: 'name',
            width: 150,
        },
        {
            title: 'Ques link',
            key: 'ques_link',
            dataIndex: 'ques_link',
            render: (value) => {
                return (
                    <a href={value} color={"black"} style={{color:"black"}}target="_blank">{value}</a>
                );
            }
            ,   width: 150,
        },
        {
            title: "video link",
            key: "video_link",
            dataIndex: "video_link",
            render: (value) => {
                return (
                    <a href={value} color={"black"} style={{color:"black"}}target="_blank">{value}</a>
                );
            },
            width: 250,
        },
        {
            title: "sol link",
            key: "sol_link",
            dataIndex: "sol_link",
            render: (value) => {
                return (
                    <a href={value} color={"black"} style={{color:"black"}}target="_blank">{value}</a>
                );
            },
            width: 250,
        }
    ]
return <>

<Table
            columns={columns}
            dataSource={pilotsData}
            scroll={{ x: "max-content", y: "80vh" }}
            pagination={{
                pageSizeOptions: ['10', '20', '30', '40']
            }}
        />
</>
}
export default LinkedList;