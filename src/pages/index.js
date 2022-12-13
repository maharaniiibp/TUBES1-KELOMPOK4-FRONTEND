import React from 'react'
import '../assets/css/style.css'

function index() {
    return (
        <div >
            {/* Navbar */}
            <div className="nav">
                <input type="checkbox" id="nav-check" />
                <div className="nav-header">
                    <div className="nav-title">
                        -TEF4-
                    </div>
                </div>
                <div className="nav-btn">
                    <label htmlFor="nav-check">
                        <span />
                        <span />
                        <span />
                    </label>
                </div>
                <div className="nav-links">
                    <a href="#sec_home"> Home</a>
                    <a href="#sec_video"> Video</a>
                    <a href="#sec_profile"> Profile</a>
                    <a href="calculator"> Calculator</a>

                </div>
            </div>
            {/* end of navbar */}
            {/* bagian header */}
            <section id="sec_home">
                <div id="header">
                    <div id="title">
                        <h2>TEFA</h2>
                        <h1>-GROUP 4-</h1>
                        <p>
                            Kami merupakan siswa SMK TELKOM MALANG dari Jurusan RPL atau biasa disebut Rekayasa Perangkat Lunak. Kami berasal dari Kelas TEFA SMK TELKOM MALANG spesialisasi FRONTEND. Kami dari Kelompok 4 membuat biodata diri agar teman-teman tahu tentang biodata kelompok kami. Kelompok kami beranggotakan Aufa, Andini, Maharani, dan Maskha.
                            <br />
                            Agar lebih tahu tentang kelompok kami simak videonya.
                            (enjoy the video group profil)
                        </p>
                        <button>
                            <a href="#sec_profile">-View Member-</a>
                        </button>
                    </div>
                    <br />
                </div>
            </section>
            {/* Video */}
            <section id="sec_video">
                <div className="video_fix">
                    <video controls>
                        <source src="/assets/Tefa4.mp4" type="video/mp4" />
                    </video>
                </div>
            </section>
            {/* End of video */}
            <section id="sec_profile">
                <div className="flex-container space-between">
                    <div className="col card">
                        <div className="img-placeholder">
                            <img src="/Assets/Maska.jpg" />
                        </div>
                        <div>
                            <h3>Maskharor Amnan Nidhom</h3>
                            <p><i className="fa-solid fa-user" /> XI RPL 2</p>
                            <p><i className="fa-solid fa-paper-plane" /> <a href=" https://www.instagram.com/maska16_/">Sosmed: @maska16_ </a></p>
                            <p><i className="fa-solid fa-location-dot" />Alamat: Malang</p>
                            <p><i className="fa-solid fa-location-dot" />Tanggal Lahir: 16 Desember 2005</p>
                            <p><i className="fa-solid fa-location-dot" />Hobi: Basket</p>

                            <button>
                                <a href="detail_maska">Detail</a>
                            </button>
                        </div>
                    </div>
                    <div className="col card">
                        <div className="img-placeholder">
                            <img src="/Assets/Aufa.jpg" />
                        </div>
                        <div>
                            <h3>Moh. Aufa Azka Fabian</h3>
                            <p><i className="fa-solid fa-user" /> XI RPL 3</p>
                            <p><i className="fa-solid fa-paper-plane" /> <a href="https://www.instagram.com/fabian_azka_/">Sosmed: @fabian_azka_</a></p>
                            <p><i className="fa-solid fa-location-dot" />Alamat: Banyuwangi</p>
                            <p><i className="fa-solid fa-location-dot" />Tanggal Lahir: 05 Mei 2005</p>
                            <p><i className="fa-solid fa-location-dot" />Hobi: Berenang</p>
                            <button>
                                <a href="detail_aufa">Detail</a>
                            </button>
                        </div>
                    </div>
                    <div className="col card">
                        <div className="img-placeholder">
                            <img src="/Assets/Andini.JPG" />
                        </div>
                        <div>
                            <h3>Masyita Andini Larasati</h3>
                            <p><i className="fa-solid fa-user" /> XI RPL 1</p>
                            <p><i className="fa-solid fa-paper-plane" /> <a href="https://www.instagram.com/masyitaandinii/">Sosmed: @masyitaandinii</a></p>
                            <p><i className="fa-solid fa-location-dot" />Alamat: Malang</p>
                            <p><i className="fa-solid fa-location-dot" />Tanggal Lahir: 21 September 2005</p>
                            <p><i className="fa-solid fa-location-dot" />Hobi: Voli</p>
                            <button>
                                <a href="detail_andini">Detail</a>
                            </button>
                        </div>
                    </div>
                    <div className="col card">
                        <div className="img-placeholder">
                            <img src="/Assets/Rani.JPG" />
                        </div>
                        <div>
                            <h3>Maharani B'anica Putri</h3>
                            <p><i className="fa-solid fa-user" /> XI RPL 1</p>
                            <p><i className="fa-solid fa-paper-plane" /> <a href="https://www.instagram.com/maharaniiibp/">Sosmed: @maharaniiibp</a></p>
                            <p><i className="fa-solid fa-location-dot" />Alamat: Tulungangung</p>
                            <p><i className="fa-solid fa-location-dot" />Tanggal Lahir: 01 Juni 2005</p>
                            <p><i className="fa-solid fa-location-dot" />Hobi: Menonton Film</p>
                            <button>
                                <a href="detail_rani">Detail</a>
                            </button>
                        </div>
                    </div>
                </div>
            </section>
            {/* footer */}
            <footer className="footer">
                <div className="footer-left col-md-4 col-sm-6">
                    <p className="about">
                        <span> About our group</span> Website ini merupakan website yang dibuat oleh kelompok 4 tefa memiliki 4 anggota saling bekerjasama untuk mengerjakan web ini
                    </p>
                    <div className="icons">
                        <a href="https://github.com/maskharor/TEFA_FE_Project_1_biodata_kelompok_4" target="_blank" rel="noopener noreferrer" className="flex h-9 w-9 items-center justify-center rounded-full border-2 border-slate-300 text-slate-300 hover:border-primary-500 hover:bg-primary-500 hover:text-white"><svg role="img" width={20} fill="#FFFFFF" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="fill-current"><title>GitHub</title><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" /></svg><i className="fa fa-github" /></a>
                        <a href="https://www.instagram.com/maska16_/" title="Instagram Maska" target="_blank" rel="noopener noreferrer" className="mr-3 flex h-9 w-9 items-center justify-center rounded-full border-2 border-slate-300 text-slate-300 hover:border-primary-500 hover:bg-primary-500 hover:text-white"><svg role="img" width={20} fill="#FFFFFF" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="fill-current"><title>Instagram</title><path d="M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384.666-.667 1.079-1.335 1.384-2.126.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913-.306-.789-.718-1.459-1.384-2.126C21.319 1.347 20.651.935 19.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227-.224.562-.479.96-.899 1.382-.419.419-.824.679-1.38.896-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421-.569-.224-.96-.479-1.379-.899-.421-.419-.69-.824-.9-1.38-.165-.42-.359-1.065-.42-2.235-.045-1.26-.061-1.649-.061-4.844 0-3.196.016-3.586.061-4.861.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.381.419-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06 4.859-.06l.045.03zm0 3.678c-3.405 0-6.162 2.76-6.162 6.162 0 3.405 2.76 6.162 6.162 6.162 3.405 0 6.162-2.76 6.162-6.162 0-3.405-2.76-6.162-6.162-6.162zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm7.846-10.405c0 .795-.646 1.44-1.44 1.44-.795 0-1.44-.646-1.44-1.44 0-.794.646-1.439 1.44-1.439.793-.001 1.44.645 1.44 1.439z" /></svg><i className="fa fa-instagram" /></a>
                        <a href="https://www.instagram.com/maharaniiibp/" title="Instagram Rani" target="_blank" rel="noopener noreferrer" className="mr-3 flex h-9 w-9 items-center justify-center rounded-full border-2 border-slate-300 text-slate-300 hover:border-primary-500 hover:bg-primary-500 hover:text-white"><svg role="img" width={20} fill="#FFFFFF" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="fill-current"><title>Instagram</title><path d="M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384.666-.667 1.079-1.335 1.384-2.126.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913-.306-.789-.718-1.459-1.384-2.126C21.319 1.347 20.651.935 19.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227-.224.562-.479.96-.899 1.382-.419.419-.824.679-1.38.896-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421-.569-.224-.96-.479-1.379-.899-.421-.419-.69-.824-.9-1.38-.165-.42-.359-1.065-.42-2.235-.045-1.26-.061-1.649-.061-4.844 0-3.196.016-3.586.061-4.861.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.381.419-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06 4.859-.06l.045.03zm0 3.678c-3.405 0-6.162 2.76-6.162 6.162 0 3.405 2.76 6.162 6.162 6.162 3.405 0 6.162-2.76 6.162-6.162 0-3.405-2.76-6.162-6.162-6.162zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm7.846-10.405c0 .795-.646 1.44-1.44 1.44-.795 0-1.44-.646-1.44-1.44 0-.794.646-1.439 1.44-1.439.793-.001 1.44.645 1.44 1.439z" /></svg><i className="fa fa-instagram" /></a>
                        <a href="https://www.instagram.com/fabian_azka_/" title="Instagram Aufa" target="_blank" rel="noopener noreferrer" className="mr-3 flex h-9 w-9 items-center justify-center rounded-full border-2 border-slate-300 text-slate-300 hover:border-primary-500 hover:bg-primary-500 hover:text-white"><svg role="img" width={20} fill="#FFFFFF" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="fill-current"><title>Instagram</title><path d="M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384.666-.667 1.079-1.335 1.384-2.126.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913-.306-.789-.718-1.459-1.384-2.126C21.319 1.347 20.651.935 19.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227-.224.562-.479.96-.899 1.382-.419.419-.824.679-1.38.896-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421-.569-.224-.96-.479-1.379-.899-.421-.419-.69-.824-.9-1.38-.165-.42-.359-1.065-.42-2.235-.045-1.26-.061-1.649-.061-4.844 0-3.196.016-3.586.061-4.861.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.381.419-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06 4.859-.06l.045.03zm0 3.678c-3.405 0-6.162 2.76-6.162 6.162 0 3.405 2.76 6.162 6.162 6.162 3.405 0 6.162-2.76 6.162-6.162 0-3.405-2.76-6.162-6.162-6.162zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm7.846-10.405c0 .795-.646 1.44-1.44 1.44-.795 0-1.44-.646-1.44-1.44 0-.794.646-1.439 1.44-1.439.793-.001 1.44.645 1.44 1.439z" /></svg><i className="fa fa-instagram" /></a>
                        <a href="https://www.instagram.com/masyitaandinii/" title="Instagram Andini" target="_blank" rel="noopener noreferrer" className="mr-3 flex h-9 w-9 items-center justify-center rounded-full border-2 border-slate-300 text-slate-300 hover:border-primary-500 hover:bg-primary-500 hover:text-white"><svg role="img" width={20} fill="#FFFFFF" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="fill-current"><title>Instagram</title><path d="M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384.666-.667 1.079-1.335 1.384-2.126.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913-.306-.789-.718-1.459-1.384-2.126C21.319 1.347 20.651.935 19.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227-.224.562-.479.96-.899 1.382-.419.419-.824.679-1.38.896-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421-.569-.224-.96-.479-1.379-.899-.421-.419-.69-.824-.9-1.38-.165-.42-.359-1.065-.42-2.235-.045-1.26-.061-1.649-.061-4.844 0-3.196.016-3.586.061-4.861.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.381.419-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06 4.859-.06l.045.03zm0 3.678c-3.405 0-6.162 2.76-6.162 6.162 0 3.405 2.76 6.162 6.162 6.162 3.405 0 6.162-2.76 6.162-6.162 0-3.405-2.76-6.162-6.162-6.162zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm7.846-10.405c0 .795-.646 1.44-1.44 1.44-.795 0-1.44-.646-1.44-1.44 0-.794.646-1.439 1.44-1.439.793-.001 1.44.645 1.44 1.439z" /></svg><i className="fa fa-instagram" /></a>
                    </div>
                </div>
                <div className="footer-center col-md-4 col-sm-6">
                    <div>
                        <i className="fa fa-map-marker" />
                        <p><span> SMK TELKOM MALANG</span></p>
                    </div>
                    <div>
                        <i className="fa fa-phone" />
                        <p> (+00) 0000 000 000</p>
                    </div>
                    <div>
                        <i className="fa fa-envelope" />
                        <p><a href="#"> tefagroup04@gmal.com</a></p>
                    </div>
                </div>
                <div className="footer-right col-md-4 col-sm-6">
                    <h2> TEFA<span> -GROUP 4-</span></h2>
                    <p className="menu">
                        <a href="#sec_home"> Home</a> |
                        <a href="#sec_video"> Video</a> |
                        <a href="#sec_profile"> Profile</a>


                    </p>
                    <p className="name"> TEFA -GROUP 4- © 2022</p>
                </div>
            </footer>
            {/* End of footer */}
        </div>

    )
}

export default index