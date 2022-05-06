import 'dart:convert';

import 'package:flutter/material.dart';
import 'package:s/pages/bar.dart';
import 'package:s/pages/codes.dart';
import 'package:s/pages/home.dart';
import 'package:s/pages/info.dart';

void main() => runApp(const MyApp());

class MyApp extends StatefulWidget {
  const MyApp({Key? key}) : super(key: key);

  @override
  State<MyApp> createState() => _MyAppState();
}

class _MyAppState extends State<MyApp> {
  int _paginaActual = 0;

  final List<Widget> _paginas = [const Home(), const Codes(), const Info()];

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      debugShowCheckedModeBanner: false,
      title: 'Material App',
      home: Scaffold(
        resizeToAvoidBottomInset: false,
        appBar: AppBar(title: const Bar()),
        body: Container(
          margin: const EdgeInsets.all(20.0),
          child: _paginas[_paginaActual],
        ),
        bottomNavigationBar: BottomNavigationBar(
          backgroundColor: Colors.red,
          selectedItemColor: Colors.yellow,
          unselectedItemColor: Colors.white,
          onTap: (index) {
            setState(() {
              _paginaActual = index;
            });
          },
          currentIndex: _paginaActual,
          items: const [
            BottomNavigationBarItem(icon: Icon(Icons.home), label: "Rest"),
            BottomNavigationBarItem(icon: Icon(Icons.code), label: "Codes"),
            BottomNavigationBarItem(icon: Icon(Icons.info), label: "More"),
          ],
        ),
      ),
    );
  }
}
