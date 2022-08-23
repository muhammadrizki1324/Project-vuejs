<template>
    <div class="container">
        <h2>Werlcome To Portofolio</h2>
     
        <div class="content1">
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/HTML5_logo_and_wordmark.svg/640px-HTML5_logo_and_wordmark.svg.png"
                alt="">
            <table border="1">
                 <tr>
                    <td> <div class="speed" style="color: white;"><em>90%</em></div></td>

                </tr>
            </table>
        </div>

        <div class="content2">
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/CSS3_logo_and_wordmark.svg/1200px-CSS3_logo_and_wordmark.svg.png"
                alt="">
            <table border="1">
                <tr>
                    <td><div class="speed2" style="color: white;"><em>90%</em></div></td>
                </tr>
            </table>
        </div>

          <div class="content3">
            <img src="https://cdn2.downdetector.com/static/uploads/logo/figma2.png"
                alt="">
            <table border="1">
                <tr>
                    <td><div class="speed3" style="color: white;"><em>99%</em></div></td>
                </tr>
            </table>
        </div>

        <div class="content4">
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Laravel.svg/985px-Laravel.svg.png"
                alt="">
            <table border="1">
                <tr>
                    <td><div class="speed4" style="color: white;"><em>50%</em></div></td>
                </tr>
            </table>
        </div>



    </div>



</template>


<style scoped>
    .container {
   margin-top: -100 px;
    }

    .container h2 {
        padding-bottom: 50px;
        text-align: center;
    }

    .container h5 {
        text-decoration: underline;
        text-transform: capitalize;
        font-style: italic;
        padding-bottom: 30px;
    }

    .text {
        text-align: center;
    }

    .content1 {
        display: flex;
    }

    .content1 img {
        height: 100px;
    }

    

    
    .content2 {
        margin-left: 20px;
        padding-top: 20px;
        display: flex;
    }

    .content1 table {
        margin-top: 20px;
        width: 500px;
        /* padding-top: 50px;   */
        height: 40px;
        margin-left: 10px;
        /* width: 500px; */
    }

    .content2 img {
        height: 100px;
    }

    .content2 table {
        width: 500px;
        padding-top: 50px;
        height: 40px;
        margin-left: 20px;
        margin-top: 30px;
        /* width: 500px; */
    }


    .content3{
        display: flex;
        padding-top: 20px;
    }
    .content3 img{
         height: 100px;

    }

    .content3 table{
         width: 500px;
        padding-top: 50px;
        height: 40px;
        margin-left: 10px;
        margin-top: 30px;
    }

    .content4{
       display: flex;
        padding-top: 20px; 
    }

    .content4 img{
        height: 100px;
    }
    
    .content4 table{
         width: 500px;
        padding-top: 50px;
        height: 40px;
        margin-left: 20px;
        margin-top: 30px;
    }
    .speed{
        text-align: center;
        height: 40px;
        width: 450px;
        background-color: blue;
    }
    .speed2{
        text-align: center;
        height: 40px;
        width: 450px;
        background-color: blue;
    }

.speed3{
        text-align: center;
        height: 40px;
        width: 470px;
        background-color: blue;
    }


    .speed4{
        text-align: center;
        height: 40px;
        width: 250px;
        background-color: blue;
    }

    .speed4 em{
       margin-top: 5px;
    }

    
</style>