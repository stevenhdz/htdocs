using System;
using System.Collections.Generic;
using System.Text;
using System.Collections;

namespace csharp
{
    class Pilas
    {
        //····Declaracion de Variables····//
        int tamaño = new int();
        Stack pila1 = new Stack();
        Random aleatorio = new Random();
        object Dato = new object();
        int posicion = new int();
        int acumulador = new int();

        public void pilas()
        {
            //····Inicializar variables····//
            Dato = 0;
            posicion = 0;
            tamaño = 0;
            acumulador = 0;

            //····Instrucciones / Codigo····//
            Console.WriteLine("····digite el tamaño de la pila····");
            tamaño = int.Parse(Console.ReadLine());

            //····Declaracion de Vector····//

            object[] vector1 = new object[tamaño];

            //····Continuar codigo····//

            for (int i = 0; i < tamaño; i += 1)
            {
                pila1.Push(aleatorio.Next(1, 50)); //llenar pila
            }
            acumulador = tamaño-1;
            foreach (object dato in pila1) 
            {                 
                Console.WriteLine("Dato en posicion {1} de la pila: {0}", dato,acumulador);//mostrar pila
                acumulador -= 1;
            }                

            Console.WriteLine("\n ····Tamaño de pila: {0} ····", pila1.Count);
            pila1.CopyTo(vector1, 0);//datos al vector          


            Console.WriteLine("\n···· Digite el Dato que quiere introducir a la pila ····");
            Dato = Console.ReadLine();
            Console.WriteLine("···· Digite la posicion en la que desea introducir el dato ····\n");
            posicion = int.Parse(Console.ReadLine());
            if (posicion > 0)
            {
                if (posicion > tamaño)
                {
                    Console.WriteLine("#### La posicion  digitada es mayor al tamaño de la pila debido a  ####");
                    Console.WriteLine("#### esto se agregara despues del ultimo dato agregado a la pila.  ####\n");
                }

                for (int i = posicion; i < tamaño; i += 1)
                {
                    pila1.Pop();
                }

                pila1.Push(Dato);

                for (int i = tamaño - posicion - 1; i > -1; i -= 1)
                {
                    pila1.Push(vector1[i]);
                }
                acumulador = tamaño;
                foreach (object dato in pila1)
                {
                    Console.WriteLine("Dato en posicion {1} de la pila: {0}", dato, acumulador);//mostrar pila
                    acumulador -= 1;
                }
            }
            else
            {
                Console.WriteLine("····Digite un valor mayor a 0····");
            }

            Console.WriteLine("\nPresione cualquier tecla para continuar con el ejercicio de **COLAS**");
            Console.ReadKey();
        }        
    }
}
