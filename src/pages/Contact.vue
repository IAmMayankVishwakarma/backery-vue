<script>
import contactForm from '../components/contactForm.vue'
import Border from '@/components/Border.vue';
import Footer from '@/components/Footer.vue';
import Navbar from '@/components/Navbar.vue';

export default{
    components :{
        Border,Footer,Navbar,contactForm,
    },
    data(){return{}},
    
}
</script>
<template>
    <!-- <Border /> -->
  <Navbar />

  
    <!--begin borders -->
    <div id="border-left"></div>
    <div id="border-right"></div>
    <!--end borders -->

    <!--begin contact-hero-section -->
    <section id="hero-section" class="contact-hero-section">
    
        <!--begin image-overlay -->
        <div class="image-overlay"></div>
        <!--end image-overlay -->
            
        <!--begin container-->
        <div class="container image-section-inside">

            <!--begin row-->
            <div class="row">
            
                <!--begin col-md-10-->
                <div class="col-md-10 col-md-offset-1 text-center">
                
                    <span class="comic-text wow fadeIn" data-wow-delay="0.5s">La Myk</span>
                    
                    <h2 class="section-title white wow bounceIn" data-wow-delay="1s">Get In Touch</h2>
                    
                    <p class="hero-text wow fadeInUp" data-wow-delay="2s">For any enquiries you can give us a call at <strong>+44 123 45 67 890</strong><br>Alternatively we can get in touch using the form bellow.</p>
                    
                </div>
                <!--end col-md-10-->
            
            </div>
            <!--end row-->
            
        </div>
        <!--end container-->    
        
    </section>
    <!--end contact-hero-section -->
    
    <!--begin section-grey-->
    <section class="section-grey">
    
      <!--begin container-->
      <div class="container"> 

            <!--begin row-->
            <div class="row">
            
                <!--begin col-md-10-->
                <div class="col-md-10 col-md-offset-1 text-center">
                
                	<h3 class="section-title small-margin wow fadeIn" data-wow-delay="0.5s">CONTACT FORM</h3>
                    
                    <p class="wow fadeInUp" data-wow-delay="1s">There are many variations of passages of Lorem Ipsum available, but the majority have suffered<br>
                    alteration, by injected humour, or new randomised words which don't look believable.</p>
                    
                    <!--begin contact-wrapper-->
                    <div class="contact-wrapper">
                
                        <!--begin success message -->
                        <p class="contact_success_box" style="display:none;">We received your message and you'll hear from us soon. Thank You!</p>
                        <!--end success message -->
                        
                        <!--begin contact form -->
                        <contactForm />
                        <!--end contact form -->
                    
                    </div>
                    <!--end contact-wrapper-->
                    
                </div>
                <!--end col-md-10-->
                
            </div>
            <!--end row-->
            
        </div>
        <!--end container-->
        
    </section>
    <!--end section-grey-->
    <Footer />
</template>