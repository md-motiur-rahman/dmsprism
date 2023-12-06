<template>
  <div class="dms__why_us" id="why_us">
    <div class="dms__why_us-content gradient__bg2">
      <div class="container">
        <div class="row">
          <div class="dms__why_us-content__body col">
            <h2>Whats different about DMS Prism?</h2>
            <p>
              DMSPRISM is a well-established name in recruitment industry. It is
              a leader in connecting global companies and internationally-minded
              candidates.We specialize in senior leadership and executive
              positions for professionals seeking to advance their careers. Here
              are some of the reasons the best people and companies choose DMS
              Prism.
            </p>
          </div>
        </div>
      </div>
      <div class="container-fluid dms__why_us-content__web">
        <div class="row">
          <div class="col-sm-3" style="padding-top: 5rem">
            <img src="../assets/images/m.png" alt="web search" />
          </div>
          <div class="dms__why_us-body col-sm-9">
            <div class="row">
              <div class="dms__why_us-content_body col-sm">
                <h5>Focus is on building careers with life changing switch</h5>
                <p>
                  We understand the importance of finding a career that aligns
                  with your passions and goals. Our team of experts specializes
                  in helping job seekers make a meaningful and life-changing
                  career switch. With our personalized approach, we work with
                  you to identify and pursue your dream career. We have a deep
                  understanding of the job market and are dedicated to
                  connecting you with the right opportunity. Our goal is to help
                  you take the next step in your career and make a positive
                  impact on your life.
                </p>
              </div>
              <div class="dms__why_us-content_body col-sm">
                <h5>Access to extraordinary opportunities.</h5>
                <p>
                  DMSPrism has teams of consultants specializing in virtually
                  every major industry and a broad range of functional
                  specialties. We work with top fortune 500 companies in every
                  field.
                </p>
              </div>
            </div>
            <div class="row">
              <div class="dms__why_us-content_body col-sm">
                <h5>International company with Global standards.</h5>
                <p>
                  For those seeking advancement in their career, we offer a
                  world of opportunity. In addition to our relationships with
                  the leading global corporations, we maintain a region-wide
                  presence across Asia.
                </p>
              </div>
              <div class="dms__why_us-content_body col-sm">
                <h5>Personal approach.</h5>
                <p>
                  You'll notice a difference when working with en world-
                  recruitment process. Our experienced consultants connect with
                  you at a personal level and mentor you with best career
                  advice.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "WhyUs",
};
</script>
<style>
.dms__why_us {
  background-image: url("../assets/images/slider-bg-2.jpg");
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  min-height: 100vh;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
}

.dms__why_us-content {
  width: 100%;
  height: 100%;
  padding: 4rem 0;
}

.dms__why_us-body {
  padding-right: 5rem;
}

.dms__why_us-content_body:hover{
    background: var(--color-footer);
    border: none;
}

.dms__why_us-content_body {
  min-height: 350px;
}

.dms__why_us-content__body h2 {
  color: #fff;
}
.dms__why_us-content__body p {
  color: #fff;
}
.dms__why_us-content__web {
  display: flex;
  justify-content: center;
  align-items: center;
}

.dms__why_us-content_body {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 2rem 1rem;
  border: 1px solid var(--color-text);
  gap: 1rem;
  margin: 0.5rem;
  color: #fff;
  cursor: auto;
}

@media screen and (max-width: 750px) {
  .dms__why_us-body {
    padding:1rem;
  }

  .dms__why_us-content_body {
  
  padding: 1rem 0.5rem;
  }
}
</style>
