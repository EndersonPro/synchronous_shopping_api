import { ResultRepository } from "../../contracts/ResultRepository";

let nodes_visite = new Set();
let distanceMatrix = [];

const push = (vn, vm, vv) => {
    if (distanceMatrix[vn][vm] <= vv) return;
    const mp = [distanceMatrix[vn][vm], [vn,vm]]
    const el = findInSet(nodes_visite, mp)
    if (el !== Array.from(nodes_visite.values()).pop()) {
        nodes_visite.delete(el)
    }
    distanceMatrix[vn][vm] = vv;
    mp[0] = vv;
    nodes_visite.add(mp)
}

const findInSet = (set, query) => Array.from(set).find( element => query[0] === element[0]);

interface IOptions {
    n: number,
    k: number,
    centers: number[][],
    roads: number[][]
    m?: number,
}

const getMinimiumTime = async (resultRepository: ResultRepository, options: IOptions) => {
    try {
        const { n, k, centers, roads } = options;
        
        const resultModel = {
            n,
            k,
            m: roads.length,
            centers: JSON.stringify(centers),
            roads: JSON.stringify(roads),
            result: 0
        };

        // const r = await resultRepository.

        const INF = 1000000000
        let a = [];
        let adj = []
        if (centers.length !== n) throw new Error('El numero de centros comerciales no coinciden con la cantidad de datos de peces');
        for (let i = 1; i <= n; i++) {
            for (let j = 1; j <= centers[i-1][0]; j++) {
                a[i] |= (1 << (centers[i-1][1] - 1))
            }
        }
        for (let i = 0; i < roads.length; i++){
            const x = roads[i][0];
            const y = roads[i][1];
            const z = roads[i][2];
            if (!adj[x]) adj[x] = [];
            adj[x].push([y,z]);
            if (!adj[y]) adj[y] = [];
            adj[y].push([x,z]);
        }
        for (let i = 1; i <= n; i++) {
            distanceMatrix[i] = []
            for (let j = 0; j < ( 1 << k); j++)
                distanceMatrix[i][j] = INF
        }
        push(1, a[1], 0);
        while (nodes_visite.size > 0) {
            const vn = Array.from(nodes_visite)[0][1][0]
            const vm = Array.from(nodes_visite)[0][1][1]
            nodes_visite.delete(Array.from(nodes_visite)[0])
            for (let i = 0; i < adj[vn].length; i++) {
                push(adj[vn][i][0], vm | a[adj[vn][i][0]], distanceMatrix[vn][vm] + adj[vn][i][1])
            }
        }
        let ret = INF;
        for (let i = 0; i < (1 << k); i++) {
            for (let j = i; j < (1 << k); j++) {
                if (( i | j) == ((1 << k) - 1)) {
                    ret = Math.min(ret, Math.max(distanceMatrix[n][i], distanceMatrix[n][j]))
                }
            }
        }
        resultModel.result = ret;
        console.log(resultModel)
        return ret;
    } catch (error) {
        throw new Error('An error ocurred')
    }
};

export default getMinimiumTime;
