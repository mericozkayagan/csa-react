import React from 'react';
import {Carousel} from 'react-bootstrap';

function Slider() {
  return (
    <Carousel id="photos">
      <Carousel.Item interval={3000}>
      <a href="/#" rel="noreferrer">
        <img
            className="d-block w-100 slider-height"
            src={require("../components/images/slider/1.jpg")}
            alt=""
        />
    </a>
      <Carousel.Caption>
        <h3 className='slider-text'>Karşıdan karşıya geçmek isteyen veya yolda yürürken karşılaştığınız, yardıma ihtiyacı olduğunu düşündüğünüz bir görme engelliye nazik bir dille yardıma ihtiyacı olup olmadığını sorabilirsiniz.</h3>
      </Carousel.Caption>
      </Carousel.Item>


      <Carousel.Item interval={3000}>
      <a href="/#" rel="noreferrer">
        <img
        className="d-block w-100 slider-height"
        src={require("../components/images/slider/2.jpg")}
        alt=""
        />
    </a>
      <Carousel.Caption>
        <h3 className='slider-text'>Eğer size yol veya yön sorarsa, sözcüklerle kesin ve anlaşılır biçimde izah ediniz. Görme engelli birini uzaktan bağırarak yönlendirmeniz hem rahatsız edici hem de tehlike yaratıcı olabilir. Olanağınız varsa yardım etmek için yanına gidiniz. </h3>
      </Carousel.Caption>
      </Carousel.Item>


      <Carousel.Item interval={3000}>
      <a href="/#" rel="noreferrer">
        <img
        className="d-block w-100 slider-height"
        src={require("../components/images/slider/3.jpg")}
        alt=""
        />
    </a>
      <Carousel.Caption>
        <h3 className='slider-text'>Siz onun koluna değil, o sizin kolunuza girmelidir. Böylece bir adım önde olarak onun sizi daha kolay takip etmesini sağlarsınız.</h3>
      </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item interval={3000}>
      <a href="/#" rel="noreferrer">
        <img
        className="d-block w-100 slider-height"
        src={require("../components/images/slider/4.jpg")}
        alt=""
        />
    </a>
      <Carousel.Caption>
        <h3 className='slider-text'>Görme engelli bireye daha önceden bildiği ortamlarda yardımcı olurken iniş çıkışlarda her defasında inip çıktığınızı belirtmenize gerek yoktur. İniş çıkışlara bir adım kala yavaşlamanız yeterlidir. Ancak yabancı olduğu ortamlarda alışıncaya kadar iniş ve çıkışları söyleyebilirsiniz.</h3>
      </Carousel.Caption>
      </Carousel.Item>
      
      <Carousel.Item interval={3000}>
      <a href="/#" rel="noreferrer">
        <img
        className="d-block w-100 slider-height"
        src={require("../components/images/slider/5.jpg")}
        alt=""
        />
    </a>
      <Carousel.Caption>
        <h3 className='slider-text'>Görme engelli bireyin oturacağı yeri gösterirken, eğer mümkünse elinden tutarak oturacağı sandalyenin arka kısmına dokunmasını sağlayın. Eğer mümkün değilse, "şuraya oturun" veya "buraya oturun" gibi ifadeler kullanmak yerine sağ, sol, ön, arka gibi yönlerle tarif edebilirsiniz.</h3>
      </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item interval={3000}>
      <a href="/#" rel="noreferrer">
        <img
        className="d-block w-100 slider-height"
        src={require("../components/images/slider/6.jpg")}
        alt=""
        />
    </a>
      <Carousel.Caption>
        <h3 className='slider-text'>Görme engelli birey arabaya veya taksiye binmek istediğinde ona kapıyı açıp ön veya arka koltuk olduğunu belirterek yardımcı olabilirsiniz.</h3>
      </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item interval={3000}>
      <a href="/#" rel="noreferrer">
        <img
        className="d-block w-100 slider-height"
        src={require("../components/images/slider/7.jpg")}
        alt=""
        />
    </a>
      <Carousel.Caption>
        <h3 className='slider-text'>Görme engellilerin en sık karşılaştığı kazalardan biri, yarım açık bırakılan kapılara çarpmaktır. Kapıları kesinlikle yarım açık bırakmayın; kapıların ya tamamen açık ya da tamamen kapalı olmasına dikkat edin. </h3>
      </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item interval={3000}>
      <a href="/#" rel="noreferrer">
        <img
        className="d-block w-100 slider-height"
        src={require("../components/images/slider/8.jpg")}
        alt=""
        />
    </a>
      <Carousel.Caption>
        <h3 className='slider-text'>Görme engelli bir bireyle konuşurken yanından ayrılmanız gerektiğinde kendisine mutlaka bildirin. Böylece oluşabilecek yanlış anlaşılmalardan kaçınabilirsiniz.</h3>
      </Carousel.Caption>
      </Carousel.Item>

    </Carousel>
  );
}

export default Slider;