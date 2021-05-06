<?php

//Activamos el almacenamiento en el buffer
ob_start();
session_start();

if (!isset($_SESSION["nombre"]))
{
  header("Location: login.html");
}
else
{
require 'header.php';

if ($_SESSION['escritorio']==1)
{

  require_once "../modelos/Consultas.php";
  $consulta = new Consultas();
  $rsptac = $consulta->totalcomprahoy();
  $regc=$rsptac->fetch_object();
  $totalc=$regc->total_compra;

  $rsptav = $consulta->totalventahoy();
  $regv=$rsptav->fetch_object();
  $totalv=$regv->total_venta;


  $rspta = $consulta->casosAtendidos();
  $reg=$rspta->fetch_object();
  $total=$reg->valortotal;

  $rsptap = $consulta->cantidadPCAtendidos();
  $regp=$rsptap->fetch_object();
  $totalp=$regp->cantidadequipos;


  //Datos para mostrar el gráfico de barras de las compras
  $compras10 = $consulta->comprasultimos_10dias();
  $fechasc='';
  $totalesc='';
  while ($regfechac= $compras10->fetch_object()) {
    $fechasc=$fechasc.'"'.$regfechac->fecha .'",';
    $totalesc=$totalesc.$regfechac->total .','; 
  }
  //Quitamos la última coma
  $fechasc=substr($fechasc, 0, -1);
  $totalesc=substr($totalesc, 0, -1);

  //Datos para mostrar el gráfico de barras de las ventas
  $ventas12 = $consulta->ventasultimos_12meses();
  $fechasv='';
  $totalesv='';
  while ($regfechav= $ventas12->fetch_object()) {
    $fechasv=$fechasv.'"'.$regfechav->fecha .'",';
    $totalesv=$totalesv.$regfechav->total .','; 
  }
  //Quitamos la última coma
  $fechasv=substr($fechasv, 0, -1);
  $totalesv=substr($totalesv, 0, -1);



?>
<!--Contenido-->
      <!-- Content Wrapper. Contains page content -->
      <div class="content-wrapper">        
        <!-- Main content -->
        <section class="content">
            <div class="row">
              <div class="col-lg-12">
                  <div class="box">
                    <div class="box-header with-border">
                          <h1 class="box-title">Escritorio </h1>
                        <div class="box-tools pull-right">
                        </div>
                    </div>
                    <!-- /.box-header -->
                    <!-- centro -->
              
                      

                    <div class="container">
                      <div class="row">
                        <!-- <div class="col-lg-6">
                        <div class="small-box bg-aqua">
                              <div class="inner">
                                <h4 style="font-size:17px;">
                                  <strong>S/ <?php echo $totalc; ?></strong>
                                </h4>
                                <p>Compras</p>
                              </div>
                              <div class="icon">
                                <i class="ion ion-bag"></i>
                              </div>
                              <a href="../vistas/ingreso.php" class="small-box-footer">Compras <i class="fa fa-arrow-circle-right"></i></a>
                            </div>
                        </div>
                        <div class="col-lg-6">
                        <div class="small-box bg-green">
                              <div class="inner">
                                <h4 style="font-size:17px;">
                                  <strong>S/ <?php echo $totalv; ?></strong>
                                </h4>
                                <p>Ventas</p>
                              </div>
                              <div class="icon">
                                <i class="ion ion-bag"></i>
                              </div>
                              <a href="../vistas/venta.php" class="small-box-footer">Ventas <i class="fa fa-arrow-circle-right"></i></a>
                            </div>
                        </div>
                        </div> -->
                        <div class="col-lg-6">
                        <div class="small-box bg-green">
                              <div class="inner">
                                <h4 style="font-size:14px;">
                                  <strong id="total">$<?php

                                  echo number_format($total,2);
                                   ?></strong>
                                </h4>
                                <p>Ventas</p>
                              </div>
                              <div class="icon">
                                <i class="ion ion-bag"></i>
                              </div>
                              <a href="../vistas/soporte.php" class="small-box-footer">Total Soporte <i class="fa fa-arrow-circle-right"></i></a>
                            </div>
                        </div>
                        </div>
                        <div class="col-lg-6">
                        <div class="small-box bg-green">
                              <div class="inner">
                                <h4 style="font-size:14px;">
                                  <strong id="totalp">Cantidad equipos: <?php

                                  echo $totalp;
                                   ?></strong>
                                </h4>
                                <p>Atendidos en total</p>
                              </div>
                              <div class="icon">
                                <i class="ion ion-bag"></i>
                              </div>
                              <a href="../vistas/soporte.php" class="small-box-footer">Total Soporte <i class="fa fa-arrow-circle-right"></i></a>
                            </div>
                        </div>
                        </div>



                        <div class="container">
                      <div class="row">
                        <!-- <div class="col-lg-6">
                        <div class="box box-primary">
                            <div class="box-header with-border">
                                Compras de los últimos 10 días
                            </div>
                            <div class="box-body">
                              <canvas id="compras" width="200" height=" 100"></canvas>
                            </div>
                          </div>
                        </div> 
                        <div class="col-lg-6">
                        <div class="box box-primary">
                            <div class="box-header with-border">
                                Ventas de los últimos 12 meses
                            </div>
                            <div class="box-body">
                              <canvas id="ventas" width="200" height="100"></canvas>
                            </div>
                          </div>
                        </div> -->
                        <div class="col-lg-6">
                        <div class="box box-primary">
                            <div class="box-header with-border">
                                Total
                            </div>
                            <div class="box-body">
                              <canvas id="valortotal" width="700" height="300"></canvas>
                            </div>
                          </div>
                        </div>
                        <div class="col-lg-6">
                        <div class="box box-primary">
                            <div class="box-header with-border">
                                Total
                            </div>
                            <div class="box-body">
                              <canvas id="cantidadequipos" width="700" height="300"></canvas>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                      </div>
                    </div>
                   
                    
                    
                    <!--Fin centro -->
                  </div><!-- /.box -->
              </div><!-- /.col -->
          </div><!-- /.row -->
      </section><!-- /.content -->

    </div><!-- /.content-wrapper -->
  <!--Fin-Contenido-->
  <?php
}
else
{
  require 'noacceso.php';
}
require 'footer.php';
?>


<!-- //chart para estadisticas -->
<script type="text/javascript" src="../public/js/Chart.min.js"></script>
<script  type="text/javascript" src="../public/js/Chart.bundle.min.js"></script> 
<script src="//cdnjs.cloudflare.com/ajax/libs/numeral.js/2.0.6/numeral.min.js"></script>
<script type="text/javascript">
/* var ctx1 = document.getElementById("compras").getContext('2d');
var compras = new Chart(ctx1, {
    type: 'polarArea',
    data: {
        labels: ["18-10","15-10","1-10","13-9"],
        datasets: [{
            label: 'Compras en S/ de los últimos 10 días',
            data: [416.00,1.00,2.00,200.00],
            backgroundColor: [
                'rgba(255, 99, 132)',
                'rgba(54, 162, 235)',
                'rgba(255, 206, 86)',
                'rgba(75, 192, 192)',
                'rgba(153, 102, 255)',
                'rgba(255, 159, 64)',
                'rgba(255, 99, 132)',
                'rgba(54, 162, 235)',
                'rgba(255, 206, 86)',
                'rgba(75, 192, 192)'
            ],
            borderColor: [
                'rgba(255,99,132,1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)',
                'rgba(255,99,132,1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)'
            ],
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero:true
                }
            }]
        }
    }
});

var ctx2 = document.getElementById("ventas").getContext('2d');
var ventas = new Chart(ctx2, {
    type: 'bar',
    data: {
        labels: ["October","September","December"],
        datasets: [{
            label: 'Ventas en S/ de los últimos 12 Meses',
            data: [501.35,1.00,1500.00],
            backgroundColor: [
                'rgba(255, 99, 132)',
                'rgba(54, 162, 235)',
                'rgba(255, 206, 86)',
                'rgba(75, 192, 192)',
                'rgba(153, 102, 255)',
                'rgba(255, 159, 64)',
                'rgba(255, 99, 132)',
                'rgba(54, 162, 235)',
                'rgba(255, 206, 86)',
                'rgba(75, 192, 192)'
            ],
            borderColor: [
                'rgba(255,99,132,1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)',
                'rgba(255,99,132,1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)'
            ],
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero:true
                }
            }]
        }
    }
}); */



var ctx3 = document.getElementById("valortotal").getContext('2d');
var valortotal = new Chart(ctx3, {
  type: 'horizontalBar',
    data: {
        labels: ["Ganancias Totales"],
        datasets: [{
            label: 'Ganancias x soporte',
            data: [<?php echo money_format('%n', $total)."\n"; ?>],
            backgroundColor: [
                'rgba(54, 162, 235)',
                'rgba(255, 206, 86)',
                'rgba(75, 192, 192)',
                'rgba(153, 102, 255)',
                'rgba(255, 159, 64)',
                'rgba(255, 99, 132)',
                'rgba(54, 162, 235)',
                'rgba(255, 206, 86)',
                'rgba(75, 192, 192)'
            ],
            borderColor: [
                'rgba(54, 162, 235)',
                'rgba(255, 206, 86)',
                'rgba(75, 192, 192)',
                'rgba(153, 102, 255)',
                'rgba(255, 159, 64)',
                'rgba(255,99,132)',
                'rgba(54, 162, 235)',
                'rgba(255, 206, 86)',
                'rgba(75, 192, 192)'
            ],
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            yAxes: [{
                ticks: {
                  callback: function () {
                            return numeral(<?php echo $total; ?>).format('$ 0,0')
                        },
                    beginAtZero:true
                }
            }]
        },
        title: {
            display: true,
            text: 'Soporte'
        }
    }
});



var ctx4 = document.getElementById("cantidadequipos").getContext('2d');
var valortotal = new Chart(ctx4, {
  type: 'bar',
    data: {
        labels: ["Equipos Atendidos"],
        datasets: [{
            label: 'Equipos',
            data: [<?php echo $totalp; ?>],
            backgroundColor: [
                'rgba(255, 99, 132)',
                'rgba(54, 162, 235)',
                'rgba(255, 206, 86)',
                'rgba(75, 192, 192)',
                'rgba(153, 102, 255)',
                'rgba(255, 159, 64)',
                'rgba(255, 99, 132)',
                'rgba(54, 162, 235)',
                'rgba(255, 206, 86)',
                'rgba(75, 192, 192)'
            ],
            borderColor: [
                'rgba(255,99,132)',
                'rgba(54, 162, 235)',
                'rgba(255, 206, 86)',
                'rgba(75, 192, 192)',
                'rgba(153, 102, 255)',
                'rgba(255, 159, 64)',
                'rgba(255,99,132)',
                'rgba(54, 162, 235)',
                'rgba(255, 206, 86)',
                'rgba(75, 192, 192)'
            ],
            borderWidth:  0
        }]
    },
    options: {
        scales: {
            yAxes: [{
                ticks: {
                  
                beginAtZero: true,
                }
            }]
        },
        title: {
            display: true,
            text: 'Equipos'
        }
    }
});
</script>
<?php 
}
ob_end_flush();
?>