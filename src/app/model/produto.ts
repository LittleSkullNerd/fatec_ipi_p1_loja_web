export class Produto {
    public produtoId: number;
    public codigo: number;
    public nome: string;
    public descritivo: string;
    public valor: number;
    public valorPromo: number;
    public destaque: number;
    public estoque: number;
    public imagemProduto: string;
    constructor(){
        this.produtoId = 0;
        this.codigo = 0;
        this.nome = "";
        this.descritivo = "";
        this.valor = 0;
        this.valorPromo = 0;
        this.destaque = 0;
        this.estoque = 0;
        this.imagemProduto = "";
    }
}
