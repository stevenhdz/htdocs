<?php


$MEMSIZE    =   512;//  size of shared memory to allocate
$SEMKEY     =   1;  //  Semaphore key
$SHMKEY     =   2;  //  Shared memory key

echo "Start.\n";
// Get semaphore
$sem_id = sem_get($SEMKEY, 1); //Obtener el id de un semáforo
if ($sem_id === false)
{
    echo "Fail to get semaphore";
    exit;
}
else{
    echo "Got semaphore $sem_id.\n";

}
// Accuire semaphore
if (! sem_acquire($sem_id)) //Adquirir un semáforo
{
    echo "Fail to aquire semaphore $sem_id.\n";
    sem_remove($sem_id); //Eliminar un semáforo
    exit;
}
else{
    echo "Success aquire semaphore $sem_id.\n";
}
$shm_id =   shm_attach($SHMKEY, $MEMSIZE); //Crea o abre un segmento de memoria compartida
if ($shm_id === false) //Eliminar un semáforo
{
    echo "Fail to attach shared memory.\n";
    sem_remove($sem_id);
    exit;
}
else{
    echo "Success to attach shared memory : $shm_id.\n";
}
// Write variable 1
if (!shm_put_var($shm_id, 1, "Variable 1")) //Inserta o actualiza una variable en la memoria compartida
{
    echo "Fail to put var 1 on shared memory $shm_id.\n";
    sem_remove($sem_id);
    shm_remove ($shm_id);
    exit;
}
else{
    echo "Write var1 to shared memory.\n";
}
// Write variable 2
if (!shm_put_var($shm_id, 2, "Variable 2")) //Inserta o actualiza una variable en la memoria compartida
{
    echo "Fail to put var 2 on shared memory $shm_id.\n";
    sem_remove($sem_id);
    shm_remove ($shm_id);
    exit;
}
else{
    echo "Write var2 to shared memory.\n";
}
// Read variable 1
$var1   =   shm_get_var ($shm_id, 1); //Devuelve una variable desde la memoria compartida
if ($var1 === false)
{
    echo "Fail to retrive Var 1 from Shared memory $shm_id, return value=$var1.\n";
}
else{
    echo "Read var1=$var1.\n";
}
// Read variable 1
$var2   =   shm_get_var ($shm_id, 2);
if ($var1 === false)
{
    echo "Fail to retrive Var 2 from Shared memory $shm_id, return value=$var2.\n";
}
else{
    echo "Read var2=$var2.\n";
}
// Release semaphore
if (!sem_release($sem_id)){ //Liberar un semáforo
    echo "Fail to release $sem_id semaphore.\n";
}
else{
    echo "Semaphore $sem_id released.\n";
}
// remove shared memory segmant from SysV
if (shm_remove ($shm_id)){
    echo "Shared memory successfully removed from SysV.\n";
}
else{
    echo "Fail to remove $shm_id shared memory from SysV.\n";
}
// Remove semaphore
if (sem_remove($sem_id)){
    echo "semaphore removed successfully from SysV.\n";
}
else{
    echo "Fail to remove $sem_id semaphore from SysV.\n";
echo "End.\n";
}



?>