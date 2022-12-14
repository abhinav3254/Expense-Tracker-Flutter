import 'package:flutter/material.dart';

void main() {
  runApp(MyApp());
}

class MyApp extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'Flutter App',
      home: MyHomePage(),
    );
  }
}

class MyHomePage extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text('Flutter App'),
      ),
      body: Column(
        /*
        Positioning
        // mainAxisAlignment goes top to bottom in column
        mainAxisAlignment: MainAxisAlignment.center,
        // crossAxisAlignment goes left to right in row
        crossAxisAlignment: CrossAxisAlignment.center,
        */
        children: <Widget>[
          Container(
            width: double.infinity,
            child: Card(
              child: Text('CHART!'),
              elevation: 5,
            ),
          ),
          Card(
            child: Text('LIST OF TRANSCATION!'),
          ),
        ],
      ),
    );
  }
}
