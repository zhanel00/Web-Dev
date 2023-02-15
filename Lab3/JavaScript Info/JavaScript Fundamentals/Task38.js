function pow(x, n) {
    if (n == 0) {
        return 1;
    }
    for (let i = 1; i < n; i++) {
        x *= x;
    }
    return x;
}