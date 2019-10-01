import React from 'react';
// import logo from './logo.svg';
// import './App.css';
// import {CSVLink, CSVDownload} from 'react-csv';
import Axios from 'axios';

function App() {
  function getFile(){
    const axiosInstance = Axios.create({
      baseURL: 'https://www.data.go.kr/',
      withCredentials: true,
    });
    const url = '/dataset/fileDownload.do?atchFileId=FILE_000000001555802&fileDetailSn=1';
    axiosInstance({
      method: 'get',
      url
    }).then(response => {
      console.log(response);
    })
    // Axios({
    //   method: 'get',
    //   url: 'https://www.data.go.kr/dataset/fileDownload.do?atchFileId=FILE_000000001555802&fileDetailSn=1',
    //   // url: 'https://www.data.go.kr/dataset/fileDownload.do?atchFileId=FILE_000000001555802&fileDetailSn=1&publicDataDetailPk=uddi:01beb797-fb7b-4318-afac-c7ddd9b0cd4b_201908291321',
    //   // headers: {
    //   //   'Access-Control-Allow-Origin': '//localhost:3000',
    //   //   'Access-Control-Allow-Methods': 'POST, PUT, GET, DELETE',
    //   //   'Access-Control-Allow-Headers': 'X-Requested-With, Content-Type',
    //   //   'Access-Control-Allow-Credentials': true
    //   // },
    //   withCredentials: true,
    //   // responseType: 'document',
    //   // proxy: {
    //   //   host: 'www.data.go.kr',
    //   //   // port: 9000,
    //   //   // auth: {
    //   //   //   username: 'mikeymike',
    //   //   //   password: 'rapunz3l'
    //   //   // }
    //   // },
    // }).then(function(response){
    //   console.log(response);
    // });
  }


  return (
    <div>
      <button onClick={()=>getFile()}>call</button>
    </div>
  );
}

export default App;
