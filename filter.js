<!DOCTYPE html>
<html>
    <head>
        <title>React & React Native</title>
    </head>
    <body>
      <p><b><font size = "5">React & React Native</font></b></p>
      <p><font size = "4">Homework sesi 2: </font></p>
        <li>Melakukan Filter data yang memiliki "Present : True"</li>
        <li>Mencetak Hasil Menggunakan Console.log</li>
      <p><b><font size = "2">NB : Klik Console untuk melihat hasil</font></b></p>
      
<script>
  const videoData = [
    {
      name: 'Miss Scarlet',
      present: true,
      rooms:[
        {kitchen:false},
        {ballroom:false},
        {conservatory:false},
        {'dining room':false},
        {'billiard room':false},
        {library:false}
      ]
    },
    {
      name: 'Mrs. White',
      present: false,
      rooms:[
        {kitchen:false},
        {ballroom:false},
        {conservatory:false},
        {'dining room':false},
        {'billiard room':false},
        {library:false}
      ]
    },
    {name: 'Reverend Green',
     present: true,
     rooms:[
       {kitchen:false},
       {ballroom:false},
       {conservatory:false},
       {'dining room':false},
       {'billiard room':false},
       {library:false}
     ]
    },
    {
      name: 'Rusty',
      present: false,
      rooms:[
        {kitchen:false},
        {ballroom:false},
        {conservatory:false},
        {'dining room':false},
        {'billiard room':false},
        {library:false}
      ]
    },
    {
      name: 'Colonel Mustard',
      present: true,
      rooms:[
        {kitchen:false},
        {ballroom:false},
        {conservatory:false},
        {'dining room':false},
        {'billiard room':false},
        {library:false}
      ]
    },
    {
      name: 'Professor Plum',
      present: true,
      rooms:[
        {kitchen:false},
        {ballroom:false},
        {conservatory:false},
        {'dining room':false},
        {'billiard room':false},
        {library:false}
      ]
    }
  ];
  
//filter
let filterTrue = videoData.filter((DataVideo) => DataVideo.present === true);

 //result
console.log(filterTrue);
      </script>   
  </body>
</html>