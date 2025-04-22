<script>
export default {
    name:'ContactsList',
    data() {
        return {
            contacts: [],
            loading: true,
            error: null
        };
    },
    created() {
        this.fetchContacts();
    },
    methods: {
        async fetchContacts() {
            try {
                const response = await fetch('https://api.example.com/contacts'); // Replace with your API endpoint
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                this.contacts = await response.json();
            } catch (error) {
                this.error = error.message;
            } finally {
                this.loading = false;
            }
        }
    }
}
</script>
<template>
    <div class="container mt-5">
        <h1 class="text-center mb-4">Contacts List</h1>
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
                    <th>Email</th>
                    <th>Phone</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="contact in contacts" :key="contact.id">
                    <td>{{ contact.id }}</td>
                    <td>{{ contact.name }}</td>
                    <td>{{ contact.email }}</td>
                    <td>{{ contact.phone }}</td>
                </tr>
            </tbody>
        </table>
    </div>
    <div class="container mt-5">
        <h1 class="text-center mb-4">Contacts List</h1>
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
                    <th>Email</th>
                    <th>Phone</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="contact in contacts" :key="contact.id">
                    <td>{{ contact.id }}</td>
                    <td>{{ contact.name }}</td>
                    <td>{{ contact.email }}</td>
                    <td>{{ contact.phone }}</td>
                </tr>
            </tbody>
        </table>
    </div>
</template>