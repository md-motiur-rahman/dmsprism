<template>
  <div class="dms__awards" id="awards">
    <div class="container-fluid">
      <div class="row">
        <div class="col">
          <div class="dms__awards-title">
            <h2>Certification</h2>
            <p>
              We are a certified company with more than 50 clients onboarded
              currently.
            </p>
          </div>
        </div>
      </div>
      <br>
      <div class="row">
        <div class="col-sm counter">
            <h2>150</h2>
            <h5>Happy Clients</h5>
        </div>
        <div class="col-sm counter">
            <h2>130</h2>
            <h5>Projects Completed</h5>
        </div>
        <div class="col-sm counter">
            <h2>99</h2>
            <h5>Positive Feedback</h5>
        </div>
        <div class="col-sm counter">
            <h2>250</h2>
            <h5>One on One Candidate Support</h5>
        </div>
      </div>
    </div>
  </div>
</template>
<script>

export default {
  name: "AwardsComponent",
};
</script>
<style>
.dms__awards{
    padding: 4rem;
    font-family: var(--font-family);
}

.dms__awards-title h2{
    font-weight: 800;
}
.dms__awards-title p {
color: gray;
}

@media screen and (max-width: 768px) {
    .counter{
        padding: 1rem;
    }
}
</style>
