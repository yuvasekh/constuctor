import React from 'react'
import './Home.css'
import { Button } from 'antd';
import SignIn from './SignIn'
import { useNavigate } from 'react-router-dom';
 const Home = () => {
  // localStorage.setItem('isLoggedin',false)
  const navigate = useNavigate();
  function handleClick() {
    navigate('/register');
  }
  return (
    <>
    
    <div className="imgmid">
      <div className="imgcard">
      <h1 style={{color:'#084785'}}>Come And Join And Get Daily Paid Off</h1>
      <SignIn/>
        {/* <button className='signin'>SignIn</button> */}
      </div>
      
      </div>
    <div class="homecontent">
  <h2>Who can use this Software</h2>
  <div class="card-container">
  <div class="card">
    <img src="https://p0.pikist.com/photos/983/94/bricks-labourer-indian-labour-loading-truck-worker.jpg" alt="Image 1"/>
    <h3>Labour</h3>
    <p>Labour refers to the physical and mental effort that individuals put into work or production. It is a fundamental aspect of economics, and the availability and quality of labour can significantly impact economic growth and development.  </p>
  </div>
  <div class="card">
    <img src="https://constructioncitizen.com/sites/constructioncitizen.com/files/blog_attachments/construction-general-contractor.jpg"/>
    <h3> Contractor</h3>
    <p>If you're looking to get a construction project done, hiring a contractor may be the right choice. Contractors can manage the project from start to finish, ensuring a smooth and successful outcome.</p>
  </div>
  <div class="card">
    <img src="https://media.mktg.workday.com/is/image/workday/customer-customer-carlisle-homes-16x9-1?wid=800"/>
    <h3>Customer</h3>
    <p>Customers are the lifeblood of any business. They provide feedback, support, and revenue, making it important to prioritize their needs and satisfaction.
</p>
  </div>
  <div class="card">
    <img src="https://s32519.pcdn.co/wp-content/uploads/2023/04/RELEX-Building-Construction-and-technical-trade-640x480.png" alt="Image 4"/>
    <h3>Wholesalers</h3>
    <p>Wholesalers play an important role in the supply chain by purchasing goods in bulk from manufacturers and selling them to retailers at a discounted price. This allows retailers to offer competitive prices to their customers while still making a profit.</p>
  </div>
  <div class="card">
    <img src="https://www.build-review.com/wp-content/uploads/2021/02/civil-engineering-company.jpg" alt="Image 5"/>
    <h3> Engineers</h3>
    <p>Engineers are problem solvers who use their knowledge of math, science, and technology to design and create solutions to complex issues. They work in a variety of fields, including aerospace, civil, electrical, and mechanical engineering.
</p>
  </div>
  <div class="card">
    <img src="https://constructionblog.autodesk.com/wp-content/uploads/2021/03/How-Top-Retail-Hospitality-Owners-Are-Leveraging-Construction-Innovation-1060x596.jpg" alt="Image 6"/>
    <h3> Retailers</h3>
    <p> Retailers are businesses that sell products directly to consumers. They play an important role in the economy by creating jobs and providing access to a wide variety of goods and services</p>
  </div>
</div>
<Button type="primary" htmlType="submit" style={{ width: 120, height:50,fontSize: 14 ,alignItems:'center',color:'white'}} onClick={handleClick}>
          Register
        </Button>
        <br></br>  <br></br>
</div>

    </>
  )
}
export default Home
