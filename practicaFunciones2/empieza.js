function empieza (palabra) {
    if (palabra.startsWith("pre")) {
        return true;
    }
    return false;
}

console.log(empieza("preparación")); 