function maxScales(arr) {

    if (!Array.isArray(arr) || arr.length % 2 !== 0) {
        throw new Error('Wrong format')
    }

    let containerValue = -Infinity;
    let containerIndex = -1;

    for (let index = 0; index < arr.length; index++) {
        const number = arr[index]

        if (number > containerValue) {
            containerValue = number;
            containerIndex = index

        }

    }

    return {
        value: containerValue,
        index: containerIndex,
    }
}

maxScales(
    [100, 100, 100, 100, 100, 100, 100, 125]
)
