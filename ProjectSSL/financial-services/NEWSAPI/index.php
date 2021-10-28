<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Google API</title>
    <link href="css/bootstrap.css" rel ="stylesheet" />
    <script src="js/bootstrap.js"></script>
    <link href="index.css" rel="stylesheet" />
</head>
<body> 
<script>function goBack(){
  window.history.back();
}</script>
    <?php
        $url='http://newsapi.org/v2/everything?domains=wsj.com&apiKey=8dea0169e5c54081b157542e439e94fb';
        $response=file_get_contents($url);
        $NewsData=json_decode($response);
    ?>
    <div class="jumbotron">
        <h1>Top Finance News</h1>
        <br>
        <br>
        <div>
        <button  onclick="goBack()" style="color: white;background-color:#333333;">Previous Page</button>
    </div>
    </div>
    
    <div class="container-fluid">
        <?php
            foreach($NewsData->articles as $News) 
            {
        ?>
        <div class="row NewsGrid">
            <div class ="col-md-3">
                <img src="<?php echo $News->urlToImage  ?>" alt="News thumbnail" class="rounded">
            </div>
            <div class="col-md-9">
                <h2>Title: <?php echo $News->title  ?></h2>
                <h5>Description <?php echo $News->description  ?></h5>
                <p>Content: <?php echo $News->content  ?></p>
                <h6>Author: <?php echo $News->author  ?></h6>
                <h6>Published <?php echo $News->publishedAt  ?></h6>
                
            </div>
        </div>
        <?php
            }
        ?>

    </div>
</body>
</html>