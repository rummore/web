---
date: 2019-11-14T21:58:33.006Z
title: Dr Bariátrico
featuredimage: /assets/drbariatrico0.jpg
---
![Rummore Dr Bariatrico](/assets/drbariatrico1.png "Rummore Dr Bariatrico")

Wordpress website para el Dr. Gaylor Acosta, Doctor Bariátrico

[www.doctorbariatrico.com](http://www.doctorbariatrico.com)

```
 <script type="text/javascript" src="https://www.gstatic.com/charts/loader.js"></script>
```

```
    <script type="text/javascript">
```

```
      google.charts.load('current', {'packages':['corechart']});
```

```
      google.charts.setOnLoadCallback(drawChart);
```

```

```

```
      function drawChart() {
```

```

```

```
        var data = google.visualization.arrayToDataTable([
```

```
          ['Task', 'Hours per Day'],
```

```
          ['Work',     11],
```

```
          ['Eat',      2],
```

```
          ['Commute',  2],
```

```
          ['Watch TV', 2],
```

```
          ['Sleep',    7]
```

```
        ]);
```

```

```

```
        var options = {
```

```
          title: 'My Daily Activities'
```

```
        };
```

```

```

```
        var chart = new google.visualization.PieChart(document.getElementById('piechart'));
```

```

```

```
        chart.draw(data, options);
```

```
      }
```

```
    </script>
```

```
    <div id="piechart" style="width: 900px; height: 500px;"></div>
```
