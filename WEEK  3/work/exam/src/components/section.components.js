import Lottie from "lottie-react";
import qz from "../Animation/img.json";


const Section = () => {

     return(<>
      <div class="container">
  <div class="row">
    <div class="col">
    <Lottie animationData={qz} loop={true} />

    </div>
   <div class="col v-center"></div>
   <div class="col">
    <p className="fs-3">Industrial training weekly test <br/></p>
    <p className="fs-4">Instructions  <br/></p>
<ul>
   <li> <p className="h6">30 marks </p></li>
   <li> <p className="h6">MCQ type  <br/></p></li>
   <li> <p className="h6">Limited type  <br/></p><br/></li>
    </ul>
    <button type="button" class="btn btn-primary">Open web-dev test</button><br></br>
    <br></br>
    <button type="button" class="btn btn-primary">Open app-dev test</button>
    </div>
    
  </div>
</div>

 
    </>)
    
}
export default Section;