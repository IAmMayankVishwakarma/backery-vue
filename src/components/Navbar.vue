<script>
export default{
    name : 'Navbar',
    data(){
        return {

        }
    }
}
</script>
<template>
     <nav class="navbar navbar-default navbar-fixed-top">
            
            <!--begin container -->
            <div class="container">
        
                <!--begin navbar -->
                <div class="navbar-header">
                    <button data-target="#navbar-collapse-02" data-toggle="collapse" class="navbar-toggle" type="button">
                        <span class="sr-only">Toggle navigation</span>
                        <span class="icon-bar"></span>
                        <span class="icon-bar"></span>
                        <span class="icon-bar"></span>
                    </button>
                                                                        
                    <a href="index.html" class="navbar-brand brand scrool"><img src="/public/images/logo.png" alt="logo" class="width-100"></a>
                </div>
                        
                <div id="navbar-collapse-02" class="collapse navbar-collapse">
                    <ul class="nav navbar-nav navbar-right">			      
                        <li class="selected"><a href="index.html">Home</a></li>
                        <li><a href="about.html">About Us</a></li>
                        <li><a href="menu.html">Menu</a></li>
                        <li><a href="reservations.html">Reservations</a></li>
                        <li><a href="gallery.html">Gallery</a></li>
                        <li><a href="contact.html">Contact</a></li>
                        
                        <li class="social"><a href="#" class="first"><i class="fa fa-twitter"></i></a></li>
                        <li class="social"><a href="#"><i class="fa fa-facebook"></i></a></li>
                        <li class="social"><a href="#" class="last"><i class="fa fa-instagram"></i></a></li>
                        
                        <li><a href="#" class="purchase">Purchase</a></li>
                    </ul>
                </div>
                <!--end navbar -->
                                    
            </div>
    		<!--end container -->
            
        </nav>
</template>