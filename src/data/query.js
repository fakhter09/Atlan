export const queries = [
    {

        label: "SELECT * FROM customers;",
        value: 1
    },
    {

        label: "SELECT * FROM customers WHERE ContactName= 'Laurence Lebihan';",
        value: 2
    },
    {

        label: "SELECT * FROM customers WHERE country= 'Spain';",
        value: 3
    },
    {
        label: "SELECT * FROM customers WHERE contactTitle= 'Owner' and city='Mexico D.F.';",
        value: 4
    },
    {
        label: "SELECT * FROM customers WHERE city= 'México D.F.';",
        value: 5
    },
    {
        label: "SELECT * FROM customers WHERE address= 'Cerrito 333';",
        value: 6
    }
]