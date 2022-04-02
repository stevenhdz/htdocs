import 'package:flutter/material.dart';

void main() {
  runApp(const MyApp());
}

class MyApp extends StatelessWidget {
  const MyApp({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      debugShowCheckedModeBanner: false,
      title: 'Flutter Demo',
      theme: ThemeData(
        primarySwatch: Colors.blue,
      ),
      home: const MyHomePage(title: 'Flutter Demo Home Page'),
    );
  }
}

class MyHomePage extends StatefulWidget {
  const MyHomePage({Key? key, required this.title}) : super(key: key);

  final String title;

  @override
  State<MyHomePage> createState() => _MyHomePageState();
}

class _MyHomePageState extends State<MyHomePage> {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      body: SafeArea(
        child: Column(
          crossAxisAlignment: CrossAxisAlignment.stretch,
          children: <Widget>[
            //Header Container
            AppBar(
                leading: const Icon(Icons.analytics),
                shadowColor: Colors.blue,
                title: const ListTile(
                  title: Text("Welcome to uniremington",
                      style: TextStyle(color: Colors.white)),
                  subtitle:
                      Text("questions?", style: TextStyle(color: Colors.white)),
                )),
            //Body Container
            Expanded(
              child: SingleChildScrollView(
                padding: const EdgeInsets.symmetric(
                    horizontal: 16.0, vertical: 16.0),
                child: Column(
                  children: <Widget>[
                    Container(
                      color: Colors.amberAccent,
                      width: 420.0,
                      height: 515.0,
                      alignment: Alignment.center,
                      child: Image.network(
                          'https://fongc.org/wp-content/uploads/2016/10/ico-uniremington.png'),
                    ),
                  ],
                ),
              ),
            ),

            BottomNavigationBar(
              items: const <BottomNavigationBarItem>[
                BottomNavigationBarItem(
                  icon: Icon(Icons.home),
                  label: 'Home',
                ),
                BottomNavigationBarItem(
                  icon: Icon(Icons.business),
                  label: 'Business',
                ),
              ],
              selectedItemColor: Colors.white,
              backgroundColor: Colors.blue,
            ),
          ],
        ),
      ),
    );
  }
}
