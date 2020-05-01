import React, { Component } from 'react';
import MainLayout from '../../layouts/main';

class HtmlCSS extends Component{
  render(){
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-12 course-title">
            <h1>HTML & CSS</h1>
            <h2>Bahasa digunakan untuk membuat dan mendesain tampilan setiap situs web.</h2>
          </div>
          <div className="col-md-8">
            <div className="card">
              <div className="vplayer">
                <div className="player">
                  <div className="player-control">
                    
                  </div>
                  <div className="player-wrapper">
                    <iframe className="video" title="video preview tutorial belajar html dan css" src="https://www.youtube.com/embed/ThFQgsA20Zg" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card c_compact">
              <div class="card-body">
                <h4 class="course-list-title">Materi Preview</h4>
                <ul class="nav flex-column nav-pills nav-list course-topics">
                  <li class="topic active">
                    <a href="#mEMFP1Yoblg" class="topic-link">UIUX Mobile</a>
                  </li>
                  <li class="topic">
                    <a href="#Fwcw03fA2Eg" class="topic-link">Kunci Utama</a>
                  </li>
                  <li class="topic">
                    <a href="#qt9SX19HgbA" class="topic-link">Part 1</a>
                  </li>
                  <li class="topic">
                    <a href="#E9fDpP7j7nU" class="topic-link">On-Boarding</a>
                  </li>
                  <li class="topic">
                    <a href="#E2425hlZyJc" class="topic-link">Home Page</a>
                  </li>
                  <li class="topic">
                    <a href="#-WI3GwU5Pwc" class="topic-link">Upload Photo</a>
                  </li>
                  <li class="topic">
                    {/* eslint-disable-next-line*/}
                    <a href="#" class="topic-link disabled">113 Video Lainnya <i class="material-icons">lock</i></a>
                  </li>
                </ul>
              </div>
              <div class="card-footer">
                <a href="#pricing" class="btn btn-primary cta-enroll">IKUTI KELAS</a>
              </div>
            </div>
          </div>

          <div>
            <div className="col-md-8 course-details">
              <h2 class="course-list-title">Tentang Kelas</h2>
              <p>Kelas ini akan membawa kalian untuk mempelajari materi terkait UX design dan juga Android development dalam membangun suatu aplikasi Android pemesenan tiket nonton secara online (seperti aplikasi TIX ID atau CGV).</p>
              <p>Saat ini banyak sekali perusahaan IT yang membutuhkan seorang Android developer untuk membangun aplikasi mereka. Tapi bukan hanya itu saja, tanpa adanya UX designer maka aplikasi yang akan dibangun dikhawatirkan tidak memiliki design-experience yang baik.</p>
              <p>Kamu yang ingin memperdalam kedua bidang tersebut maka silahkan langsung bergabung dengan kelas Full-Stack Android Developer saat ini juga</p>
              <p>Kami tunggu ya</p>
            </div>
            <div className="col-md-4 course-detail-sidebar">
              <div class="course-tools">
                <h4 class="course-list-title">Tools</h4>

                <div class="item-kelas-tool mt-3">
                    <img src="https://www.buildwithangga.com/storage/assets/images/tools/logo_android_studio_buildwithangga.png" alt="Android Studio BuildWith Angga" />
                  <div class="description">
                    <p class="font-weight-medium">
                      Android Studio
                    </p>
                    <p class="font-weight-light link">
                      <a target="_blank" rel="noopener noreferrer" href="https://developer.android.com/studio">Download</a>
                    </p>
                  </div>
                </div>
                <div class="item-kelas-tool mt-3">
                  <img src="https://www.buildwithangga.com/storage/assets/images/tools/logo_adobe_xd_buildwithangga.png" alt="Adobe XD BuildWith Angga" />
                  <div class="description">
                    <p class="font-weight-medium">
                      Adobe XD
                    </p>
                    <p class="font-weight-light link">
                      <a target="_blank" rel="noopener noreferrer" href="https://www.adobe.com/sea/products/xd.html">Download</a>
                    </p>
                  </div>
                </div>
                <div class="item-kelas-tool mt-3">
                  <img src="https://www.buildwithangga.com/storage/assets/images/tools/logo_invisionapp.png" alt="InVision App BuildWith Angga" />
                  <div class="description">
                    <p class="font-weight-medium">
                      InVision App
                    </p>
                    <p class="font-weight-light link">
                      <a target="_blank" rel="noopener noreferrer" href="https://invisionapp.com">Download</a>
                    </p>
                  </div>
                </div>
                <div class="item-kelas-tool mt-3">
                  <img src="https://www.buildwithangga.com/storage/assets/images/tools/logo_maze.png" alt="Maze Design BuildWith Angga" />
                  <div class="description">
                    <p class="font-weight-medium">
                      Maze Design
                    </p>
                    <p class="font-weight-light link">
                      <a target="_blank" rel="noopener noreferrer" href="https://maze.design/">Download</a>
                    </p>
                </div>
                </div>
                <div class="item-kelas-tool mt-3">
                        <img src="https://www.buildwithangga.com/storage/assets/images/tools/logo_kotlin_android.png" alt="Kotlin BuildWith Angga" />
                        <div class="description">
                        <p class="font-weight-medium">
                            Kotlin
                        </p>
                        <p class="font-weight-light link">
                            <a target="_blank" rel="noopener noreferrer" href="https://kotlinlang.org/">Download</a>
                        </p>
                    </div>
                </div>
                
                <hr/>

                <div class="item-syarat">
                  <h5 class="requirements">Sistem Operasi</h5>
                  <p>Windows 10 / Sierra OS / Linux</p>
                  <h5 class="requirements">Processor</h5>
                  <p>Intel atau AMD</p>
                  <h5 class="requirements">RAM</h5>
                  <p>8 Gigabyte</p>
                  <h5 class="requirements">Storage Kosong</h5>
                  <p>25 Gigabyte</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default MainLayout(HtmlCSS);