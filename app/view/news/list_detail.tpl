<html>
  <head>
    <title>{{title}}</title>
    <link rel="stylesheet" href="/public/css/news.css" />
  </head>
  <body>
    <h3>标题：{{title}}</h3>
    <h4>发布于： {{ helper.relativeTime(time) }}</h4>
    <p>{{detail}}</p>

    
  </body>
</html>