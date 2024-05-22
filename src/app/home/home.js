import React from "react";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import { appRoutes } from "../App";
import { useTranslation } from "react-i18next";

export default function Home() {
  const [t, i18n] = useTranslation('lang')
  return (
    <section className="page-home">
      {/* Hero start */}
      
      <div className="container">
        <div className="row align-items-center">
          <div className="col-md-8 my-2" data-aos="fade-right">
            <div className="content-swiper">
              <Swiper className="mySwiper card" loop={true} autoplay={{
                  delay: 3500,
                  disableOnInteraction: false,
                }} modules={[Autoplay]} >
                <SwiperSlide className="d-flex align-items-center justify-content-center">
                  <div className="col-12 ms-auto card card-background card-background-mask-info">
                    <img src="img/accountant-calculating-profit.jpg" style={{width: '100%'}} alt=""/>
                  </div>
                  <p className="text-swiper">{t('REGIS.slider1')}</p>
                </SwiperSlide>
                <SwiperSlide className="d-flex align-items-center justify-content-center">
                  <div className="col-12 ms-auto card card-background card-background-mask-info">
                    <img src="img/closeup-economist-using.jpg" style={{width: '100%'}} alt=""/>
                  </div>
                  <p className="text-swiper">{t('REGIS.slider2')}</p>
                </SwiperSlide>
                <SwiperSlide className="d-flex align-items-center justify-content-center">
                  <div className="col-12 ms-auto card card-background card-background-mask-info">
                    <img src="img/glass-jar-full-money.jpg" style={{width: '100%'}} alt=""/>
                  </div>
                  <p className="text-swiper">{t('REGIS.slider3')}</p>
                </SwiperSlide>
                <SwiperSlide className="d-flex align-items-center justify-content-center">
                  <div className="col-12 ms-auto card card-background card-background-mask-info">
                    <img src="img/close-up-education.jpg" style={{width: '100%'}} alt=""/>
                  </div>
                  <p className="text-swiper">{t('REGIS.slider4')}</p>
                </SwiperSlide>
              </Swiper>
            </div>
          </div>
          <div className="col-md-4 shadow rounded" data-aos="flip-right">
            <div className="card card-plain py-3 my-3 form-login">
              <div className="card-header pb-0 text-left rounded">
                <h4 className="font-weight-bolder">Sign In</h4>
                <p className="mb-0">Enter your email and password to sign in</p>
              </div>
              <div className="card-body">
                <form>
                  <div className="mb-4">
                    <input type="email" required className="form-control form-control-lg" placeholder="Email" aria-label="Email" aria-describedby="email-addon" />
                  </div>
                  <div className="mb-3">
                    <input type="password" required className="form-control form-control-lg" placeholder="Password" aria-label="Password" aria-describedby="password-addon" />
                  </div>
                  <div className="text-center">
                    <button type="button" className="btn btn-lg bg-gradient-info btn-lg w-100 mt-4 mb-0" > Sign in </button>
                    <Link to={appRoutes.REGISTER} type="button" className="btn btn-lg bg-gradient-primary btn-lg w-100 mt-4 mb-0" > Sign Up </Link>
                  </div>
                </form>
              </div>
              <div className="card-footer text-center pt-0 px-lg-2 px-1">
                <p className="mb-4 text-sm mx-auto">
                  Forgot Password?
                  <Link to={appRoutes.FORGOTPASSWORD} className="text-primary text-gradient font-weight-bold">Change Password</Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Hero end */}

    </section>
  );
}
