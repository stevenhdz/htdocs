import 'dart:convert';

import 'package:flutter/material.dart';

class Home extends StatelessWidget {
  const Home({Key? key}) : super(key: key);

  static const String _title = 'Flutter Code Sample';

  @override
  Widget build(BuildContext context) {
    return const MaterialApp(
      debugShowCheckedModeBanner: false,
      title: _title,
      home: Scaffold(
        body: MyStatefulWidget(),
      ),
    );
  }
}

class MyStatefulWidget extends StatefulWidget {
  const MyStatefulWidget({Key? key}) : super(key: key);

  @override
  State<MyStatefulWidget> createState() => _MyStatefulWidgetState();
}

class _MyStatefulWidgetState extends State<MyStatefulWidget> {
  final GlobalKey<FormState> _formKey = GlobalKey<FormState>();
  String _method = 'POST';
  String _formatter = 'JSON';

  static const json = {
    'name': 'Steven',
    'lastName': 'Hernandez',
    'asignature': 'movil 1'
  };

  static const JsonEncoder encoder = JsonEncoder.withIndent('  ');
  final String _jsonString = encoder.convert(json);

  @override
  Widget build(BuildContext context) {
    return Form(
      key: _formKey,
      child: Column(
        crossAxisAlignment: CrossAxisAlignment.start,
        children: <Widget>[
          DropdownButton<String>(
            value: _method,
            icon: const Icon(Icons.arrow_downward),
            style: const TextStyle(
                fontSize: 12.0, height: 1.0, color: Colors.black),
            underline: Container(
              height: 2,
              color: Colors.deepPurpleAccent,
            ),
            onChanged: (String? newValue) {
              setState(() {
                _method = newValue!;
              });
            },
            items: <String>['POST', 'PUT', 'DELETE', 'GET']
                .map<DropdownMenuItem<String>>((String value) {
              return DropdownMenuItem<String>(
                value: value,
                child: Text(value),
              );
            }).toList(),
          ),
          DropdownButton<String>(
            value: _formatter,
            icon: const Icon(Icons.arrow_downward),
            style: const TextStyle(
                fontSize: 12.0, height: 1.0, color: Colors.black),
            underline: Container(
              height: 2,
              color: Colors.amber,
            ),
            onChanged: (String? newValue) {
              setState(() {
                _formatter = newValue!;
              });
            },
            items: <String>['JSON', 'XML']
                .map<DropdownMenuItem<String>>((String value) {
              return DropdownMenuItem<String>(
                value: value,
                child: Text(value),
              );
            }).toList(),
          ),
          TextFormField(
            style: const TextStyle(
                fontSize: 12.0, height: 1.0, color: Colors.black),
            decoration: const InputDecoration(
              hintText: 'Url',
            ),
            validator: (String? value) {
              if (value == null || value.isEmpty) {
                return 'Please enter some method';
              }
              return null;
            },
            initialValue: 'https://www.prueba.com/api/v2/user/register',
          ),
          TextFormField(
            style: const TextStyle(
                fontSize: 15.0, height: 1.0, color: Colors.black),
            minLines: 5,
            keyboardType: TextInputType.multiline,
            maxLines: 10,
            decoration: const InputDecoration(
              hintText: 'body',
            ),
            validator: (String? value) {
              if (value == null || value.isEmpty) {
                return 'Please enter some body';
              }
              return null;
            },
            initialValue: _jsonString,
          ),
          Padding(
            padding: const EdgeInsets.symmetric(vertical: 16.0),
            child: ElevatedButton(
              onPressed: () {
                if (_formKey.currentState!.validate()) {}
              },
              child: const Text('Consumir'),
            ),
          ),
        ],
      ),
    );
  }
}
