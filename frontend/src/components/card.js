import React from 'react'
import NGO from '../images/NGO.png'
import breakfast from '../images/breakfast.jpg'
import FoodWaste from '../images/foodwaste.jpg'
import Food from '../images/food.jpg'

export default function Card() {
  return (
    <div>
      <div class="row row-cols-1 row-cols-md-2 g-4" style={{padding: '20px'}}>
        <div class="col" style={{width: '300px'}}>
          <div class="card" >
            <img src={NGO} class="card-img-top" alt="..."/>
            <div class="card-body">
              <h5 class="card-title">NGO FEEDING PROGRAM</h5>
              <p class="card-text">The NGOs have appeared as the savior of countless numbers of people without food, clothing, education and basic health facilities. While fighting for their key objectives, the organizations are also required to put a lot of effort to meet their day-to-day necessities like food, shelter and other needs which may force them to leave their main objectives aside.</p>
            </div>
          </div>
        </div>
        <div class="col" >
          <div class="card">
            <img src={breakfast} class="card-img-top" alt="..."/>
            <div class="card-body">
              <h5 class="card-title">BREAKFAST FEEDING PROGRAM FOR SCHOOL CHILDREN</h5>
              <p class="card-text">Research suggests that a well-nourished child who starts the day with breakfast is more likely to be at school, be a better learner, and be willing to participate in the classroom. Unfortunately, many families face obstacles in providing a healthy morning meal each day. Tight budgets for low-income families and busy morning schedules may force many students to arrive hungry at school.</p>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="card">
            <img src={FoodWaste} class="card-img-top" alt="..."/>
            <div class="card-body">
              <h5 class="card-title">FOOD RESCUE PROGRAM</h5>
              <p class="card-text">In the 2020 Global Hunger Index, India ranks 94th out of the 107 countries with sufficient data to calculate 2020 GHI scores. With a score of 27.2, India has a level of hunger that is serious. According to FAO estimates in ‘The State of Food Security and Nutrition in the World, 2020 report,189.2 million people are undernourished in Indiai,e, 14% of our population. The report also says, 51.4% of women in reproductive age between 15 to 49 years are anaemic</p>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="card">
            <img src={Food} class="card-img-top" alt="..."/>
            <div class="card-body">
              <h5 class="card-title">FOOD RELIEF PROGRAM</h5>
              <p class="card-text">Natural disasters such as floods, earthquakes, and pandemics are unavoidable or an uncontrollable part of human life and usually to an extent cannot be predicted or controlled. Also, they often affect the food supply chain in the area by various means resulting in food insecurity for the victims. Hence a distribution program for emergency food is a vital part of any disaster relief response.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
