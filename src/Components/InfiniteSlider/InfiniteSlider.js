import React from 'react'
import Wrapper from './InfiniteSlider.styled'
import Slider from "../../images/slider.png"
function InfiniteSlider() {
  return (
   <Wrapper>
<div class="slider">
	<div class="slide-track">
		<div class="slide">
		<img src={Slider} className='img-fluid' loading='lazy' alt="" height="100" width="250" />
		</div>
		<div class="slide">
		<img src={Slider} className='img-fluid' loading='lazy' alt="" height="100" width="250" />
		</div>
		<div class="slide">
		<img src={Slider} className='img-fluid' loading='lazy' alt="" height="100" width="250"/>
		</div>
		<div class="slide">
		<img src={Slider} className='img-fluid' loading='lazy' alt="" height="100" width="250"/>
		</div>
		<div class="slide">
        <img src={Slider} className='img-fluid' loading='lazy' alt="" height="100" width="250"/>
		</div>
		<div class="slide">
        <img src={Slider} className='img-fluid' loading='lazy' alt="" height="100" width="250"/>
		</div>
		<div class="slide">
        <img src={Slider} className='img-fluid' loading='lazy' alt=""  height="100" width="250"/>
		</div>
		<div class="slide">
        <img src={Slider} className='img-fluid' loading='lazy' alt="" height="100" width="250" />
		</div>
		<div class="slide">
		<img src={Slider} className='img-fluid' loading='lazy' alt=""  height="100" width="250"/>
		</div>
		<div class="slide">
		<img src={Slider} className='img-fluid' loading='lazy' alt=""  height="100" width="250"/>
		</div>
		<div class="slide">
        <img src={Slider} className='img-fluid' loading='lazy' alt="" height="100" width="250" />
		</div>
		<div class="slide">
        <img src={Slider} className='img-fluid' loading='lazy' alt=""  height="100" width="250"/>
		</div>
		<div class="slide">
        <img src={Slider} className='img-fluid' loading='lazy' alt=""  height="100" width="250"/>
		</div>
		<div class="slide">
		<img src={Slider} className='img-fluid' loading='lazy' alt="" />
		</div>
	</div>
</div>
    </Wrapper>
  )
}

export default InfiniteSlider
