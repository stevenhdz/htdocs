def f(x):
    return 5*x**4 + 3*x - 8

def false_rule(f, a, b, tol=1e-2):
    fa, fb = f(a), f(b)
    if fa*fb > 0:
        raise Exception("No hay cambio de signo")
    
    while True:
        xr = b - fb*(a - b)/(fa - fb)
        fr = f(xr)
        if abs(fr) < tol:
            break
        if fa * fr < 0:
            b, fb = xr, fr
        else:
            a, fa = xr, fr
    return xr


if __name__ == "__main__":
    root = false_rule(f, 0, 2)
    print(f"La raíz es: {root}")