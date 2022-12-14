import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import '../style/pageCoolPrint.scss'
import { Card } from "reactstrap";
import { useForm } from 'react-hook-form';
import { ErrorMessage } from "@hookform/error-message";

export default function Coolxprint() {
  const {
    register,
    formState: { errors },
    handleSubmit
  } = useForm({
    criteriaMode: "all"
  });
  const onSubmit = (data) => console.log(data);

  const ErrorForm =({name} ) =>{
    return(
      <ErrorMessage
        errors={errors}
        name={name}
        render={({ messages }) => {
          return messages
            ? Object.entries(messages).map(([type, message]) => (
                <p key={type}>{message}</p>
              ))
            : null;
        }}
      />
    )
    
  }

  const listCustomer = [
    {"id":1,
    "linkImg":"https://media.coolmate.me/cdn-cgi/image/quality=80,format=auto/uploads/April2022/thay.jpeg"},
    {
      "id":2,
      "linkImg":"https://media.coolmate.me/cdn-cgi/image/quality=80,format=auto/uploads/April2022/d4abd67adb0e2d50741f_62.jpeg"
    },
    {"id":3,
    "linkImg":"https://media.coolmate.me/cdn-cgi/image/quality=80,format=auto/uploads/April2022/fd771bdece5a05045c4b.jpeg"},
    {
      "id":4,
      "linkImg":"https://media.coolmate.me/cdn-cgi/image/quality=80,format=auto/uploads/June2022/z3461093205331_002ec9fd44eec1dda9264235fb4a9167_(1).jpg"
    },
    {"id":5,
    "linkImg":"https://media.coolmate.me/cdn-cgi/image/quality=80,format=auto/uploads/April2022/Anh_chup_Man_hinh_2021-09-03_luc_13.26.08.png"},
    {
      "id":6,
      "linkImg":"https://media.coolmate.me/cdn-cgi/image/quality=80,format=auto/uploads/June2022/IMG_2044.jpg"
    }
  ]

  
  const settings = {        
    speed: 1000,
    slidesToShow: 4,
    slidesToScroll: 2,
    initialSlide: 2,
    autoplaySpeed:2000,
    autoplay: true,                     
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2, 
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1, 
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };
  const dataimg = [
    {
      id: 1,
      nameproduct: "??o polo in logo",
      quantityproduct: "S??? l?????ng t???i thi???u: 2 chi???c",
      linkproduct:
        "https://mcdn.coolmate.me/uploads/November2021/Group_724.png",
      linkColor: [
        "https://mcdn.coolmate.me/uploads/November2021/Group_724.png",
        "https://mcdn.coolmate.me/uploads/November2021/Polo_do.png",
        "https://mcdn.coolmate.me/uploads/November2021/Polo_trang.png",
        "https://mcdn.coolmate.me/uploads/November2021/Group_723.png",
      ],
      price: 190,
    },
    {
      id: 2,
      nameproduct: "??o polo in logo",
      quantityproduct: "S??? l?????ng t???i thi???u: 2 chi???c",
      linkproduct: "https://mcdn.coolmate.me/uploads/November2021/den.png",
      linkColor: [
        "https://mcdn.coolmate.me/uploads/November2021/Group_724.png",
        "https://mcdn.coolmate.me/uploads/November2021/Polo_trang.png",
        "https://mcdn.coolmate.me/uploads/November2021/Group_723.png",
      ],
      price: 150.0,
    },
    {
      id: 3,
      nameproduct: "Qu???n l??t in",
      quantityproduct: "S??? l?????ng t???i thi???u: 5 chi???c",
      linkproduct:
        "https://mcdn.coolmate.me/uploads/November2021/Bamboo_trunk_xanh_navy.png",
      linkColor: [
        "https://mcdn.coolmate.me/uploads/November2021/Polo_trang.png",
        "https://mcdn.coolmate.me/uploads/November2021/Group_723.png",
      ],
      price: 55.0,
    },
    {
      id: 4,
      nameproduct: "M?? (n??n) l?????i trai / Bucket hat",
      quantityproduct: "S??? l?????ng t???i thi???u: 2 chi???c",
      linkproduct: "https://mcdn.coolmate.me/uploads/November2021/den_45.png",
      linkColor: [
        "https://mcdn.coolmate.me/uploads/November2021/Polo_trang.png",
        "https://mcdn.coolmate.me/uploads/November2021/Group_723.png",
      ],
      price: 110.0,
    },
    {
      id: 5,
      nameproduct: "Kh???u trang",
      quantityproduct: "S??? l?????ng t???i thi???u: 2 chi???c",
      linkproduct: "https://mcdn.coolmate.me/uploads/April2022/xanh.png",
      linkColor: [
        "https://mcdn.coolmate.me/uploads/April2022/xanh.png",
        "hhttps://mcdn.coolmate.me/uploads/November2021/trang_89.png",
      ],
      price: 20.0,
    },
    {
      id: 6,
      nameproduct: "T???t (v???",
      quantityproduct: "S??? l?????ng t???i thi???u: 200 ????i",
      linkproduct:
        "https://mcdn.coolmate.me/uploads/November2021/tat_co_cao_den.png",
      linkColor: [
        "https://mcdn.coolmate.me/uploads/November2021/tat_co_cao_den.png",
        "https://mcdn.coolmate.me/uploads/November2021/Group_725.png",
        "https://mcdn.coolmate.me/uploads/November2021/tat_co_cao_xanh_navy.png",
      ],
      price: 20.0,
    },
  ];
  const PodWhy = ( {title,description}) =>{
    return(
      <div className="pod-why__content">
         
        <h4 className="pod-why__title">{title}</h4>
        
        <p className="pod-why__description">
           {description}
         </p>
     </div>
    )
  }
  const ProductPrint = ({product}) =>{
    return(
      <Col xs="6" md="4" style={{margin: '20px 0'}}>
                    <div className="cart-coolxprint">
                      
                        <div className="pod-grid__tabline">
                          <span className="nameproduct">
                            {product.nameproduct}
                          </span>
                          <p className="quantityproduct">
                            {product.quantityproduct}
                          </p>
                        </div>
                        <div className=" pod-grid__image">
                            <img src={product.linkproduct}></img>
                        </div>
                        
                          <button className="btn-price__price btn-price ">
                            Gi?? t??? {product.price}.000 ??
                          </button>
                        
                      
                    </div>
                  </Col>
    )
  }


  return (
    <>
      <div className="pod-banner__thumbnail">
        <div className="pod-banner__image pod-banner__image--left">
          <img
            src="https://mcdn.coolmate.me/uploads/January2022/CoolXprint_Back.png"
            alt=""
          ></img>
        </div>
        <div className="pod-banner__content">
          <h1 className="pod-banner__heading">Cool Xprint</h1>
          <p className="pod-banner__description">
            ?????t s???n xu???t ch??a bao gi??? <br></br>
            ????n gi???n ?????n th???
          </p>
          <div className="pod-banner__policy">
            <span className="pod-banner__item">S??? l?????ng ??t</span>|
            <span className="pod-banner__item">Gi?? c???nh tranh</span>|
            <span className="pod-banner__item">B???o h??nh 60 ng??y</span>
          </div>{" "}
          <a href="#mockup" className="pod-banner__button scroll-to-step">
            Nh???n b??o gi??
          </a>
        </div>
        <div className="pod-banner__image pod-banner__image--right">
          <img
            src="https://mcdn.coolmate.me/uploads/January2022/CoolXprint_Banner.png"
            alt=""
          ></img>
        </div>
      </div>

      <section className="pod-why">
        <div className="container container--medium">
          <div className="pod-why__cart">
            <div className="pod-why__item">
              <div className="pod-why__inner">
                <PodWhy 
                  title='Ch???t l?????ng ?????m b???o'
                  description='C??c s???n ph???m thu???c d??? ??n CoolXPrint ???????c s???n xu???t theo ti??u
                  chu???n nh?? c??c s???n ph???m t????ng t??? c???a Coolmate'
                />
                <PodWhy 
                  title='In v???i s??? l?????ng ??t'
                  description='CoolXPrint s???n s??ng h??? tr??? b???n in, k??? c??? s??? l?????ng t??? 1 chi???c'
                />
              </div>
            </div>

            <div className="pod-why__item">
              <div className="pod-why__inner">
                
                <PodWhy 
                  title='D???ch v??? t???n t??m'
                  description='Cam k???t ??em ?????n tr???i nghi???m 100% h??i l??ng v???i m???i kh??ch h??ng'
                />
                <PodWhy 
                  title='X??? l?? nhanh ch??ng'
                  description='Ch??? ?????ng s???n xu???t v?? in v???i s??? l?????ng ??t ch??? trong 24h, nh???n
                  h??ng sau 48h'
                />
              </div>
            </div>
            <div className="pod-why__heading">
              <span>
                V?? sao
                <br />
                l???a ch???n
                <br />
                CoolXPrint?
              </span>
            </div>
          </div>
        </div>
      </section>
      <section className="pod-active">
        <div className="container container--medium">
          <h2 className="pod-activite__heading">
            COOLXPRINT ho???t ?????ng nh?? th??? n??o ?
          </h2>
          <div className="pod-active__wrapper">
            <a href="#product" className="pod-active__inner sroll-to-step">
              <div className="pod-active__item">
                <div className="pod-active__icon">
                  <img
                    src="https://www.coolmate.me/images/coolxprint/icon-1.svg"
                    alt="Ti???p nh???n y??u c???u"
                  ></img>
                </div>
                <div className="pod-active__title">Ti???p nh???n y??u c???u</div>
                <div className="pod-active__description">
                  "Qua From"
                  <br />
                  "Email: anhandz02@gmail.com"
                  <br />
                  "Hotline: 190874835"
                </div>
              </div>
              <div className="pod-active__item">
                <div className="pod-active__icon">
                  <img
                    src="https://www.coolmate.me/images/coolxprint/icon-2.svg"
                    alt="Ti???p nh???n y??u c???u"
                  ></img>
                </div>
                <div className="pod-active__title">G???i b??o gi??</div>
                <div className="pod-active__description">
                  T???i ??a 24h Coolmate
                  <br />
                  s??? ph???n h???i
                </div>
              </div>
              <div className="pod-active__item">
                <div className="pod-active__icon">
                  <img
                    src="https://www.coolmate.me/images/coolxprint/icon-3.svg"
                    alt="Ti???p nh???n y??u c???u"
                  ></img>
                </div>
                <div className="pod-active__title">S???n xu???t & ho??n thi???n</div>
                <div className="pod-active__description">B???o h??nh 60 ng??y</div>
              </div>
              <div className="pod-active__item">
                <div className="pod-active__icon">
                  <img
                    src="https://www.coolmate.me/images/coolxprint/icon-4.svg"
                    alt="Ti???p nh???n y??u c???u"
                  ></img>
                </div>
                <div className="pod-active__title">Giao h??ng</div>
                <div className="pod-active__description">
                  Giao h??ng to??n qu???c
                </div>
              </div>
            </a>
          </div>
        </div>
      </section>

      <section id="product" className="pod-product">
        <div className="container container--medium">
          <h2 className="pod-products__heading">
            C??c s???n ph???m c???a COOLXPRINT
          </h2>
          <Container>
            <Row className="list-pod-product">
              {dataimg.map((product) => {
                return (
                  <ProductPrint product ={product} key ={product.id}/>
                );
              })}
            </Row>
          </Container>
        </div>
      </section>
      <section>
        <h2 className="pod-customer__heading">
          C??c kh??ch h??ng th??n thi???t
        </h2>
        <Slider {...settings}>
           {listCustomer.map((customer) =>{
            return(
              <div className="pod-customer" key={customer.id}>
                <div className="pod-customer_img">
                  <img src={customer.linkImg} alt="" />
                </div>
              </div>
            )
           })}
        </Slider>
      </section>
      <section id="mockup" className="banner-contac">
        <div className="banner-contac-detail">
          <h2 className="title">B???n c???n ?????t s???n ph???m ?</h2>
          <p className="descriptions">Coolmate s??? ghi nh???n th??ng tin v?? ph???n h???i v???i b???n trong v??ng 24h.
            <br />
          N???u c???n g???p Coolmate ngay. H??y g???i <b>1900.272735 - 028.7777.2737</b> </p>
        <form onSubmit={handleSubmit(onSubmit) } className='container-form'>
          <div className=" form-group">
            <label htmlFor="Name product">1. S???n ph???m v?? s??? l?????ng d??? ki???n b???n c???n :</label>
              <input 
                type="text" 
                placeholder="vd: 2 ??o Polo" 
                id="Name product" 
                className="from-control" 
                {...register("Name product", 
                {required: "Vui l??ng  nh???p ????? th??ng tin." ,
                minLength: {
                  value: 6,
                  message: "T??n t???i thi???u 6 k?? t??? "
                }})} 
              />
              <ErrorForm name="Name product"/>
              
          </div>
          <div className=" form-group">
            <label htmlFor="Name custom">2. T??n kh??ch h??ng :</label>
              <input 
              type="text"
              placeholder="vd:Ph???m V??n T??n" 
              id="Name custom" className="from-control" 
              {...register("Name custom", 
                {required: "Vui l??ng  nh???p ????? th??ng tin." ,
                maxLength: {
                  value: 100,
                  message: "T??n t???i ??a 100 k?? t???"
                },
                minLength: {
                  value: 2,
                  message: "T??n t???i thi???u 2 k?? t??? "
                }})} />
              <ErrorForm name="Name custom"/>
          </div>
          <div className=" form-group">
            <label htmlFor="Email">3. Email kh??ch h??ng :</label>
            <input
              type="text" 
              placeholder="vd: abc123@gmail.com" 
              id="Email" 
              className="from-control"
              {...register("Email", {
                required: "Vui l??ng  nh???p ????? th??ng tin.",
                pattern: {
                  value: /^\S+@\S+$/i,
                  message: "Vui l??ng nh???p ????ng ."
                }
               
              })}
            />
            <ErrorForm name="Email"/>
          </div>
          <div className=" form-group">
            <label htmlFor="mobileNumber">4. S??? ??i???n tho???i kh??ch h??ng :</label>
            <input
            
              placeholder="vd: 028.7777.2737" 
              id="mobileNumber" 
              className="from-control"
              {...register("mobileNumber", {
                required: "Vui l??ng  nh???p ????? th??ng tin.",
                               
                pattern: {
                  value: /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/,
                  message: "Vui l??ng ki???m tra l???i s??? ??i???n tho???i."
                }
              })}
            />
            <ErrorForm name="mobileNumber"/>
          </div>
         
           <div className=" submit-wrapper">
           
            <button type='Sumbit' className='button-order'>?????t h??ng</button>
           </div>
          
    </form>

        </div>
      
      </section>
      </>
  );
}