<template>
  <div class="dms__footer">
    <div class="container-fluid">
      <div class="row">
        <div class="col-sm-3 dms__contact-about">
          <h2 class="gradient__text">DMSPrism.</h2>
          <p>
            DMSPrism is a well-established name in recruitment industry. It is a
            leader in connecting global companies and internationally-minded
            candidates.We specialize in senior leadership and executive
            positions for professionals seeking to advance their careers
          </p>
        </div>
        <div class="col-sm-3">
          <div class="footer_menu_link">
            <h4 style="color: #777">Menu</h4>
            <br />
            <p><a href="#home">HOME</a></p>
            <p><a href="#services">SERVICE</a></p>
            <p><a href="#why_us">WHY US</a></p>
            <p><a href="#awards">AWARD</a></p>
            <p><a href="#team">TEAM</a></p>
            <p><a href="#contact">CONTACT US</a></p>
          </div>
        </div>
        <div class="col-sm-3">
          <div class="footer_services_link">
            <h4 style="color: #777">OUR SERVICES</h4>
            <br />
            <p><a href="#services">Bulk Hiring</a></p>
            <p><a href="#services">Temporary Hiring</a></p>
            <p><a href="#services">Permanent Hiring</a></p>
            <p><a href="#services">Contract Hiring</a></p>
          </div>
        </div>
        <div class="col-sm-3">
          <div class="footer_social_media">
            <h4 style="color: #777">FIND US ON</h4>
            <a href=""
              ><i class="fa fa-facebook-official" aria-hidden="true"></i></a
            >&nbsp;&nbsp;<a href=""
              ><i class="fa fa-linkedin-square" aria-hidden="true"></i></a
            >&nbsp;&nbsp;<a href=""
              ><i class="fa fa-twitter" aria-hidden="true"></i></a
            >&nbsp;&nbsp;<a href=""
              ><i class="fa fa-youtube" aria-hidden="true"></i
            ></a>
          </div>
        </div>
      </div>
    </div>
    <div class="dms__contact-mini__footer">
        <div class="container">
            <div class="row">
                <div class="col-sm-12">
                    <p>DMSPRISM SMART STAFFING SOLUTIONS © {{ year }}. ALL RIGHTS RESERVED.</p>
                </div>
                <div class="col-sm-12">
                    <p>Design And Developed By <a href="#" target="blank" style="color:#ff4820">M-ERA</a></p>
                </div>
            </div>
        </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "FooterComponent",
  data(){
    return{
        year: "",
    }

  },
  mounted(){
    this.year = new Date().getFullYear();
  }
};
</script>
<style>
.dms__footer {
  background: var(--color-footer);
  padding: 4rem 1rem;
}

.dms__contact-about p {
  color: var(--color-text);
}

.footer_menu_link {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding: 0 5rem;
}

.footer_menu_link p {
  line-height: 0.7rem;
}

.footer_menu_link p a {
  text-decoration: none;
  color: var(--color-text);
}

.footer_services_link {
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: flex-start;
  padding: 0 5rem;
}

.footer_services_link p {
  line-height: 0.7rem;
}

.footer_services_link p a {
  text-decoration: none;
  color: var(--color-text);
}

.footer_social_media a {
  font-size: xx-large;
  direction: none;
  color: var(--color-text);
}

.footer_social_media a:hover {
  color: bisque;
}

@media screen and (max-width: 768px) {
  .footer_menu_link {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 1rem;
  }

  .footer_services_link {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 1rem;
  }
}

.dms__contact-mini__footer{
    width: 100%;
    margin-top: 2rem;
    padding-top: 2rem;
    border-top: 1px solid #777;
    letter-spacing: 0.3rem;
    color: #777;
}
</style>
