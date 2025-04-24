<script>
export default {
    name: 'ReservationList',
    data() {
        return {
            reservations: [],
            loading: true,
            error: null
        };
    },
    created() {
        this.fetchReservations();
    },
    methods: {
        async fetchReservations() {
            try {
                const response = await fetch('http://127.0.0.1:8000/api/reservation'); // Replace with your API endpoint
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                this.reservations = await response.json();
            } catch (error) {
                this.error = error.message;
            } finally {
                this.loading = false;
            }
        }
    }
};
</script>
<template>
    <div class="container mt-5">
        <h1 class="text-center mb-4">Reservation List</h1>
        <div v-if="loading" class="text-center">
            <p>Loading...</p>
        </div>
        <div v-else-if="error" class="alert alert-danger text-center">
            {{ error }}
        </div>
        <table class="table table-striped" v-else>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Date</th>
                    <th>Status</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="reservation in reservations" :key="reservation.id">
                    <td>{{ reservation.id }}</td>
                    <td>{{ reservation.name }}</td>
                    <td>{{ reservation.date }}</td>
                    <td>{{ reservation.status }}</td>
                </tr>
            </tbody>
        </table>
    </div>
</template>