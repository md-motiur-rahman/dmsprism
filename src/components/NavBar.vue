<template>
  <div class="dms__navbar fixed-top">
    <nav class="navbar navbar-expand-lg navbar-light">
      <router-link class="navbar-brand" to="/"
        ><b class="gradient__text">DMSPrism.</b></router-link
      >
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarSupportedContent" >
        <ul class="navbar-nav ml-auto" style="background: var(--color-footer)">
          <li class="nav-item">
            <a class="nav-link" href="#home" style="color:var(--color-text)">HOME</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#services" style="color:var(--color-text)">SERVICE</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#why_us" style="color:var(--color-text)">WHY US</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#awards"  style="color:var(--color-text)">AWARD</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#team" style="color:var(--color-text)">TEAM</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#contact" style="color:var(--color-text)">CONTACT</a>
          </li>
        </ul>
      </div>
    </nav>
  </div>
</template>
<script>
export default {
  name: "NavBar",
};
</script>
<style>
.dms__navbar {
  background-color: rgb(255, 255, 255);
  font-family: var(--font-family);
  background: var(--color-footer);
}
.navbar-toggler {
  background: var(--gradient-text);
}

</style>
