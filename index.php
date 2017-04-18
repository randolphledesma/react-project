<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8" />
    <title>Hello World</title>
    <script src="https://unpkg.com/react@15/dist/react.min.js"></script>
    <script src="https://unpkg.com/react-dom@15/dist/react-dom.min.js"></script>
    <script src="js/dist/component-bundle.js"></script>
</head>
<body>
    <div id="root"></div>
    <script type="text/javascript">
        ReactDOM.render(
            React.createElement(Hello, {name: 'YOu'}, null),
            document.getElementById('root')
        );
    </script>
</body>
</html>