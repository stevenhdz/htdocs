<?php

namespace App\Http\Controllers;

use App\Models\Clasificacion_Revistas;
use Illuminate\Http\Request;

class Clasificacion_RevistasController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $clasificacion_revistas = Clasificacion_Revistas::all();
        return $clasificacion_revistas;
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
        $clasificacionRevista = new Clasificacion_Revistas();
        $clasificacionRevista->idClasificacion = $request->idClasificacion;
        $clasificacionRevista->Detalle = $request->Detalle;
        $clasificacionRevista->save();
    }

    /**
     * Display the specified resource.
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
        $clasificacionRevista = Clasificacion_Revistas::findOrFail($request->idClasificacion);
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
        $clasificacionRevista = Clasificacion_Revistas::destroy($request->idClasificacion);
        return $clasificacionRevista;
    }
}
