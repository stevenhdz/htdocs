import 'dart:convert';

import 'package:flutter/material.dart';
import 'package:firebase_auth/firebase_auth.dart';
import 'package:flutterfire_ui/auth.dart';
import 'package:cloud_firestore/cloud_firestore.dart';
import 'package:flutterfire_ui/firestore.dart';

class Home extends StatefulWidget {
  const Home({Key? key, required this.user}) : super(key: key);

  final User user;

  @override
  State<Home> createState() => _HomeState();
}

class _HomeState extends State<Home> {
  String dropdownvalue = 'N/A';

  final proyects = [
    'N/A',
    'CRM',
    'RPA',
    'ERP',
    'IA',
    'DIAGRAM',
    'WEB',
  ];

  late String mdescripcion, mproject;
  final mdatechanged = DateTime.now();
  late final mresponsable;
  final id =
      'VFyhmdhpQoIs9KvOyn67'; //documento las otras funcionalidades no estaran activas ya que es agregar y ya control de cambios que conservan la integridad de los datos, disbled button otros / https://firebase.flutter.dev/docs/firestore/usage/#adding-documents
  String resp = '';

  @override
  void initState() {
    super.initState();
    mresponsable = widget.user.email;
  }

  getControlDescripcion(descripcion) {
    mdescripcion = descripcion;
  }

  getControlProject(project) {
    mproject = project;
  }

  createRead() {
    print('reads');
    final FirebaseFirestore _firestore = FirebaseFirestore.instance;
    final CollectionReference _Collection =
        _firestore.collection('uniremington_prueba');
    DocumentReference documentReferencer = _Collection.doc(id);

    documentReferencer.get().then((DocumentSnapshot documentSnapshot) {
      if (documentSnapshot.exists) {
        setState(() {
          resp = 'Document data: ${documentSnapshot.data()}';
        });
      } else {
        const Text('Document does not exist on the database');
      }
    });
  }

  createEdit() {
    print('edit');

    final FirebaseFirestore _firestore = FirebaseFirestore.instance;
    final CollectionReference _Collection =
        _firestore.collection('uniremington_prueba');
    DocumentReference documentReferencer = _Collection.doc(id);

    Map<String, dynamic> controlC = {
      "responsable": mresponsable,
      "descripcion": mdescripcion,
      "project": mproject,
      "date": mdatechanged
    };

    documentReferencer
        .update(controlC)
        .then((value) => setState(() {
              resp = "Actualizado";
            }))
        .catchError((error) => Text("Fallo actualizando : $error"));
  }

  createDelete() {
    print('delete');

    final FirebaseFirestore _firestore = FirebaseFirestore.instance;
    final CollectionReference _Collection =
        _firestore.collection('uniremington_prueba');
    DocumentReference documentReferencer = _Collection.doc(id);

    documentReferencer
        .delete()
        .then((value) => setState(() {
              resp = "Eliminado";
            }))
        .catchError((error) => Text("Fallo eliminado : $error"));
  }

  createData() {
    print('data');

    final FirebaseFirestore _firestore = FirebaseFirestore.instance;
    final CollectionReference _Collection =
        _firestore.collection('uniremington_prueba');
    DocumentReference documentReferencer = _Collection.doc();

    Map<String, dynamic> controlC = {
      "responsable": mresponsable,
      "descripcion": mdescripcion,
      "project": mproject,
      "date": mdatechanged
    };

    documentReferencer
        .set(controlC)
        .then((value) => setState(() {
              resp = "Creado";
            }))
        .catchError((error) => Text("Fallo  : $error"));
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        actions: const [
          SignOutButton(),
        ],
        leading: IconButton(
          onPressed: () {},
          icon: const Icon(Icons.person_pin_sharp),
        ),
        title: Text(
          widget.user.email!.replaceAll(
              RegExp(r'@[a-zA-Z0-9_]+([.][a-zA-Z0-9_]+)*[.][a-zA-Z]{2,5}'), ''),
          style: const TextStyle(
            fontSize: 16,
            fontWeight: FontWeight.bold,
          ),
        ),
      ),
      body: SingleChildScrollView(
        child: Column(
          crossAxisAlignment: CrossAxisAlignment.center,
          children: <Widget>[
            const Padding(
              padding: EdgeInsets.all(20.0),
              child: Text(
                "Control de cambios",
                style: TextStyle(
                  fontSize: 23,
                  fontWeight: FontWeight.w200,
                ),
              ),
            ),
            Padding(
              padding: const EdgeInsets.all(20.0),
              child: TextFormField(
                controller: TextEditingController(text: widget.user.email),
                showCursor: false, //add this line
                readOnly: true,
                decoration: const InputDecoration(
                    labelText: "Responsable",
                    fillColor: Colors.amberAccent,
                    focusedBorder: OutlineInputBorder(
                      borderSide: BorderSide(color: Colors.blue, width: 2.0),
                    )),
                onChanged: (String responsable) {},
              ),
            ),
            Padding(
              padding: const EdgeInsets.all(20.0),
              child: TextFormField(
                maxLines: null,
                keyboardType: TextInputType.multiline,
                decoration: const InputDecoration(
                    labelText: "Descripcion de cambios",
                    fillColor: Colors.amberAccent,
                    focusedBorder: OutlineInputBorder(
                      borderSide: BorderSide(color: Colors.blue, width: 2.0),
                    )),
                onChanged: (String descripcion) {
                  getControlDescripcion(descripcion);
                },
              ),
            ),
            Padding(
              padding: const EdgeInsets.all(20.0),
              child: DropdownButton(
                value: dropdownvalue,
                icon: const Icon(Icons.keyboard_arrow_down),
                items: proyects.map((String proyects) {
                  return DropdownMenuItem(
                    value: proyects,
                    child: Text(proyects),
                  );
                }).toList(),
                onChanged: (String? proyect) {
                  getControlProject(proyect);
                  setState(() {
                    dropdownvalue = proyect!;
                  });
                },
              ),
            ),
            Row(
              mainAxisAlignment: MainAxisAlignment.spaceEvenly,
              children: <Widget>[
                ElevatedButton.icon(
                  onPressed: () {
                    createData();
                  },
                  icon: const Icon(Icons.add),
                  label: const Text(""),
                  style: ButtonStyle(
                    shape: MaterialStateProperty.all(
                      RoundedRectangleBorder(
                          borderRadius: BorderRadius.circular(30)),
                    ),
                    backgroundColor: MaterialStateProperty.all(Colors.blue),
                  ),
                ),
                ElevatedButton.icon(
                  onPressed: () {
                    createDelete();
                  },
                  icon: const Icon(Icons.delete),
                  label: const Text(""),
                  style: ButtonStyle(
                    shape: MaterialStateProperty.all(
                      RoundedRectangleBorder(
                          borderRadius: BorderRadius.circular(30)),
                    ),
                    backgroundColor: MaterialStateProperty.all(Colors.red),
                  ),
                ),
                ElevatedButton.icon(
                  onPressed: () {
                    createRead();
                  },
                  icon: const Icon(Icons.read_more_rounded),
                  label: const Text(""),
                  style: ButtonStyle(
                    shape: MaterialStateProperty.all(
                      RoundedRectangleBorder(
                          borderRadius: BorderRadius.circular(30)),
                    ),
                    backgroundColor: MaterialStateProperty.all(Colors.grey),
                  ),
                ),
                ElevatedButton.icon(
                  onPressed: () {
                    createEdit();
                  },
                  icon: const Icon(Icons.edit),
                  label: const Text(""),
                  style: ButtonStyle(
                    shape: MaterialStateProperty.all(
                      RoundedRectangleBorder(
                          borderRadius: BorderRadius.circular(30)),
                    ),
                    backgroundColor:
                        MaterialStateProperty.all(Colors.yellow[900]),
                  ),
                ),
              ],
            ),
            Padding(
              padding: const EdgeInsets.all(120.0),
              child: Text(
                resp,
                style: const TextStyle(
                  fontSize: 23,
                  color: Colors.green,
                  fontWeight: FontWeight.bold,
                ),
              ),
            ),
          ],
        ),
      ),
    );
  }
}
