<?php

namespace App\Http\Controllers;

use App\Models\Product;

use Illuminate\Http\Request;
use Illuminate\Http\Response;
use Illuminate\Support\Facades\Validator;
use PhpParser\Node\Expr\FuncCall;

class ProductController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        if (count(Product::all()) == 0)
            return response()->json(['response' => 'No data', 'code' => Response::HTTP_NOT_FOUND, 'data' => Product::all()], 200);
        else
            return response()->json(['response' => 'ok', 'code' => Response::HTTP_OK, 'data' => Product::all()], 200);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        return 'NO disponible';
    }


    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {


            $validator = Validator::make($request->all(), [
                'name' => 'required|string|max:255',
                'slug' => 'required|string|max:255',
                'price' => 'required|int|max:255'
            ]);

            if ($validator->fails()) {
                return response()->json(['response' => $validator->getMessageBag(), 'code' => Response::HTTP_BAD_REQUEST], 422);
            }

            $all = Product::create([
                'name' => $request->name,
                'slug' => $request->slug,
                'price' => $request->price
            ]);


            return response()->json([
                'message' => 'Successfully created user!',
                'response' => $all->id,
                'code' => '201'
            ], 201);


    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        if (!is_null(Product::find($id)))
            return response()->json(['code' => Response::HTTP_OK, 'response' => Product::find($id)], 200);
        else
            return response()->json(['code' => Response::HTTP_NOT_FOUND, 'response' => "Producto con el id {$id} no encontrado"], 404);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        return 'NO disponible';
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {

        $validator = Validator::make($request->all(), [
            'name' => 'string|max:255',
            'slug' => 'string|max:255',
            'price' => 'int|max:255'
        ]);

        if ($validator->fails()) {
            return response()->json(['response' => $validator->getMessageBag(), 'code' => Response::HTTP_BAD_REQUEST], 422);
        }

        $product = Product::find($id);

        if (!is_null($product)){
            $product->update($request->all());
            return response()->json(['message' => 'Update user!','response' => $product,'code' => '201'], 201);
        }else{
            return response()->json(['code' => Response::HTTP_NOT_FOUND, 'response' => "Producto con el id {$id} no encontrado"], 404);
        }



    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        if(Product::destroy($id))
            return response()->json(['message' => 'Update user!','response' => $id.'  '.'eliminado','code' => '201'], 201);
        else
            return response()->json(['code' => Response::HTTP_NOT_FOUND, 'response' => "Producto con el id {$id} no encontrado"], 404);

    }

    /**
     * Remove the specified resource from storage.
     *
     * @param str  $name
     * @return \Illuminate\Http\Response
     */
    public function search($name){
        return Product::where('name','like','%'.$name.'%')->get();
    }
}
