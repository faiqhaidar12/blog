import { Table } from "antd";
import axios from "axios";
import React, { useEffect, useState } from "react";

const Pagination = () => {
  const [dataSource, setDataSource] = useState([]);
  const [totalPages, setTotalPages] = useState(1);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetchRecords(1);
  }, []);
  const columns = [
    {
      title: "ID",
      dataIndex: "_id",
    },
    {
      title: "Name",
      dataIndex: "name",
    },
    {
      title: "Trips",
      dataIndex: "trips",
    },

    // render:{
    //   title: "Name",
    //   dataIndex: "name",
    // },
    // {
    //   title: "Id",
    //   dataIndex: "id",
    // },
    // {
    //   title: "Country",
    //   dataIndex: "country",
    // },
    // {
    //   title: "Logo",
    //   dataIndex: "logo",
    // },
    // {
    //   title: "Slogan",
    //   dataIndex: "slogan",
    // },
    // {
    //   title: "Head_Quaters",
    //   dataIndex: "head_quaters",
    // },
    // {
    //   title: "Website",
    //   dataIndex: "website",
    // },
    // {
    //   title: "Established",
    //   dataIndex: "established",
    // },
  ];

  const fetchRecords = (page) => {
    setLoading(true);
    axios
      .get(`https://api.instantwebtools.net/v1/passenger?page=${page}&size=10`)
      .then((res) => {
        setDataSource(res.data.data);
        setTotalPages(res.data.totalPages);
        setLoading(false);
        // console.log(res.data.data[""].airline);
      });
  };

  return (
    <div className="flex justify-content-center align-items-center mt-5 vh-100">
      <Table
        loading={loading}
        columns={columns}
        dataSource={dataSource}
        pagination={{
          pageSize: 10,
          total: totalPages,
          onChange: (page) => {
            fetchRecords(page);
          },
        }}
        className="container"
      ></Table>
    </div>
  );
};

export default Pagination;
