<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
    <link href="{{ asset('css/app.css') }}" rel="stylesheet">
</head>
<body>
    <div id="app">
        <router-view></router-view>
        <div class="bg-blue-900 p-4 text-gray-50">
            <router-link to="/" class="border p-1 mr-2" exact>Home</router-link>
            <router-link to="/about" class="border p-1" exact>About</router-link>
        </div>
    </div>
    <script src="{{ asset('js/app.js') }}"></script>
</body>
</html>