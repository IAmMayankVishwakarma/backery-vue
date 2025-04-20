<script>
export default {

}
</script>
<template>
  <div class="center-container">

  <form class="login-form">
    <p class="login-text">
      <span class="fa-stack fa-lg">
        <i class="fa fa-circle fa-stack-2x"></i>
        <i class="fa fa-lock fa-stack-1x"></i>
      </span>
    </p>
    <input type="email" class="login-username" autofocus="true" required="true" placeholder="Email" />
    <input type="password" class="login-password" required="true" placeholder="Password" />
    <input type="submit" name="Login" value="Login" class="login-submit" />
    <a href="#" class="login-forgot-pass">forgot password?</a>
  <!-- <div class="underlay-photo"></div> -->
  <!-- <div class="underlay-black"></div> -->
  </form>
</div>
</template>

<style scoped>
@import url(https://fonts.googleapis.com/css?family=Open+Sans:100,300,400,700);
@import url(//netdna.bootstrapcdn.com/font-awesome/4.0.3/css/font-awesome.css);

input ::-webkit-input-placeholder {
  color: rgba(255, 255, 255, 0.7);
}
input ::-moz-placeholder {
  color: rgba(255, 255, 255, 0.7);
}
input :-ms-input-placeholder {
  color: rgba(255, 255, 255, 0.7);
}
input:focus {
  outline: 0 transparent solid;
}
input:focus ::-webkit-input-placeholder {
  color: rgba(252, 252, 252, 0.7);
}
input:focus ::-moz-placeholder {
  color: rgba(233, 231, 231, 0.7), 0.7);
}
input:focus :-ms-input-placeholder {
  color: rgba(252, 251, 251, 0.7);
}

.center-container {
  height: 100vh; /* Full viewport height */
  display: flex;
  justify-content: center; /* horizontal center */
  align-items: center;     /* vertical center */
  background: url('/src/assets/images/dark-chocolate-cake-decorated-with-golden-balls-black-background-ai-generative_123827-24058.avif') no-repeat center center fixed;
  background-size: cover;
  height: 100vh;
  margin: 0;
}
.login-form {
  min-height: 20rem;
  margin: auto;
  max-width: 50%;
  padding: 5rem;
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 1rem;
  background: rgba(255, 255, 255, 0.1); /* translucent white */
  backdrop-filter: blur(10px); /* frosted glass effect */
  -webkit-backdrop-filter: blur(10px); /* for Safari */
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  color: white;
}


.login-text {
  padding: 1rem;
  color:white;
  font-size: 1.5rem;
  margin: 0 auto;
  max-width: 50%;
  padding: 0.5rem;
  text-align: center;
}
.login-text .fa-stack-1x {
  color: rgb(0, 0, 0);
}

.login-username,
.login-password {
  background: transparent;
  border: 0 solid;
  border-bottom: 1px solid rgba(255, 255, 255, 0.5);
  color: white;
  display: block;
  margin: 2rem;
  padding: 1rem;
  transition: 250ms background ease-in;
  width: calc(100% - 3rem);
}
.login-username:focus,
.login-password:focus {
  background: transparent;
  color:white;
  transition: 250ms background ease-in;
}

.login-forgot-pass {
  bottom: 0;
  color: white;
  cursor: pointer;
  display: block;
  font-size: 75%;
  left: 0;
  opacity: 0.6;
  padding: 0.5rem;
  position: absolute;
  text-align: center;
  width: 100%;
}
.login-forgot-pass:hover {
  opacity: 1;
}

.login-submit {
  border: 1px solid white;
  background: transparent;
  color: white;
  display: block;
  margin: 1rem auto;
  min-width: 1px;
  padding: 0.25rem;
  transition: 250ms background ease-in;
}
.login-submit:hover, .login-submit:focus {
  background: white;
  color: black;
  transition: 250ms background ease-in;
}

[class*=underlay] {
  left: 0;
  min-height: 100%;
  min-width: 100%;
  position: fixed;
  top: 0;
}

@-webkit-keyframes hue-rotate {
  from {
    -webkit-filter: grayscale(30%) hue-rotate(0deg);
  }
  to {
    -webkit-filter: grayscale(30%) hue-rotate(360deg);
  }
}

@keyframes hue-rotate {
  from {
    -webkit-filter: grayscale(30%) hue-rotate(0deg);
  }
  to {
    -webkit-filter: grayscale(30%) hue-rotate(360deg);
  }
}
</style>