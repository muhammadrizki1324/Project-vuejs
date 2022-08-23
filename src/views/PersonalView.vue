<template>
   <div class="contener">
      <h2>INI SEMUA TENTANG SAYA</h2>

      <div class="kotak1">
         <table>
            <thead>
               <tr>
                  <th style="font-weight:bold ;">Nama </th>
                  <th>:Muhammad Rizki</th>
               </tr>
            </thead>
            <tbody>
               <tr>
                  <td style="font-weight:bold ;">Tempat,Tanggal lahir </td>
                  <td>:Jakarta,27/11/2004</td>
               </tr>
               <tr>
                  <td style="font-weight:bold ;">Alamat</td>
                  <td>:Depok,Jawa Barat</td>
               </tr>
               <tr>
                  <td style="font-weight:bold ;">Agama</td>
                  <td>:Islam</td>
               </tr>
               <tr>
                  <td style="font-weight:bold ;">No Handphone</td>
                  <td>:087880152514</td>
               </tr>
            </tbody>
            <tfoot>
               <tr>
                  <td style="font-weight:bold ;">Email</td>
                  <td>:mhrizki515@gmail.com</td>
               </tr>
            </tfoot>
         </table>
      </div>
      <div class="kotak2">
      <p>
         Hello, my name is Muhammad Rizki, I am 18 years old, I am a young person who is active in the IT field, especially in the field of Wab Developer. I'm currently studying at SMK TARUNA BHAKTI DEPOK.
         My goal is to become a good and honest web developer in carrying out the tasks assigned by the boss or client
      </p>
   </div>
   </div>

   
  

</template>



<script>
   export default {

   }
</script>


<style scoped>
   .contener{
      /* background-color: aqua; */
      margin-right: 100px;
   }
   .contener h2 {
      text-decoration: underline;
      font-weight: bold;
      text-align: center;
      font-style: italic;
   }

   .kotak1 {

      padding-top: 50px;
   }

   .kotak2{
      padding-top: 30px;
   }
</style>