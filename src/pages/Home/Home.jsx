import { Container } from 'components/Layout/Layout.styled';
import React from 'react';
import { Title, Subtitle, Texte, ImagesRow, Image } from './Home.styled';
import image1 from "../../images/image1.jpg";
import image2 from "../../images/image2.jpg";
import image3 from "../../images/image3.jpg";
import image4 from "../../images/image4.jpg";

const Home = () => {
  return (
    <Container>
      <Title>Welcome to CampUkraine</Title>
      <Subtitle>Discover the Beauty of Ukraine with Our Campers</Subtitle>
      <Texte>
        At CampUkraine, we are passionate about helping you create unforgettable
        adventures across the beautiful landscapes of Ukraine. Our mission is to
        provide you with the freedom to explore the hidden gems of this
        picturesque country at your own pace and in the comfort of our premium
        campers.
      </Texte>
      <Texte>
        Embark on a journey of discovery as you traverse through lush green
        forests, pristine lakeshores, and majestic mountains. Whether you're
        seeking a tranquil retreat in nature or an exhilarating outdoor
        escapade, our fleet of meticulously maintained campers is equipped to
        meet your every need.
      </Texte>
      <Texte>
        With CampUkraine, your travel experience is not just about reaching your
        destination; it's about the memories you make along the way. Let us be
        your trusted companion as you uncover the unparalleled beauty and rich
        cultural heritage that Ukraine has to offer.
          </Texte>
          <ImagesRow>
        <Image src={image1} alt="Image 1" />
              <Image src={image2} alt="Image 2" />
        <Image src={image3} alt="Image 3" />
        <Image src={image4} alt="Image 4" />
      </ImagesRow>
    </Container>
  );
};
export default Home;
