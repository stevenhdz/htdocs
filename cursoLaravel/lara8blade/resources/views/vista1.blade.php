@extends('layouts.vistapadre')
@section('contenidoPrincipal')
    <h1>Hola desde vista 1</h1>

<?php
 echo ' esto es parte de la vista 1';
?>

@php
  echo ' esto es parte de la vista 1';
@endphp


<ul>
    @for ($i = 0; $i < 10; $i++)
      <li>el valor de i es: {{$i}}</li>
    @endfor
</ul>


<ul>
    @foreach ($users as $item)
        <li>{{$item}}</li>
    @endforeach
</ul>

@if (count($users)===1)
    <span class="badge bg-primary"> hay un solo elemento</span>
@elseif (count($users) >1)
    <span class="badge bg-success"> hay muchos elementos solo elemento</span>
@else
    <span class="badge bg-danger"> no hay  elemento</span>
@endif
    
@endsection