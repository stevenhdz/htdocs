import 'package:flutter/material.dart';

class Info extends StatelessWidget {
  const Info({Key? key}) : super(key: key);

  final String _title = "Informacion de utilidad para usar el consumidor:";
  final String _code1 =
      "- El formato de intercambio de datos normalmente es JSON o XML";
  final String _code2 = "Respuestas satisfactorias (200–299)";
  final String _code3 = "Redirecciones (300–399)";
  final String _code4 = "Errores de los clientes (400–499)";
  final String _code5 = "Errores de los servidores (500–599)";

  @override
  Widget build(BuildContext context) {
    return Form(
      child: ClipRRect(
        // Los bordes del contenido del card se cortan usando BorderRadius
        borderRadius: BorderRadius.circular(10),
        child: Center(
          child: Column(
              mainAxisAlignment: MainAxisAlignment.center,
              crossAxisAlignment: CrossAxisAlignment.center,
              children: [
                Text(_title,
                    style: const TextStyle(color: Colors.black, fontSize: 20)),
                const SizedBox(
                  height: 20,
                ),
                Text(_code1,
                    style: const TextStyle(color: Colors.black, fontSize: 16)),
                const SizedBox(
                  height: 20,
                ),
                const Text('Ejemplos',
                    style: TextStyle(color: Colors.amber, fontSize: 20)),
                const SizedBox(
                  height: 20,
                ),
                const Text('JSON {"name":"steven", "lastname": "hernandez"}',
                    style: TextStyle(color: Colors.black, fontSize: 16)),
                const SizedBox(
                  height: 20,
                ),
                const Text(
                    'XML <name>steven</name><lastname>hernandez<lastname>',
                    style: TextStyle(color: Colors.black, fontSize: 16)),
                const SizedBox(
                  height: 20,
                ),
                Text(_code2,
                    style: const TextStyle(color: Colors.black, fontSize: 16)),
                Text(_code3,
                    style: const TextStyle(color: Colors.black, fontSize: 16)),
                Text(_code4,
                    style: const TextStyle(color: Colors.black, fontSize: 16)),
                Text(_code5,
                    style: const TextStyle(color: Colors.black, fontSize: 16)),
              ]),
        ),
      ),
    );
  }
}
