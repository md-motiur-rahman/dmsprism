<template>
  <div class="dms__services" id="services">
    <div class="dms__services-container">
      <div class="dms__services-container__heading">
        <h2 class="gradient__text">What Do We Offer</h2>
        <p>
          Our team of experts specializes in sourcing and placing highly skilled
          IT professionals, including digital marketers and technical sales
          representatives. Whether you need to fill a digital marketing role or
          require a technical sales team, our recruitment agency has got you
          covered. We understand the unique demands of the IT industry, and our
          network of IT professionals includes the best digital marketers and
          technical salespeople in the business. Our goal is to connect
          companies with the most talented IT staff, including digital marketers
          and technical sales force, to help drive their success.
        </p>
      </div>
      <div class="dms__services-container__body">
        <div class="container">
          <div class="row">
            <div class="dms__services-container__body__content col-sm">
              <h5>Bulk Hiring</h5>
              <p>
                We understand the challenges that come with bulk hiring and have
                the resources and expertise to handle it seamlessly. With our
                extensive network of talented job seekers and cutting-edge
                recruiting technology, bulk hiring is made simple and
                stress-free. Our team of recruitment specialists is dedicated to
                ensuring a smooth and successful bulk hiring experience for our
                clients.
              </p>
            </div>
            <div class="dms__services-container__body__content col-sm">
              <h5>Temporary Hiring</h5>
              <p>
                "We provide businesses with cost-effective and flexible
                temporary hiring solutions. Our temporary hiring experts match
                top talent with short-term assignments to meet your specific
                needs. With our extensive network of highly skilled temporary
                professionals, we can find the right fit for your organization
                quickly and efficiently. Our temporary hiring process is
                designed to meet the demands of businesses looking for scalable
                staffing solutions. From seasonal help to emergency
                replacements, our temporary hiring services provide businesses
                with the resources they need to succeed.
              </p>
            </div>
          </div>
          <div class="row">
            <div class="dms__services-container__body__content col-sm">
              <h5>Permanent Hiring</h5>
              <p>
                We provide businesses with long-term staffing solutions through
                our permanent hiring services. Our permanent hiring experts
                match top talent with career opportunities to meet your specific
                needs. With our extensive network of highly skilled
                professionals, we can find the right fit for your organization
                quickly and efficiently. Our permanent hiring process is
                designed to ensure a seamless and successful match between job
                seekers and employers. Our goal is to build long-lasting
                partnerships between businesses and employees, and our permanent
                hiring services make that possible.
              </p>
            </div>
            <div class="dms__services-container__body__content col-sm">
              <h5>Contract Hiring</h5>
              <p>
                We provide businesses with flexible staffing solutions through
                our contract hiring services. Our contract hiring experts match
                top talent with short-term and long-term projects to meet your
                specific needs. With our extensive network of highly skilled
                contract professionals, we can find the right fit for your
                organization quickly and efficiently. Our contract hiring
                process is designed to meet the demands of businesses looking
                for cost-effective, scalable staffing solutions. From
                project-based assignments to temporary replacements, our
                contract hiring services provide businesses with the resources
                they need to succeed.
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
  name: "ServicesComponent",
};
</script>
<style>
.dms__services {
  background: var(--color-footer);
  font-family: var(--font-family);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 4rem 6rem;
  min-height: 100vh;
}

.dms__services-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.dms__services-container__heading {
  width: 65%;
  display: flex;
  flex-direction: column;
}

.dms__services-container__heading h2 {
  font-weight: bold;
}

.dms__services-container__heading p {
  color: var(--color-text);
}

.dms__services-container__body__content {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 2rem 1rem;
  border: 1px solid var(--color-text);
  gap: 1rem;
  margin: 0.5rem;
  color: var(--color-text);
  cursor: auto;
}
.dms__services-container__body__content p {
  cursor: default;
}

.dms__services-container__body__content:hover {
  background: var(--gradient-text);
  color: #000000;
  border: var(--gradient-text);
}

@media screen and (max-width: 750px) {
  .dms__services-container__heading {
    width: 100%;
  }

  .dms__services{
    padding: 4rem 0.5rem;
  }
}
</style>
