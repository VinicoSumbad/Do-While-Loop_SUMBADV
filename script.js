do {
    name = prompt("Enter your name:");
} while (!name || name.trim().length === 0);


let n = name.length > 2 ? name.length : 5;

let i = 1;


do {
    let j = 1;
    let row = " ".repeat((n - i) / 2);

    do {
        row += "* ";
        j++;
    } while (j <= i);

    console.log(row);
    i += 2;
} while (i <= n);

i = n - 2;


do {
    let j = 1;
    let row = " ".repeat((n - i) / 2);

    do {
        row += "* ";
        j++;
    } while (j <= i);

    console.log(row);
    i -= 2;
} while (i >= 1);