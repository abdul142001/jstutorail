let a = 10; // Global scope

function example() {
    let a = 20; // Local scope (shadows the global 'a')
    console.log(a); // ✅ 20 (inner 'a' is used)
}

console.log(a)
example();
