<script>
export default {
data(){
    return{
        FormData:{
           name : "",
           email : "",
           phone : "",
           message : "",
        }
    }
      },
methods:{
   async contactForm(){
         try {
            const response = await fetch('/api/contact',{
                method : 'POST',
                headers: {
                           'Content-Type': 'application/json',
                           'X-CSRF-TOKEN': document.querySelector('meta[name="csrf-token"]').getAttribute('content')
                         },
                body: JSON.stringify(this.FormData)         
            });
            const result = await response.json();
            alert('message sent successfully');
         } catch (error) {
            alert('Error on message- ',error);
         }            
                      
    }
}
}
</script>
<template>
    <div>
        <form id="contact-form" class="contact" @submit.prevent="contactForm()" method="post">

            <!--begin col-md-6-->
            <div class="col-md-6 wow slideInLeft" data-wow-delay="0.5s">
                <input class="contact-input white-input" v-model="FormData.name" required name="contact_names" placeholder="Full Name*"
                    type="text">
                <input class="contact-input white-input" v-model="FormData.email" required name="contact_email" placeholder="Email Adress*"
                    type="email">
                <input class="contact-input white-input" v-model="FormData.phone" required name="contact_phone" placeholder="Phone Number*"
                    type="text">
            </div>
            <!--end col-md-6-->

            <!--begin col-md-6-->
            <div class="col-md-6 wow slideInRight" data-wow-delay="0.5s">
                <textarea class="contact-commnent white-input" rows="2" cols="20" name="contact_message" v-model="FormData.message"
                    placeholder="Your Message..."></textarea>
            </div>
            <!--end col-md-6-->

            <input value="Send Message" id="submit-button" class="contact-submit wow fadeInUp" data-wow-delay="1s"
                type="submit">

        </form>
    </div>
</template>