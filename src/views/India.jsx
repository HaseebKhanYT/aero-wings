import { Link } from "react-router-dom";
import CardsAccordian from "../components/CardsAccordian";

import picdomestic from "../assets/holidays/domestic/picdomestic.png";
import picdomestic1 from "../assets/holidays/domestic/picdomestic-1.png";
import picdomestic2 from "../assets/holidays/domestic/picdomestic-2.png";
import picdomestic3 from "../assets/holidays/domestic/picdomestic-3.png";
import picdomestic4 from "../assets/holidays/domestic/picdomestic-4.png";
import picdomestic5 from "../assets/holidays/domestic/picdomestic-5.png";
import picdomestic6 from "../assets/holidays/domestic/picdomestic-6.png";
import picdomestic7 from "../assets/holidays/domestic/picdomestic-7.png";
import picdomestic8 from "../assets/holidays/domestic/picdomestic-8.png";
import picdomestic9 from "../assets/holidays/domestic/picdomestic-9.png";
import picdomestic10 from "../assets/holidays/domestic/picdomestic-10.png";
import picdomestic11 from "../assets/holidays/domestic/picdomestic-11.png";
import picdomestic12 from "../assets/holidays/domestic/picdomestic-12.png";
import picdomestic13 from "../assets/holidays/domestic/picdomestic-13.png";
import picdomestic14 from "../assets/holidays/domestic/picdomestic-14.png";
import picdomestic15 from "../assets/holidays/domestic/picdomestic-15.png";
import picdomestic16 from "../assets/holidays/domestic/picdomestic-16.png";
import picdomestic17 from "../assets/holidays/domestic/picdomestic-17.png";
import picdomestic18 from "../assets/holidays/domestic/picdomestic-18.png";
import picdomestic19 from "../assets/holidays/domestic/picdomestic-19.png";
import picdomestic20 from "../assets/holidays/domestic/picdomestic-20.png";
import picdomestic21 from "../assets/holidays/domestic/picdomestic-21.png";
import picdomestic22 from "../assets/holidays/domestic/picdomestic-22.png";
import picdomestic23 from "../assets/holidays/domestic/picdomestic-23.png";
import picdomestic24 from "../assets/holidays/domestic/picdomestic-24.png";
import picdomestic25 from "../assets/holidays/domestic/picdomestic-25.png";
import picdomestic26 from "../assets/holidays/domestic/picdomestic-26.png";
import picdomestic27 from "../assets/holidays/domestic/picdomestic-27.png";
import picdomestic28 from "../assets/holidays/domestic/picdomestic-28.png";
import picdomestic29 from "../assets/holidays/domestic/picdomestic-29.png";
import picdomestic30 from "../assets/holidays/domestic/picdomestic-30.png";
import picdomestic31 from "../assets/holidays/domestic/picdomestic-31.png";
import picdomestic32 from "../assets/holidays/domestic/picdomestic-32.png";
import picdomestic33 from "../assets/holidays/domestic/picdomestic-33.png";
import picdomestic34 from "../assets/holidays/domestic/picdomestic-34.png";
import picdomestic35 from "../assets/holidays/domestic/picdomestic-35.png";
import picdomestic36 from "../assets/holidays/domestic/picdomestic-36.png";
import picdomestic37 from "../assets/holidays/domestic/picdomestic-37.png";
import picdomestic38 from "../assets/holidays/domestic/picdomestic-38.png";
import picdomestic39 from "../assets/holidays/domestic/picdomestic-39.png";
import picdomestic40 from "../assets/holidays/domestic/picdomestic-40.png";
import picdomestic41 from "../assets/holidays/domestic/picdomestic-41.png";
import picdomestic42 from "../assets/holidays/domestic/picdomestic-42.png";
import picdomestic43 from "../assets/holidays/domestic/picdomestic-43.png";
import picdomestic44 from "../assets/holidays/domestic/picdomestic-44.png";
import picdomestic45 from "../assets/holidays/domestic/picdomestic-45.png";
import picdomestic46 from "../assets/holidays/domestic/picdomestic-46.png";
import picdomestic47 from "../assets/holidays/domestic/picdomestic-47.png";
import picdomestic48 from "../assets/holidays/domestic/picdomestic-48.png";
import picdomestic49 from "../assets/holidays/domestic/picdomestic-49.png";
import picdomestic50 from "../assets/holidays/domestic/picdomestic-50.png";

import whatsappColor from "../assets/services/whatsappColor.svg";
import indiaHeaderImg from "../assets/images/india-header-img.svg";
import indiaFooterImg from "../assets/images/india-footer-img.svg";
import "../styles/India.scss";

const domesticHolidays = [
  {
    id: 1,
    title: "Hyderabad",
    imageUrl: picdomestic,
    imageUrl1: picdomestic1,
    imageUrl2: picdomestic2,
    description:"Hyderabad is a bustling metropolis located in southern India. It is known for its rich history, culture, and delicious cuisine. The city is home to some iconic landmarks such as the Charminar, Golconda Fort, and the Ramoji Film City. Hyderabad is also a hub for technology and business, making it a popular destination for corporate travelers. Visitors to Hyderabad can explore the city's rich heritage by visiting the Salar Jung Museum or indulge in some shopping at the famous Laad Bazaar. The city also offers a variety of delectable cuisine, ranging from the famous Hyderabadi biryani to the mouth-watering haleem."
  },
  {
    id: 2,
    title: "Delhi",
    imageUrl: picdomestic4,
    imageUrl1: picdomestic3,
    imageUrl2: picdomestic5,
    description:"Delhi, the capital city of India, is a vibrant and bustling metropolis. It is known for its rich history, culture, and diversity. The city is home to several iconic landmarks such as the Red Fort, Qutub Minar, and the India Gate. Delhi is also a hub for politics and commerce, making it a popular destination for corporate and leisure travelers alike. You can explore the city's rich heritage by visiting the National Museum or the various historical monuments, or indulge in some shopping at the bustling markets of Connaught Place and Chandni Chowk. The city also boasts a diverse culinary scene, offering a range of dishes from the spicy street food to the rich Mughlai cuisine."
  },
  {
    id: 3,
    title: "Agra",
    imageUrl: picdomestic8,
    imageUrl1: picdomestic7,
    imageUrl2: picdomestic6,
    description:"Agra is a city located in the northern state of Uttar Pradesh in India. It is famous for being home to one of the most iconic landmarks in the world, the Taj Mahal. This beautiful mausoleum was built by Mughal Emperor Shah Jahan in memory of his beloved wife, Mumtaz Mahal. Besides the Taj Mahal, Agra also has other magnificent monuments such as the Agra Fort and Fatehpur Sikri. Visitors can also explore the city's bustling markets and enjoy the local delicacies. Agra attracts visitors from all over the world and is a must-visit destination for anyone traveling to India. Contact Aerowings to book a tour and explore the wonders of Agra."
  },
  {
    id: 4,
    title: "Jaipur",
    imageUrl: picdomestic11,
    imageUrl1: picdomestic10,
    imageUrl2: picdomestic9,
    description:"Jaipur, also known as the Pink City, is a vibrant and colorful city located in the northern Indian state of Rajasthan. The city is famous for its rich history, culture, and architecture. Jaipur is home to some of the most beautiful and grand palaces, forts, and temples in India, such as the Hawa Mahal, City Palace, and Amer Fort. The city is also famous for its bustling bazaars, where visitors can shop for colorful textiles, traditional handicrafts, and jewelry. Jaipur is also known for its delicious cuisine, including the famous Rajasthani thali and the sweet delicacy, Ghewar. The city also hosts a number of cultural events and festivals throughout the year, including the Jaipur Literature Festival, Jaipur International Film Festival, and Teej Festival."
  },
  {
    id: 5,
    title: "Kashmir",
    imageUrl: picdomestic12,
    imageUrl1: picdomestic13,
    imageUrl2: picdomestic14,
    description:"Kashmir is a beautiful valley nestled in the Himalayan region of northern India. Known for its breathtaking scenic beauty, it is often referred to as the \"Paradise on Earth\". The valley is famous for its snow-capped mountains, pristine lakes, and verdant forests. Kashmir is also home to some iconic landmarks such as the Mughal Gardens, Pari Mahal, and the Shankaracharya Temple. Visitors to Kashmir can enjoy a shikara ride on the Dal Lake, take a leisurely walk through the scenic trails of Gulmarg or go trekking in the mountains of Pahalgam. The valley also boasts of a rich cultural heritage with its traditional handicrafts, music, and dance. Kashmiri cuisine is also a treat for food lovers, with delicacies such as Rogan Josh, Gushtaba, and Yakhni Pulao. Kashmir undoubtedly remains one of the most beautiful and captivating destinations in India."
  },
  {
    id: 6,
    title: "Shimla",
    imageUrl: picdomestic16,
    imageUrl1: picdomestic15,
    imageUrl2: picdomestic17,
    description:"Shimla is a beautiful hill station located in the northern state of Himachal Pradesh, India. It is also the capital of the state and is often referred to as the \"Queen of Hill Stations\". The city is situated at an elevation of 2,205 meters above sea level and offers stunning views of the surrounding mountains and valleys, and is known for its pleasant weather, picturesque mountains and valleys, and colonial architecture. Some of the popular tourist attractions in Shimla include the Ridge, Christ Church, Jakhoo Hill, and the Mall Road. Visitors can also take a ride on the Shimla-Kalka Railway, which is a UNESCO World Heritage Site. It also a popular destination for adventure sports such as trekking, skiing, and mountaineering. Shimla is also famous for its handicrafts and locally made woolen products, which make for great souvenirs to take back home."
  },
  {
    id: 7,
    title: "Manali",
    imageUrl: picdomestic20,
    imageUrl1: picdomestic19,
    imageUrl2: picdomestic18,
    description:"Manali is a a beautiful hill station located in the Indian state of Himachal Pradesh. Situated in the lap of Kullu valley and the Himalayas, Manali offers breathtaking views of snow-capped mountains, lush green valleys, and the gushing Beas River. It is a popular tourist destination, known for its scenic beauty, adventure sports, and vibrant culture. Visitors can enjoy adventure sports such as trekking, skiing, river rafting, paragliding, and mountain biking. Visitors can also enjoy a leisurely walk through the town's charming streets, lined with shops selling handmade crafts and souvenirs. The town is also famous for its hot springs, where visitors can unwind and relax, attracting visitors from all over the world. Visitors can also take part in some of the local festivals such as the Winter Carnival, Manali Summer Festival, and Hadimba Devi Fair, which are celebrated with great enthusiasm by the locals. Manali is truly a paradise for nature lovers, adventure seekers, and those looking to experience the rich culture and history of Himachal Pradesh."
  },
  {
    id: 8,
    title: "Goa",
    imageUrl: picdomestic23,
    imageUrl1: picdomestic22,
    imageUrl2: picdomestic21,
    description:"Goa is a state located in southwestern India, known for its pristine beaches, vibrant nightlife, and Portuguese heritage. The state was a Portuguese colony until 1961 and has since become a popular tourist destination. Visitors to Goa can enjoy a range of water sports such as parasailing, windsurfing, and jet-skiing, or relax on the sandy beaches and soak up the sun. The state is also home to several historical landmarks, such as the UNESCO World Heritage Site of Old Goa, which is known for its ancient churches and cathedrals. The Dudhsagar Falls, located in the state's interior, are a popular natural attraction, as well as the spice plantations where visitors can witness the harvesting and processing of a variety of spices. Goa is also known for its lively music scene and nightlife, with plenty of bars, clubs, and beach parties to keep visitors entertained. The local cuisine in Goa is a fusion of Indian and Portuguese influences, with seafood being a major highlight due to its coastal location."
  },
  {
    id: 9,
    title: "Jaisalmer",
    imageUrl: picdomestic24,
    imageUrl1: picdomestic25,
    imageUrl2: picdomestic26,
    description:"Jaisalmer is a city located in the Indian state of Rajasthan. It is known for its beautiful golden sandstone architecture, making it a popular destination for tourists. The city is often referred to as the \"Golden City of India.\" Jaisalmer is home to several landmarks, including the Jaisalmer Fort, a UNESCO World Heritage Site, and the Jain temples. Visitors to Jaisalmer can also explore the Sam Sand Dunes, where they can enjoy camel safaris, jeep safaris, and cultural performances. The city is also known for its vibrant bazaars, where visitors can find handicrafts, textiles, and other souvenirs. With its rich cultural heritage, stunning architecture, and unique attractions, Jaisalmer is a must-visit destination for anyone traveling to Rajasthan."
  },
  {
    id: 10,
    title: "Ranthambore",
    imageUrl: picdomestic28,
    imageUrl1: picdomestic27,
    imageUrl2: picdomestic29,
    description:"Ranthambore National Park is located in Sawai Madhopur district of Rajasthan, India. It is one of the largest and most famous national parks in Northern India. The park is known for its tigers, and visitors can take safari tours to see them in their natural habitat. Apart from tigers, the park is also home to a variety of other wildlife including leopards, sloth bears, hyenas, wild boars, and many species of birds. The park is spread over an area of 392 square kilometers. The park is surrounded by the Aravalli and Vindhya mountain ranges, making it a scenic destination. In addition to wildlife safaris, visitors to Ranthambore can also visit the Ranthambore Fort, which dates back to the 10th century and is a UNESCO World Heritage Site. Ranthambore National Park is a must-visit destination for wildlife enthusiasts and nature lovers. With its diverse wildlife and stunning natural beauty, it is a true gem of India's national parks."
  },
  {
    id: 11,
    title: "Fatehpur Sikri",
    imageUrl: picdomestic32,
    imageUrl1: picdomestic31,
    imageUrl2: picdomestic30,
    description:"Fatehpur Sikri is a city in the Agra district of Uttar Pradesh, India, which served as the capital of the Mughal Empire from 1571 to 1585. It was founded by the Mughal emperor Akbar and is one of the finest examples of Mughal architecture in India. The city is known for its exquisite monuments and stunning architecture, including the Buland Darwaza, Jama Masjid, Tomb of Salim Chishti, and the Panch Mahal. Visitors can also explore the Diwan-i-Khas, Diwan-i-Aam, and the Anup Talao. The city is also home to the beautiful Fatehpur Sikri Fort, which was built by Akbar and served as a military camp during his reign. The well-manicured gardens and water features in Fatehpur Sikri are also worth admiring. Additionally, the city is a popular spot for shopping, with several handicraft shops selling souvenirs, textiles, and jewelry. The fort offers breathtaking views of the surrounding countryside and is a must-visit for history buffs and architecture enthusiasts alike."
  },
  {
    id: 12,
    title: "Jim Corbett",
    imageUrl: picdomestic35,
    imageUrl1: picdomestic34,
    imageUrl2: picdomestic33,
    description:"Jim Corbett National Park is a popular destination located in the northern state of Uttarakhand in India. It is known for its rich biodiversity and is home to several species of flora and fauna, including the Bengal tiger, Indian elephants, sloth bears, and several species of birds. The park is named after the famous conservationist Jim Corbett, who played a significant role in the establishment of the park. Apart from wildlife safaris, visitors to Jim Corbett National Park can also indulge in adventure activities such as trekking, camping, and river rafting. The park also offers several accommodation options ranging from budget-friendly to luxury resorts, making it a popular destination for all types of travelers. The best time to visit the park is between November to June when the weather is pleasant and wildlife sightings are high."
  },
  {
    id: 13,
    title: "Leh",
    imageUrl: picdomestic36,
    imageUrl1: picdomestic37,
    imageUrl2: picdomestic38,
    description:"Leh is a picturesque town and the largest city of Ladakh, a union territory of India. It is nestled in the Himalayan region at an altitude of 3,500 meters above sea level, making it one of the highest elevated towns in the world. Leh is surrounded by snow-capped mountains and is known for its stunning natural beauty. The town is also famous for its Buddhist monasteries and is a popular destination for spiritual and adventure seekers alike. Visitors can explore the ancient monasteries like Hemis, Thiksey, and Shey or go on a trek in the surrounding mountains. The town also offers a unique blend of Tibetan and Ladakhi culture, reflected in its cuisine, handicrafts, and festivals. Leh is truly a paradise for nature lovers and those seeking an escape from the hustle and bustle of city life."
  },
  {
    id: 14,
    title: "Lakshadweep",
    imageUrl: picdomestic40,
    imageUrl1: picdomestic39,
    imageUrl2: picdomestic41,
    description:"Lakshadweep is a beautiful archipelago located off the southwestern coast of India in the Arabian Sea. It is a tropical paradise with crystal-clear blue waters, white sandy beaches, and diverse marine life. The islands offer a perfect retreat for travelers seeking a peaceful and secluded getaway. The untouched natural beauty of Lakshadweep makes it a popular destination for activities such as snorkeling, scuba diving, and kayaking. Visitors can explore the vibrant marine life by taking a glass-bottom boat ride or indulging in fishing. The islands are also home to a rich culture and history, with a blend of Indian, Arab, and African influences. The traditional dance form of Lakshadweep, known as Lava dance, is a must-see for cultural enthusiasts. Lakshadweep offers an unforgettable experience to visitors seeking an offbeat and serene destination."
  },
  {
    id: 15,
    title: "Kerala",
    imageUrl: picdomestic44,
    imageUrl1: picdomestic43,
    imageUrl2: picdomestic42,
    description:"Kerala, also known as \"God's Own Country,\" is a tropical paradise located in the southwestern region of India. It is known for its picturesque landscapes, serene backwaters, palm-lined beaches, and lush greenery. The state is a popular destination for tourists who are seeking a serene escape from the hustle and bustle of city life. One of the most popular destinations in Kerala is the hill station of Munnar, known for its rolling hills, tea plantations, and picturesque landscapes. Another must-visit location is the backwaters of Alleppey, where visitors can enjoy a leisurely boat ride and soak up the stunning natural beauty. Kerala is also known for its mouth-watering cuisine, which features a variety of seafood dishes, coconut-based curries, and traditional vegetarian fare. Overall, Kerala is a must-visit destination for those looking to relax and rejuvenate amidst natural beauty and traditional culture."
  },
  {
    id: 16,
    title: "Mumbai",
    imageUrl: picdomestic47,
    imageUrl1: picdomestic46,
    imageUrl2: picdomestic45,
    description:"Mumbai is the financial capital of India and one of the most populous cities in the world. The city is known for its bustling street markets, vibrant nightlife, and world-class cuisine. Mumbai is also home to several iconic landmarks such as the Gateway of India, the Chhatrapati Shivaji Terminus, and the famous Marine Drive. Visitors to Mumbai can explore the city's rich history and culture by visiting the Elephanta Caves, or the Prince of Wales Museum. Mumbai is also famous for its delicious street food, ranging from the famous vada pav to the mouth-watering pav bhaji. For a more upscale dining experience, the city boasts some of the best fine-dining restaurants in India. Mumbai is also a hub for the Hindi film industry, commonly referred to as Bollywood. Visitors can catch a movie at one of the many movie theaters or take a tour of a film studio to witness the behind-the-scenes magic of Indian cinema. With its vibrant culture and bustling energy, Mumbai is a must-visit destination for anyone traveling to India."
  },
  {
    id: 17,
    prefix: "Tsomgo ",
    title: "Sikkim",
    imageUrl: picdomestic48,
    imageUrl1: picdomestic49,
    imageUrl2: picdomestic50,
    description:"Tsomgo Lake, also known as Changu Lake, is a high-altitude glacial lake located in the Indian state of Sikkim. Situated at an altitude of 12,400 feet above sea level, the lake is a popular tourist destination, known for its scenic beauty and tranquil atmosphere. The lake is surrounded by majestic snow-capped mountains and lush green valleys, offering breathtaking views to visitors. It is also a sacred site for the local Sikkimese people, who consider the lake to be a holy site. Visitors can enjoy a variety of activities at the lake, such as boating and trekking. During the winter months, the lake freezes over, creating a beautiful and unique landscape. The surrounding hills are also a popular spot for trekking and hiking, offering stunning views of the lake and the surrounding mountain range. The area around the lake is also home to rare species of flora and fauna. Tsomgo Lake is a must-visit destination for anyone traveling to Sikkim, offering a unique and memorable experience of natural beauty, adventure, and spirituality."
  },
];

export default function India() {
  return (
    <>
      <div className="india">
        <div className="indiaHeaderImage">
          <img src={indiaHeaderImg} width={"100%"} alt="india image" />
        </div>
        <div className="indiaTitle my-5">
          Discover the Wonders of <span className="blue bold600">India</span>
        </div>
        <div className="description container my-5">
          Experience the beauty and diversity of India with our domestic tour
          packages. Whether you want to explore the breathtaking landscapes of
          the Himalayas, soak in the sun on the beaches of Goa, or immerse
          yourself in the rich culture and history of Rajasthan, we have the
          perfect itinerary for you. Our packages are designed to cater to every
          budget and preference, from luxury stays to budget-friendly options.
          Choose from our wide range of domestic tour packages and discover the
          magic of India. With our experienced tour guides and hassle-free
          travel arrangements, you can sit back and enjoy the journey while we
          take care of the rest.
        </div>
        <div className="indiaAccordian my-5">
          <CardsAccordian arr={domesticHolidays} />
        </div>
        <div className="buttonContainer my-5">
          <Link to="/contact" className="contactButton">
            <img src={whatsappColor} alt="whatsapp Logo" />
            Plan Unforgettable Weekends Now
          </Link>
        </div>
        <div className="buttonContainer my-5">
          <Link to="/foreign" className="shortcutButton">
            See International Destinations
          </Link>
        </div>
        <Link to="/hyderabad">
          <div className="foreignFooterImage my-5">
            <img src={indiaFooterImg} alt="" />
          </div>
        </Link>
      </div>
    </>
  );
}
