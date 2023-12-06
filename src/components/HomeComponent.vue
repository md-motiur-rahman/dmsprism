<template>
  <NavBar />
  <div class="dms__home" id="home">
    <div class="dms__home-content gradient__bg">
      <h1 class="gradient__text">
        Trust DMSPrism<br />Keep hiring With Confidence
      </h1>
      <p>
        At DMSPrism We provide top-notch IT talent to businesses looking to
        enhance their digital footprint. We have a proven track record of
        delivering exceptional results for our clients. Our commitment to
        transparency and honesty sets us apart in the IT recruitment industry.
        We only work with the most highly skilled and professional IT
        candidates, ensuring the quality of our placements. Our recruitment
        specialists take the time to understand your business and its unique
        needs, ensuring a successful placement every time. We are dedicated to
        building long-lasting partnerships with our clients, based on mutual
        trust and respect.
      </p>
      <div class="dms__home-content__input">
        <input type="email" placeholder="Enter your email" />
        <button type="button">Subscribe</button>
      </div>
    </div>
  </div>
  <ServicdComponent />
  <WhyUs />
  <AwardsComponent />
  <TeamComponent />
  <ContactComponent />
  <FooterComponent />
</template>
<script>
import NavBar from "./NavBar.vue";
import ServicdComponent from "./ServicesComponent.vue";
import WhyUs from "./WhyUs.vue";
import AwardsComponent from "./AwardsComponent.vue";
import TeamComponent from "./TeamComponent.vue";
import ContactComponent from "./ContactComponent.vue";
import FooterComponent from "./FooterComponent.vue";
export default {
  name: "HomeComponent",
  components: {
    NavBar,
    ServicdComponent,
    WhyUs,
    AwardsComponent,
    TeamComponent,
    ContactComponent,
    FooterComponent
  },
};
</script>
<style>
.dms__home {
  background-image: url("../assets/images/slider-bg-1.jpg");
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.dms__home-content {
  font-family: var(--font-family);
  display: flex;
  flex-direction: column;
  width: 70%;
  padding: 2% 3% 2% 3%;
  border-radius: 10px;
}
.dms__home-content h1 {
  font-family: var(--font-family);
  font-weight: 800;
  font-size: 62px;
  line-height: 75px;
  letter-spacing: -0.04em;
}
.dms__home-content p {
  font-family: var(--font-family);
  font-weight: 400;
  font-size: 20px;
  line-height: 28px;
  color: var(--color-text);

  margin-top: 1.5rem;
}
.dms__home-content__input {
  width: 100%;
  margin: 2rem 0 1rem;
  display: flex;
  justify-content: center;
  font-display: row;
}
.dms__home-content__input input {
  flex: 0.6;
  width: 100%;
  min-height: 50px;
  font-family: var(--font-family);
  font-weight: 400;
  font-size: 20px;
  line-height: 28px;
  background: var(--color-footer);
  border: 2px solid var(--color-footer);
  padding: 0 1rem;
  outline: none;
  color: #fff;

  border-top-left-radius: 5px;
  border-bottom-left-radius: 5px;
}
.dms__home-content__input button {
  flex: 0.2;
  width: 100%;
  min-height: 50px;
  font-family: var(--font-family);
  font-weight: 400;
  font-size: 20px;
  line-height: 28px;
  background: #ff4820;
  border: 2px solid #ff4820;
  padding: 0 1rem;
  color: #fff;
  cursor: pointer;
  outline: none;

  border-top-right-radius: 5px;
  border-bottom-right-radius: 5px;
}
.dms__home-content__input button:hover {
  background: rgba(255, 50, 45, 1);
  border: 2px solid rgba(255, 50, 45, 1);
}

@media screen and (max-width: 1029px) {
  /* For mobile phones: */
  .dms__home-content {
    width: 90%;
  }
  .dms__home-content h1 {

    font-size: 42px;
    line-height: 50px;
    letter-spacing: -0.04em;
    margin-top: 1rem;
  }
  .dms__home-content p {
    font-size: 16px;
    line-height: 24px;
    margin-top: 1rem;
  }
}

@media screen and (max-width: 750px) {
  .dms__home {
    background-image: url("../assets/images/slider-bg-1.jpg");
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    height: 100vh;
    display: flex;
    justify-content: stretch;
    align-items: center;
    flex-direction: column;
  }
  .dms__home-content {
    width: fit-content;
    height: 100%;
    border-radius: 0;
    margin: 0 auto;
    justify-content: center;
    align-items: center;
  }
  .dms__home-content h1 {
    font-size: 30px;
    line-height: 38px;
    letter-spacing: -0.04em;
    margin-top: 2rem;
  }
  .dms__home-content p {
    
    margin-top: 1rem;
  }
  .dms__home-content__input {
    width: 100%;
    margin: 2rem 0;
    display: flex;
    justify-content: center;
    font-display: row;
  }
  .dms__home-content__input input {
    flex: 2;
    width: 100%;
    min-height: 50px;
    font-family: var(--font-family);
    font-weight: 400;
    font-size: 14px;
    line-height: 18px;
    background: var(--color-footer);
    border: 2px solid var(--color-footer);
    padding: 0 0.5rem;
    outline: none;
    color: #fff;

    border-top-left-radius: 5px;
    border-bottom-left-radius: 5px;
  }
  .dms__home-content__input button {
    flex: 0.6;
    width: 100%;
    min-height: 50px;
    font-family: var(--font-family);
    font-weight: 400;
    font-size: 14px;
    line-height: 18px;
    background: #ff4820;
    border: 2px solid #ff4820;
    padding: 0 0.5rem;
    color: #fff;
    cursor: pointer;
    outline: none;

    border-top-right-radius: 5px;
    border-bottom-right-radius: 5px;
  }
}
</style>
