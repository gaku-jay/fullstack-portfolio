<template>
    <div id="work" class="d-flex w-100 justify-content-center align-items-center flex-column">
        <div class="title w-100 justify-content-start">
            <h1>WORK</h1>
        </div>
        <div id="work-area" class="h-100 w-100 d-flex justify-content-end align-items-center">
            <carousel-3d :controls-visible="true" :clickable="true" :autoplay="false"
             :onMainSlideClick="clickEvent" @after-slide-change="onAfterSlideChange" :perspective="0" :space="400" :display="3" :width="400" :height="500">
                <slide v-for="(slide, i) in slides" :index="i" :key="slide">
                    <div class="card img-thumbnail">
                        <div class="card-body px-2 py-3">
                            <h5 class="card-title">タイトル</h5>
                            <img src="https://placehold.it/360x270">
                            <div class="card-text">
                                <p>{{comments[i].comment}}</p>
                            </div>
                        </div>
                    </div>
                </slide>
            </carousel-3d>
        </div>
    </div>
</template>

<script>
// import { Carousel3d, Slide } from 'vue-carousel-3d';
export default {
    data: function () {
        return {
          slides: 5,
          currentIndex: 0,
          comments: [
              {
                  id: 0,
                  comment: "0: Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facere impedit quia magnam iure velit, quidem inventore architecto rem atque vel natus quis sint odit maxime. Voluptas iure laudantium eligendi itaque. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facere impedit quia magnam iure velit, quidem inventore architecto rem atque vel natus quis sint odit maxime. Voluptas iure laudantium eligendi itaque.Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facere impedit quia magnam iure velit, quidem inventore architecto rem atque vel natus quis sint odit maxime. Voluptas iure laudantium eligendi itaque. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facere impedit quia magnam iure velit, quidem inventore architecto rem atque vel natus quis sint odit maxime. Voluptas iure laudantium eligendi itaque."
              },
              {
                  id: 1,
                  comment: "1: Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facere impedit quia magnam iure velit, quidem inventore architecto rem atque vel natus quis sint odit maxime. Voluptas iure laudantium eligendi itaque."
              },
              {
                  id: 2,
                  comment: "2: Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facere impedit quia magnam iure velit, quidem inventore architecto rem atque vel natus quis sint odit maxime. Voluptas iure laudantium eligendi itaque."
              },

              {
                  id: 3,
                  comment: "3: Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facere impedit quia magnam iure velit, quidem inventore architecto rem atque vel natus quis sint odit maxime. Voluptas iure laudantium eligendi itaque."
              },
              {
                  id: 4,
                  comment: "4: Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facere impedit quia magnam iure velit, quidem inventore architecto rem atque vel natus quis sint odit maxime. Voluptas iure laudantium eligendi itaque."
              }
          ]
        }
    },
    methods: {
        clickEvent: function () {
            console.log("current index is " + this.currentIndex)
        },
        onAfterSlideChange(index) {
            this.currentIndex = index;
            console.log('@onAfterSlideChange Callback Triggered', 'Slide Index ' + index)
        }
    }
}
</script>

<style scoped>
.carousel-3d {
    height: 500px;
}

img {
    filter: none !important;
    -webkit-filter: none !important;
}

.card {
    color: #333333;
    filter: drop-shadow(5px 5px 5px #000000);
}

.card-text {
    margin-top: 0.75rem;
    height: 150px;
    overflow-y: scroll;
}

.carousel-3d-slide {
    border: none;
    background-color: transparent;
}

.next, .prev {
    color: #ffffff;
}


</style>
