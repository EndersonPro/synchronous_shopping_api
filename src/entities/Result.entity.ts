export default class Result {
    
    public n: number;
    public m: number;
    public k: number;
    public centers: string;
    public roads: string;
    public result: number;
    
    constructor ({ n, m, k , centers, roads, result }) {
        this.n = n;
        this.m = m;
        this.k = k;
        this.centers = centers;
        this.roads = roads;
        this.result = result;
    }
}