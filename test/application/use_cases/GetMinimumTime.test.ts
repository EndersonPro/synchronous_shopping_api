// import { ResultRepository } from '../../../src/application/contracts/ResultRepository';
import getMinimumtime from '../../../src/application/use_cases/SynchronousShopping/GetMinimumTime'

test('should return minimum 30', async () => {
    // let resultRepository: ResultRepository;
    const n = 5; 
    const k = 5; 
    const centers = [ [ 1, 1 ], [ 1, 2 ], [ 1, 3 ], [ 1, 4 ], [ 1, 5 ] ];
    const roads = [
        [ 1, 2, 10 ],
        [ 1, 3, 10 ],
        [ 2, 4, 10 ],
        [ 3, 5, 10 ],
        [ 4, 5, 10 ]
    ];

    const result = await getMinimumtime(null, { n, k, centers, roads })

    expect(result).toEqual(30);
});

test('should return minimum 2989', async () => {
    // let resultRepository: ResultRepository;
    const n = 6; 
    const k = 4; 
    const centers = [ [ 1, 2 ], [ 1, 2 ], [ 1, 1 ], [ 2, 3, 4], [ 2, 3, 4], [ 1, 4 ] ];
    const roads = [
        [ 5, 4, 646 ],
        [ 4, 1, 997 ],
        [ 2, 1, 881 ],
        [ 2, 6, 114 ],
        [ 3, 1, 46 ]
    ];

    const result = await getMinimumtime(null, { n, k, centers, roads })

    expect(result).toEqual(2989);
})

test('should return minimum 1571', async () => {
    // let resultRepository: ResultRepository;
    const n = 9; 
    const k = 1; 
    const centers = [ [ 1, 1 ], [ 1, 1 ], [ 0 ], [ 0 ], [ 0 ], [ 1, 1 ], [ 0 ], [ 1, 1 ], [ 0 ] ];
    const roads = [
        [2, 3, 468],
        [7, 4, 209],
        [1, 6, 851],
        [8, 1, 994],
        [2, 9, 839],
        [4, 2, 652],
        [2, 5, 227],
        [8, 4, 653],
        [1, 2, 732],
        [5, 8, 910]
    ];

    const result = await getMinimumtime(null, { n, k, centers, roads })

    expect(result).toEqual(1571);
})
