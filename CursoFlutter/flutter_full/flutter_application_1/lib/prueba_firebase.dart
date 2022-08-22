import 'package:flutter/widgets.dart';
import 'package:flutter/material.dart';
import 'package:firebase_core/firebase_core.dart';
import 'package:cloud_firestore/cloud_firestore.dart';

class AdicionarPrueba extends StatelessWidget {
  final String nombreProgramador; // = 'Edison Valencia';
  final String equipo; // = "SuperComputador MESA";
  final String lugar; // = "Medellin";
  final int dia; // = 4;
  final int mes; // = 3;
  final int ano; // = 2022;
  AdicionarPrueba(this.nombreProgramador, this.equipo, this.lugar, this.ano,
      this.mes, this.dia);
  @override
  Widget build(BuildContext context) {
// TODO: implement build
    CollectionReference prueba =
        FirebaseFirestore.instance.collection("uniremington-prueba");
    Future<void> adicionarPrueba() {
      return prueba
          .add({
            'programador': this.nombreProgramador,
            'equipo': this.equipo,
            'lugar': this.lugar,
            'dia': this.dia,
            'mes': this.mes,
            'ano': this.ano
          }) //fin de prueba.add
          .then((value) => print("Si se adicionó a la base de datos"))
          .catchError((onError) => print(':( Upsss, algo salio mal: $onError'));
    }

    return TextButton(
        onPressed: adicionarPrueba, child: Text('Generar prueba!!'));
//throw UnimplementedError();
  } //fin del build
}
