<script>
export default {
    
}
</script>
<template>
    <div class="container">
        <form action="" method="post" @submit.prevent="LoginForm()">
          <h1 class="text-center">Login Form</h1>
          <input type="text" placeholder="Enter your phone">
          <input type="Password" placeholder="Enter your Password">
          <button class="btn btn-primary">Submit</button>
        </form>
    </div>
</template>