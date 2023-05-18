import styled from "@emotion/styled";

export const Container = styled.div`

    position: relative;
    max-height: 400px;
    margin: 75px 0;

    @media(min-width: 1024px) {
        margin: 85px 0;
    }

    .swiper {
    width: 100%;
    max-height: 400px;
    }

    .swiper-slide {
    background-position: center;
    background-size: cover;
    }

    .swiper-slide img {
    display: block;
    width: 100%;
    }

    .swiper-pagination-bullet {
    height: 15px;
    width: 15px;
    background-color: white;
    }

    .swiper-pagination-bullet-active {
        background-color: aquamarine;
    }

`;