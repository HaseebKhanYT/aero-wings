import { useState } from "react";
import HolidayCarousel from "../components/HolidayCarousel";

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
import picdomestic21 from "../assets/holidays/domestic/picdomestic-21.png";
import picdomestic22 from "../assets/holidays/domestic/picdomestic-22.png";
import picdomestic23 from "../assets/holidays/domestic/picdomestic-23.png";
import picdomestic36 from "../assets/holidays/domestic/picdomestic-36.png";
import picdomestic37 from "../assets/holidays/domestic/picdomestic-37.png";
import picdomestic38 from "../assets/holidays/domestic/picdomestic-38.png";
import picdomestic39 from "../assets/holidays/domestic/picdomestic-39.png";
import picdomestic40 from "../assets/holidays/domestic/picdomestic-40.png";
import picdomestic41 from "../assets/holidays/domestic/picdomestic-41.png";
import picdomestic42 from "../assets/holidays/domestic/picdomestic-42.png";
import picdomestic43 from "../assets/holidays/domestic/picdomestic-43.png";
import picdomestic44 from "../assets/holidays/domestic/picdomestic-44.png";
import picdomestic48 from "../assets/holidays/domestic/picdomestic-48.png";
import picdomestic49 from "../assets/holidays/domestic/picdomestic-49.png";
import picdomestic50 from "../assets/holidays/domestic/picdomestic-50.png";

import picIntl from "../assets/holidays/international/picIntl.png";
import picIntl1 from "../assets/holidays/international/picIntl-1.png";
import picIntl2 from "../assets/holidays/international/picIntl-2.png";
import picIntl3 from "../assets/holidays/international/picIntl-3.png";
import picIntl4 from "../assets/holidays/international/picIntl-4.png";
import picIntl5 from "../assets/holidays/international/picIntl-5.png";
import picIntl6 from "../assets/holidays/international/picIntl-6.png";
import picIntl7 from "../assets/holidays/international/picIntl-7.png";
import picIntl8 from "../assets/holidays/international/picIntl-8.png";
import picIntl9 from "../assets/holidays/international/picIntl-9.png";
import picIntl10 from "../assets/holidays/international/picIntl-10.png";
import picIntl11 from "../assets/holidays/international/picIntl-11.png";
import picIntl12 from "../assets/holidays/international/picIntl-12.png";
import picIntl13 from "../assets/holidays/international/picIntl-13.png";
import picIntl14 from "../assets/holidays/international/picIntl-14.png";
import picIntl15 from "../assets/holidays/international/picIntl-15.png";
import picIntl16 from "../assets/holidays/international/picIntl-16.png";
import picIntl17 from "../assets/holidays/international/picIntl-17.png";
import picIntl18 from "../assets/holidays/international/picIntl-18.png";
import picIntl19 from "../assets/holidays/international/picIntl-19.png";
import picIntl20 from "../assets/holidays/international/picIntl-20.png";

import picIntl24 from "../assets/holidays/international/picIntl-24.png";
import picIntl25 from "../assets/holidays/international/picIntl-25.png";
import picIntl26 from "../assets/holidays/international/picIntl-26.png";

const domesticHolidays = [
  {
    id: 1,
    title: "Hyderabad",
    imageUrl: picdomestic,
    imageUrl1: picdomestic1,
    imageUrl2: picdomestic2,
    description:
      "Hyderabad is a bustling metropolis located in southern India. It is known for its rich history, culture, and delicious cuisine. The city is home to some iconic landmarks such as the Charminar, Golconda Fort, and the Ramoji Film City. Hyderabad is also a hub for technology and business, making it a popular destination for corporate travelers. Visitors to Hyderabad can explore the city's rich heritage by visiting the Salar Jung Museum or indulge in some shopping at the famous Laad Bazaar. The city also offers a variety of delectable cuisine, ranging from the famous Hyderabadi biryani to the mouth-watering haleem.",
  },
  {
    id: 2,
    title: "Delhi",
    imageUrl: picdomestic4,
    imageUrl1: picdomestic3,
    imageUrl2: picdomestic5,
    description:
      "Delhi, the capital city of India, is a vibrant and bustling metropolis. It is known for its rich history, culture, and diversity. The city is home to several iconic landmarks such as the Red Fort, Qutub Minar, and the India Gate. Delhi is also a hub for politics and commerce, making it a popular destination for corporate and leisure travelers alike. You can explore the city's rich heritage by visiting the National Museum or the various historical monuments, or indulge in some shopping at the bustling markets of Connaught Place and Chandni Chowk. The city also boasts a diverse culinary scene, offering a range of dishes from the spicy street food to the rich Mughlai cuisine.",
  },
  {
    id: 3,
    title: "Agra",
    imageUrl: picdomestic8,
    imageUrl1: picdomestic7,
    imageUrl2: picdomestic6,
    description:
      "Agra is a city located in the northern state of Uttar Pradesh in India. It is famous for being home to one of the most iconic landmarks in the world, the Taj Mahal. This beautiful mausoleum was built by Mughal Emperor Shah Jahan in memory of his beloved wife, Mumtaz Mahal. Besides the Taj Mahal, Agra also has other magnificent monuments such as the Agra Fort and Fatehpur Sikri. Visitors can also explore the city's bustling markets and enjoy the local delicacies. Agra attracts visitors from all over the world and is a must-visit destination for anyone traveling to India. Contact Aerowings to book a tour and explore the wonders of Agra.",
  },
  {
    id: 4,
    prefix: "Tsomgo ",
    title: "Sikkim",
    imageUrl: picdomestic48,
    imageUrl1: picdomestic49,
    imageUrl2: picdomestic50,
    description:
      "Tsomgo Lake, also known as Changu Lake, is a high-altitude glacial lake located in the Indian state of Sikkim. Situated at an altitude of 12,400 feet above sea level, the lake is a popular tourist destination, known for its scenic beauty and tranquil atmosphere. The lake is surrounded by majestic snow-capped mountains and lush green valleys, offering breathtaking views to visitors. It is also a sacred site for the local Sikkimese people, who consider the lake to be a holy site. Visitors can enjoy a variety of activities at the lake, such as boating and trekking. During the winter months, the lake freezes over, creating a beautiful and unique landscape. The surrounding hills are also a popular spot for trekking and hiking, offering stunning views of the lake and the surrounding mountain range. The area around the lake is also home to rare species of flora and fauna. Tsomgo Lake is a must-visit destination for anyone traveling to Sikkim, offering a unique and memorable experience of natural beauty, adventure, and spirituality.",
  },
  {
    id: 5,
    title: "Kashmir",
    imageUrl: picdomestic12,
    imageUrl1: picdomestic13,
    imageUrl2: picdomestic14,
    description:
      'Kashmir is a beautiful valley nestled in the Himalayan region of northern India. Known for its breathtaking scenic beauty, it is often referred to as the "Paradise on Earth". The valley is famous for its snow-capped mountains, pristine lakes, and verdant forests. Kashmir is also home to some iconic landmarks such as the Mughal Gardens, Pari Mahal, and the Shankaracharya Temple. Visitors to Kashmir can enjoy a shikara ride on the Dal Lake, take a leisurely walk through the scenic trails of Gulmarg or go trekking in the mountains of Pahalgam. The valley also boasts of a rich cultural heritage with its traditional handicrafts, music, and dance. Kashmiri cuisine is also a treat for food lovers, with delicacies such as Rogan Josh, Gushtaba, and Yakhni Pulao. Kashmir undoubtedly remains one of the most beautiful and captivating destinations in India.',
  },
  {
    id: 6,
    title: "Shimla",
    imageUrl: picdomestic16,
    imageUrl1: picdomestic15,
    imageUrl2: picdomestic17,
    description:
      'Shimla is a beautiful hill station located in the northern state of Himachal Pradesh, India. It is also the capital of the state and is often referred to as the "Queen of Hill Stations". The city is situated at an elevation of 2,205 meters above sea level and offers stunning views of the surrounding mountains and valleys, and is known for its pleasant weather, picturesque mountains and valleys, and colonial architecture. Some of the popular tourist attractions in Shimla include the Ridge, Christ Church, Jakhoo Hill, and the Mall Road. Visitors can also take a ride on the Shimla-Kalka Railway, which is a UNESCO World Heritage Site. It also a popular destination for adventure sports such as trekking, skiing, and mountaineering. Shimla is also famous for its handicrafts and locally made woolen products, which make for great souvenirs to take back home.',
  },
  {
    id: 7,
    title: "Jaipur",
    imageUrl: picdomestic11,
    imageUrl1: picdomestic10,
    imageUrl2: picdomestic9,
    description:
      "Jaipur, also known as the Pink City, is a vibrant and colorful city located in the northern Indian state of Rajasthan. The city is famous for its rich history, culture, and architecture. Jaipur is home to some of the most beautiful and grand palaces, forts, and temples in India, such as the Hawa Mahal, City Palace, and Amer Fort. The city is also famous for its bustling bazaars, where visitors can shop for colorful textiles, traditional handicrafts, and jewelry. Jaipur is also known for its delicious cuisine, including the famous Rajasthani thali and the sweet delicacy, Ghewar. The city also hosts a number of cultural events and festivals throughout the year, including the Jaipur Literature Festival, Jaipur International Film Festival, and Teej Festival.",
  },
  {
    id: 8,
    title: "Goa",
    imageUrl: picdomestic23,
    imageUrl1: picdomestic22,
    imageUrl2: picdomestic21,
    description:
      "Goa is a state located in southwestern India, known for its pristine beaches, vibrant nightlife, and Portuguese heritage. The state was a Portuguese colony until 1961 and has since become a popular tourist destination. Visitors to Goa can enjoy a range of water sports such as parasailing, windsurfing, and jet-skiing, or relax on the sandy beaches and soak up the sun. The state is also home to several historical landmarks, such as the UNESCO World Heritage Site of Old Goa, which is known for its ancient churches and cathedrals. The Dudhsagar Falls, located in the state's interior, are a popular natural attraction, as well as the spice plantations where visitors can witness the harvesting and processing of a variety of spices. Goa is also known for its lively music scene and nightlife, with plenty of bars, clubs, and beach parties to keep visitors entertained. The local cuisine in Goa is a fusion of Indian and Portuguese influences, with seafood being a major highlight due to its coastal location.",
  },
  {
    id: 9,
    title: "Leh",
    imageUrl: picdomestic36,
    imageUrl1: picdomestic37,
    imageUrl2: picdomestic38,
    description:
      "Leh is a picturesque town and the largest city of Ladakh, a union territory of India. It is nestled in the Himalayan region at an altitude of 3,500 meters above sea level, making it one of the highest elevated towns in the world. Leh is surrounded by snow-capped mountains and is known for its stunning natural beauty. The town is also famous for its Buddhist monasteries and is a popular destination for spiritual and adventure seekers alike. Visitors can explore the ancient monasteries like Hemis, Thiksey, and Shey or go on a trek in the surrounding mountains. The town also offers a unique blend of Tibetan and Ladakhi culture, reflected in its cuisine, handicrafts, and festivals. Leh is truly a paradise for nature lovers and those seeking an escape from the hustle and bustle of city life.",
  },
  {
    id: 10,
    title: "Lakshadweep",
    imageUrl: picdomestic40,
    imageUrl1: picdomestic39,
    imageUrl2: picdomestic41,
    description:
      "Lakshadweep is a beautiful archipelago located off the southwestern coast of India in the Arabian Sea. It is a tropical paradise with crystal-clear blue waters, white sandy beaches, and diverse marine life. The islands offer a perfect retreat for travelers seeking a peaceful and secluded getaway. The untouched natural beauty of Lakshadweep makes it a popular destination for activities such as snorkeling, scuba diving, and kayaking. Visitors can explore the vibrant marine life by taking a glass-bottom boat ride or indulging in fishing. The islands are also home to a rich culture and history, with a blend of Indian, Arab, and African influences. The traditional dance form of Lakshadweep, known as Lava dance, is a must-see for cultural enthusiasts. Lakshadweep offers an unforgettable experience to visitors seeking an offbeat and serene destination.",
  },
  {
    id: 11,
    title: "Kerala",
    imageUrl: picdomestic44,
    imageUrl1: picdomestic43,
    imageUrl2: picdomestic42,
    description:
      'Kerala, also known as "God\'s Own Country," is a tropical paradise located in the southwestern region of India. It is known for its picturesque landscapes, serene backwaters, palm-lined beaches, and lush greenery. The state is a popular destination for tourists who are seeking a serene escape from the hustle and bustle of city life. One of the most popular destinations in Kerala is the hill station of Munnar, known for its rolling hills, tea plantations, and picturesque landscapes. Another must-visit location is the backwaters of Alleppey, where visitors can enjoy a leisurely boat ride and soak up the stunning natural beauty. Kerala is also known for its mouth-watering cuisine, which features a variety of seafood dishes, coconut-based curries, and traditional vegetarian fare. Overall, Kerala is a must-visit destination for those looking to relax and rejuvenate amidst natural beauty and traditional culture.',
  },
];

const internationalHolidays = [
  {
    id: 1,
    prefix: "Bali ",
    title: "Indonesia",
    imageUrl: picIntl,
    imageUrl1: picIntl1,
    imageUrl2: picIntl2,
    description:
      "Indonesia is a country located in Southeast Asia, consisting of over 17,000 islands, making it the largest archipelago in the world. It is home to a diverse range of cultures, languages, and religions, and is renowned for its natural beauty, including stunning beaches, towering volcanoes, and lush tropical forests. Visitors to Indonesia can enjoy a wide range of activities, from surfing and scuba diving in crystal clear waters to exploring ancient temples and historic landmarks. The country is famous for its cuisine, with a variety of dishes featuring spicy flavors, fresh seafood, and exotic fruits. Some of the top destinations in Indonesia include Bali, with its beautiful beaches and vibrant nightlife, Yogyakarta, home to the ancient Borobudur temple, and the capital city of Jakarta, a bustling metropolis with a rich history and culture. Indonesia offers something for everyone, whether you are seeking adventure, relaxation, or a cultural experience.",
  },
  {
    id: 2,
    title: "Singapore",
    imageUrl: picIntl4,
    imageUrl1: picIntl3,
    imageUrl2: picIntl5,
    description:
      "Singapore is a small island nation located in Southeast Asia, known for its bustling city life, multicultural society, and iconic landmarks. The city-state boasts a stunning skyline, with towering buildings like Marina Bay Sands and the Singapore Flyer. Visitors can explore the city's diverse neighborhoods such as Chinatown, Little India, and Arab Street, each offering their unique charm and cultural experiences. Singapore is also famous for its culinary scene, with a plethora of hawker centers and Michelin-starred restaurants serving up local and international cuisine. For nature lovers, the city offers beautiful gardens and parks, including the futuristic Gardens by the Bay and the lush Botanic Gardens, a UNESCO World Heritage site. Visitors can also enjoy world-class attractions such as Universal Studios Singapore, the S.E.A. Aquarium, and the Singapore Zoo. With its efficient transportation system and modern amenities, Singapore is a must-visit destination for anyone traveling to Southeast Asia.",
  },
  {
    id: 3,
    title: "Thailand",
    imageUrl: picIntl8,
    imageUrl1: picIntl7,
    imageUrl2: picIntl6,
    description:
      "Thailand is a Southeast Asian country known for its beautiful beaches, ancient temples, vibrant culture, and delicious cuisine. Its capital city, Bangkok, is a bustling metropolis with a vibrant nightlife, street markets, and impressive temples like Wat Phra Kaew and the Grand Palace. Thailand is also famous for its stunning beaches, with popular destinations like Phuket, Krabi, and Koh Samui offering crystal-clear waters and white sand beaches. For adventure seekers, the northern region of Thailand boasts of Chiang Mai, a cultural hub, where visitors can explore ancient temples, hike through lush forests, and learn about traditional Thai craftsmanship. Visitors to Thailand can also indulge in the country's delectable cuisine. The country's unique blend of history, culture, nature, and food makes it a must-visit destination for any traveler.",
  },
  {
    id: 4,
    title: "Maldives",
    imageUrl: picIntl11,
    imageUrl1: picIntl10,
    imageUrl2: picIntl9,
    description:
      "Maldives is a stunning tropical paradise located in the Indian Ocean, made up of 26 atolls comprising more than 1,000 coral islands. It is known for its crystal-clear turquoise waters, white-sand beaches, and luxurious overwater bungalows. The Maldives is a popular destination for honeymooners, scuba divers, and those seeking a peaceful retreat. Visitors can enjoy a range of activities including snorkeling, diving, island hopping, fishing, and water sports. The Maldives is also home to a diverse marine ecosystem, with a wide variety of coral reefs and marine life, including sea turtles, whale sharks, and manta rays. Visitors can also indulge in a spa treatment at one of the many world-class spas, or simply relax on a pristine beach while soaking up the tropical sun. The Maldives is truly a haven for those seeking relaxation, adventure, and natural beauty.",
  },
  {
    id: 5,
    title: "Russia",
    imageUrl: picIntl24,
    imageUrl1: picIntl25,
    imageUrl2: picIntl26,
    description:
      "Russia is the largest country in the world, located in both Europe and Asia. It is known for its rich history, diverse culture, and stunning natural beauty. From the iconic architecture of Moscow's Red Square and St. Petersburg's Hermitage Museum, to the rugged terrain of Siberia and the serene waters of Lake Baikal, there is something for everyone in Russia. Visitors can explore the world-renowned landmarks such as the Kremlin and the iconic St. Basil's Cathedral, enjoy the vibrant nightlife of Moscow and St. Petersburg, or take in the breathtaking scenery of the Russian countryside. Russian cuisine is also a unique experience, with traditional dishes like borscht, pelmeni, and caviar. Russia is truly a destination worth exploring, with a fascinating mix of history, culture, and natural wonders.",
  },
  {
    id: 6,
    title: "United States",
    imageUrl: picIntl12,
    imageUrl1: picIntl13,
    imageUrl2: picIntl14,
    description:
      "A diverse country located in North America, the USA is the world's third-largest country by area and the third most populous country. It is known for its vibrant culture, diversity, and stunning landscapes. From the towering skyscrapers of New York City to the beaches of California, the country offers a wide range of attractions for visitors. The USA is also home to numerous national parks and natural wonders, including the Grand Canyon, Yellowstone National Park, and Niagara Falls. In addition to its natural beauty, the USA is also known for its entertainment industry, which includes Hollywood movies and popular TV shows. The country is also a hub for higher education, with many top universities and research centers located across the country. Visitors can indulge in world-class amenities, such as spas, high-end hotels and resorts, fine dining restaurants, and exclusive access to private beaches and clubs. The USA is a must-visit destination for anyone seeking an unforgettable travel experience.",
  },
  {
    id: 7,
    title: "United Kingdom",
    imageUrl: picIntl16,
    imageUrl1: picIntl15,
    imageUrl2: picIntl17,
    description:
      "Composed of four countries; England, Scotland, Wales, and Northern Ireland, the UK is home to many iconic landmarks and tourist attractions, such as Buckingham Palace, the Tower of London, Stonehenge, historic castles, the famous Giant's Causeway, and the British Museum. It is also known for its vibrant culture, with famous artists, musicians, and writers such as The Beatles, Adele, and J.K. Rowling hailing from the UK. Visitors to the UK can enjoy exploring its many cities, each with its unique charm and character, from the bustling capital city of London to the historic city of Edinburgh in Scotland. The UK is also famous for its picturesque countryside, with areas such as the Lake District and the Scottish Highlands attracting visitors from around the world. London, the capital of England and the UK, is a must-visit city for any traveler. It is home to some of the world's most iconic landmarks and is also famous for its vibrant nightlife, shopping, and cuisine.",
  },
  {
    id: 8,
    title: "France",
    imageUrl: picIntl20,
    imageUrl1: picIntl19,
    imageUrl2: picIntl18,
    description:
      'France is a country located in Western Europe, known for its stunning cities, picturesque countryside, world-famous cuisine, and rich cultural heritage. Paris, the capital city of France, is known as the "City of Light" and is one of the most romantic cities in the world. Visitors can take a stroll along the Seine River, visit iconic landmarks like the Eiffel Tower, the Louvre Museum, and Notre-Dame Cathedral. The city is also renowned for its cuisine, fashion, and art scene. France is also home to several other world-famous cities such as Nice, Cannes, Marseille, Lyon, and Toulouse, each with its own unique charm and attractions. The French Riviera is a popular coastal region in the south of France, known for its glamorous resorts, beaches, and nightlife. France also boasts a rich history and heritage, evident in its ancient castles, cathedrals, and museums. From the Palace of Versailles to the D-Day landing beaches, France has a lot to offer history buffs and those interested in World War II.',
  },
];

export default function HomeHolidays() {
  const [focusHoliday, setFocusHoliday] = useState(0);

  function handleClick(e) {
    setFocusHoliday(e);
  }
  return (
    <>
      <div className="homeHolidaysContainer container my-5">
        <div className="domesticHolidays">
          <div className="homeHolidayTitle my-3">
            Experience a Memorable Staycation with Our{" "}
            <span className="blue poppins600"> Domestic</span> Getaways
          </div>
          <div className="holidayCards container my-4">
            <HolidayCarousel
              arr={domesticHolidays}
              onClick={handleClick}
              focus={focusHoliday}
            />
          </div>
        </div>
        <div className="internationalHolidays">
          <div className="homeHolidayTitle my-3">
            Discover the Best of the World with Our{" "}
            <span className="red poppins600">International</span> Tours
          </div>
          <div className="holidayCards container my-4">
            <HolidayCarousel
              arr={internationalHolidays}
              onClick={handleClick}
              focus={focusHoliday}
            />
          </div>
        </div>
      </div>
    </>
  );
}
