
<template>
    <div id="aboutMe" class="row h-100 flex-row">
        <div class="flex-column col-sm-4">
            <div class="title justify-content-start">
                <h1 class="title">ABOUT ME</h1>
            </div>
            <div id="profile-pic-area" class="h-100 w-100 d-flex justify-content-center align-items-center">
                <div class="prof-size">
                    <img :src="profile_image_src"/>
                </div>
            </div>
        </div>
        <div class="h-100 col-sm-8">
            <div class="introduction-area h-100">
                <div class="introduction-bg">
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quas consequatur, 
                        et magni nobis cupiditate ut veritatis saepe iste ipsum cum, ratione sapiente 
                        quidem sunt eos architecto commodi neque delectus? Nemo excepturi adipisci totam ad amet! 
                        Aliquid, ipsum harum vitae delectus animi sequi eligendi laborum optio sapiente eveniet ea non temporibus!</p>
                </div>
            </div>
        </div>
    </div>
</template>


<script>
export default {
    data () {
        return {
            profile_image_src: require("../assets/profile.jpg"),
            bounce: true
        }
    }
}
</script>

<style scoped>

    .prof-size {
        height: 300px;
    }

    .introduction-bg {
        height: 100%;
        opacity: 0.5;
        background-color: #0B0B0B;
        margin-right: 10%
    }

    img {
        margin-top: -4rem;
        height: 100%;
        width: auto;
    }
    


   
</style>