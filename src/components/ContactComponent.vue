<template>
  <div>
    <div class="dms__contact" id="contact">
      <div class="container-fluid">
        <div class="row dms__title">
          <div class="col-lg-12">
            <h3 class="gradient__text">Contact Us</h3>
          </div>
          <div class="col-lg-12 marking"></div>
        </div>
        <div class="row dms__contact-content">
          <div class="col-sm-5">
            <div>
              <h4 style="color: #777">Write Us</h4><br>
            </div>
            <form>
              <div class="dms__contact-content_input">
                <input type="text" placeholder="Your Name" required />
              </div>
              <div class="dms__contact-content_input">
                <input type="email" placeholder="Your email" required />
              </div>
              <div class="dms__contact-content_input">
                <textarea
                  name=""
                  id=""
                  rows="6"
                  placeholder="Your query"
                  required
                ></textarea>
              </div>
              <div class="dms__contact-content_input">
                <button type="submit">SEND</button>
              </div>
            </form>
          </div>
          <div class="col-sm-2">
            <div class="dms__contact-whatsapp">
              <a
                href="https://wa.me/447721205860?text=Hi%20DMS%20Prism!"
                target="blank"
              >
                <i class="fa fa-whatsapp" aria-hidden="true"></i> DM Us
              </a>
            </div>
          </div>
          <div class="col-sm-5">
            <div class="col dms__contact-address_header">
              <h4 style="color: #777">Meet Us</h4>
            </div>
            <div class="col">
                <p class="dms__contact-address">
                    <i class="fa fa-map-marker" aria-hidden="true"></i> 86-90 Paul Street, London, EC2A 4NE. <br>
                    <i class="fa fa-mobile" aria-hidden="true"></i> +447721205860 <br>
                    <i class="fa fa-envelope-o" aria-hidden="true"></i> info@dmsprism.com
                </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "ContactComponent",
};
</script>
<style>
.dms__contact {
  background: var(--color-bg);
  padding: 4rem 6rem;
  font-family: var(--font-family);
}

.dms__contact-content_input {
  width: 100%;
  padding: 0.5rem 0;
  display: flex;
  justify-content: center;
  align-items: center;
}

.dms__contact-address{
    font-family: var(--font-family);
  font-weight: 400;
  font-size: 20px;
  line-height: 28px;  
  color: var(--color-text);
}

.dms__contact-content_input input {
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
}
.dms__contact-content_input textarea {
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
  overflow-y: auto;
  resize: none;
}

.dms__contact-content_input button {
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
}

.dms__contact-content_input button:hover {
  background: rgba(255, 50, 45, 1);
  border: 2px solid rgba(255, 50, 45, 1);
}

.dms__contact-whatsapp {
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 15rem;
}

.dms__contact-whatsapp a {
  width: 100%;
  min-height: 50px;
  font-family: var(--font-family);
  font-weight: 400;
  font-size: 20px;
  line-height: 28px;
  border: 1px solid #25d366;
  padding: 0.6rem;
  color: #25d366;
  cursor: pointer;
  outline: none;
  text-decoration: none;
}

.dms__contact-whatsapp a:hover {
  color: #fff;
  background: #128c7e;
  border: 1px solid #128c7e;
}

.dms__contact-address_header{
    padding-top: 10rem;
  }

@media screen and (max-width: 900px) {
  .dms__contact {
    padding: 4rem 0;
  }
  .dms__contact-whatsapp {
    padding-top: 2rem;
  }
  .dms__contact-address{
    padding-top: 1rem;
  }

  .dms__contact-address_header{
    padding-top: 2rem;
  }
}
</style>
