<?php

namespace App\Http\Controllers;

use App\Models\ClasificacionRevistas;
use Illuminate\Http\Request;

class ClasificacionRevistasController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $clasificacionRevistas = ClasificacionRevistas::all();
        return $clasificacionRevistas;
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $clasificacionRevista = new ClasificacionRevistas();
        $clasificacionRevista->idClasificacion = $request->idClasificacion;
        $clasificacionRevista->Detalle = $request->Detalle;
        $clasificacionRevista->save();
    }

    /**
     * Display the specified resource
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request)
    {
        $clasificacionRevista = ClasificacionRevistas::findOrFail($request->idClasificacion);
        $clasificacionRevista->Detalle = $request->Detalle;
        $clasificacionRevista->save();
        return $clasificacionRevista;
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy(Request $request)
    {
        $clasificacionRevista = ClasificacionRevistas::destroy($request->idClasificacion);
        return $clasificacionRevista;
    }
}
