<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Pressure.JS</title>
    <link rel="stylesheet" href="styles/main.css">
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>
    <script src="dist/pressure.js"></script>
    <style>
    #pen{
        opacity: 1;
    }
    </style>
</head>
<body>
    <div class="wrapper">
    <div id="header"></div>
    <main>
    <div class="files">
        <h1>Notebook 1</h1>
        <h2>Note 1</h2>
        <h2>Note 2</h2>
        <h1>Notebook 2</h1>
        
    </div>

    </main>
    <footer>
        <div class="user-footer">
            <div class="left">
            <div class="name"><h2>John Doe</h2></div>
            <div class="location"><h3>San Francisco, CA</h3></div>
            </div>
            <div class="right"><p>Log out</p></div>
        </div>
        <div class="Copyright">
        <p>Copyright:</p> 
        <p>Lucas Johnson 2019</p>
        </div>
    </footer>
    </div>
    <script src="paint.js"></script>
    <script>
    $(function(){
    $('#header').load('./navbar.html')
});
    </script>
</body>
</html>