<template>
  <div class="dms__team" id="team">
    <div class="container-fluid">
      <div class="row dms__title">
        <div class="col-lg-12">
          <h3 class="gradient__text">Meet the faces behind it</h3>
        </div>
        <div class="col-lg-12 marking"></div>
      </div>
      <div class="row">
        <div class="col-sm-3">
          <div class="card dms__team-card" >
            <img
              class="card-img-top"
              src="../assets/team/avatar.jpg"
              alt="Card image cap"
            />
            <div class="card-body">
              <small>Founder & CEO</small>
              <h5 class="card-title">Mukul Yadav</h5>
              <p class="card-text">
                “Just having satisfied customers isn’t good enough anymore. If you really want a booming business, you
                have to create raving fans.”
              </p>
            </div>
            <div class="card-body">
              <a href="#" class="card-link"><i class="fa fa-linkedin-square" aria-hidden="true"></i></a>
            </div>
          </div>
        </div>
        <div class="col-sm-3">
          <div class="card dms__team-card" >
            <img
              class="card-img-top"
              src="../assets/team/avatar.jpg"
              alt="Card image cap"
            />
            <div class="card-body">
                <small>Co-Founder & Managing Partenr</small>
              <h5 class="card-title">Kebi</h5>
              <p class="card-text">
                “Recruitment is Marketing. If you are a recruiter and you don't see yourself as a marketer, you're in a
                wrong place”
              </p>
            </div>
            <div class="card-body">
                <a href="#" class="card-link"><i class="fa fa-linkedin-square" aria-hidden="true"></i></a>
            </div>
          </div>
        </div>
        <div class="col-sm-3">
          <div class="card dms__team-card" >
            <img
              class="card-img-top"
              src="../assets/team/avatar.jpg"
              alt="Card image cap"
            />
            <div class="card-body">
              <small>Director & Managing Partenr</small>
              <h5 class="card-title">Someone</h5>
              <p class="card-text">
                “Recruitment is Marketing. If you are a recruiter and you don't see yourself as a marketer, you're in a
                wrong place”
              </p>
            </div>
            <div class="card-body">
                <a href="#" class="card-link"><i class="fa fa-linkedin-square" aria-hidden="true"></i></a>
            </div>
          </div>
        </div>
        <div class="col-sm-3">
          <div class="card dms__team-card">
            <img
              class="card-img-top"
              src="../assets/team/avatar.jpg"
              alt="Card image cap"
            />
            <div class="card-body">
                <small>Director & Managing Partenr</small>
              <h5 class="card-title">Someone Else</h5>
              <p class="card-text">
                “Recruitment is Marketing. If you are a recruiter and you don't see yourself as a marketer, you're in a
                wrong place”
              </p>
            </div>
            <div class="card-body">
                <a href="#" class="card-link"><i class="fa fa-linkedin-square" aria-hidden="true"></i></a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "TeamComponent",
};
</script>
<style>
.dms__team {
  background: var(--color-footer);
  padding: 4rem 6rem;
  font-family: var(--font-family);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.dms__title {
  padding-bottom: 3rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.marking {
  min-height: 0.15rem;
  width: 6rem;
  background: var(--gradient-bar);
}

.card-link{
    font-size:xx-large;
    color: #000000;
}

.dms__team-card {
  background: var(--gradient-bar);
  border: none !important;
  width: 100%;
}
.dms__team-card {
  color: #000000;
}

@media screen and (max-width: 1029px) {
  .dms__team {
    background: var(--color-footer);
    padding: 4rem 0;
    font-family: var(--font-family);
  }

  .dms__team-card {
    color: #000000;
    margin-bottom: 1rem;
    width: 100%;
  }
}
</style>
