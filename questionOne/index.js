const print = console.log


function maxScales(arr) {
    // GOALS . Bagaimanakah caranya mendapatkan 1 kelereng yang paling berat
    // A. Neraca 2 lengan
    // B. Maksimal dengan 2 kali proses menimbang

    if (!Array.isArray(arr) || arr.length % 2 !== 0) {
        throw new Error('Wrong format')
    }

    // POIN A : NERACA 2 LENGAN
    const middleIndex = Math.ceil(arr.length / 2) - 1;
    let firstHalf = 0;
    let secondHalf = 0;

    for (let index = 0; index < arr.length; index++) {
        const currentValue = array[index];
        if (index === middleIndex) {
            firstHalf += currentValue
        } else {
            secondHalf += currentValue
        }
    }



}




maxScales(
    [100, 100, 100, 100, 100, 100, 100, 125]
)
