<template>
    <div id="gallery" class="d-flex h-100 w-100 justify-content-center align-items-center flex-column">
        <div class="title w-100 justify-content-start">
            <h1>GALLERRY</h1>
        </div>
        <div class="row w-100 h-100 justify-content-start align-items-center">
            <div v-for="(image, index) in images" :key="image.id" class="thumb">
                <img v-lazy="image.src" @click="show(index)" class="" />
                <p>{{ image.title }}</p>
            </div>
            <light-box
                ref="lightbox"
                :media="images"
                :show-light-box="false"
                :show-caption="true"
            ></light-box>
        </div>
    </div>
</template>

<script>
export default {
    data: function () {
        return {
            images: [
                {
                    thumb: 'https://dummyimage.com/500x500/ffffff/000000.png&text=coming+soon',
                    src: 'https://dummyimage.com/500x500/ffffff/000000.png&text=coming+soon',
                    caption: 'キャプション1'
                },
                {
                    thumb: 'https://dummyimage.com/500x500/ffffff/000000.png&text=coming+soon',
                    src: 'https://dummyimage.com/500x500/ffffff/000000.png&text=coming+soon',
                    caption: 'キャプション2'
                },
                {
                    thumb: 'https://dummyimage.com/500x500/ffffff/000000.png&text=coming+soon',
                    src: 'https://dummyimage.com/500x500/ffffff/000000.png&text=coming+soon',
                    caption: 'キャプション3'
                },
                {
                    thumb: 'https://dummyimage.com/500x500/ffffff/000000.png&text=coming+soon',
                    src: 'https://dummyimage.com/500x500/ffffff/000000.png&text=coming+soon',
                    caption: 'キャプション4'
                },
                {
                    thumb: 'https://dummyimage.com/500x500/ffffff/000000.png&text=coming+soon',
                    src: 'https://dummyimage.com/500x500/ffffff/000000.png&text=coming+soon',
                    caption: 'キャプション5'
                }
            ]
        }
    },
    methods: {
        show: function(index){
            this.$refs.lightbox.showImage(index)
        }
    }
}
</script>

<style scoped>
    .thumb {
        height: 200px;
        width: 200px;
        margin: 2%
        
    }

    img {
    height: 100%;
    width: auto;
    filter: drop-shadow(5px 5px 5px #000000);
    }
</style>