import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import { appRoutes } from '../App';

function Register() {

  const [prep, setPrep] = useState(1)

  return (
    <section className="container mb-7">
        {
          prep === 1 ? <Preparation/>: prep === 2 ? <Questions/>: <JoinUs/>
        }
      <PrepButtonComponent prep={prep} setPrep={setPrep}/>
    </section> 
  )
}

const Preparation = () => {
  return (
    <div className="row mb-3 mx-2">
      <div className="col-lg-6" data-aos="fade-top">
        <img src="img/preparation.jpg" style={{width: "100%"}} alt=""/>
      </div>
      <div className="col-lg-6">
        <h2 className="me-auto">Preparation</h2>
        <h4>Apa saja yang perlu di siapkan?</h4>
        <ol>
          <li>KTP</li>
          <li>NPWP</li>
          <li>Rekening bank</li>
        </ol>
      </div>
    </div>
  )
}

const Questions = () => {
  return (
    <div className="row mb-3 mx-2">
      <div className="col-lg-6" data-aos="fade-top">
        <img src="img/question.jpg" style={{width: "100%"}} alt=""/>
      </div>
      <div className="col-lg-6">
        <h2 className="me-auto">Apakah kamu ada pertanyaan?</h2>
        
      </div>
    </div>
  )
}

const JoinUs = () => {
  return (
    <div className="row mb-3 mx-2">
      <div className="col-lg-6" data-aos="fade-top">
        <img src="img/pendaftaran.jpg" style={{width: "100%"}} alt=""/>
      </div>
      <div className="col-lg-6">
        <h2 className="me-auto">Join Us</h2>
        <div className="row">
          <form className="shadow rounded py-3">
            <div className="col-md-6">
              <div className="form-check">
                <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" required/>
                <label className="form-check-label text-uppercase" htmlFor="flexRadioDefault1">
                  bca online
                </label>
              </div>
              <div className="mb-3">
                <label for="exampleInputEmail1" className="form-label">Email address</label>
                <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
              </div>
              <div classNameName="mb-3">
                <label for="exampleInputEmail1" className="form-label">Email address</label>
                <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
              </div>
              <div classNameName="mb-3">
                <label for="exampleInputEmail1" className="form-label">Email address</label>
                <div className="input-group mb-3">
                  <span className="input-group-text" id="basic-addon1">+62</span>
                  <input type="text" className="form-control" placeholder="Username" aria-label="Username" aria-describedby="basic-addon1"/>
                </div>
              </div>
              <div classNameName="mb-3">
                <label for="exampleInputEmail1" className="form-label">Email address</label>
                <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
              </div>
            </div>
          </form>
          <div className="col-md-6">
          
          </div>
        </div>
      </div>
    </div>
  )
}

const PrepButtonComponent = ({ prep, setPrep }) => {

  function previewPrep(event) {
    setPrep(event)
  }

  function nextPrep(event) {
    setPrep(event)
  }
  return (
    <div className="row justify-content-center">
      <div className="col-md-6 text-center">
        {
          prep < 2 ? <Link to={appRoutes.HOME} type="button" className="btn btn-outline-secondary">Halaman Login</Link> : 
          <button type="button" onClick={() => previewPrep(prep - 1)} className="btn btn-outline-secondary">Kembali</button>
        }
        
      </div>
      <div className="col-md-6 text-center">
        {
          prep < 3 ? <button onClick={() => nextPrep(prep + 1)} type="button" className="btn btn-primary">Selanjutnya</button>: 
          <button type="button" className="btn btn-primary">Daftar</button>
        }
      </div>
    </div>
  )
}

export default Register;