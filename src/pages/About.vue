<template>
    <div class="about__container">
        <div class="about__me-link" ><a href="https://www.linkedin.com/in/ublast/" target="_blank"> Мой linkedIN</a></div>
        <div class="about__me-link"><a href="https://hh.kz/resume/6b1ace90ff08965aab0039ed1f3443316a7564?hhtmFrom=resume_list" target="_blank"> Моe резюме</a></div>
    </div>
</template>

<script>
export default {
    props: {},
    methods: {
        // Your code here
    }
}
</script>

<style scoped>
    .about__container {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        align-items: center;
        text-align: center; 
        gap: 1vw;
    }
    
    .about__me-link {
        border: 0.3vw solid teal;
    }

    .about__me-link a {
        display: block;
        padding: 4vw;
        font-size: 3vw;
    }
    .about__me-link a, :hover, :active{
        text-decoration: none;
        color: black;
        
        
    }

    .about__me-link:hover {
        box-shadow: 0 0 10px teal;
        transition: ease-in-out .3s;
    }



</style>