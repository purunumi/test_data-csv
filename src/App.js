import React from 'react';
// import logo from './logo.svg';
// import './App.css';
// import {CSVLink, CSVDownload} from 'react-csv';
import csv from 'csv';
import Axios from 'axios';
import iconv from 'iconv-lite';
// import * as iconv from 'iconv';
import CSVReader from 'react-csv-reader';

function App() {
  function getFile(){
    // const axiosInstance = Axios.create({
    //   // baseURL: 'https://www.data.go.kr/',
    //   withCredentials: true,
    //   // responseType: 'document',
    //   responseEncoding: 'iso-8859-1',
    //   // headers: {
    //   //   // 'Access-Control-Allow-Origin': '//localhost:3000',
    //   //   // 'Access-Control-Allow-Methods': 'POST, PUT, GET, DELETE',
    //   //   // 'Access-Control-Allow-Headers': 'X-Requested-With, Content-Type',
    //   //   // 'Access-Control-Allow-Credentials': true
    //   //   "content-type": "text/csv"
    //   // },
    // });
    // const url = '/dataset/fileDownload.do?atchFileId=FILE_000000001555802&fileDetailSn=1&publicDataDetailPk=uddi:01beb797-fb7b-4318-afac-c7ddd9b0cd4b_201908291321';
    // axiosInstance({
    //   method: 'get',
    //   url
    // }).then(response => {
    //   // console.log(response);
    //   // const reader = new FileReader();
    //   const data = response.data;

    //   // console.log(data);
    //   // csv.parse(data, (err, data) => {
    //   //   console.log(data);
    //   // });

    //   // var input = fs.readFileSync('test-csv.csv', {encoding: 'binary'});
    //   // var output = iconv.decode(input, 'ISO-8859-1');
    //   // fs.writeFileSync('test.csv', output, 'utf8', function(err){
    //   //   console.log('finished');
    //   // })


    //   document.querySelector('#doc').innerHTML = data;
    // })
    // fs.readFile('test-csv.csv', {encoding: 'binary'}, function(input){
    //   const output = iconv.decode(input, 'ISO-8859-1');
    //   fs.writeFile('test.csv', output, 'utf8', function(err){
    //     console.log('finished');
    //   })
    // })
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
    //   // withCredentials: true,
    //   responseType: 'document',
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

    // console.log(toUTF8(body));
  }

  function toUTF8(body) {
    // convert from iso-8859-1 to utf-8
    // var ic = new iconv.Iconv('iso-8859-1', 'utf-8');
    // var str = iconv.decode(Buffer.from(body), 'iso-8859-1');

    // var buf = ic.convert(body);
    // var buf = iconv.encode(str, 'utf-8');

    // return buf.toString('utf-8');
    return body;
  }

  return (
    <div>
      <button onClick={()=>getFile()}>call</button>
      <div id="doc"></div>
      <input type="file"
        onChange={(e)=>{
          // const formData = new FormData();
          // formData.append();
          console.log(e.target.files[0]);
          var reader = new FileReader();
          reader.onload = function(e){
            console.log(e.target.result);
          };
          var result = file.result;
          console.log(result);
        }}
      />
      {/* <CSVReader
        // cssClass="csv-reader-input"
        // label="Select CSV with secret Death Star statistics"
        onFileLoaded={(data)=>{
          console.log(toUTF8(data));
        }}
        // onError={this.handleDarkSideForce}
        inputId="file"
        inputStyle={{color: 'red'}}
        fileEncoding="ISO-8859-1"
      /> */}
    </div>
  );
}

export default App;
