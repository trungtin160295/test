


import React from 'react'
import { Children } from 'react'
import { Row,Col } from 'react-bootstrap'
import '../style/aboutCoolmate.scss'

const coolmateBorn=[
    "Phải chia sẻ thật là rất nhiều người đặt câu hỏi này cho đội ngũ Coolmate, nhưng gần đây, khi Coolmate bước sang 3 tuổi thì chúng tôi mới có được câu trả lời một cách rõ ràng và tự tin cho câu hỏi này.",
    "Coolmate sinh ra với mong muốn trở thành điển hình về mô hình DOANH NGHIỆP TRÁCH NHIỆM bằng cách vừa làm kinh doanh bài bản, có lợi nhuận và đồng thời mang lại những giá trị thiết thực và lâu dài cho khách hàng, cho nhân viên, cho đối tác, cho cộng đồng, xã hội và cho cổ đông",
    "Coolmate thành lập vào tháng 3/2019, Nhu (CEO), Hiệp (CTO) và Lan (CMO) khởi đầu với một nhà kho 20m2, và một Website bán hàng sơ khai, với các sản phẩm rất cơ bản dành cho nam giới như áo thun, bít tất và đồ lót. Sau 3 năm, thì ngày hôm nay Coolmate đã có sự trưởng thành đáng kể.",
    "Coolmate vẫn bán áo thun, đồ lót và bít tất, và cũng có thêm khá nhiều các sản phẩm khác trong tủ đồ nam giới như các đồ mặc đi chơi, mặc đi làm, hay chơi thể thao. Chúng tôi cũng bán cả mũ, cả khẩu trang, khăn mặt và 1 số áo in để dành tiền quyên góp cho một số quỹ từ thiện (danh mục Care & Share). Coolmate còn có thêm dịch vụ làm các sản phẩm in ấn theo yêu cầu (dịch vụ CoolxPrint), và là đơn vị tiên phong với mô hình giao đồ lót định kỳ đầu tiên tại Việt Nam (dịch vụ CoolSub).",
    "Và chắc chắn là chúng tôi sẽ không dừng lại ở những thứ đó. Coolmate sẽ mở rộng hơn các sản phẩm, dịch vụ xoay quanh nhu cầu của nam giới. Nên một ngày đẹp trời, nếu như mà bạn tìm thấy một đôi giày, bộ dao cạo râu, hay một lọ lăn khử mùi hay thậm chí là những chiếc bao cao su chất lượng ở Website thì cũng đừng ngạc nhiên nhé.",
    "Sau 3 năm chúng tôi cũng có gần 2000m2 văn phòng và kho vận hành ở tại Hà Nội và Hồ Chí Minh. Gia đình Coolmate cũng lên tới gần 100 thành viên. Số lượng đơn hàng mà Coolmate đã xử lý tới thời điểm hiện tại đã lên tới con số gần 1 triệu.",
    "Coolmate cũng có sự tăng trưởng nhanh về doanh số và cũng có một chút lợi nhuận, và có nhiều hơn các quỹ đầu tư đã rót vốn vào Coolmate (tham khảo thêm hành trình của Coolmate)",
]

const customerErviceStory =[
    "Theo một khảo sát gần đây nhất của Coolmate tự thực hiện thì có tới 51% khách hàng quyết định mua sắm ở Coolmate vì ấn tượng với dịch vụ khách hàng. 94% khách hàng sẵn sàng giới thiệu Coolmate với những người khác.",
    "Ở Coolmate, chúng tôi tin rằng việc bán một gói hàng đó là bán cả một trải nghiệm mua sắm. Coolmate có kỳ vọng trở thành một thương hiệu điển hình về việc hướng tới khách hàng một cách sâu sắc tại Việt Nam. Với mong muốn góp một phần nhỏ thay đổi nhận thức của các doanh nghiệp trong việc mang tới những trải nghiêm tốt hơn cho khách hàng, đặc biệt trong lĩnh vực Thương Mại Điện Tử.",
    "Coolmate là thương hiệu đầu tiên và hiện tại vẫn là duy nhất có chính sách đổi trả MIỄN PHÍ và lên tới 60 ngày với bất cứ lý do gì. Chúng tôi đã xây dựng được việc đổi hàng và lấy hàng trả về tận nhà khách hàng, thậm chí chúng tôi thường xuyên gửi sản phẩm mới cho khách hàng trước khi cần thu hồi sản phẩm cũ về. Và điều vui mừng đó là gần đây đã có nhiều hơn các đơn vị vận chuyển chào dịch vụ này và phổ biến hơn ở các bạn bán hàng Online.",
    "Việc đóng gói một hộp đồ với “Double Box” cũng được Coolmate đi tiên phong từ cách đây 2 năm, và trở thành phổ biến nhiều hơn ở các thương hiệu khác.",
    "Nếu bạn thử hỏi CSKH Coolmate một tiệm Pizza ngon quanh khu vực của bạn thì chắc các bạn ấy cũng sẽ cố gắng tìm và gửi cho bạn một địa chỉ phù hợp đó!",
    
]

const responsibility =[
    {
        id:1,
        tittle:" Với Khách Hàng",
        child:[
            "Coolmate kỳ vọng mang lại sản phẩm chất lượng hơn nhờ mô hình quản lý chuỗi cung ứng từ gốc (với ngành may mặc đó là từ sợi), Coolmate cũng có các đối tác ở quy mô toàn cầu, và chất lượng về nguyên liệu đạt tiêu chuẩn cao trong ngành may mặc, có thể so sánh với các thương hiệu lớn và lâu đời.",
            "Ngoài ra mô hình bán hàng trực tiếp (Ecommerce D2C) cho phép Coolmate được đầu tư nhiều hơn cho phần sản xuất thay vì phải liên tục cắt giảm giá vốn như các mô hình truyền thống! Thực tế khách hàng sẽ thấy được chất lượng các sản phẩm Coolmate đã cải thiện đáng kể trong năm gần đây và chắc chắn trong tương lai nữa.",
            "Coolmate kỳ vọng mang lại giá cả tốt hơn cho khách hàng nhờ vào mô hình bán hàng trực tiếp thông qua nền tảng TMĐT. Thay vì việc phải bán giá sản phẩm x4-x6 lần giá vốn như truyền thống thì Coolmate thường là x1.8-x2.5 lần mà chúng tôi vẫn có phần lời nhất định. Ngoài ra Coolmate còn hướng tới mang lại một trải nghiệm mua sắm tốt hơn dành cho khách hàng nhờ vào việc tập trung rất nhiều vào dịch vụ khách hàng (tham khảo 11 cam kết của Coolmate dành cho khách hàng)",
        ],
        linkimg:"https://mcdn.coolmate.me/uploads/April2022/Group_1_(1).png",
        note:"Ảnh tại Coolmate Hub"
    },
    {
        id:2,
        tittle:"Với Nhân Viên Coolmate",
        child:[
            "Coolmate kỳ vọng sẽ xây dựng được một tổ chức cởi mở, một môi trường năng động với một văn hóa riêng (tham khảo văn hóa Coolmate). Và ở đó các bạn trẻ sẽ phát huy hết khả năng của mình, và nhận được những phần lương, thưởng xứng đáng. Ngoài lương thì các bạn nhân viên của Coolmate còn nhận được các ESOP (cổ phần thưởng) hàng năm nếu có đóng góp tốt."
        ],
        linkimg:"https://mcdn.coolmate.me/uploads/April2022/sn34-5_2.png",
        note:"Ảnh các bạn nhân viên HCM vào sinh nhật Coolmate 3"
    },
    {
        id:3,
        tittle:"Với Đối Tác Coolmate",
        child:[
            "Coolmate làm trong ngày may mặc. Một ngành mà là thế mạnh của Việt Nam, tuy nhiên thì đời sống của những người công nhân may chưa bao giờ được đảm bảo đủ tốt. Việc giảm chi phí gia công để tăng sức cạnh tranh cho sản phẩm là chiến lược được các thương hiệu lớn liên tục áp dụng. Coolmate muốn thay đổi điều đó bằng việc luôn cố gắng trả nhiều hơn cho những người thợ may nếu có thể (Yêu cầu các đối tác phải đóng bảo hiểm cho người lao động là một ví dụ).",
             "Ngoài ra thì Coolmate cũng có nhiều hoạt động hỗ trợ các bạn công nhân may khác như chăm sóc các bạn F0, hỗ trợ giai đoạn thiếu việc làm, hay là việc theo đuổi mô hình sản xuất chất lượng, thay vì giá rẻ. Coolmate kỳ vọng rằng sẽ góp một phần vào việc thay đổi nhận thức của các thương hiệu về mối quan hệ với các xưởng sản xuất, và đời sống người lao động. Mô hình lao động giá rẻ của ngành dệt may không phải là mô hình bền vững và có giá trị lâu dài trong tương lai."        
            ],
        linkimg:"https://mcdn.coolmate.me/uploads/April2022/Group_1.jpg",
        note:"Ảnh tại các xưởng sản xuất đối tác"
    },
    {
        id:4,
        tittle:"Với Môi Trường",
        child:[
            "Dệt may là ngành gây ra ô nhiễm môi trường lớn thứ 2 trên thế giới chỉ sau ngành giấy. Coolmate đang cố gắng chuyển mình theo hướng “Substainability” - Thời trang bền vững hơn ở hiện tại và trong tương lai. Bằng chứng là dòng sản phẩm Excool với sợi Sorona thân thiện với môi trường hơn nhiều so với sợi Polyester thường. Dự án kết hợp với Cleandye, công nghệ nhuộm sạch, không nước cũng tạo ra các sản phẩm thân thiện hơn với môi trường. Với dòng các sản phẩm thể thao Coolmate hướng tới việc ứng dụng trên 50% sợi tái chế (Recycled Polyester) trong các dòng sản phẩm của mình trong năm 2022 và hướng tới 99% trong năm 2023 trở đi."
        ],
        linkimg:"https://mcdn.coolmate.me/uploads/April2022/Anh_chup_Man_hinh_2021-07-21_luc_16.png",
        note:"Ảnh một công đoạn trong quá trình nhuộm sạch CleanDye"
    },
    {
        id:5,
        tittle:" Với Các Cổ Đông",
        child:[
            "Việc duy trì một mô hình kinh doanh bài bản, có lợi nhuận ổn định và tăng trưởng như là một cam kết của Coolmate cho cổ đông về việc có được những lợi nhuận và sự tăng giá trị trong dài hạn.",
            "Đội ngũ Coolmate có rất nhiều những dự định và những ước mơ lớn, tuy nhiên thì chúng tôi bắt đầu từ những thứ nhỏ nhất, và bước từng bước trên chặng đường đi của mình, chăm chỉ và cố gắng làm tốt từng ngày. Coolmate không coi bất cứ ai là đối thủ cạnh tranh ngoài chính bản thân mình. “Tốt hơn mỗi ngày - Better Everyday” là thứ mà chúng tôi theo đuổi."
        ],
        linkimg:"https://mcdn.coolmate.me/uploads/April2022/93865627_10217886564377529_1941617773784334336_n_1.jpg",
        note:"Ảnh đội ngũ Coolmate và Nhà đầu tư 500 Startup"
    },
    {
        id:6,
        tittle:"Với Cộng Đồng Xã Hội",
        child:[
            "Coolmate cố gắng mở rộng, tạo nhiều việc làm và đóng thuế đầy đủ như một phần đóng góp cho sự phát triển chung của xã hội.",
            "Quan điểm của Coolmate về việc làm các hoạt động đóng góp cho cộng đồng:",
            "“Một doanh nghiệp không cần phải lớn, mới có thể làm điều ý nghĩa”. Chính vì vậy Coolmate đã mở ra dự án Care & Share với mục tiêu góp phần hỗ trợ cho các trẻ em khó khăn ở Việt Nam ngay từ khi mới thành lập công ty được 1 năm. (tham khảo thêm dự án Care & Share). Chắc chắn trong thời gian tới sẽ được đẩy mạnh hơn và hỗ trợ được nhiều hơn."
        ],
        linkimg:"https://mcdn.coolmate.me/uploads/April2022/Thiet_ke_chua_co_ten_(2)_1.jpg",
        note:"Ảnh dự án Áo xây trường được nhiều khách hàng quan tâm & lan tỏa"
    }
    
]

const Responsibility =({item,index}) =>{
    return(
        <section className='responsibility-child'>
            <Col  xs={12}  sm= {12} md={12}  lg={6}  xl={6} xxl={6} className='responsibility-child-left'>
                <h3 className='responsibility-child-title'>
                {index} #. {item.tittle}
                </h3>
                
                    {item.child.map((content,index) =>{
                        return <div className='responsibility-child-content' key={index}>{content}</div>
                    })}

                


            </Col>

            <Col xs={12}  sm= {12} md={12}  lg={6}  xl={6} xxl={6} className='responsibility-child-right'>
                <div className='responsibility-child-img'>
                    <img src={item.linkimg} alt="" />
                </div>
                
                <div className='responsibility-child-note'>{item.note}</div>
                

            </Col>

        </section>
    )
}
export default function AboutCoolmate() {
  return (
    <div className='about-coolmate'>
        <div className='coolmate-banner'>
            <div className='coolmate-banner-img'>
                <img src="https://mcdn.coolmate.me/image/August2022/z3610794050700_6a7d8a12e088f26948b9ba77839ec57e.jpg" alt="" />
            </div>
            
            <div className='coolmate-banner-content'>
                <div className='banner-conten-titlet'>
                    <h1 className='title'>
                        Câu Chuyện Về Coolmate
                        
                    </h1>                    
                    <span>Đây là chuyên mục giúp các bạn biết được Coolmate đã hình thành ra sao và chúng tôi muốn xây dựng một công ty như thế nào!</span>
                </div>
            </div>
        </div>
        <section className='coolmate-born'>
            <Row className='coolmate-born-gird'>
                <Col  xs={12}  sm= {12} md={6}  lg={5}  xl={4} xxl={3} className='coolmate-born-left'>
                    <h1 className='coolmate-born-title'>
                    Coolmate sinh ra 
                    <br/>  
                    để làm gì?
                    </h1>
                </Col>
                <Col  xs={12}  sm= {12} md={6}  lg={7}  xl={8} xxl={9} className='coolmate-born-right'>
                    {coolmateBorn.map((content) =>{

                       return <div className='coolmate-born-content' >
                                {content}
                        </div>
                    })}
                </Col>
                <div  className='coolmate-born-img'>
                        <img src="https://mcdn.coolmate.me/uploads/April2022/Screen_Shot_2022-03-29_at_17.25_1.png" alt="" />
                    </div>
            </Row>
        </section>
       <section className='direction-coolmate'>
            <Col  className='direction-coolmate-content'>
            “ Coolmate sẽ trở thành điển hình về mô hình DOANH NGHIỆP TRÁCH NHIỆM
            <br />
                bằng cách kinh doanh tử tế, có lợi nhuận và mang lại những giá trị thiết thực và lâu dài
                <br />
                cho khách hàng, cho nhân viên, cho đối tác, cho cộng đồng , cho môi trường và cho cổ đông “
            </Col>
            <div className='direction-coolmate-author'>
                <i>
                    Nhu Phạm, CEO & Founder Coolmate
                </i>
            </div>
       </section>
       <section className='customer-ervice-story'>
                <Col xs={12}  sm= {12} md={6}  lg={6}  xl={5} xxl={5} className='customer-ervice-story-left'>
                    <img src="https://mcdn.coolmate.me/uploads/April2022/1-8_14.jpg" alt="" />
                    <div className='customer-ervice-story-note'  > <u>Đội ngũ nhân viên CSKH tại Coolmate</u></div>
                </Col>
                <Col xs={12}  sm= {12} md={6}  lg={6}  xl={7} xxl={7} className='customer-ervice-story-right'>
                    <div className='customer-ervice-story-content'>
                        <h2 className='story-title'>
                        Câu chuyện dịch vụ khách hàng <br />
                        của Coolmate
                        </h2>
                        <div className='story-content'>
                        {customerErviceStory.map((content) => {
                            return <div>{content}</div>
                        })}

                    </div>
                    </div>
                    
                </Col>

        
        
       </section>
       
       <section className='responsibility-coolmate'>
            <h2 className='responsibility-coolmate-title'>
                Câu chuyện mô hình doanh nghiệp CÓ TRÁCH NHIỆM
                Coolmate đang hướng tới
            </h2>
            {responsibility.map((item,index) =>{
                return <Responsibility  item={item} index ={index}/>
            })}
       </section>
       <section className='coolmate-thanks'>
        <div className='coolmate-thanks-content'>
            <h2>Trong cuộc sống có quá nhiều sự lựa chọn,
            cảm ơn bạn đã lựa chọn Coolmate!</h2>
         
            <span>&#8258;</span>
        </div>
        

       </section>

  

    </div>
    )

    
}

