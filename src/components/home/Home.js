import React from 'react'
import './Home.css';
import Header from '../header/Header';
import Banner from '../banner/Banner';
import Card from '../card/Card';

function Home() {
    return (
        <div className="home">
            <Header />
            <Banner />
            <h2>Explore near and far from ordinary</h2>

            <div className="home__section wrap">
                <Card
                    src="https://a0.muscache.com/im/pictures/eb9c7c6a-ee33-414a-b1ba-14e8860d59b3.jpg?im_w=480"
                    title="Online Experience"
                    description="Unique activities we can do together led by a world of hosts"
                />

                <Card
                    src="https://a0.muscache.com/im/pictures/15159c9c-9cf1-400e-b809-4e13f286fa38.jpg?im_w=480"
                    title="Unique stays"
                    description="Spaces that are more than just a place to sleep" />
                <Card
                    src="https://a0.muscache.com/im/pictures/fdb46962-10c1-45fc-a228-d0b055411448.jpg?im_w=480"
                    title="Entire homes"
                    description="Comfortable private places, with room for friends or family." />
            </div>


            <div className="home__places">
                <h2>
                    Ever wondered about Pimpri?
            </h2>
                <h3>
                    Check into cozy stays in places you’ve been meaning to check out
            </h3>
            </div>

            <div className="home__section justify-start">
                <Card
                    src="https://a0.muscache.com/im/pictures/57cb6db1-4a7c-4357-9f94-6492cd0e0f98.jpg?aki_policy=x_large"
                    title="Tiny house - Nandivali"
                    description="Mulberry Lake view house"
                    price="₹1,970/ night" />
                <Card
                    src="https://a0.muscache.com/im/pictures/4ab123fa-d339-4731-9199-bffa3a2f24ce.jpg?aki_policy=x_large"
                    title="Entire bungalow - Valane"
                    description="Rustic Forest House under Private Mountain"
                    price="₹3,500/ night" />
                <Card
                    src="https://a0.muscache.com/im/pictures/08583539-01f9-4be4-b1b9-254a64bf0866.jpg?aki_policy=x_large"
                    title="Entire Apartment - Lavasa"
                    description="AirConditioned, Lakefront 1.5BHK @Lavasa Centre"
                    price="₹2,401/ night" />

                <Card
                    src="https://a0.muscache.com/im/pictures/57cb6db1-4a7c-4357-9f94-6492cd0e0f98.jpg?aki_policy=x_large"
                    title="Tiny house - Nandivali"
                    description="Mulberry Lake view house"
                    price="₹1,970/ night" />
                <Card
                    src="https://a0.muscache.com/im/pictures/4ab123fa-d339-4731-9199-bffa3a2f24ce.jpg?aki_policy=x_large"
                    title="Entire bungalow - Valane"
                    description="Rustic Forest House under Private Mountain"
                    price="₹3,500/ night" />
                <Card
                    src="https://a0.muscache.com/im/pictures/08583539-01f9-4be4-b1b9-254a64bf0866.jpg?aki_policy=x_large"
                    title="Entire Apartment - Lavasa"
                    description="AirConditioned, Lakefront 1.5BHK @Lavasa Centre"
                    price="₹2,401/ night" />
                <Card
                    src="https://a0.muscache.com/im/pictures/57cb6db1-4a7c-4357-9f94-6492cd0e0f98.jpg?aki_policy=x_large"
                    title="Tiny house - Nandivali"
                    description="Mulberry Lake view house"
                    price="₹1,970/ night" />
                <Card
                    src="https://a0.muscache.com/im/pictures/4ab123fa-d339-4731-9199-bffa3a2f24ce.jpg?aki_policy=x_large"
                    title="Entire bungalow - Valane"
                    description="Rustic Forest House under Private Mountain"
                    price="₹3,500/ night" />
                <Card
                    src="https://a0.muscache.com/im/pictures/08583539-01f9-4be4-b1b9-254a64bf0866.jpg?aki_policy=x_large"
                    title="Entire Apartment - Lavasa"
                    description="AirConditioned, Lakefront 1.5BHK @Lavasa Centre"
                    price="₹2,401/ night" />
            </div>
        </div>
    )
}

export default Home
