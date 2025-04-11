<script>
import Reservations from '@/pages/Reservations.vue';
export default {
    data() {
        return {
            FormData: {
                name: "",
                phone: "",
                date: "",
                email: "",
                membars: "",
                booking_time: ""
            }
        }
    },
    methods: {
        async Reservations() {
            try {
            const response = await fetch('http://127.0.0.1:8000/api/reservations', {
                method: 'POST',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(this.FormData)
                
            });
        const result = await response.json();
        alert('message sent successfully');
        } catch (error) {
            alert('message is not sent to databse',error);
        }    
        }
    }
}
</script>
<template>
    <div>
        <form id="register-form" class="contact" action="" method="post" @submit.prevent="Reservations()">

            <!--begin col-md-6-->
            <div class="col-md-6">

                <input class="register-input white-input" required name="register_names" placeholder="Full Name"
                    type="text" v-model="FormData.name">
                <input class="register-input white-input" required name="register_phone" placeholder="Phone Number"
                    type="number"   v-model="FormData.phone">
                <input class="register-input white-input" required name="register_date" type="date" v-model="FormData.date">

            </div>
            <!--end col-md-6-->

            <!--begin col-md-6-->
            <div class="col-md-6">

                <input class="register-input white-input" required name="register_email" placeholder="Email Adress"
                    type="email" v-model="FormData.email">
                <select class="register-input white-input" required name="register_ticket" v-model="FormData.membars">
                    <option value="">How Many?</option>
                    <option value="1 Person">1 Person</option>
                    <option value="2 People">2 People</option>
                    <option value="3 People">3 People</option>
                    <option value="4 People">4 People</option>
                    <option value="5 People">5 People</option>
                    <option value="6 People">6 People</option>
                    <option value="7 People">7 People</option>
                    <option value="8 People">8 People</option>
                    <option value="9 People">9 People</option>
                    <option value="10 People">10 People</option>
                </select>
                <input class="register-input white-input" required name="register_time" placeholder="Booking Time"
                    type="time" v-model="FormData.booking_time">

            </div>
            <!--end col-md-6-->

            <!--begin col-md-12-->
            <div class="col-md-12">

                <input value="Book Your Table" id="submit-button" class="register-submit" type="submit">

            </div>
            <!--end col-md-12-->

        </form>
    </div>
</template>