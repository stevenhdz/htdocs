using System;
using System.Collections.Generic;
using System.Text;
using System.Collections;

namespace csharp
{
    class Colas
    {
        int tamaño = new int();                   
        Queue cola1 = new Queue();
        Queue cola2 = new Queue();
        Random aleatorio = new Random();
        int Datazo = new int();
        int acumulador = new int();        
        int encontrado = new int();
        int cv = new int();

        public void colas()
        {
            Datazo = 0;
            tamaño = 0;
            acumulador = 0;
            encontrado = 0;

            Console.WriteLine("\n---------------COLAS---------------\n");
            Console.WriteLine("···· Digite el tamaño de la Cola ····");
            
            tamaño = int.Parse(Console.ReadLine()); 
            for (int i = 0; i < tamaño; i++) cola1.Enqueue(aleatorio.Next(1, 50));
            
            foreach (object dato in cola1) Console.WriteLine("Dato # {0} en Cola: {1}", acumulador++, dato);

            Console.WriteLine("\n···· Tamaño de Cola: {0} ····\n", cola1.Count);
            cola2 = (Queue) cola1.Clone(); // Clonar cola1

            Console.WriteLine("\n···· Digite el Dato que quiere Buscar en la Cola ····");
            Datazo = int.Parse(Console.ReadLine());
            acumulador = 0;

            for (int i = 0; i < tamaño; i += 1)
            {
                cv=(int)cola1.Dequeue();
                int x = cv == Datazo ? encontrado = 1 : encontrado == 0 ? acumulador++ : acumulador;
            }

            string stigua = encontrado == 0 ? "\n---// El dato solicitado : " + Datazo + "; no fue encontrado ---//" : "\n---// para desencolar el dato " + Datazo + ", se necesitan " + acumulador + " posiciones //---\n";
            Console.WriteLine(stigua);

            for (int i = 0; i < tamaño; i += 1) cola1.Enqueue(cola2.Dequeue());
        }        
    }
}


// optimizacion de 77 a  48 rectoooooooooo......