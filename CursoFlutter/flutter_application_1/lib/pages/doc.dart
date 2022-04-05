import 'package:flutter/material.dart';

class Doc extends StatelessWidget {
  const Doc({Key? key}) : super(key: key);

  final String _title = "Códigos de respuesta HTTP";
  final String _code1 = "Respuestas informativas (100–199)";
  final String _code2 = "Respuestas satisfactorias (200–299)";
  final String _code3 = "Redirecciones (300–399)";
  final String _code4 = "Errores de los clientes (400–499)";
  final String _code5 = "Errores de los servidores (500–599)";

  @override
  Widget build(BuildContext context) {
    return Card(
      shape: RoundedRectangleBorder(borderRadius: BorderRadius.circular(30)),
      margin: const EdgeInsets.all(15),
      elevation: 10,
      color: Colors.deepPurple,
      child: ClipRRect(
        // Los bordes del contenido del card se cortan usando BorderRadius
        borderRadius: BorderRadius.circular(30),
        child: Center(
          child: Column(
              mainAxisAlignment: MainAxisAlignment.center,
              crossAxisAlignment: CrossAxisAlignment.center,
              children: [
                Text(_title,
                    style: const TextStyle(color: Colors.white, fontSize: 20)),
                const SizedBox(
                  height: 20,
                ),
                Text(_code1,
                    style: const TextStyle(color: Colors.white, fontSize: 16)),
                const Icon(
                  Icons.info,
                  color: Colors.grey,
                ),
                Text(_code2,
                    style: const TextStyle(color: Colors.white, fontSize: 16)),
                const Icon(
                  Icons.check,
                  color: Colors.green,
                ),
                Text(_code3,
                    style: const TextStyle(color: Colors.white, fontSize: 16)),
                const Icon(
                  Icons.link,
                  color: Colors.blue,
                ),
                Text(_code4,
                    style: const TextStyle(color: Colors.white, fontSize: 16)),
                const Icon(
                  Icons.error_outline,
                  color: Colors.red,
                ),
                Text(_code5,
                    style: const TextStyle(color: Colors.white, fontSize: 16)),
                const Icon(
                  Icons.add,
                  color: Colors.red, //The color which you want set.
                )
              ]),
        ),
      ),
    );
  }
}
