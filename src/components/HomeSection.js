import React from 'react';
import styled from 'styled-components';
import HomeImg from '../assets/images/home-bg.jpg';
import Button from './Button';
import PText from './PText';

const HomeStyles = styled.div`
  .home {
    height: 100vh;
    min-height: 1000px;
    width: 100%;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
  }
  .home__heading {
    font-size: 2rem;
    margin-bottom: -4rem;
    position: relative;
    /* top: 50%;
    left: 50%;
    position: absolute;
    transform: translate(-50%, -50%);
    z-index: 2; */
    span {
      display: inline-block;
      width: 100%;
    }
    .home__name {
      font-family: 'Montserrat SemiBold';
      font-size: 7rem;
      color: var(--white);
    }
  }
  .home__img {
    max-width: 900px;
    width: 100%;
    height: 600px;
    margin: 0 auto;
    border: 2px solid var(--light);
    /* filter: grayscale(100%); */
    /* opacity: 0.5; */
  }
  .home__info {
    margin-top: -19rem;
    /* left: 50%;
    position: absolute;
    transform: translate(-50%, -50%);
    z-index: 2;
    background-color: rgba(255, 250, 255, 0.8);
    border-radius: 15px;
    padding: 5px;
    color: var(--light);
    font-family: 'Montserrat Bold'; */
  }
  /* .home__social,
  .home__scrollDown {
    display: flex;
    flex-direction: column;
    gap: 2rem;
    position: absolute;

    bottom: 20px;
    width: 50px;
  }
  .home__social {
    left: 50px;
  }
  .home__scrollDown {
    right: 50px;
  }

  .home__social__indicator,
  .home__scrollDown {
    width: 50px;
    p {
      font-size: 1.6rem;
      transform: translateY(-70px) rotate(90deg);
      letter-spacing: 0.7rem;
      text-transform: uppercase;
    }
    img {
      max-height: 45px;
      width: 16px;
      margin: 0 auto;
      object-fit: contain;
    }
  }
  .home__scrollDown {
    img {
      max-height: 70px;
    }
  }

  .home__social__text {
    ul {
      li {
        margin-bottom: 1rem;
        a {
          display: inline-block;
          font-size: 1.6rem;
          transform: rotate(-90deg);
          letter-spacing: 5px;
          margin-bottom: 2rem;
        }
      }
    }
  } */

  @media only screen and (max-width: 768px) {
    .home {
      min-height: 755px;
    }
    .home__heading {
      font-size: 1.4rem;
      /* margin-top: -15em; */
      margin-bottom: -2rem;
      .home__name {
        font-size: 4.5rem;
      }
    }
    .home__img {
      height: 300px;
    }
    .home__info {
      margin-top: 3em;
    }
    .home__social {
      left: 0px;
      bottom: -15%;
      width: 20px;
      .home__social__indicator {
        width: 20px;
        p {
          font-size: 1.2rem;
        }
        img {
          max-height: 22px;
        }
      }
      .home__social__text {
        ul {
          li {
            a {
              font-size: 1.2rem;
              margin-bottom: 1rem;
            }
          }
        }
      }
    }
    .home__scrollDown {
      right: 0;
      width: 20px;
      gap: 1rem;
      p {
        font-size: 1.3rem;
      }
    }
  }
`;

export default function HomeSection() {
  return (
    <HomeStyles>
      <div className="home">
        <div className="container">
          <h1 className="home__heading">
            <span>Hello, This is</span>
            <span className="home__name">Nancy Jain</span>
          </h1>
          <div className="home__img">
            <img src={HomeImg} alt="" />
          </div>
          <div className="home__info">
            <PText>
              Meticulous web developer with over 2 years of Front-end experience
              and passion for responsive website design and a firm believer in
              the mobile-first approach.
            </PText>
            <Button btnText="See my projects" btnLink="/projects" />
          </div>
        </div>
      </div>
    </HomeStyles>
  );
}
