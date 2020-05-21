import React, { Component } from 'react'
import MainLayout from '../layouts/main'

class JoinedCourse extends Component{
  render(){
    return (
      <div className="h100vh align-item-center text-center d-flex justify-content-center">
        <div className="col-md-4">
          <img src="https://class.buildwithangga.com/images/ill_join_kelas.svg" width="200px" alt="Berhasil gabung kelas"/>
          <h1>Sukses Bergabung</h1>
          <p>Pilihan yang bagus untuk belajar hal baru demi mengejar tujuanmu</p>
          <div className="mt-3">
            <button className="btn btn-outline-secondary mr-3">Lihat Kelas Saya</button>
            <button className="btn btn-primary">Mulai Belajar</button>
          </div>
        </div>
      </div>
    );
  }
}

export default MainLayout(JoinedCourse)