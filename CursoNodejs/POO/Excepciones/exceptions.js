try {
    throw new Error('¡Esto es un error!');
} catch (error) {
    console.error('Se produjo un error:', error.message);
} finally {
    console.log('Este bloque siempre se ejecuta');
}