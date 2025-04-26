// import React from 'react'
// import {data} from '../restApi.json'
// const Qualities = () => {
//   return (
//     <>
//         <section className='qualities' id='qualities'>
//           <div className="container">
//             {
//               data[0].ourQualities.map(element=>{
//                 return(
//                   <>
//                   <div class="fancy-divider">★</div>
// <section class="services">
//   <div class="service">
//     <h2>QUALITY FOOD</h2>
//     <p>We believe that quality ingredients are the heart of every great meal. Our dishes are crafted using only the freshest, locally sourced produce and premium spices to bring you flavor-packed meals every time.</p>
//   </div>

//   <div class="divider"></div>

//   <div class="service">
//     <h2>SUPER TASTE</h2>
//     <p>Every bite is a burst of flavor! Our chefs blend traditional recipes with a modern twist to ensure that each dish offers a unique and unforgettable taste experience you'll keep coming back for.</p>
//   </div>

//   <div class="divider"></div>

//   <div class="service">
//     <h2>FAST DELIVERY</h2>
//     <p>Craving something delicious? We've got you covered. With our fast and reliable delivery service, your favorite meals will arrive at your doorstep hot, fresh, and right on time!</p>
//   </div>
// </section>

//                   </>
//                 )
//               })
//             }
//           </div>
//         </section>
        
//     </>
//   )
// }

// export default Qualities
import React from 'react';
import {data} from '../restApi.json'

const Qualities = () => {
  return (
    <div className="services-container">
      <h1 className="main-heading">Our Services</h1>
      <div className="services-row">
        <div className="service-box">
          <h2>QUALITY FOOD</h2>
          <p>
            We believe that quality ingredients are the heart of every great meal. Our dishes are crafted
            using only the freshest, locally sourced produce and premium spices to bring you flavor-packed
            meals every time.
          </p>
        </div>

        <div className="service-box">
          <h2>SUPER TASTE</h2>
          <p>
            Every bite is a burst of flavor! Our chefs blend traditional recipes with a modern twist to
            ensure that each dish offers a unique and unforgettable taste experience you'll keep coming
            back for.
          </p>
        </div>

        <div className="service-box">
          <h2>FAST DELIVERY</h2>
          <p>
            Craving something delicious? We've got you covered. With our fast and reliable delivery
            service, your favorite meals will arrive at your doorstep hot, fresh, and right on time!
          </p>
        </div>
      </div>
    </div>
  );
};

export default Qualities;

