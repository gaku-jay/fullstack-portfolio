<template>
    <div id="aboutMe" class="row h-100">
        <h1 class="title">ABOUT ME</h1>
        <div id="profile-pic-area" class="col-md-4 h-100 w-100  d-flex justify-content-end align-items-center">
            <div class="prof-size">
                <img class=" " :src="profile_image_src"/>
            </div>
        </div>
        <div class="introduction-area col-md-8 h-100">
            <div class="introduction-bg">
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quas consequatur, 
                    et magni nobis cupiditate ut veritatis saepe iste ipsum cum, ratione sapiente 
                    quidem sunt eos architecto commodi neque delectus? Nemo excepturi adipisci totam ad amet! 
                    Aliquid, ipsum harum vitae delectus animi sequi eligendi laborum optio sapiente eveniet ea non temporibus!</p>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data () {
        return {
            profile_image_src: require("../assets/profile.jpg")
        }
    }
    
}
</script>

<style scoped>

    .prof-size {
        height: 50%;
    }
    
    .introduction-bg {
        height: 100%;
        opacity: 0.5;
        background-color: #0B0B0B;
        margin-left: 5%;
        margin-right: 15%;
    }

   
</style>